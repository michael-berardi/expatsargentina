"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  DollarSignIcon,
  FileTextIcon,
  HomeIcon,
  HeartIcon,
  ArrowRightIcon,
  GlobeIcon,
  ShieldIcon,
  WifiIcon,
  UtensilsIcon,
  WalletIcon,
  BusIcon,
  UsersIcon,
} from "@/components/ui/icon";
import { cities } from "@/lib/data/argentina";
import { useI18n } from "@/lib/i18n";
import { GeneralTestimonials } from "@/components/Testimonials";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

const featuredCitySlugs = [
  "buenos-aires",
  "mendoza",
  "cordoba",
  "bariloche",
  "salta",
  "rosario",
];

const primaryGuides = [
  { icon: FileTextIcon, href: "/visas", key: "visas" },
  { icon: DollarSignIcon, href: "/cost-of-living", key: "costOfLiving" },
  { icon: HomeIcon, href: "/housing", key: "housing" },
  { icon: HeartIcon, href: "/healthcare", key: "healthcare" },
  { icon: WalletIcon, href: "/banking", key: "banking" },
  { icon: ShieldIcon, href: "/safety", key: "safety" },
  { icon: BusIcon, href: "/transportation", key: "transportation" },
  { icon: WifiIcon, href: "/remote-work", key: "remoteWork" },
];

const secondaryGuides = [
  { label: "Learn Spanish", href: "/learn-spanish" },
  { label: "Food & Dining", href: "/food" },
  { label: "Wine Guide", href: "/wine" },
  { label: "Investments", href: "/investments" },
  { label: "Education", href: "/education" },
  { label: "Taxes", href: "/taxes" },
  { label: "Insurance", href: "/insurance" },
  { label: "First 30 Days", href: "/first-30-days" },
];

const whyArgentinaItems = [
  { key: "costOfLiving", icon: DollarSignIcon },
  { key: "visaOptions", icon: FileTextIcon },
  { key: "naturalBeauty", icon: GlobeIcon },
  { key: "foodAndWine", icon: UtensilsIcon },
  { key: "culturalRichness", icon: MapPinIcon },
  { key: "welcoming", icon: UsersIcon },
];

export default function Home() {
  const { t } = useI18n();
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              className="mb-4 border-primary/20 bg-primary/10 text-primary"
              variant="secondary"
            >
              Updated for 2026
            </Badge>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Your Complete Guide to Living in Argentina
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Research-backed guides covering all 24 provinces, 20+ cities, and
              every visa pathway. Real data, real prices, no sugar-coating.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/provinces">
                  Explore Provinces <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/visas/quiz">Find Your Visa</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="hidden grid-cols-4 gap-3 sm:grid">
              {[
                { value: "24", label: "Provinces" },
                { value: "20+", label: "City Guides" },
                { value: "9", label: "Visa Types" },
                { value: "30+", label: "Living Guides" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-white p-3 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Guides */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-serif text-3xl font-bold md:text-4xl">
              Essential Guides
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              Everything you need to plan your move, step by step.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {primaryGuides.map((guide) => {
                const Icon = guide.icon;
                const title = t(
                  `homepage.guides.${guide.key}.title`
                ) as string;
                const description = t(
                  `homepage.guides.${guide.key}.description`
                ) as string;
                return (
                  <Link key={guide.key} href={guide.href} className="group">
                    <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                      <CardContent className="p-5">
                        <Icon size="md" className="mb-3 text-primary" />
                        <h3 className="mb-1 font-semibold">{title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {secondaryGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  {guide.label}
                </Link>
              ))}
              <Link
                href="/guides"
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                All Guides &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <Badge variant="secondary" className="mb-3">
                  <MapPinIcon size="sm" className="mr-1" />
                  City Guides
                </Badge>
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  Popular Destinations
                </h2>
              </div>
              <Button
                asChild
                variant="ghost"
                className="hidden gap-1 sm:flex"
              >
                <Link href="/cities">
                  All cities <ArrowRightIcon size="sm" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCities.map(
                (city) =>
                  city && (
                    <Link
                      key={city.slug}
                      href={`/cities/${city.slug}`}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={city.image}
                            alt={city.name}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-3 left-4">
                            <h3 className="text-lg font-semibold text-white">
                              {city.name}
                            </h3>
                            <p className="text-sm text-white/80">
                              {city.province}
                            </p>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            {city.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  )
              )}
            </div>

            <div className="mt-6 text-center sm:hidden">
              <Button asChild variant="outline">
                <Link href="/cities">
                  View All Cities{" "}
                  <ArrowRightIcon size="sm" className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Argentina */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 text-center font-serif text-3xl font-bold md:text-4xl">
              {t("homepage.whyArgentina.title") as string}
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              What draws expats from around the world — and what to know before
              you go.
            </p>

            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              {whyArgentinaItems.map(({ key, icon: Icon }) => (
                <div key={key} className="flex gap-4">
                  <div className="shrink-0 pt-0.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon size="sm" className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {
                        t(
                          `homepage.whyArgentina.${key}.title`
                        ) as string
                      }
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {
                        t(
                          `homepage.whyArgentina.${key}.description`
                        ) as string
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-4xl">
            <LuceroLegalCTA
              variant="card"
              utmMedium="homepage-recommendation"
              title="When the move turns into paperwork, start with a lawyer who does this every day"
              description="Most readers use Expats Argentina for research, then bring Lucero Legal in once the questions become document-specific: choosing the cleanest visa path, preparing apostilles and translations, fixing timing issues, or pressure-testing a residency plan before spending money."
              highlights={[
                "Visa strategy",
                "Residency filings",
                "Document review",
                "Citizenship planning",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <GeneralTestimonials />
    </div>
  );
}
