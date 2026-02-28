import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { nationalities, getNationalityBySlug } from "@/lib/data/nationalities";
import { visaTypes, getVisaTypeBySlug } from "@/lib/data/visa-types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, CheckCircle, Clock, DollarSign, 
  Globe, FileText, AlertCircle, ExternalLink,
  MapPin, Briefcase, Users
} from "lucide-react";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

interface VisaNationalityPageProps {
  params: Promise<{
    type: string;
    nationality: string;
  }>;
}

// Define which nationality + visa combinations to generate
// This creates our PSEO matrix - high-intent long-tail keywords
// EXPANDED: All 54 nationalities across relevant visa types = 200+ combination pages
const MATRIX_COMBINATIONS = [
  // Digital Nomad Visa - All countries with remote workers (expanded to 40+)
  { type: "digital-nomad", nationalities: [
    "united-states", "canada", "united-kingdom", "germany", "france", "netherlands", 
    "spain", "italy", "portugal", "belgium", "switzerland", "sweden", "norway", 
    "denmark", "finland", "ireland", "austria",
    "russia", "ukraine", "poland", "czech-republic", "hungary", "romania", 
    "bulgaria", "croatia", "serbia", "slovakia", "slovenia", "estonia", "latvia", "lithuania",
    "india", "south-africa", "israel", "australia", "new-zealand", "china", "japan", "south-korea",
    "mexico", "brazil", "chile", "colombia", "peru", "uruguay", "paraguay", "bolivia", "ecuador", "venezuela",
    "cuba", "dominican-republic", "puerto-rico"
  ]},
  // Rentista - Countries with retirement/pension income (expanded to 35+)
  { type: "rentista", nationalities: [
    "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy", 
    "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland", "ireland",
    "israel", "south-africa", "australia", "new-zealand",
    "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
    "mexico", "chile", "uruguay", "brazil", "colombia", "peru", "venezuela",
    "china", "japan"
  ]},
  // Pensionado - Retirees with pension income (expanded to 35+)
  { type: "pensionado", nationalities: [
    "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy",
    "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland", "ireland",
    "israel", "south-africa", "australia", "new-zealand",
    "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
    "chile", "uruguay", "mexico", "brazil", "colombia", "peru",
    "china", "japan"
  ]},
  // Work Visa - Job seekers from all regions (expanded to 45+)
  { type: "work", nationalities: [
    "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy",
    "portugal", "belgium", "switzerland", "netherlands", "sweden", "ireland",
    "india", "south-africa", "israel", "australia", "new-zealand", "china", "japan", "south-korea",
    "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
    "bulgaria", "croatia", "serbia", "slovakia", "slovenia", "estonia", "latvia", "lithuania",
    "mexico", "colombia", "peru", "chile", "brazil", "venezuela", "uruguay", "paraguay", "bolivia", "ecuador",
    "cuba", "dominican-republic"
  ]},
  // Student Visa - International students (expanded to 40+)
  { type: "student", nationalities: [
    "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy",
    "portugal", "belgium", "switzerland", "netherlands", "sweden", "ireland",
    "mexico", "colombia", "peru", "chile", "brazil", "venezuela", "uruguay", "paraguay", "bolivia", "ecuador",
    "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
    "india", "south-africa", "israel", "china", "japan", "south-korea",
    "cuba", "dominican-republic"
  ]},
  // Investment - Business investors (expanded to 30+)
  { type: "investment", nationalities: [
    "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy",
    "portugal", "belgium", "switzerland", "netherlands", "ireland",
    "israel", "south-africa", "australia", "new-zealand",
    "russia", "ukraine", "china", "japan", "south-korea",
    "mexico", "chile", "brazil", "colombia", "peru", "uruguay",
    "poland", "czech-republic"
  ]},
  // Mercosur - Associate and full members
  { type: "mercosur", nationalities: ["brazil", "uruguay", "paraguay", "bolivia", "chile", "peru", "colombia", "ecuador"] },
];

