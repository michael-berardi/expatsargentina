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
  GraduationCapIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  ShieldIcon,
  GlobeIcon,
  CalendarIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentina Student Visa - Study in Argentina Guide 2026",
  description: "Complete guide to Argentina's student visa. Study at free public universities, application process, requirements, costs, and student life in Argentina.",
  keywords: ["Argentina student visa", "study in Argentina", "free university Argentina", "Argentina student residency", "UBA international students"],
  openGraph: {
    title: "Argentina Student Visa - Study in Argentina Guide 2026",
    description: "Study at Argentina's world-class universities, many tuition-free for international students. Complete visa application guide.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/student",
  },
};

const requirements = [
  {
    icon: GraduationCapIcon,
    title: "Acceptance from an Argentine Institution",
    description: "An official acceptance letter or proof of enrollment from a recognized Argentine educational institution, whether a university, language school, or postgraduate program.",
  },
  {
    icon: DollarSignIcon,
    title: "Proof of Financial Means",
    description: "Evidence that you can support yourself during your studies. This can include bank statements, a scholarship letter, a sponsor letter from a parent or guardian, or proof of employment that allows remote work.",
  },
  {
    icon: ShieldIcon,
    title: "Clean Criminal Record",
    description: "A police clearance certificate from your home country and any country where you have lived for more than one year in the past five years, apostilled and translated into Spanish.",
  },
  {
    icon: FileTextIcon,
    title: "Academic Transcripts",
    description: "Official academic transcripts from your previous educational institutions, apostilled and translated. For university enrollment, your secondary school diploma may also be required.",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Choose Your Institution and Program",
    description: "Research Argentine universities and programs. Argentina has over 50 national (public) universities that are tuition-free for all students, including foreigners. The Universidad de Buenos Aires (UBA) is the most prestigious and is ranked among the top universities in Latin America. Private universities charge tuition but often offer scholarships.",
  },
  {
    step: 2,
    title: "Apply to the Educational Institution",
    description: "Submit your application directly to the Argentine university or institution. Requirements vary by program but generally include academic transcripts, a personal statement, and sometimes an entrance exam or language proficiency test. For the UBA, most programs require completion of the CBC (Ciclo Basico Comun), a one-year foundational course.",
  },
  {
    step: 3,
    title: "Obtain Your Acceptance Letter",
    description: "Once accepted, request an official acceptance letter (constancia de inscripcion or carta de admision) that includes your full name, passport number, program name, start date, and expected duration of studies. This document is essential for your visa application.",
  },
  {
    step: 4,
    title: "Gather and Apostille Documents",
    description: "Obtain police clearances and apostille all required documents from your home country. Birth certificates, academic transcripts, and police clearances all need apostilles under the Hague Convention. Start this process well in advance, as it can take several weeks.",
  },
  {
    step: 5,
    title: "Submit Your Visa Application",
    description: "File your student residency application at the Direccion Nacional de Migraciones in Argentina or through the Radex online platform. You can apply from within Argentina after entering on a tourist visa. Pay the applicable government fees and receive your precaria (temporary authorization).",
  },
  {
    step: 6,
    title: "Complete Registration and Get Your DNI",
    description: "Once your student residency is approved, apply for your DNI at RENAPER. With your DNI, you can open a bank account, sign a rental contract, and access student benefits including discounts on transportation, cultural events, and more.",
  },
];

const studentLifeHighlights = [
  {
    title: "Free Public University Education",
    description: "Argentina is one of the few countries in the world that offers completely tuition-free university education to international students at public institutions. This includes the prestigious Universidad de Buenos Aires (UBA), which consistently ranks in the top 100 universities globally. There are no tuition fees, no differential pricing for foreigners, and no hidden academic costs.",
  },
  {
    title: "Affordable Cost of Living",
    description: "Student life in Buenos Aires is remarkably affordable compared to other major world cities. Shared apartments in student-friendly neighborhoods like Palermo, Almagro, or Caballito are available at a fraction of the cost of comparable cities. University cafeterias offer subsidized meals, and public transportation is inexpensive with a student SUBE card.",
  },
  {
    title: "Vibrant Student Culture",
    description: "Argentine universities have a dynamic student culture with active student unions, cultural activities, sports, and social events. The country attracts students from across Latin America, creating a diverse and international environment. Buenos Aires in particular offers world-class nightlife, arts, and cultural experiences that enrich the student experience.",
  },
  {
    title: "Spanish Language Immersion",
    description: "Studying in Argentina provides total immersion in the Spanish language. Even if your program is taught partly in English, daily life is conducted in Spanish. Many international students combine their degree program with Spanish language courses. Argentine Spanish (Rioplatense) has a distinctive accent and vocabulary that is widely understood throughout the Spanish-speaking world.",
  },
];

