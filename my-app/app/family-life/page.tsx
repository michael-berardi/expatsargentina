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
  UsersIcon,
  HeartIcon,
  HomeIcon,
  GraduationCapIcon,
  ShieldIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  DollarSignIcon,
  StarIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Family Life in Argentina 2026 | Raising Kids & Expat Family Guide",
  description:
    "Practical guide to family life in Argentina. Childcare, parenting culture, activities for kids, family-friendly neighborhoods, and what expat parents need to know.",
  keywords: [
    "family life Argentina",
    "raising kids Argentina",
    "expat families Argentina",
    "childcare Argentina",
    "family-friendly Buenos Aires",
  ],
  openGraph: {
    title: "Family Life in Argentina — Expat Parent Guide 2026",
    description:
      "Childcare, parenting culture, schools, activities, and family-friendly neighborhoods for expat families moving to Argentina.",
  },
  alternates: { canonical: "https://expatsargentina.com/family-life" },
};

const familyTopics = [
  {
    title: "Childcare & Nannies",
    icon: HeartIcon,
    content: [
      "Niñeras (nannies) are affordable by international standards — $3-6/hr in Buenos Aires, less in smaller cities",
      "Live-in nannies (cama adentro) are common and cost $400-800/month including room and board",
      "Jardines maternales (daycare) accept children from 45 days old — $100-300/month for private, free at public",
      "Most nannies are found through word of mouth, Facebook groups, or agencies like Nanny Argentina",
      "Empleadas domésticas (household help) often combine childcare with housekeeping — legally require registration with AFIP",
      "Always register domestic workers properly — it protects both parties and provides ART (workplace insurance)",
    ],
  },
  {
    title: "Parenting Culture",
    icon: UsersIcon,
    content: [
      "Argentine kids stay up late — 10pm bedtimes are normal, even for young children. Family dinners start at 9pm",
      "Children are welcomed everywhere: restaurants, cafes, shops. Argentina is one of the most child-friendly cultures in Latin America",
      "Birthday parties (cumpleaños) are major events — peloteros (indoor play spaces) handle everything for $50-150",
      "Extended family plays a central role. Grandparents (abuelos) are deeply involved in childcare",
      "The plaza (park/square) is where kids socialize. Every neighborhood has one, and they fill up every afternoon",
      "Breastfeeding in public is normal and legally protected. Argentina has strong maternity rights",
      "Helicopter parenting is less common — kids have more independence, walk to school by age 8-9 in safe neighborhoods",
    ],
  },
  {
    title: "Activities & Entertainment",
    icon: StarIcon,
    content: [
      "Peloteros (indoor play spaces) are everywhere — $5-15 per visit, most neighborhoods have several",
      "Football (soccer) classes for kids start as young as 3-4 years old, available in every barrio",
      "Talleres (workshops): art, music, dance, robotics, cooking classes for kids are affordable ($30-80/month)",
      "Parque de la Costa (Tigre) is the main amusement park near Buenos Aires",
      "Museo de los Niños (children's museum) in Abasto Shopping is a rainy-day staple",
      "Colonia de vacaciones (summer camp, Dec-Feb) costs $200-500/month — most clubs and schools offer them",
      "Swimming is hugely popular — many families join a club (club de barrio) for $30-60/month with pool access",
      "Scouts (Scouts de Argentina) groups are active in most neighborhoods — a great way for kids to integrate",
    ],
  },
  {
    title: "Healthcare for Children",
    icon: ShieldIcon,
    content: [
      "Pediatricians (pediatras) are excellent in Argentina — many trained in top hospitals like Garrahan or Gutiérrez",
      "Well-child visits follow the same schedule as WHO recommendations — free at public hospitals",
      "Vaccination schedule is comprehensive and mandatory for school enrollment — free at any public hospital",
      "Hospital de Pediatría Garrahan and Hospital Gutiérrez are world-class public children's hospitals",
      "Private pediatric care through obras sociales or prepagas runs $80-200/month for family coverage",
      "Pharmacies stock all standard children's medications — many available without prescription",
      "Dental care for children is affordable — $30-60 per visit at private dentists",
    ],
  },
];

const familyNeighborhoods = [
  {
    name: "Belgrano",
    city: "Buenos Aires",
    why: "Tree-lined streets, excellent schools (Lincoln, St. Andrew's nearby), Barrio Chino for diversity, large parks. Very family-oriented, safe.",
    priceRange: "$800-1,500/mo rent",
  },
  {
    name: "Núñez",
    city: "Buenos Aires",
    why: "Quiet residential area near River Plate stadium, good public and private schools, close to Costanera Norte parks. Lower rent than Belgrano.",
    priceRange: "$600-1,200/mo rent",
  },
  {
    name: "Caballito",
    city: "Buenos Aires",
    why: "Central location, Parque Rivadavia, strong neighborhood identity, excellent Subte access (Line A and E). Good mix of apartments and houses.",
    priceRange: "$500-1,000/mo rent",
  },
  {
    name: "Cerro de las Rosas",
    city: "Córdoba",
    why: "Upscale residential area with gardens, excellent private schools, close to Sierras for weekend escapes. Strong expat community.",
    priceRange: "$400-800/mo rent",
  },
  {
    name: "Chacras de Coria",
    city: "Mendoza",
    why: "Semi-rural feel with vineyards nearby, outdoor lifestyle, excellent international schools. Popular with expat families who want space.",
    priceRange: "$500-1,000/mo rent",
  },
];

