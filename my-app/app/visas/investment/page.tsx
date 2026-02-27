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
  CalendarIcon,
  BriefcaseIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Investment Visa - Residency by Investment Guide 2026",
  description: "Complete guide to Argentina's investment visa. Requirements, investment options, application process, costs, and benefits of obtaining residency through business investment in Argentina.",
  keywords: ["Argentina investment visa", "residency by investment Argentina", "invest in Argentina", "Argentina business visa", "Argentina investor residency"],
  openGraph: {
    title: "Argentina Investment Visa - Residency by Investment Guide 2026",
    description: "Obtain Argentine residency through business investment. Complete guide to investment options, requirements, and application process.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/investment",
  },
};

const requirements = [
  {
    icon: DollarSignIcon,
    title: "Qualifying Investment",
    description: "A verifiable investment in an Argentine business, real estate development, or productive venture. While there is no single fixed minimum, investments of $100,000 USD or more are generally expected to demonstrate seriousness and viability.",
  },
  {
    icon: BriefcaseIcon,
    title: "Business Plan",
    description: "A detailed business plan outlining the nature of your investment, expected economic impact, job creation potential, and timeline. The plan must demonstrate that your venture will contribute to the Argentine economy.",
  },
  {
    icon: ShieldIcon,
    title: "Proof of Funds and Source",
    description: "Documentation proving the legitimate origin of your investment funds. This includes bank statements, tax returns, business financial statements, and any other documents establishing a clean financial history.",
  },
  {
    icon: FileTextIcon,
    title: "Clean Criminal Record",
    description: "Police clearance certificates from your home country and any country of residence in the past five years. All certificates must be apostilled and translated into Spanish by a certified public translator.",
  },
];

const investmentOptions = [
  {
    title: "Starting a New Business",
    description: "Establishing a new company in Argentina is the most common investment route. This can range from a restaurant or retail business to a technology startup or consulting firm. You will need to formally register the company with the Argentine authorities (IGJ or equivalent provincial registry), obtain a CUIT (tax identification number), and demonstrate that the business is operational and generating economic activity.",
  },
  {
    title: "Purchasing an Existing Business",
    description: "Acquiring an established Argentine business qualifies as an investment. This route can be faster than starting from scratch because the business already has operational history, employees, and revenue. Due diligence is critical: verify the business's legal standing, tax compliance, employment obligations, and any outstanding liabilities before completing the purchase.",
  },
  {
    title: "Real Estate Development",
    description: "Investment in real estate development projects (not simply purchasing a home for personal use) can qualify for the investment visa. This typically means investing in construction projects, commercial properties, or developments that create economic activity and employment. Simply buying an apartment to live in generally does not qualify, though investing in a building project or rental business may.",
  },
  {
    title: "Investment in Existing Argentine Companies",
    description: "Making a significant financial investment in an existing Argentine company, either through equity participation or other investment instruments, may qualify. You will need to demonstrate the investment amount, the nature of the business, and your ongoing involvement or interest in the venture.",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Define Your Investment Strategy",
    description: "Before beginning the visa process, determine the nature and scale of your investment. Research the Argentine market, identify your business sector, and develop a preliminary plan. Consult with an Argentine business attorney and accountant to understand the legal and tax implications of your chosen investment structure.",
  },
  {
    step: 2,
    title: "Prepare Your Business Plan",
    description: "Develop a comprehensive business plan in Spanish that details your investment, including the amount of capital you will invest, the economic activity you will undertake, projected job creation, and your qualifications for managing the venture. The plan should be professional and realistic. Immigration authorities review these documents to assess the legitimacy and viability of your proposal.",
  },
  {
    step: 3,
    title: "Gather and Apostille Documents",
    description: "Collect your passport, birth certificate, police clearances, financial statements, and any corporate documents from your home country. All documents must be apostilled under the Hague Convention and translated into Spanish by a certified public translator in Argentina. Financial documents should cover at least the past 12 months.",
  },
  {
    step: 4,
    title: "Establish Your Investment in Argentina",
    description: "Begin the process of establishing your investment. This may involve registering a company, opening a corporate bank account, signing a commercial lease, or completing an investment transaction. Having concrete evidence of your investment activity strengthens your residency application significantly.",
  },
  {
    step: 5,
    title: "Submit Your Residency Application",
    description: "File your application at the Direccion Nacional de Migraciones with your complete documentation package. This includes your personal documents, business plan, proof of investment, and evidence of your investment activity in Argentina. Pay all applicable government fees.",
  },
  {
    step: 6,
    title: "Review, Approval, and DNI",
    description: "Migraciones will review your application, which may include requests for additional documentation or clarification about your investment. Processing typically takes 3-6 months. Once approved, you will receive temporary residency and can apply for your DNI at RENAPER, giving you full access to banking, contracts, and daily life in Argentina.",
  },
];

