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
  DollarSignIcon,
  FileTextIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CalendarIcon,
  GlobeIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Taxes in Argentina for Expats 2026 | Income Tax, Wealth Tax & Filing",
  description:
    "Tax guide for expats in Argentina. Income tax (Ganancias), wealth tax (Bienes Personales), VAT, the 183-day rule, monotributo, double taxation treaties, and how to file with ARCA.",
  keywords: [
    "Argentina taxes expats",
    "income tax Argentina",
    "Ganancias tax",
    "Bienes Personales",
    "monotributo Argentina",
    "tax residency Argentina",
    "ARCA Argentina",
  ],
  openGraph: {
    title: "Taxes in Argentina for Expats — 2026 Guide",
    description:
      "Income tax, wealth tax, VAT, monotributo, and filing obligations for expats living and working in Argentina.",
  },
  alternates: { canonical: "https://expatsargentina.com/taxes" },
};

const taxTypes = [
  {
    name: "Impuesto a las Ganancias (Income Tax)",
    icon: DollarSignIcon,
    description:
      "Argentina's progressive income tax on worldwide income for tax residents. Non-residents are taxed only on Argentine-source income.",
    details: [
      "Tax residents pay on worldwide income — including foreign employment, investments, and rental income",
      "Progressive rates from 5% to 35% on net taxable income",
      "Significant deductions available: personal minimum, spouse, children, healthcare, rent (for tenants)",
      "Employment income is withheld by employer. Freelancers and self-employed must file and pay quarterly",
      "Foreign tax credits available to avoid double taxation",
    ],
    warning:
      "The income tax floor (mínimo no imponible) is adjusted periodically for inflation. Check current ARCA thresholds — many salaried workers fall below the floor and owe nothing.",
  },
  {
    name: "Bienes Personales (Wealth Tax)",
    icon: FileTextIcon,
    description:
      "Annual tax on your total worldwide assets above a threshold. Unique to Argentina — most countries do not have this. One of the most impactful taxes for expats with savings.",
    details: [
      "Applies to tax residents on worldwide assets above the threshold (currently around $100,000+ USD equivalent, adjusted annually)",
      "Progressive rates from 0.5% to 1.5% on the value of assets above the minimum",
      "Covers: bank accounts, investments, real estate, vehicles, art, crypto — everything",
      "Foreign assets are taxed at a higher rate than domestic assets (incentive to bring money into Argentina)",
      "The Milei government has been reducing Bienes Personales rates as part of economic reform — the 2025 Ley Bases package included a special \"buy-down\" option and rate reductions",
    ],
    warning:
      "This is the tax that surprises expats most. If you have significant savings or investments outside Argentina, Bienes Personales can be a major annual cost. Plan with a tax advisor before establishing residency.",
  },
  {
    name: "IVA (Value Added Tax)",
    icon: DollarSignIcon,
    description:
      "Argentina's VAT at 21% on most goods and services. Some items (food, medicine, books) are taxed at 10.5% or exempt.",
    details: [
      "Standard rate: 21% — included in the sticker price of most items",
      "Reduced rate: 10.5% on basic food items, medical services, public transport, and some technology",
      "Exempt: education, financial services (some), exports",
      "If you are registered as Monotributista or Responsable Inscripto, you charge IVA on your invoices",
      "IVA refund is available at airports for tourists on eligible purchases over certain thresholds",
    ],
    warning: null,
  },
  {
    name: "Monotributo (Simplified Tax Regime)",
    icon: CheckCircleIcon,
    description:
      "Argentina's simplified tax system for small businesses and freelancers. Combines income tax, IVA, and social security into a single monthly payment.",
    details: [
      "11 categories (A through K) based on annual gross income, with fixed monthly payments",
      "Monthly payment ranges from ~$20 to ~$200 USD depending on category",
      "Includes basic healthcare (obra social) and pension contributions",
      "Cannot be used if your annual income exceeds the top category limit (approximately $50,000–$60,000 USD equivalent)",
      "Registration through ARCA's online portal with your CUIT number",
      "Invoices issued as 'C' type (Factura C) — no IVA charged separately",
    ],
    warning:
      "Monotributo is the standard path for freelancers and digital nomads who want to invoice locally. If your income exceeds the limits, you must register as Responsable Inscripto (full tax regime with higher obligations).",
  },
];

