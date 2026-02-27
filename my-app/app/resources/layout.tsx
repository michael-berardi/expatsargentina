import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expat Resources in Argentina - Apps, Services & Essential Tools",
  description: "Curated directory of essential resources for expats in Argentina. Apps, services, legal help, healthcare, banking tools, and community groups.",
  keywords: [
    "Argentina expat resources",
    "Buenos Aires apps",
    "expat services Argentina",
    "Argentina essential apps",
    "expat tools Argentina",
  ],
  alternates: {
    canonical: "https://expatsargentina.com/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
