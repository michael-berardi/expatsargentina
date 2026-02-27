import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUpIcon,
  DollarSignIcon,
  GlobeIcon,
  ArrowRightIcon,
  BuildingIcon,
  WineIcon,
  MapIcon,
  ZapIcon,
  WifiIcon,
  PlaneIcon,
  StarIcon,
  ShieldIcon,
  ClockIcon,
  BriefcaseIcon,
} from "@/components/ui/icon";
import { investmentSectors } from "@/lib/data/investments";

export const metadata: Metadata = {
  title: "Investment Opportunities in Argentina | Expats Argentina",
  description:
    "Discover investment opportunities in Argentina: real estate, agriculture, mining, energy, technology, and tourism. Updated 2025 data on Milei reforms, RIGI incentives, and market conditions.",
  keywords: [
    "invest in Argentina",
    "Argentina investment opportunities",
    "Argentina real estate investment",
    "Milei reforms investment",
    "RIGI Argentina",
    "Argentina investment visa",
    "Vaca Muerta investment",
    "Argentina lithium mining",
    "expat investors Argentina",
  ],
  openGraph: {
    title: "Investment Opportunities in Argentina",
    description:
      "Comprehensive guide to investing in Argentina's key sectors: real estate, agriculture, mining, energy, technology, and tourism. Updated for 2025 economic reforms.",
    images: [{ url: "/images/hero-argentina.webp", width: 1920, height: 550 }],
  },
  alternates: { canonical: "https://expatsargentina.com/investments" },
};

const sectorIcons: Record<string, React.ElementType> = {
  "real-estate": BuildingIcon,
  agriculture: WineIcon,
  mining: MapIcon,
  energy: ZapIcon,
  technology: WifiIcon,
  tourism: PlaneIcon,
};

const riskColors: Record<string, string> = {
  Low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  High: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Variable: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
};

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Investments</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-emerald-950/20 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/90 via-white/80 to-white dark:from-emerald-950/90 dark:via-background/80 dark:to-background" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <TrendingUpIcon size="sm" className="mr-1" />
              Updated for 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Investment Opportunities in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              From real estate and agriculture to lithium mining and tech startups — 
              discover what investors are doing in Argentina&apos;s evolving economy.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              Updated analysis of the Milei reforms, RIGI incentives, and emerging 
              opportunities across six key sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="#sectors">
                  Explore Sectors
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/visas/investment">
                  <BriefcaseIcon size="sm" className="mr-2" />
                  Investment Visa
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Context Banner */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <StarIcon size="lg" className="text-emerald-600" />
              <h2 className="text-2xl font-bold">The Milei Economic Reform Context</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Since taking office in December 2023, President Javier Milei&apos;s government 
                  has implemented significant economic reforms affecting the investment landscape:
                </p>
                <ul className="space-y-2">
                  {[
                    "Inflation reduced from 211% (2023) to 117% (2024)",
                    "Foreign land ownership restrictions revoked (Dec 2023)",
                    "RIGI program: 25% corporate tax for 30 years",
                    "Capital controls partially lifted (April 2025)",
                    "Full capital control elimination planned by end of 2025",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <ShieldIcon size="sm" className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ClockIcon size="md" className="text-emerald-600" />
                    What Investors Are Watching
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The full impact of Milei&apos;s reforms is still unfolding. Key developments 
                    to monitor:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-medium">Q2 2025:</span>
                      <span>Capital control elimination timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-medium">Ongoing:</span>
                      <span>RIGI large investment applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-medium">2025:</span>
                      <span>Provincial tax harmonization efforts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Sectors Grid */}
      <section id="sectors" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <GlobeIcon size="sm" className="mr-1" />
              Six Key Sectors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where Investors Are Focusing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each sector offers distinct risk-return profiles, regional variations, 
              and regulatory considerations. Explore detailed guides for each opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {investmentSectors.map((sector) => {
              const Icon = sectorIcons[sector.slug] || TrendingUpIcon;
              return (
                <Link
                  key={sector.slug}
                  href={`/investments/${sector.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-emerald-500/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Icon size="lg" className="text-emerald-600 mb-2" />
                        <Badge className={riskColors[sector.riskLevel]}>
                          {sector.riskLevel} Risk
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                        {sector.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {sector.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground text-xs">Min. Investment</div>
                          <div className="font-medium">{sector.minInvestment}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs">Time to Return</div>
                          <div className="font-medium">{sector.timeToReturn}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 pt-2">
                        <span>Explore opportunities</span>
                        <ArrowRightIcon
                          size="sm"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RIGI Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <StarIcon size="sm" className="mr-1" />
                Government Incentive
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                RIGI: Large Investment Incentive Regime
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Argentina&apos;s new program offers significant benefits for investments 
                over $200 million USD in priority sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { label: "Corporate Tax Rate", value: "25% for 30 years (vs. standard 35%)" },
                      { label: "Tax Stability", value: "Protection from new taxes for 30 years" },
                      { label: "Customs", value: "Streamlined import/export procedures" },
                      { label: "Dividends", value: "Zero withholding tax on foreign dividends" },
                    ].map((item) => (
                      <li key={item.label} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-right">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Eligible Sectors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Energy (oil, gas, renewables, mining)",
                      "Infrastructure & logistics",
                      "Technology & innovation",
                      "Forestry & agro-industry",
                      "Industrial manufacturing",
                      "Tourism (large projects)",
                    ].map((sector) => (
                      <li key={sector} className="flex items-center gap-2 text-sm">
                        <ShieldIcon size="sm" className="text-emerald-600" />
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Note: RIGI applications require significant legal and financial structuring. 
                Consult specialized Argentine legal counsel for eligibility assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center">
                      <GlobeIcon size="xl" className="text-slate-600" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge variant="secondary" className="mb-4">
                      Legal Partner
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">
                      Navigating Argentine Investment Law?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      From due diligence and contract review to residency applications and tax 
                      structuring, our legal partner specializes in helping international investors 
                      navigate Argentina&apos;s regulatory landscape with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button asChild variant="outline">
                        <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer">
                          <ArrowRightIcon size="sm" className="mr-2" />
                          Consult Lucero Legal
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

      {/* Investment Visa CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-background">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <Badge variant="secondary" className="mb-4">
                      <BriefcaseIcon size="sm" className="mr-1" />
                      Residency Pathway
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">
                      Investment Visa for Argentina
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Invest approximately $150,000 USD in real estate, business, 
                      or strategic sectors and obtain temporary residency leading 
                      to permanent residency and citizenship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button asChild>
                        <Link href="/visas/investment">
                          Learn About Investment Visa
                          <ArrowRightIcon size="sm" className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <DollarSignIcon size="xl" className="text-emerald-600" />
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclaimer:</strong> The information provided is for educational purposes only 
              and does not constitute investment advice. Argentina&apos;s economic and political 
              environment involves significant risks. Consult qualified legal, tax, and financial 
              professionals before making investment decisions. Investment values can fluctuate, 
              and past performance does not guarantee future results.
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Legal services for international investors provided by{" "}
              <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                Lucero Legal
              </Link>
              {" "}— specializing in investment structuring, residency visas, and regulatory compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