const faqs = [
  {
    question: "Is Argentina safe for families with children?",
    answer:
      "Argentina is generally safe for families, especially in residential neighborhoods. Buenos Aires has areas to avoid at night (La Boca beyond the tourist zone, Constitución, Once after dark), but daytime safety in most neighborhoods is fine. Smaller cities like Mendoza, Córdoba, and Bariloche are even safer. Common-sense precautions apply: don't flash expensive electronics, be aware of your surroundings in unfamiliar areas, and get local advice on which blocks to avoid. Kids play outside freely in most residential areas.",
  },
  {
    question: "How do expat kids adapt to life in Argentina?",
    answer:
      "Children generally adapt faster than adults. Younger kids (under 8) typically pick up Spanish within 3-6 months of immersion. Older kids may take 6-12 months but usually become fluent within a year. International schools ease the transition with bilingual programs. The biggest challenges are missing friends from home and adjusting to the later schedule (dinner at 9pm, later bedtimes). Sports, especially football, are a universal connector — enrolling kids in a local club or team is one of the best integration strategies.",
  },
  {
    question: "What documents do children need to live in Argentina?",
    answer:
      "Children need the same residency documentation as adults: valid passport, visa (same category as parents), and eventually a DNI. Additionally, you need apostilled birth certificates translated into Spanish by a certified translator (traductor público). If only one parent is traveling with the child, you need a notarized travel authorization (autorización de viaje) from the other parent — this is strictly enforced at Argentine borders. For school enrollment, you need apostilled and translated academic records from the child's previous school.",
  },
  {
    question: "Can my children attend public school for free?",
    answer:
      "Yes. Argentine public schools are free for all residents, including foreigners, regardless of immigration status. This is constitutionally guaranteed. The quality varies significantly — some public schools are excellent, others are under-resourced. The school year runs March through December. Classes are typically either morning (7:30am-12pm) or afternoon (1pm-5:30pm), not full day, which can be a logistical challenge for working parents. Many families supplement with private extracurricular activities in the off-shift.",
  },
  {
    question: "How much does it cost to raise a child in Argentina?",
    answer:
      "A rough monthly budget for one child in Buenos Aires: private school ($200-800), health insurance ($80-150 for family plan), activities/sports ($50-100), childcare if needed ($200-600 for part-time nanny), food addition ($100-200), clothing/supplies ($50-100). Total: $680-1,950/month per child. Costs are 30-50% lower in Córdoba, Mendoza, and smaller cities. Public school and public healthcare can reduce costs dramatically — many expat families use a mix of public and private services.",
  },
  {
    question: "Are there expat parent groups and communities?",
    answer:
      "Yes, especially in Buenos Aires. Facebook groups like 'Expats in Buenos Aires' and 'BA Expat Parents' are active. InterNations has regular family events. International schools often have parent associations that organize social events. In Mendoza and Córdoba, the expat communities are smaller but tight-knit. WhatsApp groups are the primary way parents coordinate playdates and share information about schools, pediatricians, and activities.",
  },
];

export default function FamilyLifePage() {
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
      <section className="border-b bg-gradient-to-b from-orange-50 to-white px-4 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Updated 2026
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Family Life in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Childcare, parenting culture, activities, family-friendly
            neighborhoods, and what you need to know about raising kids in
            Argentina. From nannies to birthday parties to school enrollment.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HeartIcon, label: "Nanny Cost", value: "$3-6/hr" },
              { icon: GraduationCapIcon, label: "School Year", value: "Mar-Dec" },
              { icon: DollarSignIcon, label: "Daycare", value: "$100-300/mo" },
              { icon: HomeIcon, label: "Peloteros", value: "$5-15/visit" },
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

      {/* Key Topics */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            What Expat Parents Need to Know
          </h2>
          <div className="space-y-6">
            {familyTopics.map((topic) => (
              <Card key={topic.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <topic.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {topic.content.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Shock for Parents */}
      <section className="border-t bg-amber-50/50 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-start gap-3">
            <AlertCircleIcon className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Culture Adjustments for Parents
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Late schedules:</strong> Children eat dinner at 9-10pm
                  and go to bed later than in most countries. School birthday
                  party invitations for 6pm on a weeknight are normal. You will
                  adjust faster than you think.
                </p>
                <p>
                  <strong>Physical affection:</strong> Argentines kiss children
                  on the cheek as greeting — friends, teachers, parents of
                  friends. This is cultural, not concerning.
                </p>
                <p>
                  <strong>Less structured supervision:</strong> Kids play in
                  plazas with less direct parental oversight than in the US or
                  Northern Europe. Other parents and neighbors keep an informal
                  eye on everyone&apos;s kids.
                </p>
                <p>
                  <strong>Half-day school:</strong> Most public and many private
                  schools run only morning or afternoon shifts (4-5 hours). This
                  requires childcare solutions for working parents. Doble
                  jornada (full-day) schools exist but are less common and more
                  expensive.
                </p>
                <p>
                  <strong>Bureaucracy with kids:</strong> Every document needs an
                  apostille, translation, and legalization. Plan extra time for
                  school enrollment, DNI processing, and health insurance setup
                  for children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Neighborhoods */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Best Neighborhoods for Families
          </h2>
          <div className="space-y-4">
            {familyNeighborhoods.map((hood) => (
              <Card key={hood.name}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{hood.name}</h3>
                      <p className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPinIcon className="h-3 w-3" /> {hood.city}
                      </p>
                    </div>
                    <Badge variant="outline">{hood.priceRange}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {hood.why}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-muted/20 px-4 py-16">
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
      <section className="border-t px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold">Planning a Family Move?</h2>
          <p className="mb-6 text-muted-foreground">
            Schools, housing, and healthcare are the three pillars. Start with
            the guides that matter most to your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/education">
                Schools Guide <ArrowRightIcon className="ml-1 h-4 w-4" />
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
