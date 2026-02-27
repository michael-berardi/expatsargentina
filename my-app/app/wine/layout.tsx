import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Argentine Wine Guide for Expats - Regions, Grapes & Buying Tips",
  description:
    "Everything expats need to know about Argentine wine. From Malbec in Mendoza to Torrontes in Salta, learn about wine regions, grape varieties, where to buy, tasting experiences, and wine culture in Argentina.",
};

export default function WineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
