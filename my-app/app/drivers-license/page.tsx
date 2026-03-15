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
  BusIcon,
  FileTextIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  DollarSignIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Getting a Driver's License in Argentina 2026 | Expat Guide",
  description:
    "How to get an Argentine driver's license. Requirements, the conversion process, driving test, costs, and using your foreign license. City-by-city differences explained.",
  keywords: [
    "drivers license Argentina",
    "licencia de conducir Argentina",
    "convert driving license Argentina",
    "international driving permit Argentina",
    "driving in Argentina expat",
  ],
  openGraph: {
    title: "Getting a Driver's License in Argentina — Expat Guide 2026",
    description:
      "Requirements, conversion process, costs, driving test, and using your foreign license or international driving permit.",
  },
  alternates: { canonical: "https://expatsargentina.com/drivers-license" },
};

const steps = [
  {
    step: 1,
    title: "Get Your DNI",
    description:
      "You need a DNI (national ID) with a registered address to apply for an Argentine driver's license. Tourist visas do not qualify. You must have temporary or permanent residency.",
  },
  {
    step: 2,
    title: "Medical Exam (Psicofísico)",
    description:
      "A basic psycho-physical exam testing vision, hearing, reflexes, and basic cognitive function. Done at the licensing office or authorized medical centers. Takes about 30 minutes. Cost: $5–$15.",
  },
  {
    step: 3,
    title: "Theoretical Exam",
    description:
      "A written (usually digital) multiple-choice test on Argentine traffic laws, road signs, and regulations. Available in Spanish only in most jurisdictions. Study materials available online at the Agencia Nacional de Seguridad Vial website. About 30–40 questions, you need 70%+ to pass.",
  },
  {
    step: 4,
    title: "Practical Driving Test",
    description:
      "A road test demonstrating basic vehicle control: parallel parking, hill start, emergency braking, and a short drive through the area around the testing center. You must bring a car with valid insurance and registration (you can borrow or rent one). The test is typically 10–20 minutes.",
  },
  {
    step: 5,
    title: "Receive Your License",
    description:
      "If you pass both exams, you receive your Licencia Nacional de Conducir. In Buenos Aires city, the license is issued as a plastic card, often same-day or within a few business days. Valid for varying periods (typically 5 years for those under 65).",
  },
];

const faqs = [
  {
    question: "Can I drive with my foreign license in Argentina?",
    answer:
      "Yes, temporarily. Tourists can drive with a valid foreign license plus an International Driving Permit (IDP) for up to 90 days. Once you establish residency (get a DNI), you are expected to obtain an Argentine license. In practice, enforcement varies — many expats drive for months with a foreign license without issues, but if you are in an accident, insurance may deny your claim if you do not have a valid Argentine license.",
  },
  {
    question: "Can I convert my foreign license without taking the driving test?",
    answer:
      "Some jurisdictions allow conversion without the practical test if you have a valid license from certain countries with reciprocity agreements. The rules vary by municipality — Buenos Aires City (CABA) has different rules from Buenos Aires Province, Córdoba, Mendoza, etc. In CABA, you may skip the practical test if your foreign license is from a country with a bilateral agreement. The theoretical exam is almost always required regardless. Check with your local licensing office for current rules.",
  },
  {
    question: "Where do I apply in Buenos Aires?",
    answer:
      "In CABA, apply at any of the Centros de Emisión de Licencias (license centers). The main ones are in Roca (near Parque Lezama), Saavedra, and Nueva Pompeya. Book an appointment online through the Buenos Aires city government website (buenosaires.gob.ar). Walk-ins are sometimes accepted but expect long waits. Bring: DNI, proof of address (utility bill), medical exam results, and your foreign license with a certified Spanish translation.",
  },
  {
    question: "How much does an Argentine driver's license cost?",
    answer:
      "The total cost including medical exam, exam fees, and license issuance is approximately $20–$50 USD equivalent (paid in pesos). This varies by municipality and license category. Some jurisdictions charge additional fees for theory exam materials or translation services. Compared to many countries, the process is very affordable.",
  },
  {
    question: "Is the theory test available in English?",
    answer:
      "In most jurisdictions, the theory test is only available in Spanish. Some private driving schools (autoescuelas) offer preparation courses with bilingual instructors. The test covers Argentine road signs (which follow international conventions), right-of-way rules, speed limits, alcohol limits (0.05% BAC, lower for commercial drivers), and emergency procedures. Study the Ley Nacional de Tránsito 24.449 and the Agencia Nacional de Seguridad Vial study guides.",
  },
  {
    question: "Do I need a car for the driving test?",
    answer:
      "Yes, you must provide a vehicle for the practical test. It needs valid registration (VTV inspection), insurance (seguro automotor), and must meet safety requirements (working lights, tires, etc.). You can borrow a friend's car or rent one — make sure the rental agreement or the owner's authorization is documented. Some driving schools provide a car for the test as part of their package.",
  },
  {
    question: "What about buying a car in Argentina?",
    answer:
      "You need a DNI to buy and register a vehicle. Used cars are listed on MercadoLibre Autos, Kavak, and OLX. New car prices are higher than in the US/Europe due to import taxes. Insurance (seguro automotor) is mandatory — basic liability starts at $15–$30/month. You will also need the VTV (Verificación Técnica Vehicular) annual inspection. For most urban expats, Uber/Cabify plus occasional rental is cheaper than car ownership.",
  },
];

export default function DriversLicensePage() {
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
      <section className="border-b bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Updated 2026
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Getting a Driver&apos;s License in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your foreign license works temporarily, but if you are staying,
            you will need an Argentine Licencia Nacional de Conducir. Here is
            how the process works, what it costs, and the city-by-city
            differences.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileTextIcon, label: "Requires", value: "DNI + residency" },
              { icon: DollarSignIcon, label: "Total Cost", value: "$20–$50" },
              { icon: ClockIcon, label: "Process Time", value: "1–3 weeks" },
              { icon: BusIcon, label: "Foreign License", value: "90 days + IDP" },
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

      {/* Important Note */}
      <section className="border-b bg-blue-50/50 px-4 py-6">
        <div className="container mx-auto flex max-w-4xl items-start gap-3">
          <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
          <div className="text-sm">
            <p className="font-semibold text-blue-800">
              Do you even need a car?
            </p>
            <p className="text-blue-700">
              Most expats in Buenos Aires, Córdoba, and other major cities get by
              fine without a car. Public transport, Uber, Cabify, and bike lanes
              cover most needs. Car ownership in Buenos Aires comes with parking
              headaches, insurance costs, and the VTV inspection. Consider your
              lifestyle before going through the licensing process.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Step-by-Step Process
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Documents Required
          </h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm">
                {[
                  "DNI (original and photocopy)",
                  "Proof of address (utility bill, bank statement, or lease within last 3 months)",
                  "Foreign driver's license (original) with certified Spanish translation (traducción pública)",
                  "Blood type certificate (available from any laboratory, $5–$10)",
                  "Medical exam certificate (psicofísico — done at the licensing center or authorized clinic)",
                  "Passport (for identity verification)",
                  "Payment for exam and license fees (cash or card depending on municipality)",
                ].map((doc) => (
                  <li key={doc} className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
          <h2 className="mb-3 text-2xl font-bold">More Practical Guides</h2>
          <p className="mb-6 text-muted-foreground">
            Getting a license is just one of many bureaucratic steps. Check our
            DNI guide and banking guide for the other essentials.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/guides/getting-dni">
                Getting Your DNI <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/transportation">Transportation Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/safety">Safety Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
