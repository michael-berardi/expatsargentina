import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export type BlockDecision = {
  body: string;
  reason: string;
  status: 403 | 404;
};

export type SecurityDisposition = "allow" | "suspicious" | "block";
export type SecuritySeverity = "low" | "medium" | "high" | "critical";
export type SecurityConfidence = "medium" | "high";

export type RequestSecurityAssessment = {
  decision: BlockDecision | null;
  disposition: SecurityDisposition;
  telemetry: SecurityTelemetryEvent | null;
};

type SecurityTelemetryEvent = {
  action: "blocked" | "suspicious";
  confidence: SecurityConfidence;
  country: string | null;
  path: string;
  reason: string;
  severity: SecuritySeverity;
  userAgentFamily: string;
};

type ReporterContext = {
  assessment: RequestSecurityAssessment;
  request: NextRequest;
  siteId: string;
};

type SecurityBlobEvent = {
  action: "blocked" | "suspicious";
  confidence: SecurityConfidence;
  country: string | null;
  host: string;
  internal: boolean;
  method: string;
  path: string;
  reason: string;
  sessionId: string;
  severity: SecuritySeverity;
  siteId: string;
  t?: number;
  timestamp: number;
  userAgentFamily: string;
};

const ALLOWED_BOT_PATTERNS = [
  // Search engines
  /Googlebot/i,
  /GoogleOther/i,
  /Google-InspectionTool/i,
  /AdsBot-Google/i,
  /bingbot/i,
  /Applebot/i,
  /DuckDuckBot/i,
  /YandexBot/i,
  /Baiduspider/i,
  /Sogou/i,
  // AI search (SEO beneficial — drives referral traffic)
  /Claude-SearchBot/i,
  /OAI-SearchBot/i,
  /PerplexityBot/i,
  // Social previews
  /LinkedInBot/i,
  /Slackbot/i,
  /Discordbot/i,
  /TelegramBot/i,
  /Twitterbot/i,
  /facebookexternalhit/i,
  /meta-webindexer/i,
  /WhatsApp/i,
  // Monitoring & infrastructure
  /UptimeRobot/i,
  /Better Uptime/i,
  /Pingdom/i,
  /vercel-screenshot/i,
  /OverseerAgentSiteFetch/i,
];

const BLOCKED_AUTOMATION_PATTERNS = [
  /HeadlessChrome/i,
  /Playwright/i,
  /Puppeteer/i,
  /Selenium/i,
  /PhantomJS/i,
  /Cypress/i,
  /python-requests/i,
  /httpx/i,
  /aiohttp/i,
  /curl\/\d/i,
  /wget\/\d/i,
  /scrapy/i,
  /Go-http-client/i,
  /libwww-perl/i,
  /axios/i,
  /node-fetch/i,
  /undici/i,
  /^node$/i,
  /okhttp/i,
  /Apache-HttpClient/i,
  // AI training scrapers (NOT search — block these)
  /GPTBot/i,
  /ClaudeBot/i,
  /CCBot/i,
  /Bytespider/i,
  /Amazonbot/i,
  /Diffbot/i,
  /Meta-ExternalAgent/i,
  /Meta-ExternalFetcher/i,
];

const BLOCKED_PATH_PATTERNS = [
  /^\/(?:wp-admin|wp-login\.php|wp-includes|wp-content|xmlrpc\.php|wordpress)(?:\/|$)/i,
  /^\/(?:phpmyadmin|pma|adminer|administrator)(?:\/|$)/i,
  /^\/(?:\.env|\.git|\.hg|\.svn|\.DS_Store|\.htaccess|\.htpasswd)(?:\/|$)/i,
  /^\/(?:vendor\/phpunit|cgi-bin|server-status|boaform|HNAP1|actuator)(?:\/|$)/i,
  /^\/(?:aws|_profiler|debug|console|shell|cmd|eval)(?:\/|$)/i,
  /^\/(?:config\.php|configuration\.php|web\.config|database\.yml)(?:\/|$)/i,
  /^\/(?:backup|bak|old|dump|sql)(?:\/|$)/i,
];

const HTML_METHODS = new Set(["GET", "HEAD"]);
const INTERNAL_TRAFFIC_QUERY_KEY = "overseer_internal";
const INTERNAL_TRAFFIC_COOKIE = "overseer_internal_traffic";
const SECURITY_REPORT_DEDUP_WINDOW_MS = 10 * 60 * 1000;
const SECURITY_REPORT_MAX_CACHE_ENTRIES = 512;
const BROWSER_USER_AGENT_PATTERN =
  /(Mozilla\/5\.0|Chrome\/|CriOS\/|Safari\/|Firefox\/|FxiOS\/|Edg\/|OPR\/)/i;
const securityReportCache = new Map<string, number>();

function normalizeEnvToken(value: string | undefined) {
  return value?.replace(/\s+/g, "") || "";
}

