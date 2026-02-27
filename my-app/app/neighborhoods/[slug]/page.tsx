import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  DollarSignIcon,
  ShieldIcon,
  TrainIcon,
  StarIcon,
  HomeIcon,
  CoffeeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  UsersIcon,
} from "@/components/ui/icon";
import { neighborhoods, getNeighborhoodBySlug } from "@/lib/data/neighborhoods";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hood = getNeighborhoodBySlug(slug);

  if (!hood) {
    return { title: "Neighborhood Not Found | Expats Argentina" };
  }

  return {
    title: `${hood.name}, Buenos Aires - Expat Guide 2026 | Expats Argentina`,
    description: `Complete expat guide to ${hood.name}. Rent ${hood.rentRange}/month, safety: ${hood.safety}, transport: ${hood.transport}. Honest review with pros, cons, and tips for living in ${hood.name}.`,
    keywords: [
      `${hood.name} Buenos Aires expats`,
      `living in ${hood.name}`,
      `${hood.name} rent prices 2026`,
      `${hood.name} safety`,
      `best neighborhoods Buenos Aires`,
    ],
    openGraph: {
      title: `${hood.name} - Expat Neighborhood Guide 2026`,
      description: `Everything you need to know about living in ${hood.name}. Rent: ${hood.rentRange}. Safety: ${hood.safety}. Expat score: ${hood.expatScore}/10.`,
      images: [{ url: hood.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://expatsargentina.com/neighborhoods/${hood.slug}`,
    },
  };
}

function SafetyBadge({ safety }: { safety: string }) {
  const colors: Record<string, string> = {
    "Excellent": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Very Good": "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400",
    "Good": "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
    "Moderate": "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
    "Caution": "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[safety] || ""}`}>
      {safety}
    </span>
  );
}

export default async function NeighborhoodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hood = getNeighborhoodBySlug(slug);

  if (!hood) {
    notFound();
  }

  const nearbyHoods = hood.nearbyNeighborhoods
    .map((s) => getNeighborhoodBySlug(s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${hood.name}, Buenos Aires`,
    description: hood.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "AR",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
      { "@type": "ListItem", position: 2, name: "Neighborhoods", item: "https://expatsargentina.com/neighborhoods" },
      { "@type": "ListItem", position: 3, name: hood.name, item: `https://expatsargentina.com/neighborhoods/${hood.slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/neighborhoods" className="hover:text-foreground">Neighborhoods</Link>
            <span>/</span>
            <span className="text-foreground">{hood.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">
                    <MapPinIcon size="sm" className="mr-1" />
                    {hood.zone} Buenos Aires
                  </Badge>
                  <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                    <StarIcon size="sm" className="text-amber-600 fill-amber-600" />
                    <span className="text-sm font-bold text-amber-700 dark:text-amber-300">
                      {hood.expatScore}/10
                    </span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {hood.name}
                </h1>
                {hood.altNames && (
                  <p className="text-muted-foreground mb-2">Also known as: {hood.altNames.join(", ")}</p>
                )}
                <p className="text-xl text-muted-foreground mb-8">
                  {hood.description}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6 text-center">
                  <DollarSignIcon size="lg" className="text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">{hood.rentRange}</div>
                  <div className="text-xs text-muted-foreground">Monthly Rent</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6 text-center">
                  <ShieldIcon size="lg" className="text-primary mx-auto mb-2" />
                  <SafetyBadge safety={hood.safety} />
                  <div className="text-xs text-muted-foreground mt-1">Safety</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6 text-center">
                  <TrainIcon size="lg" className="text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">{hood.transport}</div>
                  <div className="text-xs text-muted-foreground">Transport</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6 text-center">
                  <CoffeeIcon size="lg" className="text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">{hood.foodScene}</div>
                  <div className="text-xs text-muted-foreground">Food Scene</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Living in {hood.name}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {hood.longDescription.split(". ").reduce((acc: string[][], sentence, i, arr) => {
                const paragraphIndex = Math.floor(i / Math.ceil(arr.length / 3));
                if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                acc[paragraphIndex].push(sentence);
                return acc;
              }, []).map((sentences, i) => (
                <p key={i} className="mb-4">{sentences.join(". ")}{sentences[sentences.length - 1].endsWith(".") ? "" : "."}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">At a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSignIcon size="md" className="text-primary" />
                    Monthly Budget
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-1">{hood.avgMonthlyBudget}</div>
                  <p className="text-sm text-muted-foreground">Including rent, food, transport, and entertainment</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrainIcon size="md" className="text-primary" />
                    Public Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {hood.subteLines && hood.subteLines.length > 0 ? (
                    <div>
                      <div className="font-semibold mb-2">Subte Lines:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {hood.subteLines.map((line) => (
                          <li key={line} className="flex items-center gap-2">
                            <TrainIcon size="sm" className="text-primary" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No direct Subte access — rely on buses and taxis</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <HomeIcon size="md" className="text-primary" />
                    Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Walkability</span>
                      <span className="font-medium">{hood.walkability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nightlife</span>
                      <span className="font-medium">{hood.nightlife}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Green Spaces</span>
                      <span className="font-medium">{hood.greenSpaces}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Food Scene</span>
                      <span className="font-medium">{hood.foodScene}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CoffeeIcon size="md" className="text-primary" />
                    Coffee & Coworking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Coffee:</strong> {hood.coffeeShops}</p>
                    <p><strong>Coworking:</strong> {hood.coworkingSpaces}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <StarIcon size="md" className="text-primary" />
                    Key Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {hood.keyFacts.map((fact) => (
                      <div key={fact.label} className="flex justify-between text-sm border-b pb-2">
                        <span className="text-muted-foreground">{fact.label}</span>
                        <span className="font-medium">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Best For / Not Ideal For */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who Should Live Here?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <UsersIcon size="md" />
                    Best For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {hood.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircleIcon size="md" className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                    <AlertCircleIcon size="md" />
                    Not Ideal For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {hood.notIdealFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <AlertCircleIcon size="md" className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Considerations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <StarIcon size="md" className="text-green-500" />
                  Highlights
                </h2>
                <ul className="space-y-3">
                  {hood.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon size="md" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertCircleIcon size="md" className="text-amber-500" />
                  Considerations
                </h2>
                <ul className="space-y-3">
                  {hood.considerations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <AlertCircleIcon size="md" className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Notable Landmarks</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {hood.landmarks.map((landmark) => (
                <Badge key={landmark} variant="outline" className="text-base py-2 px-4">
                  <MapPinIcon size="sm" className="mr-2 text-primary" />
                  {landmark}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Neighborhoods */}
      {nearbyHoods.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Nearby Neighborhoods</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyHoods.map((nearby) => nearby && (
                  <Link key={nearby.slug} href={`/neighborhoods/${nearby.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{nearby.name}</CardTitle>
                          <div className="flex items-center gap-1">
                            <StarIcon size="sm" className="text-amber-600 fill-amber-600" />
                            <span className="text-sm font-semibold">{nearby.expatScore}/10</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            <DollarSignIcon size="sm" className="mr-1" />
                            {nearby.rentRange}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <ShieldIcon size="sm" className="mr-1" />
                            {nearby.safety}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{nearby.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to {hood.name}?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Compare all Buenos Aires neighborhoods, check current rent prices,
              and get our complete moving guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  <MapPinIcon size="sm" className="mr-2" />
                  All Neighborhoods
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/housing">
                  Housing Guide
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
