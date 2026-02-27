import type { Metadata } from "next";
import VisasPageClient from "./VisasPageClient";

export const metadata: Metadata = {
  title: "Argentina Visa Guide 2026 - Find the Right Visa & Decision Tool",
  description: "Complete Argentina visa guide with interactive tools. Compare all visa types, calculate costs, estimate timelines, and find the right visa for your situation in 2026.",
  keywords: ["Argentina visa guide", "Argentina visa types", "Argentina immigration 2026", "digital nomad visa Argentina", "work visa Argentina", "retirement visa Argentina"],
  openGraph: {
    title: "Argentina Visa Guide 2026 - Find the Right Visa",
    description: "Interactive visa finder, cost calculator, and timeline estimator for all Argentina visa types.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas",
  },
};

export default function VisasPage() {
  return <VisasPageClient />;
}
