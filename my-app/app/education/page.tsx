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
  GraduationCapIcon,
  BookOpenIcon,
  GlobeIcon,
  DollarSignIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  UsersIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Schools & Education in Argentina 2026 | Expat Family Guide",
  description:
    "Guide to schools in Argentina for expat families. International schools, bilingual options, public schools, university system, costs, enrollment timelines, and what to expect.",
  keywords: [
    "international schools Argentina",
    "expat schools Buenos Aires",
    "education Argentina expats",
    "bilingual schools Argentina",
    "university Argentina foreigners",
  ],
  openGraph: {
    title: "Schools & Education in Argentina — Expat Family Guide 2026",
    description:
      "International schools, bilingual options, public schools, university, and enrollment for expat families.",
  },
  alternates: { canonical: "https://expatsargentina.com/education" },
};

const schoolTypes = [
  {
    type: "International Schools",
    icon: GlobeIcon,
    cost: "$800–$2,500/month",
    language: "English/bilingual",
    description:
      "Follow IB, American, or British curricula. Classes in English with Spanish as a second language. Best option if you may leave Argentina within a few years — credentials transfer globally.",
    examples: [
      "Lincoln School (Palermo) — American curriculum, IB Diploma",
      "St. Andrew's Scots School (Olivos) — British/IB, one of the oldest",
      "Northlands (Olivos/Nordelta) — Bilingual, IB, strong reputation",
      "Belgrano Day School (Belgrano) — British/IB, bilingual",
      "Balmoral College (Banfield) — British, south zone",
    ],
    pros: [
      "Smooth transition for non-Spanish-speaking children",
      "Globally recognized diplomas (IB, AP, A-levels)",
      "English-language instruction and support",
      "Active parent communities with other expat families",
    ],
    cons: [
      "Expensive — fees rival or exceed US/UK private schools",
      "Waitlists at top schools can be 1–2 years",
      "Concentrated in northern Buenos Aires / GBA",
      "Children may integrate into Argentine culture more slowly",
    ],
  },
  {
    type: "Bilingual Private Schools",
    icon: BookOpenIcon,
    cost: "$200–$800/month",
    language: "Spanish + English",
    description:
      "Argentine curriculum taught in both Spanish and English. A middle ground: your child learns in Spanish alongside Argentine peers while maintaining English proficiency. Many strong options across Buenos Aires.",
    examples: [
      "Michael Ham Memorial College (Vicente López)",
      "Colegio Ward (Ramos Mejía)",
      "Colegio San Martín de Tours (Palermo)",
      "Colegio Esteban Echeverría (Munro)",
    ],
    pros: [
      "Faster Spanish acquisition through daily immersion",
      "Stronger integration with local families",
      "More affordable than international schools",
      "Argentine diploma valid for local university entry",
    ],
    cons: [
      "May be challenging for children with zero Spanish",
      "Curriculum standards vary significantly between schools",
      "Fewer globally portable credentials than IB programs",
    ],
  },
  {
    type: "Public Schools (Escuelas Públicas)",
    icon: UsersIcon,
    cost: "Free",
    language: "Spanish only",
    description:
      "Argentina has free public education from kindergarten through university — it is a constitutional right. Quality varies widely by neighborhood and province. Some excellent public schools exist, particularly in CABA, but infrastructure challenges are common. All instruction is in Spanish.",
    examples: [
      "Escuela Normal Superior No. 1 (CABA)",
      "Colegio Nacional de Buenos Aires (CABA) — prestigious, entrance exam",
      "Various escuelas primarias and secundarias by district",
    ],
    pros: [
      "Completely free, including materials in many cases",
      "Full cultural immersion for your children",
      "Neighborhood-based, building local community",
      "Constitutional right — enrollment cannot be denied",
    ],
    cons: [
      "All Spanish, no English support for new arrivals",
      "Infrastructure and resources vary enormously",
      "Teacher strikes can disrupt the school year",
      "Class sizes can be large (30–40 students)",
    ],
  },
];