function getCountryBlocklist() {
  return new Set(
    (process.env.SECURITY_BLOCK_COUNTRIES ?? "")
      .split(",")
      .map((value) => value.trim().toUpperCase())
      .filter(Boolean)
  );
}

function hasTrustedInternalHeader(request: NextRequest) {
  const bypassToken = process.env.OVERSEER_SECURITY_BYPASS_TOKEN?.trim();

  if (!bypassToken) {
    return false;
  }

  return ["x-overseer-bypass", "x-overseer-internal"].some(
    (header) => request.headers.get(header) === bypassToken
  );
}

function isInternalRequest(request: NextRequest) {
  if (hasTrustedInternalHeader(request)) {
    return true;
  }

  if (request.nextUrl.searchParams.get(INTERNAL_TRAFFIC_QUERY_KEY) === "0") {
    return false;
  }

  return request.cookies.get(INTERNAL_TRAFFIC_COOKIE)?.value === "1";
}

function isHtmlPageRequest(request: NextRequest) {
  if (!HTML_METHODS.has(request.method.toUpperCase())) {
    return false;
  }

  if (request.nextUrl.pathname.startsWith("/api")) {
    return false;
  }

  const accept = request.headers.get("accept") ?? "";
  return accept.includes("text/html") || accept.includes("*/*") || accept === "";
}

function getRequestCountry(request: NextRequest) {
  const country =
    request.headers.get("x-vercel-ip-country") ?? request.headers.get("cf-ipcountry");
  return country ? country.toUpperCase() : null;
}

function getUserAgentFamily(userAgent: string) {
  if (!userAgent) {
    return "missing";
  }

  if (ALLOWED_BOT_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return "allowed_bot";
  }

  if (BLOCKED_AUTOMATION_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return "blocked_automation";
  }

  if (BROWSER_USER_AGENT_PATTERN.test(userAgent)) {
    return "browser";
  }

  return "unknown_client";
}

function getBrowserSignalScore(request: NextRequest) {
  let score = 0;

  if (request.headers.get("accept-language")) {
    score += 1;
  }

  if (request.headers.get("sec-fetch-mode")) {
    score += 1;
  }

  if (request.headers.get("sec-fetch-site")) {
    score += 1;
  }

  if (request.headers.get("sec-ch-ua")) {
    score += 1;
  }

  if (request.headers.get("upgrade-insecure-requests") === "1") {
    score += 1;
  }

  return score;
}

function buildAssessment(
  request: NextRequest,
  disposition: Exclude<SecurityDisposition, "allow">,
  reason: string,
  options: {
    confidence: SecurityConfidence;
    decision?: BlockDecision;
    severity: SecuritySeverity;
  }
): RequestSecurityAssessment {
  const userAgent = request.headers.get("user-agent") ?? "";
  const country = getRequestCountry(request);

  return {
    decision: options.decision ?? null,
    disposition,
    telemetry: {
      action: disposition === "block" ? "blocked" : "suspicious",
      confidence: options.confidence,
      country,
      path: request.nextUrl.pathname,
      reason,
      severity: options.severity,
      userAgentFamily: getUserAgentFamily(userAgent),
    },
  };
}

