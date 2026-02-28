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
  StarIcon,
  GraduationCapIcon,
  UsersIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentine Citizenship (Naturalización) Guide 2026 - How to Become a Citizen",
  description: "Complete guide to Argentine citizenship through naturalization in 2026. Requirements, application process, dual citizenship, passport benefits, and the path from permanent residency.",
  keywords: ["Argentine citizenship", "naturalización Argentina", "Argentina passport", "dual citizenship Argentina", "become Argentine citizen", "Argentina naturalization 2026", "Mercosur passport"],
  openGraph: {
    title: "Argentine Citizenship (Naturalización) Guide 2026",
    description: "Dual citizenship allowed, Mercosur travel benefits, and visa-free access to 170+ countries.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/citizenship",
  },
};

const requirements = [
  {
    icon: ClockIcon,
    title: "Continuous Residence",
    description: "Minimum 2 years of permanent residency in Argentina with continuous physical presence (or less through marriage to an Argentine citizen)",
  },
  {
    icon: GraduationCapIcon,
    title: "Language & Civic Knowledge",
    description: "Basic Spanish language proficiency and knowledge of the Argentine Constitution, national history, and civic principles",
  },
  {
    icon: DollarSignIcon,
    title: "Means of Subsistence",
    description: "Proof of employment, business activity, pension, or other legitimate income demonstrating you can sustain yourself in Argentina",
  },
  {
    icon: ShieldIcon,
    title: "Clean Record",
    description: "No criminal convictions in Argentina or abroad that would disqualify you, and no ongoing criminal proceedings",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Verify Your Eligibility",
    description: "You must have held permanent residency for at least 2 continuous years. Exceptions exist for spouses of Argentine citizens (who can apply after 2 years of marriage while residing in Argentina, even with less time as a permanent resident), parents of Argentine-born children, and individuals who have performed distinguished service to Argentina. Verify that you have maintained continuous physical presence, generally meaning you have not been absent for more than one-third of the required period.",
  },
  {
    step: 2,
    title: "Gather Required Documentation",
    description: "Prepare your permanent DNI, valid passport, Argentine criminal background check (Certificado de Antecedentes Penales), proof of means of subsistence (employment certification, tax records, or business registration), proof of Argentine address (utility bills or rental contract), and two witnesses who are Argentine citizens willing to testify to your good character and residence. All foreign documents must be apostilled and translated into Spanish.",
  },
  {
    step: 3,
    title: "File the Application at Federal Court",
    description: "Citizenship applications are handled by the federal judiciary, not by Migraciones. File your petition at the Juzgado Federal (Federal Court) with jurisdiction over your place of residence. In Buenos Aires, this means the federal courts in the city center. In other provinces, contact the local Juzgado Federal. You will submit your complete file and the court will assign your case to a specific judge.",
  },
  {
    step: 4,
    title: "Attend the Judicial Interview",
    description: "The assigned federal judge (or their secretary) will schedule an interview, typically 3-6 months after filing. During this interview, you will be asked questions in Spanish about your life in Argentina, your reasons for seeking citizenship, your knowledge of Argentine history and the Constitution, and your understanding of civic responsibilities. The interview is generally conversational and not an exam, but you should be prepared to discuss basic topics like the branches of government, national symbols, and the rights enshrined in the Constitution.",
  },
  {
    step: 5,
    title: "Witness Testimony",
    description: "Your two Argentine citizen witnesses will be called to testify before the court, either at your interview or at a separate hearing. They will confirm your continuous residence in Argentina, your good moral character, and your integration into Argentine society. Witnesses should know you personally and be able to speak to your daily life and community involvement.",
  },
  {
    step: 6,
    title: "Receive the Citizenship Resolution",
    description: "After reviewing your file, interview, and witness testimony, the judge issues a resolution (sentencia) granting or denying citizenship. If approved, you receive a certified copy of the resolution. The total timeline from application to resolution is typically 6-18 months, depending on the court's workload and your jurisdiction.",
  },
  {
    step: 7,
    title: "Take the Oath and Obtain Your Documents",
    description: "Once approved, you must attend a citizenship ceremony to take the oath of allegiance to Argentina before the judge. After the ceremony, you can update your DNI at RENAPER to reflect your Argentine citizenship and apply for an Argentine passport at the Policía Federal. The Argentine passport grants visa-free or visa-on-arrival access to over 170 countries worldwide.",
  },
];

