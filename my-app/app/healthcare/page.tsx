import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HeartIcon, 
  ShieldIcon, 
  DollarSignIcon, 
  BuildingIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
  PhoneIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Healthcare in Argentina 2026 - Mandatory Insurance, New Rules",
  description: "Updated 2026 healthcare guide: mandatory travel insurance for entry, public hospitals now charge foreigners. Prepaga options, costs, and requirements.",
  keywords: ["healthcare Argentina 2026", "mandatory travel insurance Argentina", "prepaga health insurance", "Argentina public hospital charges foreigners"],
};

const insuranceProviders = [
  { name: "OSDE", type: "Premium", monthlyCost: "$350-800", notes: "Widest network, best hospitals, English-speaking" },
  { name: "Swiss Medical", type: "Premium", monthlyCost: "$300-700", notes: "Excellent service, English-speaking staff" },
  { name: "Galeno", type: "Mid-range", monthlyCost: "$180-400", notes: "Good coverage, reasonable prices" },
  { name: "Medicus", type: "Mid-range", monthlyCost: "$140-320", notes: "Solid coverage, widely accepted" },
  { name: "Sancor Salud", type: "Budget", monthlyCost: "$100-250", notes: "Basic coverage, good for young/healthy" },
];

const topHospitals = [
  { name: "Hospital Alemán", location: "Recoleta", type: "Private", notes: "Top-rated, English-speaking staff" },
  { name: "Hospital Italiano", location: "Almagro", type: "Private", notes: "Excellent reputation, research hospital" },
  { name: "Hospital Británico", location: "Barracas", type: "Private", notes: "British heritage, English widely spoken" },
  { name: "Hospital Universitario", location: " various", type: "Public", notes: "Good public option, teaching hospital" },
];

const faqs = [
  {
    question: "Is health insurance mandatory for Argentina?",
    answer: "YES - As of July 2025, all tourists and temporary residents must show proof of travel health insurance to enter Argentina. This is now checked at immigration. For long-term residents, private prepaga insurance is strongly recommended as public hospitals now charge non-residents.",
  },
  {
    question: "Do public hospitals charge foreigners now?",
    answer: "Yes - This changed in 2025. Public hospitals (hospitales públicos) now charge foreigners for non-emergency care. Emergency care is still provided, but you'll receive a bill. The 'free healthcare for everyone' era has ended. This makes private prepaga insurance even more essential for expats.",
  },
  {
    question: "How much does health insurance cost?",
    answer: "Basic prepaga plans now start around $100-150 USD per month for young, healthy individuals (up from $60-80 in 2024). Comprehensive plans for older adults or families range from $350-800 USD monthly. Prices have increased with inflation and demand from expats.",
  },
  {
    question: "Can I use my home country's insurance?",
    answer: "Some international health insurance plans cover Argentina and satisfy the entry requirement. However, many expats find local prepaga more convenient for day-to-day care. If using international insurance, ensure it explicitly covers Argentina and bring proof of coverage to show immigration.",
  },
  {
    question: "Are doctors English-speaking?",
    answer: "In major private hospitals and clinics, especially in Buenos Aires, many doctors speak English. Hospital Alemán, Hospital Italiano, and Hospital Británico are known for having English-speaking staff. For other providers, request an English-speaking doctor when booking.",
  },
  {
    question: "What's the quality of healthcare?",
    answer: "Private healthcare in Buenos Aires remains excellent and comparable to Western standards. Top private hospitals have modern equipment and highly trained specialists. Public healthcare quality varies and now comes with costs for foreigners, making private insurance essential.",
  },
];

export default function HealthcarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Healthcare</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <HeartIcon size="sm" className="mr-1" />
              Healthcare Guide 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              New 2026 rules: mandatory travel insurance for entry, public hospitals 
              now charge foreigners. Complete guide to prepaga insurance and medical care.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Healthcare Alert */}
      <section className="py-8 bg-red-50 dark:bg-red-950/20 border-y border-red-200 dark:border-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircleIcon size="lg" className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                  2026 Critical Update: New Healthcare Rules
                </h2>
                <ul className="text-red-800 dark:text-red-200 space-y-2">
                  <li><strong>Mandatory Travel Insurance:</strong> Effective July 2025, all visitors must show proof of health insurance at immigration.</li>
                  <li><strong>Public Hospitals Charge Foreigners:</strong> The "free healthcare for all" era has ended. Non-residents now receive bills for non-emergency care.</li>
                  <li><strong>Higher Insurance Costs:</strong> Prepaga prices have increased 50-75% since 2023 due to inflation and expat demand.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Healthcare System Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Argentina has a mixed healthcare system with both public and private options. 
                As an expat, you'll primarily use the private system, which offers excellent 
                quality care at a fraction of what you'd pay in the US or Europe.
              </p>
              <p className="mb-4">
                The private system is accessed through "prepaga" health insurance plans. 
                These plans give you access to private hospitals, clinics, and specialists 
                with minimal wait times and modern facilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BuildingIcon size="md" className="text-primary" />
                    Private Healthcare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>High quality, modern facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Minimal wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>English-speaking doctors available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Affordable compared to US/Europe</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon size="md" className="text-primary" />
                    Public Healthcare (2026 Changes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Now charges foreigners</strong> (2025 policy change)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Emergencies still treated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Longer wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Variable quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Major Insurance Providers</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Provider</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Monthly Cost</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {insuranceProviders.map((provider) => (
                        <tr key={provider.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{provider.name}</td>
                          <td className="py-3 px-2">
                            <Badge variant={provider.type === "Premium" ? "default" : provider.type === "Mid-range" ? "secondary" : "outline"}>
                              {provider.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{provider.monthlyCost}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{provider.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Prices are approximate for a single person in their 30s-40s. Actual costs vary by age, coverage level, and pre-existing conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Recommended Hospitals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topHospitals.map((hospital) => (
                <Card key={hospital.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{hospital.name}</CardTitle>
                    <CardDescription>{hospital.location} • {hospital.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{hospital.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Typical Medical Costs</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { service: "General doctor consultation (private)", cost: "$30-60" },
                    { service: "Specialist consultation", cost: "$50-100" },
                    { service: "Dental cleaning", cost: "$40-80" },
                    { service: "Eye exam", cost: "$30-50" },
                    { service: "Blood work panel", cost: "$50-150" },
                    { service: "X-ray", cost: "$40-80" },
                    { service: "Emergency room visit", cost: "$100-300" },
                  ].map((item) => (
                    <div key={item.service} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-muted-foreground">{item.service}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Costs are approximate in USD. With prepaga insurance, you'll typically pay a small copay or nothing for covered services.
            </p>
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

      {/* Emergency Info */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                  <PhoneIcon size="md" />
                  Emergency Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">107</div>
                    <div className="text-sm text-muted-foreground">Ambulance (SAME)</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">911</div>
                    <div className="text-sm text-muted-foreground">General Emergency</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">101</div>
                    <div className="text-sm text-muted-foreground">Police</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing Insurance?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our partners can help you compare plans and find the right coverage for your needs and budget.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/resources/directory">
                Find Insurance Brokers
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
