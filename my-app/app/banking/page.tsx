import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DollarSignIcon,
  ArrowRightLeftIcon,
  CreditCardIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WalletIcon
} from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Banking & Money in Argentina - Expat Guide 2026",
  description: "Complete guide to banking in Argentina for expats. Opening accounts, transferring money, the blue dollar, and managing finances.",
  keywords: ["banking Argentina expats", "blue dollar Argentina", "transfer money Argentina", "Argentina bank account"],
  alternates: { canonical: "https://expatsargentina.com/banking" },
};

const banks = [
  { name: "Banco Galicia", type: "Major Private", notes: "Good online banking, expat-friendly" },
  { name: "Banco Santander Río", type: "Major Private", notes: "International connections" },
  { name: "Banco Macro", type: "Major Private", notes: "Wide branch network" },
  { name: "BBVA Argentina", type: "Major Private", notes: "Strong digital platform" },
  { name: "Banco Nación", type: "Public", notes: "Government bank, sometimes required for certain procedures" },
];

const moneyTransferMethods = [
  {
    method: "Western Union",
    pros: ["Best exchange rates", "Widely available", "No recipient account needed"],
    cons: ["Fees can be high", "Pickup location required"],
    bestFor: "Regular transfers, accessing blue rate",
  },
  {
    method: "Crypto (USDT/Bitcoin)",
    pros: ["Excellent rates", "Fast", "Low fees"],
    cons: ["Requires technical knowledge", "Regulatory uncertainty"],
    bestFor: "Tech-savvy users, large amounts",
  },
  {
    method: "Wise (formerly TransferWise)",
    pros: ["Low fees", "Transparent", "Fast"],
    cons: ["Official rate only", "Recipient needs account"],
    bestFor: "Small transfers, convenience",
  },
  {
    method: "Cash Exchange (Cuevas)",
    pros: ["Blue rate", "Immediate cash", "No paperwork"],
    cons: ["Safety concerns", "Need trusted exchange"],
    bestFor: "Bringing initial cash, small amounts",
  },
];

const faqs = [
  {
    question: "Can foreigners open bank accounts in Argentina?",
    answer: "Yes, but it requires a DNI (national identity card), which takes 6+ months to obtain. Without a DNI, you can use digital wallets like MercadoPago (works with just a passport), crypto exchanges like Lemon Cash or Buenbit, and Western Union transfers. Once you have a DNI and CDI (tax ID), most major banks will open an account with proof of income.",
  },
  {
    question: "What's the difference between the official and blue dollar rate?",
    answer: "Argentina has multiple exchange rates. The official rate is set by the government and is what you get at banks, ATMs, and when using foreign credit cards. The blue dollar (dólar blue) is the unofficial market rate, typically 30-50% higher. Always exchange at the blue rate through Western Union, reputable exchange houses (cuevas), or crypto to get the most value from your money.",
  },
  {
    question: "Which bank is best for expats?",
    answer: "Banco Galicia and BBVA Argentina are popular choices among expats due to their modern digital platforms and relatively expat-friendly processes. Banco Santander Río is good if you have an international Santander account. However, until you get a DNI, MercadoPago is the most practical option for everyday payments and transfers.",
  },
  {
    question: "Can I use my foreign credit/debit cards in Argentina?",
    answer: "You can, but it's strongly discouraged. Foreign cards are processed at the official exchange rate, which means you lose 30-50% of your purchasing power compared to the blue dollar rate. Only use foreign cards for emergencies. Instead, bring USD cash and exchange it at the blue rate, or use Western Union to send yourself money.",
  },
  {
    question: "How do I transfer money to Argentina?",
    answer: "The most popular method is Western Union, which offers near-blue-dollar rates and requires only a passport to collect pesos. Crypto (USDT/Bitcoin) through local exchanges like Lemon Cash or Buenbit often gives the best rates. Wise (TransferWise) is convenient but uses the official rate. Avoid traditional bank wire transfers as they also use the official rate.",
  },
  {
    question: "Is it safe to use ATMs in Argentina?",
    answer: "ATMs are physically safe in well-lit, busy areas, but using them is financially disadvantageous because you receive the official exchange rate and pay foreign transaction fees. If you must use an ATM, use machines inside banks or shopping malls, cover your PIN, and avoid counting money at the machine. For everyday cash needs, Western Union is a much better option.",
  },
];

