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
  BriefcaseIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  ShieldIcon,
  GlobeIcon,
  CalendarIcon,
  BuildingIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Work Visa - Employment-Based Residency Guide 2026",
  description: "Complete guide to Argentina's work visa and employment-based residency. Requirements, employer sponsorship, application process, costs, and timelines for working legally in Argentina.",
  keywords: ["Argentina work visa", "employment visa Argentina", "work permit Argentina", "employer sponsorship Argentina", "Argentina residency through work"],
  openGraph: {
    title: "Argentina Work Visa - Employment-Based Residency Guide 2026",
    description: "Get a work visa in Argentina through employer sponsorship. Step-by-step guide to requirements, documents, and application process.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/work",
  },
};

const requirements = [
  {
    icon: BriefcaseIcon,
    title: "Job Offer from Argentine Employer",
    description: "A formal job offer or employment contract from a company legally registered in Argentina. The employer must demonstrate why a foreign worker is needed for the role.",
  },
  {
    icon: BuildingIcon,
    title: "Employer Sponsorship",
    description: "Your Argentine employer must sponsor your visa application and submit documentation to the Direccion Nacional de Migraciones on your behalf.",
  },
  {
    icon: FileTextIcon,
    title: "Employment Contract",
    description: "A signed employment contract detailing your position, salary, duration, and working conditions in accordance with Argentine labor law.",
  },
  {
    icon: ShieldIcon,
    title: "Clean Criminal Record",
    description: "A police clearance certificate from your home country and any country where you have resided for more than one year in the past five years.",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Secure Employment in Argentina",
    description: "Find a job with an Argentine employer willing to sponsor your visa. The employer must be a legally constituted entity registered with AFIP (the Argentine tax authority). Larger companies and multinational firms with local offices are the most common sponsors.",
  },
  {
    step: 2,
    title: "Employer Initiates the Process",
    description: "Your employer files a request with the Direccion Nacional de Migraciones. They must provide their company registration documents, tax filings, and a justification for hiring a foreign worker, including proof the role could not be filled locally.",
  },
  {
    step: 3,
    title: "Gather Your Personal Documents",
    description: "Collect your passport, apostilled birth certificate, police clearance certificates, educational credentials, employment contract, and passport-sized photos. All foreign documents must be apostilled and translated into Spanish by a certified public translator in Argentina.",
  },
  {
    step: 4,
    title: "Submit the Application",
    description: "File your residency application at the Direccion Nacional de Migraciones office in Buenos Aires or online through the Radex digital platform. Your employer may need to be present or provide a power of attorney for certain steps.",
  },
  {
    step: 5,
    title: "Biometrics and Interview",
    description: "Attend an appointment at Migraciones for fingerprinting and photograph. You may be asked basic questions about your employment and plans in Argentina. Bring all original documents and copies.",
  },
  {
    step: 6,
    title: "Receive Your DNI",
    description: "Once your temporary residency is approved, apply for your DNI (Documento Nacional de Identidad) at the Registro Nacional de las Personas (RENAPER). The DNI is your national identity card and is essential for daily life, banking, and contracts in Argentina.",
  },
];

const faqs = [
  {
    question: "Can I change employers while on a work visa?",
    answer: "Yes, but you must notify Migraciones and update your residency records. Your new employer will need to provide a new employment contract and supporting documentation. It is advisable to complete this process before leaving your current position to avoid gaps in your legal status.",
  },
  {
    question: "Does my employer pay for the visa process?",
    answer: "There is no legal requirement for the employer to cover visa costs, but many companies do cover the fees and legal expenses as part of their relocation package. This is something to negotiate during your hiring process. At minimum, the employer bears the costs of their own filings.",
  },
  {
    question: "Can I bring my family on a work visa?",
    answer: "Yes. Your spouse, registered partner, and minor children can apply for dependent residency permits tied to your work visa. Each family member needs their own set of documents including apostilled birth or marriage certificates. Family members receive the same residency duration as the primary applicant.",
  },
  {
    question: "What happens if I lose my job?",
    answer: "If your employment ends, your residency does not automatically expire. You have a grace period to find new employment or change your visa category. However, at renewal time, you will need to demonstrate current employment or apply under a different residency category. Consult an immigration attorney promptly if your employment situation changes.",
  },
  {
    question: "Can I work for multiple employers?",
    answer: "Your primary visa is tied to one employer, but once you have your DNI and temporary residency, you can legally work for other employers as well. Many residents take on additional freelance or part-time work. You must comply with Argentine labor and tax laws for all income sources.",
  },
  {
    question: "How do I convert temporary residency to permanent?",
    answer: "After holding temporary residency for two to three years (depending on your nationality and circumstances), you can apply for permanent residency. You must demonstrate continuous residence in Argentina, ongoing employment or income, and compliance with tax obligations. Permanent residency has no expiration date.",
  },
];

