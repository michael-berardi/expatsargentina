import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ShieldIcon,
  BuildingIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  PhoneIcon
} from "@/components/ui/icon";
import { ReferenceHero } from "@/components/ReferenceHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FactBox } from "@/components/FactBox";
import { SourceAttribution } from "@/components/SourceAttribution";

export const metadata: Metadata = {
  title: "Healthcare in Argentina 2026 - Mandatory Insurance, New Rules",
  description: "Updated 2026 healthcare guide: mandatory travel insurance for entry, public hospitals now charge foreigners. Prepaga options, costs, and requirements.",
  keywords: ["healthcare Argentina 2026", "mandatory travel insurance Argentina", "prepaga health insurance", "Argentina public hospital charges foreigners"],
  alternates: { canonical: "https://expatsargentina.com/healthcare" },
};

const insuranceProviders = [
  { name: "OSDE", type: "Premium", monthlyCost: "$350-800", notes: "Widest network, best hospitals, English-speaking" },
  { name: "Swiss Medical", type: "Premium", monthlyCost: "$300-700", notes: "Excellent service, English-speaking staff" },
  { name: "Galeno", type: "Mid-range", monthlyCost: "$180-400", notes: "Good coverage, reasonable prices" },
  { name: "Medicus", type: "Mid-range", monthlyCost: "$140-320", notes: "Solid coverage, widely accepted" },
  { name: "Sancor Salud", type: "Budget", monthlyCost: "$100-250", notes: "Basic coverage, good for young/healthy" },
];

const topHospitals = [
  { name: "Hospital Alemán", location: "Recoleta", type: "Private", notes: "Top-rated, English-speaking staff" },
  { name: "Hospital Italiano", location: "Almagro", type: "Private", notes: "Excellent reputation, research hospital" },
  { name: "Hospital Británico", location: "Barracas", type: "Private", notes: "British heritage, English widely spoken" },
  { name: "Hospital Universitario", location: " various", type: "Public", notes: "Good public option, teaching hospital" },
];

const faqs = [
  {
    question: "How does healthcare work in Argentina for foreigners?",
    answer: "Argentina has a mixed system of public and private healthcare. As of 2025, foreigners must show proof of health insurance to enter the country. Public hospitals now charge non-residents for non-emergency care, so private 'prepaga' insurance is essential for expats. Prepaga plans give you access to private hospitals, specialists, and clinics with minimal wait times and modern facilities.",
  },
  {
    question: "What is a 'prepaga' (private health plan)?",
    answer: "A prepaga is Argentina's version of private health insurance. You pay a monthly fee and get access to a network of private hospitals, clinics, and specialists. Major providers include OSDE, Swiss Medical, Galeno, Medicus, and Sancor Salud. Plans cover consultations, lab work, imaging, hospitalization, and prescriptions with small copays. Most expats consider prepaga essential for quality healthcare in Argentina.",
  },
  {
    question: "Can I use public hospitals as a foreigner?",
    answer: "Emergency care at public hospitals is still provided to everyone regardless of nationality. However, as of 2025, public hospitals now charge foreigners for non-emergency care. The 'free healthcare for everyone' era has ended. Public hospital quality varies significantly—some like Hospital de Clínicas are excellent, while others are overcrowded. For reliable, consistent care, private prepaga is strongly recommended.",
  },
  {
    question: "How much does private health insurance cost?",
    answer: "Basic prepaga plans start around $100-150 USD/month for healthy individuals under 35. Mid-range plans (Galeno, Medicus) cost $140-400/month, while premium plans (OSDE, Swiss Medical) range from $300-800/month depending on age and coverage level. Prices have increased 50-75% since 2023 due to inflation. Costs rise significantly with age—expect to pay 2-3x more if you're over 50.",
  },
  {
    question: "Do I need health insurance to enter Argentina?",
    answer: "Yes, as of July 2025, all tourists and temporary residents must show proof of travel health insurance at immigration. This is actively checked. Your policy must cover medical expenses in Argentina. International travel insurance (like World Nomads or SafetyWing) satisfies this requirement. For long-term stays, transition to a local prepaga plan for better day-to-day coverage.",
  },
  {
    question: "Are prescriptions expensive in Argentina?",
    answer: "Prescription medications are generally affordable in Argentina compared to the US. Many common medications are available over the counter at pharmacies (farmacias) without a prescription. With prepaga insurance, prescriptions come with significant discounts (40-70% off). Farmacias are everywhere and pharmacists are knowledgeable—they can often recommend treatments for minor ailments directly.",
  },
  {
    question: "Can I see an English-speaking doctor?",
    answer: "Yes, especially in Buenos Aires. Hospital Alemán, Hospital Británico, and Hospital Italiano are known for having English-speaking staff. Swiss Medical and OSDE also have English-speaking doctors in their networks. When booking appointments, request an English-speaking doctor specifically. Many specialists in Palermo and Recoleta speak English fluently.",
  },
];

