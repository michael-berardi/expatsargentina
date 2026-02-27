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
  ArrowRightIcon,
} from "@/components/ui/icon";
import {
  regions,
  getProvincesByRegion,
  type Region,
} from "@/lib/data/argentina";

export const metadata: Metadata = {
  title: "Explore Argentina's Provinces",
  description:
    "Explore all 24 provinces of Argentina. Compare cost of living, climate, safety, and expat appeal — from Patagonia to the Northeast.",
  keywords: [
    "Argentina provinces",
    "living in Argentina",
    "expat Argentina regions",
    "Patagonia",
    "Buenos Aires province",
    "Mendoza",
    "Cordoba",
  ],
  openGraph: {
    title: "Explore Argentina's Provinces | Expats Argentina",
    description:
      "Discover all 24 provinces of Argentina. Compare cost of living, climate, safety, and expat appeal across every region.",
    images: [{ url: "/images/hero-argentina.webp", width: 1920, height: 550 }],
  },
  alternates: { canonical: "https://expatsargentina.com/provinces" },
};

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

export default function ProvincesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://expatsargentina.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Provinces",
                "item": "https://expatsargentina.com/provinces"
              }
            ]
          })
        }}
      />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Provinces</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <GlobeIcon size="sm" className="mr-1" />
              Argentina Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All 24 Provinces of Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              There is far more to Argentina than Buenos Aires. From the glaciers
              of Patagonia to the subtropical jungles of Misiones, explore every
              corner of South America&apos;s most diverse country.
            </p>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {regions.map((region) => (
              <a
                key={region.name}
                href={`#region-${region.name.toLowerCase()}`}
                className="group"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm cursor-pointer transition-colors hover:bg-accent"
                >
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${region.color}`}
                  />
                  {region.name}
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Provinces by Region */}
      {regions.map((region) => {
        const regionProvinces = getProvincesByRegion(region.name);
        return (
          <section
            key={region.name}
            id={`region-${region.name.toLowerCase()}`}
            className="py-16 scroll-mt-20"
          >
            <div className="container mx-auto px-4">
              {/* Region Header */}
              <div className="mb-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${region.color}`}
                  />
                  <h2 className="text-3xl font-bold">{region.name}</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  {region.description}
                </p>
                <p className="text-base md:text-sm text-muted-foreground mt-1">
                  {regionProvinces.length}{" "}
                  {regionProvinces.length === 1 ? "province" : "provinces"}
                </p>
              </div>

              {/* Province Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {regionProvinces.map((province) => (
                  <Link
                    key={province.slug}
                    href={`/provinces/${province.slug}`}
                    className="group"
                  >
                    <Card className="h-full flex flex-col transition-shadow hover:shadow-lg">
                      {/* Province Image */}
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <Image
                          src={province.image}
                          alt={province.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <Badge
                            className={`${regionBgColors[province.region as Region]} ${regionTextColors[province.region as Region]} border-0`}
                          >
                            {province.region}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {province.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-base md:text-sm text-muted-foreground mb-4 line-clamp-3">
                          {province.description}
                        </p>

                        <div className="mt-auto space-y-3">
                          {/* Cost Range */}
                          <div className="flex items-center gap-2 text-base md:text-sm">
                            <DollarSignIcon
                              size="sm"
                              className="text-primary shrink-0"
                            />
                            <span className="font-medium">
                              {province.costRange}
                            </span>
                          </div>

                          {/* Major Cities Preview */}
                          {province.majorCities.length > 0 && (
                            <div className="flex items-start gap-2 text-base md:text-sm">
                              <MapPinIcon
                                size="sm"
                                className="text-muted-foreground shrink-0 mt-0.5"
                              />
                              <span className="text-muted-foreground line-clamp-1">
                                {province.majorCities.slice(0, 3).join(", ")}
                                {province.majorCities.length > 3 && (
                                  <span>
                                    {" "}
                                    +{province.majorCities.length - 3} more
                                  </span>
                                )}
                              </span>
                            </div>
                          )}

                          {/* View Link */}
                          <div className="flex items-center gap-1 text-base md:text-sm font-medium text-primary pt-2">
                            Explore province
                            <ArrowRightIcon
                              size="sm"
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Most expats begin in Buenos Aires, but Argentina has compelling
              options in every region. Explore our city guides for detailed
              neighborhood breakdowns and cost comparisons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/cost-of-living">
                  Compare Costs
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
