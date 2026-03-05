import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyTOC } from "@/components/StickyTOC";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import { Button } from "@/components/ui/button";
import {
  WalletIcon,
  CreditCardIcon,
  DollarSignIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowRightLeftIcon,
  ShieldAlertIcon,
  SmartphoneIcon,
  GlobeIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Banking & Money Guide for Expats in Argentina | Step by Step",
  description:
    "Practical step-by-step guide to banking, money transfers, exchange rates, and digital wallets for expats arriving in Argentina. What to do in your first week.",
  keywords: [
    "Argentina banking guide",
    "expat bank account Argentina",
    "blue dollar Argentina",
    "money transfer Argentina",
    "Mercado Pago expat",
    "Brubank foreigners",
    "Western Union Argentina",
    "digital wallets Argentina",
  ],
  openGraph: {
    title: "Banking & Money: Your First Steps in Argentina",
    description:
      "A concise, actionable walkthrough for setting up your finances as a new expat in Argentina — from opening accounts to getting the best exchange rates.",
    url: "https://expatsargentina.com/guides/banking/",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/banking/",
  },
};

const tocItems = [
  { id: "before-opening-account", text: "Before Opening an Account", level: 1 },
  { id: "choosing-a-bank", text: "Choosing a Bank", level: 1 },
  { id: "money-transfer-methods", text: "Money Transfer Methods", level: 1 },
  { id: "blue-dollar-basics", text: "Blue Dollar Basics", level: 1 },
  { id: "digital-wallets", text: "Digital Wallets", level: 1 },
  { id: "common-mistakes", text: "Common Mistakes", level: 1 },
  { id: "next-steps", text: "Next Steps", level: 1 },
];

