import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyTOC } from "@/components/StickyTOC";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  MapPinIcon,
  DollarSignIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  FileTextIcon,
  ShieldAlertIcon,
  SearchIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Finding Housing in Argentina | Expat Rental Guide",
  description:
    "Step-by-step guide to finding an apartment in Argentina as an expat. Learn where to search, how contracts work, the guarantee problem, neighborhood tips, and red flags to avoid.",
  keywords: [
    "rent apartment Argentina",
    "Buenos Aires housing expat",
    "Argentina rental guide",
    "contrato de alquiler",
    "garantia Argentina",
    "expat apartment Buenos Aires",
  ],
  openGraph: {
    title: "Finding Housing in Argentina | Expat Rental Guide",
    description:
      "A practical, step-by-step walkthrough for finding your apartment in Argentina — from temporary stays to signing your first lease.",
    url: "https://expatsargentina.com/guides/housing/",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/housing/",
  },
};

const tocItems = [
  { id: "temporary-vs-long-term", text: "Temporary vs Long-Term", level: 1 },
  { id: "where-to-search", text: "Where to Search", level: 1 },
  { id: "understanding-contracts", text: "Understanding Contracts", level: 1 },
  { id: "the-guarantee-problem", text: "The Guarantee Problem", level: 1 },
  { id: "neighborhood-quick-guide", text: "Neighborhood Quick Guide", level: 1 },
  { id: "red-flags", text: "Red Flags", level: 1 },
  { id: "next-steps", text: "Next Steps", level: 1 },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://expatsargentina.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://expatsargentina.com/guides/getting-started/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Finding Housing",
      item: "https://expatsargentina.com/guides/housing/",
    },
  ],
};

