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
  AlertCircleIcon,
  ArrowRightIcon,
  ShieldIcon,
  GlobeIcon,
  MapPinIcon,
  CalendarIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Retirement Visa (Pensionado) - Complete 2026 Guide",
  description: "Complete guide to Argentina's retirement visa for pensioners. Requirements, income thresholds, application process, costs, and benefits of retiring in Argentina.",
  keywords: ["Argentina retirement visa", "pensionado visa Argentina", "retire in Argentina", "Argentina retiree residency", "pension visa Argentina"],
  openGraph: {
    title: "Argentina Retirement Visa (Pensionado) - Complete 2026 Guide",
    description: "Retire in Argentina with a pension or retirement income. Step-by-step guide to the Pensionado visa.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/retirement",
  },
};

const requirements = [
  {
    icon: DollarSignIcon,
    title: "Proof of Pension or Retirement Income",
    description: "Verifiable pension, social security, or retirement income of at least $500 USD per month. Higher income strengthens your application and may expedite processing.",
  },
  {
    icon: ShieldIcon,
    title: "Clean Criminal Record",
    description: "A police clearance certificate from your home country and any country where you have lived for more than one year in the past five years, apostilled and translated.",
  },
  {
    icon: FileTextIcon,
    title: "Health Certificate",
    description: "A medical certificate confirming you are in good health, typically issued by a physician in Argentina. Some applicants also provide health insurance documentation.",
  },
  {
    icon: GlobeIcon,
    title: "Valid Passport",
    description: "A passport with at least six months of remaining validity. You will also need certified copies and passport-sized photographs meeting Argentine specifications.",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Verify Your Eligibility",
    description: "Confirm that you receive a regular pension, social security payment, or retirement income that can be documented. The income must come from outside Argentina and be verifiable through official statements or government letters.",
  },
  {
    step: 2,
    title: "Gather and Apostille Documents",
    description: "Obtain your police clearance, birth certificate, and pension verification letter from your home country. All documents must be apostilled under the Hague Convention. If your home country is not a Hague member, documents must be legalized through the Argentine consulate.",
  },
  {
    step: 3,
    title: "Arrive in Argentina",
    description: "Most applicants enter Argentina on a tourist visa or visa-free entry and begin the residency process from within the country. You do not need to apply from abroad. Enter Argentina and establish an address you can use for official correspondence.",
  },
  {
    step: 4,
    title: "Translate All Documents",
    description: "Have all foreign-language documents translated into Spanish by a certified public translator (traductor publico) registered in Argentina. Only translations by certified translators are accepted by Migraciones.",
  },
  {
    step: 5,
    title: "Submit Your Application",
    description: "File your application at the Direccion Nacional de Migraciones in Buenos Aires or through the Radex online platform. Pay the applicable government fees. You will receive a precaria (temporary authorization) while your application is processed.",
  },
  {
    step: 6,
    title: "Obtain Your DNI",
    description: "Once your temporary residency is approved, apply for your DNI (Documento Nacional de Identidad) at RENAPER. Your DNI is essential for banking, healthcare enrollment, and daily life in Argentina.",
  },
];

const benefits = [
  {
    title: "Exceptionally Low Cost of Living",
    description: "Argentina offers a cost of living that is a fraction of what retirees pay in the United States, Canada, or Western Europe. A comfortable lifestyle in Buenos Aires, including dining out regularly, is achievable on a modest pension.",
  },
  {
    title: "World-Class Healthcare",
    description: "Argentina has an excellent healthcare system with both public and private options. Public healthcare is free for residents, and private plans (obras sociales or prepagas) are affordable by international standards. Buenos Aires has hospitals that rank among the best in Latin America.",
  },
  {
    title: "Rich Culture and Lifestyle",
    description: "From the European-influenced architecture of Buenos Aires to the wine regions of Mendoza and the natural beauty of Patagonia, Argentina offers an extraordinary quality of life. The country has a strong cafe culture, vibrant arts scene, and a pace of life that appeals to retirees.",
  },
  {
    title: "Path to Citizenship",
    description: "Retirement residency leads to permanent residency and eventually Argentine citizenship. An Argentine passport provides visa-free access to much of the world. The entire process from arrival to citizenship can be completed in approximately five years.",
  },
  {
    title: "Large Expat Community",
    description: "Argentina, particularly Buenos Aires, has a well-established community of retirees from the United States, Europe, and other countries. English is widely spoken in expat-friendly neighborhoods, and social groups cater specifically to foreign retirees.",
  },
  {
    title: "No Minimum Stay Requirement",
    description: "Unlike some countries that require retirees to spend a minimum number of days per year in the country, Argentina is relatively flexible. However, extended absences may complicate residency renewals, so plan your travel accordingly.",
  },
];