const faqs = [
  {
    question: "Is university really free for international students?",
    answer: "Yes. Argentine public (national) universities charge zero tuition to all students regardless of nationality. This is guaranteed by Argentine law and is a matter of national pride. However, you will need to cover your own living expenses, books, and materials. Some programs may have small registration or examination fees, but these are nominal compared to tuition at universities in other countries.",
  },
  {
    question: "Do I need to speak Spanish to study in Argentina?",
    answer: "For most undergraduate programs at public universities, instruction is entirely in Spanish, and you will need a strong command of the language. Some postgraduate programs and private universities offer courses in English. If your Spanish is not yet sufficient, many students begin with an intensive Spanish language program (which also qualifies for a student visa) before enrolling in a degree program.",
  },
  {
    question: "Can I work while studying?",
    answer: "Yes, student residents in Argentina are permitted to work. Many students work part-time to support themselves. Once you have your DNI, you can be legally employed. Common student jobs include English teaching, hospitality work, and freelance services. Your student visa does not restrict your work hours, but your studies must remain your primary activity.",
  },
  {
    question: "How long does the student visa last?",
    answer: "The student visa is granted for the duration of your studies, which can range from one year for a language course to six years or more for a medical degree. You must demonstrate ongoing enrollment to renew your residency. If you drop out or fail to maintain active student status, your grounds for residency may be affected.",
  },
  {
    question: "What is the CBC at the University of Buenos Aires?",
    answer: "The CBC (Ciclo Basico Comun) is a mandatory one-year foundational program that all students must complete before entering their chosen career at UBA. It consists of six subjects, some common to all students and others specific to your intended field of study. The CBC serves as both preparation and a selection mechanism. International students are subject to the same CBC requirements as Argentine students.",
  },
  {
    question: "Can I stay in Argentina after graduation?",
    answer: "Yes. After completing your studies, you can apply to change your visa category to a work visa, start a business, or apply for residency under another category. Many graduates find employment in Argentina or start their own ventures. Your time as a student resident counts toward the period required for permanent residency, so you may already be eligible by the time you graduate.",
  },
];

