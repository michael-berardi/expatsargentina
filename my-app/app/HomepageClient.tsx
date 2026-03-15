"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPinIcon,
  DollarSignIcon,
  FileTextIcon,
  HomeIcon,
  HeartIcon,
  ArrowRightIcon,
  ShieldIcon,
  WifiIcon,
  WalletIcon,
  BusIcon,
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

const showcaseImages = [
  {
    src: "/images/provinces/buenos-aires-city.webp",
    label: "Buenos Aires",
    sublabel: "The Paris of South America",
    href: "/cities/buenos-aires",
    className: "col-span-2 row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/recipes/asado.webp",
    label: "Asado Culture",
    sublabel: "Fire, beef, and friends around the grill",
    href: "/food/recipes/asado",
    className: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/provinces/mendoza.webp",
    label: "Wine Country",
    sublabel: "Malbec at the foot of the Andes",
    href: "/wine",
    className: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/provinces/rio-negro.webp",
    label: "Patagonia",
    sublabel: "Lakes, glaciers, endless sky",
    href: "/provinces/rio-negro",
    className: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/recipes/empanadas.webp",
    label: "The Food",
    sublabel: "Empanadas, dulce de leche, mate",
    href: "/food",
    className: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/provinces/misiones.webp",
    label: "Iguazu Falls",
    sublabel: "One of the natural wonders of the world",
    href: "/provinces/misiones",
    className: "col-span-2",
    aspect: "aspect-[21/9]",
  },
];

const whyArgentinaImages = [
  {
    key: "costOfLiving",
    image: "/images/blog/buenos-aires-cost-of-living.webp",
    href: "/cost-of-living",
  },
  { key: "visaOptions", image: "/images/blog/digital-nomad-visa.webp", href: "/visas" },
  { key: "naturalBeauty", image: "/images/provinces/tierra-del-fuego.webp", href: "/provinces" },
  { key: "foodAndWine", image: "/images/guides/food-bg.webp", href: "/food" },
  { key: "culturalRichness", image: "/images/provinces/salta.webp", href: "/culture" },
  { key: "welcoming", image: "/images/cities/cordoba.webp", href: "/why-argentina" },
];

export default function Home() {
  const { t } = useI18n();
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero — full-bleed image */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          src="/images/hero-argentina.webp"
          alt="Argentina landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/90 [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
            Updated for 2026
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)] md:text-5xl lg:text-6xl">
            Your Complete Guide to Living in Argentina
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white/90 [text-shadow:_0_1px_4px_rgb(0_0_0_/_40%)] md:text-xl">
            Honest, detailed guides for every province, city, and visa type.
            What it actually costs, how the system really works, and what
            nobody tells you before you arrive.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-white text-black hover:bg-white/90"
            >
              <Link href="/provinces">
                Explore Provinces <ArrowRightIcon size="sm" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black"
            >
              <Link href="/visas/quiz">Find Your Visa</Link>
            </Button>
          </div>

          {/* Stats — hidden on mobile */}
          <div className="mx-auto mt-10 hidden max-w-2xl grid-cols-4 gap-3 sm:grid">
            {[
              { value: "24", label: "Provinces" },
              { value: "20+", label: "City Guides" },
              { value: "9", label: "Visa Types" },
              { value: "30+", label: "Living Guides" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Argentina — visual showcase grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-serif text-3xl font-bold md:text-4xl">
              Discover Argentina
            </h2>
            <p className="mb-8 text-center text-muted-foreground">
              Six thousand kilometers of mountains, vineyards, glaciers,
              and some of the best food on Earth.
            </p>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {showcaseImages.map((img) => (
                <Link
                  key={img.label}
                  href={img.href}
                  className={`group relative overflow-hidden rounded-xl ${img.className} ${img.aspect}`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
                    <p className="text-sm font-semibold text-white">
                      {img.label}
                    </p>
                    <p className="text-xs text-white/90">{img.sublabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Guides */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-serif text-3xl font-bold md:text-4xl">
              Essential Guides
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              The practical stuff — visas, money, housing, healthcare —
              explained without the fluff.
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold md:text-4xl">
                  Popular Destinations
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Where expats actually live — and why.
                </p>
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
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
                          <h3 className="text-lg font-semibold text-white">
                            {city.name}
                          </h3>
                          <p className="text-sm text-white/90">
                            {city.province}
                          </p>
                          <p className="mt-1 line-clamp-1 text-xs text-white/80">
                            {city.description}
                          </p>
                        </div>
                      </div>
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

      {/* Why Argentina — image cards */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-serif text-3xl font-bold md:text-4xl">
              {t("homepage.whyArgentina.title") as string}
            </h2>
            <p className="mb-10 text-center text-muted-foreground">
              What draws people here — and what to consider before making
              the move.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyArgentinaImages.map(({ key, image, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={image}
                      alt={
                        t(
                          `homepage.whyArgentina.${key}.title`
                        ) as string
                      }
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
                    <h3 className="mb-1 text-base font-semibold text-white">
                      {
                        t(
                          `homepage.whyArgentina.${key}.title`
                        ) as string
                      }
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-white/90">
                      {
                        t(
                          `homepage.whyArgentina.${key}.description`
                        ) as string
                      }
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Path — links to personalized content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-serif text-3xl font-bold md:text-4xl">
              Find Your Path
            </h2>
            <p className="mb-8 text-center text-muted-foreground">
              Guides tailored to your profession, nationality, and visa situation.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <Link href="/profession" className="group">
                <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MapPinIcon size="md" className="text-primary" />
                    </div>
                    <h3 className="mb-1 font-semibold">By Profession</h3>
                    <p className="text-sm text-muted-foreground">
                      100 profession guides — visa options, salary data, and networking tips for your field.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/nationality" className="group">
                <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <HeartIcon size="md" className="text-primary" />
                    </div>
                    <h3 className="mb-1 font-semibold">By Nationality</h3>
                    <p className="text-sm text-muted-foreground">
                      Country-specific guides with visa requirements, community info, and bilateral agreements.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/visas/quiz" className="group">
                <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <FileTextIcon size="md" className="text-primary" />
                    </div>
                    <h3 className="mb-1 font-semibold">Visa Finder Quiz</h3>
                    <p className="text-sm text-muted-foreground">
                      Answer 5 questions and get a personalized visa recommendation in 60 seconds.
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
