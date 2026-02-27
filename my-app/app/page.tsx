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
} from "@/components/ui/icon";
import { provinces, cities, regions } from "@/lib/data/argentina";

const stats = [
  { value: "24", label: "Provinces" },
  { value: "15+", label: "City Guides" },
  { value: "6", label: "Regions" },
  { value: "5", label: "Visa Types" },
];

const featuredCitySlugs = ["buenos-aires", "mendoza", "cordoba", "bariloche", "salta", "rosario"];

const whyArgentina = [
  {
    icon: DollarSignIcon,
    title: "Unbeatable Cost of Living",
    description:
      "Live well on $800-$1,500/month in most cities. World-class steak dinners for $10, wine country living at a fraction of European prices, and healthcare that won't bankrupt you.",
  },
  {
    icon: GlobeIcon,
    title: "Cultural Richness",
    description:
      "From tango in Buenos Aires to gaucho traditions on the Pampas, indigenous heritage in the Northwest, and Welsh colonies in Patagonia — every region has its own distinct identity.",
  },
  {
    icon: MapPinIcon,
    title: "Extraordinary Natural Beauty",
    description:
      "Iguazu Falls, Patagonian glaciers, Andean peaks, subtropical forests, salt flats, and Lake District vistas. No country on Earth offers more geographic diversity.",
  },
  {
    icon: FileTextIcon,
    title: "Accessible Visa Options",
    description:
      "The Digital Nomad visa, rentista visa, and investor visa provide clear pathways. Argentina is actively welcoming remote workers and retirees with practical immigration options.",
  },
  {
    icon: UtensilsIcon,
    title: "Food and Wine Paradise",
    description:
      "The world's best beef, Malbec wine regions, empanadas that vary by province, Italian-influenced cuisine, and a dining culture where meals are social events to be savored.",
  },
  {
    icon: UsersIcon,
    title: "Welcoming Communities",
    description:
      "Argentines are famously warm and social. Established expat communities exist across the country, from Buenos Aires to Bariloche, Mendoza to Salta.",
  },
];

const guideCategories = [
  {
    icon: FileTextIcon,
    title: "Visas & Residency",
    description: "Digital nomad, rentista, investor, and retirement visa guides with real application timelines.",
    href: "/visas",
  },
  {
    icon: DollarSignIcon,
    title: "Cost of Living",
    description: "Monthly budgets for every major city, factoring in inflation, exchange rates, and the real costs.",
    href: "/cost-of-living",
  },
  {
    icon: HeartIcon,
    title: "Healthcare",
    description: "The prepaga system explained, hospital quality by city, and how to access quality care affordably.",
    href: "/healthcare",
  },
  {
    icon: HomeIcon,
    title: "Housing & Rentals",
    description: "Finding apartments without a garantia, rental contracts, and neighborhood guides for every city.",
    href: "/housing",
  },
  {
    icon: WalletIcon,
    title: "Banking & Money",
    description: "Exchange rates, opening accounts, sending money internationally, and navigating the peso economy.",
    href: "/banking",
  },
  {
    icon: ShieldIcon,
    title: "Safety",
    description: "Real safety data by province and city, common scams to avoid, and practical precautions.",
    href: "/safety",
  },
  {
    icon: BusIcon,
    title: "Transportation",
    description: "SUBE cards, domestic flights, long-distance buses, and getting around in each region.",
    href: "/transportation",
  },
  {
    icon: UtensilsIcon,
    title: "Food & Dining",
    description: "Regional cuisines, grocery shopping, delivery apps, and dining customs across Argentina.",
    href: "/food",
  },
  {
    icon: WifiIcon,
    title: "Remote Work",
    description: "Internet speeds by city, coworking spaces, cafe culture, and getting paid across borders.",
    href: "/remote-work",
  },
  {
    icon: GraduationCapIcon,
    title: "Learn Spanish",
    description: "Language schools, Rioplatense vs. standard Spanish, and immersion strategies that work.",
    href: "/learn-spanish",
  },
  {
    icon: CoffeeIcon,
    title: "Culture & Customs",
    description: "Mate rituals, asado etiquette, the beso greeting, and navigating Argentine social norms.",
    href: "/culture",
  },
  {
    icon: MessageCircleIcon,
    title: "Expat Social Life",
    description: "Meetup groups, language exchanges, sports clubs, and building your community in Argentina.",
    href: "/social-life",
  },
];

