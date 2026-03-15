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
  ShieldIcon,
  HomeIcon,
  HeartIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  DollarSignIcon,
  GlobeIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Insurance in Argentina 2026 | Health, Home, Car & Expat Coverage",
  description:
    "Complete guide to insurance in Argentina for expats. Health insurance (obras sociales vs prepagas), renter's insurance, car insurance, travel coverage, and what you actually need.",
  keywords: [
    "insurance Argentina",
    "health insurance Argentina expat",
    "car insurance Argentina",
    "renter's insurance Argentina",
    "travel insurance Argentina",
  ],
  openGraph: {
    title: "Insurance in Argentina — What Expats Actually Need (2026)",
    description:
      "Health, home, car, and travel insurance explained. What's required, what's optional, and how to avoid overpaying.",
  },
  alternates: { canonical: "https://expatsargentina.com/insurance" },
};

const insuranceTypes = [
  {
    type: "Health Insurance (Prepaga)",
    icon: HeartIcon,
    required: "Recommended",
    cost: "$80-400/month",
    description:
      "Private health insurance (prepagas) like OSDE, Swiss Medical, and Galeno provide access to private hospitals and shorter wait times. Coverage includes doctor visits, hospitalization, medications (with copays), dental, and mental health.",
    details: [
      "OSDE 210: ~$80-120/month — good basic coverage, wide hospital network",
      "OSDE 310: ~$120-180/month — better coverage, specialty access",
      "OSDE 410/510: ~$200-400/month — premium, top hospitals, lower copays",
      "Swiss Medical: ~$100-300/month — strong in Buenos Aires, good maternity",
      "Galeno: ~$80-250/month — good value, growing network",
      "Prepagas require a DNI to enroll. Use travel insurance to bridge the gap until you get one",
      "Pre-existing conditions: 12-month waiting period for some treatments",
      "Most prepagas cover 40-70% of medication costs at pharmacies",
    ],
  },
  {
    type: "Car Insurance (Seguro Automotor)",
    icon: ShieldIcon,
    required: "Required by law",
    cost: "$30-150/month",
    description:
      "Car insurance is mandatory in Argentina. At minimum, you need terceros completo (third-party liability). Most expats opt for todo riesgo (comprehensive) for newer vehicles.",
    details: [
      "Responsabilidad civil (liability only): $20-40/month — legal minimum, covers damage to others only",
      "Terceros completo (third-party + theft + fire): $30-80/month — most common choice",
      "Todo riesgo (comprehensive): $80-150/month — covers your car too, best for newer vehicles",
      "Major insurers: La Caja, Federación Patronal, Rivadavia, Zurich, Mapfre",
      "You need your DNI, vehicle title (título del automotor), and VTV inspection certificate",
      "File claims through your insurer's app or office — process is similar to other countries",
      "Deductibles (franquicias) range from $50-500 depending on plan",
      "Motorcycle insurance is cheaper: $15-60/month depending on coverage",
    ],
  },
  {
    type: "Renter's Insurance (Seguro de Hogar)",
    icon: HomeIcon,
    required: "Optional but smart",
    cost: "$10-40/month",
    description:
      "Renter's insurance covers your belongings against theft, fire, water damage, and natural disasters. Not required by most landlords but worth having, especially in older buildings.",
    details: [
      "Covers personal property (electronics, furniture, clothing) against theft, fire, flooding",
      "Some policies include liability coverage if someone is injured in your apartment",
      "Basic plans: $10-20/month for $5,000-10,000 in coverage",
      "Premium plans: $25-40/month for $15,000-30,000+ in coverage",
      "Major providers: La Caja, Sancor, Provincia Seguros, Federación Patronal",
      "Important in Buenos Aires: older buildings have plumbing issues that can damage electronics",
      "File claims online or at the insurer's office — typically resolved within 30-60 days",
      "Some landlords include building insurance in expensas but this does NOT cover your personal items",
    ],
  },
  {
    type: "Travel Insurance (Seguro de Viaje)",
    icon: GlobeIcon,
    required: "Essential for first months",
    cost: "$50-200/month",
    description:
      "International travel insurance is critical before you get Argentine health coverage. It bridges the gap between arrival and prepaga enrollment, and covers emergency evacuation.",
    details: [
      "Use for the first 1-3 months while waiting for DNI and prepaga enrollment",
      "SafetyWing: ~$45/month — popular with digital nomads, good basic coverage",
      "World Nomads: ~$60-120/month — better adventure sports coverage",
      "IMG Global: ~$100-200/month — comprehensive plans, good US-based coverage",
      "Make sure the policy covers Argentina specifically and has adequate medical limits ($100,000+)",
      "Emergency evacuation coverage is important — medical flights to the US/Europe cost $30,000-80,000",
      "Most travel insurance does NOT cover pre-existing conditions",
      "Keep your policy active even after getting a prepaga if you travel frequently within Latin America",
    ],
  },
];

