import type { Metadata } from "next";
import HomepageClient from "./HomepageClient";

export const metadata: Metadata = {
  title: "Expats Argentina | Complete Guide to Living in Argentina",
  description: "The complete guide for expats moving to Argentina. Visa requirements, cost of living, neighborhoods, and expert advice for all 24 provinces. Start your journey here.",
  alternates: {
    canonical: "https://expatsargentina.com/",
  },
};

// JSON-LD structured data for homepage
function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://expatsargentina.com/#website",
        "url": "https://expatsargentina.com/",
        "name": "Expats Argentina",
        "description": "Complete guide to living in Argentina for expats",
        "publisher": {
          "@type": "Organization",
          "@id": "https://expatsargentina.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://expatsargentina.com/#organization",
        "name": "Expats Argentina",
        "url": "https://expatsargentina.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://expatsargentina.com/images/hero-argentina.webp"
        },
        "sameAs": [
          "https://twitter.com/expatsargentina"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <HomepageClient />
    </>
  );
}
