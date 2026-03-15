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
  GiftIcon,
  PlaneIcon,
  GlobeIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DollarSignIcon,
  ClockIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Shipping Belongings to Argentina 2026 | Moving & Customs Guide",
  description:
    "How to ship your belongings to Argentina. Sea freight, air cargo, customs clearance, menaje de casa exemption, what to bring vs. buy locally, and costs.",
  keywords: [
    "shipping to Argentina",
    "moving to Argentina",
    "customs Argentina",
    "menaje de casa",
    "international shipping Argentina",
    "sea freight Argentina",
  ],
  openGraph: {
    title: "Shipping Your Belongings to Argentina — Moving Guide 2026",
    description:
      "Sea freight, air cargo, customs, and the menaje de casa exemption. What to ship, what to buy locally, and how to avoid customs headaches.",
  },
  alternates: { canonical: "https://expatsargentina.com/shipping" },
};

const shippingOptions = [
  {
    method: "Sea Freight (Container)",
    icon: GlobeIcon,
    timeline: "6–12 weeks door to door",
    cost: "$3,000–$8,000 for 20ft container",
    bestFor: "Full household moves with furniture",
    details: [
      "20ft container fits a 1-2 bedroom apartment; 40ft for larger homes",
      "Door-to-door service includes packing, loading, shipping, customs clearance, and local delivery",
      "Arrives at Puerto Nuevo (Buenos Aires) — customs clearance takes 1–3 weeks after arrival",
      "Must be arranged before departure or within specific timeframes for menaje de casa exemption",
      "Use an international mover with Argentine customs experience (Crown, AGS, Allied)",
    ],
  },
  {
    method: "Air Freight",
    icon: PlaneIcon,
    timeline: "1–2 weeks door to door",
    cost: "$5–$10 per kg ($2,000–$5,000 typical)",
    bestFor: "Urgent items, small shipments under 200 kg",
    details: [
      "Much faster but significantly more expensive per kg than sea freight",
      "Good for electronics, documents, clothing, and essentials you need immediately",
      "Arrives at Ezeiza airport cargo terminal",
      "Customs clearance typically faster than sea freight",
      "DHL, FedEx, and UPS offer international shipping but at premium rates",
    ],
  },
  {
    method: "Excess Baggage / Checked Luggage",
    icon: GiftIcon,
    timeline: "Arrives with you",
    cost: "$50–$200 per extra bag (airline dependent)",
    bestFor: "Essentials for your first weeks",
    details: [
      "Most airlines allow 1-2 checked bags (23 kg each) included in your ticket",
      "Extra bags cost $50–$200 each depending on the airline and route",
      "Bring essentials you will need in the first 2–4 weeks: clothes, electronics, medications, important documents",
      "Argentina customs allows personal effects up to a reasonable value without duty",
      "Pack adapters (Type I plugs, 220V), prescription medications with documentation, and photocopies of all important documents",
    ],
  },
];

