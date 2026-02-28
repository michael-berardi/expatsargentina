import type { Metadata } from "next";
import HomepageClient from "./HomepageClient";

export const metadata: Metadata = {
  title: "Expats Argentina | Complete Guide to Living in Argentina",
  description: "The complete guide for expats moving to Argentina. Visa requirements, cost of living, neighborhoods, and expert advice for all 24 provinces. Start your journey here.",
  alternates: {
    canonical: "https://expatsargentina.com/",
  },
};

export default function HomePage() {
  return <HomepageClient />;
}
