import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyTOC } from "@/components/StickyTOC";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import {
  FileTextIcon,
  CheckCircleIcon,
  MapPinIcon,
  ClockIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  DollarSignIcon,
  SmartphoneIcon,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Get a DNI in Argentina | Complete Guide for Foreigners",
  description:
    "Step-by-step guide to getting your DNI (Documento Nacional de Identidad) in Argentina. Required documents, RENAPER offices, costs, timelines, and tips for foreigners.",
  keywords: [
    "DNI Argentina foreigners",
    "Argentina national identity card",
    "RENAPER Argentina",
    "DNI application Argentina",
    "Argentina residency DNI",
    "documento nacional de identidad",
  ],
  openGraph: {
    title: "How to Get a DNI in Argentina - Complete Guide for Foreigners",
    description:
      "Everything you need to know about obtaining your Argentine DNI: eligibility, documents, process, timeline, and common pitfalls.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/getting-dni/",
  },
};

const tocItems = [
  { id: "what-is-dni", text: "What Is a DNI?", level: 1 },
  { id: "why-you-need-it", text: "Why You Need It", level: 1 },
  { id: "eligibility", text: "Eligibility", level: 1 },
  { id: "required-documents", text: "Required Documents", level: 1 },
  { id: "where-to-apply", text: "Where to Apply", level: 1 },
  { id: "process-and-timeline", text: "Process & Timeline", level: 1 },
  { id: "costs", text: "Costs", level: 1 },
  { id: "digital-dni", text: "Digital DNI", level: 1 },
  { id: "common-issues", text: "Common Issues & Tips", level: 1 },
];

