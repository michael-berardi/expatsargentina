import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { nationalities, getNationalityBySlug } from "@/lib/data/nationalities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, CheckCircle, Clock, DollarSign, 
  Globe, Users, FileText, AlertCircle, ExternalLink
} from "lucide-react";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import { RelatedForNationality } from "@/components/RelatedContent";

interface NationalityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return nationalities.map((nat) => ({
    slug: nat.slug,
  }));
}

export async function generateMetadata({ params }: NationalityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const nat = getNationalityBySlug(slug);
  
  if (!nat) {
    return {
      title: "Nationality Not Found | Expats Argentina",
    };
  }

  return {
    title: nat.title,
    description: nat.description,
    keywords: [nat.demonym.toLowerCase(), "argentina visa", `immigration from ${nat.name}`, nat.region],
    openGraph: {
      title: nat.title,
      description: nat.description,
      type: "article",
      images: [{ url: nat.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: nat.title,
      description: nat.description,
      images: [nat.image],
    },
    alternates: {
      canonical: `https://expatsargentina.com/nationality/${nat.slug}`,
    },
  };
}

// FAQ JSON-LD
function FAQStructuredData({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const structuredData = {
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Breadcrumb JSON-LD
function BreadcrumbStructuredData({ nationality }: { nationality: typeof nationalities[0] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
      { "@type": "ListItem", position: 2, name: "Nationalities", item: "https://expatsargentina.com/nationality" },
      { "@type": "ListItem", position: 3, name: nationality.name },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function NationalityPage({ params }: NationalityPageProps) {
  const { slug } = await params;
  const nationality = getNationalityBySlug(slug);

  if (!nationality) {
    notFound();
  }

  return (
    <>
      <FAQStructuredData faqs={nationality.faqs} />
      <BreadcrumbStructuredData nationality={nationality} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/nationality" className="hover:text-foreground transition-colors">Nationalities</Link>
              <span>/</span>
              <span className="text-foreground">{nationality.name}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{nationality.flag}</span>
                <div>
                  <Badge className="capitalize mb-2">{nationality.region.replace("-", " ")}</Badge>
                  {nationality.visaRequirements.mercosur?.eligible && (
                    <Badge className="bg-green-500 ml-2">
                      {nationality.specialAgreements.type?.toLowerCase().includes("associate")
                        ? "Mercosur Associate"
                        : "Mercosur Member"}
                    </Badge>
                  )}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {nationality.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {nationality.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_350px] gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Special Agreements */}
              {nationality.specialAgreements.hasAgreement && (
                <section className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h2 className="text-xl font-bold">Special Agreement</h2>
                  </div>
                  <p className="font-medium mb-2">{nationality.specialAgreements.type}</p>
                  <p className="text-muted-foreground mb-4">{nationality.specialAgreements.description}</p>
                  {nationality.specialAgreements.benefits && (
                    <ul className="space-y-2">
                      {nationality.specialAgreements.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}

              {/* Visa Options */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Visa Options</h2>
                <div className="grid gap-4">
                  {/* Tourist */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">Tourist Entry</h3>
                        <Badge variant="outline">No visa required</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{nationality.visaRequirements.tourist.notes}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Duration: <strong>{nationality.visaRequirements.tourist.duration}</strong></span>
                      </div>
                      {nationality.visaRequirements.tourist.reciprocityFee && (
                        <div className="flex items-center gap-2 text-sm mt-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>Reciprocity fee: {nationality.visaRequirements.tourist.feeAmount}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Digital Nomad */}
                  {nationality.visaRequirements.digitalNomad.eligible && (
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">Digital Nomad Visa</h3>
                          <Badge>Recommended</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{nationality.visaRequirements.digitalNomad.notes}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>Income requirement: <strong>{nationality.visaRequirements.digitalNomad.incomeRequirement}</strong></span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Work Visa */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">Work Visa</h3>
                        <Badge variant={nationality.visaRequirements.work.sponsorshipRequired ? "outline" : "default"}>
                          {nationality.visaRequirements.work.sponsorshipRequired ? "Sponsorship Required" : "Simplified"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{nationality.visaRequirements.work.notes}</p>
                    </CardContent>
                  </Card>

                  {/* Mercosur */}
                  {nationality.visaRequirements.mercosur?.eligible && (
                    <Card className="border-green-500">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-green-600">Mercosur Visa</h3>
                          <Badge className="bg-green-500">Best Option</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{nationality.visaRequirements.mercosur.notes}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </section>

              {/* Documentation */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Passport Validity</p>
                        <p className="text-sm text-muted-foreground">{nationality.documents.passportValidity}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Criminal Record Check</p>
                        <p className="text-sm text-muted-foreground">
                          {nationality.documents.criminalRecord.required ? "Required" : "Not required"}
                          {nationality.documents.criminalRecord.apostille && " (with apostille)"}
                        </p>
                        {nationality.documents.criminalRecord.notes && (
                          <p className="text-xs text-muted-foreground mt-1">{nationality.documents.criminalRecord.notes}</p>
                        )}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Birth Certificate</p>
                        <p className="text-sm text-muted-foreground">
                          {nationality.documents.birthCertificate.required ? "Required" : "Not required"}
                          {nationality.documents.birthCertificate.apostille && " (with apostille)"}
                        </p>
                      </div>
                    </div>

                    {nationality.documents.additionalDocs && (
                      <>
                        <Separator />
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Additional Documents</p>
                            <ul className="text-sm text-muted-foreground mt-1">
                              {nationality.documents.additionalDocs.map((doc, index) => (
                                <li key={index}>• {doc}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </section>

              {/* Path to Residency */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Path to Residency</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Easiest Route</p>
                      <p className="font-medium text-lg">{nationality.residencyPath.easiestRoute}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-medium">{nationality.residencyPath.timeline}</p>
                    </div>
                    
                    <p className="font-medium mb-3">Steps:</p>
                    <ol className="space-y-2 mb-6">
                      {nationality.residencyPath.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>

                    <p className="font-medium mb-3">Tips:</p>
                    <ul className="space-y-2">
                      {nationality.residencyPath.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {nationality.faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <h3 className="font-semibold">{faq.question}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Related Content */}
              <RelatedForNationality nationality={nationality.slug} />
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Practical Info */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Practical Information</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Currency Exchange</p>
                    <p className="text-sm">{nationality.practicalInfo.currencyExchange}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Banking</p>
                    <p className="text-sm">{nationality.practicalInfo.banking}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tax Treaty</p>
                    <p className="text-sm">
                      {nationality.practicalInfo.taxTreaty 
                        ? `✓ Yes - ${nationality.practicalInfo.taxTreatyDetails}` 
                        : "No specific treaty"}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Dual Citizenship</p>
                    <p className="text-sm">
                      {nationality.practicalInfo.dualCitizenshipAllowed ? "✓ Allowed" : "Restrictions apply"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Community */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Community
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Population in Argentina</p>
                    <p className="font-medium">{nationality.communityInfo.populationInArgentina}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Main Locations:</p>
                    <div className="flex flex-wrap gap-1">
                      {nationality.communityInfo.mainLocations.map((location) => (
                        <Badge key={location} variant="outline" className="text-xs">{location}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Related Resources</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {nationality.relatedResources.map((resource, index) => (
                    <Link 
                      key={index} 
                      href={resource.url}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">
                            {resource.title}
                          </p>
                          <p className="text-xs text-muted-foreground">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Lucero Legal CTA */}
              <LuceroLegalCTA 
                variant="sidebar"
                title={`${nationality.demonym} Immigration Help`}
                description={`Lucero Legal has experience helping ${nationality.demonym} citizens navigate Argentine immigration. Get expert guidance on visas, residency, and citizenship.`}
              />
            </aside>
          </div>
        </div>

        {/* Navigation */}
        <div className="container px-4 md:px-6 pb-12">
          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/nationality">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                All Nationalities
              </Button>
            </Link>
            <Link href="/visas">
              <Button className="gap-2 w-full sm:w-auto">
                Explore Visa Options
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
