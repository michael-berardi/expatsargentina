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
  MailIcon,
  GlobeIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  DollarSignIcon,
  ClockIcon,
  ShoppingCartIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Mail & Packages in Argentina 2026 | Receiving International Shipments",
  description:
    "How to receive mail and packages in Argentina. Correo Argentino, international couriers, package forwarding services, customs process, and tips for getting Amazon deliveries.",
  keywords: [
    "mail Argentina",
    "receiving packages Argentina",
    "Amazon Argentina",
    "Correo Argentino",
    "international shipping Argentina",
    "puerta a puerta",
  ],
  openGraph: {
    title: "Mail & Packages in Argentina — How to Actually Get Deliveries (2026)",
    description:
      "Correo Argentino, DHL, FedEx, package forwarding, and the puerta a puerta customs process. What works and what doesn't.",
  },
  alternates: { canonical: "https://expatsargentina.com/mail-packages" },
};

const deliveryOptions = [
  {
    method: "Correo Argentino (National Post)",
    icon: MailIcon,
    timeline: "2-5 days domestic, 15-45 days international",
    cost: "Domestic: $1-5, International: varies",
    reliability: "Inconsistent",
    details: [
      "Domestic mail generally works but is slow compared to private couriers",
      "International packages over $50 value go through customs — expect delays of 2-6 weeks",
      "The puerta a puerta (door-to-door) system requires you to process customs paperwork online at epago.correoargentino.com.ar",
      "You get 5 international shipments per year through puerta a puerta before additional duties apply",
      "Tracking is available but unreliable — packages sometimes show 'delivered' before actual delivery",
      "Registered mail (carta certificada) is more reliable for important documents",
      "Rural and suburban delivery is significantly slower than Buenos Aires metro area",
    ],
  },
  {
    method: "International Couriers (DHL, FedEx, UPS)",
    icon: GlobeIcon,
    timeline: "3-7 business days",
    cost: "$40-150+ depending on weight and origin",
    reliability: "High",
    details: [
      "DHL Express: fastest and most reliable, handles customs clearance for you",
      "FedEx International: good for documents and small packages",
      "UPS: reliable but slightly slower, competitive pricing for heavier items",
      "All three have Buenos Aires offices for pickup and customer service",
      "Customs clearance is included but you may still owe import duties (50% of value over $50)",
      "Door-to-door delivery in Buenos Aires metro area, pickup-point in smaller cities",
      "Track packages through the courier's website — much more reliable than Correo Argentino",
      "Business accounts get volume discounts — worth setting up if you receive frequent shipments",
    ],
  },
  {
    method: "Package Forwarding Services",
    icon: ShoppingCartIcon,
    timeline: "7-21 days",
    cost: "$10-25/kg + customs duties",
    reliability: "Good",
    details: [
      "Tiendamia: buy from Amazon, eBay, Walmart US — they handle everything including customs. Prices are 2-3x US retail after fees",
      "Aerobox: Miami address + forwarding to Buenos Aires, $10-15/kg. Good for consolidating multiple orders",
      "Grabr: peer-to-peer — travelers bring items from abroad. Prices negotiable, best for small items",
      "TiendaFox: similar to Tiendamia, sometimes cheaper depending on the item category",
      "All services charge per kg plus Argentine customs duties (typically 50% of declared value)",
      "Best for electronics, clothing brands unavailable locally, specific supplements or medications",
      "Calculate total cost before ordering — sometimes buying locally on MercadoLibre is cheaper despite higher sticker prices",
      "Most services offer package consolidation to save on per-shipment fees",
    ],
  },
  {
    method: "MercadoLibre (Argentina's Amazon)",
    icon: ShoppingCartIcon,
    timeline: "1-3 days (Mercado Envíos Full)",
    cost: "Free shipping on many items",
    reliability: "Very high",
    details: [
      "Argentina's dominant e-commerce platform — most things you need are available",
      "Mercado Envíos Full: Amazon Prime equivalent. Next-day delivery in Buenos Aires on eligible items",
      "Prices are higher than US Amazon but you avoid customs duties and shipping fees",
      "Accepts local credit cards, debit cards, and MercadoPago (digital wallet)",
      "Buyer protection is strong — refunds are easy for defective or non-delivered items",
      "For electronics: prices are 30-60% higher than US retail but delivery is guaranteed",
      "Mercado Shops: independent stores within the platform, quality varies",
      "Always check seller ratings — avoid sellers with less than 50 sales or below 90% positive feedback",
    ],
  },
];

const puertaAPuertaSteps = [
  {
    step: 1,
    title: "Receive tracking notification",
    description: "Correo Argentino emails you when your package arrives at customs. Check your spam folder.",
  },
  {
    step: 2,
    title: "Register at epago.correoargentino.com.ar",
    description: "Create an account with your DNI or passport. Link the tracking number to your account.",
  },
  {
    step: 3,
    title: "Complete customs declaration (DDJJ)",
    description: "Declare the contents and value. Upload a screenshot or invoice showing what you ordered and how much it cost.",
  },
  {
    step: 4,
    title: "Pay customs duties",
    description: "50% of the declared value over $50 USD. Pay online with a local bank account or credit card. First 5 packages per year have a simplified process.",
  },
  {
    step: 5,
    title: "Wait for delivery or pickup",
    description: "After payment clears (1-3 business days), your package is released. Delivery to your address or pickup at your local Correo Argentino branch.",
  },
];

