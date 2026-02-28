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

  // Shorten title if too long (max 60 chars before the suffix)
  let title = prof.title;
  if (title.length > 45) {
    title = `${prof.name} in Argentina`;
  }
  
  return {
    title: `${title} | Expats Argentina`,
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
        {/* Hero Section - Enhanced */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background py-16 md:py-20 lg:py-24">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div className="container relative px-4 md:px-6">
            {/* Breadcrumb - Enhanced */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground/40">/</span>
              <Link href="/profession" className="hover:text-primary transition-colors">Professions</Link>
              <span className="text-muted-foreground/40">/</span>
              <span className="text-foreground font-medium">{profession.name}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-primary/10">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>
                <Badge 
                  variant="secondary" 
                  className="capitalize text-sm px-4 py-1.5 font-medium bg-white/80 backdrop-blur-sm shadow-sm"
                >
                  {profession.category}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {profession.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium leading-relaxed">
                {profession.subtitle}
              </p>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full" />
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed pl-6">
                  {profession.overview}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container px-4 md:px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-14">
              {/* Visa Options */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Plane className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Visa Options</h2>
                </div>
                <div className="grid gap-5">
                  {profession.visaOptions.map((visa, index) => {
                    const VisaIcon = visa.name.includes("Digital") ? Plane : visa.name.includes("Investment") ? Building2 : Users;
                    return (
                    <Card 
                      key={index} 
                      className={index === 0 
                        ? "border-green-200/60 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-green-50/30 dark:from-background dark:to-green-950/10" 
                        : "hover:shadow-md transition-all duration-300 hover:border-primary/20"
                      }
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <div className="flex items-center gap-2">
                                <VisaIcon className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">{visa.name}</h3>
                              </div>
                              <Badge 
                                variant={visa.difficulty === "Easy" ? "default" : visa.difficulty === "Moderate" ? "secondary" : "destructive"}
                                className={visa.difficulty === "Easy" 
                                  ? "bg-green-600 hover:bg-green-700 text-white shadow-sm" 
                                  : visa.difficulty === "Moderate" 
                                    ? "bg-amber-500 hover:bg-amber-600 text-white shadow-sm" 
                                    : "bg-red-500 hover:bg-red-600 text-white shadow-sm"
                                }
                              >
                                {visa.difficulty}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{visa.description}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-full">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">{visa.timeline}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )})}
                </div>
              </section>

              {/* Work Permit Requirements */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Requirements</h2>
                </div>
                <Card className="border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <ul className="space-y-4">
                      {profession.workPermitRequirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Income Requirements - Enhanced */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Income Requirements</h2>
                </div>
                <Card className="border-green-200/60 bg-gradient-to-br from-green-50/80 to-green-50/30 dark:from-green-950/30 dark:to-green-950/10 shadow-lg overflow-hidden relative">
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
                  
                  <CardContent className="p-6 md:p-8 relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-white dark:bg-green-900/40 shadow-md">
                        <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Minimum Income Required</p>
                        <p className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 tracking-tight">{profession.incomeRequirements.amount}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{profession.incomeRequirements.description}</p>
                    {profession.incomeRequirements.notes && (
                      <div className="mt-6 p-4 bg-white/70 dark:bg-green-900/30 rounded-xl border border-green-200/50">
                        <p className="text-green-800 dark:text-green-300 font-medium flex items-start gap-2">
                          <span className="text-xl">💡</span>
                          <span>{profession.incomeRequirements.notes}</span>
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </section>

              {/* Remote Work - Enhanced */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Remote Work Feasibility</h2>
                </div>
                <Card className="hover:shadow-lg transition-all duration-300 border-purple-200/30">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      {profession.remoteWork.feasible ? (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-md">
                          <Sparkles className="h-4 w-4" />
                          Highly Feasible for Remote Work
                        </div>
                      ) : (
                        <Badge variant="outline" className="px-3 py-1.5 text-base">Limited Remote Options</Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{profession.remoteWork.description}</p>
                    <div className="space-y-3">
                      <p className="font-semibold text-foreground">Key Considerations:</p>
                      <ul className="space-y-3">
                        {profession.remoteWork.considerations.map((consideration, index) => (
                          <li key={index} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold flex-shrink-0 mt-0.5">{index + 1}</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Local Job Market - Enhanced */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Local Job Market</h2>
                </div>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="p-4 bg-muted/30 rounded-xl">
                        <p className="text-sm text-muted-foreground font-medium mb-2">Demand Level</p>
                        <Badge 
                          className={profession.localJobMarket.demand === "High" 
                            ? "bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-sm shadow-sm" 
                            : profession.localJobMarket.demand === "Medium" 
                              ? "bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 text-sm shadow-sm" 
                              : "bg-slate-400 px-3 py-1 text-sm"
                          }
                        >
                          {profession.localJobMarket.demand}
                        </Badge>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-xl">
                        <p className="text-sm text-muted-foreground font-medium mb-2">Average Salary</p>
                        <p className="font-semibold text-lg">{profession.localJobMarket.averageSalary}</p>
                      </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="space-y-5">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-3">Key Cities:</p>
                        <div className="flex flex-wrap gap-2">
                          {profession.localJobMarket.keyCities.map((city) => (
                            <Badge key={city} variant="outline" className="px-3 py-1.5 text-sm bg-white dark:bg-background hover:bg-muted transition-colors">
                              {city}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-3">Industries:</p>
                        <div className="flex flex-wrap gap-2">
                          {profession.localJobMarket.industries.map((industry) => (
                            <Badge key={industry} variant="secondary" className="px-3 py-1.5 text-sm hover:bg-secondary/80 transition-colors">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Tax Considerations - Enhanced */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tax Considerations</h2>
                </div>
                <Card className="border-amber-200/50 bg-gradient-to-br from-amber-50/30 to-orange-50/20 dark:from-amber-950/10 dark:to-orange-950/10 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <ul className="space-y-4">
                      {profession.taxConsiderations.map((tax, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors">
                            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <span className="text-muted-foreground leading-relaxed pt-1">{tax}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* FAQs - Enhanced */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <MessageCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {profession.faqs.map((faq, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300 border-l-4 border-l-indigo-300 dark:border-l-indigo-700 hover:border-l-indigo-500">
                      <CardHeader className="pb-3">
                        <h3 className="font-semibold text-lg text-foreground">{faq.question}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar - Enhanced */}
            <aside className="space-y-6 lg:sticky lg:top-6">
              {/* Quick Links - Enhanced */}
              <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Related Resources
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {profession.resources.map((resource, index) => (
                    <Link 
                      key={index} 
                      href={resource.url}
                      className="block p-3 rounded-lg hover:bg-muted/80 transition-all duration-200 group border border-transparent hover:border-primary/20"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-medium text-sm group-hover:text-primary transition-colors mb-1">
                            {resource.title}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Networking Tips - Enhanced */}
              <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Networking Tips
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {profession.networkingTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm group">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Related Professions - Enhanced */}
              {relatedProfessions.length > 0 && (
                <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Related Professions
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {relatedProfessions.map((related) => (
                      <Link 
                        key={related.slug}
                        href={`/profession/${related.slug}`}
                        className="block p-3 rounded-lg hover:bg-muted/80 transition-all duration-200 group border border-transparent hover:border-primary/20"
                      >
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{related.name}</p>
                        <p className="text-xs text-muted-foreground capitalize mt-0.5">{related.category}</p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* CTA - Enhanced for Lucero Legal Lead Gen - Premium Style */}
              <Card className="relative overflow-hidden border-0 shadow-xl">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                
                <CardContent className="relative p-8 text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-white">Need Personalized Visa Advice?</h3>
                  
                  <p className="text-sm text-white/90 mb-6 leading-relaxed">
                    Get a free consultation with Lucero Legal. Expert guidance tailored for {profession.name.toLowerCase()}s.
                  </p>
                  
                  <div className="space-y-4">
                    <Link href="/contact">
                      <Button 
                        size="lg"
                        className="w-full bg-white text-primary hover:bg-white/90 font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                      >
                        Get Free Consultation
                      </Button>
                    </Link>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5" />
                        Free 15-min call
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5" />
                        Expert attorneys
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5" />
                        500+ cases
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>

        {/* Navigation - Enhanced */}
        <div className="container px-4 md:px-6 pb-16">
          <Separator className="mb-10" />
          <div className="flex flex-col sm:flex-row justify-between gap-4 max-w-2xl mx-auto">
            <Link href="/profession">
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2 w-full sm:w-auto px-6 hover:bg-muted transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                All Professions
              </Button>
            </Link>
            <Link href="/visas">
              <Button 
                size="lg"
                className="gap-2 w-full sm:w-auto px-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore Visa Options
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