const benefitsOfInvesting = [
  {
    title: "Growing Market Opportunities",
    description: "Argentina has Latin America's third-largest economy with a well-educated workforce, rich natural resources, and significant market potential. Sectors like technology, agriculture, renewable energy, tourism, and gastronomy offer compelling opportunities for foreign investors.",
  },
  {
    title: "Strategic Location",
    description: "Argentina provides access to the broader Mercosur market (including Brazil, Uruguay, and Paraguay) with a combined population of over 260 million. Buenos Aires is a major business hub with excellent international connectivity.",
  },
  {
    title: "Cost-Effective Operations",
    description: "Operating costs in Argentina, including labor, office space, and services, are significantly lower than in North America or Europe. This cost advantage allows investors to stretch their capital further and achieve profitability more quickly.",
  },
  {
    title: "Path to Permanent Residency and Citizenship",
    description: "Investment residency leads to the same path as other temporary residency categories: after two to three years, you can apply for permanent residency, and Argentine citizenship is available after two additional years. An Argentine passport provides visa-free access to much of the world.",
  },
  {
    title: "Tax Treaty Benefits",
    description: "Argentina has tax treaties with numerous countries that may provide advantages for foreign investors. The tax system, while complex, offers certain incentives for productive investment. Professional tax planning is essential to optimize your structure.",
  },
  {
    title: "Quality of Life",
    description: "Investors enjoy Argentina's exceptional quality of life: world-class dining, rich culture, beautiful landscapes from Patagonia to the wine country of Mendoza, and a lifestyle that balances work and personal enjoyment in a way that few countries can match.",
  },
];

const faqs = [
  {
    question: "Is there a fixed minimum investment amount?",
    answer: "Argentine immigration law does not specify a single fixed minimum investment amount for the investor visa. However, in practice, investments of $100,000 USD or more are generally considered sufficient to demonstrate a serious and viable business commitment. Smaller investments may be accepted if the business plan is compelling and the economic activity is demonstrable. The key factors are the legitimacy, viability, and economic contribution of your investment, not solely the dollar amount.",
  },
  {
    question: "Does buying property qualify for the investment visa?",
    answer: "Purchasing residential property for personal use generally does not qualify for the investment visa. However, investing in real estate development, commercial properties, or rental business operations may qualify. The distinction is between passive personal property ownership and active economic investment that creates value and potentially employment. If you want to buy a home and obtain residency, consider combining a property purchase with a business investment or exploring other visa categories.",
  },
  {
    question: "Can I bring my family?",
    answer: "Yes. Your spouse or registered partner and dependent children can apply for residency tied to your investment visa. Each family member needs their own set of documents including apostilled birth or marriage certificates. Family members receive the same residency duration and renewal rights as the primary applicant.",
  },
  {
    question: "Do I need to be physically present in Argentina to manage the business?",
    answer: "While there is no strict daily presence requirement, you are expected to demonstrate genuine involvement in your investment. Extended absences from Argentina may raise questions at residency renewal time. Many investor-residents divide their time between Argentina and other countries, but maintaining a meaningful presence and involvement in your business is important for residency continuity.",
  },
  {
    question: "What taxes will I pay on my investment and business income?",
    answer: "Argentina taxes residents on worldwide income. Your business in Argentina will be subject to corporate income tax, value-added tax (IVA), and various other taxes depending on the business structure and activity. Tax planning is critical: work with an Argentine accountant (contador publico) who has experience with foreign investors. Be aware of both Argentine tax obligations and any obligations in your home country.",
  },
  {
    question: "What happens if my business fails?",
    answer: "If your business does not succeed, your residency does not automatically terminate. However, at renewal time, you will need to demonstrate ongoing economic activity or apply under a different residency category. Many entrepreneurs pivot to new ventures or transition to other visa types. Consult with an immigration attorney if your business situation changes significantly.",
  },
  {
    question: "Can I hire foreign employees for my business?",
    answer: "Yes, but Argentine labor law requires that at least 75% of your employees be Argentine nationals. Foreign employees will need their own work visas. As the business owner, your investment visa covers your own legal status, but each foreign employee requires separate immigration processing.",
  },
];

