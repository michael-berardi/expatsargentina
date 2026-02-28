import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { StickyTOC } from "@/components/StickyTOC";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

// JSON-LD structured data
function CostOfLivingStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://expatsargentina.com/cost-of-living/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://expatsargentina.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cost of Living"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://expatsargentina.com/cost-of-living/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to live in Argentina per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Monthly costs range from $650 in smaller cities like Cordoba to $1,200 in Buenos Aires. This includes rent, food, utilities, and transportation. Digital nomads and remote workers find Argentina very affordable compared to US/European cities."
            }
          },
          {
            "@type": "Question",
            "name": "Is Buenos Aires expensive for expats?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Buenos Aires is the most expensive city in Argentina but still affordable compared to major US or European cities. Expect $800-1,200/month for a comfortable lifestyle including a one-bedroom apartment in a good neighborhood."
            }
          },
          {
            "@type": "Question",
            "name": "How much is rent in Argentina?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rent varies by city: Buenos Aires $400-600 for a 1-bedroom, Mendoza $300-450, Cordoba $280-400, Bariloche $350-500. Prices are for furnished apartments in decent neighborhoods."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export const metadata: Metadata = {
  title: "Cost of Living in Argentina 2025 | Expats Guide",
  description:
    "Real cost of living numbers for Argentina in 2025. Monthly budgets for Buenos Aires, Mendoza, Cordoba with actual rent, food, and transport prices.",
  alternates: {
    canonical: "https://expatsargentina.com/cost-of-living/",
  },
};

const tocItems = [
  { id: "overview", text: "Overview", level: 1 },
  { id: "monthly-budgets", text: "Monthly Budgets by City", level: 1 },
  { id: "housing", text: "Housing Costs", level: 1 },
  { id: "food", text: "Food & Dining", level: 1 },
  { id: "transport", text: "Transportation", level: 1 },
  { id: "utilities", text: "Utilities & Services", level: 1 },
  { id: "healthcare", text: "Healthcare", level: 1 },
  { id: "visa-requirements", text: "Visa Financial Requirements", level: 1 },
];

const budgetData = [
  {
    city: "Buenos Aires",
    budget: "$800 – $1,200",
    rent1br: "$400 – $600",
    rent3br: "$700 – $1,100",
    mealOut: "$8 – $15",
    transport: "$15 – $25",
  },
  {
    city: "Mendoza",
    budget: "$700 – $1,000",
    rent1br: "$300 – $450",
    rent3br: "$550 – $850",
    mealOut: "$7 – $12",
    transport: "$10 – $20",
  },
  {
    city: "Cordoba",
    budget: "$650 – $950",
    rent1br: "$280 – $400",
    rent3br: "$500 – $750",
    mealOut: "$6 – $10",
    transport: "$12 – $20",
  },
  {
    city: "Bariloche",
    budget: "$750 – $1,100",
    rent1br: "$350 – $500",
    rent3br: "$600 – $900",
    mealOut: "$8 – $14",
    transport: "$15 – $25",
  },
];

const budgetColumns = [
  { key: "city", header: "City" },
  { key: "budget", header: "Monthly Budget", align: "right" as const },
  { key: "rent1br", header: "1BR Rent", align: "right" as const },
  { key: "rent3br", header: "3BR Rent", align: "right" as const },
];

export default function CostOfLivingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Updated February 2025
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Cost of Living in Argentina
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real numbers, updated monthly. What you will actually spend in
              Buenos Aires, Mendoza, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with TOC */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <StickyTOC items={tocItems} title="On this page" />
            </aside>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Bottom Line First
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina remains one of Latin America most affordable countries
                  for expats, despite years of high inflation. A single person
                  can live comfortably on $800–$1,200 per month in Buenos Aires.
                  Smaller cities drop that to $600–$900.
                </p>
                <p className="text-muted-foreground">
                  The key is understanding the dual currency economy. Official
                  exchange rates differ from the informal "blue dollar" rate by
                  20–50%. Using services like Western Union or crypto exchanges
                  that give you the blue rate effectively increases your purchasing
                  power significantly.
                </p>
              </section>

              {/* Monthly Budgets */}
              <section id="monthly-budgets" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Monthly Budgets by City
                </h2>
                <p className="text-muted-foreground mb-6">
                  These figures represent total monthly expenses for one person
                  living moderately: private apartment, eating out a few times per
                  week, occasional entertainment. Couples can expect roughly 1.6x
                  these amounts (shared rent, split utilities).
                </p>

                <div className="bg-card border rounded-lg p-4 md:p-6 mb-6">
                  <ResponsiveTable
                    caption="Monthly Costs by City (USD)"
                    columns={budgetColumns}
                    data={budgetData}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-800 mb-1">
                      Shoestring
                    </h3>
                    <p className="text-2xl font-bold text-emerald-700">$600</p>
                    <p className="text-sm text-emerald-600">
                      Shared apartment, cook at home, public transit only
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-1">
                      Comfortable
                    </h3>
                    <p className="text-2xl font-bold text-blue-700">$1,000</p>
                    <p className="text-sm text-blue-600">
                      1BR apartment, eat out weekly, occasional taxis
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-1">
                      High Life
                    </h3>
                    <p className="text-2xl font-bold text-purple-700">$1,800</p>
                    <p className="text-sm text-purple-600">
                      Premium apartment, dining out often, private healthcare
                    </p>
                  </div>
                </div>
              </section>

              {/* Housing */}
              <section id="housing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Housing Costs
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rent takes the biggest bite from most budgets. In Buenos Aires,
                  prices vary dramatically by neighborhood. Palermo and Recoleta
                  command premium rents. San Telmo, Almagro, and Caballito offer
                  better value.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most rentals require a garantía—a local property owner who
                  guarantees your rent. This is nearly impossible for foreigners
                  to obtain. Solutions include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Airbnb monthly:</strong> More expensive but no garantía
                    needed. Negotiate for 30%+ discounts on 3+ month stays.
                  </li>
                  <li>
                    <strong>Guarantor services:</strong> Companies like{" "}
                    <em> garantía BA</em> charge 3–5% of annual rent to act as your
                    guarantor.
                  </li>
                  <li>
                    <strong>Foreigner-friendly landlords:</strong> Some accept
                    larger security deposits (3–6 months) instead of garantía.
                  </li>
                </ul>
              </section>

              {/* Food */}
              <section id="food" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Food & Dining
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina food scene is a highlight for many expats. Steak
                  dinners at traditional parrillas run $15–$25 with wine. A
                  cafeteria-style lunch (menú del día) costs $4–$6.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cooking at home keeps costs down. Large supermarkets like
                  Carrefour and Coto are affordable. Neighborhood verdulerías
                  (produce shops) offer fresher vegetables at lower prices than
                  chains.
                </p>
              </section>

              {/* Transport */}
              <section id="transport" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Transportation
                </h2>
                <p className="text-muted-foreground mb-4">
                  Buenos Aires has excellent and affordable public transit. The
                  SUBE card works on buses, subways, and commuter trains. A single
                  ride costs about $0.20–$0.30. Monthly passes make sense if you
                  commute daily.
                </p>
                <p className="text-muted-foreground">
                  Taxis and Uber are widely available. A 15-minute Uber ride
                  typically costs $3–$5. Avoid taxis from the airport—book a
                  remis (private car) in advance for fixed rates around $25–$35
                  to the city center.
                </p>
              </section>

              {/* Utilities */}
              <section id="utilities" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Utilities & Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  Electricity and gas bills have risen substantially as
                  government subsidies decreased. A typical 1BR apartment now
                  pays $40–$80 monthly for utilities, depending on usage and
                  season.
                </p>
                <p className="text-muted-foreground">
                  Internet is affordable and generally reliable in cities. Fiber
                  plans with 100+ Mbps run $15–$25 per month. Mobile data is
                  inexpensive by international standards—$5–$10 gets you several
                  gigabytes.
                </p>
              </section>

              {/* Healthcare */}
              <section id="healthcare" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Healthcare Costs
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina has a three-tier healthcare system. Public hospitals
                  are free for everyone, including foreigners, though wait times
                  can be long and facilities vary.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most expats opt for private prepaid medicine (prepaga) plans.
                  Major providers like OSDE and Swiss Medical offer comprehensive
                  coverage for $100–$300 per month depending on age and plan
                  level. These plans include access to private hospitals, specialists
                  without referrals, and often dental coverage.
                </p>
              </section>

              {/* Visa Requirements */}
              <section id="visa-requirements" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Visa Financial Requirements
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina visa applications typically require proof of
                  sufficient funds. For the digital nomad visa, you will need to
                  show monthly income of approximately $1,500–$2,000 from a
                  foreign source.
                </p>
                <p className="text-muted-foreground">
                  The rentista visa (passive income) requires proof of stable
                  monthly income around $1,500 from investments, pensions, or
                  rental properties. Specific amounts vary by consulate and are
                  subject to change with inflation.
                </p>
              </section>

              {/* Lucero Legal CTA */}
              <LuceroLegalCTA 
                title="Planning Your Move?"
                description="Lucero Legal helps expats navigate Argentine immigration law. From digital nomad visas to permanent residency, they handle the paperwork so you can focus on your new life."
              />
            </article>
          </div>
        </div>
      </section>
      <CostOfLivingStructuredData />
    </main>
  );
}
