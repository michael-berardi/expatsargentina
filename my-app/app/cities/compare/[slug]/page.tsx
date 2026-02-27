import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  ArrowRightLeftIcon,
  CheckCircleIcon,
  DollarSignIcon,
  GlobeIcon,
  MapPinIcon,
  StarIcon,
  UsersIcon,
} from "@/components/ui/icon";
import {
  getComparisonBySlug,
  getComparisonCities,
  getAllComparisonSlugs,
} from "@/lib/data/comparisons";

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return { title: "Comparison Not Found | Expats Argentina" };
  }

  const { city1 } = getComparisonCities(comparison);

  return {
    title: `${comparison.title}: Which Is Better for Expats? | Expats Argentina`,
    description: comparison.description,
    keywords: comparison.seoKeywords,
    openGraph: {
      title: `${comparison.title}: Which Is Better for Expats?`,
      description: comparison.description,
      url: `https://expatsargentina.com/cities/compare/${comparison.slug}`,
      images: city1?.image
        ? [{ url: city1.image, width: 1200, height: 630 }]
        : undefined,
    },
    alternates: {
      canonical: `https://expatsargentina.com/cities/compare/${comparison.slug}`,
    },
  };
}

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className="text-sm font-semibold w-6 text-right">{score}</span>
    </div>
  );
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  const { city1, city2 } = getComparisonCities(comparison);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
      { "@type": "ListItem", position: 2, name: "Cities", item: "https://expatsargentina.com/cities" },
      { "@type": "ListItem", position: 3, name: "Compare", item: "https://expatsargentina.com/cities/compare" },
      { "@type": "ListItem", position: 4, name: comparison.title, item: `https://expatsargentina.com/cities/compare/${comparison.slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

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
            <Link href="/cities/compare" className="hover:text-foreground">
              Compare
            </Link>
            <span>/</span>
            <span className="text-foreground">{comparison.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <ArrowRightLeftIcon size="sm" className="mr-1" />
              City Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {city1?.name ?? comparison.city1Slug}
              <span className="text-muted-foreground mx-3 text-3xl md:text-4xl lg:text-5xl">vs</span>
              {city2?.name ?? comparison.city2Slug}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {comparison.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city1 && (
                <Button variant="outline" asChild>
                  <Link href={`/cities/${city1.slug}`}>
                    <MapPinIcon size="sm" className="mr-1" />
                    {city1.name} Guide
                  </Link>
                </Button>
              )}
              {city2 && (
                <Button variant="outline" asChild>
                  <Link href={`/cities/${city2.slug}`}>
                    <MapPinIcon size="sm" className="mr-1" />
                    {city2.name} Guide
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <StarIcon size="lg" className="text-teal-600" />
              <h2 className="text-3xl font-bold">Category-by-Category Breakdown</h2>
            </div>

            <div className="space-y-6">
              {comparison.categories.map((category) => {
                const city1Wins = category.city1Score > category.city2Score;
                const tied = category.city1Score === category.city2Score;

                return (
                  <Card key={category.name}>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center justify-between flex-wrap gap-2">
                        <span>{category.name}</span>
                        {tied ? (
                          <Badge variant="secondary">Tie</Badge>
                        ) : city1Wins ? (
                          <Badge className="bg-teal-600 text-white">
                            {city1?.name ?? comparison.city1Slug} wins
                          </Badge>
                        ) : (
                          <Badge className="bg-indigo-600 text-white">
                            {city2?.name ?? comparison.city2Slug} wins
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* City 1 */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPinIcon size="sm" className="text-teal-600 shrink-0" />
                            <span className="font-semibold text-teal-700 dark:text-teal-400">
                              {city1?.name ?? comparison.city1Slug}
                            </span>
                          </div>
                          <ScoreBar score={category.city1Score} color="bg-teal-500" />
                          <p className="text-base md:text-sm text-muted-foreground leading-relaxed">
                            {category.city1Detail}
                          </p>
                        </div>

                        {/* City 2 */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPinIcon size="sm" className="text-indigo-600 shrink-0" />
                            <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                              {city2?.name ?? comparison.city2Slug}
                            </span>
                          </div>
                          <ScoreBar score={category.city2Score} color="bg-indigo-500" />
                          <p className="text-base md:text-sm text-muted-foreground leading-relaxed">
                            {category.city2Detail}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <UsersIcon size="lg" className="text-teal-600" />
              <h2 className="text-3xl font-bold">Which City Is Best For You?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* City 1 Best For */}
              <Card className="border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-700 dark:text-teal-400">
                    <MapPinIcon size="md" className="text-teal-600" />
                    {city1?.name ?? comparison.city1Slug} is best for...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {comparison.bestFor.city1.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircleIcon size="sm" className="text-teal-600 mt-0.5 shrink-0" />
                        <span className="text-base md:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* City 2 Best For */}
              <Card className="border-indigo-200 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                    <MapPinIcon size="md" className="text-indigo-600" />
                    {city2?.name ?? comparison.city2Slug} is best for...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {comparison.bestFor.city2.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircleIcon size="sm" className="text-indigo-600 mt-0.5 shrink-0" />
                        <span className="text-base md:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-50 to-indigo-50 dark:from-teal-950/30 dark:to-indigo-950/30 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <StarIcon size="lg" className="text-primary" />
                  Our Verdict
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {comparison.verdict}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Links to Individual City Pages */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Explore Each City in Detail
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {city1 && (
                <Button variant="outline" size="lg" className="w-full justify-between" asChild>
                  <Link href={`/cities/${city1.slug}`}>
                    <span className="flex items-center gap-2">
                      <MapPinIcon size="sm" className="text-teal-600" />
                      {city1.name} Full Guide
                    </span>
                    <ArrowRightIcon size="sm" />
                  </Link>
                </Button>
              )}
              {city2 && (
                <Button variant="outline" size="lg" className="w-full justify-between" asChild>
                  <Link href={`/cities/${city2.slug}`}>
                    <span className="flex items-center gap-2">
                      <MapPinIcon size="sm" className="text-indigo-600" />
                      {city2.name} Full Guide
                    </span>
                    <ArrowRightIcon size="sm" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <GlobeIcon size="xl" className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make Your Move?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you choose {city1?.name ?? comparison.city1Slug} or {city2?.name ?? comparison.city2Slug}, we have the guides to help you settle in Argentina.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/visas">
                  <GlobeIcon size="sm" className="mr-2" />
                  Visa Guides
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cost-of-living">
                  <DollarSignIcon size="sm" className="mr-2" />
                  Cost of Living
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cities/compare">
                  <ArrowRightLeftIcon size="sm" className="mr-2" />
                  More Comparisons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
