import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyTOC } from "@/components/StickyTOC";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import {
  FileTextIcon,
  HomeIcon,
  WalletIcon,
  SmartphoneIcon,
  HeartIcon,
  GraduationCapIcon,
  UsersIcon,
  CheckCircleIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Getting Started Guide | Moving to Argentina Step by Step",
  description:
    "The complete step-by-step guide for expats moving to Argentina. From visa research and budgeting to finding housing, setting up banking, healthcare, and building your social network.",
  keywords: [
    "moving to Argentina guide",
    "expat Argentina checklist",
    "how to move to Argentina",
    "Argentina relocation guide",
    "first steps Argentina",
  ],
  openGraph: {
    title: "Getting Started: Your Complete Guide to Moving to Argentina",
    description:
      "Step-by-step roadmap for every stage of your move to Argentina, from visa planning through settling in.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/getting-started/",
  },
};

const tocItems = [
  { id: "before-you-go", text: "Before You Go", level: 1 },
  { id: "visas-and-residency", text: "Visas & Residency", level: 1 },
  { id: "finding-housing", text: "Finding Housing", level: 1 },
  { id: "banking-and-money", text: "Banking & Money", level: 1 },
  { id: "phone-and-internet", text: "Phone & Internet", level: 1 },
  { id: "healthcare", text: "Healthcare", level: 1 },
  { id: "learning-spanish", text: "Learning Spanish", level: 1 },
  { id: "meeting-people", text: "Meeting People", level: 1 },
  { id: "first-week-checklist", text: "First Week Checklist", level: 1 },
];

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen">
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
            <span className="text-foreground">Getting Started</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPinIcon size="sm" className="mr-1" />
              Complete Relocation Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Getting Started: Moving to Argentina
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know, in the order you need to know it.
              From your first research phase through your first month on the
              ground.
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
              {/* Before You Go */}
              <section id="before-you-go" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircleIcon size="md" className="text-primary" />
                  Before You Go
                </h2>
                <p className="text-muted-foreground mb-4">
                  The planning phase is where most expats either set themselves
                  up for success or create headaches that follow them for months.
                  Start here, ideally 3-6 months before your move date.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Research Your Budget
                </h3>
                <p className="text-muted-foreground mb-4">
                  A comfortable single-person budget in Buenos Aires is
                  $800-1,200/month. Smaller cities like Cordoba or Mendoza can
                  drop that to $600-900. Build a realistic spreadsheet that
                  accounts for rent, food, healthcare, transportation, and a
                  contingency fund for unexpected expenses. We recommend having
                  at least 3 months of living expenses saved before arriving.
                  Check our{" "}
                  <Link
                    href="/cost-of-living"
                    className="text-primary hover:underline"
                  >
                    cost of living guide
                  </Link>{" "}
                  for detailed breakdowns.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Get Your Documents in Order
                </h3>
                <p className="text-muted-foreground mb-4">
                  Before departing, make sure you have: a passport valid for at
                  least 6 months, certified copies of important documents (birth
                  certificate, marriage certificate, university degrees),
                  apostilled documents if you plan to apply for residency, and
                  digital copies of everything stored securely in the cloud.
                  Argentina uses the Hague Apostille convention, so most
                  documents from member countries can be apostilled in your home
                  country before departing.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Arrange Initial Accommodation
                </h3>
                <p className="text-muted-foreground">
                  Don&apos;t sign a long-term lease sight unseen. Book an Airbnb
                  or temporary furnished apartment for your first 1-3 months.
                  This gives you time to explore neighborhoods in person, learn
                  how the rental market works, and find a place you actually want
                  to live. Many expats overpay because they commit to a
                  neighborhood before experiencing Buenos Aires firsthand.
                </p>
              </section>

              {/* Visas & Residency */}
              <section id="visas-and-residency" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <FileTextIcon size="md" className="text-primary" />
                  Visas and Residency
                </h2>
                <p className="text-muted-foreground mb-4">
                  Citizens of most Western countries (US, Canada, EU, UK,
                  Australia) can enter Argentina visa-free for 90 days, with one
                  renewal to 180 days total. Many expats start on this tourist
                  entry and apply for residency after arriving.
                </p>
                <p className="text-muted-foreground mb-4">
                  Your main visa options include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>
                      <Link
                        href="/visas/digital-nomad"
                        className="text-primary hover:underline"
                      >
                        Digital Nomad Visa
                      </Link>
                      :
                    </strong>{" "}
                    6-month renewable visa for remote workers earning from
                    foreign sources. Requires proof of ~$1,500/month income.
                  </li>
                  <li>
                    <strong>
                      <Link
                        href="/visas/temporary"
                        className="text-primary hover:underline"
                      >
                        Temporary Residency
                      </Link>
                      :
                    </strong>{" "}
                    1-3 year permit for work, study, family reunification, or
                    Mercosur citizens. Leads to permanent residency.
                  </li>
                  <li>
                    <strong>
                      <Link
                        href="/visas/retirement"
                        className="text-primary hover:underline"
                      >
                        Rentista (Passive Income) Visa
                      </Link>
                      :
                    </strong>{" "}
                    For those with stable monthly income from pensions,
                    investments, or rental properties.
                  </li>
                  <li>
                    <strong>
                      <Link
                        href="/visas/citizenship"
                        className="text-primary hover:underline"
                      >
                        Citizenship by Descent
                      </Link>
                      :
                    </strong>{" "}
                    If you have Italian, Spanish, or other European ancestry, you
                    may qualify for dual citizenship, which makes Argentine
                    residency straightforward.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Not sure which visa is right for you? Try our{" "}
                  <Link
                    href="/visas/quiz"
                    className="text-primary hover:underline"
                  >
                    visa finder quiz
                  </Link>{" "}
                  to get a personalized recommendation.
                </p>
              </section>

              {/* Finding Housing */}
              <section id="finding-housing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <HomeIcon size="md" className="text-primary" />
                  Finding Housing
                </h2>
                <p className="text-muted-foreground mb-4">
                  The rental market in Argentina works very differently from what
                  most expats are used to. Understanding the quirks saves you
                  time, money, and frustration.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  The Garantia Problem
                </h3>
                <p className="text-muted-foreground mb-4">
                  Traditional Argentine leases require a garantia: a local
                  property owner who guarantees your rent. This is nearly
                  impossible for foreigners to obtain. Your workarounds are:
                  paying several months upfront (3-6 months), using a guarantee
                  service company, or finding landlords who specifically rent to
                  foreigners. Facebook groups like &quot;BA Expats&quot; and
                  &quot;Buenos Aires Housing for Expats&quot; are gold mines for
                  foreigner-friendly listings.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Where to Search
                </h3>
                <p className="text-muted-foreground mb-4">
                  For long-term rentals, use Zonaprop, Argenprop, and Mercado
                  Libre Inmuebles. For temporary furnished apartments, try
                  Airbnb (negotiate monthly discounts), Booking.com for extended
                  stays, or platforms like Furnished Apartments BA. Real estate
                  agents who work with foreigners can also be valuable, though
                  they charge a commission (usually one month&apos;s rent).
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Choosing a Neighborhood
                </h3>
                <p className="text-muted-foreground">
                  Palermo Soho is the most popular expat neighborhood for a
                  reason: great restaurants, coworking spaces, and an active
                  social scene. But it&apos;s also the priciest. Villa Crespo
                  offers similar vibes at 40% less rent. Recoleta is elegant and
                  safe. San Telmo is bohemian and historic. Belgrano is
                  family-friendly. Browse our{" "}
                  <Link
                    href="/neighborhoods"
                    className="text-primary hover:underline"
                  >
                    neighborhood guide
                  </Link>{" "}
                  to find your fit.
                </p>
              </section>

              {/* Banking & Money */}
              <section id="banking-and-money" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <WalletIcon size="md" className="text-primary" />
                  Banking and Money
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina&apos;s financial system is unique and, frankly, a bit
                  confusing at first. Understanding how money works here is
                  essential.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  The Exchange Rate Situation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Argentina historically had multiple exchange rates: the
                  official rate and the informal &quot;blue dollar&quot; rate.
                  While the gap has narrowed significantly under recent economic
                  reforms, it&apos;s still important to understand how to
                  maximize your purchasing power. Services like Western Union and
                  crypto exchanges (USDT is widely used) typically offer better
                  rates than ATMs or credit card conversions.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Opening a Bank Account
                </h3>
                <p className="text-muted-foreground mb-4">
                  To open a local bank account, you typically need a DNI (national
                  identity document) and proof of address. Some digital banks like
                  Brubank, Uala, and Mercado Pago are more flexible with
                  requirements. Most expats use a combination of a local account
                  for daily expenses and their home country accounts for savings.
                  Check our{" "}
                  <Link
                    href="/banking"
                    className="text-primary hover:underline"
                  >
                    banking guide
                  </Link>{" "}
                  for step-by-step instructions.
                </p>

                <h3 className="text-xl font-semibold mb-3">Cash Is Still King</h3>
                <p className="text-muted-foreground">
                  While card payment has become much more common, many smaller
                  shops, restaurants, and service providers still prefer cash.
                  Always carry some pesos. Supermarkets, chain restaurants, and
                  modern cafes accept cards and digital wallets (Mercado Pago is
                  ubiquitous).
                </p>
              </section>

              {/* Phone & Internet */}
              <section id="phone-and-internet" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <SmartphoneIcon size="md" className="text-primary" />
                  Phone and Internet
                </h2>
                <p className="text-muted-foreground mb-4">
                  Getting connected in Argentina is straightforward and affordable.
                </p>

                <h3 className="text-xl font-semibold mb-3">Mobile Service</h3>
                <p className="text-muted-foreground mb-4">
                  The three major carriers are Claro, Movistar, and Personal.
                  Prepaid SIM cards are cheap and easy to get, just walk into any
                  carrier store with your passport. A prepaid plan with decent
                  data costs $5-10/month. For postpaid plans with more data, you
                  will need a DNI. Most expats start prepaid and switch to
                  postpaid after getting their documents.
                </p>

                <h3 className="text-xl font-semibold mb-3">Home Internet</h3>
                <p className="text-muted-foreground">
                  Fiber internet is widely available in major cities. Fibertel
                  (Telecentro) and Movistar offer plans from 100 Mbps to 1 Gbps.
                  Monthly costs run $15-30 depending on speed and provider.
                  Installation usually takes 1-2 weeks. If you are in a
                  temporary apartment, most furnished rentals include internet.
                  For coworking, WeWork and dozens of local spaces offer day
                  passes ($10-15) and monthly memberships ($50-150).
                </p>
              </section>

              {/* Healthcare */}
              <section id="healthcare" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <HeartIcon size="md" className="text-primary" />
                  Healthcare
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina has a three-tier healthcare system: public (free for
                  everyone), obras sociales (union-based), and private prepagas
                  (prepaid private insurance). Most expats choose private.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Private Healthcare (Prepagas)
                </h3>
                <p className="text-muted-foreground mb-4">
                  The top providers are OSDE (considered the best), Swiss Medical,
                  Galeno, and Medicus. Plans range from $100-300/month depending on
                  your age and coverage level. These plans include: doctor visits
                  with no referral needed, specialist access, hospital coverage,
                  prescription drug discounts, and often dental and vision care.
                  The quality of private healthcare in Argentina is excellent, with
                  many doctors trained in the US or Europe.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Public Healthcare
                </h3>
                <p className="text-muted-foreground">
                  Public hospitals still matter as a real emergency safety net,
                  but if you are arriving in 2026 you should not plan around
                  free routine care as a foreigner. After the 2025 migration
                  changes, the safer assumption is that emergency treatment
                  remains available while non-emergency care may require
                  insurance or prepayment depending on the facility. For
                  emergencies, public hospitals like Hospital Italiano (which
                  also has a private wing) and Hospital Aleman can provide
                  excellent care. Read our detailed{" "}
                  <Link
                    href="/healthcare"
                    className="text-primary hover:underline"
                  >
                    healthcare guide
                  </Link>
                  {" "}and the focused{" "}
                  <Link
                    href="/blog/argentina-entry-rules-2026-health-insurance"
                    className="text-primary hover:underline"
                  >
                    2026 entry-rules update
                  </Link>
                  .
                </p>
              </section>

              {/* Learning Spanish */}
              <section id="learning-spanish" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <GraduationCapIcon size="md" className="text-primary" />
                  Learning Spanish
                </h2>
                <p className="text-muted-foreground mb-4">
                  You can survive with English in Buenos Aires, but you will
                  thrive with Spanish. Argentine Spanish (known as Rioplatense or
                  Castellano) has its own accent, slang, and charm, including the
                  distinctive &quot;vos&quot; instead of &quot;tu.&quot;
                </p>

                <h3 className="text-xl font-semibold mb-3">Language Schools</h3>
                <p className="text-muted-foreground mb-4">
                  Buenos Aires has excellent Spanish schools at great prices.
                  Group classes run $100-200/month for 2-3 sessions per week.
                  Private tutors charge $10-20/hour. Popular options include
                  Expanish, Vamos Spanish Academy, and COINED. Many schools offer
                  immersive programs that combine classroom learning with
                  cultural activities.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Free and Low-Cost Options
                </h3>
                <p className="text-muted-foreground">
                  Language exchange meetups (intercambios) happen weekly in most
                  major cities. You teach English, they teach Spanish, usually
                  over coffee or beers. Apps like Tandem and HelloTalk connect
                  you with native speakers. The Buenos Aires government also
                  offers free Spanish classes for foreigners at various community
                  centers. Visit our{" "}
                  <Link
                    href="/learn-spanish"
                    className="text-primary hover:underline"
                  >
                    Spanish learning guide
                  </Link>{" "}
                  for more resources.
                </p>
              </section>

              {/* Meeting People */}
              <section id="meeting-people" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <UsersIcon size="md" className="text-primary" />
                  Meeting People
                </h2>
                <p className="text-muted-foreground mb-4">
                  Building a social network is one of the most important things
                  you can do after arriving. Argentina&apos;s social culture
                  makes this easier than in many countries, but it still takes
                  effort.
                </p>

                <h3 className="text-xl font-semibold mb-3">Expat Communities</h3>
                <p className="text-muted-foreground mb-4">
                  Join Facebook groups like &quot;Expats in Buenos Aires,&quot;
                  &quot;BA Newcomers,&quot; and &quot;Digital Nomads Buenos
                  Aires.&quot; Attend meetups through Meetup.com or Internations.
                  Coworking spaces are natural networking hubs. The expat
                  community in Buenos Aires is large and welcoming, with regular
                  social events, dinners, and activities.
                </p>

                <h3 className="text-xl font-semibold mb-3">Making Local Friends</h3>
                <p className="text-muted-foreground mb-4">
                  Argentines are famously warm and social, but friendships
                  develop differently here. Accept every invitation. Show up to
                  asados (even if you arrive &quot;on time&quot; and no one is
                  there yet). Join a sports league, take tango classes, or sign
                  up for a cooking class. Shared activities are the fastest path
                  to genuine friendships.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Language Exchanges
                </h3>
                <p className="text-muted-foreground">
                  Intercambios (language exchanges) serve double duty: improve
                  your Spanish and make friends. Mundo Lingo hosts free language
                  exchanges in bars across Buenos Aires every night of the week.
                  It&apos;s one of the easiest ways to meet both expats and
                  locals in your first weeks.
                </p>
              </section>

              {/* First Week Checklist */}
              <section id="first-week-checklist" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Your First Week Checklist
                </h2>
                <p className="text-muted-foreground mb-6">
                  Hit the ground running with these essential tasks for your
                  first 7 days in Argentina.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: SmartphoneIcon,
                      task: "Get a local SIM card",
                      detail:
                        "Visit any Claro, Movistar, or Personal store. Bring your passport.",
                    },
                    {
                      icon: WalletIcon,
                      task: "Set up Mercado Pago",
                      detail:
                        "Argentina's most-used payment app. Essential for daily transactions.",
                    },
                    {
                      icon: MapPinIcon,
                      task: "Get a SUBE transit card",
                      detail:
                        "Available at subway stations and kioscos. Load it and ride buses, subway, trains.",
                    },
                    {
                      icon: HomeIcon,
                      task: "Explore 3+ neighborhoods",
                      detail:
                        "Walk around, eat there, visit at night. You need to feel the vibe before committing.",
                    },
                    {
                      icon: UsersIcon,
                      task: "Attend a meetup or exchange",
                      detail:
                        "Check Mundo Lingo, Meetup.com, or expat Facebook groups for events.",
                    },
                    {
                      icon: HeartIcon,
                      task: "Research healthcare options",
                      detail:
                        "Get quotes from OSDE, Swiss Medical, Galeno. Don't go uninsured.",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Icon size="sm" className="text-primary" />
                            {item.task}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.detail}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What&apos;s Next?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Once you are settled, these guides will help you with the
                  next phase of your Argentine life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link href="/guides/getting-dni">
                      Getting Your DNI
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/guides/working-taxes">
                      Working and Taxes
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/neighborhoods">
                      Neighborhood Guide
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Lucero Legal CTA */}
              <LuceroLegalCTA />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
