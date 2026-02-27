import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HeartIcon,
  FileTextIcon,
  ShieldIcon,
  PlaneIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ClockIcon,
  ArrowRightIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Bringing Pets to Argentina 2026 - Complete Import Guide",
  description: "Complete guide to bringing cats and dogs to Argentina. Health certificates, vaccinations, quarantine rules (spoiler: there isn't one), and airline requirements.",
  keywords: ["bring pet to Argentina", "dog import Argentina", "cat import Argentina", "pet quarantine Argentina", "pet travel requirements Argentina"],
};

const requirements = [
  {
    icon: ShieldIcon,
    title: "Rabies Vaccination",
    description: "Required for dogs and cats over 3 months old. Must be administered at least 30 days before travel but within 1 year.",
    critical: true,
  },
  {
    icon: FileTextIcon,
    title: "Health Certificate (USDA/Official)",
    description: "Issued within 10 days of travel by a licensed veterinarian and endorsed by the official veterinary service of your country (USDA in the US, CFIA in Canada, etc.).",
    critical: true,
  },
  {
    icon: FileTextIcon,
    title: "SENASA Import Permit",
    description: "Required for all pets entering Argentina. Your vet or a pet shipper can help obtain this from Argentina's agricultural authority.",
    critical: true,
  },
  {
    icon: ClockIcon,
    title: "Timing is Critical",
    description: "Health certificate valid for only 10 days. Plan carefully so paperwork doesn't expire during travel.",
    critical: true,
  },
];

const airlineTips = [
  {
    title: "Book Direct Flights",
    description: "Minimize stress and reduce chances of delays or lost paperwork. Connections in third countries complicate things.",
  },
  {
    title: "Check Airline Pet Policies",
    description: "Each airline has different size/weight restrictions for cabin vs. cargo. Some won't accept snub-nosed breeds in cargo.",
  },
  {
    title: "Cabin vs. Cargo",
    description: "Small pets (usually under 8-10kg including carrier) can travel in cabin. Larger pets go in climate-controlled cargo hold.",
  },
  {
    title: "Carrier Requirements",
    description: "Must be airline-approved, ventilated, and allow pet to stand, turn, and lie down comfortably. Get your pet used to it weeks before.",
  },
];

export default function PetImportationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Pet Importation</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <HeartIcon size="sm" className="mr-1" />
              Pet Travel Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bringing Your Pet to Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The good news: <strong>there is no quarantine</strong> for cats and dogs from most countries. 
              The paperwork is manageable. Here&apos;s exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* No Quarantine Banner */}
      <section className="py-8 bg-green-50 dark:bg-green-950/20 border-y border-green-200 dark:border-green-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircleIcon size="lg" className="text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
              No Quarantine Required
            </h2>
            <p className="text-green-800 dark:text-green-200">
              Unlike Australia, Japan, or the UK, Argentina does NOT require quarantine for cats and dogs 
              from most countries (including US, Canada, UK, EU). Your pet clears customs the same day 
              with proper paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Required Documentation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req) => (
                <Card key={req.title} className={req.critical ? "border-red-200" : ""}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <req.icon size="md" className={req.critical ? "text-red-500" : "text-primary"} />
                      {req.title}
                      {req.critical && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Check Breed Restrictions",
                  description: "Argentina has no breed bans for import, but some airlines restrict snub-nosed (brachycephalic) breeds like Bulldogs, Pugs, and Persian cats in cargo due to breathing risks. Always confirm with your airline.",
                },
                {
                  step: 2,
                  title: "Get Rabies Vaccination (if not current)",
                  description: "Must be given at least 30 days before travel but within 1 year. If this is your pet's first rabies vaccine, the 30-day waiting period applies. Booster vaccines don't require the waiting period.",
                },
                {
                  step: 3,
                  title: "Apply for SENASA Import Permit",
                  description: "Your veterinarian or a pet shipping company can help with this. SENASA is Argentina's agricultural authority. The permit typically takes 1-2 weeks to process.",
                },
                {
                  step: 4,
                  title: "Veterinary Health Certificate (10 days before)",
                  description: "Visit your vet within 10 days of departure. They'll examine your pet and complete the international health certificate. Then get it endorsed by your country's official veterinary authority.",
                },
                {
                  step: 5,
                  title: "Travel Day",
                  description: "Arrive at the airport early. Check in your pet, ensure they have water (some airlines require attaching a bowl to the crate). Keep copies of all paperwork with you and attached to the crate.",
                },
                {
                  step: 6,
                  title: "Customs Clearance in Argentina",
                  description: "Present your paperwork to SENASA officials at Ezeiza airport. They'll verify documents, may do a brief visual inspection, and clear your pet—usually within 30-60 minutes. Then you're done!",
                },
              ].map((item) => (
                <Card key={item.step} className="flex gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Airline Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Airline Travel Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {airlineTips.map((tip) => (
                <Card key={tip.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{tip.description}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Typical Costs (USD)</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[
                    { item: "Veterinary health certificate", cost: "$50-150" },
                    { item: "USDA/official endorsement", cost: "$50-150" },
                    { item: "SENASA import permit", cost: "$50-100" },
                    { item: "Airline pet fee (cabin)", cost: "$100-200" },
                    { item: "Airline pet fee (cargo)", cost: "$200-500+" },
                    { item: "Travel crate (if needed)", cost: "$50-200" },
                    { item: "Pet shipper (optional)", cost: "$500-1,500" },
                  ].map((cost) => (
                    <div key={cost.item} className="flex justify-between py-2 border-b last:border-0">
                      <span>{cost.item}</span>
                      <span className="font-semibold">{cost.cost}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              DIY approach: $300-800 total. Using a pet shipper: $1,000-2,500+ total.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is there really no quarantine?",
                  a: "Correct—Argentina does not require quarantine for cats and dogs from most countries with proper paperwork. Your pet clears customs the same day you arrive.",
                },
                {
                  q: "What about other animals (birds, reptiles, etc.)?",
                  a: "Rules vary. Birds have strict import restrictions. Contact SENASA directly for requirements on non-cat/dog pets.",
                },
                {
                  q: "Can I bring pet food and treats?",
                  a: "Commercial pet food in sealed packaging is generally allowed in reasonable quantities for the journey. Homemade or raw food may be restricted.",
                },
                {
                  q: "Do I need a microchip?",
                  a: "Argentina does not require microchips for entry, but it's highly recommended for identification. If your pet is chipped, bring the documentation.",
                },
                {
                  q: "Can my pet fly in the cabin with me?",
                  a: "If your pet + carrier is under the airline's weight limit (typically 8-10kg / 17-22 lbs), yes. Larger pets must travel in climate-controlled cargo.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-base flex items-start gap-2">
                      <AlertCircleIcon size="sm" className="text-primary flex-shrink-0 mt-1" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Bringing Your Pet Is Doable</h2>
            <p className="text-primary-foreground/80 mb-8">
              The paperwork looks intimidating, but thousands of expats bring pets to Argentina every year. 
              No quarantine, reasonable costs, and your furry friend can join your Argentine adventure.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/cost-of-living">
                Calculate Your Moving Budget
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
