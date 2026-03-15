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
  ScaleIcon,
  ShieldIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  HomeIcon,
  BriefcaseIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Legal Rights in Argentina 2026 | Know Your Rights as a Foreigner",
  description:
    "Your legal rights as a foreigner in Argentina. Tenant rights, consumer protection, police interactions, labor law, and what to do in legal emergencies. Know the system before you need it.",
  keywords: [
    "legal rights Argentina",
    "foreigner rights Argentina",
    "tenant rights Argentina",
    "consumer protection Argentina",
    "labor law Argentina expat",
  ],
  openGraph: {
    title: "Know Your Legal Rights in Argentina — Foreigner Guide 2026",
    description:
      "Tenant rights, consumer protection, police interactions, labor law, and emergency legal help for foreigners in Argentina.",
  },
  alternates: { canonical: "https://expatsargentina.com/legal-rights" },
};

const rightsSections = [
  {
    title: "Constitutional Rights",
    icon: ScaleIcon,
    intro:
      "The Argentine Constitution (Article 20) grants foreigners the same civil rights as citizens. This is not rhetoric — it is legally enforceable.",
    rights: [
      "Right to work, own property, and run a business — same as citizens",
      "Right to free public education at all levels, including university",
      "Right to free public healthcare, regardless of immigration status",
      "Freedom of religion, speech, and assembly — fully protected",
      "Right to due process and legal representation if accused of a crime",
      "Right to leave and re-enter the country freely (with valid documents)",
      "Constitutional rights apply even to undocumented residents — deportation requires judicial process",
    ],
  },
  {
    title: "Tenant Rights (Inquilinos)",
    icon: HomeIcon,
    intro:
      "Argentina has strong tenant protection laws. The 2023 housing law reform changed several rules — here is what applies in 2026.",
    rights: [
      "Minimum lease term: landlords can offer any duration, but tenants can terminate after 6 months with 1-month notice",
      "Security deposit: maximum 1 month's rent. Landlords must return it adjusted for inflation at lease end",
      "Rent increases: currently unregulated (the 2020 rent law was repealed in late 2023). Negotiate terms clearly in your contract",
      "Eviction requires a court order — landlords cannot change locks, cut utilities, or force you out",
      "Landlords must maintain structural elements (roof, plumbing, electrical). Cosmetic maintenance is negotiable",
      "You can withhold rent proportionally if the landlord fails to make essential repairs (with proper legal notice)",
      "Defensa del Consumidor handles tenant disputes free of charge",
      "Get everything in writing. Verbal agreements are legally binding but nearly impossible to enforce",
    ],
  },
  {
    title: "Consumer Protection (Defensa del Consumidor)",
    icon: ShieldIcon,
    intro:
      "Argentina has robust consumer protection. Defensa del Consumidor is a free government service that resolves disputes between consumers and businesses.",
    rights: [
      "Right to a refund or replacement for defective products within warranty period",
      "Right to cancel online purchases within 10 business days (derecho de arrepentimiento) — no questions asked",
      "Companies must honor advertised prices, even if they claim it was a mistake",
      "Telecom, internet, and utility companies cannot charge for services you did not request",
      "File complaints free at defensadelconsumidor.gob.ar or at your local municipal office",
      "Mediations are mandatory before lawsuits — most disputes resolve at this stage",
      "Companies that ignore Defensa del Consumidor rulings face fines and public listing",
      "Keep receipts, screenshots of prices, and written communication — documentation wins cases",
    ],
  },
  {
    title: "Labor Rights (Derechos Laborales)",
    icon: BriefcaseIcon,
    intro:
      "Argentine labor law is strongly worker-protective. These rights apply equally to foreign workers with legal work authorization.",
    rights: [
      "Maximum work week: 48 hours (8 hours/day, 6 days/week). Overtime pays 50-100% premium",
      "Minimum 14 days paid vacation per year (increases with seniority to 35 days)",
      "13th salary (aguinaldo): employers must pay a bonus equal to 50% of your highest monthly salary, twice per year (June and December)",
      "Severance: 1 month salary per year worked if terminated without cause",
      "Maternity leave: 90 days paid (45 before, 45 after birth). Paternity: 2 days (expanding)",
      "Sick leave: up to 3 months paid per year (6 months if you have 5+ years of service)",
      "Unions are strong and sector-specific. Your paritaria (collective bargaining agreement) may grant additional benefits",
      "Monotributo (self-employment) workers have fewer protections — understand the difference before accepting a contract",
    ],
  },
];

const emergencyContacts = [
  { service: "Police Emergency", number: "911", note: "Nationwide emergency line" },
  { service: "Tourist Police (BA)", number: "0800-999-5000", note: "English-speaking, 24/7" },
  { service: "Defensa del Consumidor", number: "0800-666-1518", note: "Consumer complaints" },
  { service: "Women's Emergency Line", number: "144", note: "Domestic violence, 24/7" },
  { service: "Human Rights (INADI)", number: "0800-999-2345", note: "Discrimination complaints" },
  { service: "Legal Aid (BA)", number: "0800-333-3700", note: "Free legal consultation" },
];

