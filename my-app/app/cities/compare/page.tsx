import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  ArrowRightLeftIcon,
  GlobeIcon,
  MapPinIcon,
} from "@/components/ui/icon";
import { cityComparisons, getComparisonCities } from "@/lib/data/comparisons";

export const metadata: Metadata = {
  title: "Compare Argentine Cities for Expats | Expats Argentina",
  description:
    "Side-by-side comparisons of Argentina's top expat cities. Compare cost of living, safety, nightlife, internet, and lifestyle to find your ideal city.",
  keywords: [
    "compare Argentina cities",
    "Buenos Aires vs Mendoza",
    "best city for expats Argentina",
    "Argentina city comparison",
    "where to live in Argentina",
  ],
  openGraph: {
    title: "Compare Argentine Cities for Expats",
    description:
      "Side-by-side comparisons of Argentina's top expat cities. Cost of living, safety, nightlife, internet, and lifestyle.",
    images: [{ url: "/images/hero-argentina.webp", width: 1920, height: 550 }],
  },
  alternates: { canonical: "https://expatsargentina.com/cities/compare" },
};

export default function CompareIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-foreground">
              Cities
            </Link>
            <span>/</span>
            <span className="text-foreground">Compare</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <ArrowRightLeftIcon size="sm" className="mr-1" />
              City Comparisons
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare Argentina&apos;s Top Expat Cities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Not sure which Argentine city is right for you? Our head-to-head
              comparisons break down cost of living, safety, nightlife, internet,
              outdoor access, and more to help you decide.
            </p>
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cityComparisons.map((comparison) => {
              const { city1, city2 } = getComparisonCities(comparison);

              // Calculate overall winners
              let city1Wins = 0;
              let city2Wins = 0;
              comparison.categories.forEach((cat) => {
                if (cat.city1Score > cat.city2Score) city1Wins++;
                else if (cat.city2Score > cat.city1Score) city2Wins++;
              });

              return (
                <Link
                  key={comparison.slug}
                  href={`/cities/compare/${comparison.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    {/* Header with city names */}
                    <div className="bg-gradient-to-r from-teal-500 to-indigo-500 p-6 text-white">
                      <div className="flex items-center justify-center gap-3 text-2xl font-bold">
                        <span>{city1?.name ?? comparison.city1Slug}</span>
                        <span className="text-white/70 text-lg">vs</span>
                        <span>{city2?.name ?? comparison.city2Slug}</span>
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
                          <div className="text-2xl font-bold text-teal-600">{city1Wins}</div>
                          <div className="text-xs text-muted-foreground">
                            {city1?.name ?? "City 1"} wins
                          </div>
                        </div>
                        <div className="text-muted-foreground text-sm">-</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-indigo-600">{city2Wins}</div>
                          <div className="text-xs text-muted-foreground">
                            {city2?.name ?? "City 2"} wins
                          </div>
                        </div>
                      </div>

                      {/* Top categories preview */}
                      <div className="flex flex-wrap gap-1.5">
                        {comparison.categories.slice(0, 4).map((cat) => (
                          <Badge key={cat.name} variant="secondary" className="text-xs">
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Explore Individual Cities?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our detailed city guides with cost breakdowns, neighborhood
              reviews, and practical tips for each destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/cities">
                  <MapPinIcon size="sm" className="mr-2" />
                  All City Guides
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
