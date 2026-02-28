"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPinIcon,
  DollarSignIcon,
  FileTextIcon,
  HomeIcon,
  HeartIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  ShieldIcon,
  MailIcon,
  CoffeeIcon,
  WifiIcon,
  UtensilsIcon,
  GraduationCapIcon,
  WalletIcon,
  BusIcon,
  MessageCircleIcon,
  TrendingUpIcon,
  WineIcon,
} from "@/components/ui/icon";
import { provinces, cities, regions } from "@/lib/data/argentina";
import { useI18n } from "@/lib/i18n";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import { GeneralTestimonials } from "@/components/Testimonials";

const stats = [
  { value: "24", labelKey: "homepage.stats.provinces" },
  { value: "20+", labelKey: "homepage.stats.cityGuides" },
  { value: "6", labelKey: "homepage.stats.regions" },
  { value: "9", labelKey: "homepage.stats.visaTypes" },
];

const featuredCitySlugs = ["buenos-aires", "mendoza", "cordoba", "bariloche", "salta", "rosario"];

const whyArgentinaIcons = [
  DollarSignIcon,
  GlobeIcon,
  MapPinIcon,
  FileTextIcon,
  UtensilsIcon,
  UsersIcon,
];

const guideCategoriesConfig = [
  { icon: FileTextIcon, href: "/visas", key: "visas" },
  { icon: DollarSignIcon, href: "/cost-of-living", key: "costOfLiving" },
  { icon: HeartIcon, href: "/healthcare", key: "healthcare" },
  { icon: HomeIcon, href: "/housing", key: "housing" },
  { icon: WalletIcon, href: "/banking", key: "banking" },
  { icon: ShieldIcon, href: "/safety", key: "safety" },
  { icon: BusIcon, href: "/transportation", key: "transportation" },
  { icon: UtensilsIcon, href: "/food", key: "food" },
  { icon: WifiIcon, href: "/remote-work", key: "remoteWork" },
  { icon: GraduationCapIcon, href: "/learn-spanish", key: "learnSpanish" },
  { icon: CoffeeIcon, href: "/culture", key: "culture" },
  { icon: MessageCircleIcon, href: "/social-life", key: "socialLife" },
  { icon: TrendingUpIcon, href: "/investments", key: "investments" },
  { icon: WineIcon, href: "/wine", key: "wine" },
];

export default function Home() {
  const { t } = useI18n();
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);

  const whyArgentinaKeys = [
    "costOfLiving",
    "culturalRichness",
    "naturalBeauty",
    "visaOptions",
    "foodAndWine",
    "welcoming",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white dark:from-teal-950/20 dark:via-background dark:to-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{
            backgroundImage:
              "url('/images/hero-argentina.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/90 via-white/80 to-white dark:from-teal-950/90 dark:via-background/80 dark:to-background" />
        <div className="container mx-auto px-5 py-24 md:py-36 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <MapPinIcon size="sm" className="mr-1" />
              {t("homepage.hero.badge") as string}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Complete Guide to{" "}
              <br className="md:hidden" />
              Living in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              {t("homepage.hero.subtitle") as string}
            </p>
            <p className="text-base text-muted-foreground mb-4 max-w-xl mx-auto">
              {t("homepage.hero.description") as string}
            </p>
            <p className="text-sm text-muted-foreground/80 mb-8 max-w-xl mx-auto flex items-center justify-center gap-2">
              <ShieldIcon size="sm" className="text-primary" />
              Legal guidance provided by Lucero Legal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/provinces">
                  {t("homepage.hero.exploreProvinces") as string}
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cities">
                  {t("homepage.hero.browseCities") as string}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 bg-primary/5 border-y">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircleIcon size="sm" className="text-primary" />
              <span>Sponsored by Lucero Legal</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <UsersIcon size="sm" className="text-primary" />
              <span>Trusted by 50,000+ readers</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <GlobeIcon size="sm" className="text-primary" />
              <span>Updated February 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{t(stat.labelKey) as string}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Argentina */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("homepage.whyArgentina.title") as string}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyArgentinaKeys.map((key, index) => {
              const Icon = whyArgentinaIcons[index];
              const title = t(`homepage.whyArgentina.${key}.title`) as string;
              const description = t(`homepage.whyArgentina.${key}.description`) as string;
              return (
                <Card key={key} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon size="md" className="text-primary" />
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("homepage.guides.title") as string}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {guideCategoriesConfig.map((category) => {
              const Icon = category.icon;
              const title = t(`homepage.guides.${category.key}.title`) as string;
              const description = t(`homepage.guides.${category.key}.description`) as string;
              return (
                <Link key={category.key} href={category.href} className="group">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <Icon size="lg" className="text-primary mb-2" />
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <MapPinIcon size="sm" className="mr-1" />
              {t("homepage.cities.badge") as string}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("homepage.cities.title") as string}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("homepage.cities.subtitle") as string}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredCities.map((city) => city && (
              <Link key={city.slug} href={`/cities/${city.slug}`} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-sky-100 to-amber-50 dark:from-sky-900/30 dark:to-amber-900/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20">{city.name[0]}</span>
                  </div>
                  <CardHeader>
                    <CardTitle>{city.name}</CardTitle>
                    <CardDescription>{city.province}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{city.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/cities">
                {t("homepage.cities.viewAll") as string}
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Regions Explorer */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <GlobeIcon size="sm" className="mr-1" />
              {t("homepage.regions.badge") as string}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("homepage.regions.title") as string}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("homepage.regions.subtitle") as string}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {regions.map((region, index) => (
              <div key={index} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{region.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{region.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <GeneralTestimonials />

      {/* Lucero Legal CTA */}
      <LuceroLegalCTA variant="full" />

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MailIcon size="sm" className="mr-1" />
              {t("homepage.newsletter.badge") as string}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("homepage.newsletter.title") as string}</h2>
            <p className="text-muted-foreground mb-8">
              {t("homepage.newsletter.description") as string}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder={t("homepage.newsletter.placeholder") as string}
                className="flex-1"
              />
              <Button type="submit">{t("homepage.newsletter.subscribe") as string}</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              {t("homepage.newsletter.joinCount") as string}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
