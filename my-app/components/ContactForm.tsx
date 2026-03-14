"use client";

import Script from "next/script";
import { useCallback, useRef, useState } from "react";

const TURNSTILE_SITE_KEY = "0x4AAAAAACoCmeMPEb_yXo7j";
const API_URL = "https://www.lucerolegal.org/api/contact";
const SOURCE_SITE = "expatsargentina";

function trackEvent(name: string, params?: Record<string, string>) {
  const w = window as unknown as Record<string, unknown>;
  if (typeof window !== "undefined" && typeof w.gtag === "function") {
    (w.gtag as (...args: unknown[]) => void)("event", name, { event_category: "contact", source_site: SOURCE_SITE, ...params });
  }
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "Digital Nomad Visa", label: "Digital Nomad Visa" },
  { value: "Work Visa", label: "Work Visa" },
  { value: "Student Visa", label: "Student Visa" },
  { value: "Retirement Visa", label: "Retirement Visa" },
  { value: "Residency / Citizenship", label: "Residency / Citizenship" },
  { value: "Investment Visa", label: "Investment Visa" },
  { value: "General Inquiry", label: "General Inquiry" },
];

const INPUT_CLASS =
  "w-full rounded-lg border border-stone-300 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  const getTurnstileToken = useCallback((): string | null => {
    const input = turnstileRef.current?.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]'
    );
    return input?.value || null;
  }, []);

  const resetTurnstile = useCallback(() => {
    const w = window as unknown as Record<string, unknown>;
    if (typeof w.turnstile === "object" && w.turnstile !== null) {
      const ts = w.turnstile as { reset?: (el: HTMLElement) => void };
      if (turnstileRef.current && ts.reset) {
        ts.reset(turnstileRef.current);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const turnstileToken = getTurnstileToken();
    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the security check.");
      trackEvent("contact_form_error", { error_type: "captcha_missing" });
      return;
    }

    const fd = new FormData(e.currentTarget);
    const selectedService = (fd.get("service") as string) || "";
    trackEvent("contact_form_submit", { service: selectedService });

    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      country: fd.get("country") as string,
      service: fd.get("service") as string,
      message: fd.get("message") as string,
      sourceSite: SOURCE_SITE,
      source: "en",
      lang: "en",
      turnstileToken,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        resetTurnstile();
        trackEvent("contact_form_success", { service: selectedService });
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        trackEvent("contact_form_error", { error_type: "api_error" });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Connection error. Please check your internet and try again.");
      trackEvent("contact_form_error", { error_type: "network_error" });
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Thank you for reaching out. A member of our team will review your message and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <Script
        id="turnstile-api"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-foreground">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={INPUT_CLASS}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-foreground">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={INPUT_CLASS}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className="mb-1 block text-sm font-medium text-foreground">
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className={INPUT_CLASS}
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="cf-country" className="mb-1 block text-sm font-medium text-foreground">
            Country of Origin
          </label>
          <input
            id="cf-country"
            name="country"
            type="text"
            autoComplete="country-name"
            placeholder="e.g., United States"
            className={INPUT_CLASS}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="cf-service" className="mb-1 block text-sm font-medium text-foreground">
            What can we help with?
          </label>
          <select
            id="cf-service"
            name="service"
            className={INPUT_CLASS}
            defaultValue=""
          >
            <option value="" disabled>
              Select a topic...
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="mb-1 block text-sm font-medium text-foreground">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your situation..."
            className={`${INPUT_CLASS} resize-y`}
          />
        </div>

        {/* Turnstile */}
        <div
          ref={turnstileRef}
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="light"
        />

        {/* Error */}
        {status === "error" && errorMessage && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        )}

        {/* Confidential note */}
        <p className="text-xs text-muted-foreground">
          Your information is confidential and will only be used to respond to your inquiry.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
