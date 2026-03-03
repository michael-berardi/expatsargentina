import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyTOC } from "@/components/StickyTOC";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import {
  BriefcaseIcon,
  DollarSignIcon,
  FileTextIcon,
  CalculatorIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  WalletIcon,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Working and Taxes in Argentina | Expat Guide to CUIT, Monotributo & More",
  description:
    "Complete guide to working and paying taxes in Argentina as a foreigner. CUIL/CUIT numbers, Monotributo for freelancers, employment law, remote work, and tax obligations explained.",
  keywords: [
    "working in Argentina foreigner",
    "Argentina taxes expat",
    "Monotributo Argentina",
    "CUIT Argentina foreigner",
    "freelancing Argentina",
    "remote work Argentina taxes",
    "Argentina employment law",
  ],
  openGraph: {
    title: "Working and Taxes in Argentina - Complete Expat Guide",
    description:
      "Everything expats need to know about working legally, tax obligations, Monotributo, and currency considerations in Argentina.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/working-taxes/",
  },
};

const tocItems = [
  { id: "working-legally", text: "Working Legally", level: 1 },
  { id: "cuil-cuit", text: "CUIL & CUIT Numbers", level: 1 },
  { id: "monotributo", text: "Monotributo (Freelancers)", level: 1 },
  { id: "employment-law", text: "Employment Law", level: 1 },
  { id: "remote-work", text: "Remote Work for Foreign Companies", level: 1 },
  { id: "tax-obligations", text: "Tax Obligations", level: 1 },
  { id: "currency", text: "Currency Considerations", level: 1 },
  { id: "professional-help", text: "Getting Professional Help", level: 1 },
];

