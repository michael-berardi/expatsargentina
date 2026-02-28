import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  TrendingUpIcon,
  MapPinIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  DollarSignIcon,
  BriefcaseIcon,
  ScaleIcon,
  LightbulbIcon,
  GlobeIcon,
} from "@/components/ui/icon";
import {
  investmentSectors,
  getSectorBySlug,
  getRelatedSectors,
} from "@/lib/data/investments";

export function generateStaticParams() {
  return investmentSectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return { title: "Investment Sector Not Found | Expats Argentina" };
  }

  return {
    title: `${sector.name} in Argentina | Investment Guide | Expats Argentina`,
    description: `${sector.description} Updated 2026 analysis of opportunities, risks, legal considerations, and regional breakdowns for ${sector.shortName.toLowerCase()} investment in Argentina.`,
    keywords: [
      `${sector.shortName.toLowerCase()} investment Argentina`,
      `invest in ${sector.shortName.toLowerCase()} Argentina`,
      `Argentina ${sector.shortName.toLowerCase()} opportunities`,
      `expat investment ${sector.shortName.toLowerCase()}`,
    ],
    openGraph: {
      title: `${sector.name} in Argentina | Investment Guide`,
      description: sector.description,
      images: [{ url: sector.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://expatsargentina.com/investments/${sector.slug}`,
    },
  };
}

const riskColors: Record<string, string> = {
  Low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  High: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Variable: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
};

export default async function InvestmentSectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  const relatedSectors = getRelatedSectors(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
      { "@type": "ListItem", position: 2, name: "Investments", item: "https://expatsargentina.com/investments" },
      { "@type": "ListItem", position: 3, name: sector.shortName, item: `https://expatsargentina.com/investments/${sector.slug}` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/investments" className="hover:text-foreground">
              Investments
            </Link>
            <span>/</span>
            <span className="text-foreground">{sector.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="secondary">
                <TrendingUpIcon size="sm" className="mr-1" />
                Investment Sector
              </Badge>
              <Badge className={riskColors[sector.riskLevel]}>
                {sector.riskLevel} Risk
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {sector.name} in Argentina
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {sector.description}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">Market Size</div>
                  <div className="font-semibold text-lg">{sector.marketSize}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">Growth Rate</div>
                  <div className="font-semibold text-lg">{sector.growthRate}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">Min. Investment</div>
                  <div className="font-semibold text-lg">{sector.minInvestment}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">Time to Return</div>
                  <div className="font-semibold text-lg">{sector.timeToReturn}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sector Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {sector.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Key Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <LightbulbIcon size="lg" className="text-emerald-600" />
              <h2 className="text-3xl font-bold">Key Investment Opportunities</h2>
            </div>

            <div className="grid gap-4">
              {sector.keyOpportunities.map((opportunity, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircleIcon size="md" className="text-emerald-600 mt-0.5 shrink-0" />
                    <span>{opportunity}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Regions */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPinIcon size="lg" className="text-emerald-600" />
              <h2 className="text-3xl font-bold">Top Regions for Investment</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {sector.topRegions.map((region) => (
                <Card key={region.slug} className="group hover:border-emerald-500/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{region.name}</span>
                      <ArrowRightIcon size="sm" className="text-muted-foreground group-hover:text-emerald-600 transition-colors" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{region.highlight}</p>
                    <Link
                      href={`/provinces/${region.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-emerald-600 mt-3 hover:underline"
                    >
                      Explore province
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Tax */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Legal Considerations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ScaleIcon size="md" className="text-emerald-600" />
                    Legal Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {sector.legalConsiderations.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertTriangleIcon size="sm" className="text-amber-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tax Incentives */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSignIcon size="md" className="text-emerald-600" />
                    Tax Incentives & Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {sector.taxIncentives.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircleIcon size="sm" className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Developments */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ClockIcon size="lg" className="text-emerald-600" />
              <h2 className="text-3xl font-bold">Recent Developments</h2>
            </div>

            <div className="space-y-4">
              {sector.recentDevelopments.map((development, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{development}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {sector.faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Sectors */}
      {relatedSectors.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Investment Sectors</h2>

              <div className="grid md:grid-cols-3 gap-4">
                {relatedSectors.map((related) => (
                  <Link key={related.slug} href={`/investments/${related.slug}`}>
                    <Card className="h-full hover:border-emerald-500/50 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-base">{related.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Investment Visa CTA */}
      <section className="py-16 bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <BriefcaseIcon size="xl" className="text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Considering Investment in {sector.shortName}?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Learn about Argentina&apos;s Investment Visa pathway, which offers 
              residency for qualifying investments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/visas/investment">
                  <BriefcaseIcon size="sm" className="mr-2" />
                  Investment Visa Guide
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/investments">
                  <ArrowRightIcon size="sm" className="mr-2" />
                  All Investment Sectors
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/20 dark:to-background border-t">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center">
                      <ScaleIcon size="xl" className="text-slate-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge variant="secondary" className="mb-4">
                      Legal Partner
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Need Legal Guidance for Your {sector.shortName} Investment?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Due diligence, contract review, tax structuring, and residency applications 
                      require specialized Argentine legal expertise. Our partner Lucero Legal 
                      has guided international investors through Argentina&apos;s regulatory 
                      landscape for over a decade.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button asChild variant="outline">
                        <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer">
                          <GlobeIcon size="sm" className="mr-2" />
                          Consult Lucero Legal
                        </Link>
                      </Button>
                      <Button asChild variant="ghost">
                        <Link href="/visas/investment">
                          <BriefcaseIcon size="sm" className="mr-2" />
                          Investment Visa Info
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclaimer:</strong> The information provided is for educational purposes only 
              and does not constitute investment advice. Argentina&apos;s economic and political 
              environment involves significant risks. Consult qualified legal, tax, and financial 
              professionals before making investment decisions. Investment values can fluctuate, 
              and past performance does not guarantee future results.
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Legal services provided by{" "}
              <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                Lucero Legal
              </Link>
              . This content is produced independently by Expats Argentina.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