export default function StudentVisaPage() {
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
              { "@type": "ListItem", position: 3, name: "Student Visa", item: "https://expatsargentina.com/visas/student" },
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
            <span className="text-foreground">Student Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <GraduationCapIcon size="sm" className="mr-1" />
              Student Residency
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Student Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Study at world-class universities -- many completely tuition-free, even for
              international students. Argentina offers one of the most accessible and affordable
              higher education systems in the world, combined with an unforgettable cultural experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>1-6 years duration</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>~$100-300 in fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-primary" />
                <span>1-3 month processing</span>
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
              <div className="text-3xl font-bold text-primary">$0</div>
              <div className="text-sm text-muted-foreground">Public Uni Tuition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$100-300</div>
              <div className="text-sm text-muted-foreground">Visa Fees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1-3</div>
              <div className="text-sm text-muted-foreground">Months Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Public Universities</div>
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
                Argentina has a long and proud tradition of public education that extends to foreign
                students. The country&apos;s constitution guarantees free education at all levels, and this
                principle applies to international students at public universities without exception.
                This makes Argentina one of the most attractive destinations in the world for students
                seeking quality higher education without the burden of tuition debt.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The student visa (residencia temporaria por estudios) grants you legal residency in
                Argentina for the duration of your academic program. Whether you are pursuing a
                bachelor&apos;s degree, a master&apos;s program, a doctorate, a language course, or any other
                accredited educational program, this visa provides the legal framework to live,
                study, and work in Argentina.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Argentina attracts tens of thousands of international students annually, drawn not
                only by free education but also by the low cost of living, the vibrant cultural
                scene, and the opportunity for complete Spanish language immersion. Buenos Aires
                is consistently ranked among the best cities in the world for students, offering
                a unique blend of academic rigor and lifestyle that few other destinations can match.
                The student visa is also one of the simplest Argentine visa categories to obtain,
                with relatively minimal requirements and fast processing times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free University System */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">The Free University System</h2>
            <p className="text-center text-muted-foreground mb-8">
              Argentina&apos;s public university system is one of the most generous in the world for international students.
            </p>
            <Card className="border-teal-200 bg-teal-50 dark:bg-teal-950/20">
              <CardContent className="pt-6">
                <div className="space-y-4 text-sm">
                  <p>
                    Argentina is home to over 50 national (public) universities that charge absolutely no tuition
                    to any student, regardless of nationality. This is not a scholarship or a financial aid program --
                    it is the fundamental structure of Argentine higher education, enshrined in law since 1949.
                  </p>
                  <p>
                    The Universidad de Buenos Aires (UBA) is the flagship institution, consistently ranked as the
                    top university in Latin America and within the top 100 globally in several subject areas.
                    Other notable public universities include the Universidad Nacional de Cordoba (the oldest in
                    the country, founded in 1613), the Universidad Nacional de La Plata, and the Universidad
                    Nacional de Rosario.
                  </p>
                  <p>
                    While tuition is free, students are responsible for their own living expenses, textbooks,
                    and materials. Some programs have small registration or examination fees, but these are
                    minimal. The combination of zero tuition and a low cost of living means that a year of
                    university education in Argentina can cost less than a single semester at many institutions
                    in the United States, Canada, or Europe.
                  </p>
                </div>
              </CardContent>
            </Card>
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
                    "Official acceptance letter from an Argentine educational institution",
                    "Academic transcripts from previous institutions (apostilled)",
                    "Secondary school diploma or equivalent (apostilled, for university enrollment)",
                    "Police clearance certificate from home country (apostilled)",
                    "Proof of financial means (bank statements, scholarship letter, or sponsor declaration)",
                    "Health insurance documentation (recommended but not always required)",
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

      {/* Student Life */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Student Life in Argentina</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {studentLifeHighlights.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                    <h3 className="font-semibold">Months 1-3: Research and Apply to Institutions</h3>
                    <p className="text-muted-foreground text-sm">Research programs, prepare your academic application, and submit to your chosen institution. Admission timelines vary by university and program. The UBA academic year starts in March, with enrollment periods in December-February.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 1-3: Document Preparation</h3>
                    <p className="text-muted-foreground text-sm">Once accepted, gather police clearances, apostille your documents, and arrange certified translations. Begin this process immediately after receiving your acceptance letter.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Week 4: Visa Application</h3>
                    <p className="text-muted-foreground text-sm">Submit your student residency application at Migraciones or via the Radex platform. Receive your precaria allowing you to remain legally in Argentina while the application is processed.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <CalendarIcon size="md" className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Weeks 4-12: Processing and Approval</h3>
                    <p className="text-muted-foreground text-sm">Student visa processing typically takes 1-3 months. Once approved, proceed to obtain your DNI and fully enroll in your academic program.</p>
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
                        <strong>Language barrier is significant.</strong> Most public university programs are taught entirely in Spanish. If your Spanish is not at an advanced level, plan for at least 6-12 months of intensive language study before starting a degree program. Do not underestimate this requirement.
                      </li>
                      <li>
                        <strong>Academic culture is different.</strong> Argentine universities have a different structure than what many international students are accustomed to. Class schedules can be irregular, professors may not follow syllabi strictly, and administrative processes can be slow. Flexibility and patience are essential.
                      </li>
                      <li>
                        <strong>Free does not mean easy.</strong> Public universities in Argentina, particularly the UBA, are academically rigorous. The CBC alone has a significant dropout rate. Be prepared for serious academic work and do not assume that free tuition means lower quality or standards.
                      </li>
                      <li>
                        <strong>Living expenses still apply.</strong> While tuition is free, you will need to fund your housing, food, transportation, and personal expenses. Budget at least $500-1,000 USD per month for basic living expenses in Buenos Aires, depending on your lifestyle and neighborhood.
                      </li>
                      <li>
                        <strong>Credential recognition may vary.</strong> Depending on your home country, your Argentine degree may need to be validated or recognized through additional processes when you return home. Research this before enrolling to ensure your degree will be useful for your career plans.
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
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Student Visa?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our legal partner Lucero Legal specializes in Argentine immigration law and can
              guide you through the student residency process. Focus on your studies while they
              handle the paperwork.
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
