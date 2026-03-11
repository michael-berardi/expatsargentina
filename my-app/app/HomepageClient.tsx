"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  DollarSignIcon,
  FileTextIcon,
  HomeIcon,
  HeartIcon,
  UsersIcon,
  ArrowRightIcon,
  GlobeIcon,
  ShieldIcon,
  CoffeeIcon,
  WifiIcon,
  UtensilsIcon,
  GraduationCapIcon,
  WalletIcon,
  BusIcon,
  MessageCircleIcon,
  TrendingUpIcon,
  WineIcon,
  BookOpenIcon,
  ExternalLinkIcon,
} from "@/components/ui/icon";
import { cities, regions } from "@/lib/data/argentina";
import { useI18n } from "@/lib/i18n";
import { GeneralTestimonials } from "@/components/Testimonials";
import { ReferenceHero } from "@/components/ReferenceHero";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

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
      <ReferenceHero
        badge="Argentina's Definitive Expat Reference"
        title="Your Complete Guide to Living in Argentina"
        subtitle="Research-backed guides covering all 24 provinces, 20+ cities, and 9 visa pathways. Real data, real prices, updated for 2026."
        stats={[
          { value: "24", label: "Provinces Covered" },
          { value: "20+", label: "City Guides" },
          { value: "9", label: "Visa Types" },
          { value: "6", label: "Regions" },
        ]}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/provinces">
              Explore Provinces <ArrowRightIcon size="sm" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/visas">
              Compare Visas
            </Link>
          </Button>
        </div>
      </ReferenceHero>

      {/* Guide Categories */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              In-Depth Living Guides
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

      {/* Why Argentina */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
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

      {/* Featured Cities */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <MapPinIcon size="sm" className="mr-1" />
              {t("homepage.cities.badge") as string}
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t("homepage.cities.title") as string}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("homepage.cities.subtitle") as string}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredCities.map((city) => city && (
              <Link key={city.slug} href={`/cities/${city.slug}`} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <GlobeIcon size="sm" className="mr-1" />
              {t("homepage.regions.badge") as string}
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t("homepage.regions.title") as string}</h2>
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

      {/* Community & Resources */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <BookOpenIcon size="sm" className="mr-1" />
              Trusted Sources
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Community &amp; Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Independent guides, active forums, and expat communities we recommend.
              These are real resources maintained by people living in Argentina.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            {/* Content & Guides */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-center">
                Content &amp; Guides
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://solsalute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        Sol Salute
                        <ExternalLinkIcon size="sm" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>solsalute.com</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Detailed Argentina living guide with real costs and visa information.
                      </p>
                    </CardContent>
                  </Card>
                </a>
                <a
                  href="https://nomadflag.com/living-in-argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        Nomad Flag
                        <ExternalLinkIcon size="sm" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>nomadflag.com</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Argentina pros, cons, and practical guide for nomads.
                      </p>
                    </CardContent>
                  </Card>
                </a>
                <a
                  href="https://wheretheroadforks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        Where The Road Forks
                        <ExternalLinkIcon size="sm" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>wheretheroadforks.com</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        In-depth Buenos Aires and Argentina expat guides.
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Communities */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-center">
                Communities
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://baexpats.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        BAexpats.org
                        <ExternalLinkIcon size="sm" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>Forum</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Largest English-speaking Argentina expat forum.
                      </p>
                    </CardContent>
                  </Card>
                </a>
                <a
                  href="https://reddit.com/r/argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        r/argentina
                        <ExternalLinkIcon size="sm" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>Reddit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reddit community for Argentina discussions (Spanish-heavy).
                      </p>
                    </CardContent>
                  </Card>
                </a>
                <a
                  href="https://expatsba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        ExpatsBA.com
                        <ExternalLinkIcon size="sm" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>Community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Active expat community with housing, events, and advice.
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <LuceroLegalCTA
              variant="card"
              utmMedium="homepage-recommendation"
              title="When the move turns into paperwork, start with a lawyer who does this every day"
              description="Most readers use Expats Argentina for research, then bring Lucero Legal in once the questions become document-specific: choosing the cleanest visa path, preparing apostilles and translations, fixing timing issues, or pressure-testing a residency plan before spending money."
              highlights={["Visa strategy", "Residency filings", "Document review", "Citizenship planning"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <GeneralTestimonials />
    </div>
  );
}