const faqs = [
  {
    question: "What counts as qualifying retirement income?",
    answer: "Government pensions (such as US Social Security, UK State Pension, or equivalent), private pension plans, retirement annuities, and documented investment income all qualify. The key requirement is that the income is regular, verifiable, and originates from outside Argentina. You will need official documentation, such as a benefit verification letter, to prove your income.",
  },
  {
    question: "Is the $500/month minimum really enough?",
    answer: "While $500 USD per month is the approximate legal minimum, higher income makes your application stronger and your life in Argentina more comfortable. Most retirees find that $1,500-2,500 per month provides a very comfortable lifestyle in Buenos Aires, including a nice apartment, dining out, and entertainment. Outside Buenos Aires, costs drop even further.",
  },
  {
    question: "Can I bring my spouse?",
    answer: "Yes. Your spouse or registered partner can apply for dependent residency tied to your retirement visa. You will need to provide an apostilled marriage certificate or proof of registered partnership. Your spouse receives the same residency duration and renewal rights as you.",
  },
  {
    question: "Do I need to pay Argentine taxes on my pension?",
    answer: "Argentina taxes residents on worldwide income. However, many countries have tax treaties with Argentina that may prevent double taxation. US citizens and residents should be aware that they are taxed on worldwide income by the IRS regardless of where they live. Consult with a tax professional who understands both Argentine and your home country tax obligations.",
  },
  {
    question: "Can I work in Argentina on a retirement visa?",
    answer: "The retirement visa is not designed for employment. However, once you have your DNI and residency, there are no strict prohibitions against earning supplemental income. Many retirees do freelance work, consulting, or start small businesses. If employment is your primary goal, consider a work visa instead.",
  },
  {
    question: "How do I receive my pension in Argentina?",
    answer: "Most retirees receive their pension through international bank transfers. Opening an Argentine bank account requires your DNI. Some retirees use services like Wise (formerly TransferWise) or maintain accounts in both countries. Be aware of Argentine currency regulations and exchange rate considerations when transferring money into the country.",
  },
];

