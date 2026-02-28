import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  ArrowRightLeftIcon,
  FileTextIcon,
  GlobeIcon,
} from "@/components/ui/icon";
import { visaComparisons } from "@/lib/data/visa-comparisons";

export const metadata: Metadata = {
  title: "Compare Argentina Visa Types for Expats | Expats Argentina",
  description:
    "Side-by-side comparisons of Argentina's visa options. Compare digital nomad, work, retirement, investment, and student visas to find the right one for your move.",
  keywords: [
    "compare Argentina visas",
    "Argentina visa comparison",
    "digital nomad vs work visa Argentina",
    "best visa for Argentina",
    "Argentina visa types compared",
  ],
  openGraph: {
    title: "Compare Argentina Visa Types for Expats",
    description:
      "Side-by-side comparisons of Argentina's visa options. Digital nomad, work, retirement, investment, and student visas compared.",
  },
  alternates: { canonical: "https://expatsargentina.com/visas/compare" },
};

export default function VisaCompareIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">
              Visas
            </Link>
            <span>/</span>
            <span className="text-foreground">Compare</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <ArrowRightLeftIcon size="sm" className="mr-1" />
              Visa Comparisons
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare Argentina&apos;s Visa Types
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Not sure which Argentine visa is right for you? Our head-to-head
              comparisons break down processing times, costs, requirements, and
              long-term potential to help you make the best decision.
            </p>
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visaComparisons.map((comparison) => {
              // Count wins
              let visa1Wins = 0;
              let visa2Wins = 0;
              comparison.categories.forEach((cat) => {
                if (cat.winner === "visa1") visa1Wins++;
                else if (cat.winner === "visa2") visa2Wins++;
              });

              return (
                <Link
                  key={comparison.slug}
                  href={`/visas/compare/${comparison.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    {/* Header with visa names */}
                    <div className="bg-gradient-to-r from-teal-500 to-indigo-500 p-6 text-white">
                      <div className="flex items-center justify-center gap-3 text-xl font-bold">
                        <span className="text-center">
                          {comparison.visa1.name}
                        </span>
                        <span className="text-white/70 text-lg">vs</span>
                        <span className="text-center">
                          {comparison.visa2.name}
                        </span>
                      </div>
                    </div>

                    <CardContent className="pt-6 flex flex-col gap-4">
                      {/* Description */}
                      <p className="text-base md:text-sm text-muted-foreground line-clamp-3">
                        {comparison.description}
                      </p>

                      {/* Category win counts */}
                      <div className="flex items-center justify-center gap-4 py-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-teal-600">
                            {visa1Wins}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {comparison.visa1.name} wins
                          </div>
                        </div>
                        <div className="text-muted-foreground text-sm">-</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-indigo-600">
                            {visa2Wins}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {comparison.visa2.name} wins
                          </div>
                        </div>
                      </div>

                      {/* Top categories preview */}
                      <div className="flex flex-wrap gap-1.5">
                        {comparison.categories.slice(0, 4).map((cat) => (
                          <Badge
                            key={cat.name}
                            variant="secondary"
                            className="text-xs"
                          >
                            {cat.name}
                          </Badge>
                        ))}
                        {comparison.categories.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{comparison.categories.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-1 text-base md:text-sm font-medium text-primary mt-auto pt-2">
                        <span>View Full Comparison</span>
                        <ArrowRightIcon
                          size="sm"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Explore Individual Visa Types?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our detailed visa guides with step-by-step requirements,
              costs, timelines, and practical tips for each visa category.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/visas">
                  <FileTextIcon size="sm" className="mr-2" />
                  All Visa Guides
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cost-of-living">
                  <GlobeIcon size="sm" className="mr-2" />
                  Cost of Living Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