export default function Home() {
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);

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
        <div className="container mx-auto px-4 py-24 md:py-36 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <MapPinIcon size="sm" className="mr-1" />
              All 24 provinces covered
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Complete Guide to{" "}
              <span className="text-primary">Living in Argentina</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Not just Buenos Aires. From Patagonian lakes to Andean wine country,
              subtropical waterfalls to colonial Northwest towns — comprehensive expat
              guides for every corner of Argentina.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              Visas, cost of living, housing, healthcare, and honest advice for every
              province and major city in the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/provinces">
                  Explore Provinces
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cities">
                  Browse City Guides
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>24 provinces, 15+ city guides</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Lawyer-reviewed visa info</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Updated for 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Explorer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Argentina by Region
            </h2>
            <p className="text-muted-foreground text-lg">
              Six distinct regions, each with its own climate, culture, cost of living,
              and character. Find the Argentina that fits your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => {
              const regionProvinces = provinces.filter((p) => p.region === region.name);
              return (
                <Link
                  key={region.name}
                  href={`/provinces?region=${encodeURIComponent(region.name)}`}
                  className="group"
                >
                  <Card className="h-full group-hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`${region.color} text-white border-0`}>
                          {region.name}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {regionProvinces.length} provinces
                        </span>
                      </div>
                      <CardDescription className="text-base">
                        {region.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {regionProvinces.slice(0, 4).map((p) => (
                          <span
                            key={p.slug}
                            className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                          >
                            {p.name.replace(" (CABA)", "")}
                          </span>
                        ))}
                        {regionProvinces.length > 4 && (
                          <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                            +{regionProvinces.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        Explore region
                        <ArrowRightIcon size="sm" className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured City Guides</h2>
              <p className="text-muted-foreground text-lg">
                In-depth guides for Argentina&apos;s most popular expat destinations
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/cities">View All Cities</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCities.map((city) => {
              if (!city) return null;
              return (
                <Link key={city.slug} href={`/cities/${city.slug}`} className="group">
                  <Card className="h-full overflow-hidden group-hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${city.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">{city.name}</h3>
                        <p className="text-white/80 text-sm">{city.province}</p>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <DollarSignIcon size="sm" className="text-primary" />
                        <span>{city.costOfLiving}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {city.bestFor.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Argentina */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Expats Choose Argentina
            </h2>
            <p className="text-muted-foreground text-lg">
              Argentina consistently ranks as one of the top expat destinations in
              South America. Here&apos;s what makes it stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyArgentina.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon size="md" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Province Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">All 24 Provinces</h2>
              <p className="text-muted-foreground text-lg">
                Every province at a glance — click any to dive deeper
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/provinces">Full Province Guide</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {provinces.map((province) => {
              const region = regions.find((r) => r.name === province.region);
              return (
                <Link key={province.slug} href={`/provinces/${province.slug}`} className="group">
                  <Card className="h-full group-hover:shadow-md transition-shadow p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                        {province.name}
                      </h3>
                      <Badge
                        className={`${region?.color || "bg-gray-500"} text-white border-0 text-[10px] px-1.5 py-0 flex-shrink-0`}
                      >
                        {province.region}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <DollarSignIcon size="sm" className="w-3 h-3" />
                      <span>{province.costRange}</span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expat Guides & Resources
            </h2>
            <p className="text-muted-foreground text-lg">
              Practical, tested information on everything you need to know
              about living in Argentina. No fluff, no hand-waving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {guideCategories.map((guide) => (
              <Card key={guide.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <guide.icon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={guide.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read the guide
                    <ArrowRightIcon size="sm" className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MailIcon size="lg" className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated on Expat Life in Argentina</h2>
            <p className="text-muted-foreground mb-6">
              Weekly updates on visa policy changes, exchange rate news, cost of living
              adjustments, and practical tips for every region. No spam, no fluff — just
              the information that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
              />
              <Button className="gap-2">
                Subscribe
                <ArrowRightIcon size="sm" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Join thousands of expats getting the weekly Argentina update. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Argentina Journey
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Whether you&apos;re drawn to the vineyards of Mendoza, the lakes of Patagonia,
              the culture of Buenos Aires, or the affordability of the Northwest — Argentina
              has a place for you. Let us help you find it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/provinces">
                  Explore All Provinces
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Link href="/visas">
                  Visa Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-3xl mx-auto text-sm text-muted-foreground">
            <ShieldIcon size="md" className="flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> The information on this site is for general
              guidance only and does not constitute legal, financial, or immigration advice.
              Laws, regulations, and costs change frequently in Argentina. For personalized
              legal assistance with visas, residency, or any immigration matters, we recommend{" "}
              <Link href="https://lucerolegal.com" className="underline hover:text-foreground">
                Lucero Legal
              </Link>
              , our trusted legal partner specializing in Argentine immigration law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