export default function RetirementVisaPage() {
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
              { "@type": "ListItem", position: 3, name: "Retirement Visa", item: "https://expatsargentina.com/visas/retirement" },
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
            <span className="text-foreground">Retirement Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <MapPinIcon size="sm" className="mr-1" />
              Pensionado Visa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Retirement Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Retire to one of South America&apos;s most vibrant countries on your existing pension.
              Argentina&apos;s Pensionado visa offers an accessible path to residency for retirees
              with a remarkably low income threshold and a straightforward application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>1 year initial, renewable</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>~$200-400 in fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-primary" />
                <span>2-4 month processing</span>
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
              <div className="text-3xl font-bold text-primary">$500+</div>
              <div className="text-sm text-muted-foreground">Monthly Income Min.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$200-400</div>
              <div className="text-sm text-muted-foreground">Application Fees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-4</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Permanent</div>
              <div className="text-sm text-muted-foreground">Residency Eligible</div>
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
                Argentina&apos;s retirement visa, known as the Pensionado or rentista visa for retirees,
                is one of the most accessible retirement residency options in the world. The program
                is designed for foreign nationals who receive a regular pension, social security benefit,
                or retirement income from abroad and wish to make Argentina their home.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                What makes Argentina particularly attractive to retirees is the combination of an
                exceptionally low cost of living, high quality of life, excellent healthcare, and a
                welcoming immigration policy. The minimum income requirement of approximately $500 USD
                per month is among the lowest of any retirement visa program worldwide, making it
                accessible to retirees who might not qualify for programs in countries like Portugal,
                Panama, or Costa Rica.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The retirement visa initially grants one year of temporary residency, which is renewable.
                After maintaining temporary residency for the required period (typically two to three
                years), you can apply for permanent residency. Permanent residents enjoy all the rights
                of Argentine citizens except voting in national elections. Argentine citizenship itself
                is available after two years of permanent residency, and Argentina permits dual citizenship
                with most countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
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
                    "Police clearance from countries of residence in the past 5 years",
                    "Pension or retirement income verification letter (from government agency or pension provider)",
                    "Recent bank statements showing regular pension deposits (3-6 months)",
                    "Health certificate from an Argentine physician",
                    "Marriage certificate (if applying with spouse, apostilled)",
                    "Certified Spanish translations of all foreign-language documents",
                    "Completed application form (Radex platform or in-person)",
                    "Payment receipts for government filing fees",
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
                    <h3 className="font-semibold">Weeks 1-3: Document Preparation</h3>
                    <p className="text-muted-foreground text-sm">Request pension verification letters, obtain police clearances, and apostille all documents from your home country. Start this process before traveling to Argentina if possible.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Week 4: Translation</h3>
                    <p className="text-muted-foreground text-sm">Have all foreign-language documents translated by a certified public translator in Argentina. Translations typically take 3-7 business days.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Week 5-6: Application Submission</h3>
                    <p className="text-muted-foreground text-sm">Submit your complete application to Migraciones. Receive your precaria (temporary authorization) that allows you to remain in Argentina legally while your application is processed.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 6-16: Processing and Approval</h3>
                    <p className="text-muted-foreground text-sm">Migraciones reviews your application. Processing typically takes 2-4 months. Once approved, you will be notified to collect your residency documentation and can proceed to apply for your DNI.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Retiring in Argentina */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Retiring in Argentina</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-16">
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
                        <strong>Currency instability is real.</strong> Argentina has experienced significant inflation and currency devaluation. While this makes the country cheaper for those earning in foreign currencies, it also means the financial landscape can change rapidly. Your purchasing power may fluctuate.
                      </li>
                      <li>
                        <strong>Bureaucracy requires patience.</strong> The Argentine immigration system, while generally retiree-friendly, involves bureaucracy that can be slow and unpredictable. Documents may be requested multiple times, and processing delays are not uncommon.
                      </li>
                      <li>
                        <strong>Spanish is essential for daily life.</strong> While many Argentines in Buenos Aires speak some English, daily life outside of tourist areas requires at least basic Spanish. Investing in language learning will significantly improve your experience.
                      </li>
                      <li>
                        <strong>Healthcare quality varies.</strong> While top-tier private healthcare in Buenos Aires is excellent, quality can vary significantly in smaller cities and rural areas. Research healthcare options thoroughly for your chosen location.
                      </li>
                      <li>
                        <strong>Visit before committing.</strong> Spend at least one to three months in Argentina before deciding to retire there. Experience the culture, bureaucracy, and daily rhythms firsthand before making a permanent move.
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
      <section className="py-16 bg-muted/30">
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
            <h2 className="text-3xl font-bold mb-4">Ready to Retire in Argentina?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our legal partner Lucero Legal specializes in Argentine immigration law and has
              helped hundreds of retirees navigate the Pensionado visa process. Get expert
              guidance tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://lucerolegal.com" target="_blank" rel="noopener noreferrer">
                  Contact Lucero Legal
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  <DollarSignIcon size="sm" className="mr-2" />
                  Cost of Living Guide
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