export function assessRequestSecurity(request: NextRequest): RequestSecurityAssessment {
  if (isInternalRequest(request)) {
    return {
      decision: null,
      disposition: "allow",
      telemetry: null,
    };
  }

  const pathname = request.nextUrl.pathname;

  if (BLOCKED_PATH_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return buildAssessment(request, "block", "probe-path", {
      confidence: "high",
      decision: {
        body: "Not Found",
        reason: "probe-path",
        status: 404,
      },
      severity: "critical",
    });
  }

  const country = getRequestCountry(request);
  if (country && getCountryBlocklist().has(country)) {
    return buildAssessment(request, "block", "blocked-country", {
      confidence: "high",
      decision: {
        body: "Forbidden",
        reason: "blocked-country",
        status: 403,
      },
      severity: "high",
    });
  }

  if (!isHtmlPageRequest(request)) {
    return {
      decision: null,
      disposition: "allow",
      telemetry: null,
    };
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (!userAgent) {
    return buildAssessment(request, "block", "missing-user-agent", {
      confidence: "high",
      decision: {
        body: "Forbidden",
        reason: "missing-user-agent",
        status: 403,
      },
      severity: "high",
    });
  }

  if (ALLOWED_BOT_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return {
      decision: null,
      disposition: "allow",
      telemetry: null,
    };
  }

  if (BLOCKED_AUTOMATION_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return buildAssessment(request, "block", "automation-user-agent", {
      confidence: "high",
      decision: {
        body: "Forbidden",
        reason: "automation-user-agent",
        status: 403,
      },
      severity: "high",
    });
  }

  const userAgentFamily = getUserAgentFamily(userAgent);
  if (userAgentFamily === "unknown_client") {
    return buildAssessment(request, "suspicious", "unknown-client", {
      confidence: "high",
      severity: "medium",
    });
  }

  const browserSignalScore = getBrowserSignalScore(request);
  if (
    userAgentFamily === "browser" &&
    !request.headers.get("accept-language") &&
    browserSignalScore <= 1
  ) {
    return buildAssessment(request, "suspicious", "low-browser-fidelity", {
      confidence: "medium",
      severity: "low",
    });
  }

  return {
    decision: null,
    disposition: "allow",
    telemetry: null,
  };
}

export function evaluateBlockedRequest(request: NextRequest): BlockDecision | null {
  return assessRequestSecurity(request).decision;
}

function getSecurityReporterUrl() {
  return process.env.OVERSEER_SECURITY_REPORTER_URL?.trim() || "";
}

function getSecurityReporterToken() {
  return normalizeEnvToken(process.env.OVERSEER_SECURITY_REPORTER_TOKEN);
}

async function postSecurityEvent(
  payload: SecurityBlobEvent,
  reporterUrl: string,
  reporterToken: string
) {
  const response = await fetch(reporterUrl, {
    body: JSON.stringify(payload),
    cache: "no-store",
    headers: {
      authorization: `Bearer ${reporterToken}`,
      "content-type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Security reporter failed with status ${response.status}`);
  }
}

function pruneSecurityReportCache(now: number) {
  for (const [key, expiresAt] of securityReportCache) {
    if (expiresAt <= now) {
      securityReportCache.delete(key);
    }
  }

  if (securityReportCache.size <= SECURITY_REPORT_MAX_CACHE_ENTRIES) {
    return;
  }

  const overflow = securityReportCache.size - SECURITY_REPORT_MAX_CACHE_ENTRIES;
  let dropped = 0;
  for (const key of securityReportCache.keys()) {
    securityReportCache.delete(key);
    dropped += 1;
    if (dropped >= overflow) {
      break;
    }
  }
}

function buildSecurityReportFingerprint({
  assessment,
  request,
  siteId,
}: ReporterContext) {
  const telemetry = assessment.telemetry;
  if (!telemetry) {
    return null;
  }

  return [
    siteId,
    request.nextUrl.hostname.toLowerCase(),
    telemetry.action,
    telemetry.reason,
    telemetry.path,
    telemetry.country ?? "unknown",
    telemetry.userAgentFamily,
  ].join("|");
}

function shouldPersistSecurityAssessment(context: ReporterContext) {
  const { assessment } = context;
  const telemetry = assessment.telemetry;

  if (!telemetry || assessment.disposition === "allow") {
    return false;
  }

  if (telemetry.action === "suspicious" && telemetry.severity === "low") {
    return false;
  }

  const fingerprint = buildSecurityReportFingerprint(context);
  if (!fingerprint) {
    return false;
  }

  const now = Date.now();
  pruneSecurityReportCache(now);

  const expiresAt = securityReportCache.get(fingerprint);
  if (expiresAt && expiresAt > now) {
    return false;
  }

  securityReportCache.set(fingerprint, now + SECURITY_REPORT_DEDUP_WINDOW_MS);
  return true;
}

function buildSessionFingerprint(request: NextRequest) {
  const forwardedFor =
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-vercel-forwarded-for") ??
    "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  return `${forwardedFor}|${userAgent.slice(0, 160)}`;
}

export async function reportSecurityAssessment({
  assessment,
  request,
  siteId,
}: ReporterContext) {
  if (!shouldPersistSecurityAssessment({ assessment, request, siteId })) {
    return;
  }

  const telemetry = assessment.telemetry;
  if (!telemetry) {
    return;
  }

  try {
    const createdAt = new Date();
    const createdAtIso = createdAt.toISOString();
    const event: SecurityBlobEvent = {
      action: telemetry.action,
      confidence: telemetry.confidence,
      country: telemetry.country,
      host: request.nextUrl.hostname,
      internal: false,
      method: request.method.toUpperCase(),
      path: telemetry.path,
      reason: telemetry.reason,
      sessionId: buildSessionFingerprint(request),
      severity: telemetry.severity,
      siteId,
      t: createdAt.getTime(),
      timestamp: createdAt.getTime(),
      userAgentFamily: telemetry.userAgentFamily,
    };

    const reporterUrl = getSecurityReporterUrl();
    const reporterToken = getSecurityReporterToken();
    if (!reporterUrl || !reporterToken) {
      return;
    }

    await postSecurityEvent(event, reporterUrl, reporterToken);
  } catch {
    // Security telemetry should never block the visitor response path.
  }
}

export function buildBlockedResponse(decision: BlockDecision) {
  const response = new NextResponse(decision.body, { status: decision.status });
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