export default function GettingDNIPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground">Getting Your DNI</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <FileTextIcon size="sm" className="mr-1" />
              Official Documentation Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              How to Get Your DNI in Argentina
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The DNI is your key to functioning as a legal resident in
              Argentina. This guide walks you through every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-primary/5 border-y">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-primary">10-15 days</div>
              <div className="text-sm text-muted-foreground">Typical Timeline</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">ARS 14,000</div>
              <div className="text-sm text-muted-foreground">Application Fee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">RENAPER</div>
              <div className="text-sm text-muted-foreground">Issuing Agency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Required</div>
              <div className="text-sm text-muted-foreground">For Legal Residents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with TOC */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <StickyTOC items={tocItems} title="On this page" />
            </aside>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {/* What is DNI */}
              <section id="what-is-dni" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What Is a DNI?
                </h2>
                <p className="text-muted-foreground mb-4">
                  The DNI (Documento Nacional de Identidad) is Argentina&apos;s
                  national identity card. Every Argentine citizen and legal
                  resident is issued one. It is a small laminated card with your
                  photo, full name, nationality, date of birth, and an 8-digit
                  identification number that becomes your key identifier for
                  everything in the country.
                </p>
                <p className="text-muted-foreground">
                  Think of it as the Argentine equivalent of a Social Security
                  Number, driver&apos;s license, and national ID card all rolled
                  into one. Your DNI number will be used for banking, healthcare,
                  employment, signing contracts, buying property, and most
                  official transactions.
                </p>
              </section>

              {/* Why You Need It */}
              <section id="why-you-need-it" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Why You Need It
                </h2>
                <p className="text-muted-foreground mb-4">
                  While you can function as a tourist without a DNI, living
                  long-term in Argentina without one is extremely limiting. Here
                  is what your DNI unlocks:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Banking:</strong> Opening a full bank account (not
                    just digital wallets) requires a DNI. Without it, you are
                    limited to basic services.
                  </li>
                  <li>
                    <strong>Employment:</strong> Working legally (either as an
                    employee or freelancer under Monotributo) requires a CUIL/CUIT
                    number, which is derived from your DNI.
                  </li>
                  <li>
                    <strong>Healthcare:</strong> Signing up for a prepaga (private
                    health plan) at the best rates requires a DNI.
                  </li>
                  <li>
                    <strong>Renting:</strong> Signing a formal lease agreement
                    almost always requires a DNI.
                  </li>
                  <li>
                    <strong>Phone contracts:</strong> Postpaid mobile plans
                    require a DNI.
                  </li>
                  <li>
                    <strong>Utilities:</strong> Setting up electricity, gas, and
                    internet in your name requires a DNI.
                  </li>
                  <li>
                    <strong>Buying property:</strong> Real estate purchases
                    require a DNI.
                  </li>
                  <li>
                    <strong>Voting:</strong> Foreigners with permanent residency
                    can vote in local elections.
                  </li>
                </ul>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Eligibility
                </h2>
                <p className="text-muted-foreground mb-4">
                  To receive a DNI, you must have legal residency status in
                  Argentina. This means you need to have been granted either:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>Temporary Residency (Residencia Temporaria):</strong>{" "}
                    Granted through work visas, student visas, family
                    reunification, rentista visas, or Mercosur agreements. Valid
                    1-3 years.
                  </li>
                  <li>
                    <strong>Permanent Residency (Residencia Permanente):</strong>{" "}
                    Available after holding temporary residency for the required
                    period (usually 2-3 years), or immediately for certain
                    categories like Argentine spouse/parent.
                  </li>
                </ul>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangleIcon size="sm" className="text-amber-600" />
                    <span className="font-semibold text-amber-900 dark:text-amber-100">
                      Important
                    </span>
                  </div>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Tourists and Digital Nomad Visa holders do NOT receive a DNI.
                    The Digital Nomad Visa is a special transitory authorization, not a
                    residency permit. To get a DNI, you need to go through the
                    formal residency process via Migraciones (immigration
                    authority).
                  </p>
                </div>
                <p className="text-muted-foreground">
                  The residency application and DNI issuance are technically
                  separate processes handled by different agencies: Migraciones
                  handles residency, and RENAPER (Registro Nacional de las
                  Personas) issues the DNI. However, they now coordinate, and
                  you can often initiate the DNI process shortly after your
                  residency is approved.
                </p>
              </section>

              {/* Required Documents */}
              <section id="required-documents" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Required Documents
                </h2>
                <p className="text-muted-foreground mb-4">
                  Gather these documents before your RENAPER appointment:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Valid Passport",
                      detail:
                        "Your original passport. It must be valid for at least 6 months.",
                    },
                    {
                      title: "Residency Approval (Disposicion)",
                      detail:
                        "The official resolution from Migraciones granting your temporary or permanent residency. This is a printed document with a disposition number.",
                    },
                    {
                      title: "Proof of Address",
                      detail:
                        "A utility bill (electricity, gas, water) in your name, or a notarized declaration of domicile (certificado de domicilio) from a local police station or notary.",
                    },
                    {
                      title: "Birth Certificate",
                      detail:
                        "Original or certified copy, apostilled and translated to Spanish by a certified translator (traductor publico). Some RENAPER offices accept the version already submitted to Migraciones.",
                    },
                    {
                      title: "RENAPER Appointment Confirmation",
                      detail:
                        "You must book an appointment through the RENAPER website (renaper.gob.ar) or the Mi Argentina app. Walk-ins are generally not accepted.",
                    },
                    {
                      title: "Payment Receipt",
                      detail:
                        "The fee payment receipt (generated through the RENAPER system or paid at the office).",
                    },
                  ].map((doc, index) => (
                    <Card key={index} className="bg-muted/30">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start gap-3">
                          <CheckCircleIcon
                            size="sm"
                            className="text-primary mt-0.5 shrink-0"
                          />
                          <div>
                            <p className="font-semibold">{doc.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.detail}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Where to Apply */}
              <section id="where-to-apply" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <MapPinIcon size="md" className="text-primary" />
                  Where to Apply
                </h2>
                <p className="text-muted-foreground mb-4">
                  DNIs are issued by RENAPER (Registro Nacional de las Personas)
                  offices located throughout the country. In Buenos Aires, the
                  main offices include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>
                    <strong>RENAPER Central Office:</strong> Located in the city
                    center, with the broadest appointment inventory. This is the largest office and typically has the most
                    appointment availability, though it can be crowded.
                  </li>
                  <li>
                    <strong>Registro Civil offices:</strong> Various locations
                    throughout CABA and Greater Buenos Aires handle DNI
                    applications. Some are less crowded than the central office.
                  </li>
                  <li>
                    <strong>Provincial offices:</strong> If you live outside
                    Buenos Aires, every provincial capital and most mid-sized
                    cities have RENAPER/Registro Civil offices.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Book your appointment online at{" "}
                  <strong>renaper.gob.ar</strong> or through the{" "}
                  <strong>Mi Argentina</strong> app. Appointments can fill up
                  weeks in advance, so book early. Some offices release new
                  slots at midnight; check at off-peak times if nothing is
                  available.
                </p>
              </section>

              {/* Process and Timeline */}
              <section id="process-and-timeline" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <ClockIcon size="md" className="text-primary" />
                  Process and Timeline
                </h2>
                <p className="text-muted-foreground mb-4">
                  The appointment itself is surprisingly quick. Here is what
                  happens:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>
                    <strong>Check-in:</strong> Arrive at your appointed time
                    (early is better). Present your appointment confirmation and
                    documents at the reception desk.
                  </li>
                  <li>
                    <strong>Document verification:</strong> An agent reviews your
                    residency approval, passport, and supporting documents. If
                    anything is missing, you will be sent away to return another
                    day.
                  </li>
                  <li>
                    <strong>Photo and fingerprints:</strong> Your photo is taken
                    (no glasses, neutral expression) and all ten fingerprints are
                    digitally recorded.
                  </li>
                  <li>
                    <strong>Signature:</strong> You provide your digital
                    signature, which will appear on your DNI card.
                  </li>
                  <li>
                    <strong>Payment:</strong> If you have not already paid
                    online, you pay the fee at this stage.
                  </li>
                  <li>
                    <strong>Constancia (temporary proof):</strong> You receive a
                    printed constancia de DNI en tramite, which serves as
                    temporary proof of your DNI while the physical card is being
                    produced.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold mb-3">Timeline</h3>
                <p className="text-muted-foreground mb-4">
                  After your appointment, the physical card is printed and
                  mailed to the address you provided. Typical timelines:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Buenos Aires (CABA):</strong> 10-15 business days for
                    standard processing.
                  </li>
                  <li>
                    <strong>Greater Buenos Aires:</strong> 15-20 business days.
                  </li>
                  <li>
                    <strong>Interior provinces:</strong> 15-30 business days,
                    depending on distance.
                  </li>
                  <li>
                    <strong>Express processing:</strong> Available for an
                    additional fee, reduces wait to 3-5 business days in CABA.
                  </li>
                </ul>
              </section>

              {/* Costs */}
              <section id="costs" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <DollarSignIcon size="md" className="text-primary" />
                  Costs
                </h2>
                <p className="text-muted-foreground mb-4">
                  RENAPER updated DNI tariffs in late 2025. For foreign residents, the standard first-copy DNI fee is:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                    <h3 className="font-semibold text-emerald-800 dark:text-emerald-100 mb-1">
                      Standard Processing
                    </h3>
                    <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                      ARS 14,000
                    </p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      About 10-15 business days
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-100 mb-1">
                      Express Processing
                    </h3>
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      ARS 56,000
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Fast-track option when available
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Fees are paid in Argentine pesos and can change again, so verify the current tariff before your appointment. Payment methods vary by office and appointment flow, so do not assume every branch will accept the same card or cash options on the day.
                </p>
              </section>

              {/* Digital DNI */}
              <section id="digital-dni" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <SmartphoneIcon size="md" className="text-primary" />
                  Digital DNI
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina now offers a digital version of the DNI through the
                  official <strong>Mi Argentina</strong> app (available on iOS
                  and Android). The digital DNI is legally equivalent to the
                  physical card for most purposes within Argentina.
                </p>
                <p className="text-muted-foreground mb-4">
                  Once your physical DNI is produced, you can activate the
                  digital version through the app using facial recognition
                  verification. The digital DNI stores all the same information
                  as the physical card and can be used for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Identification at banks, hospitals, and government offices</li>
                  <li>Domestic travel (flights and bus terminals within Argentina)</li>
                  <li>Age verification</li>
                  <li>Mercosur border crossings (to neighboring countries)</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Tip:</strong> Even with the digital version, always
                    keep your physical DNI card safe. Some institutions and
                    border crossings still require the physical card. The digital
                    DNI is a complement, not a complete replacement.
                  </p>
                </div>
              </section>

              {/* Common Issues */}
              <section id="common-issues" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangleIcon size="md" className="text-primary" />
                  Common Issues and Tips
                </h2>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Appointment slots are always full
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Check the website at midnight or early morning, when new
                        slots are released. Try different office locations.
                        Offices outside the city center tend to have more
                        availability. Some people report success checking
                        multiple times per day as cancellations open up.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        My residency was approved but is not showing in the system
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        There can be a delay of 1-2 weeks between Migraciones
                        approving your residency and RENAPER receiving the data.
                        If the RENAPER system does not recognize your residency
                        status, return to Migraciones with your disposition
                        letter and ask them to confirm the transfer.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        DNI was mailed to the wrong address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        If delivery fails, the card is returned to the issuing
                        office. You can pick it up in person (bring the
                        constancia receipt and your passport) or request
                        redelivery. Double and triple check your address at the
                        appointment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Name spelled incorrectly on the DNI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Errors happen, especially with names that are unusual in
                        Spanish. If your name is misspelled, you need to return
                        to a RENAPER office to request a correction. Bring your
                        passport as proof of the correct spelling. There is
                        usually no additional fee for error corrections made by
                        RENAPER.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Renewing your DNI after temporary residency expires
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Your DNI is tied to your residency status. When you renew
                        your temporary residency or upgrade to permanent, you
                        will need a new DNI with an updated expiration date. The
                        process is the same, just book a new RENAPER appointment
                        with your updated residency approval.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Once You Have Your DNI
                </h2>
                <p className="text-muted-foreground mb-6">
                  With your DNI in hand, a new set of doors opens. Here is what
                  to tackle next:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link href="/guides/working-taxes">
                      Working & Taxes Guide
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/banking">
                      Banking Guide
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/healthcare">
                      Healthcare Guide
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Lucero Legal CTA */}
              <LuceroLegalCTA
                title="Need Help With Residency?"
                description="The DNI requires legal residency. Lucero Legal can guide you through the entire residency application process, from document preparation to Migraciones appointments."
              />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