export default function WorkingTaxesPage() {
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
            <span className="text-foreground">Working & Taxes</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <BriefcaseIcon size="sm" className="mr-1" />
              Updated 2026
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Working and Taxes in Argentina
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you are freelancing, employed locally, or working remotely
              for a foreign company, understanding how work and taxes function in
              Argentina is essential for staying legal and optimizing your
              finances.
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
              {/* Working Legally */}
              <section id="working-legally" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <BriefcaseIcon size="md" className="text-primary" />
                  Working Legally as a Foreigner
                </h2>
                <p className="text-muted-foreground mb-4">
                  To work legally in Argentina, you need two things: legal
                  residency status and a tax identification number. Tourists and
                  Digital Nomad Visa holders are technically not authorized to
                  work for Argentine employers, though remote work for foreign
                  companies occupies a gray area that many expats navigate.
                </p>
                <p className="text-muted-foreground mb-4">
                  The most common path for expats who want to work locally is to
                  obtain temporary residency through a work visa (sponsored by
                  an employer), Mercosur agreement (for citizens of Mercosur
                  member states), or another eligible residency category. Once
                  you have residency and a{" "}
                  <Link
                    href="/guides/getting-dni"
                    className="text-primary hover:underline"
                  >
                    DNI
                  </Link>
                  , the employment world opens up.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Note:</strong> Even with a work visa, your employment
                    options may be restricted to the specific employer that
                    sponsored you. If you want flexibility to freelance or
                    change employers, temporary residency through other channels
                    (Mercosur, family, rentista) provides more freedom.
                  </p>
                </div>
              </section>

              {/* CUIL/CUIT */}
              <section id="cuil-cuit" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <FileTextIcon size="md" className="text-primary" />
                  CUIL and CUIT Numbers
                </h2>
                <p className="text-muted-foreground mb-4">
                  These two acronyms are central to economic life in Argentina:
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  CUIL (Codigo Unico de Identificacion Laboral)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your labor identification code. It is automatically generated
                  when you receive your DNI and consists of a prefix, your DNI
                  number, and a verification digit (e.g., 20-12345678-9). You
                  need it for employment, social security, and healthcare. You
                  can look up your CUIL at{" "}
                  <strong>anses.gob.ar</strong> once your DNI is in the
                  system.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  CUIT (Codigo Unico de Identificacion Tributaria)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your tax identification code. It looks identical to a CUIL
                  (same format), but it is required for anyone who invoices,
                  freelances, runs a business, or needs to be registered with
                  AFIP (the Argentine tax authority). To get a CUIT, you
                  register at an AFIP office with your DNI and proof of address.
                  The registration is free and usually processed the same day.
                </p>
                <p className="text-muted-foreground">
                  Think of CUIL as your employee ID and CUIT as your
                  freelancer/business tax ID. If you plan to do any independent
                  work in Argentina, you will need a CUIT.
                </p>
              </section>

              {/* Monotributo */}
              <section id="monotributo" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <CalculatorIcon size="md" className="text-primary" />
                  Monotributo (Simplified Tax Regime)
                </h2>
                <p className="text-muted-foreground mb-4">
                  Monotributo is Argentina&apos;s simplified tax regime for small
                  taxpayers and freelancers. It is the most common way expats
                  formalize their independent work. Instead of paying multiple
                  separate taxes, Monotributo bundles everything into a single
                  monthly payment that covers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Income tax component</strong> (impuesto integrado)
                  </li>
                  <li>
                    <strong>Social security</strong> (aportes jubilatorios)
                  </li>
                  <li>
                    <strong>Healthcare</strong> (obra social, providing access to
                    a union-based health plan)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">
                  How It Works
                </h3>
                <p className="text-muted-foreground mb-4">
                  Monotributo has categories (A through K) based on your annual
                  gross income, physical workspace size, and electricity usage.
                  Most freelancing expats fall into categories A through D,
                  with monthly payments ranging from roughly $20 to $80 USD
                  equivalent. The monthly payment is fixed for your category,
                  regardless of how much you actually earn that month.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Registering for Monotributo
                </h3>
                <p className="text-muted-foreground mb-4">
                  You register through the AFIP website (afip.gob.ar) using
                  your CUIT and digital tax key (clave fiscal). The process is
                  online and, once your CUIT is active, can be completed in a
                  single session. You will need to:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Obtain your clave fiscal (digital tax key) at an AFIP office</li>
                  <li>Register your economic activity code on the AFIP website</li>
                  <li>Choose your Monotributo category based on projected income</li>
                  <li>Select a healthcare provider (obra social)</li>
                  <li>Begin making monthly payments (via direct debit or manual payment)</li>
                </ol>

                <h3 className="text-xl font-semibold mb-3">
                  Invoicing Under Monotributo
                </h3>
                <p className="text-muted-foreground">
                  As a Monotributista, you issue &quot;Factura C&quot; invoices
                  through the AFIP online system. These electronic invoices are
                  required for all services you provide. For clients outside
                  Argentina, you issue &quot;Factura E&quot; (export invoices).
                  The system is straightforward once you learn it, and your
                  accountant can walk you through the first few.
                </p>
              </section>

              {/* Employment Law */}
              <section id="employment-law" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Employment Law Basics
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you are hired by an Argentine company, you will be
                  protected by one of the strongest labor law frameworks in Latin
                  America. Key points:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    {
                      title: "Working Hours",
                      detail:
                        "Standard 48-hour week (8 hours/day). Overtime paid at 1.5x normal rate, 2x on weekends/holidays.",
                    },
                    {
                      title: "Vacation",
                      detail:
                        "14 days/year for 1-5 years of service, increasing with seniority up to 35 days for 20+ years.",
                    },
                    {
                      title: "13th Salary (Aguinaldo)",
                      detail:
                        "An extra month's salary paid in two installments: June and December. This is mandatory by law.",
                    },
                    {
                      title: "Severance",
                      detail:
                        "If terminated without cause, you are entitled to 1 month's salary per year worked (calculated on your highest monthly pay).",
                    },
                    {
                      title: "Probation Period",
                      detail:
                        "3-month probation for new hires. During this period, either party can terminate with minimal notice.",
                    },
                    {
                      title: "Healthcare & Pension",
                      detail:
                        "Employers contribute to your social security (jubilacion), healthcare (obra social), and other funds. These are deducted from your gross salary.",
                    },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangleIcon size="sm" className="text-amber-600" />
                    <span className="font-semibold text-amber-900 dark:text-amber-100">
                      Watch Out
                    </span>
                  </div>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Some employers may offer to pay you &quot;in black&quot; (en
                    negro), meaning off the books without formal registration.
                    This is illegal, provides no labor protections, no healthcare,
                    and no pension contributions. Always insist on formal
                    employment (&quot;en blanco&quot;).
                  </p>
                </div>
              </section>

              {/* Remote Work */}
              <section id="remote-work" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <GlobeIcon size="md" className="text-primary" />
                  Remote Work for Foreign Companies
                </h2>
                <p className="text-muted-foreground mb-4">
                  This is the most common situation for expats: working remotely
                  for a company based in the US, Europe, or elsewhere while
                  living in Argentina. The tax implications depend on your
                  residency status.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  If You Are a Tax Resident
                </h3>
                <p className="text-muted-foreground mb-4">
                  Argentina uses a worldwide income tax system. If you spend more
                  than 183 days per year in the country, you become a tax
                  resident and are technically liable for Argentine income tax on
                  your global income. This means your foreign salary or freelance
                  income is subject to Argentine taxes. Many expats who work
                  remotely register as Monotributistas and invoice their foreign
                  clients, keeping things formal and legal.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Receiving Foreign Income
                </h3>
                <p className="text-muted-foreground mb-4">
                  Getting paid by foreign clients while in Argentina has several
                  options: bank wire transfers (subject to official exchange
                  rates and banking fees), payment platforms like Payoneer or
                  Wise (popular among freelancers), cryptocurrency (USDT is
                  widely used), or services like Western Union for better
                  exchange rates on smaller amounts.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  The Digital Nomad Gray Area
                </h3>
                <p className="text-muted-foreground">
                  Many digital nomads on tourist entries or Digital Nomad Visas
                  work remotely without registering for Argentine taxes, since
                  their employer and income source are entirely foreign. While
                  this is common practice, the legal standing is ambiguous. If
                  you plan to stay long-term and want complete legal clarity, a
                  good tax advisor is essential. See our{" "}
                  <Link
                    href="/remote-work"
                    className="text-primary hover:underline"
                  >
                    remote work guide
                  </Link>{" "}
                  for more details.
                </p>
              </section>

              {/* Tax Obligations */}
              <section id="tax-obligations" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <DollarSignIcon size="md" className="text-primary" />
                  Tax Obligations
                </h2>
                <p className="text-muted-foreground mb-4">
                  Beyond Monotributo, Argentine tax residents may be subject to
                  additional taxes:
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Impuesto a las Ganancias (Income Tax)
                </h3>
                <p className="text-muted-foreground mb-4">
                  If your income exceeds Monotributo limits, you will need to
                  register as a Responsable Inscripto and pay income tax under
                  the general regime. This is a progressive tax with rates
                  ranging from 5% to 35%. Annual tax returns are filed through
                  the AFIP system, typically due in June for the previous
                  calendar year.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Impuesto sobre los Bienes Personales (Wealth Tax)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Argentina levies an annual wealth tax on individuals whose
                  total assets exceed a threshold (adjusted annually for
                  inflation). As a tax resident, this applies to your worldwide
                  assets. Rates range from 0.5% to 1.75% on assets above the
                  minimum threshold. This is one of the more controversial taxes
                  for expats with significant assets abroad.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  IVA (Value Added Tax)
                </h3>
                <p className="text-muted-foreground">
                  Argentina&apos;s VAT rate is 21% and is included in most
                  prices you see. As a consumer, you pay it on purchases. As a
                  Monotributista, you do not charge separate IVA. If you are a
                  Responsable Inscripto, you charge 21% IVA on invoices and
                  remit it to AFIP monthly.
                </p>
              </section>

              {/* Currency */}
              <section id="currency" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <WalletIcon size="md" className="text-primary" />
                  Currency Considerations
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina&apos;s currency situation is unique and has direct
                  implications for how you manage your work income.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Official vs. Parallel Rates
                </h3>
                <p className="text-muted-foreground mb-4">
                  Historically, Argentina has had a significant gap between the
                  official exchange rate and the informal &quot;blue dollar&quot;
                  or &quot;MEP&quot; rate. While recent economic reforms have
                  narrowed this gap, it&apos;s important to understand which rate
                  applies to your transactions. Bank transfers from abroad
                  typically convert at the official rate. Crypto and certain
                  financial instruments may give you better rates.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Pricing and Invoicing Strategy
                </h3>
                <p className="text-muted-foreground">
                  If you freelance for both local and international clients,
                  think carefully about how you price your services. Many expat
                  freelancers quote international clients in USD and local
                  clients in pesos. Your accountant can advise on the most
                  efficient way to structure your billing and currency
                  conversions to minimize tax impact and maximize purchasing
                  power.
                </p>
              </section>

              {/* Professional Help */}
              <section id="professional-help" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Getting Professional Help
                </h2>
                <p className="text-muted-foreground mb-4">
                  Given the complexity of Argentine tax law and its frequent
                  changes, hiring a contador (accountant) is not optional for
                  most expats. It is practically essential. A good accountant
                  will:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Register you with AFIP and set up your Monotributo or Responsable Inscripto status</li>
                  <li>Handle monthly and annual tax filings</li>
                  <li>Advise on the most tax-efficient way to receive foreign income</li>
                  <li>Keep you compliant as regulations change (which happens frequently)</li>
                  <li>Help you understand bilateral tax treaties between Argentina and your home country</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Expect to pay $50-150/month for a good accountant who works
                  with expats. Ask for recommendations in expat Facebook groups;
                  accountants who understand foreign income situations are worth
                  their weight in gold.
                </p>

                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon size="sm" className="text-emerald-600" />
                    <span className="font-semibold text-emerald-900 dark:text-emerald-100">
                      Pro Tip
                    </span>
                  </div>
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
                    Find an accountant who speaks English and has experience with
                    expat clients. They will understand your unique situation:
                    foreign income, bilateral treaties, currency exchange
                    strategies, and the specific obligations that come with being
                    a foreign tax resident. This is not the place to save money.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Related Guides
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link href="/guides/getting-dni">
                      Getting Your DNI
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/banking">
                      Banking Guide
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
              <LuceroLegalCTA
                title="Need Work Visa Assistance?"
                description="Lucero Legal helps expats obtain work permits and navigate Argentina's employment regulations. From visa applications to CUIL/CUIT registration, they handle the legal side."
              />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
