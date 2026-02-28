import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  HeartIcon,
  FileTextIcon,
  ShieldIcon,
  PlaneIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ClockIcon,
  ArrowRightIcon,
  MapPinIcon,
  HomeIcon,
  DollarSignIcon,
  GlobeIcon,
  StarIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Bringing Pets to Argentina 2026 - Complete Import Guide",
  description: "Complete guide to bringing cats and dogs to Argentina. Health certificates, vaccinations, quarantine rules (spoiler: there isn't one), and airline requirements.",
  keywords: ["bring pet to Argentina", "dog import Argentina", "cat import Argentina", "pet quarantine Argentina", "pet travel requirements Argentina"],
  alternates: {
    canonical: "https://expatsargentina.com/pet-importation",
  },
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

const airlinePolicies = [
  {
    airline: "Aerolíneas Argentinas",
    cabin: "Up to 10 kg (pet + carrier). Soft or hard carrier, max 45 x 35 x 20 cm.",
    cargo: "Up to 45 kg (pet + crate). IATA-approved rigid crate required.",
    cabinFee: "$75-150",
    cargoFee: "$150-350",
    notes: "Snub-nosed breeds accepted in cabin only. Up to 2 pets per passenger in cabin (same species). Direct flights from Miami and New York to Buenos Aires.",
  },
  {
    airline: "LATAM Airlines",
    cabin: "Up to 7 kg (pet + carrier). Max 36 x 33 x 16 cm soft carrier.",
    cargo: "Up to 45 kg (pet + crate). IATA-approved crate.",
    cabinFee: "$110-200",
    cargoFee: "$200-500",
    notes: "Brachycephalic breeds not accepted in cargo year-round. Service animals fly free. Online booking for cabin pets available on some routes.",
  },
  {
    airline: "American Airlines",
    cabin: "Up to 9 kg (pet + carrier). Max 48.3 x 33 x 22.9 cm carrier.",
    cargo: "Handled through American Airlines Cargo. No weight limit but crate size restrictions apply.",
    cabinFee: "$150 each way",
    cargoFee: "$200-600+",
    notes: "Only cats and dogs in cabin. Brachycephalic breeds banned from cargo May-September (heat embargo). 1 pet carrier per passenger. Direct flights from Miami and Dallas.",
  },
  {
    airline: "United Airlines",
    cabin: "Up to 11.3 kg (pet + carrier). Max 44 x 30 x 19 cm soft carrier.",
    cargo: "Via PetSafe program (currently suspended on some routes—verify before booking).",
    cabinFee: "$150 each way",
    cargoFee: "$350-700",
    notes: "PetSafe program has seasonal and route restrictions. Snub-nosed breeds not accepted in cargo. Direct flights from Houston and Newark to Buenos Aires.",
  },
  {
    airline: "Delta Air Lines",
    cabin: "Up to 9 kg (pet + carrier). Soft-sided carrier, max 46 x 28 x 24 cm.",
    cargo: "Via Delta Cargo. Up to 45 kg (pet + crate).",
    cabinFee: "$150 each way",
    cargoFee: "$200-500",
    notes: "Delta Cargo accepts most breeds year-round in climate-controlled holds. Snub-nosed breeds restricted seasonally. Direct flights from Atlanta to Buenos Aires.",
  },
  {
    airline: "Copa Airlines",
    cabin: "Up to 9 kg (pet + carrier). Max 40 x 30 x 20 cm soft carrier.",
    cargo: "Up to 32 kg (pet + crate). IATA-approved rigid crate.",
    cabinFee: "$100-150",
    cargoFee: "$150-350",
    notes: "Connection through Panama City (PTY) required from most US cities. Brachycephalic breeds accepted only in cabin. Copa has a good track record with pet transport through their hub.",
  },
];

