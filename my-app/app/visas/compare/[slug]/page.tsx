import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  ArrowRightLeftIcon,
  CheckCircleIcon,
  FileTextIcon,
  GlobeIcon,
  StarIcon,
  UsersIcon,
} from "@/components/ui/icon";
import {
  getVisaComparisonBySlug,
  getAllVisaComparisonSlugs,
} from "@/lib/data/visa-comparisons";

export function generateStaticParams() {
  return getAllVisaComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getVisaComparisonBySlug(slug);

  if (!comparison) {
    return { title: "Comparison Not Found | Expats Argentina" };
  }

  return {
    title: `${comparison.title}: Which Is Right for You? | Expats Argentina`,
    description: comparison.description,
    keywords: comparison.seoKeywords,
    openGraph: {
      title: `${comparison.title}: Which Is Right for You?`,
      description: comparison.description,
      url: `https://expatsargentina.com/visas/compare/${comparison.slug}`,
    },
    alternates: {
      canonical: `https://expatsargentina.com/visas/compare/${comparison.slug}`,
    },
  };
}

function WinnerBadge({
  winner,
  visa1Name,
  visa2Name,
}: {
  winner: "visa1" | "visa2" | "tie";
  visa1Name: string;
  visa2Name: string;
}) {
  if (winner === "tie") {
    return <Badge variant="secondary">Tie</Badge>;
  }
  if (winner === "visa1") {
    return (
      <Badge className="bg-teal-600 text-white">{visa1Name} wins</Badge>
    );
  }
  return (
    <Badge className="bg-indigo-600 text-white">{visa2Name} wins</Badge>
  );
}

export default async function VisaComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getVisaComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://expatsargentina.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Visas",
        item: "https://expatsargentina.com/visas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Compare",
        item: "https://expatsargentina.com/visas/compare",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: comparison.title,
        item: `https://expatsargentina.com/visas/compare/${comparison.slug}`,
      },
    ],
  };

  // Count wins for summary
  let visa1Wins = 0;
  let visa2Wins = 0;
  let ties = 0;
  comparison.categories.forEach((cat) => {
    if (cat.winner === "visa1") visa1Wins++;
    else if (cat.winner === "visa2") visa2Wins++;
    else ties++;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">
              Visas
            </Link>
            <span>/</span>
            <Link href="/visas/compare" className="hover:text-foreground">
              Compare
            </Link>
            <span>/</span>
            <span className="text-foreground">{comparison.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <ArrowRightLeftIcon size="sm" className="mr-1" />
              Visa Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {comparison.visa1.name}
              <span className="text-muted-foreground mx-3 text-3xl md:text-4xl lg:text-5xl">
                vs
              </span>
              {comparison.visa2.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {comparison.description}
            </p>

            {/* Quick Win Summary */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">
                  {visa1Wins}
                </div>
                <div className="text-sm text-muted-foreground">
                  {comparison.visa1.name} wins
                </div>
              </div>
              {ties > 0 && (
                <>
                  <div className="text-muted-foreground text-sm">-</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-muted-foreground">
                      {ties}
                    </div>
                    <div className="text-sm text-muted-foreground">Ties</div>
                  </div>
                </>
              )}
              <div className="text-muted-foreground text-sm">-</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">
                  {visa2Wins}
                </div>
                <div className="text-sm text-muted-foreground">
                  {comparison.visa2.name} wins
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" asChild>
                <Link href={`/visas/${comparison.visa1.slug}`}>
                  <FileTextIcon size="sm" className="mr-1" />
                  {comparison.visa1.name} Guide
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/visas/${comparison.visa2.slug}`}>
                  <FileTextIcon size="sm" className="mr-1" />
                  {comparison.visa2.name} Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Grid */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <StarIcon size="lg" className="text-teal-600" />
              <h2 className="text-3xl font-bold">
                Category-by-Category Breakdown
              </h2>
            </div>

            <div className="space-y-6">
              {comparison.categories.map((category) => (
                <Card key={category.name}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center justify-between flex-wrap gap-2">
                      <span>{category.name}</span>
                      <WinnerBadge
                        winner={category.winner}
                        visa1Name={comparison.visa1.name}
                        visa2Name={comparison.visa2.name}
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Visa 1 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <FileTextIcon
                            size="sm"
                            className="text-teal-600 shrink-0"
                          />
                          <span className="font-semibold text-teal-700 dark:text-teal-400">
                            {comparison.visa1.name}
                          </span>
                          {category.winner === "visa1" && (
                            <CheckCircleIcon
                              size="sm"
                              className="text-teal-600"
                            />
                          )}
                        </div>
                        <p className="text-base md:text-sm text-muted-foreground leading-relaxed">
                          {category.visa1Detail}
                        </p>
                      </div>

                      {/* Visa 2 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <FileTextIcon
                            size="sm"
                            className="text-indigo-600 shrink-0"
                          />
                          <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                            {comparison.visa2.name}
                          </span>
                          {category.winner === "visa2" && (
                            <CheckCircleIcon
                              size="sm"
                              className="text-indigo-600"
                            />
                          )}
                        </div>
                        <p className="text-base md:text-sm text-muted-foreground leading-relaxed">
                          {category.visa2Detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <UsersIcon size="lg" className="text-teal-600" />
              <h2 className="text-3xl font-bold">
                Which Visa Is Best For You?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Visa 1 Best For */}
              <Card className="border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-700 dark:text-teal-400">
                    <FileTextIcon size="md" className="text-teal-600" />
                    {comparison.visa1.name} is best for...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {comparison.bestFor.visa1.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircleIcon
                          size="sm"
                          className="text-teal-600 mt-0.5 shrink-0"
                        />
                        <span className="text-base md:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Visa 2 Best For */}
              <Card className="border-indigo-200 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                    <FileTextIcon size="md" className="text-indigo-600" />
                    {comparison.visa2.name} is best for...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {comparison.bestFor.visa2.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircleIcon
                          size="sm"
                          className="text-indigo-600 mt-0.5 shrink-0"
                        />
                        <span className="text-base md:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-50 to-indigo-50 dark:from-teal-950/30 dark:to-indigo-950/30 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <StarIcon size="lg" className="text-primary" />
                  Our Verdict
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {comparison.verdict}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Links to Individual Visa Pages */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Explore Each Visa in Detail
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-between"
                asChild
              >
                <Link href={`/visas/${comparison.visa1.slug}`}>
                  <span className="flex items-center gap-2">
                    <FileTextIcon size="sm" className="text-teal-600" />
                    {comparison.visa1.name} Guide
                  </span>
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-between"
                asChild
              >
                <Link href={`/visas/${comparison.visa2.slug}`}>
                  <span className="flex items-center gap-2">
                    <FileTextIcon size="sm" className="text-indigo-600" />
                    {comparison.visa2.name} Guide
                  </span>
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <GlobeIcon size="xl" className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing Your Visa?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Explore all visa types, use our visa finder quiz, or browse more
              comparisons to find the perfect fit for your move to Argentina.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/visas">
                  <GlobeIcon size="sm" className="mr-2" />
                  All Visa Types
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/visas/compare">
                  <ArrowRightLeftIcon size="sm" className="mr-2" />
                  More Comparisons
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  <FileTextIcon size="sm" className="mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
