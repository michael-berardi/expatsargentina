import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HomeIcon,
  UtensilsIcon,
  TrainIcon,
  WifiIcon,
  HeartIcon,
  DollarSignIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  CoffeeIcon,
  ShoppingCartIcon,
} from "@/components/ui/icon";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

export const metadata: Metadata = {
  title: "Cost of Living in Argentina 2026 | Real Monthly Budgets by City",
  description:
    "Real cost of living numbers for Argentina in 2026. Monthly budgets for Buenos Aires, Mendoza, Cordoba, Salta, Rosario, Bariloche, and Mar del Plata with actual rent, food, and transport prices.",
  keywords: [
    "cost of living Argentina",
    "Argentina monthly budget",
    "Buenos Aires cost of living",
    "living expenses Argentina 2026",
    "rent Argentina",
  ],
  openGraph: {
    title: "Cost of Living in Argentina — Real Monthly Budgets (2026)",
    description:
      "Monthly budgets across 7 Argentine cities. Rent, food, transport, healthcare, and utilities — real numbers, not estimates.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/cost-of-living/",
  },
};

const cityBudgets = [
  { city: "Buenos Aires", budget: "$800–$1,200", rent1br: "$400–$600", rent3br: "$700–$1,100", mealOut: "$8–$15", highlight: true },
  { city: "Mendoza", budget: "$700–$1,000", rent1br: "$300–$450", rent3br: "$550–$850", mealOut: "$7–$12", highlight: false },
  { city: "Córdoba", budget: "$650–$950", rent1br: "$280–$400", rent3br: "$500–$750", mealOut: "$6–$10", highlight: false },
  { city: "Bariloche", budget: "$750–$1,100", rent1br: "$350–$500", rent3br: "$600–$900", mealOut: "$8–$14", highlight: false },
  { city: "Rosario", budget: "$650–$950", rent1br: "$280–$400", rent3br: "$500–$750", mealOut: "$6–$10", highlight: false },
  { city: "Salta", budget: "$550–$850", rent1br: "$200–$350", rent3br: "$400–$650", mealOut: "$5–$9", highlight: false },
  { city: "Mar del Plata", budget: "$650–$1,000", rent1br: "$300–$450", rent3br: "$500–$800", mealOut: "$7–$12", highlight: false },
];

const budgetTiers = [
  {
    tier: "Budget",
    icon: ShoppingCartIcon,
    monthly: "$600",
    color: "text-green-700",
    items: ["Shared apartment or room", "Cook at home, local markets", "Public transit only (SUBE)", "Free public healthcare", "Limited eating out"],
  },
  {
    tier: "Comfortable",
    icon: CoffeeIcon,
    monthly: "$1,000",
    color: "text-blue-700",
    items: ["1BR apartment in good barrio", "Eat out 2-3x per week", "Mix of transit, Uber, taxis", "Mid-range prepaga ($150/mo)", "Gym, coffee shops, entertainment"],
  },
  {
    tier: "Premium",
    icon: DollarSignIcon,
    monthly: "$1,800+",
    color: "text-purple-700",
    items: ["Premium apartment (Palermo, Recoleta)", "Dining out frequently, delivery apps", "Uber/taxi as primary transport", "Top-tier prepaga (OSDE 410+)", "Coworking, travel, premium lifestyle"],
  },
];

const groceryPrices = [
  { item: "1 kg beef (lomo)", price: "$6–$10" },
  { item: "1 kg chicken breast", price: "$3–$5" },
  { item: "1 dozen eggs", price: "$1.50–$2.50" },
  { item: "1 liter milk", price: "$0.80–$1.20" },
  { item: "1 kg rice", price: "$0.80–$1.20" },
  { item: "1 kg bread", price: "$1–$2" },
  { item: "1 kg tomatoes", price: "$1–$2" },
  { item: "1 bottle wine (decent)", price: "$3–$8" },
  { item: "1 liter beer (store)", price: "$1.50–$2.50" },
  { item: "1 kg cheese", price: "$4–$7" },
  { item: "Coffee (café)", price: "$1.50–$3" },
  { item: "Pizza delivery", price: "$4–$8" },
];