const faqs = [
  {
    question: "Does Argentina allow dual citizenship?",
    answer: "Yes, Argentina fully allows dual citizenship. When you become a naturalized Argentine citizen, you are not required to renounce your previous nationality. Argentina does not ask or expect you to give up your original passport. This means you can hold both an Argentine passport and your home country passport simultaneously. Many expats maintain dual citizenship for the travel and practical benefits of having two passports. However, check the laws of your home country as well, since some countries do not allow their citizens to hold dual nationality (though this is increasingly rare).",
  },
  {
    question: "What are the benefits of an Argentine passport?",
    answer: "The Argentine passport is one of the strongest in Latin America. As of 2026, it provides visa-free or visa-on-arrival access to over 170 countries and territories, including all of Europe's Schengen Area, the United Kingdom, Japan, South Korea, and most of the Americas. Within Mercosur countries (Brazil, Uruguay, Paraguay, Bolivia, Chile, Colombia, Ecuador, Peru, and others), you can travel freely using just your DNI without needing a passport at all. Argentine citizens also benefit from consular protection abroad and the right to live and work in any Mercosur member state.",
  },
  {
    question: "How long does the entire citizenship process take?",
    answer: "The total timeline from beginning your immigration journey to holding an Argentine passport depends on your starting point. If you enter Argentina as a tourist and begin the process from scratch: approximately 90 days for tourist visa, plus 3 years for temporary residency (2 for Mercosur nationals), plus 2 years for permanent residency, plus 6-18 months for the citizenship application process. In total, plan for approximately 5-7 years from arrival to citizenship for non-Mercosur nationals, or 4-5 years for Mercosur nationals. Spouses of Argentine citizens can often complete the process faster.",
  },
  {
    question: "Do I need to speak fluent Spanish?",
    answer: "You do not need to be fluent, but you must demonstrate a basic functional level of Spanish sufficient to communicate during the judicial interview. The judge needs to see that you can understand and respond to questions about your life in Argentina, your work, and basic civic topics. Most judges are understanding of non-native speakers and will speak clearly and patiently. That said, if you cannot hold a basic conversation in Spanish, you should invest in language classes before applying. Taking a formal Spanish course and having a certificate can strengthen your application.",
  },
  {
    question: "What civic knowledge is required for the interview?",
    answer: "The judicial interview is not a formal test, but you should have a basic understanding of Argentine civics. Topics commonly discussed include: the three branches of government (executive, legislative, judicial), the role of the President, the national flag and its colors, the Argentine national anthem (you do not need to sing it, but know its significance), key dates in Argentine history (May 25, July 9), basic constitutional rights (freedom of speech, religion, press), and the significance of the Constitution of 1853. Many courts provide a study guide or list of suggested topics when you file your application.",
  },
  {
    question: "Can I become a citizen through marriage to an Argentine?",
    answer: "Marriage to an Argentine citizen provides an expedited path but does not automatically grant citizenship. The spouse of an Argentine citizen can apply for citizenship after 2 years of marriage while residing in Argentina, combined with having obtained permanent residency. The key advantage is that the residency timeline can be shortened: you may be eligible for temporary residency immediately through family reunification and can often move to permanent residency faster than the standard timeline. During the citizenship interview, the judge may ask about your married life to confirm the genuineness of the relationship.",
  },
  {
    question: "What if my citizenship application is denied?",
    answer: "Citizenship denials are relatively rare when applicants meet all requirements, but they can happen. Common reasons for denial include insufficient continuous residence (too much time spent abroad), inability to demonstrate basic Spanish proficiency, criminal record issues, or incomplete documentation. If denied, you can appeal the decision to a higher court (Cámara Federal de Apelaciones). You can also address the deficiencies identified by the judge and reapply after a waiting period, typically 1 year. Consulting with an immigration attorney before applying can help avoid common pitfalls that lead to denial.",
  },
];