const faqs = [
  {
    question: "What should I do if I'm stopped by police?",
    answer:
      "Stay calm and cooperate. You are required to carry identification (passport or DNI) at all times. Police can ask to see it but cannot detain you solely for being foreign. If arrested, you have the right to a phone call and legal representation. Ask for a traductor público (official translator) if you don't speak Spanish. Do not sign documents you don't understand. Contact your embassy immediately. In Buenos Aires, the Tourist Police (Comisaría del Turista) at Av. Corrientes 436 has English-speaking officers and is the best place to file reports as a foreigner.",
  },
  {
    question: "Can I be deported from Argentina?",
    answer:
      "Deportation requires a judicial order — it cannot happen on the spot. Grounds include: committing a serious crime, having a fraudulent visa, or being under a re-entry ban. Overstaying a tourist visa results in a fine (paid at the airport when leaving) but not deportation. Argentina is one of the most lenient countries in Latin America regarding immigration enforcement. If you receive a deportation order, you have the right to appeal through the courts, and the process typically takes months to years.",
  },
  {
    question: "How does the court system work for foreigners?",
    answer:
      "Foreigners have the same access to courts as citizens. Civil cases (landlord disputes, consumer claims, contract issues) go through juzgados civiles. Criminal cases go through juzgados penales. Small claims can often be resolved through mediación (mandatory mediation) without going to court. You have the right to a court-appointed translator. Legal aid (patrocinio jurídico gratuito) is available through bar associations and universities — UBA's law school offers free legal clinics. The judicial system is slow — civil cases take 1-3 years on average.",
  },
  {
    question: "What if my landlord won't return my deposit?",
    answer:
      "First, send a carta documento (certified legal letter, costs ~$5-10) demanding the return with a deadline. This is a formal legal notice that creates a paper trail. If ignored, file a complaint with Defensa del Consumidor (free). They will schedule a mediación where both parties must appear. If mediation fails, you can sue in civil court — for amounts under a certain threshold, you can use the juzgado de paz (small claims) without a lawyer. Most landlords comply after receiving a carta documento because the legal system favors tenants in deposit disputes.",
  },
  {
    question: "Can I own property in Argentina as a foreigner?",
    answer:
      "Yes. Foreigners can buy and own property in Argentina with essentially no restrictions (the 2011 rural land restrictions were loosened under recent reforms). You need a CDI (tax ID for foreigners) or CUIT/CUIL, which is easier to obtain than a DNI. Property transactions are done through an escribano (notary public) who handles the legal transfer. All property must be registered with the Registro de la Propiedad Inmueble. There is no restriction on the number of properties you can own. Foreign buyers should use a specialized real estate attorney in addition to the escribano.",
  },
  {
    question: "What are my rights if I'm discriminated against?",
    answer:
      "Discrimination based on nationality, race, religion, gender, sexual orientation, or disability is illegal under Argentine law (Ley 23.592). File complaints with INADI (Instituto Nacional contra la Discriminación) at 0800-999-2345 or inadi.gob.ar. INADI investigates complaints free of charge and can impose sanctions. In practice, overt discrimination against foreigners is uncommon — Argentina has a long tradition of immigration and multiculturalism. More common issues include landlords refusing to rent to foreigners without a garantía, which is legal but can sometimes be challenged through Defensa del Consumidor.",
  },
];

export default function LegalRightsPage() {
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
            Know Your Legal Rights in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            As a foreigner in Argentina, you have the same civil rights as
            citizens. Here is what the law actually says about your rights as a
            tenant, consumer, worker, and resident.
          </p>
        </div>
      </section>

      {/* Key Principle */}
      <section className="border-b bg-green-50/50 px-4 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-start gap-3">
            <ScaleIcon className="mt-0.5 h-6 w-6 shrink-0 text-green-700" />
            <div>
              <h2 className="mb-2 font-semibold text-green-900">
                The Foundation: Article 20 of the Argentine Constitution
              </h2>
              <p className="text-sm text-green-800">
                &ldquo;Foreigners enjoy within the territory of the Nation all
                the civil rights of citizens; they may exercise their industry,
                commerce, and profession; own real property, buy and sell it;
                navigate the Argentine rivers and coasts; freely practice their
                religion; make wills and marry in accordance with the
                laws.&rdquo; — This is not aspirational. It is enforceable law
                since 1853.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rights Sections */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {rightsSections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <section.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {section.intro}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.rights.map((right) => (
                      <li key={right} className="flex items-start gap-2">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {right}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Emergency & Legal Contacts
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {emergencyContacts.map((contact) => (
              <Card key={contact.service}>
                <CardContent className="flex items-center gap-3 p-4">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">{contact.service}</p>
                    <p className="text-lg font-bold text-primary">
                      {contact.number}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contact.note}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t bg-amber-50/50 px-4 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-start gap-3">
            <AlertCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h3 className="mb-2 font-semibold">Legal Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This page provides general legal information, not legal advice.
                Argentine law is complex and changes frequently. For specific
                legal situations, consult a licensed Argentine attorney
                (abogado). Free legal aid is available through bar associations,
                university law clinics (especially UBA), and government programs.
              </p>
            </div>
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
      <section className="border-t px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold">More Practical Guides</h2>
          <p className="mb-6 text-muted-foreground">
            Understanding your rights is step one. These guides cover the
            practical side of settling in.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/housing">
                Housing Guide <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/guides/working-taxes">Working & Taxes</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/insurance">Insurance Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