const faqs = [
  {
    question: "What is the menaje de casa exemption?",
    answer:
      "Menaje de casa (household goods) is a one-time customs exemption that allows new residents to import their personal belongings and household items duty-free when moving to Argentina. To qualify, you must have a valid residency visa, the goods must be personal and used (not new for resale), and you must initiate the process within the required timeframe. The exact requirements and deadlines vary — work with a customs broker (despachante de aduanas) who handles these regularly. This can save thousands in import duties.",
  },
  {
    question: "What should I ship vs. buy locally?",
    answer:
      "Ship: electronics (laptops, cameras — expensive in Argentina), specialty kitchen items, professional tools/equipment, sentimental items, high-quality clothing and shoes (limited selection locally in larger sizes), books in English, prescription medications (with documentation). Buy locally: furniture (good quality and cheaper), basic kitchen items, bedding and linens, cleaning supplies, toiletries, local-plug electronics. Argentina manufactures decent furniture and has good home goods stores (Easy, Sodimac, Falabella).",
  },
  {
    question: "Can I ship a car to Argentina?",
    answer:
      "Technically yes, but practically very difficult and expensive. Import duties on vehicles are 35%+ of the vehicle's value, plus shipping costs of $2,000–$5,000. The car must meet Argentine safety and emissions standards, and the bureaucracy is extensive. Most expats sell their car before moving and buy locally. Argentina has a well-functioning used car market (check MercadoLibre Autos or Kavak). If you absolutely need to bring a specific vehicle, work with a specialized vehicle import broker.",
  },
  {
    question: "How do I receive Amazon packages in Argentina?",
    answer:
      "Amazon does not ship most items directly to Argentina. Options: use a courier service like Tiendamia, Grabr, or Aerobox that provides a US/Miami address and forwards packages to Buenos Aires. These services charge $10–$20/kg plus Argentine customs duties. Small packages (under $50 value) sometimes arrive through Correo Argentino's puerta a puerta system, but expect 2–4 week delays and a trip to the customs office (aduana). For tech products, consider buying from Mercado Libre (Argentina's Amazon equivalent) where prices are higher but delivery is reliable.",
  },
  {
    question: "What items are restricted or prohibited?",
    answer:
      "Prohibited: drugs, weapons, certain agricultural products (fresh fruits, meats, dairy, seeds), counterfeit goods. Restricted (requires permits): medications beyond personal use quantities, professional equipment (may require specific import licenses), food supplements, plants. Electronics: no specific restrictions but may be taxed if quantity suggests resale intent. Always declare valuable items. When in doubt, check with your customs broker or SENASA (agricultural authority) before shipping.",
  },
  {
    question: "How much does a typical move cost?",
    answer:
      "Budget ranges for a move from the US/Europe to Buenos Aires: Minimal (excess baggage only): $200–$600. Small shipment (5–10 boxes via air freight): $1,500–$3,000. Medium move (20ft container, sea freight): $4,000–$8,000. Full household (40ft container): $7,000–$15,000. These include shipping, insurance, and basic customs clearance. Add $500–$2,000 for customs broker fees if not included. Prices vary significantly by origin country, volume, and season.",
  },
];

export default function ShippingPage() {
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
            Shipping Your Belongings to Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            What to ship, what to buy locally, how customs works, and how to
            use the menaje de casa exemption to avoid duties. Practical advice
            from people who have done it.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GlobeIcon, label: "Sea Freight", value: "6–12 weeks" },
              { icon: PlaneIcon, label: "Air Freight", value: "1–2 weeks" },
              { icon: DollarSignIcon, label: "Container", value: "$3,000–$8,000" },
              { icon: CheckCircleIcon, label: "Duty-Free", value: "Menaje de casa" },
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

      {/* Shipping Options */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Shipping Options
          </h2>
          <div className="space-y-6">
            {shippingOptions.map((option) => (
              <Card key={option.method}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <option.icon className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{option.method}</CardTitle>
                      <div className="mt-1 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-3 w-3" /> {option.timeline}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSignIcon className="h-3 w-3" /> {option.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm font-medium text-primary">
                    Best for: {option.bestFor}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {option.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Ship vs Buy */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            What to Ship vs. Buy Locally
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <GiftIcon className="h-5 w-5" /> Ship From Home
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Laptops, cameras, electronics (40–60% more expensive locally)</p>
                <p>• Professional tools and specialized equipment</p>
                <p>• Prescription medications (with documentation)</p>
                <p>• Quality shoes in larger sizes (limited selection in AR)</p>
                <p>• English-language books</p>
                <p>• Sentimental or irreplaceable items</p>
                <p>• Specific kitchen tools (cast iron, specialty items)</p>
                <p>• Musical instruments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <CheckCircleIcon className="h-5 w-5" /> Buy in Argentina
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Furniture (good quality, affordable at Easy/Sodimac)</p>
                <p>• Bedding, towels, linens</p>
                <p>• Basic kitchen items (pots, pans, utensils)</p>
                <p>• Cleaning supplies and toiletries</p>
                <p>• Clothing basics (local brands are fine)</p>
                <p>• Power adapters and voltage-compatible items</p>
                <p>• Mate kit (the traditional Argentine drink set)</p>
                <p>• Local SIM card and basic phone accessories</p>
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
          <h2 className="mb-3 text-2xl font-bold">Planning Your Move?</h2>
          <p className="mb-6 text-muted-foreground">
            Shipping is one piece of the puzzle. Check our getting started guide
            for the full relocation timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/guides/getting-started">
                Getting Started Guide <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/housing">Housing Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cost-of-living">Cost of Living</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