export default function CitizenshipPage() {
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
              { "@type": "ListItem", position: 3, name: "Citizenship", item: "https://expatsargentina.com/visas/citizenship" },
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
            <span className="text-foreground">Citizenship</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <StarIcon size="sm" className="mr-1" />
              Citizenship
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentine Citizenship Guide 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Becoming an Argentine citizen through naturalization grants you an Argentine passport,
              full political rights, and membership in one of South America&apos;s most vibrant nations.
              Dual citizenship is allowed, and you never have to give up your original nationality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <GlobeIcon size="sm" className="text-primary" />
                <span>170+ visa-free countries</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon size="sm" className="text-primary" />
                <span>Dual citizenship allowed</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>2 years after permanent</span>
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
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Years After Permanent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">170+</div>
              <div className="text-sm text-muted-foreground">Visa-Free Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6-18</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Dual</div>
              <div className="text-sm text-muted-foreground">Citizenship Allowed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Requirements for Naturalization</h2>
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

      {/* Citizenship Pathways */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pathways to Citizenship</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <ClockIcon size="md" className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Standard Path</h3>
                  <p className="text-sm text-muted-foreground">2+ years of permanent residency with continuous physical presence in Argentina. The most common route for expats.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-4">
                    <UsersIcon size="md" className="text-pink-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Marriage to Argentine</h3>
                  <p className="text-sm text-muted-foreground">Expedited path through marriage to an Argentine citizen. Apply after 2 years of marriage while residing in Argentina.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <StarIcon size="md" className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Special Merit</h3>
                  <p className="text-sm text-muted-foreground">For parents of Argentine-born children or individuals with distinguished service to the country. Accelerated timelines possible.</p>
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
                    "Valid permanent DNI (Documento Nacional de Identidad)",
                    "Valid passport from your country of origin",
                    "Argentine criminal background check (Certificado de Antecedentes Penales, less than 3 months old)",
                    "Proof of means of subsistence (employment certificate, tax registration, business license, or pension proof)",
                    "Proof of Argentine domicile (utility bills, rental contract, or property deed)",
                    "Birth certificate (apostilled and translated into Spanish)",
                    "Two Argentine citizen witnesses with their DNIs",
                    "Passport-sized photos (4x4 cm, white background)",
                    "Marriage certificate if applying through the spousal pathway (apostilled and translated)",
                    "Court filing fee payment receipt (approximately $50-100 USD equivalent)",
                    "Proof of continuous residence (bank statements, employment records, utility payment history)",
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
                      The citizenship process is handled by the federal judiciary and procedures can
                      vary between courts and jurisdictions. Processing times depend heavily on the
                      specific court&apos;s workload. Requirements and documentation may differ slightly
                      by jurisdiction. Always consult with a qualified immigration attorney familiar
                      with citizenship cases in your area, and verify current requirements with the{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>. This guide is for informational purposes only.
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
            <h2 className="text-3xl font-bold mb-4">Begin Your Journey to Citizenship</h2>
            <p className="text-primary-foreground/80 mb-8">
              Whether you are just arriving in Argentina or already a permanent resident,
              understanding the full immigration pathway helps you plan ahead. Explore our
              other guides to navigate each step of your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/permanent">
                  Permanent Residency Guide
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/about">
                  <GlobeIcon size="sm" className="mr-2" />
                  About Expats Argentina
                </Link>
              </Button>
            </div>
            <div className="mt-4">
              <Button asChild variant="link" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Link href="/visas">
                  View All Visa Guides
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
