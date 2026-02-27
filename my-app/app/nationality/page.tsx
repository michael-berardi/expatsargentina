import type { Metadata } from "next";
import Link from "next/link";
import { nationalities, getAllRegions } from "@/lib/data/nationalities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Immigration by Nationality | Expats Argentina",
  description: "Country-specific immigration guidance for moving to Argentina. Visa requirements, special agreements, and pathways by nationality.",
  keywords: ["argentina visa by country", "immigration requirements", "nationality guide", "mercosur visa"],
  openGraph: {
    title: "Immigration by Nationality | Expats Argentina",
    description: "Find visa requirements and pathways to Argentina based on your citizenship.",
    type: "website",
  },
  alternates: {
    canonical: "https://expatsargentina.com/nationality",
  },
};

// JSON-LD structured data
function NationalitiesStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Immigration by Nationality",
    description: "Country-specific immigration guidance for moving to Argentina.",
    url: "https://expatsargentina.com/nationality",
    publisher: {
      "@type": "Organization",
      name: "Expats Argentina",
      url: "https://expatsargentina.com",
    },
    itemListElement: nationalities.map((nat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://expatsargentina.com/nationality/${nat.slug}`,
      name: nat.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function NationalitiesPage() {
  const regions = getAllRegions();
  const mercosurNats = nationalities.filter(n => n.visaRequirements.mercosur?.eligible);

  return (
    <>
      <NationalitiesStructuredData />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <Globe className="h-3 w-3 mr-1" />
                Global Guidance
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Immigration by Nationality
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Find visa requirements, special agreements, and immigration pathways 
                specific to your citizenship. From Mercosur benefits to Working Holiday agreements.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {regions.map((region) => (
                  <Link key={region.slug} href={`#${region.slug}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      {region.name} ({region.count})
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mercosur Highlight */}
        <section className="py-12 bg-green-50 dark:bg-green-950/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold">Mercosur Benefits</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Citizens of Mercosur countries (and associates like Spain, Italy) enjoy 
                simplified residency - 2-year temporary residency with work authorization 
                and a path to citizenship.
              </p>
              <div className="flex flex-wrap gap-2">
                {mercosurNats.map((nat) => (
                  <Link key={nat.slug} href={`/nationality/${nat.slug}`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-green-100">
                      {nat.flag} {nat.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nationalities Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {nationalities.map((nationality) => (
                <Card key={nationality.slug} className="group flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{nationality.flag}</span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <Badge variant="outline" className="capitalize text-xs">
                          {nationality.region.replace("-", " ")}
                        </Badge>
                        {nationality.visaRequirements.mercosur?.eligible && (
                          <Badge className="bg-green-500 text-xs">Mercosur</Badge>
                        )}
                        {nationality.specialAgreements.hasAgreement && (
                          <Badge variant="secondary" className="text-xs">
                            {nationality.specialAgreements.type?.split(" ")[0]}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Link href={`/nationality/${nationality.slug}`}>
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {nationality.name}
                      </h2>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {nationality.demonym} Citizens
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {nationality.subtitle}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Tourist Stay:</span>
                        <span className="font-medium">{nationality.visaRequirements.tourist.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Digital Nomad:</span>
                        <span className={nationality.visaRequirements.digitalNomad.eligible ? "text-green-600" : "text-muted-foreground"}>
                          {nationality.visaRequirements.digitalNomad.eligible ? "✓ Available" : "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Community:</span>
                        <span className="font-medium text-xs">{nationality.communityInfo.populationInArgentina}</span>
                      </div>
                    </div>

                    <Link href={`/nationality/${nationality.slug}`}>
                      <Button variant="ghost" size="sm" className="w-full gap-1 group/btn">
                        View Requirements
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Don't See Your Country?</h2>
              <p className="text-muted-foreground mb-6">
                Immigration rules apply broadly by region. Contact us for personalized 
                guidance specific to your nationality and situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/visas">
                  <Button size="lg">Explore All Visas</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Get Personalized Advice</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