export default function InvestmentVisaPage() {
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
              { "@type": "ListItem", position: 3, name: "Investment Visa", item: "https://expatsargentina.com/visas/investment" },
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
            <span className="text-foreground">Investment Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BriefcaseIcon size="sm" className="mr-1" />
              Investor Residency
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Investment Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Obtain Argentine residency by investing in the country&apos;s economy.
              Whether you are starting a business, acquiring an existing company, or investing
              in a development project, the investment visa provides a pathway to residency
              for entrepreneurs and investors ready to contribute to Argentina&apos;s growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>1-3 year residency</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>$100,000+ investment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-primary" />
                <span>3-6 month processing</span>
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
              <div className="text-3xl font-bold text-primary">$100K+</div>
              <div className="text-sm text-muted-foreground">Typical Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1-3</div>
              <div className="text-sm text-muted-foreground">Years Residency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3-6</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Renewable</div>
              <div className="text-sm text-muted-foreground">Path to Citizenship</div>
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
                Argentina&apos;s investment visa, formally known as the residencia temporaria por
                inversiones or residencia por actividades economicas, is designed for foreign
                nationals who intend to make a productive investment in the Argentine economy.
                Unlike golden visa programs in some European countries that primarily involve
                passive real estate purchases, Argentina&apos;s program emphasizes active economic
                participation and genuine business activity.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This visa category is well suited for entrepreneurs, business owners, and investors
                who want to establish or expand operations in Latin America&apos;s third-largest economy.
                Argentina offers a compelling combination of a large domestic market, a highly educated
                workforce, abundant natural resources, and strategic access to the broader Mercosur
                trading bloc. The cost of establishing and operating a business is significantly lower
                than in comparable markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The investment visa grants temporary residency for one to three years, renewable upon
                demonstrating ongoing business activity. Like all temporary residency categories in
                Argentina, it leads to permanent residency and eventually citizenship. The entire
                pathway from initial investment to Argentine passport can be completed in approximately
                five years, and Argentina permits dual citizenship with most countries. This makes it
                an attractive option for investors seeking not only business opportunities but also
                a second passport and global mobility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Options</h2>
            <div className="space-y-6">
              {investmentOptions.map((option) => (
                <Card key={option.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Process</h2>
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
                    "Police clearance certificates from home country and countries of residence (apostilled)",
                    "Comprehensive business plan in Spanish",
                    "Proof of investment funds (bank statements, portfolio statements, financial records)",
                    "Documentation of funds' legitimate origin (tax returns, business financials, sale proceeds)",
                    "Company registration documents (if business already established in Argentina)",
                    "Commercial lease agreement or property documentation",
                    "CUIT (Argentine tax ID) registration confirmation",
                    "Evidence of investment activity (contracts, invoices, bank transfers)",
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Expected Timeline</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Months 1-2: Planning and Preparation</h3>
                    <p className="text-muted-foreground text-sm">Develop your business plan, consult with Argentine legal and tax professionals, begin gathering documents from your home country, and start the apostille process. This preparatory phase is critical for a smooth application.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Month 2-3: Establish Investment</h3>
                    <p className="text-muted-foreground text-sm">Register your company or complete your investment transaction in Argentina. Open corporate bank accounts, sign commercial leases, and begin business operations. Concrete evidence of activity strengthens your application.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Month 3-4: Application Submission</h3>
                    <p className="text-muted-foreground text-sm">Submit your complete residency application to Migraciones with all personal and business documentation. Pay government fees and receive your precaria (temporary authorization).</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Months 4-9: Processing and Approval</h3>
                    <p className="text-muted-foreground text-sm">Migraciones reviews your application. Investment visa processing tends to take longer than other categories due to the additional business documentation review. Expect 3-6 months. You may receive requests for additional information. Once approved, proceed to obtain your DNI.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Investing in Argentina</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefitsOfInvesting.map((benefit) => (
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
                        <strong>Economic volatility is part of the landscape.</strong> Argentina has a history of economic instability, inflation, and currency controls. While this creates opportunities for those with foreign capital, it also introduces risks that do not exist in more stable economies. Any investment in Argentina should account for currency risk and macroeconomic uncertainty.
                      </li>
                      <li>
                        <strong>Bureaucracy is significant.</strong> Establishing and operating a business in Argentina involves substantial bureaucracy. Company registration, tax compliance, labor regulations, and ongoing reporting requirements are more complex than in many other countries. Budget for professional legal and accounting support from day one.
                      </li>
                      <li>
                        <strong>Labor laws strongly favor employees.</strong> Argentine labor law is among the most employee-protective in the world. Dismissal costs are high, mandatory benefits are extensive, and union relationships are important in many sectors. Understand these obligations before hiring your first employee.
                      </li>
                      <li>
                        <strong>Due diligence is non-negotiable.</strong> If acquiring an existing business, thorough due diligence is essential. Tax liabilities, employee obligations, and undisclosed debts can transfer to the new owner. Never complete an acquisition without comprehensive legal and financial review.
                      </li>
                      <li>
                        <strong>Professional advisors are essential.</strong> Do not attempt to navigate Argentine business and immigration law without qualified professionals. You need an immigration attorney, a business lawyer, and a certified public accountant (contador publico) who have specific experience with foreign investors.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Argentina?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our legal partner Lucero Legal specializes in Argentine immigration and business law.
              Get expert guidance on structuring your investment and navigating the residency
              application process.
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
              This guide is for informational purposes only and does not constitute legal or
              investment advice. Visa requirements, fees, investment thresholds, and processing
              times change frequently. Always verify current requirements on the official{" "}
              <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                Argentine Immigration website
              </Link>{" "}
              and consult with qualified immigration and business attorneys before making any
              investment decisions. Last updated: 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
