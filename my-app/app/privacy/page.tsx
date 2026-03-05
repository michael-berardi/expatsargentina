import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ShieldIcon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Expats Argentina. Learn how we collect, use, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: "https://expatsargentina.com/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <ShieldIcon size="sm" className="mr-1" />
              Last Updated: March 2026
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy matters to us. This policy explains what data we
              collect, how we use it, and your rights regarding your personal
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <article className="prose prose-lg max-w-3xl mx-auto">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                Expats Argentina (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates the website expatsargentina.com. This
                Privacy Policy describes how we collect, use, disclose, and
                safeguard your information when you visit our website. By
                accessing or using our site, you agree to the terms of this
                Privacy Policy.
              </p>
              <p className="text-muted-foreground">
                We are committed to protecting the personal information of our
                users, many of whom are expats navigating the complexities of
                relocating to Argentina. We understand the sensitivity of
                immigration-related inquiries and treat your data with the
                highest level of care.
              </p>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Information You Provide Directly
              </h3>
              <p className="text-muted-foreground mb-4">
                When you interact with our site, you may voluntarily provide
                personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Contact information:</strong> Your name and email
                  address when you use our contact form.
                </li>
                <li>
                  <strong>Inquiry details:</strong> Questions or comments you
                  submit through forms on the site, such as visa-related
                  inquiries or requests for recommendations.
                </li>
                <li>
                  <strong>Quiz responses:</strong> Answers you provide when using
                  our interactive tools like the visa finder quiz. These
                  responses are processed locally in your browser and are not
                  stored on our servers.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Information Collected Automatically
              </h3>
              <p className="text-muted-foreground mb-4">
                When you visit our site, certain information is collected
                automatically through cookies and similar technologies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Device and browser data:</strong> Browser type,
                  operating system, device type, screen resolution, and language
                  preferences.
                </li>
                <li>
                  <strong>Usage data:</strong> Pages visited, time spent on
                  pages, click patterns, referring URLs, and navigation paths
                  through the site.
                </li>
                <li>
                  <strong>IP address and location:</strong> Your approximate
                  geographic location derived from your IP address. We do not
                  collect precise geolocation data.
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to improve your
                browsing experience and analyze site traffic. The types of
                cookies we use include:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Essential Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                These are necessary for the website to function properly. They
                enable core features like page navigation, language preferences,
                and access to secure areas. You cannot opt out of essential
                cookies.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Analytics Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                We use Vercel Analytics to understand how visitors interact with
                our website. This service collects anonymized data about page
                views and site performance. Vercel Analytics is designed to be
                privacy-friendly and does not use cookies for cross-site
                tracking. You can learn more about Vercel&apos;s privacy
                practices at{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com/docs/analytics/privacy-policy
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Managing Cookies
              </h3>
              <p className="text-muted-foreground">
                Most web browsers allow you to control cookies through their
                settings. You can configure your browser to refuse all cookies,
                accept only first-party cookies, or delete cookies when you close
                your browser. Note that disabling cookies may affect some
                features of our website.
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>To provide and improve our services:</strong> Delivering the
                  content, guides, and tools you request, and improving the
                  overall user experience based on usage patterns.
                </li>
                <li>
                  <strong>To communicate with you:</strong> Responding to your inquiries,
                  providing information you have requested about living in
                  Argentina.
                </li>
                <li>
                  <strong>To analyze and optimize:</strong> Understanding how our site is
                  used so we can improve content, fix issues, and develop new
                  features that serve the expat community.
                </li>
                <li>
                  <strong>To ensure security:</strong> Protecting against malicious
                  activity, spam, and abuse of our services.
                </li>
              </ul>
              <p className="text-muted-foreground">
                We do not sell your personal information to third parties. We do
                not use your data for automated decision-making or profiling.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                Our website integrates with the following third-party services,
                each of which has its own privacy policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Vercel:</strong> Our hosting provider and analytics
                  platform. Vercel processes server logs and anonymized analytics
                  data.
                </li>
                <li>
                  <strong>Lucero Legal:</strong> When you click through to our
                  partner Lucero Legal for immigration assistance, you leave our
                  site and their privacy policy applies.{" "}
                  <a
                    href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Lucero Legal
                  </a>
                  .
                </li>
              </ul>
              <p className="text-muted-foreground">
                We carefully vet our third-party partners, but we are not
                responsible for their privacy practices. We encourage you to
                review the privacy policies of any third-party sites you visit
                through links on our website.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Data Retention
              </h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information only for as long as necessary
                to fulfill the purposes outlined in this policy. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Contact form submissions:</strong> Retained for up to
                  12 months after your last interaction, then deleted.
                </li>
                <li>
                  <strong>Analytics data:</strong> Anonymized analytics data is
                  retained for up to 24 months.
                </li>
              </ul>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Right to access:</strong> You can request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to rectification:</strong> You can ask us to
                  correct any inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to erasure:</strong> You can request that we
                  delete your personal data, subject to legal obligations.
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> You can ask us
                  to limit how we use your personal data.
                </li>
                <li>
                  <strong>Right to data portability:</strong> You can request
                  your data in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to object:</strong> You can object to the
                  processing of your personal data for certain purposes.
                </li>
              </ul>
              <p className="text-muted-foreground">
                To exercise any of these rights, please contact us using the
                information provided below. We will respond to your request
                within 30 days.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  SSL/TLS encryption for all data transmitted between your
                  browser and our servers.
                </li>
                <li>
                  Secure hosting infrastructure through Vercel with regular
                  security updates.
                </li>
                <li>
                  Limited access to personal data on a need-to-know basis among
                  our team.
                </li>
              </ul>
            </section>

            {/* Children */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground">
                Our website is not directed at children under the age of 16. We
                do not knowingly collect personal information from children. If
                you believe that a child has provided us with personal
                information, please contact us and we will promptly delete it.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                International Data Transfers
              </h2>
              <p className="text-muted-foreground">
                Our website is hosted on Vercel&apos;s global infrastructure,
                which means your data may be processed in different countries.
                Given the international nature of our audience (expats relocating
                to Argentina from around the world), data may be transferred to
                and processed in countries outside your country of residence. We
                ensure that appropriate safeguards are in place for such
                transfers, in compliance with applicable data protection laws.
              </p>
            </section>

            {/* Changes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal, technical, or regulatory
                reasons. When we make material changes, we will update the
                &quot;Last Updated&quot; date at the top of this page. We
                encourage you to review this page periodically for the latest
                information on our privacy practices.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, your
                personal data, or wish to exercise your rights, you can reach us
                at:
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="font-semibold mb-2">Expats Argentina</p>
                <p className="text-muted-foreground mb-1">
                  Email:{" "}
                  <a
                    href="mailto:privacy@expatsargentina.com"
                    className="text-primary hover:underline"
                  >
                    privacy@expatsargentina.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  You can also reach us through our{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
