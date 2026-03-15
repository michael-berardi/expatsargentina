import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SparklesIcon,
  FileTextIcon,
  WalletIcon,
  HomeIcon,
  BriefcaseIcon,
  CreditCardIcon,
  ArrowRightIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Expat Guides | Step-by-Step Guides for Living in Argentina",
  description:
    "Practical, step-by-step guides for every stage of your move to Argentina. Visas, banking, housing, DNI, taxes, and more — written by expats who have done it.",
  keywords: [
    "Argentina expat guides",
    "moving to Argentina",
    "Argentina relocation",
    "expat guide Argentina",
    "living in Argentina guide",
  ],
  openGraph: {
    title: "Expat Guides — Everything You Need to Move to Argentina",
    description:
      "Practical, step-by-step guides covering visas, banking, housing, DNI, taxes, and daily life in Argentina.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/",
  },
};

const guides = [
  {
    title: "Getting Started",
    description:
      "The complete step-by-step roadmap for your move. From initial research and visa planning through your first month on the ground.",
    href: "/guides/getting-started",
    icon: SparklesIcon,
    badge: "Start Here",
    readTime: "15 min",
  },
  {
    title: "Visas & Residency",
    description:
      "Every visa option explained: digital nomad, work, retirement, student, investment, and Mercosur. Requirements, costs, timelines, and which one fits your situation.",
    href: "/guides/visas",
    icon: FileTextIcon,
    badge: "Essential",
    readTime: "12 min",
  },
  {
    title: "Getting Your DNI",
    description:
      "Step-by-step guide to obtaining your DNI (national ID number). Required for bank accounts, phone contracts, leases, and daily life in Argentina.",
    href: "/guides/getting-dni",
    icon: CreditCardIcon,
    badge: "Essential",
    readTime: "8 min",
  },
  {
    title: "Banking & Money",
    description:
      "How to open an Argentine bank account, navigate exchange rates, use MercadoPago, transfer money internationally, and handle the peso economy.",
    href: "/guides/banking",
    icon: WalletIcon,
    readTime: "10 min",
  },
  {
    title: "Finding Housing",
    description:
      "Renting in Argentina: the garantía system, temporary vs. long-term leases, where to search, what to expect, and how to avoid common pitfalls.",
    href: "/guides/housing",
    icon: HomeIcon,
    readTime: "10 min",
  },
  {
    title: "Working & Taxes",
    description:
      "Employment options, freelancing, monotributo registration, tax obligations for residents and non-residents, and how to stay compliant with ARCA.",
    href: "/guides/working-taxes",
    icon: BriefcaseIcon,
    readTime: "12 min",
  },
];

export default function GuidesPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          6 Practical Guides
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Expat Guides
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Step-by-step guides for every stage of your move to Argentina. Written
          from firsthand experience — no filler, no fluff, just what you
          actually need to know.
        </p>
      </div>

      {/* Suggested reading order */}
      <div className="mb-10 rounded-lg border bg-muted/40 p-6">
        <h2 className="mb-2 text-lg font-semibold">Suggested Reading Order</h2>
        <p className="text-sm text-muted-foreground">
          If you are planning a move, start with{" "}
          <Link
            href="/guides/getting-started"
            className="font-medium text-primary underline underline-offset-4"
          >
            Getting Started
          </Link>
          , then read{" "}
          <Link
            href="/guides/visas"
            className="font-medium text-primary underline underline-offset-4"
          >
            Visas & Residency
          </Link>{" "}
          to choose your visa path. Once you arrive, the{" "}
          <Link
            href="/guides/getting-dni"
            className="font-medium text-primary underline underline-offset-4"
          >
            DNI
          </Link>
          ,{" "}
          <Link
            href="/guides/banking"
            className="font-medium text-primary underline underline-offset-4"
          >
            Banking
          </Link>
          , and{" "}
          <Link
            href="/guides/housing"
            className="font-medium text-primary underline underline-offset-4"
          >
            Housing
          </Link>{" "}
          guides will walk you through settling in.
        </p>
      </div>

      {/* Guide Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.href} href={guide.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/40">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <guide.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {guide.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {guide.badge}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {guide.readTime} read
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read guide{" "}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center sm:p-12">
        <h2 className="mb-3 text-2xl font-bold">Not sure where to start?</h2>
        <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
          Take our visa quiz to find the best residency option for your
          situation, or explore our city guides to decide where to live.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/visas/quiz">Take the Visa Quiz</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cities">Explore Cities</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