const faqs = [
  {
    question: "Is there really a quarantine for pets entering Argentina?",
    answer: "No. Argentina does not require quarantine for cats and dogs entering from most countries, including the US, Canada, UK, and EU nations. As long as your paperwork is complete and valid, your pet clears customs at the airport the same day you arrive—usually within 30-60 minutes.",
  },
  {
    question: "Are any dog breeds restricted or banned in Argentina?",
    answer: "Argentina has no federal breed ban for imported dogs. However, some provinces and municipalities have local regulations around breeds like Pit Bulls, Rottweilers, and Dogo Argentinos that may require muzzling in public or proof of liability insurance. Buenos Aires city has no breed ban. Always check the local rules for your specific destination within Argentina.",
  },
  {
    question: "How much does it cost in total to bring a pet to Argentina?",
    answer: "The DIY route typically costs $300-800 USD total, including vet health certificate ($50-150), USDA endorsement ($50-150), SENASA permit ($50-100), and airline pet fee ($100-500 depending on cabin vs. cargo). If you use a professional pet shipping company, expect $1,000-2,500+ including all paperwork, transport, and customs handling.",
  },
  {
    question: "Does my pet need insurance in Argentina?",
    answer: "Pet insurance is not required for entry, but it's highly recommended. Vet care in Argentina is affordable compared to the US, but emergencies can still be expensive. Companies like FetchPet (international plans) work in Argentina, and local options exist once you arrive. A basic plan covering emergencies runs about $15-30 USD/month.",
  },
  {
    question: "Does my pet need a microchip to enter Argentina?",
    answer: "Argentina does not legally require a microchip for pet entry. However, having an ISO 15-digit microchip (ISO 11784/11785 standard) is strongly recommended. Many airlines require it, and it's essential for identification if your pet gets lost. If you plan to eventually return to the US or travel to the EU, a microchip will be required, so it's best to do it before leaving.",
  },
  {
    question: "Can I bring multiple pets to Argentina at the same time?",
    answer: "Yes. There is no limit on the number of pets you can import for personal use. However, each pet needs its own complete set of documentation (health certificate, SENASA permit, rabies vaccination proof). Airlines typically allow 1-2 pets per passenger in the cabin—for more, you'll need to use cargo or book additional passenger seats on some carriers.",
  },
  {
    question: "Can I bring exotic pets (birds, reptiles, ferrets) to Argentina?",
    answer: "Rules for exotic pets are significantly stricter than for cats and dogs. Birds face very strict import controls and may require CITES permits and lengthy quarantine. Reptiles and amphibians require special permits from Argentina's environmental authority (MAyDS) in addition to SENASA. Ferrets are treated similarly to cats/dogs but with additional health testing. Contact SENASA directly for specific requirements—regulations change frequently.",
  },
  {
    question: "Are there different rules for bringing pets from specific countries?",
    answer: "The core requirements (health certificate, rabies vaccination, SENASA permit) apply universally. However, pets from countries where rabies is endemic may face additional blood titer testing requirements. Pets from the US, Canada, EU, UK, Australia, and Japan follow the standard process. Pets from countries in Africa, Asia, and parts of South America may need a rabies antibody titer test done at least 3 months before travel.",
  },
];