const bankingTips = [
  "Bring USD cash for initial expenses - you'll get much better rates exchanging cash",
  "Open a local bank account for paying utilities and rent",
  "Get a local debit card for everyday purchases",
  "Credit cards are less widely accepted than in US/Europe",
  "Always carry some cash - many places don't accept cards",
  "Use Western Union for regular transfers to access better rates",
];

export default function BankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://expatsargentina.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Banking",
                "item": "https://expatsargentina.com/banking"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })
        }}
      />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Banking</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <DollarSignIcon size="sm" className="mr-1" />
              Money Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Banking & Money in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate Argentina's unique financial landscape. Understanding the blue dollar, 
              transferring money, and managing your finances as an expat.
            </p>
          </div>
        </div>
      </section>

      {/* The Blue Dollar Explained */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding the Blue Dollar</h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Argentina has multiple exchange rates, which can be confusing for newcomers. 
                  The "blue dollar" (dólar blue) is the unofficial exchange rate for USD cash, 
                  typically 30-50% higher than the official rate.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">Official Rate</div>
                    <p className="text-sm text-muted-foreground">
                      The government-set rate. You'll get this at banks and ATMs. 
                      Not recommended for exchanging money.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                    <div className="font-semibold mb-2 text-green-700 dark:text-green-300">Blue Rate</div>
                    <p className="text-sm text-muted-foreground">
                      The unofficial market rate. Access through Western Union, 
                      exchange houses (cuevas), or crypto. Much better for your USD.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircleIcon size="md" className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Important:</strong> Always check current rates before exchanging. 
                    The gap between official and blue rates changes constantly. 
                    Use sites like Blue Dollar.net or ask in expat groups for current rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Transfer Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Transferring Money to Argentina</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {moneyTransferMethods.map((method) => (
                <Card key={method.method} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{method.method}</CardTitle>
                    <CardDescription>Best for: {method.bestFor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Pros:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {method.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Cons:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {method.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <AlertCircleIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opening a Bank Account */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Opening a Bank Account</h2>
            <p className="text-muted-foreground mb-6">
              While not strictly necessary for all expats, a local bank account makes paying 
              rent, utilities, and receiving transfers much easier.
            </p>

            <h3 className="text-xl font-semibold mb-4">Major Banks</h3>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Bank</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {banks.map((bank) => (
                        <tr key={bank.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{bank.name}</td>
                          <td className="py-3 px-2">{bank.type}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{bank.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {[
                    "Valid passport",
                    "Argentine DNI (if you have residency) or proof of address",
                    "Proof of income or employment",
                    "CDI (Clave de Identificación) - tax ID number",
                    "Sometimes a local reference or guarantee",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon size="md" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banking Without DNI */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Banking Without DNI (2026 Workarounds)</h2>
            <p className="text-center text-muted-foreground mb-8">
              DNI processing is taking 6+ months. Here&apos;s how to function financially without it.
            </p>
            
            <div className="space-y-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-green-600">★</span>
                    MercadoPago (Recommended)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    MercadoPago is Argentina&apos;s largest digital wallet and works without DNI. You can:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Send/receive money locally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Pay at most stores and restaurants (QR code)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Pay utilities and services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Order a prepaid debit card (with passport)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    Download the app and verify with your passport. Top up via Western Union transfers 
                    or cash at Rapipago/PagoFacil locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cryptocurrency (USDT/BTC)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Crypto is widely used in Argentina to bypass banking restrictions. Local exchanges like 
                    Buenbit, Lemon Cash, and Ripio allow you to:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Buy USDT (stablecoin pegged to USD) with cash or transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Pay bills and services via crypto-to-peso conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Get a prepaid card linked to your crypto balance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Western Union + Cash</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Many expats simply rely on Western Union transfers to themselves and operate 
                    primarily in cash. This works surprisingly well in Argentina&apos;s cash-based economy. 
                    Keep cash safe in a money belt or secure location at home.
                  </p>
                </CardContent>
              </Card>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Note:</strong> Traditional banks require DNI. Until you get yours (6+ months), 
                  these alternatives are essential for daily life in Argentina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Essential Money Tips</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {bankingTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <WalletIcon size="md" className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Get our complete moving checklist and cost calculator to plan your finances 
              before arriving in Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/resources/checklist">
                  Download Checklist
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  Calculate Costs
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
