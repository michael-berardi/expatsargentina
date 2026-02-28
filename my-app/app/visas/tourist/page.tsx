import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircleIcon,
  ClockIcon,
  DollarSignIcon,
  FileTextIcon,
  GlobeIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  PlaneIcon,
  ShieldIcon,
  MapPinIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Tourist Visa Extension Guide 2026 - 90-Day Entry & Extensions",
  description: "Complete guide to Argentina's tourist visa in 2026. Learn about the 90-day visa-free entry, how to extend your stay, requirements, costs, and overstay penalties.",
  keywords: ["Argentina tourist visa", "Argentina visa extension", "90 day visa Argentina", "Argentina visa free entry", "extend tourist visa Argentina", "Argentina immigration 2026"],
  openGraph: {
    title: "Argentina Tourist Visa Extension Guide 2026",
    description: "90-day visa-free entry for 80+ nationalities. Step-by-step guide to extending your stay at Migraciones.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/tourist",
  },
};

const requirements = [
  {
    icon: FileTextIcon,
    title: "Valid Passport",
    description: "Passport with at least 6 months validity remaining from your date of entry into Argentina",
  },
  {
    icon: DollarSignIcon,
    title: "Proof of Funds",
    description: "Bank statements or credit cards showing sufficient funds to cover your stay (approximately $50-100 USD per day)",
  },
  {
    icon: PlaneIcon,
    title: "Return or Onward Ticket",
    description: "Evidence of a return flight or onward travel plans, though this is not always requested at immigration",
  },
  {
    icon: ShieldIcon,
    title: "Clean Record at Entry",
    description: "No prior immigration violations in Argentina such as overstays or deportation orders",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Enter Argentina Visa-Free",
    description: "Citizens from over 80 countries receive an automatic 90-day tourist stamp upon arrival. Present your passport at immigration and receive your entry stamp. No pre-arrival visa application is needed.",
  },
  {
    step: 2,
    title: "Book a Migraciones Appointment",
    description: "If you wish to extend, visit migraciones.gov.ar at least 2 weeks before your 90 days expire. Book an appointment (turno) at your nearest Direccion Nacional de Migraciones office. Buenos Aires appointments fill quickly, so book early.",
  },
  {
    step: 3,
    title: "Gather Extension Documents",
    description: "Prepare your passport, a photocopy of your passport data page and entry stamp, proof of funds (bank statement or credit card), and proof of accommodation in Argentina (rental contract or hotel reservation).",
  },
  {
    step: 4,
    title: "Pay the Extension Fee",
    description: "Pay the tourist visa extension fee, currently approximately $100 USD (paid in Argentine pesos at the official exchange rate). Payment is typically made at a bank or through the Migraciones online payment system before your appointment.",
  },
  {
    step: 5,
    title: "Attend Your Appointment",
    description: "Visit the Migraciones office at your scheduled time. Bring all documents and your payment receipt. The extension is typically processed on the spot, granting you an additional 90 days from the date of your original entry.",
  },
  {
    step: 6,
    title: "Receive Your Extension Stamp",
    description: "Upon approval, you receive a new stamp in your passport granting 90 additional days. Your total authorized stay becomes 180 days from your original entry date. The extension cannot be renewed again as a tourist.",
  },
];