export default function PetImportationPage() {
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
                "name": "Pet Importation",
                "item": "https://expatsargentina.com/pet-importation"
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
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Pet Importation</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-5">
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
        <div className="container mx-auto px-5">
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
        <div className="container mx-auto px-5">
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
        <div className="container mx-auto px-5">
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
        <div className="container mx-auto px-5">
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
        <div className="container mx-auto px-5">
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

      {/* Airline-Specific Policies */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="secondary">
                <PlaneIcon size="sm" className="mr-1" />
                Airline Comparison
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Airline Pet Policies for Argentina Flights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each airline has different rules, fees, and size limits. Here&apos;s a detailed breakdown
                of the major carriers flying to Buenos Aires so you can pick the best option for your pet.
              </p>
            </div>

            {/* Mobile-friendly cards + Desktop table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold">Airline</th>
                    <th className="text-left p-3 font-semibold">Cabin Limit</th>
                    <th className="text-left p-3 font-semibold">Cabin Fee</th>
                    <th className="text-left p-3 font-semibold">Cargo Fee</th>
                    <th className="text-left p-3 font-semibold">Key Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {airlinePolicies.map((policy) => (
                    <tr key={policy.airline} className="border-b">
                      <td className="p-3 font-medium">{policy.airline}</td>
                      <td className="p-3 text-muted-foreground">{policy.cabin.split(".")[0]}</td>
                      <td className="p-3 font-medium">{policy.cabinFee}</td>
                      <td className="p-3 font-medium">{policy.cargoFee}</td>
                      <td className="p-3 text-muted-foreground">{policy.notes.split(".")[0]}.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden space-y-4">
              {airlinePolicies.map((policy) => (
                <Card key={policy.airline}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <PlaneIcon size="sm" className="text-primary" />
                      {policy.airline}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Cabin</p>
                      <p className="text-sm">{policy.cabin} <span className="font-semibold text-primary">({policy.cabinFee})</span></p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Cargo</p>
                      <p className="text-sm">{policy.cargo} <span className="font-semibold text-primary">({policy.cargoFee})</span></p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Notes</p>
                      <p className="text-sm text-muted-foreground">{policy.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-sm text-amber-900 dark:text-amber-100">
                <strong>Important:</strong> Fees and policies change frequently. Always confirm directly with the airline
                when booking. Prices shown are per direction (one-way). Brachycephalic (snub-nosed) breeds like
                Bulldogs, Pugs, Boston Terriers, Pekingese, Shih Tzus, and Persian cats face restrictions on
                most carriers—especially in cargo during summer months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Settling Your Pet in Argentina */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <HeartIcon size="sm" className="mr-1" />
                Life After Arrival
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Settling Your Pet in Argentina</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You made it through customs. Now here&apos;s everything you need to know about
                veterinary care, supplies, dog parks, and pet-friendly spots in Buenos Aires.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldIcon size="md" className="text-primary" />
                    Finding a Vet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Argentina has excellent veterinary care, especially in Buenos Aires. A standard consultation
                    runs <strong>$10-25 USD</strong>, vaccinations cost <strong>$5-15 USD each</strong>, and
                    spay/neuter surgery is <strong>$50-150 USD</strong>—a fraction of US prices.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Top neighborhoods for vets:</strong> Palermo, Belgrano, and Recoleta have the highest
                    concentration of veterinary clinics, many with English-speaking staff. The University of
                    Buenos Aires (UBA) veterinary hospital in Agronomía offers excellent specialist care at lower costs.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ask your building&apos;s portero (doorman) or neighbors for recommendations—word of mouth is
                    the most reliable way to find a good vet in BA.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircleIcon size="md" className="text-red-500" />
                    Emergency Vet Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Save these numbers before you need them. Buenos Aires has several 24-hour emergency
                    veterinary clinics:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Hospital Veterinario UBA</strong> — Chorroarín 280, Agronomía. 24-hour emergency. Phone: (011) 4524-8496</li>
                    <li><strong>Veterinaria Palermo</strong> — Multiple locations in Palermo. 24-hour service. Phone: (011) 4831-0022</li>
                    <li><strong>Pet&apos;s Home Veterinaria</strong> — Belgrano area. Emergency and after-hours care available.</li>
                    <li><strong>SEMV (Servicio de Emergencias Veterinarias)</strong> — Mobile emergency vet service that comes to your home. Available across CABA.</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Tip:</strong> Uber and Cabify drivers generally allow pets, which is useful for emergency
                    vet runs. Mention your pet when requesting the ride.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSignIcon size="md" className="text-primary" />
                    Pet Supplies and Food
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pet shops (veterinarias):</strong> Nearly every neighborhood block in Buenos Aires has a
                    pet shop/vet combo. They sell food, toys, treats, and medications—often without needing a prescription
                    for basic items like flea/tick preventatives.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>International brands:</strong> Royal Canin, Pro Plan (Purina), and Eukanuba are widely
                    available. Premium Argentine brands like Vitalcan and Old Prince offer good quality at lower prices.
                    Expect to pay <strong>$25-50 USD</strong> for a 15kg bag of premium dry food.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>MercadoLibre:</strong> Argentina&apos;s Amazon equivalent. Great for bulk food orders,
                    crates, beds, and specialty items delivered to your door. Prices are often 15-20% cheaper than
                    brick-and-mortar pet shops.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Puppis and Pet Shop Boys:</strong> Chain pet stores with a wider selection than
                    neighborhood shops. Puppis has an online store with delivery across Buenos Aires.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPinIcon size="md" className="text-primary" />
                    Dog Parks and Walking Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Buenos Aires is one of the most dog-friendly cities in the world. You&apos;ll see professional
                    dog walkers (paseadores) with packs of 10-15 dogs everywhere. Key spots:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Parque Las Heras</strong> (Palermo) — Large off-leash areas, very popular with expats. Morning and evening are peak dog times.</li>
                    <li><strong>Parque Centenario</strong> (Caballito) — Massive green space with dedicated dog areas. Less crowded than Palermo parks.</li>
                    <li><strong>Bosques de Palermo</strong> — The city&apos;s biggest green space (400 hectares). Dogs welcome on paths and grassy areas.</li>
                    <li><strong>Parque Rivadavia</strong> (Caballito) — Quieter park with good off-leash zones.</li>
                    <li><strong>Reserva Ecológica</strong> (Puerto Madero) — Dogs allowed on leash. Beautiful waterfront trails.</li>
                    <li><strong>Plaza Francia</strong> (Recoleta) — Popular small park, great for socialization.</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Dog walkers:</strong> Professional dog walkers charge <strong>$30-60 USD/month</strong> for
                    daily walks (1-2 hours). They pick up from your building and return your pet. Most porteros
                    can recommend one.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <StarIcon size="md" className="text-primary" />
                    Pet-Friendly Cafes and Restaurants
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Argentina is extremely pet-friendly when it comes to dining out. Most restaurants with outdoor
                    seating (veredas) welcome dogs without question—it&apos;s part of the culture. You don&apos;t
                    usually need to ask; just sit down with your dog and the waiter will often bring a water bowl.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">Palermo (most pet-friendly)</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Ninina Bakery — outdoor terrace, dog bowls provided</li>
                        <li>Oui Oui — multiple locations, all dog-friendly patios</li>
                        <li>Cuervo Café — spacious outdoor area</li>
                        <li>LAB Training Center & Coffee — dog training + café combo</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Other neighborhoods</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Café Rivas (San Telmo) — sidewalk tables, relaxed vibe</li>
                        <li>Le Blé (Recoleta) — elegant outdoor dining with pets welcome</li>
                        <li>Notorious (Recoleta) — jazz café with sidewalk seating</li>
                        <li>Most Starbucks locations have pet-friendly outdoor seating</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Pro tip:</strong> Weekday lunches are the easiest time to dine with your dog. Weekend
                    brunches at popular spots can get crowded. Many restaurants in Palermo Soho and Hollywood have
                    adopted formal &quot;pet-friendly&quot; policies with water bowls, treats, and even menu items for dogs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pet-Friendly Housing */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <HomeIcon size="sm" className="mr-1" />
                Housing Guide
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Finding Pet-Friendly Housing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Finding a pet-friendly rental in Buenos Aires takes more effort than in many cities,
                but it&apos;s far from impossible. Here&apos;s what to expect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Most Pet-Friendly Neighborhoods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Palermo (Soho, Hollywood, Chico):</strong> The most pet-friendly neighborhood overall.
                    Abundant green space, pet services everywhere, and many buildings accept pets. Higher rent ($600-1,200/month for a 2BR) but worth it for pet owners.</li>
                    <li><strong>Belgrano:</strong> Residential, tree-lined streets, excellent parks (Barrancas de Belgrano).
                    More family-oriented buildings that tend to be pet-friendly. Mid-range rent ($500-900/month for a 2BR).</li>
                    <li><strong>Caballito:</strong> Large parks (Parque Centenario, Parque Rivadavia), more affordable rent
                    ($400-700/month for a 2BR). Many older buildings with flexible pet policies.</li>
                    <li><strong>Villa Crespo:</strong> Up-and-coming, close to Palermo parks, more affordable. Growing
                    number of pet-friendly rentals as the neighborhood gentrifies.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Find Pet-Friendly Rentals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Temporary furnished apartments:</strong> Sites like Airbnb, Furnished Finder, and local
                    platforms like AlqTemporario let you filter for &quot;pet-friendly.&quot; Start with a temporary place
                    while you search for long-term housing.</li>
                    <li><strong>Facebook groups:</strong> Join &quot;Expats in Buenos Aires,&quot; &quot;BA Apartments for
                    Rent,&quot; and &quot;Pet Owners in Buenos Aires.&quot; Landlords post directly, and you can ask about
                    pet policies upfront.</li>
                    <li><strong>ZonaProp and Argenprop:</strong> The main Argentine real estate platforms. Filter
                    listings by &quot;acepta mascotas&quot; (accepts pets). Not all listings specify, so ask directly.</li>
                    <li><strong>Real estate agents (inmobiliarias):</strong> Tell them upfront about your pet. They can
                    filter for pet-friendly buildings and negotiate with landlords on your behalf.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Restrictions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Argentine rental culture around pets can be restrictive, but it&apos;s improving:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Size limits:</strong> Some buildings only accept &quot;small&quot; pets (under 10-15 kg).
                    This is the most common restriction. Larger dogs significantly narrow your options in
                    apartment buildings.</li>
                    <li><strong>Breed restrictions:</strong> Rare but some luxury buildings prohibit &quot;dangerous
                    breeds&quot; (Pit Bull, Rottweiler, Dogo Argentino). Newer buildings are generally more lenient.</li>
                    <li><strong>Number of pets:</strong> Most buildings that allow pets accept 1-2. Three or more can be
                    difficult. Houses (casas) in neighborhoods like Saavedra, Devoto, and outer barrios are more
                    flexible on quantity.</li>
                    <li><strong>Building rules (reglamento):</strong> Each consortium (building association) sets its own
                    rules. Some require pets to be carried through common areas or use the service elevator. Ask for
                    the reglamento before signing.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deposits and Extra Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Pet deposit:</strong> Not standard practice in Argentina. Most landlords don&apos;t charge
                    an additional pet deposit beyond the normal rental deposit (typically 1-2 months rent).</li>
                    <li><strong>Standard deposit:</strong> Under current Argentine rental law, the deposit is capped at
                    1 month&apos;s rent for contracts of 3+ years. Temporary rentals (often used by expats) may
                    charge 1-2 months.</li>
                    <li><strong>Expensas (building fees):</strong> Monthly building maintenance fees ($30-150/month) don&apos;t
                    typically increase for pet owners, but some buildings charge a small premium.</li>
                    <li><strong>Negotiation tip:</strong> If a landlord is hesitant about your pet, offering a slightly
                    higher deposit or sharing photos/references of your well-behaved pet can help. Many landlords
                    care more about the tenant than the pet—being a responsible expat with income goes a long way.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Differences */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <GlobeIcon size="sm" className="mr-1" />
                Beyond Buenos Aires
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Traveling with Pets Within Argentina</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Once you&apos;re settled, you&apos;ll want to explore Argentina with your pet. Here&apos;s what
                you need to know about domestic travel, pet-friendly destinations, and regional considerations.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PlaneIcon size="md" className="text-primary" />
                    Domestic Flights with Pets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Domestic flights within Argentina follow the same airline pet policies as international ones,
                    but the process is simpler since no customs or import permits are involved.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Aerolíneas Argentinas:</strong> Pets allowed in cabin on domestic routes. Same weight/size limits
                    as international flights (10 kg with carrier). Fee: ~$25-50 USD equivalent per direction.</li>
                    <li><strong>Flybondi (budget carrier):</strong> Accepts pets in cabin on most routes. Slightly smaller
                    carrier size limit. Fee: ~$15-30 USD equivalent. Book early—limited pet spots per flight.</li>
                    <li><strong>JetSMART:</strong> Pets accepted in cabin. Similar rules to Flybondi. Fees comparable to Flybondi.</li>
                    <li><strong>Required documents:</strong> A veterinary health certificate (certificado sanitario) issued
                    within 10 days of travel. Your local vet can provide this quickly and cheaply (~$10-20 USD).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPinIcon size="md" className="text-primary" />
                    Long-Distance Buses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Argentina&apos;s long-distance bus system is extensive but historically not pet-friendly.
                    This is changing slowly:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Most bus companies do not allow pets</strong> except service animals. This includes major
                    companies like Andesmar, Via Bariloche, and Chevallier.</li>
                    <li><strong>Small pets in carriers:</strong> Some drivers may allow a very small pet in a carrier on
                    their lap, but this is unofficial and not guaranteed. Don&apos;t count on it for trip planning.</li>
                    <li><strong>Alternatives:</strong> For long-distance travel with pets, driving (rent a car) is the most
                    reliable option. Some pet transport companies offer door-to-door service for long hauls.</li>
                    <li><strong>Rent a car:</strong> Car rental in Argentina runs $25-60 USD/day. Companies like Hertz,
                    Avis, and local chains allow pets (confirm when booking). This is the best option for
                    destinations like Bariloche, Mendoza, or Mar del Plata with a pet.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <StarIcon size="md" className="text-primary" />
                    Pet-Friendly Vacation Destinations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">San Carlos de Bariloche (Patagonia)</p>
                      <p className="text-sm text-muted-foreground">
                        One of Argentina&apos;s most pet-friendly destinations. Many cabañas (cabins) welcome dogs.
                        Miles of hiking trails around the lakes. Be cautious of chocolate shops (seriously—dogs love
                        them). Best season: October-April. Winter brings snow, which some dogs love but trails
                        become limited.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Mar del Plata (Atlantic Coast)</p>
                      <p className="text-sm text-muted-foreground">
                        Popular beach destination 4-5 hours from BA by car. Several beaches allow dogs
                        (Playa de los Acantilados, Playa Waikiki). Many pet-friendly hotels and rentals.
                        Peak season: January-February, but December and March are less crowded and still warm.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Tigre (Buenos Aires Delta)</p>
                      <p className="text-sm text-muted-foreground">
                        Just 30 minutes from BA by train (pets allowed on Tren de la Costa). River delta islands
                        with pet-friendly cabañas. Boats/lanchas usually accept dogs. Perfect for weekend getaways
                        year-round.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Mendoza Wine Country</p>
                      <p className="text-sm text-muted-foreground">
                        Many bodegas (wineries) have pet-friendly outdoor areas. Accommodation in rental houses
                        and cabañas is often pet-friendly. Fly or drive (12 hours by car). Dry climate is
                        comfortable for most breeds year-round.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircleIcon size="md" className="text-amber-500" />
                    Climate and Regional Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Buenos Aires summers (Dec-Feb):</strong> Hot and humid, 30-38°C (86-100°F). Walk dogs
                    early morning and after 7 PM. Carry water. Sidewalks can burn paws midday. Heat stroke is a
                    real risk for brachycephalic breeds.</li>
                    <li><strong>Patagonia (year-round):</strong> Strong winds and cold temperatures. Ensure your dog has
                    appropriate cold-weather gear if visiting in winter (June-August). Altitude in mountain
                    areas can affect some dogs—acclimate gradually.</li>
                    <li><strong>Northern Argentina (Salta, Jujuy, Misiones):</strong> Subtropical heat. Higher risk of
                    leishmaniasis (transmitted by sandflies)—ask your Argentine vet about preventive treatments
                    before traveling north. Tick-borne diseases are also more common.</li>
                    <li><strong>Altitude:</strong> Destinations like Purmamarca (2,200m), Tilcara (2,461m), and mountain
                    passes can affect dogs just like humans. Symptoms include lethargy, loss of appetite, and
                    panting. Gradually increase altitude and ensure plenty of water.</li>
                    <li><strong>Poisonous toads:</strong> The Argentine toad (Rhinella arenarum) is common in
                    suburban gardens and parks, especially in humid areas. Their skin secretions are toxic
                    to dogs. If your dog mouths one, rinse the mouth immediately with water and see a vet.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-5">
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

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
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
