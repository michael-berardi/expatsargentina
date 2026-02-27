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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { neighborhoods, getNeighborhoodsByCity, getNeighborhoodCities } from "@/lib/data/neighborhoods";

const faqs = [
  {
    question: "What are the safest neighborhoods in Buenos Aires for expats?",
    answer:
      "Recoleta, Palermo, and Belgrano are consistently ranked as the safest neighborhoods in Buenos Aires. Recoleta has the lowest crime rates, well-lit streets, and a strong security presence due to nearby embassies. Palermo and Belgrano also feel very safe, with crime rates comparable to major European cities. The main risk across all three is petty theft like phone snatching, not violent crime.",
  },
  {
    question: "Which neighborhoods are best for families with children?",
    answer:
      "Belgrano and Nunez are the top choices for families, offering quiet residential streets, excellent schools (including international options like Lincoln and Northlands), parks, and a family-oriented culture. Palermo Botanico is another great option with green spaces like the Botanical Garden and Japanese Garden. Argentine culture is very family-friendly, and children are welcome everywhere, even at late-night restaurants.",
  },
  {
    question: "What are the most affordable neighborhoods that are still safe for expats?",
    answer:
      "Villa Crespo and Almagro offer the best value for expats who want to stay in safe, central areas. Villa Crespo gives you Palermo vibes at roughly 40% lower rent, with great restaurants and nightlife emerging rapidly. Almagro is even more affordable and offers an authentic porteño experience, though it has fewer English-speaking services. Both are well-connected by subway.",
  },
  {
    question: "Which neighborhoods are closest to the city center and business district?",
    answer:
      "San Telmo, Monserrat, and Recoleta are the closest residential neighborhoods to the Microcentro business district. San Telmo is a 10-minute taxi ride or short subway trip from the financial center. Recoleta borders the city center and offers easy access to downtown. Palermo is slightly further but extremely well-connected by subway (Lines D and B) and bus routes.",
  },
  {
    question: "Where are the best areas for nightlife and social life?",
    answer:
      "Palermo Hollywood and Palermo Soho are the epicenters of Buenos Aires nightlife, packed with bars, clubs, and restaurants that stay open until dawn. San Telmo has a more bohemian, tango-focused nightlife scene. Chacarita is the emerging hotspot with Buenos Aires' fastest-growing restaurant and bar district. For a more local experience, Villa Crespo's craft beer scene and Almagro's underground bars are worth exploring.",
  },
  {
    question: "Which neighborhoods have the largest expat communities?",
    answer:
      "Palermo Soho has the highest concentration of expats, particularly digital nomads and younger professionals. Recoleta attracts older expats and retirees who prefer its elegant, European atmosphere. Belgrano is popular with expat families due to its international schools. Nunez has a growing community of remote-working families. Villa Crespo is increasingly popular with budget-conscious expats who want to be near Palermo without the premium prices.",
  },
  {
    question: "How do I find an apartment in Buenos Aires as a foreigner?",
    answer:
      "Start by searching on platforms like Zonaprop, Argenprop, and Mercado Libre Inmuebles, or join Facebook groups like 'BA Expats' and 'Buenos Aires Housing.' Many expats initially book a temporary furnished apartment for 1-3 months through Airbnb or furnished rental sites while they explore neighborhoods in person. For long-term leases, you will likely need a garantia (guarantee) or pay several months upfront. A rental agent who works with foreigners can simplify the process significantly.",
  },
];

export const metadata: Metadata = {
  title: "Best Neighborhoods in Argentina for Expats 2026 — Buenos Aires, Mendoza & Córdoba",
  description: "Updated 2026 guide to 20+ neighborhoods across Buenos Aires, Mendoza, and Córdoba. Rent prices, safety rankings, transport links, and honest expat reviews for Argentina's top cities.",
  keywords: ["Argentina neighborhoods 2026", "best areas expats Buenos Aires", "Mendoza neighborhoods expats", "Córdoba neighborhoods expats", "where to live Argentina", "Palermo Recoleta rent prices"],
  openGraph: {
    title: "Best Neighborhoods in Argentina for Expats 2026",
    description: "Updated 2026 neighborhood guide with 20+ barrios across Buenos Aires, Mendoza, and Córdoba. Compare rent prices, safety, transport, and lifestyle.",
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
                "name": "Neighborhoods",
                "item": "https://expatsargentina.com/neighborhoods"
              }
            ]
          })
        }}
      />
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
              Best Neighborhoods for Expats in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find your perfect barrio across Buenos Aires, Mendoza, and Córdoba. Updated 2026
              rent prices, safety rankings, and honest assessments from expats who live here.
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

      {/* Neighborhoods Grid — Grouped by City */}
      {getNeighborhoodCities().map((city) => {
        const cityNeighborhoods = getNeighborhoodsByCity(city);
        const cityDescriptions: Record<string, string> = {
          "Buenos Aires": "Argentina's capital and the most popular expat destination. World-class dining, vibrant culture, and neighborhoods for every lifestyle and budget.",
          "Mendoza": "Argentina's wine capital at the foot of the Andes. Sun-drenched, affordable, and perfect for expats seeking a slower pace with world-class wine at their doorstep.",
          "Córdoba": "Argentina's second city and university hub. Young energy, rich history, and the most affordable urban living in the country.",
        };
        return (
          <section key={city} className="py-16 border-b last:border-b-0">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <Badge className="mb-4" variant="secondary">
                  <MapPinIcon size="sm" className="mr-1" />
                  {cityNeighborhoods.length} Neighborhoods
                </Badge>
                <h2 className="text-3xl font-bold mb-3">{city}</h2>
                <p className="text-muted-foreground">
                  {cityDescriptions[city] || `Explore neighborhoods in ${city}.`}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {cityNeighborhoods.map((hood) => (
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
        );
      })}

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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
