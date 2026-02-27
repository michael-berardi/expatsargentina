import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { professions, getProfessionBySlug, getRelatedProfessions } from "@/lib/data/professions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, CheckCircle, AlertCircle, Clock, 
  DollarSign, MapPin, Briefcase, ExternalLink,
  Code, Palette, GraduationCap, BarChart, Rocket, Languages,
  Plane, Building2, Users, Sparkles, MessageCircle
} from "lucide-react";

interface ProfessionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return professions.map((prof) => ({
    slug: prof.slug,
  }));
}

export async function generateMetadata({ params }: ProfessionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const prof = getProfessionBySlug(slug);
  
  if (!prof) {
    return {
      title: "Profession Not Found | Expats Argentina",
    };
  }

  return {
    title: `${prof.title} | Expats Argentina`,
    description: prof.description,
    keywords: [prof.name.toLowerCase(), "argentina visa", "work in argentina", prof.category],
    openGraph: {
      title: prof.title,
      description: prof.description,
      type: "article",
    },
    alternates: {
      canonical: `https://expatsargentina.com/profession/${prof.slug}`,
    },
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Palette,
  Briefcase,
  GraduationCap,
  BarChart,
  Rocket,
  Languages,
};

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
function BreadcrumbStructuredData({ profession }: { profession: typeof professions[0] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
      { "@type": "ListItem", position: 2, name: "Professions", item: "https://expatsargentina.com/profession" },
      { "@type": "ListItem", position: 3, name: profession.name },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function ProfessionPage({ params }: ProfessionPageProps) {
  const { slug } = await params;
  const profession = getProfessionBySlug(slug);

  if (!profession) {
    notFound();
  }

  const relatedProfessions = getRelatedProfessions(slug);
  const IconComponent = iconMap[profession.icon] || Briefcase;

  return (
    <>
      <FAQStructuredData faqs={profession.faqs} />
      <BreadcrumbStructuredData profession={profession} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/profession" className="hover:text-foreground transition-colors">Professions</Link>
              <span>/</span>
              <span className="text-foreground">{profession.name}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <Badge className="capitalize">{profession.category}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {profession.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                {profession.subtitle}
              </p>
              <p className="text-base text-muted-foreground">
                {profession.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-10">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Visa Options */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Visa Options</h2>
                <div className="grid gap-4">
                  {profession.visaOptions.map((visa, index) => {
                    const VisaIcon = visa.name.includes("Digital") ? Plane : visa.name.includes("Investment") ? Building2 : Users;
                    return (
                    <Card key={index} className={index === 0 ? "border-green-200 shadow-sm" : ""}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <VisaIcon className="h-5 w-5 text-primary" />
                              <h3 className="text-lg font-semibold">{visa.name}</h3>
                              <Badge 
                        variant={visa.difficulty === "Easy" ? "default" : visa.difficulty === "Moderate" ? "secondary" : "destructive"}
                        className={visa.difficulty === "Easy" ? "bg-green-600 hover:bg-green-700" : visa.difficulty === "Moderate" ? "bg-amber-500 hover:bg-amber-600 text-white" : "bg-red-500 hover:bg-red-600"}
                      >
                        {visa.difficulty}
                      </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{visa.description}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{visa.timeline}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )})}
                </div>
              </section>

              {/* Work Permit Requirements */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {profession.workPermitRequirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Income Requirements */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Income Requirements</h2>
                <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
                        <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">Minimum Income Required</p>
                        <p className="text-3xl font-bold text-green-700 dark:text-green-400">{profession.incomeRequirements.amount}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{profession.incomeRequirements.description}</p>
                    {profession.incomeRequirements.notes && (
                      <div className="mt-4 p-3 bg-green-100/50 dark:bg-green-900/30 rounded-lg">
                        <p className="text-sm text-green-800 dark:text-green-300 font-medium">💡 {profession.incomeRequirements.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </section>

              {/* Remote Work */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Remote Work Feasibility</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {profession.remoteWork.feasible ? (
                        <Badge className="bg-green-500 text-white font-semibold px-3 py-1">
                          <Sparkles className="h-3.5 w-3.5 mr-1" />
                          Highly Feasible for Remote Work
                        </Badge>
                      ) : (
                        <Badge variant="outline">Limited Remote Options</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{profession.remoteWork.description}</p>
                    <div className="space-y-2">
                      <p className="font-medium">Key Considerations:</p>
                      <ul className="space-y-2">
                        {profession.remoteWork.considerations.map((consideration, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary">•</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Local Job Market */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Local Job Market</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Demand Level</p>
                        <Badge className={profession.localJobMarket.demand === "High" ? "bg-green-500" : profession.localJobMarket.demand === "Medium" ? "bg-amber-500" : ""}>
                          {profession.localJobMarket.demand}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Average Salary</p>
                        <p className="font-medium">{profession.localJobMarket.averageSalary}</p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Key Cities:</p>
                        <div className="flex flex-wrap gap-2">
                          {profession.localJobMarket.keyCities.map((city) => (
                            <Badge key={city} variant="outline">{city}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Industries:</p>
                        <div className="flex flex-wrap gap-2">
                          {profession.localJobMarket.industries.map((industry) => (
                            <Badge key={industry} variant="secondary">{industry}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Tax Considerations */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Tax Considerations</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {profession.taxConsiderations.map((tax, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{tax}</span>
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
                  {profession.faqs.map((faq, index) => (
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
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Related Resources</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profession.resources.map((resource, index) => (
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

              {/* Networking Tips */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Networking Tips</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {profession.networkingTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Related Professions */}
              {relatedProfessions.length > 0 && (
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">Related Professions</h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {relatedProfessions.map((related) => (
                      <Link 
                        key={related.slug}
                        href={`/profession/${related.slug}`}
                        className="block p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <p className="font-medium text-sm">{related.name}</p>
                        <p className="text-xs text-muted-foreground">{related.category}</p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* CTA - Enhanced for Lucero Legal Lead Gen */}
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Need Personalized Visa Advice?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a free consultation with Lucero Legal. Expert guidance for your {profession.name.toLowerCase()} visa pathway.
                  </p>
                  <div className="space-y-2">
                    <Link href="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90 font-semibold">
                        Get Free Consultation
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      ✓ Free 15-min call • ✓ Expert attorneys • ✓ 500+ successful cases
                    </p>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>

        {/* Navigation */}
        <div className="container px-4 md:px-6 pb-12">
          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/profession">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                All Professions
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
