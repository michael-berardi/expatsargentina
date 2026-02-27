import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPinIcon,
  DollarSignIcon,
  ShieldIcon,
  TrainIcon,
  CoffeeIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon
} from "@/components/ui/icon";
import { neighborhoods } from "@/lib/data/neighborhoods";

export const metadata: Metadata = {
  title: "Best Neighborhoods in Buenos Aires for Expats 2026",
  description: "Updated 2026 guide to 15+ Buenos Aires neighborhoods. Rent prices, safety rankings, transport links, and honest expat reviews. Compare Palermo, Recoleta, Belgrano, San Telmo, and more.",
  keywords: ["Buenos Aires neighborhoods 2026", "best areas expats Buenos Aires", "Palermo Recoleta rent prices", "where to live Buenos Aires", "BA barrio guide"],
  openGraph: {
    title: "Best Neighborhoods in Buenos Aires for Expats 2026",
    description: "Updated 2026 neighborhood guide with 15+ barrios. Compare rent prices, safety, transport, and lifestyle for each area.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/neighborhoods",
  },
};

const quickComparison = [
  { factor: "Best Overall", winner: "Palermo Soho", slug: "palermo-soho", reason: "Perfect balance of amenities, transport, and expat community" },
  { factor: "Safest", winner: "Recoleta", slug: "recoleta", reason: "Lowest crime rates, well-lit streets, embassy security" },
  { factor: "Best Value", winner: "Villa Crespo", slug: "villa-crespo", reason: "Palermo vibes at 40% lower rent" },
  { factor: "Best for Families", winner: "Belgrano", slug: "belgrano", reason: "Quiet streets, good schools, family-friendly" },
  { factor: "Best Nightlife", winner: "Palermo Hollywood", slug: "palermo-hollywood", reason: "Bars, clubs, and restaurants open until dawn" },
  { factor: "Most Authentic", winner: "San Telmo", slug: "san-telmo", reason: "Historic cobblestones, tango, Sunday market" },
  { factor: "Hottest Food Scene", winner: "Chacarita", slug: "chacarita", reason: "BA's fastest-growing restaurant district" },
  { factor: "Best Green Spaces", winner: "Palermo Botánico", slug: "palermo-botanico", reason: "Botanical Garden, Japanese Garden at your doorstep" },
  { factor: "Budget Pick", winner: "Almagro", slug: "almagro", reason: "Lowest central rents, authentic porteño life" },
];

export default function NeighborhoodsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Neighborhoods</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <MapPinIcon size="sm" className="mr-1" />
              {neighborhoods.length} Neighborhoods Covered
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Neighborhoods for Expats
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find your perfect barrio in Buenos Aires. Updated 2026 rent prices,
              safety rankings, and honest assessments from expats who live here.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Reality Banner */}
      <section className="py-8 bg-green-50 dark:bg-green-950/20 border-y border-green-200 dark:border-green-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
              Safety Reality: Palermo, Recoleta & Belgrano Are Very Safe
            </h2>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Despite media sensationalism, these neighborhoods have crime rates comparable to European cities.
              The main risks are petty theft (phone snatching), not violent crime. Most expats never experience any issues.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Comparison</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {quickComparison.map((item) => (
              <Link key={item.factor} href={`/neighborhoods/${item.slug}`}>
                <Card className="bg-primary/5 border-primary/10 hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">{item.factor}</div>
                    <div className="font-bold text-lg text-primary">{item.winner}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.reason}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">All Neighborhood Guides</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {neighborhoods.map((hood) => (
              <Link key={hood.slug} href={`/neighborhoods/${hood.slug}`}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-2xl">{hood.name}</CardTitle>
                        {hood.altNames && (
                          <CardDescription>{hood.altNames.join(" / ")}</CardDescription>
                        )}
                      </div>
                      <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">
                        <StarIcon size="sm" className="text-amber-600 fill-amber-600" />
                        <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                          {hood.expatScore}/10
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSignIcon size="sm" />
                        {hood.rentLevel}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <ShieldIcon size="sm" />
                        {hood.safety}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <TrainIcon size="sm" />
                        {hood.transport}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{hood.description}</p>

                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Average Rent:</div>
                      <div className="text-lg font-bold text-primary">{hood.rentRange}/month</div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Best For:</div>
                      <div className="flex flex-wrap gap-2">
                        {hood.bestFor.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <StarIcon size="sm" className="text-green-500" />
                          Highlights
                        </div>
                        <ul className="text-sm space-y-1">
                          {hood.highlights.slice(0, 4).map((item) => (
                            <li key={item} className="text-muted-foreground">+ {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <ShieldIcon size="sm" className="text-amber-500" />
                          Considerations
                        </div>
                        <ul className="text-sm space-y-1">
                          {hood.considerations.slice(0, 4).map((item) => (
                            <li key={item} className="text-muted-foreground">- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-primary font-medium flex items-center gap-1">
                      Read full guide
                      <ArrowRightIcon size="sm" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tips for Choosing Your Neighborhood</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrainIcon size="md" className="text-primary" />
                    Consider Transport Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Buenos Aires has excellent public transport, but some neighborhoods are better connected than others.
                    Palermo, Recoleta, and Belgrano have multiple subway lines. San Telmo and La Boca rely more on buses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSignIcon size="md" className="text-primary" />
                    Budget for USD Rent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most landlords now quote rent in USD. Rents have doubled since 2023. Factor in security deposit
                    (usually 1-2 months) and potential guarantee (garantía) requirements. Budget-friendly options
                    like Villa Crespo and Almagro offer great value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UsersIcon size="md" className="text-primary" />
                    Visit Before Committing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each neighborhood has a very different feel. If possible, spend a few days in
                    different areas before signing a lease. What&apos;s charming during the day might be
                    noisy at night. Thursday-Saturday nights are the real test.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CoffeeIcon size="md" className="text-primary" />
                    Think About Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Want cafes and restaurants? Palermo Soho or Chacarita. Prefer quiet evenings? Belgrano or Núñez.
                    Want authentic Buenos Aires? San Telmo or Almagro. Need the safest option? Recoleta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still Deciding?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Get our complete housing guide with tips on contracts, guarantees,
              and avoiding scams. Plus current rent prices for all neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/housing">
                  <ArrowRightIcon size="sm" className="mr-2" />
                  Housing Guide
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  Compare Costs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