const faqs = [
  {
    question: "When do I become a tax resident of Argentina?",
    answer:
      "You become a tax resident if you spend 183 or more days in Argentina during a calendar year (January–December), or if you establish your center of vital interests here (permanent home, family, economic activities). Once you are a tax resident, Argentina taxes your worldwide income. The 183-day count resets each calendar year. Simply having a DNI or residency visa does not automatically make you a tax resident — physical presence is the primary test.",
  },
  {
    question: "Do I need to declare foreign bank accounts and investments?",
    answer:
      "Yes. Tax residents must declare all worldwide assets in their annual Bienes Personales filing. This includes foreign bank accounts, brokerage accounts, crypto holdings, real estate, and other assets. Argentina has information-sharing agreements (CRS) with most countries, so ARCA can verify your declarations against data from foreign tax authorities. Under-reporting carries serious penalties.",
  },
  {
    question: "Can I avoid double taxation?",
    answer:
      "Argentina has double taxation treaties with about 20 countries, including Spain, the UK, Germany, France, Australia, and several Latin American nations. The US does NOT have a tax treaty with Argentina, though US citizens can use the foreign tax credit on their US return for taxes paid to Argentina. If your country has no treaty, you may face double taxation on some income — consult a tax advisor familiar with both jurisdictions.",
  },
  {
    question: "How do I get a CUIT number?",
    answer:
      "A CUIT (Clave Única de Identificación Tributaria) is your tax ID number. You need one to invoice, register for Monotributo, open certain bank accounts, and file taxes. Apply at any ARCA (formerly AFIP) office with your DNI, passport, and proof of address. The process usually takes one visit and you get the number immediately. ARCA offices often have long waits — arrive early or book an appointment online.",
  },
  {
    question: "What about crypto taxes?",
    answer:
      "Cryptocurrency is not specifically regulated in Argentine tax law as of 2026, but ARCA treats it as a taxable asset. Gains from selling crypto are subject to income tax (Ganancias). Holdings must be declared in Bienes Personales. The practical enforcement is evolving — ARCA has been increasing its monitoring of crypto exchanges. Many expats hold crypto offshore, but with expanding CRS data sharing, the risk of under-reporting is increasing.",
  },
  {
    question: "When are tax filings due?",
    answer:
      "Annual income tax (Ganancias) and wealth tax (Bienes Personales) filings are typically due in June for the previous calendar year, with the exact date depending on your CUIT number's last digit. Monotributo payments are due on the 20th of each month. Quarterly advance payments (anticipos) may be required for income tax depending on your situation. The fiscal year in Argentina is the calendar year (January–December).",
  },
];

export default function TaxesPage() {
  return (
    <main className="min-h-screen bg-white">
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

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-amber-50 to-white px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Updated 2026
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Taxes in Argentina for Expats
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Income tax, wealth tax, VAT, monotributo, and what you actually owe.
            Argentina's tax system is not simple, but understanding the basics
            before you arrive can save you thousands.
          </p>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="border-b bg-amber-50/50 px-4 py-6">
        <div className="container mx-auto flex max-w-4xl items-start gap-3">
          <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div className="text-sm">
            <p className="font-semibold text-amber-800">
              This is general information, not tax advice.
            </p>
            <p className="text-amber-700">
              Argentine tax law changes frequently. Rates, thresholds, and rules
              described here are approximate as of early 2026. Consult a
              certified Argentine tax accountant (contador público) before making
              residency or financial decisions. Tax advice for your specific
              situation depends on your nationality, income sources, assets, and
              personal circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Tax Residency", value: "183+ days/year" },
              { label: "Income Tax Rate", value: "5–35% progressive" },
              { label: "Wealth Tax", value: "0.5–1.5% on assets" },
              { label: "VAT (IVA)", value: "21% standard" },
            ].map((fact) => (
              <Card key={fact.label}>
                <CardContent className="p-4 text-center">
                  <p className="text-xs text-muted-foreground">{fact.label}</p>
                  <p className="text-lg font-bold">{fact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Types of Taxes You Need to Know
          </h2>
          <div className="space-y-8">
            {taxTypes.map((tax) => (
              <Card key={tax.name}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <tax.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{tax.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tax.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {tax.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {tax.warning && (
                    <div className="flex items-start gap-2 rounded-md bg-amber-50 p-3 text-sm">
                      <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <span className="text-amber-800">{tax.warning}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Double Taxation Treaties */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Double Taxation Treaties
          </h2>
          <p className="mb-6 text-center text-muted-foreground">
            Argentina has tax treaties with about 20 countries. Key ones for
            expats:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Spain",
              "United Kingdom",
              "Germany",
              "France",
              "Italy",
              "Australia",
              "Canada",
              "Belgium",
              "Norway",
              "Sweden",
              "Denmark",
              "Finland",
              "Russia",
              "Chile",
              "Brazil",
              "Bolivia",
              "Uruguay",
              "Switzerland",
            ].map((country) => (
              <div
                key={country}
                className="flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm"
              >
                <GlobeIcon className="h-4 w-4 text-primary" />
                {country}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 rounded-md bg-red-50 p-4 text-sm">
            <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <span className="text-red-800">
              <strong>The United States does NOT have a tax treaty with
              Argentina.</strong>{" "}
              US citizens are taxed on worldwide income by the IRS regardless of
              where they live. You can claim foreign tax credits for taxes paid
              to Argentina, but you cannot fully eliminate double taxation
              without treaty protection. US expats should work with an
              accountant experienced in both US and Argentine tax law.
            </span>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Key Tax Dates
          </h2>
          <div className="space-y-4">
            {[
              {
                date: "20th of each month",
                event: "Monotributo payment due",
              },
              {
                date: "March–April",
                event: "Bienes Personales advance payments begin",
              },
              {
                date: "June (varies by CUIT)",
                event:
                  "Annual Ganancias and Bienes Personales filing deadline for prior year",
              },
              {
                date: "Quarterly",
                event:
                  "Income tax advance payments (anticipos) if required",
              },
              {
                date: "Year-round",
                event:
                  "Keep records of all income, expenses, and asset values for filing",
              },
            ].map((item) => (
              <div
                key={item.date}
                className="flex items-start gap-3 rounded-lg border p-4"
              >
                <CalendarIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">{item.date}</p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
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
          <h2 className="mb-3 text-2xl font-bold">Need Professional Help?</h2>
          <p className="mb-6 text-muted-foreground">
            Taxes in Argentina are complex and change frequently. A local
            contador público (certified accountant) typically charges $50–$150
            per month for ongoing tax management. Worth it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/guides/working-taxes">
                Working & Taxes Guide{" "}
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/banking">Banking Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cost-of-living">Cost of Living</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