const faqs = [
  {
    question: "How much does it cost to live in Argentina per month?",
    answer:
      "Monthly costs range from $550 in smaller cities like Salta to $1,200 in Buenos Aires for a comfortable single-person lifestyle. This includes rent, food, utilities, transportation, and basic entertainment. Couples can expect roughly 1.6x a single person's budget due to shared rent and utilities. Digital nomads and remote workers earning in USD or EUR find Argentina very affordable.",
  },
  {
    question: "Is Buenos Aires expensive for expats?",
    answer:
      "Buenos Aires is the most expensive city in Argentina but still very affordable by international standards. A comfortable lifestyle costs $800-1,200/month — roughly one-third of comparable cities like Barcelona, Lisbon, or Miami. Palermo and Recoleta are the priciest neighborhoods; San Telmo, Almagro, and Caballito offer 20-30% savings on rent with good quality of life.",
  },
  {
    question: "How much is rent in Argentina?",
    answer:
      "A 1-bedroom apartment ranges from $200/month in Salta to $600/month in premium Buenos Aires neighborhoods. Mid-range neighborhoods in BA (Almagro, Caballito, Villa Crespo) run $350-450. Most landlords require a garantía (local property guarantor) which is difficult for foreigners — alternatives include garantía services (3-5% of annual rent), larger deposits, or Airbnb monthly rentals.",
  },
  {
    question: "What is the blue dollar and how does it affect costs?",
    answer:
      "The 'blue dollar' is the informal parallel exchange rate for USD. Under the current government's reforms, the gap between official and blue rates has narrowed to under 10% as of early 2026, down from 30-50% in prior years. Expats can still access slightly better rates through services like Western Union, Wise, and crypto exchanges. Always check current rates before budgeting — the situation changes monthly.",
  },
  {
    question: "How much does healthcare cost in Argentina?",
    answer:
      "Public healthcare is free for everyone, including foreigners. Most expats opt for private prepagas: budget plans (Sancor Salud) start at $100-150/month, mid-range (Galeno, Medicus) run $150-300, and premium (OSDE 410, Swiss Medical) cost $300-800. These include private hospitals, specialists, dental, and mental health coverage with small copays.",
  },
  {
    question: "Is it cheaper to live outside Buenos Aires?",
    answer:
      "Yes, significantly. Córdoba and Rosario are 20-30% cheaper than BA. Salta and Tucumán are 30-40% cheaper. Mendoza is slightly cheaper with a higher quality of life for outdoor enthusiasts. Bariloche is comparable to BA due to tourism-driven prices. The trade-off: smaller cities have fewer English speakers, less international food variety, and fewer coworking spaces.",
  },
];

