import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  DollarSignIcon,
  ShieldIcon,
  WifiIcon,
  ArrowRightIcon,
  GlobeIcon,
  HomeIcon,
  PlaneIcon,
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
} from "@/components/ui/icon";
import { cities, getCityBySlug } from "@/lib/data/argentina";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return { title: "City Not Found | Expats Argentina" };
  }

  return {
    title: `Living in ${city.name}, Argentina - Expat Guide | Expats Argentina`,
    description: `Complete expat guide to ${city.name}, ${city.province}. Cost of living ${city.costOfLiving}, neighborhoods, safety, internet, climate, and tips for moving to ${city.name}.`,
    keywords: [
      `${city.name} expats`,
      `living in ${city.name}`,
      `${city.name} cost of living`,
      `${city.name} Argentina guide`,
      `expat life ${city.name}`,
    ],
    openGraph: {
      title: `Living in ${city.name}, Argentina - Expat Guide`,
      description: `Everything you need to know about living in ${city.name} as an expat. Budget, neighborhoods, safety, and more.`,
      images: [{ url: city.image, width: 1200, height: 630 }],
    },
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

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
            <span className="text-foreground">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPinIcon size="sm" />
              <span className="text-base md:text-sm font-medium">{city.province}, Argentina</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {city.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              {city.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {city.bestFor.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Grid */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {city.keyFacts.map((fact) => (
              <Card key={fact.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-base md:text-sm text-muted-foreground mb-1">
                    {fact.label}
                  </div>
                  <div className="font-semibold text-base md:text-sm">{fact.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              About Living in {city.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {city.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Budget */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <DollarSignIcon size="lg" className="text-teal-600" />
              <div>
                <h2 className="text-3xl font-bold">Monthly Budget</h2>
                <p className="text-muted-foreground">
                  Typical monthly costs: {city.costOfLiving}
                </p>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">
                          Expense
                        </th>
                        <th className="text-right py-3 px-4 font-semibold">
                          Monthly Range
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {city.monthlyBudget.map((item) => (
                        <tr
                          key={item.label}
                          className="border-b last:border-0"
                        >
                          <td className="py-3 px-4 text-muted-foreground">
                            {item.label}
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            {item.range}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-primary/5">
                        <td className="py-3 px-4 font-bold">Total Range</td>
                        <td className="py-3 px-4 text-right font-bold text-primary">
                          {city.costOfLiving}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <HomeIcon size="lg" className="text-teal-600" />
              <h2 className="text-3xl font-bold">Neighborhoods</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.neighborhoods.map((hood) => (
                <Card key={hood.name}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPinIcon size="sm" className="text-primary" />
                      {hood.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base md:text-sm text-muted-foreground">
                      {hood.vibe}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Weather */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Climate */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClockIcon size="md" className="text-teal-600" />
                    Climate and Weather
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-base md:text-sm text-muted-foreground mb-1">
                      Climate Type
                    </div>
                    <p className="font-medium">{city.climate}</p>
                  </div>
                  <div>
                    <div className="text-base md:text-sm text-muted-foreground mb-1">
                      Average Temperature
                    </div>
                    <p className="font-medium">{city.averageTemp}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Internet & Connectivity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <WifiIcon size="md" className="text-teal-600" />
                    Internet and Connectivity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="text-base md:text-sm text-muted-foreground mb-1">
                      Internet Speed
                    </div>
                    <p className="font-medium">{city.internetSpeed}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Safety */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon size="md" className="text-teal-600" />
                    Safety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="text-base md:text-sm text-muted-foreground mb-1">
                      Safety Rating
                    </div>
                    <p className="font-medium">{city.safetyRating}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Getting There */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PlaneIcon size="md" className="text-teal-600" />
                    Getting There
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{city.gettingThere}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expat Appeal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <HeartIcon size="lg" className="text-teal-600" />
              <h2 className="text-3xl font-bold">Expat Appeal</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {city.expatAppeal}
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {city.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 text-base md:text-sm"
                >
                  <CheckCircleIcon
                    size="sm"
                    className="text-teal-600 mt-0.5 shrink-0"
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Province */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GlobeIcon size="md" className="text-primary" />
              <div>
                <div className="text-base md:text-sm text-muted-foreground">
                  Part of
                </div>
                <div className="font-semibold">{city.province} Province</div>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/provinces/${city.provinceSlug}`}>
                Explore Province
                <ArrowRightIcon size="sm" className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <StarIcon size="xl" className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Move to {city.name}?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get started with our visa guides and cost of living breakdowns to
              plan your move to {city.name}, Argentina.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