const faqs = [
  {
    question: "When does the school year start in Argentina?",
    answer:
      "The Argentine school year runs from early March to mid-December, with a two-week winter break in July. This is opposite to the Northern Hemisphere calendar. If you are moving mid-year from the US or Europe, your child may need to repeat a semester or enter a different grade level. International schools sometimes offer flexible entry.",
  },
  {
    question:
      "Can my child enroll in public school without speaking Spanish?",
    answer:
      "Yes — public schools cannot deny enrollment. However, there is typically no ESL support, so your child will be immersed in Spanish from day one. Younger children (under 8) generally adapt quickly. Older children may struggle without private Spanish tutoring alongside school. Some families do a semester at an international school first, then transition to bilingual or public.",
  },
  {
    question: "How do I enroll my child in school?",
    answer:
      "For public schools, go to the nearest school during enrollment periods (usually November–December for the following year, or any time mid-year for transfers). You need: passport, proof of address, vaccination records (legalized/apostilled), and any prior school transcripts. For private/international schools, contact the admissions office directly — many require entrance exams and have waitlists. The Argentine educational authority in CABA is the Ministerio de Educación de la Ciudad.",
  },
  {
    question: "Are Argentine university degrees recognized internationally?",
    answer:
      "Argentine universities — particularly UBA (Universidad de Buenos Aires, ranked #1 in Latin America) — have strong international recognition. UBA is free for all students, including foreigners. Other public universities (UNC in Córdoba, UNR in Rosario) are also well-regarded. The catch: instruction is in Spanish, and admission may require validation of your secondary diploma through the Ministerio de Educación.",
  },
  {
    question: "What about homeschooling?",
    answer:
      "Argentina does not have specific homeschooling legislation. Education is compulsory, and the government expects children to be enrolled in a recognized school. Some expat families homeschool through online international programs while maintaining a nominal enrollment at a local school. This exists in a legal grey area — it works in practice but has no formal legal framework.",
  },
  {
    question: "How much do international schools cost?",
    answer:
      "Tuition at top international schools ranges from $800 to $2,500 USD per month, plus enrollment fees that can be $3,000–$10,000. Some schools charge in pesos (volatile), others in dollars. Additional costs include uniforms ($200–$500/year), school bus ($100–$300/month), lunch ($50–$150/month), and materials. Budget $15,000–$35,000 per year per child at the high end.",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://expatsargentina.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Education",
                item: "https://expatsargentina.com/education",
              },
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

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Updated 2026
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Schools & Education in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From free public schools to elite international academies, Argentina
            offers education options at every price point. Here is what expat
            families need to know — the real picture, not the brochure version.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="border-b px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CalendarIcon,
                label: "School Year",
                value: "March – December",
              },
              {
                icon: DollarSignIcon,
                label: "Public School",
                value: "Free (constitutional right)",
              },
              {
                icon: GlobeIcon,
                label: "International Schools",
                value: "$800–$2,500/mo",
              },
              {
                icon: GraduationCapIcon,
                label: "UBA Ranking",
                value: "#1 in Latin America",
              },
            ].map((fact) => (
              <Card key={fact.label}>
                <CardContent className="flex items-center gap-3 p-4">
                  <fact.icon className="h-8 w-8 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="font-semibold">{fact.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Types */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Types of Schools
          </h2>
          <div className="space-y-8">
            {schoolTypes.map((school) => (
              <Card key={school.type} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center gap-3">
                    <school.icon className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{school.type}</CardTitle>
                      <div className="mt-1 flex gap-3 text-sm text-muted-foreground">
                        <span>{school.cost}</span>
                        <span>•</span>
                        <span>{school.language}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground">
                    {school.description}
                  </p>

                  {school.examples.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold">Notable Schools</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {school.examples.map((ex) => (
                          <li key={ex} className="flex items-start gap-2">
                            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 font-semibold text-green-700">
                        <CheckCircleIcon className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {school.pros.map((pro) => (
                          <li key={pro}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 flex items-center gap-1 font-semibold text-amber-700">
                        <AlertCircleIcon className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {school.cons.map((con) => (
                          <li key={con}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Section */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            University Education
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Argentina has one of the strongest university systems in Latin
            America — and public universities are free for everyone, including
            foreigners. No tuition. Seriously.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Public Universities (Free)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>UBA (Buenos Aires)</strong> — Ranked #1 in Latin
                  America. Programs in medicine, law, engineering, economics.
                  Free for all nationalities. Entrance via CBC (common basic
                  cycle) year.
                </p>
                <p>
                  <strong>UNC (Córdoba)</strong> — Argentina's oldest university
                  (1613). Strong engineering and science programs.
                </p>
                <p>
                  <strong>UNR (Rosario)</strong> — Known for medicine and
                  humanities.
                </p>
                <p>
                  <strong>UNCuyo (Mendoza)</strong> — Oenology, agriculture,
                  sciences.
                </p>
                <p className="pt-2 font-medium text-foreground">
                  All instruction in Spanish. Foreign diploma validation
                  (convalidación) required through Ministerio de Educación.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Private Universities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Universidad Torcuato Di Tella</strong> — Top business
                  and economics school. Some programs in English.
                </p>
                <p>
                  <strong>Universidad de San Andrés</strong> — Business, law,
                  liberal arts. Bilingual programs.
                </p>
                <p>
                  <strong>Universidad Austral / IAE</strong> — Top MBA in Latin
                  America.
                </p>
                <p>
                  <strong>UADE</strong> — Business, design, technology.
                  Practical orientation.
                </p>
                <p className="pt-2 font-medium text-foreground">
                  Tuition: $300–$1,500/month depending on institution and
                  program. Some offer English-language programs for
                  international students.
                </p>
              </CardContent>
            </Card>
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
          <h2 className="mb-3 text-2xl font-bold">Planning a Family Move?</h2>
          <p className="mb-6 text-muted-foreground">
            Education is just one piece. Explore housing, healthcare, and the
            full cost of living to plan your family's move.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/guides/getting-started">
                Getting Started Guide <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/healthcare">Healthcare Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/neighborhoods">Neighborhoods</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
