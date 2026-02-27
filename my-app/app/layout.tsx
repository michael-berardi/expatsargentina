import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Expats Argentina | Guide to Living in Argentina",
    template: "%s | Expats Argentina",
  },
  description: "Visa guides, cost of living, and expert advice for expats in all 24 provinces of Argentina. Not just Buenos Aires.",
  keywords: ["expats Argentina", "living in Argentina", "move to Argentina", "Buenos Aires expats", "Argentina visa", "digital nomad Argentina"],
  authors: [{ name: "Expats Argentina" }],
  creator: "Expats Argentina",
  metadataBase: new URL("https://expatsargentina.com"),
  other: {
    "theme-color": "#0d9488",
    "apple-mobile-web-app-status-bar-style": "default",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expatsargentina.com",
    siteName: "Expats Argentina",
    title: "Expats Argentina | Your Complete Guide to Living in Argentina",
    description: "Visa guides, cost of living, and expert advice for expats in all 24 provinces of Argentina.",
    images: [{ url: "/images/hero-argentina.webp", width: 1920, height: 550 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expats Argentina | Your Complete Guide to Living in Argentina",
    description: "Visa guides, cost of living, and expert advice for expats in all 24 provinces of Argentina.",
    images: ["/images/hero-argentina.webp"],
  },
  alternates: {
    canonical: "https://expatsargentina.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Expats Argentina",
                url: "https://expatsargentina.com",
                description:
                  "Visa guides, cost of living, and expert advice for expats in all 24 provinces of Argentina.",
                publisher: {
                  "@type": "Organization",
                  name: "Expats Argentina",
                  url: "https://expatsargentina.com",
                },
              }),
            }}
          />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}