export async function generateStaticParams() {
  const params: { type: string; nationality: string }[] = [];
  
  for (const combo of MATRIX_COMBINATIONS) {
    for (const nat of combo.nationalities) {
      params.push({
        type: combo.type,
        nationality: nat,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: VisaNationalityPageProps): Promise<Metadata> {
  const { type, nationality } = await params;
  const visa = getVisaTypeBySlug(type);
  const nat = getNationalityBySlug(nationality);
  
  if (!visa || !nat) {
    return {
      title: "Not Found | Expats Argentina",
    };
  }

  const title = `${visa.shortName} Visa for ${nat.demonym}s: Complete Argentina Guide`;
  const description = `Complete guide to the ${visa.name} for ${nat.demonym} citizens moving to Argentina. Requirements, costs, timeline, and step-by-step process tailored for ${nat.name}.`;

  return {
    title,
    description,
    keywords: [
      `${visa.slug} visa`,
      `${nat.demonym.toLowerCase()}`,
      `argentina visa for ${nat.demonym.toLowerCase()}s`,
      `${nat.name.toLowerCase()} to argentina`,
      `immigration ${nat.demonym.toLowerCase()} argentina`,
      visa.slug,
      "argentina residency"
    ],
    openGraph: {
      title,
      description,
      type: "article",
    },
    alternates: {
      canonical: `https://expatsargentina.com/visas-matrix/${type}/${nationality}`,
    },
  };
}

// Generate unique content based on nationality and visa combination
function generateNationalitySpecificContent(visa: typeof visaTypes[0], nat: typeof nationalities[0]) {
  const isMercosur = nat.visaRequirements.mercosur?.eligible;
  const hasVisaFree = !nat.visaRequirements.tourist.reciprocityFee;
  
  // Special notes based on nationality
  const specialNotes: string[] = [];
  
  if (visa.slug === "digital-nomad") {
    if (nat.slug === "russia" || nat.slug === "ukraine") {
      specialNotes.push(`${nat.name} citizens benefit from visa-free entry, making it easy to explore Argentina before committing to the Digital Nomad Visa.`);
    }
    if (nat.slug === "india" || nat.slug === "philippines") {
      specialNotes.push(`You'll need to apply for a tourist visa first, then switch to Digital Nomad Visa within Argentina.`);
    }
    if (isMercosur) {
      specialNotes.push(`As a Mercosur national, you have easier pathways available, but the Digital Nomad Visa still offers benefits for those working remotely for foreign companies.`);
    }
    if (nat.slug === "united-states" || nat.slug === "canada" || nat.slug === "united-kingdom") {
      specialNotes.push(`The strong USD/CAD/GBP to Argentine peso exchange rate makes Argentina extremely affordable for ${nat.demonym} remote workers.`);
    }
  }
  
  if (visa.slug === "rentista" || visa.slug === "pensionado") {
    if (nat.slug === "united-states" || nat.slug === "united-kingdom") {
      specialNotes.push(`Social Security/pension income from ${nat.name} qualifies easily for this visa category.`);
    }
    if (nat.slug === "israel") {
      specialNotes.push(`Many Israeli retirees choose Argentina for its vibrant Jewish community and kosher infrastructure.`);
    }
    if (nat.practicalInfo.taxTreaty) {
      specialNotes.push(`The ${nat.name}-Argentina tax treaty helps prevent double taxation on your pension/investment income.`);
    }
  }
  
  if (visa.slug === "work") {
    if (nat.slug === "india" || nat.slug === "philippines") {
      specialNotes.push(`${nat.demonym} professionals are in demand in Argentina's IT and healthcare sectors.`);
    }
    if (isMercosur) {
      specialNotes.push(`As a Mercosur national, you don't need employer sponsorship - you can work immediately upon obtaining Mercosur residency.`);
    }
  }
  
  if (visa.slug === "mercosur") {
    if (nat.visaRequirements.mercosur?.eligible) {
      specialNotes.push(`You're eligible for the Mercosur residency pathway, which is the fastest and most affordable route to living in Argentina.`);
    }
  }

  // Common issues for this nationality
  const commonIssues: string[] = [];
  if (nat.documents.criminalRecord.required && nat.documents.criminalRecord.apostille) {
    commonIssues.push(`Obtaining your criminal record check with apostille from ${nat.name}`);
  }
  if (!hasVisaFree && visa.slug !== "mercosur") {
    commonIssues.push(`Obtaining your tourist visa before travel (required for ${nat.demonym}s)`);
  }
  if (visa.slug === "digital-nomad" && (nat.slug === "india" || nat.slug === "philippines")) {
    commonIssues.push(`Proving stable remote income in a format Argentine immigration accepts`);
  }

  // Processing time adjustment
  let processingTime = visa.processingTime;
  if (nat.slug === "venezuela" || nat.slug === "ukraine") {
    processingTime = "30-60 days (expedited for humanitarian cases)";
  }
  if (isMercosur && visa.slug === "mercosur") {
    processingTime = "15-30 days (fastest processing for Mercosur nationals)";
  }

  return {
    specialNotes,
    commonIssues,
    processingTime,
    isMercosur,
    hasVisaFree,
  };
}

export default async function VisaNationalityPage({ params }: VisaNationalityPageProps) {
  const { type, nationality } = await params;
  const visa = getVisaTypeBySlug(type);
  const nat = getNationalityBySlug(nationality);

  if (!visa || !nat) {
    notFound();
  }

  const specificContent = generateNationalitySpecificContent(visa, nat);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground transition-colors">Visas</Link>
            <span>/</span>
            <Link href={`/visas/${type}`} className="hover:text-foreground transition-colors">{visa.shortName}</Link>
            <span>/</span>
            <span className="text-foreground">{nat.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{nat.flag}</span>
              <Badge className="text-sm">{visa.shortName} Visa</Badge>
              {specificContent.isMercosur && (
                <Badge className="bg-green-500">Mercosur Member</Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {visa.shortName} Visa for {nat.demonym}s
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Complete guide to obtaining the {visa.name} as a {nat.demonym} citizen. 
              Specific requirements, timeline, and process for {nat.name} passport holders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview for {nat.demonym} Citizens</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {visa.description} As a {nat.demonym} citizen, you have 
                {specificContent.hasVisaFree ? " visa-free entry to Argentina for 90 days" : " specific entry requirements"} 
                {" "}that affect your pathway to this visa.
              </p>
              
              {specificContent.specialNotes.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 space-y-2">
                  <p className="font-medium text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Special Considerations for {nat.demonym}s:
                  </p>
                  <ul className="space-y-1">
                    {specificContent.specialNotes.map((note, i) => (
                      <li key={i} className="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
                        <span>•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <Separator />

            {/* Who Is It For */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Is This Visa Right for You?</h2>
              <p className="text-muted-foreground mb-4">
                The {visa.shortName} Visa is designed for:
              </p>
              <ul className="grid gap-2">
                {visa.whoIsItFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            {/* Requirements for This Nationality */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements for {nat.demonym}s</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  {visa.requirements.income && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Income Requirement</p>
                        <p className="text-sm text-muted-foreground">{visa.requirements.income}</p>
                      </div>
                    </div>
                  )}
                  
                  {visa.requirements.employment && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Employment</p>
                          <p className="text-sm text-muted-foreground">{visa.requirements.employment}</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {visa.requirements.investment && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Investment</p>
                          <p className="text-sm text-muted-foreground">{visa.requirements.investment}</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {visa.requirements.other && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Additional Requirements</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            {visa.requirements.other.map((req, i) => (
                              <li key={i}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Documents Checklist */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Document Checklist for {nat.demonym}s</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    As a {nat.demonym} citizen, you'll need these documents:
                  </p>
                  <ul className="space-y-3">
                    {visa.documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                    {nat.documents.criminalRecord.required && (
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span>
                          Criminal background check from {nat.name}
                          {nat.documents.criminalRecord.apostille && " (apostilled)"}
                          {nat.documents.criminalRecord.notes && ` - ${nat.documents.criminalRecord.notes}`}
                        </span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Timeline & Process */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Timeline & Process</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Processing Time</p>
                    <p className="font-semibold">{specificContent.processingTime}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Visa Duration</p>
                    <p className="font-semibold">{visa.duration}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Path to Citizenship</p>
                    <p className="font-semibold">{visa.pathToCitizenship}</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Step-by-Step Process</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                    <div>
                      <p className="font-medium">Entry to Argentina</p>
                      <p className="text-sm text-muted-foreground">
                        {specificContent.hasVisaFree 
                          ? `${nat.demonym}s can enter visa-free for 90 days. Use this time to prepare your application.`
                          : `Apply for a tourist visa at the Argentine embassy in ${nat.name}, then travel to Argentina.`
                        }
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                    <div>
                      <p className="font-medium">Gather Documents</p>
                      <p className="text-sm text-muted-foreground">
                        Obtain all required documents from {nat.name}. 
                        {nat.documents.criminalRecord.required && nat.documents.criminalRecord.apostille && 
                          ` Note: Documents must be apostilled in ${nat.name} before travel.`
                        }
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                    <div>
                      <p className="font-medium">Submit Application</p>
                      <p className="text-sm text-muted-foreground">
                        Apply at the Dirección Nacional de Migraciones (DNM) in Buenos Aires or your local migraciones office.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium shrink-0">4</span>
                    <div>
                      <p className="font-medium">Receive Precaria</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a temporary authorization (precaria) allowing you to stay legally while processing.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium shrink-0">5</span>
                    <div>
                      <p className="font-medium">Collect Residency Card</p>
                      <p className="text-sm text-muted-foreground">
                        Once approved, collect your DNI (residency card) and enjoy your new life in Argentina!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Costs */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Costs</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Government Fee</span>
                    <span className="font-medium">{visa.costs.governmentFee}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Legal Fees (optional)</span>
                    <span className="font-medium">{visa.costs.legalFees}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-medium">Total Estimated Cost</span>
                    <span className="font-bold text-primary">{visa.costs.totalEstimate}</span>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Pros & Cons */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Pros & Cons</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-green-200">
                  <CardHeader>
                    <h3 className="font-semibold text-green-700 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Advantages
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-amber-200">
                  <CardHeader>
                    <h3 className="font-semibold text-amber-700 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Considerations
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.cons.map((con, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-amber-500">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {visa.faqs.map((faq, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <h3 className="font-semibold text-base">{faq.q}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Quick Info */}
            <Card className="bg-primary/5">
              <CardHeader>
                <h3 className="font-semibold">Quick Overview</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Visa Type</p>
                  <p className="font-medium">{visa.name}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">For Citizens Of</p>
                  <p className="font-medium flex items-center gap-2">
                    <span>{nat.flag}</span>
                    {nat.name}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Entry Requirement</p>
                  <p className="font-medium">
                    {specificContent.hasVisaFree ? "Visa-free (90 days)" : "Tourist visa required"}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Processing Time</p>
                  <p className="font-medium">{specificContent.processingTime}</p>
                </div>
              </CardContent>
            </Card>

            {/* Common Issues */}
            {specificContent.commonIssues.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="font-semibold flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Common Issues for {nat.demonym}s
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {specificContent.commonIssues.map((issue, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-amber-500">⚠</span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Related Nationalities */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Similar Guides</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {nationalities
                  .filter(n => n.region === nat.region && n.slug !== nat.slug)
                  .slice(0, 5)
                  .map(n => (
                    <Link 
                      key={n.slug}
                      href={`/visas-matrix/${type}/${n.slug}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <span>{n.flag}</span>
                      <span>{n.name}</span>
                    </Link>
                  ))}
              </CardContent>
            </Card>

            {/* Lucero Legal CTA */}
            <LuceroLegalCTA 
              variant="sidebar"
              title={`${visa.shortName} Visa Help`}
              description={`Lucero Legal specializes in helping ${nat.demonym} citizens obtain Argentine visas. Get expert assistance with your ${visa.shortName} visa application.`}
            />
          </aside>
        </div>
      </div>

      {/* Navigation */}
      <div className="container px-4 md:px-6 pb-12">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link href={`/nationality/${nationality}`}>
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" />
              Back to {nat.name} Guide
            </Button>
          </Link>
          <Link href="/visas">
            <Button className="gap-2 w-full sm:w-auto">
              All Visa Options
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
