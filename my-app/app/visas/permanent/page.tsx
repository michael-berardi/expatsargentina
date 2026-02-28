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
  BuildingIcon,
  ShieldIcon,
  StarIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Permanent Residency (Residencia Permanente) Guide 2026",
  description: "Complete guide to obtaining permanent residency in Argentina in 2026. Requirements, benefits, application process, and the path from temporary to permanent status.",
  keywords: ["Argentina permanent residency", "residencia permanente Argentina", "permanent visa Argentina", "Argentina DNI permanent", "live in Argentina permanently", "Argentina immigration 2026"],
  openGraph: {
    title: "Argentina Permanent Residency Guide 2026",
    description: "No renewal needed, full work rights, and a clear path to Argentine citizenship.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/permanent",
  },
};

const requirements = [
  {
    icon: ClockIcon,
    title: "Continuous Residence",
    description: "2 years of temporary residency for Mercosur nationals, or 3 years for all other nationalities, with continuous physical presence in Argentina",
  },
  {
    icon: ShieldIcon,
    title: "Clean Criminal Record",
    description: "Updated criminal background check from Argentina (Registro de Reincidencia) and from your home country, both less than 3 months old",
  },
  {
    icon: DollarSignIcon,
    title: "Tax Compliance",
    description: "Proof of registration with AFIP (tax authority) and evidence of tax compliance during your temporary residency period",
  },
  {
    icon: FileTextIcon,
    title: "Valid Documentation",
    description: "Current DNI, valid passport, proof of Argentine address, and your temporary residency disposition showing continuous legal status",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Verify Your Eligibility",
    description: "Confirm that you have held temporary residency for the required period: 2 years for Mercosur nationals or 3 years for other nationalities. Your residency must have been continuous, meaning you have not spent extended periods outside Argentina (generally no more than 6 consecutive months abroad). Check that your temporary residency is still valid or has been properly renewed.",
  },
  {
    step: 2,
    title: "Obtain Updated Background Checks",
    description: "Request a criminal background check from the Registro Nacional de Reincidencia in Argentina and from your home country. Both documents must be less than 3 months old at the time of application. The Argentine certificate can be obtained online or in person. Your home country certificate must be apostilled and translated into Spanish by a sworn translator.",
  },
  {
    step: 3,
    title: "Prepare Your Tax Documentation",
    description: "Gather proof of your AFIP registration (constancia de inscripción) and tax compliance. If you are registered under the monotributo regime, show that your payments are up to date. If employed, provide your CUIL documentation. Migraciones wants to see that you have been a responsible taxpayer during your time as a temporary resident.",
  },
  {
    step: 4,
    title: "Book and Complete Online Application",
    description: "Access the TAD (Trámites a Distancia) platform through migraciones.gov.ar. Complete the permanent residency application form (Radicación Permanente), upload all required documents, and pay the processing fee. Book an in-person appointment (turno) at your nearest Migraciones office.",
  },
  {
    step: 5,
    title: "Attend Your Migraciones Appointment",
    description: "Bring all original documents, certified translations, and payment receipts to your scheduled appointment. A Migraciones officer will review your file, verify your identity, and may ask questions about your time in Argentina. You will receive a provisional certificate (precaria) while your application is processed.",
  },
  {
    step: 6,
    title: "Receive Permanent Residency & Update DNI",
    description: "Once approved (typically 3-6 months), you receive a permanent residency disposition. Take this to RENAPER to update your DNI from temporary to permanent status. Your permanent DNI does not expire and does not need renewal, though the physical card itself may need periodic replacement.",
  },
];