export default function BankingGuidePage() {
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
        name: "Banking & Money",
        item: "https://expatsargentina.com/guides/banking/",
      },
    ],
  };

  return (
    <main className="min-h-screen">
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
            <span className="text-foreground">Banking &amp; Money</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <WalletIcon size="sm" className="mr-1" />
              Step-by-Step Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              Banking &amp; Money: Your First Steps
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical walkthrough for getting your finances set up in
              Argentina. What to do in your first week, which accounts to open,
              and how to avoid the most expensive mistakes.
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
              {/* Before Opening an Account */}
              <section id="before-opening-account" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircleIcon size="md" className="text-primary" />
                  Before Opening an Account
                </h2>
                <p className="text-muted-foreground mb-4">
                  Getting a local bank account in Argentina requires some
                  paperwork. Gather these before you visit a branch or sign up
                  online:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>DNI or passport</strong> &mdash; A DNI (Documento
                    Nacional de Identidad) is required for traditional banks.
                    Digital banks like Brubank accept a foreign passport.
                  </li>
                  <li>
                    <strong>Proof of address</strong> &mdash; A utility bill or
                    rental contract in your name. Some digital banks skip this
                    requirement entirely.
                  </li>
                  <li>
                    <strong>CUIL/CUIT number</strong> &mdash; Your Argentine tax
                    ID. You can get a CUIL at any ANSES office with your DNI or
                    passport. It takes about 30 minutes.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  <strong>Timeline:</strong> Traditional bank accounts take 1-2
                  weeks to fully activate. Digital banks like Brubank can be
                  ready in 24-48 hours. Start the process as soon as you arrive.
                </p>
              </section>

              {/* Choosing a Bank */}
              <section id="choosing-a-bank" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <CreditCardIcon size="md" className="text-primary" />
                  Choosing a Bank
                </h2>
                <p className="text-muted-foreground mb-6">
                  You don&apos;t need a traditional bank right away. Here&apos;s
                  how the main options compare for expats:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <SmartphoneIcon size="sm" className="text-primary" />
                        Brubank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Best for immediate use. Opens with just a passport, no
                        DNI needed. Free debit card, instant transfers, and a
                        clean app. Start here on day one.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <SmartphoneIcon size="sm" className="text-primary" />
                        Uala
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Easy digital setup with a prepaid Mastercard. Good for
                        online purchases and everyday spending. Low barriers for
                        foreigners.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GlobeIcon size="sm" className="text-primary" />
                        Banco Galicia
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Best traditional bank for online banking. Requires a
                        DNI. Solid app, widely accepted, good for long-term
                        residents who need a full-service bank.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <GlobeIcon size="sm" className="text-primary" />
                        Santander Argentina
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Best if you already bank with Santander internationally.
                        Requires a DNI. Useful for international transfers
                        between Santander accounts.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground">
                  <strong>Our recommendation:</strong> Download Brubank on day
                  one and open a traditional bank account later once you have
                  your DNI sorted.
                </p>
              </section>

              {/* Money Transfer Methods */}
              <section id="money-transfer-methods" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <ArrowRightLeftIcon size="md" className="text-primary" />
                  Money Transfer Methods
                </h2>
                <p className="text-muted-foreground mb-4">
                  How you move money into Argentina dramatically affects how much
                  you actually receive. Here are the main methods, ranked by
                  value:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Western Union</strong> &mdash; Consistently offers
                    some of the best peso rates for expats. Send from your home
                    bank, pick up cash in pesos at any WU location. Simple and
                    reliable.
                  </li>
                  <li>
                    <strong>Crypto (USDT/USDC)</strong> &mdash; Buy stablecoins
                    abroad, sell on local exchanges like Lemon Cash or Belo for
                    competitive rates. Requires some crypto familiarity.
                  </li>
                  <li>
                    <strong>Wise (TransferWise)</strong> &mdash; Convenient and
                    transparent fees, but rates are typically lower than Western
                    Union or crypto. Great for recurring transfers.
                  </li>
                  <li>
                    <strong>Cash exchange</strong> &mdash; Exchanging physical
                    USD at a &quot;cueva&quot; (informal exchange house) was once
                    common but carries risk. Use official channels whenever
                    possible.
                  </li>
                </ul>
              </section>

              {/* Blue Dollar Basics */}
              <section id="blue-dollar-basics" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <DollarSignIcon size="md" className="text-primary" />
                  Blue Dollar Basics
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina has historically had a gap between the official
                  exchange rate and the informal &quot;blue dollar&quot; rate.
                  The blue rate reflects real market demand for US dollars and
                  has often been 30-100% higher than the official rate.
                </p>
                <p className="text-muted-foreground mb-4">
                  Under recent economic reforms, the gap has narrowed
                  significantly. The government also introduced the{" "}
                  <strong>MEP dollar</strong> (dolar MEP), a legal way to access
                  a market-based exchange rate by buying and selling
                  Argentine bonds. Many expats use MEP through their brokerage
                  apps (like IOL or Bull Market) to convert dollars at better
                  rates legally.
                </p>
                <p className="text-muted-foreground">
                  <strong>Bottom line:</strong> Never use a bank ATM to withdraw
                  pesos from a foreign card if you can avoid it. The rate you
                  get through Western Union, crypto, or MEP will be
                  significantly better.
                </p>
              </section>

              {/* Digital Wallets */}
              <section id="digital-wallets" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <SmartphoneIcon size="md" className="text-primary" />
                  Digital Wallets
                </h2>
                <p className="text-muted-foreground mb-4">
                  Every expat in Argentina needs at least one digital wallet.
                  They are used everywhere, from supermarkets to street vendors.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Mercado Pago</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Essential. Argentina&apos;s most widely accepted payment
                        app. QR payments, bill pay, transit top-ups. Set this up
                        on day one.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Brubank</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Functions as both a bank and a wallet. Free transfers,
                        virtual and physical debit card, and a savings account
                        with interest.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Uala</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Good backup wallet with a prepaid Mastercard. Handy for
                        online purchases and international subscriptions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <ShieldAlertIcon size="md" className="text-primary" />
                  Common Mistakes
                </h2>
                <p className="text-muted-foreground mb-4">
                  Avoid these costly errors that catch nearly every new arrival:
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <AlertCircleIcon size="md" className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Using foreign ATM cards for withdrawals
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Bank ATMs convert at the official rate, which can mean
                        losing 10-30% of your money compared to Western Union or
                        crypto. Only use ATMs for emergencies.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertCircleIcon size="md" className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Not having a backup payment method
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Apps go down, cards get blocked, and cash runs out.
                        Always have at least two ways to pay: a digital wallet
                        plus cash, or two different cards.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <AlertCircleIcon size="md" className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Carrying too much cash
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Petty theft happens, especially in tourist areas. Keep
                        only what you need for the day. Use digital wallets for
                        larger purchases and store the rest in your accommodation
                        safe.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <ArrowRightIcon size="md" className="text-primary" />
                  Next Steps
                </h2>
                <p className="text-muted-foreground mb-6">
                  This guide covers the essentials for your first week. For
                  deeper dives into exchange rate strategies, investment
                  options, and tax implications, check out these resources:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link href="/banking">
                      Full Banking Reference
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/cost-of-living">
                      Cost of Living Calculator
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/guides/getting-started">
                      Getting Started Guide
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
