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
  UsersIcon,
  ShieldIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Temporary Residency (Residencia Temporaria) Guide 2026",
  description: "Complete guide to obtaining temporary residency in Argentina in 2026. Work, study, and family subcategories, DNI application, requirements, costs, and step-by-step process.",
  keywords: ["Argentina temporary residency", "residencia temporaria Argentina", "Argentina work visa", "Argentina DNI", "Argentina residency 2026", "live in Argentina", "RENAPER appointment"],
  openGraph: {
    title: "Argentina Temporary Residency Guide 2026",
    description: "1-3 year renewable visa with work rights, healthcare access, and a path to permanent residency.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/temporary",
  },
};

const requirements = [
  {
    icon: FileTextIcon,
    title: "Apostilled Documents",
    description: "Birth certificate and criminal background check from your home country, apostilled (Hague Convention) or legalized at an Argentine consulate",
  },
  {
    icon: GlobeIcon,
    title: "Valid Passport",
    description: "Original passport with at least 18 months validity. Some nationalities also need certified translations of all documents into Spanish",
  },
  {
    icon: BuildingIcon,
    title: "Proof of Purpose",
    description: "Documentation supporting your residency category: employment contract, university enrollment, marriage certificate, or rental income proof",
  },
  {
    icon: DollarSignIcon,
    title: "Application Fees",
    description: "Migraciones processing fee (approximately $200-400 USD depending on nationality) plus RENAPER fee for DNI issuance",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Determine Your Subcategory",
    description: "Argentina offers temporary residency under several subcategories: work (empleado or autónomo), study (universitario), family reunification (familiar de argentino or residente), Mercosur nationality, rental income (rentista), and religious or humanitarian reasons. Choose the category that fits your situation, as each has specific document requirements.",
  },
  {
    step: 2,
    title: "Gather and Apostille Documents",
    description: "Obtain your birth certificate and criminal background check from your home country. These must be apostilled under the Hague Convention (or legalized at an Argentine consulate if your country is not a Hague member). If documents are not in Spanish, get certified translations (traducción pública) by a sworn translator registered in Argentina.",
  },
  {
    step: 3,
    title: "Apply at Migraciones or Consulate",
    description: "You can apply either at a Dirección Nacional de Migraciones office within Argentina (if you entered on a tourist visa) or at an Argentine consulate in your home country before traveling. Applying in Argentina is more common. Book an appointment (turno) on migraciones.gov.ar, complete the online form (TAD - Trámites a Distancia), and upload your documents.",
  },
  {
    step: 4,
    title: "Attend Your Migraciones Appointment",
    description: "Bring all original documents, photocopies, certified translations, and your payment receipt to your scheduled appointment. A Migraciones officer will review your file. You may receive a precaria (provisional residency certificate) that allows you to stay and work legally while your application is processed.",
  },
  {
    step: 5,
    title: "Receive Your Residency Approval",
    description: "Processing times vary from 2-6 months. You can track your application online through the TAD portal. Once approved, you receive a residency disposition (disposición) granting temporary residency for 1-3 years depending on your category.",
  },
  {
    step: 6,
    title: "Apply for Your DNI at RENAPER",
    description: "After receiving your residency approval, book an appointment at RENAPER (Registro Nacional de las Personas) to obtain your DNI (Documento Nacional de Identidad). The DNI is essential for opening bank accounts, signing contracts, accessing healthcare, and daily life in Argentina. Bring your passport, residency disposition, and two passport photos.",
  },
];