const faqs = [
  {
    question: "Which nationalities can enter Argentina visa-free?",
    answer: "Citizens from over 80 countries can enter Argentina visa-free for up to 90 days, including the United States, Canada, United Kingdom, European Union member states, Australia, New Zealand, Japan, South Korea, and most South American countries. Citizens from some countries such as China, India, and certain African nations require a visa obtained in advance at an Argentine consulate. Always check the latest requirements on the Argentine Ministry of Foreign Affairs website before traveling.",
  },
  {
    question: "What are the penalties for overstaying my tourist visa?",
    answer: "Overstaying your tourist visa in Argentina results in a fine that increases the longer you stay past your authorized period. As of 2026, the fine is approximately $5,000-8,000 ARS (subject to change). You must pay this fine at the airport or border crossing when you leave. While overstaying does not typically result in a ban from re-entry, repeated violations can lead to denial of entry. The fine must be paid before you can depart the country, and immigration officers may flag your passport for future scrutiny.",
  },
  {
    question: "Can I do a border run instead of getting an extension?",
    answer: "Yes, many tourists choose to do a 'border run' by briefly leaving Argentina and re-entering to receive a fresh 90-day stamp. Common destinations include Colonia del Sacramento in Uruguay (a short ferry ride from Buenos Aires), the Iguazu Falls border crossing to Brazil, or a bus trip to Chile. However, immigration officers have discretion to deny entry or grant fewer days if they suspect you are using border runs to live in Argentina permanently. This strategy is best used occasionally rather than as a long-term solution.",
  },
  {
    question: "Is the reciprocity fee still required for US citizens?",
    answer: "No. Argentina discontinued the reciprocity fee (tasa de reciprocidad) for US, Canadian, and Australian citizens in 2016. Previously, citizens from these countries had to pay a fee equivalent to what Argentines paid for visas to those countries. As of 2026, citizens from these countries simply present their passport at immigration and receive a free 90-day tourist stamp, just like other visa-exempt nationalities.",
  },
  {
    question: "Can I work on a tourist visa in Argentina?",
    answer: "No, working on a tourist visa is not permitted under Argentine immigration law. This includes both employment with Argentine companies and freelance work for local clients. If you are caught working without proper authorization, you can face fines and potential deportation. If you want to work remotely for foreign companies, consider the Digital Nomad Visa instead. For local employment, you will need a work visa or temporary residency with work authorization.",
  },
  {
    question: "Do I need travel insurance to enter Argentina?",
    answer: "Travel insurance is not a strict entry requirement for most tourists entering Argentina, but it is strongly recommended. Argentine public hospitals will treat emergencies for free, but the quality and wait times vary. Private healthcare is excellent but expensive without insurance. Some credit cards include travel insurance coverage. If you plan to extend your stay or participate in adventure activities like skiing, hiking, or white-water rafting, comprehensive travel insurance is especially advisable.",
  },
  {
    question: "Can I enter Argentina multiple times on a tourist visa?",
    answer: "Yes, Argentina allows multiple entries for visa-exempt nationalities. Each time you enter, you receive a new 90-day tourist stamp. There is no limit on the number of times you can enter Argentina in a calendar year, but as mentioned above, immigration officers may question frequent entries if they suspect you are effectively living in the country. Maintaining proper documentation of your travel plans and having onward tickets can help smooth the process.",
  },
];

export default function TouristVisaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
              { "@type": "ListItem", position: 2, name: "Visas", item: "https://expatsargentina.com/visas" },
              { "@type": "ListItem", position: 3, name: "Tourist Visa", item: "https://expatsargentina.com/visas/tourist" },
            ],
          }),
        }}
      />
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

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">Visas</Link>
            <span>/</span>
            <span className="text-foreground">Tourist Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <PlaneIcon size="sm" className="mr-1" />
              Tourist Entry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Tourist Visa Extension Guide 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Citizens from over 80 countries enjoy visa-free entry to Argentina for 90 days.
              Learn how to extend your stay, what documents you need, and how to navigate
              the Migraciones extension process.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>90 days visa-free</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>~$100 extension fee</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon size="sm" className="text-primary" />
                <span>80+ eligible countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">90</div>
              <div className="text-sm text-muted-foreground">Days Visa-Free</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+90</div>
              <div className="text-sm text-muted-foreground">Days Extension</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">~$100</div>
              <div className="text-sm text-muted-foreground">Extension Fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">80+</div>
              <div className="text-sm text-muted-foreground">Eligible Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Entry & Extension Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req) => (
                <Card key={req.title}>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <req.icon size="md" className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Extend Your Tourist Visa</h2>
            <div className="space-y-6">
              {applicationSteps.map((step) => (
                <Card key={step.step} className="flex gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Document Checklist for Extension</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Valid passport with at least 6 months remaining validity",
                    "Photocopy of passport data page and entry stamp",
                    "Completed extension application form (available at Migraciones)",
                    "Proof of sufficient funds (bank statement, credit cards, or cash declaration)",
                    "Proof of accommodation in Argentina (rental contract, hotel booking, or host letter)",
                    "Payment receipt for the extension fee (~$100 USD in Argentine pesos)",
                    "Migraciones appointment confirmation (turno)",
                    "Passport-sized photo (4x4 cm, white background)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon size="md" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircleIcon size="lg" className="text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      Immigration rules and fees change frequently in Argentina. Always verify current
                      requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      before making travel plans. This guide is for informational purposes only and does
                      not constitute legal advice. For complex immigration situations, consult with a
                      qualified immigration attorney.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Planning a Longer Stay?</h2>
            <p className="text-primary-foreground/80 mb-8">
              If 180 days is not enough, explore Argentina&apos;s Digital Nomad Visa for remote workers
              or learn about temporary residency options for a more permanent move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/digital-nomad">
                  Digital Nomad Visa
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/first-30-days">
                  <MapPinIcon size="sm" className="mr-2" />
                  First 30 Days Guide
                </Link>
              </Button>
            </div>
            <div className="mt-4">
              <Button asChild variant="link" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Link href="/cost-of-living">
                  Explore Cost of Living
                  <ArrowRightIcon size="sm" className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