const faqs = [
  {
    question: "Can I order from Amazon and have it delivered to Argentina?",
    answer:
      "Amazon does not ship most items directly to Argentina. Your best options: (1) Use Tiendamia or Aerobox — they give you a US address, buy on your behalf, and ship to Buenos Aires. Expect total cost to be 2-3x the US price after shipping and customs. (2) Amazon Global ships some items directly — check 'ships to Argentina' filter. (3) For books and some electronics, Amazon sometimes ships via DHL with customs handled automatically. (4) Consider MercadoLibre first — many items are available locally at higher prices but without the customs hassle.",
  },
  {
    question: "What happens if I don't pick up my package?",
    answer:
      "Correo Argentino holds packages for 15-30 days at the customs office. After that, the package is returned to sender or destroyed. You will receive multiple notifications (email and sometimes SMS) before this happens. If you miss the deadline, there is no way to recover the package. Private couriers (DHL, FedEx) hold packages for shorter periods but are more proactive about delivery attempts.",
  },
  {
    question: "How much are customs duties on international packages?",
    answer:
      "The standard duty is 50% of the declared value for amounts over $50 USD. Your first 5 packages per year through puerta a puerta have a simplified process. After 5 packages, or for higher-value items, duties can be higher and the process more complex. Items sent as gifts are still subject to duties. There is no way to legally avoid customs duties — under-declaring values risks having your package seized. Private couriers include customs clearance in their fees but you still pay the duties.",
  },
  {
    question: "Is mail theft a problem in Argentina?",
    answer:
      "Package theft from doorsteps is uncommon because most deliveries require a signature or are held at the building's portería (concierge desk). Apartment buildings with a portero (doorman) are safest. For houses without a portero, delivery services typically call before arriving. The bigger issue is packages getting lost in the Correo Argentino system — which is why most locals use private couriers or MercadoLibre for important items. Always use tracked shipping for valuable items.",
  },
  {
    question: "Can I receive prescription medications by mail?",
    answer:
      "Importing medications by mail is restricted. Small quantities for personal use (1-3 month supply) with a valid prescription and doctor's letter sometimes pass customs, but there is no guarantee. ANMAT (Argentina's FDA equivalent) regulates pharmaceutical imports. Controlled substances will be seized. Your best option: bring a 3-6 month supply in your luggage with prescriptions, then find a local doctor to prescribe the Argentine equivalent. Most common medications are available locally at much lower prices than the US.",
  },
  {
    question: "What's the best way to receive documents from abroad?",
    answer:
      "DHL Express is the most reliable for important documents (passports, apostilled certificates, legal papers). Costs $40-80 from the US, arrives in 3-5 days. FedEx is a close second. Never send important original documents through regular international mail (Correo Argentino) — the risk of loss or extreme delay is too high. For digital documents, get them notarized and apostilled before sending physical copies. Keep digital backups of everything.",
  },
];

export default function MailPackagesPage() {
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
            Mail & Packages in Argentina
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            How to receive international packages, navigate Argentine customs,
            and find alternatives when Amazon does not deliver. The postal system
            works — you just need to know how it works differently.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClockIcon, label: "Int'l Post", value: "15-45 days" },
              { icon: GlobeIcon, label: "DHL/FedEx", value: "3-7 days" },
              { icon: DollarSignIcon, label: "Customs Duty", value: "50% over $50" },
              { icon: ShoppingCartIcon, label: "MercadoLibre", value: "1-3 days" },
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

      {/* Delivery Options */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            How to Get Things Delivered
          </h2>
          <div className="space-y-6">
            {deliveryOptions.map((option) => (
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
                        <Badge variant="outline" className="text-xs">
                          Reliability: {option.reliability}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
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

      {/* Puerta a Puerta Process */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            The Puerta a Puerta Process
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            When international packages arrive via Correo Argentino, you need to
            clear them through customs. Here is the step-by-step process.
          </p>
          <div className="space-y-4">
            {puertaAPuertaSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="border-t bg-amber-50/50 px-4 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-start gap-3">
            <AlertCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h3 className="mb-2 font-semibold">Pro Tips from Expats</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Check MercadoLibre first.</strong> Even if the price is
                  30-50% higher than Amazon, you avoid customs duties, shipping
                  fees, and weeks of waiting. The total cost is often comparable.
                </li>
                <li>
                  <strong>Stock up when you travel.</strong> Many expats buy
                  electronics, supplements, and specific clothing brands when
                  visiting the US or Europe, then bring them back in luggage.
                </li>
                <li>
                  <strong>Join expat buy/sell groups.</strong> Facebook groups
                  like &ldquo;Buy &amp; Sell Buenos Aires Expats&rdquo; often
                  have people selling items brought from abroad at reasonable
                  markups.
                </li>
                <li>
                  <strong>Use Grabr for small items.</strong> Travelers coming
                  from the US can bring specific items for a fee — often cheaper
                  than formal shipping for single items under 2kg.
                </li>
              </ul>
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
      <section className="border-t bg-muted/20 px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold">Setting Up Your New Life?</h2>
          <p className="mb-6 text-muted-foreground">
            Getting packages is one thing. These guides cover everything else you
            need to get settled.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/internet-phone">
                Internet & Phone <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/shipping">Shipping Belongings</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/first-30-days">First 30 Days</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
