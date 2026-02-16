import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Expats Argentina | Your Complete Guide to Living in Argentina",
    template: "%s | Expats Argentina",
  },
  description: "The ultimate resource for expats moving to Argentina. Visa guides, cost of living data, neighborhood reviews, and expert advice for living in Buenos Aires and beyond.",
  keywords: ["expats Argentina", "living in Argentina", "move to Argentina", "Buenos Aires expats", "Argentina visa", "digital nomad Argentina"],
  authors: [{ name: "Expats Argentina" }],
  creator: "Expats Argentina",
  metadataBase: new URL("https://expatsargentina.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expatsargentina.com",
    siteName: "Expats Argentina",
    title: "Expats Argentina | Your Complete Guide to Living in Argentina",
    description: "The ultimate resource for expats moving to Argentina. Visa guides, cost of living data, neighborhood reviews, and expert advice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expats Argentina | Your Complete Guide to Living in Argentina",
    description: "The ultimate resource for expats moving to Argentina. Visa guides, cost of living data, neighborhood reviews, and expert advice.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
