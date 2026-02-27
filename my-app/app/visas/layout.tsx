import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Argentina Visa Guide 2026 - All Visa Types, Requirements & Process",
  description: "Complete guide to Argentine visas for expats. Tourist entry, digital nomad visa, work permits, retirement, student, investment, temporary & permanent residency, and citizenship. Updated for 2026.",
  keywords: [
    "Argentina visa 2026",
    "Argentina digital nomad visa",
    "Argentina work permit",
    "Argentina retirement visa",
    "Argentina residency",
    "Argentina citizenship",
    "Argentina tourist visa extension",
    "Argentina permanent residency",
    "moving to Argentina visa requirements",
  ],
  openGraph: {
    title: "Argentina Visa Guide 2026 - Complete Requirements",
    description: "Every visa type for Argentina explained: digital nomad, work, retirement, student, and investment. Step-by-step process and 2026 requirements.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas",
  },
};

export default function VisasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