export default function WorkVisaPage() {
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
              { "@type": "ListItem", position: 3, name: "Work Visa", item: "https://expatsargentina.com/visas/work" },
            ],
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
            <span className="text-foreground">Work Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BriefcaseIcon size="sm" className="mr-1" />
              Employment-Based Residency
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Work Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The most common path to legal residency in Argentina for professionals.
              Your employer sponsors your application, and you receive a temporary
              residency permit that opens the door to permanent residency and eventually citizenship.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>1-3 year residency</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>~$200-500 in fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-primary" />
                <span>2-6 month processing</span>
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
              <div className="text-sm text-muted-foreground">Years Residency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$200-500</div>
              <div className="text-sm text-muted-foreground">Total Fees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-6</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Renewable</div>
              <div className="text-sm text-muted-foreground">Path to Permanent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Argentina&apos;s employment-based residency, commonly referred to as the work visa,
                is designed for foreign nationals who have secured a job with an Argentine employer.
                Unlike many countries that impose strict quotas or require labor market tests, Argentina&apos;s
                system is relatively straightforward once you have an employer willing to sponsor you.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The process is managed by the Direccion Nacional de Migraciones (DNM), Argentina&apos;s
                immigration authority. Your employer plays a central role, as they must initiate the
                process and provide documentation proving the legitimacy of the employment relationship.
                Once approved, you receive a temporary residency permit (residencia temporaria) valid
                for one to three years, depending on your contract and nationality.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This visa grants you full work authorization in Argentina, access to the public healthcare
                system, the ability to open bank accounts, sign rental contracts, and build a life in
                the country. After two to three years of temporary residency, you become eligible to
                apply for permanent residency, and Argentine citizenship is available after just two
                years of permanent residence. The entire pathway from arrival to citizenship can be
                completed in as few as four to five years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
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

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Application Process</h2>
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
                    "Valid passport (minimum 6 months remaining validity)",
                    "Passport-sized photos (4x4 cm, white background)",
                    "Apostilled birth certificate",
                    "Police clearance certificate from home country (apostilled)",
                    "Police clearance from any country of residence in the past 5 years",
                    "Signed employment contract with Argentine employer",
                    "Employer's company registration documents (AFIP enrollment, articles of incorporation)",
                    "Employer's justification letter for hiring a foreign worker",
                    "Educational credentials (apostilled, if relevant to the position)",
                    "Certified Spanish translations of all foreign-language documents",
                    "Proof of accommodation in Argentina",
                    "Payment receipts for all applicable government fees",
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

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Expected Timeline</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 1-4: Document Gathering</h3>
                    <p className="text-muted-foreground text-sm">Obtain police clearances, apostille documents, and arrange certified translations. This step often takes the longest because it depends on your home country&apos;s processing times.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 4-6: Employer Filing</h3>
                    <p className="text-muted-foreground text-sm">Your employer submits their portion of the application to Migraciones, including company documents and the employment justification.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 6-8: Application Submission</h3>
                    <p className="text-muted-foreground text-sm">Submit your personal application with all documents at Migraciones or via the Radex platform. Pay the government filing fees.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 8-24: Processing and Approval</h3>
                    <p className="text-muted-foreground text-sm">Migraciones reviews your application. Processing times vary significantly. You may receive a precaria (temporary authorization to remain) while waiting. Once approved, proceed to obtain your DNI.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircleIcon size="lg" className="text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Reality Check
                    </h3>
                    <ul className="text-amber-800 dark:text-amber-200 text-sm space-y-2">
                      <li>
                        <strong>Processing delays are common.</strong> While the official timeline suggests 2-6 months, delays at Migraciones are frequent. Budget extra time and do not make irreversible plans based on a specific approval date.
                      </li>
                      <li>
                        <strong>Apostilles take time.</strong> Getting documents apostilled from abroad can take weeks or months. Start this process as early as possible, ideally before arriving in Argentina.
                      </li>
                      <li>
                        <strong>Salaries in Argentina are lower.</strong> If you are being hired locally, be aware that Argentine salaries are significantly lower than in North America or Europe, even for skilled positions. Factor in the cost of living advantage, but set realistic salary expectations.
                      </li>
                      <li>
                        <strong>Currency and banking are complicated.</strong> Argentina has a complex financial system with multiple exchange rates. Your employer will pay you in Argentine pesos. Understanding the financial landscape is essential before committing to a local salary.
                      </li>
                      <li>
                        <strong>You need an immigration lawyer.</strong> While it is technically possible to navigate this process alone, the bureaucracy is complex and largely conducted in Spanish. A qualified immigration attorney can prevent costly mistakes and expedite the process.
                      </li>
                    </ul>
                  </div>
                </div>
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Work Visa?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our legal partner Lucero Legal specializes in Argentine immigration law and
              employer-sponsored residency applications. Get professional guidance through
              every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://lucerolegal.com" target="_blank" rel="noopener noreferrer">
                  Contact Lucero Legal
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/visas">
                  <GlobeIcon size="sm" className="mr-2" />
                  Explore All Visas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground text-center">
              This guide is for informational purposes only and does not constitute legal advice.
              Visa requirements, fees, and processing times change frequently. Always verify current
              requirements on the official{" "}
              <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                Argentine Immigration website
              </Link>{" "}
              or consult with a qualified immigration attorney before making any decisions.
              Last updated: 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
