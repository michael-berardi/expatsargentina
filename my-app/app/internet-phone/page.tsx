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
  WifiIcon,
  SmartphoneIcon,
  ZapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title:
    "Internet, Phone & Utilities in Argentina 2026 | Setup Guide for Expats",
  description:
    "How to get internet, a phone plan, and set up utilities in Argentina. ISPs, mobile carriers, SIM cards, electricity, gas, water — costs and what to expect.",
  keywords: [
    "internet Argentina",
    "phone plan Argentina",
    "SIM card Argentina",
    "utilities Argentina",
    "ISP Buenos Aires",
    "Fibertel Telecentro",
  ],
  openGraph: {
    title: "Internet, Phone & Utilities in Argentina — Expat Setup Guide 2026",
    description:
      "ISPs, mobile carriers, SIM cards, electricity, gas, water — costs, providers, and how to set everything up.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/internet-phone",
  },
};

const isps = [
  {
    name: "Fibertel (Telecom/Personal)",
    speeds: "50–500 Mbps",
    cost: "$15–$40/month",
    coverage: "National (best in CABA, GBA)",
    notes:
      "The most widely used ISP. Fiber optic in most of Buenos Aires. Merged with Telecom. DNI required for contract. Installation takes 1–3 weeks.",
    rating: "Reliable in CABA",
  },
  {
    name: "Telecentro",
    speeds: "100–1,000 Mbps",
    cost: "$12–$35/month",
    coverage: "CABA and GBA only",
    notes:
      "Often the fastest option in Buenos Aires. Competitive pricing, good fiber coverage. Limited to the greater Buenos Aires area. Can sometimes get same-week installation.",
    rating: "Best value in BA",
  },
  {
    name: "Movistar Fibra",
    speeds: "50–500 Mbps",
    cost: "$15–$35/month",
    coverage: "National",
    notes:
      "Telefónica's fiber offering. Good coverage nationally but customer service can be slow. Available in most major cities.",
    rating: "Best outside BA",
  },
  {
    name: "Claro",
    speeds: "50–300 Mbps",
    cost: "$12–$30/month",
    coverage: "National",
    notes:
      "América Móvil's offering. Third option in most markets. Competitive on price. Less fiber coverage than the big two.",
    rating: "Budget option",
  },
];

const carriers = [
  {
    name: "Personal (Telecom)",
    type: "Largest carrier",
    prepaid: "$3–$8/month",
    postpaid: "$10–$25/month",
    notes:
      "Best 4G/LTE coverage nationwide. Part of Telecom group. Prepaid SIM cards available at any kiosco. Postpaid requires DNI.",
  },
  {
    name: "Claro",
    type: "Second largest",
    prepaid: "$3–$7/month",
    postpaid: "$8–$20/month",
    notes:
      "Good urban coverage, competitive data packages. eSIM available for some devices. América Móvil group.",
  },
  {
    name: "Movistar",
    type: "Third carrier",
    prepaid: "$3–$7/month",
    postpaid: "$8–$22/month",
    notes:
      "Telefónica group. Decent coverage in cities, weaker in rural areas. eSIM available.",
  },
];

const faqs = [
  {
    question: "Can I get a SIM card without a DNI?",
    answer:
      "Yes, for prepaid. Buy a prepaid SIM at any kiosco or phone store for about $2–5. You will need to register it with your passport number. Prepaid plans require regular top-ups (recargas) via MercadoPago, the carrier's app, or at kioscos. Postpaid contracts require a DNI and proof of address.",
  },
  {
    question: "How fast is internet in Buenos Aires?",
    answer:
      "In central Buenos Aires (Palermo, Recoleta, Belgrano, Caballito), fiber optic is standard and you can reliably get 100–500 Mbps. In the GBA suburbs, speeds are more variable (20–100 Mbps). In provincial cities like Córdoba and Mendoza, 50–200 Mbps is common. Rural areas may be limited to 5–20 Mbps or satellite.",
  },
  {
    question: "Do I need a DNI to get internet service?",
    answer:
      "Yes, most ISPs require a DNI for the contract. If you do not have one yet, options include: having your landlord put the service in their name (common for temporary rentals), using mobile hotspot temporarily, or working from cafes/coworking spaces while your DNI processes. Some temporary rental apartments come with internet included.",
  },
  {
    question: "What about power outages?",
    answer:
      "Buenos Aires experiences power outages (cortes de luz), especially during summer heat waves (December–February) when air conditioning demand spikes. Outages last anywhere from 30 minutes to several hours. The grid in CABA is managed by EDESUR (south) and EDENOR (north). Provincial cities have fewer outages. A UPS battery backup for your router/computer is a good investment ($30–$60).",
  },
  {
    question: "How much do utilities cost?",
    answer:
      "As of 2026, with ongoing subsidy reductions: electricity $20–$60/month (depends on usage and subsidy tier), gas $10–$30/month (higher in winter), water $5–$15/month. Utility prices have been rising as the government removes subsidies, but they remain cheap by international standards. Bills are in pesos and can be paid via MercadoPago, bank transfer, or at Rapipago/Pago Fácil kiosks.",
  },
  {
    question: "Is there 5G in Argentina?",
    answer:
      "5G rollout is underway in Buenos Aires and major cities as of 2026, but coverage remains limited. 4G/LTE is the standard nationwide and is reliable in urban areas. For most expats, 4G speeds (20–80 Mbps on mobile) are more than adequate. Wi-Fi will be your primary connection at home.",
  },
];