export default function HousingGuidePage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground">Finding Housing</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <HomeIcon size="sm" className="mr-1" />
              Rental Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              Finding Housing: A Practical Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A concise, step-by-step walkthrough for finding your apartment in
              Argentina. What to do first, where to look, and how to avoid the
              most common mistakes.
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
              {/* Temporary vs Long-Term */}
              <section id="temporary-vs-long-term" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <CheckCircleIcon size="md" className="text-primary" />
                  Start Temporary, Then Commit
                </h2>
                <p className="text-muted-foreground mb-4">
                  The single best piece of housing advice: do not sign a
                  long-term lease before you arrive. Book an Airbnb or furnished
                  temporary apartment for at least 1-2 weeks, ideally a full
                  month. Neighborhoods feel completely different once you are
                  actually living there. The buzzing nightlife that seemed fun
                  online can mean sleepless weeknights. The quiet residential
                  block might leave you feeling isolated.
                </p>
                <p className="text-muted-foreground">
                  Use your temporary stay to walk around during the day and at
                  night, test the commute to coworking spaces, and get a feel
                  for the local shops and cafes. Many expats who skip this step
                  end up breaking their lease early and losing their deposit.
                </p>
              </section>

              {/* Where to Search */}
              <section id="where-to-search" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <SearchIcon size="md" className="text-primary" />
                  Where to Search
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina has several go-to platforms for apartment hunting.
                  The best approach is to use multiple sources simultaneously.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>ZonaProp</strong> — the main rental listing site in
                    Argentina. Most landlords and agencies post here first. Filter
                    by neighborhood, price, and apartment size.
                  </li>
                  <li>
                    <strong>MercadoLibre Inmuebles</strong> — the real estate
                    section of Argentina&apos;s largest marketplace. Good for
                    finding owner-direct listings without agency fees.
                  </li>
                  <li>
                    <strong>Facebook Groups</strong> — search for &quot;Apartments
                    for rent in Buenos Aires&quot; and &quot;Buenos Aires Housing
                    for Expats.&quot; These groups often have foreigner-friendly
                    landlords who understand the guarantee issue.
                  </li>
                  <li>
                    <strong>Real estate agents (inmobiliarias)</strong> — they
                    charge a commission (typically one month&apos;s rent) but
                    handle paperwork and negotiations. Useful if your Spanish is
                    limited.
                  </li>
                  <li>
                    <strong>Word of mouth</strong> — once you are in the expat
                    community, apartments get passed around before they hit
                    listing sites. Attend meetups and mention you are looking.
                  </li>
                </ul>
              </section>

              {/* Understanding Contracts */}
              <section id="understanding-contracts" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <FileTextIcon size="md" className="text-primary" />
                  Understanding Contracts
                </h2>
                <p className="text-muted-foreground mb-4">
                  A standard Argentine rental contract (contrato de alquiler)
                  works differently from what most expats are used to. Here are
                  the basics:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Term:</strong> Contracts are typically 2 years (the
                    legal minimum for residential leases under current law). Some
                    temporary contracts run 3-12 months at higher monthly rates.
                  </li>
                  <li>
                    <strong>Currency:</strong> Rent is often quoted in USD but
                    payable in Argentine pesos at the current exchange rate.
                    Clarify which rate applies before signing.
                  </li>
                  <li>
                    <strong>Deposit:</strong> Expect to pay 1-2 months&apos; rent
                    upfront as a security deposit, returned at the end of the
                    contract (in theory).
                  </li>
                  <li>
                    <strong>Adjustments:</strong> Contracts include periodic rent
                    adjustments (often every 6 months) tied to an official
                    inflation index. This is standard and legal.
                  </li>
                  <li>
                    <strong>Expenses:</strong> &quot;Expensas&quot; are building
                    maintenance fees, paid monthly on top of rent. Always ask for
                    the expensas amount before committing.
                  </li>
                </ul>
              </section>

              {/* The Guarantee Problem */}
              <section id="the-guarantee-problem" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <ShieldAlertIcon size="md" className="text-primary" />
                  The Guarantee Problem
                </h2>
                <p className="text-muted-foreground mb-4">
                  This is the single biggest obstacle for expats renting in
                  Argentina. Most landlords require a garantia — a local
                  property owner in the same province who guarantees your rent.
                  As a foreigner, you almost certainly do not have one.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your workaround options:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Garantia propietaria</strong> — if you know a local
                    who owns property and is willing to vouch for you. The ideal
                    scenario, but rare for newcomers.
                  </li>
                  <li>
                    <strong>Seguro de caucion</strong> — a guarantee insurance
                    policy from companies like Finaer or Garantia Ya. Costs
                    roughly 3-5% of total contract value. Many landlords accept
                    this in place of a property guarantee.
                  </li>
                  <li>
                    <strong>Paying months upfront</strong> — offering 3-6 months
                    of rent in advance often convinces landlords to waive the
                    guarantee requirement entirely. This is the most common expat
                    strategy.
                  </li>
                </ul>
              </section>

              {/* Neighborhood Quick Guide */}
              <section id="neighborhood-quick-guide" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <MapPinIcon size="md" className="text-primary" />
                  Neighborhood Quick Guide
                </h2>
                <p className="text-muted-foreground mb-6">
                  Buenos Aires neighborhoods each have a distinct personality.
                  Here is a quick snapshot to narrow your search.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  {[
                    {
                      name: "Palermo",
                      price: "$$",
                      desc: "Trendy, full of cafes, coworking spaces, and nightlife. The expat hub — easy to make friends, but you pay a premium.",
                    },
                    {
                      name: "Recoleta",
                      price: "$$$",
                      desc: "Elegant, tree-lined avenues with European architecture. Safe and upscale, popular with families and professionals.",
                    },
                    {
                      name: "San Telmo",
                      price: "$",
                      desc: "Bohemian, cobblestone streets, tango bars, and antique markets. Character-rich and affordable, but some blocks feel rough at night.",
                    },
                    {
                      name: "Belgrano",
                      price: "$$",
                      desc: "Quiet, residential, family-friendly. Great parks, good schools, and Chinatown nearby. Less nightlife, more day-to-day livability.",
                    },
                    {
                      name: "Almagro / Caballito",
                      price: "$",
                      desc: "Authentic local neighborhoods with real Buenos Aires culture. Affordable rent, good transit connections, fewer tourists.",
                    },
                  ].map((hood) => (
                    <Card key={hood.name}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <MapPinIcon size="sm" className="text-primary" />
                            {hood.name}
                          </span>
                          <Badge variant="outline" className="text-accent font-medium">
                            {hood.price}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {hood.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Red Flags */}
              <section id="red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <AlertTriangleIcon size="md" className="text-primary" />
                  Red Flags to Watch For
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rental scams exist in Argentina, just like anywhere else.
                  Protect yourself by watching for these warning signs:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Never pay before viewing.</strong> If someone asks for
                    a deposit or &quot;reservation fee&quot; before you see the
                    apartment in person, walk away. This is the most common scam.
                  </li>
                  <li>
                    <strong>Verify the owner&apos;s identity.</strong> Ask to see
                    the property title (escritura) or utility bills in their name.
                    Subletting without the owner&apos;s knowledge happens.
                  </li>
                  <li>
                    <strong>Check that utilities are in the owner&apos;s name.</strong>{" "}
                    Unpaid utility debts can follow the property, not the person.
                    Ask to see recent bills for gas, electricity, and water.
                  </li>
                  <li>
                    <strong>Beware of prices that seem too good.</strong> If a
                    Palermo apartment is listed at half the going rate, something
                    is wrong. Cross-reference prices on ZonaProp to understand
                    fair market value.
                  </li>
                  <li>
                    <strong>Get everything in writing.</strong> Verbal agreements
                    mean nothing. Insist on a formal contract, even for
                    shorter-term arrangements.
                  </li>
                </ul>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  Next Steps
                </h2>
                <p className="text-muted-foreground mb-6">
                  This guide covers the essentials. For deeper dives into
                  specific topics, explore these resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link href="/housing">
                      Full Housing Reference
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/neighborhoods">
                      Neighborhood Guide
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/cost-of-living">
                      Cost of Living
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Lucero Legal CTA */}
              <p className="text-sm text-muted-foreground">
                <LuceroLegalCTA variant="inline" />
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