const faqs = [
  {
    question: "Do I need health insurance in Argentina?",
    answer:
      "Argentina has a free public healthcare system that treats anyone regardless of immigration status. However, wait times can be long and facilities vary in quality. Most expats get a prepaga (private health plan) for faster access, English-speaking doctors, and better hospitals. If you are on a tight budget, the public system is a legitimate option — hospitals like Hospital Italiano and Hospital Fernández provide good care.",
  },
  {
    question: "Can I get insurance without a DNI?",
    answer:
      "Most Argentine insurance companies (prepagas, car, home) require a DNI to enroll. The exception is international travel insurance, which you can purchase from abroad. For the gap period: use travel insurance for health coverage, and for car insurance, some brokers will accept a passport temporarily. Get your DNI as soon as possible — it unlocks everything.",
  },
  {
    question: "Is car insurance expensive in Argentina?",
    answer:
      "Car insurance is relatively affordable compared to the US or Europe. Basic third-party coverage starts at $20-40/month. Comprehensive coverage for a mid-range car runs $80-150/month. Factors that affect price: vehicle age, make/model, where you park (garage vs street), your driving history, and your zone (Buenos Aires is more expensive than smaller cities). Shop around — prices vary 30-50% between insurers for the same coverage.",
  },
  {
    question: "What about life insurance?",
    answer:
      "Life insurance is available from major Argentine insurers (MetLife, Zurich, Prudential/Seguros) and costs $20-100/month depending on coverage and age. However, many expats maintain life insurance from their home country instead, as payouts in ARS can lose value to inflation. If you have dependents in Argentina, consider a USD-denominated policy from an international insurer. Term life is more practical than whole life in Argentina's inflationary environment.",
  },
  {
    question: "Does my US/European health insurance work in Argentina?",
    answer:
      "Most domestic health insurance from the US or Europe does NOT cover you abroad, or only covers emergencies. Medicare does not work outside the US at all. Some premium international plans (Cigna Global, Aetna International) do cover Argentina. Check your specific policy before relying on it. Even if your plan covers emergencies, the claims process for foreign medical bills can be slow and complex. A local prepaga is simpler and often cheaper.",
  },
  {
    question: "What insurance do digital nomads need?",
    answer:
      "At minimum: international travel/health insurance (SafetyWing or similar), especially for the first 3-6 months. If you plan to stay longer than 6 months, transition to a local prepaga once you have your DNI. Add renter's insurance if you have expensive equipment (laptops, cameras). Car insurance only if you own or rent a vehicle. Many digital nomads skip life insurance but should consider it if they have dependents.",
  },
];

export default function InsurancePage() {
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
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-orange-50 to-white px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Updated 2026
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Insurance in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Health, home, car, and travel insurance explained for expats. What
            you actually need, what you can skip, and how to avoid overpaying in
            a market designed for locals.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HeartIcon, label: "Health (Prepaga)", value: "$80-400/mo" },
              { icon: ShieldIcon, label: "Car Insurance", value: "$30-150/mo" },
              { icon: HomeIcon, label: "Renter's", value: "$10-40/mo" },
              { icon: GlobeIcon, label: "Travel", value: "$50-200/mo" },
            ].map((fact) => (
              <Card key={fact.label}>
                <CardContent className="flex items-center gap-3 p-4">
                  <fact.icon className="h-8 w-8 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{fact.label}</p>
                    <p className="font-semibold">{fact.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Insurance Types Explained
          </h2>
          <div className="space-y-6">
            {insuranceTypes.map((ins) => (
              <Card key={ins.type}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ins.icon className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <CardTitle className="text-xl">{ins.type}</CardTitle>
                      <div className="mt-1 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <Badge variant={ins.required === "Required by law" ? "default" : "outline"} className="text-xs">
                          {ins.required}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <DollarSignIcon className="h-3 w-3" /> {ins.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {ins.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {ins.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="border-t bg-amber-50/50 px-4 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-start gap-3">
            <AlertCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h3 className="mb-2 font-semibold">The DNI Catch-22</h3>
              <p className="text-sm text-muted-foreground">
                Most Argentine insurance requires a DNI to enroll, but getting a
                DNI takes 2-8 weeks after arriving. Bridge this gap with
                international travel insurance (SafetyWing, World Nomads, IMG).
                Apply for your DNI immediately upon arriving, and switch to a
                local prepaga once you have it. Some prepagas like OSDE allow
                enrollment with a DNI trámite (in-process receipt) — ask when
                you apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
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
      <section className="border-t bg-muted/20 px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold">Need More Help?</h2>
          <p className="mb-6 text-muted-foreground">
            Insurance is one piece of settling in. Check our healthcare guide
            for detailed hospital and provider comparisons.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/healthcare">
                Healthcare Guide <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/banking">Banking Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/guides/getting-started">Getting Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
