import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  GlobeIcon,
  DollarSignIcon,
  ShieldIcon,
  WifiIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@/components/ui/icon";
import {
  provinces,
  getProvinceBySlug,
  getCitiesByProvince,
  type Region,
} from "@/lib/data/argentina";

export function generateStaticParams() {
  return provinces.map((province) => ({ slug: province.slug }));
}

const regionTextColors: Record<Region, string> = {
  Patagonia: "text-cyan-700 dark:text-cyan-300",
  Cuyo: "text-purple-700 dark:text-purple-300",
  Northwest: "text-orange-700 dark:text-orange-300",
  Northeast: "text-green-700 dark:text-green-300",
  Pampas: "text-amber-700 dark:text-amber-300",
  Central: "text-teal-700 dark:text-teal-300",
};

const regionBgColors: Record<Region, string> = {
  Patagonia: "bg-cyan-100 dark:bg-cyan-900/30",
  Cuyo: "bg-purple-100 dark:bg-purple-900/30",
  Northwest: "bg-orange-100 dark:bg-orange-900/30",
  Northeast: "bg-green-100 dark:bg-green-900/30",
  Pampas: "bg-amber-100 dark:bg-amber-900/30",
  Central: "bg-teal-100 dark:bg-teal-900/30",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    return {
      title: "Province Not Found",
    };
  }

  const desc = province.description.length > 155
    ? province.description.slice(0, 155).replace(/\s+\S*$/, "") + "..."
    : province.description;

  return {
    title: `${province.name} — Living in Argentina`,
    description: desc,
    keywords: [
      province.name,
      "Argentina",
      "expats",
      province.region,
      ...province.majorCities.slice(0, 3),
    ],
    openGraph: {
      title: `${province.name} | Expats Argentina`,
      description: desc,
      images: [{ url: province.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://expatsargentina.com/provinces/${province.slug}`,
    },
  };
}

export default async function ProvinceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Province Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The province you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/provinces">View All Provinces</Link>
        </Button>
      </div>
    );
  }

  const cities = getCitiesByProvince(province.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
      { "@type": "ListItem", position: 2, name: "Provinces", item: "https://expatsargentina.com/provinces" },
      { "@type": "ListItem", position: 3, name: province.name, item: `https://expatsargentina.com/provinces/${province.slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/provinces" className="hover:text-foreground">
              Provinces
            </Link>
            <span>/</span>
            <span className="text-foreground">{province.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[400px] overflow-hidden">
          <Image
            src={province.image}
            alt={province.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>
        <div className="relative container mx-auto px-5 pt-20 pb-16 h-[400px] flex items-end">
          <div className="max-w-3xl">
            <Badge
              className={`mb-4 ${regionBgColors[province.region as Region]} ${regionTextColors[province.region as Region]} border-0`}
            >
              {province.region}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {province.name}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {province.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {province.keyFacts.map((fact) => (
              <Card
                key={fact.label}
                className="text-center bg-muted/30 border-muted"
              >
                <CardContent className="pt-6 pb-4">
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
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              About {province.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {province.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Expat Appeal */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <GlobeIcon size="lg" className="text-primary" />
              <h2 className="text-3xl font-bold">Expat Appeal</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {province.expatAppeal}
            </p>
          </div>
        </div>
      </section>

      {/* Info Grid: Cost, Climate, Safety, Internet */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Cost of Living */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSignIcon size="md" className="text-primary" />
                  Cost of Living
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">
                  {province.costRange}
                </div>
                <Badge variant="secondary">{province.costOfLiving}</Badge>
                <p className="text-sm text-muted-foreground mt-3">
                  Estimated monthly budget for a single expat including rent,
                  food, transport, and basic expenses.
                </p>
              </CardContent>
            </Card>

            {/* Climate */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlobeIcon size="md" className="text-primary" />
                  Climate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{province.climate}</p>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldIcon size="md" className="text-primary" />
                  Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{province.safety}</p>
              </CardContent>
            </Card>

            {/* Internet */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <WifiIcon size="md" className="text-primary" />
                  Internet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{province.internet}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPinIcon size="lg" className="text-primary" />
              <h2 className="text-3xl font-bold">Major Cities</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {province.majorCities.map((cityName) => {
                const cityData = cities.find((c) => c.name === cityName);
                return (
                  <Card key={cityName} className="bg-background">
                    <CardContent className="pt-6 pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPinIcon
                            size="sm"
                            className="text-primary shrink-0"
                          />
                          <span className="font-medium">{cityName}</span>
                        </div>
                        {cityData && (
                          <Link
                            href={`/cities/${cityData.slug}`}
                            className="text-base md:text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            Guide
                            <ArrowRightIcon size="sm" />
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {province.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircleIcon
                    size="md"
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore {province.name}?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Learn more about life in Argentina with our visa guides, cost of
              living breakdowns, and city-by-city comparisons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/provinces">
                  All Provinces
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Link href="/visas">Visa Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
