import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  DollarSignIcon,
  ArrowRightIcon,
  GlobeIcon,
} from "@/components/ui/icon";
import { cities } from "@/lib/data/argentina";

export const metadata: Metadata = {
  title: "Best Cities for Expats in Argentina | Expats Argentina",
  description:
    "Best cities in Argentina for expats. Compare cost of living, safety, internet, and lifestyle across Buenos Aires, Mendoza, Cordoba, and more.",
  keywords: [
    "best cities Argentina expats",
    "where to live Argentina",
    "Buenos Aires expats",
    "Mendoza expats",
    "Cordoba expats",
    "Argentina cities guide",
  ],
  openGraph: {
    title: "Best Cities for Expats in Argentina",
    description:
      "Compare Argentina's top expat cities — cost of living, safety, climate, internet, and lifestyle.",
  },
};

// Sort: Buenos Aires first, then alphabetically by name
const sortedCities = [...cities].sort((a, b) => {
  if (a.slug === "buenos-aires") return -1;
  if (b.slug === "buenos-aires") return 1;
  return a.name.localeCompare(b.name);
});

export default function CitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Cities</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <GlobeIcon size="sm" className="mr-1" />
              City Guides
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina&apos;s Best Cities for Expats
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From the cosmopolitan energy of Buenos Aires to the wine country
              charm of Mendoza, explore the cities where expats are building
              their new lives in Argentina.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sortedCities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                  {/* Image with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-xl font-bold text-white">
                        {city.name}
                      </h2>
                      <div className="flex items-center gap-1 text-white/80 text-sm">
                        <MapPinIcon size="sm" />
                        <span>{city.province}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="pt-4 pb-5 flex flex-col gap-4">
                    {/* Description (truncated) */}
                    <p className="text-base md:text-sm text-muted-foreground line-clamp-3">
                      {city.description}
                    </p>

                    {/* Cost of Living */}
                    <div className="flex items-center gap-2 text-base md:text-sm">
                      <DollarSignIcon
                        size="sm"
                        className="text-teal-600 shrink-0"
                      />
                      <span className="font-medium">
                        {city.costOfLiving}
                      </span>
                    </div>

                    {/* Best For tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {city.bestFor.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {city.bestFor.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{city.bestFor.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-sm font-medium text-primary mt-auto pt-2">
                      <span>Explore {city.name}</span>
                      <ArrowRightIcon
                        size="sm"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which City Is Right for You?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compare cost of living, safety, internet speeds, and lifestyle
              across all cities to find your perfect match in Argentina.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/cost-of-living">
                  <DollarSignIcon size="sm" className="mr-2" />
                  Cost of Living Guide
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/visas">
                  <GlobeIcon size="sm" className="mr-2" />
                  Visa Options
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