const faqs = [
  {
    question: "What are the main benefits of permanent residency?",
    answer: "Permanent residency in Argentina provides significant advantages over temporary status. You no longer need to renew your residency, eliminating periodic paperwork and fees. You have unrestricted work rights in any profession or business. You can vote in local elections (though not national ones until citizenship). You have full access to Argentina's public healthcare and education systems. You can sponsor family members for their own residency applications. Most importantly, permanent residency puts you on the direct path to Argentine citizenship after 2 additional years.",
  },
  {
    question: "Can I lose my permanent residency status?",
    answer: "Yes, permanent residency can be revoked under certain circumstances. The most common risk is prolonged absence from Argentina. If you spend more than 2 consecutive years outside the country without obtaining a re-entry permit, your permanent residency is considered abandoned. Committing serious crimes in Argentina can also lead to revocation. To protect your status, if you plan to travel abroad for extended periods, apply for a re-entry permit (permiso de reingreso) at Migraciones before departing. This preserves your residency status during your absence.",
  },
  {
    question: "Are there travel restrictions with permanent residency?",
    answer: "Permanent residents can travel freely in and out of Argentina using their passport and DNI. Within Mercosur countries (Brazil, Uruguay, Paraguay, Bolivia, Chile, and others), you can travel using just your Argentine DNI without needing your passport. However, you should be aware of the 2-year absence rule mentioned above. If you plan to live abroad temporarily, obtain a re-entry permit. Permanent residency does not grant you the right to an Argentine passport; that requires citizenship. You continue to travel internationally on your home country passport.",
  },
  {
    question: "Does permanent residency lead to citizenship?",
    answer: "Yes, permanent residency is a prerequisite for Argentine citizenship (naturalización). After holding permanent residency for 2 continuous years, you can apply for citizenship through a federal judge. Argentina allows dual citizenship, so you do not need to renounce your original nationality. The citizenship process involves demonstrating basic knowledge of Spanish, understanding of the Argentine Constitution, and continuous residence. Once you become a citizen, you can obtain an Argentine passport and enjoy full political rights.",
  },
  {
    question: "How much does the permanent residency application cost?",
    answer: "The total cost varies but generally includes the Migraciones application fee (approximately $300-500 USD equivalent in Argentine pesos), the Argentine criminal background check (approximately $10-20 USD), sworn translation fees for foreign documents (approximately $50-100 USD per document), apostille fees for home country documents, and the RENAPER fee for updating your DNI (approximately $10-20 USD). Budget approximately $500-800 USD total for the complete process, though costs fluctuate with exchange rates and periodic fee adjustments.",
  },
  {
    question: "Can my family members also get permanent residency?",
    answer: "Family members who have held their own temporary residency for the required period can apply for permanent residency independently. If you are an Argentine permanent resident, you can also sponsor immediate family members (spouse, children under 18, parents) for temporary residency under the family reunification category, which then leads to their own permanent residency after the required waiting period. Each family member must file their own application and meet the individual requirements.",
  },
  {
    question: "What happens if my temporary residency expires before I get permanent?",
    answer: "If your temporary residency expires, you should renew it before applying for permanent residency. Gaps in legal residency status can complicate your permanent residency application. If you missed the renewal deadline, consult with an immigration attorney, as there may be options to regularize your status. In some cases, Migraciones may accept a late renewal with a penalty fee. It is strongly recommended to begin the permanent residency application process well before your temporary residency expires.",
  },
];

export default function PermanentResidencyPage() {
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
              { "@type": "ListItem", position: 3, name: "Permanent Residency", item: "https://expatsargentina.com/visas/permanent" },
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
            <span className="text-foreground">Permanent Residency</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <StarIcon size="sm" className="mr-1" />
              Permanent Residency
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Permanent Residency Guide 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Residencia Permanente is the culmination of your immigration journey in Argentina.
              No more renewals, full work rights, and a direct path to citizenship. Learn everything
              you need to make Argentina your permanent home.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-primary" />
                <span>No renewal needed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon size="sm" className="text-primary" />
                <span>Full work rights</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIcon size="sm" className="text-primary" />
                <span>Path to citizenship</span>
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
              <div className="text-3xl font-bold text-primary">2-3</div>
              <div className="text-sm text-muted-foreground">Years Required</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$500+</div>
              <div className="text-sm text-muted-foreground">Total Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3-6</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Lifetime</div>
              <div className="text-sm text-muted-foreground">Validity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Requirements</h2>
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

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Permanent Residency</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon size="md" className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">No Renewal</h3>
                  <p className="text-sm text-muted-foreground">Your residency never expires. No more periodic renewals, appointments, or paperwork at Migraciones.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <BuildingIcon size="md" className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Full Work Rights</h3>
                  <p className="text-sm text-muted-foreground">Work in any profession, start businesses, and access all employment opportunities without restrictions.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <GlobeIcon size="md" className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Path to Citizenship</h3>
                  <p className="text-sm text-muted-foreground">After 2 years of permanent residency, apply for Argentine citizenship and an Argentine passport.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Application Process</h2>
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Document Checklist</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Valid passport with sufficient validity",
                    "Current DNI (temporary) showing continuous legal residence",
                    "Temporary residency disposition (original or certified copy)",
                    "Argentine criminal background check (Certificado de Antecedentes Penales)",
                    "Home country criminal background check (apostilled and translated)",
                    "AFIP tax registration proof (constancia de inscripción CUIT/CUIL)",
                    "Proof of tax compliance (monotributo payments, tax returns, or employer certification)",
                    "Proof of Argentine address (utility bill or rental contract)",
                    "Passport-sized photos (4x4 cm, white background)",
                    "Migraciones fee payment receipt",
                    "RENAPER appointment for permanent DNI update",
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
      <section className="py-16">
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
      <section className="py-16 bg-muted/30">
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
                      Immigration requirements and processing times change regularly. The eligibility
                      periods and fees listed here are based on current regulations but may be updated.
                      Always verify current requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      or consult with a qualified immigration attorney before beginning your application.
                      This guide is for informational purposes only.
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
            <h2 className="text-3xl font-bold mb-4">What Comes After Permanent Residency?</h2>
            <p className="text-primary-foreground/80 mb-8">
              With permanent residency secured, you are just 2 years away from Argentine
              citizenship. Learn about the naturalization process and the benefits of an
              Argentine passport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/citizenship">
                  Citizenship Guide
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/banking">
                  <BuildingIcon size="sm" className="mr-2" />
                  Banking Guide
                </Link>
              </Button>
            </div>
            <div className="mt-4">
              <Button asChild variant="link" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Link href="/visas/temporary">
                  Back to Temporary Residency
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