const faqs = [
  {
    question: "What are the benefits of having a DNI?",
    answer: "The DNI (Documento Nacional de Identidad) is Argentina's national identity document and opens the door to nearly everything in the country. With a DNI, you can open bank accounts in Argentine pesos and dollars, sign rental contracts in your own name, access the public healthcare system (obras sociales), enroll in public universities for free, get a CUIT/CUIL tax number for employment, sign up for utilities and internet services, and build credit history in Argentina. The DNI is essentially your key to participating fully in Argentine society and economy.",
  },
  {
    question: "Can I access healthcare with temporary residency?",
    answer: "Yes. With temporary residency and a DNI, you can access Argentina's public healthcare system, which includes free treatment at public hospitals. Additionally, if you are employed formally, your employer is required to enroll you in an obra social (health insurance plan) which gives you access to a network of private clinics and hospitals. Self-employed residents can voluntarily join an obra social or purchase private health insurance (prepaga). Many expats opt for a combination of public coverage as a safety net and private insurance for routine care and shorter wait times.",
  },
  {
    question: "Can I work with temporary residency?",
    answer: "Yes, temporary residency grants you the legal right to work in Argentina, whether as an employee (empleado en relación de dependencia) or as a self-employed worker (trabajador autónomo or monotributista). Once you have your DNI, you can obtain a CUIT (tax identification number) from AFIP and begin working legally. You will need to register with the appropriate tax regime (monotributo for freelancers and small businesses, or the general regime for higher-income earners). Note that the specific subcategory of your temporary residency may affect your initial work rights while the application is being processed.",
  },
  {
    question: "How long does temporary residency last, and can I renew it?",
    answer: "Temporary residency is initially granted for 1-3 years depending on your subcategory and nationality. Mercosur citizens typically receive 2 years, while other nationalities may receive 1 year initially. You can renew your temporary residency before it expires by filing a renewal application at Migraciones. After holding temporary residency for 2-3 continuous years (depending on your category), you become eligible to apply for permanent residency, which does not require renewal.",
  },
  {
    question: "What is the path from temporary to permanent residency?",
    answer: "After maintaining continuous temporary residency for 2 years (for Mercosur nationals) or 3 years (for non-Mercosur nationals), you can apply for permanent residency at Migraciones. You must demonstrate that you have been living in Argentina during this period, have maintained a clean criminal record, and have complied with your tax obligations. The application process is similar to the initial temporary residency application, and processing times are typically 3-6 months. Permanent residency does not expire and does not need renewal.",
  },
  {
    question: "Can I apply for temporary residency while on a tourist visa?",
    answer: "Yes, this is actually the most common route. Many expats enter Argentina on a tourist visa (90-day visa-free entry) and then apply for temporary residency at Migraciones while in the country. Once you submit your application and receive a precaria (provisional certificate), you are legally authorized to remain in Argentina while your application is processed, even if your tourist visa would have otherwise expired. This is known as a 'change of immigration status' (cambio de categoría migratoria).",
  },
  {
    question: "What are the Mercosur residency advantages?",
    answer: "Citizens of Mercosur and associated member states (Brazil, Paraguay, Uruguay, Venezuela, Bolivia, Chile, Colombia, Ecuador, Peru, Guyana, and Suriname) benefit from a streamlined residency process under the Mercosur Residency Agreement. The requirements are simpler: you primarily need your passport, birth certificate, and criminal background check from your home country. Processing is generally faster, the subcategory is simply 'Mercosur national' (rather than work, study, etc.), and you are granted temporary residency for 2 years with a straightforward path to permanent residency after that period.",
  },
];

export default function TemporaryResidencyPage() {
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
              { "@type": "ListItem", position: 3, name: "Temporary Residency", item: "https://expatsargentina.com/visas/temporary" },
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
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">Visas</Link>
            <span>/</span>
            <span className="text-foreground">Temporary Residency</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BuildingIcon size="sm" className="mr-1" />
              Temporary Residency
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Temporary Residency Guide 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Residencia Temporaria is your gateway to living, working, and studying in Argentina.
              This 1-3 year renewable visa grants you a DNI, access to healthcare, banking, and
              sets you on the path to permanent residency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>1-3 years duration</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>~$200-400 fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-primary" />
                <span>Full work rights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1-3</div>
              <div className="text-sm text-muted-foreground">Years Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Subcategories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-6</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">DNI</div>
              <div className="text-sm text-muted-foreground">National ID Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Residency Subcategories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <BuildingIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Work (Empleado / Autónomo)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For those with an employment contract from an Argentine company or self-employed professionals with demonstrable income. Requires CUIT registration and proof of economic activity.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <FileTextIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Study (Universitario)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For students enrolled in accredited Argentine universities or educational institutions. Requires enrollment certificate and proof of financial means to support yourself during studies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <UsersIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Family Reunification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For spouses, parents, or children of Argentine citizens or permanent residents. Requires proof of family relationship (marriage certificate, birth certificate) and the sponsor&apos;s DNI.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <DollarSignIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Rentista (Passive Income)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For individuals with stable passive income such as rental properties, investments, pensions, or retirement funds. Must demonstrate monthly income equivalent to at least 30 times the minimum wage.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <GlobeIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Mercosur National</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Streamlined process for citizens of Mercosur and associated states (Brazil, Uruguay, Paraguay, Chile, Bolivia, Colombia, Ecuador, Peru, and others). Simplified requirements and faster processing.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <ShieldIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Religious / Humanitarian</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For religious workers, volunteers, refugees, and individuals granted humanitarian protection. Requires documentation from the sponsoring organization or UNHCR refugee status certification.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">General Requirements</h2>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Document Checklist</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Valid passport (minimum 18 months validity recommended)",
                    "Birth certificate with apostille or consular legalization",
                    "Criminal background check from home country (apostilled, less than 3 months old)",
                    "Certified Spanish translation of all non-Spanish documents",
                    "Passport-sized photos (4x4 cm, white background)",
                    "Proof of Argentine address (utility bill, rental contract, or responsable letter)",
                    "Category-specific documents (employment contract, enrollment letter, marriage certificate, etc.)",
                    "Migraciones fee payment receipt",
                    "RENAPER appointment confirmation for DNI processing",
                    "Argentine tax registration (CUIT/CUIL) if applying under work category",
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
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
                      Argentine immigration procedures and fees are subject to change. Processing times
                      can vary significantly based on your nationality, subcategory, and the current
                      workload at Migraciones. Always verify current requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      or consult with a qualified immigration attorney. This guide is for informational
                      purposes only.
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
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Once you have temporary residency, start planning your permanent future in Argentina.
              Learn about permanent residency, set up your banking, and explore your new home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/permanent">
                  Permanent Residency Guide
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
                <Link href="/visas/work">
                  Explore Work Visa Options
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