export default function CostOfLivingPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com/" },
                  { "@type": "ListItem", position: 2, name: "Cost of Living" },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-orange-50 to-white px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Updated March 2026
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Cost of Living in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real monthly budgets across 7 cities. Rent, food, transport,
            healthcare, and utilities — actual numbers from expats on the
            ground, updated monthly.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPinIcon, label: "Cities Covered", value: "7" },
              { icon: DollarSignIcon, label: "BA Monthly", value: "$800–$1,200" },
              { icon: HomeIcon, label: "BA 1BR Rent", value: "$400–$600" },
              { icon: UtensilsIcon, label: "Meal Out", value: "$8–$15" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex items-center gap-3 p-4">
                  <stat.icon className="h-8 w-8 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="font-semibold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Rate Note */}
      <section className="border-b bg-blue-50/50 px-4 py-8">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-start gap-3">
            <DollarSignIcon className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" />
            <div>
              <h2 className="mb-2 font-semibold text-blue-900">
                Understanding the Exchange Rate
              </h2>
              <p className="text-sm text-blue-800">
                All prices are in USD at the parallel market rate. Under the
                current government&apos;s reforms, the gap between official and
                blue dollar rates has narrowed to under 10% as of early 2026
                (down from 30–50% in prior years). Services like Western Union,
                Wise, and crypto exchanges still offer slightly better rates.
                Always check current rates before budgeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tiers */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-3xl font-bold">
            What Does It Actually Cost?
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Monthly budget for one person in Buenos Aires. Smaller cities are
            20–40% cheaper.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {budgetTiers.map((tier) => (
              <Card key={tier.tier} className="relative">
                <CardHeader className="text-center">
                  <tier.icon className={`mx-auto h-8 w-8 ${tier.color}`} />
                  <CardTitle className="text-lg">{tier.tier}</CardTitle>
                  <p className={`text-2xl font-bold ${tier.color}`}>
                    {tier.monthly}
                    <span className="text-sm font-normal text-muted-foreground">
                      /mo
                    </span>
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* City Comparison Table */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Monthly Budgets by City
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Total monthly expenses for one person: private apartment, eating out
            a few times per week, occasional entertainment.
          </p>
          <Card>
            <CardContent className="overflow-x-auto p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="px-4 py-3 text-left font-semibold">City</th>
                    <th className="px-4 py-3 text-right font-semibold">Monthly Budget</th>
                    <th className="hidden px-4 py-3 text-right font-semibold sm:table-cell">1BR Rent</th>
                    <th className="hidden px-4 py-3 text-right font-semibold md:table-cell">3BR Rent</th>
                    <th className="hidden px-4 py-3 text-right font-semibold lg:table-cell">Meal Out</th>
                  </tr>
                </thead>
                <tbody>
                  {cityBudgets.map((city) => (
                    <tr
                      key={city.city}
                      className={`border-b last:border-0 ${city.highlight ? "bg-primary/5" : ""}`}
                    >
                      <td className="px-4 py-3 font-medium">
                        {city.city}
                        {city.highlight && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Most popular
                          </Badge>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {city.budget}
                      </td>
                      <td className="hidden px-4 py-3 text-right text-muted-foreground sm:table-cell">
                        {city.rent1br}
                      </td>
                      <td className="hidden px-4 py-3 text-right text-muted-foreground md:table-cell">
                        {city.rent3br}
                      </td>
                      <td className="hidden px-4 py-3 text-right text-muted-foreground lg:table-cell">
                        {city.mealOut}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Couples: multiply by ~1.6x (shared rent, split utilities). Prices at
            parallel exchange rate, March 2026.
          </p>
        </div>
      </section>

      {/* Housing */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <HomeIcon className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Housing Costs</h2>
          </div>
          <p className="mb-6 text-muted-foreground">
            Rent is the biggest expense. Prices vary dramatically by city and
            neighborhood — Palermo and Recoleta command premium rents, while San
            Telmo, Almagro, and Caballito offer 20–30% savings.
          </p>
          <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
            <div className="flex items-start gap-3">
              <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <h3 className="mb-1 font-semibold text-amber-900">
                  The Garantía Problem
                </h3>
                <p className="text-sm text-amber-800">
                  Most landlords require a garantía — a local property owner who
                  guarantees your rent. Nearly impossible for foreigners.
                  Solutions:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-amber-800">
                  <li>
                    <strong>Airbnb monthly:</strong> No garantía, negotiate 30%+
                    discounts on 3+ month stays
                  </li>
                  <li>
                    <strong>Garantía services:</strong> Companies charge 3–5% of
                    annual rent to act as guarantor
                  </li>
                  <li>
                    <strong>Larger deposit:</strong> Some landlords accept 3–6
                    months upfront instead
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food & Groceries */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <UtensilsIcon className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Food & Dining</h2>
          </div>
          <p className="mb-6 text-muted-foreground">
            Argentina&apos;s food scene is a highlight. Steak dinners at
            traditional parrillas run $15–$25 with wine. A cafeteria-style lunch
            (menú del día) costs $4–$6. Cooking at home with supermarket and
            verdulería shopping keeps costs well under $200/month.
          </p>

          <h3 className="mb-4 text-xl font-semibold">
            Grocery Prices (2026)
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groceryPrices.map((item) => (
              <Card key={item.item}>
                <CardContent className="flex items-center justify-between p-3">
                  <span className="text-sm text-muted-foreground">
                    {item.item}
                  </span>
                  <span className="font-semibold">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Prices in USD at parallel rate. Supermarket prices are 20–30% lower
            than convenience stores. Neighborhood verdulerías (produce shops)
            offer the best prices on fruits and vegetables.
          </p>
        </div>
      </section>

      {/* Transport & Utilities */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrainIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Transportation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Buenos Aires has excellent, affordable public transit. The SUBE
                  card works on buses, subways, and trains.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Single ride: $0.20–$0.30
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    15-min Uber: $3–$5
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Airport remis: $25–$35 (fixed rate)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Monthly transit: $15–$25
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <WifiIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Utilities & Internet</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Utility costs have risen as government subsidies decreased,
                  but remain affordable by international standards.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Electricity + gas: $40–$80/mo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Fiber internet (100+ Mbps): $15–$25/mo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Mobile data plan: $5–$10/mo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Water: included in expensas or $5–$10/mo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <HeartIcon className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-bold">Healthcare Costs</h2>
          </div>
          <p className="mb-6 text-muted-foreground">
            Argentina has a three-tier system. Public hospitals are free for
            everyone, including foreigners. Most expats opt for a private prepaga
            for faster access and better facilities.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                tier: "Budget",
                provider: "Sancor Salud",
                cost: "$100–$150/mo",
                notes: "Basic coverage, good regional network, longer wait times for specialists",
              },
              {
                tier: "Mid-Range",
                provider: "Galeno / Medicus",
                cost: "$150–$300/mo",
                notes: "Good hospital access, reasonable copays, dental included in most plans",
              },
              {
                tier: "Premium",
                provider: "OSDE 410 / Swiss Medical",
                cost: "$300–$800/mo",
                notes: "Top hospitals, minimal copays, English-speaking doctors, international coverage",
              },
            ].map((plan) => (
              <Card key={plan.tier}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{plan.tier}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.provider}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-xl font-bold text-primary">
                    {plan.cost}
                  </p>
                  <p className="text-xs text-muted-foreground">{plan.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <Link
              href="/healthcare"
              className="font-medium text-primary underline underline-offset-4"
            >
              See our full Healthcare guide
            </Link>{" "}
            for detailed provider comparisons and hospital recommendations.
          </p>
        </div>
      </section>

      {/* Visa Financial Requirements */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Visa Financial Requirements
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">Digital Nomad Visa</h3>
                <p className="text-2xl font-bold text-primary">
                  $1,500–$2,000
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo income
                  </span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Must show regular remote income from a foreign source. Exact
                  threshold varies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">Rentista Visa</h3>
                <p className="text-2xl font-bold text-primary">
                  ~$1,500
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo passive income
                  </span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  From investments, pensions, or rentals. Based on multiples of
                  the Argentine minimum salary — varies with inflation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold">
            Ready to Budget Your Move?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Cost of living is just one piece. Explore neighborhoods, visas, and
            housing to plan your full relocation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/guides/getting-started">
                Getting Started <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/neighborhoods">Neighborhoods</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/housing">Housing Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lucero Legal */}
      <div className="border-t px-4 py-8">
        <div className="container mx-auto max-w-3xl">
          <LuceroLegalCTA />
        </div>
      </div>
    </main>
  );
}
