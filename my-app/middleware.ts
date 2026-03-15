import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  assessRequestSecurity,
  buildBlockedResponse,
  reportSecurityAssessment,
} from "@/lib/security/request-guard";

const SITE_ID = "expats-argentina";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const assessment = assessRequestSecurity(request);

  if (assessment.telemetry) {
    event.waitUntil(
      reportSecurityAssessment({
        assessment,
        request,
        siteId: SITE_ID,
      })
    );
  }

  if (assessment.decision) {
    return buildBlockedResponse(assessment.decision);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest(?:\\.json|\\.webmanifest)?|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf|css|js|map|txt|xml|pdf)$).*)",
  ],
};