export default function HealthcarePage() {
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
                "name": "Healthcare",
                "item": "https://expatsargentina.com/healthcare"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })
        }}
      />
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Healthcare" }]} />

      {/* Hero */}
      <ReferenceHero
        badge="Healthcare Guide"
        title="Healthcare in Argentina"
        subtitle="Your authoritative guide to Argentina's healthcare system. Navigating public hospitals, private prepaga insurance, and the 2026 policy changes every expat needs to know."
        stats={[
          { value: "5", label: "Insurers Compared" },
          { value: "4", label: "Hospitals Listed" },
          { value: "Public + Private", label: "Systems Covered" },
          { value: "107 / 911", label: "Emergency Numbers" },
        ]}
      />

      {/* 2026 Healthcare Alert */}
      <section className="py-8 bg-red-50 dark:bg-red-950/20 border-y border-red-200 dark:border-red-800">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircleIcon size="lg" className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                  2026 Critical Update: New Healthcare Rules
                </h2>
                <ul className="text-red-800 dark:text-red-200 space-y-2">
                  <li><strong>Mandatory Travel Insurance:</strong> Effective July 2025, all visitors must show proof of health insurance at immigration.</li>
                  <li><strong>Public Hospitals Charge Foreigners:</strong> The "free healthcare for all" era has ended. Non-residents now receive bills for non-emergency care.</li>
                  <li><strong>Higher Insurance Costs:</strong> Prepaga prices have increased 50-75% since 2023 due to inflation and expat demand.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Healthcare System Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Argentina has a mixed healthcare system with both public and private options.
                As an expat, you&apos;ll primarily use the private system, which offers excellent
                quality care at a fraction of what you&apos;d pay in the US or Europe. A specialist
                consultation that costs $300 in the US runs $50-100 here, and the quality at top
                Buenos Aires hospitals is genuinely world-class.
              </p>
              <p className="mb-4">
                The system works in three layers. Public hospitals are free for Argentine citizens and
                were historically free for everyone, but recent policy changes mean foreigners now get
                billed for non-emergency care. The obra social system is employer-based insurance tied
                to formal employment — not relevant for most expats. The prepaga system is private health
                insurance that you pay for directly, and this is what nearly every expat uses. Think of it
                like HMO-style coverage: you pay a monthly premium, choose from a network of private
                hospitals and doctors, and pay small or zero copays for covered services.
              </p>
              <p className="mb-4">
                Choosing between prepaga providers comes down to budget and how much English-language
                support matters to you. OSDE and Swiss Medical are the premium options — wider hospital
                networks, more English-speaking staff, and faster appointment access. Galeno and Medicus
                offer solid mid-range coverage that most expats find perfectly adequate. Sancor Salud is
                the budget option, fine for young and healthy people who mostly need the insurance as a
                safety net. All of them cover consultations, lab work, imaging, hospitalization, and
                prescriptions. The signup process usually takes a few days and requires a passport, proof
                of address, and payment information.
              </p>
              <p className="mb-4">
                One thing that surprises most newcomers: pharmacies in Argentina are everywhere, pharmacists
                are knowledgeable and empowered to recommend treatments for minor ailments, and many
                medications that require prescriptions in the US or Europe are available over the counter
                here. With prepaga insurance, prescription discounts of 40-70% are standard. Between
                affordable prepaga plans and accessible pharmacy care, the day-to-day experience of
                healthcare in Argentina is remarkably smooth once you get set up.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BuildingIcon size="md" className="text-primary" />
                    Private Healthcare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>High quality, modern facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Minimal wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>English-speaking doctors available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Affordable compared to US/Europe</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon size="md" className="text-primary" />
                    Public Healthcare (2026 Changes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Now charges foreigners</strong> (2025 policy change)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Emergencies still treated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Longer wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Variable quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Major Insurance Providers</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Provider</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Monthly Cost</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {insuranceProviders.map((provider) => (
                        <tr key={provider.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{provider.name}</td>
                          <td className="py-3 px-2">
                            <Badge variant={provider.type === "Premium" ? "default" : provider.type === "Mid-range" ? "secondary" : "outline"}>
                              {provider.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{provider.monthlyCost}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{provider.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Prices are approximate for a single person in their 30s-40s. Actual costs vary by age, coverage level, and pre-existing conditions.
            </p>
            <SourceAttribution source="Provider websites and expat community reports" date="2026" className="justify-center mt-2" />
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Recommended Hospitals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topHospitals.map((hospital) => (
                <Card key={hospital.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{hospital.name}</CardTitle>
                    <CardDescription>{hospital.location} • {hospital.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{hospital.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Typical Medical Costs</h2>
            <FactBox
              title="Typical Medical Costs (USD, without insurance)"
              facts={[
                { label: "General doctor consultation (private)", value: "$30-60" },
                { label: "Specialist consultation", value: "$50-100" },
                { label: "Dental cleaning", value: "$40-80" },
                { label: "Eye exam", value: "$30-50" },
                { label: "Blood work panel", value: "$50-150" },
                { label: "X-ray", value: "$40-80" },
                { label: "Emergency room visit", value: "$100-300" },
              ]}
              source="Expats Argentina community data"
              sourceDate="2026"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              With prepaga insurance, you&apos;ll typically pay a small copay or nothing for covered services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                  <PhoneIcon size="md" />
                  Emergency Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">107</div>
                    <div className="text-sm text-muted-foreground">Ambulance (SAME)</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">911</div>
                    <div className="text-sm text-muted-foreground">General Emergency</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">101</div>
                    <div className="text-sm text-muted-foreground">Police</div>
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
            <h2 className="font-serif text-3xl font-bold mb-4">Need Help Choosing Insurance?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our partners can help you compare plans and find the right coverage for your needs and budget.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/resources/directory">
                Find Insurance Brokers
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