export default function InternetPhonePage() {
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
            Internet, Phone & Utilities
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Getting connected in Argentina — ISPs, mobile carriers, SIM cards,
            electricity, gas, and water. What it costs, how long it takes, and
            the workarounds for common frustrations.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: WifiIcon,
                label: "Fiber in BA",
                value: "100–500 Mbps",
              },
              {
                icon: SmartphoneIcon,
                label: "Prepaid SIM",
                value: "$3–$8/month",
              },
              {
                icon: ZapIcon,
                label: "Electricity",
                value: "$20–$60/month",
              },
              {
                icon: SmartphoneIcon,
                label: "SIM Without DNI",
                value: "Yes (prepaid)",
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

      {/* Internet Providers */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Internet Service Providers
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {isps.map((isp) => (
              <Card key={isp.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{isp.name}</CardTitle>
                    <Badge variant="outline">{isp.rating}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-muted-foreground">Speeds:</span>{" "}
                      <span className="font-medium">{isp.speeds}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Cost:</span>{" "}
                      <span className="font-medium">{isp.cost}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Coverage:
                    </span>{" "}
                    {isp.coverage}
                  </p>
                  <p className="text-muted-foreground">{isp.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Carriers */}
      <section className="border-t bg-muted/20 px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Mobile Phone Carriers
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Three carriers dominate Argentina. All sell prepaid SIMs at kioscos
            — no appointment or store visit needed.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {carriers.map((carrier) => (
              <Card key={carrier.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{carrier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {carrier.type}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Prepaid:</span>{" "}
                    <span className="font-medium">{carrier.prepaid}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Postpaid:</span>{" "}
                    <span className="font-medium">{carrier.postpaid}</span>
                  </div>
                  <p className="text-muted-foreground">{carrier.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Getting a SIM card */}
          <div className="mx-auto mt-10 max-w-3xl rounded-lg border bg-white p-6">
            <h3 className="mb-4 text-xl font-bold">
              Getting a SIM Card: Step by Step
            </h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  1
                </span>
                <span>
                  Walk into any kiosco or phone accessories shop and ask for a
                  chip (SIM card) for Personal, Claro, or Movistar. Cost:
                  $2–$5.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  2
                </span>
                <span>
                  Insert the SIM and register it. The carrier will send an SMS
                  with instructions. You will need to enter your passport number
                  or DNI.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  3
                </span>
                <span>
                  Top up (recarga) via MercadoPago, the carrier's app, or at a
                  kiosco/Rapipago. Buy a data package ($3–$8/month for 10–30 GB).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  4
                </span>
                <span>
                  For postpaid: visit a carrier store with your DNI and proof of
                  address. Postpaid gives better rates and no top-up hassle.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Utilities */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Utilities</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ZapIcon className="h-5 w-5 text-amber-500" />
                  <CardTitle>Electricity</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Providers:</strong> EDENOR (north CABA/GBA) and EDESUR
                  (south CABA/GBA). In provinces, local distributors (EPEC in
                  Córdoba, EDEMSA in Mendoza, etc.).
                </p>
                <p>
                  <strong>Cost:</strong> $20–$60/month for a typical apartment.
                  Prices have risen sharply since 2024 as the government removes
                  energy subsidies. Summer AC usage can triple your bill.
                </p>
                <p>
                  <strong>Voltage:</strong> 220V, 50Hz. Argentina uses Type I
                  plugs (three angled prongs). Bring a universal adapter — US and
                  European plugs will not fit. Most electronics with switching
                  power supplies (laptops, phone chargers) work fine on 220V.
                </p>
                <p>
                  <strong>Outages:</strong> Summer blackouts happen in Buenos
                  Aires during heat waves. A small UPS ($30–$60) protects your
                  equipment and keeps your router running during brief cuts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ZapIcon className="h-5 w-5 text-blue-500" />
                  <CardTitle>Gas</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Provider:</strong> Metrogas (CABA/GBA). Natural gas is
                  piped to most apartments for cooking, heating, and hot water.
                </p>
                <p>
                  <strong>Cost:</strong> $10–$30/month. Higher in winter
                  (June–August) if you use gas heating. Subsidies are being
                  reduced but gas remains cheap by international standards.
                </p>
                <p>
                  Some provincial areas and older buildings use garrafa (bottled
                  gas) instead of piped natural gas. A 10kg garrafa costs $5–$10
                  and lasts 2–4 weeks for cooking only.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ZapIcon className="h-5 w-5 text-cyan-500" />
                  <CardTitle>Water</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Provider:</strong> AySA (Agua y Saneamientos
                  Argentinos) in CABA/GBA. Provincial companies elsewhere.
                </p>
                <p>
                  <strong>Cost:</strong> $5–$15/month. Often included in expensas
                  (building maintenance fees) for apartments.
                </p>
                <p>
                  <strong>Tap water:</strong> Safe to drink in Buenos Aires and
                  most major cities. Some expats prefer filtered or bottled water
                  for taste. In provincial areas, check locally — most cities
                  have treated water but quality varies.
                </p>
              </CardContent>
            </Card>
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
          <h2 className="mb-3 text-2xl font-bold">Setting Up Your New Life?</h2>
          <p className="mb-6 text-muted-foreground">
            Internet and phone are just the start. Check our banking guide for
            getting MercadoPago set up, and the housing guide for apartment
            hunting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/banking">
                Banking Guide <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/housing">Housing Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/remote-work">Remote Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
