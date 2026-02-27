import type { Metadata } from "next";
import Link from "next/link";
import { professions, getAllCategories } from "@/lib/data/professions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, Palette, Briefcase, GraduationCap, 
  BarChart, Rocket, Languages, ArrowRight, Users 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Immigration by Profession | Expats Argentina",
  description: "Visa guidance and career resources for professionals moving to Argentina. Software developers, designers, teachers, entrepreneurs and more.",
  keywords: ["work in argentina", "profession visa", "developer visa", "teacher argentina", "remote work argentina"],
  openGraph: {
    title: "Immigration by Profession | Expats Argentina",
    description: "Career-specific immigration guidance for professionals moving to Argentina.",
    type: "website",
  },
  alternates: {
    canonical: "https://expatsargentina.com/profession",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Palette,
  Briefcase,
  GraduationCap,
  BarChart,
  Rocket,
  Languages,
};

// JSON-LD structured data
function ProfessionsStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Immigration by Profession",
    description: "Career-specific immigration guidance for professionals moving to Argentina.",
    url: "https://expatsargentina.com/profession",
    publisher: {
      "@type": "Organization",
      name: "Expats Argentina",
      url: "https://expatsargentina.com",
    },
    itemListElement: professions.map((prof, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://expatsargentina.com/profession/${prof.slug}`,
      name: prof.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ProfessionsPage() {
  const categories = getAllCategories();

  return (
    <>
      <ProfessionsStructuredData />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <Users className="h-3 w-3 mr-1" />
                Career Resources
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Immigration by Profession
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Career-specific guidance for professionals moving to Argentina. 
                Find visa pathways, salary expectations, and industry insights 
                tailored to your field.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Link key={category.slug} href={`#${category.slug}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      {category.name} ({category.count})
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professions Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {professions.map((profession) => {
                const IconComponent = iconMap[profession.icon] || Briefcase;
                
                return (
                  <Card key={profession.slug} className="group flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="capitalize text-xs">
                          {profession.category}
                        </Badge>
                      </div>
                      <Link href={`/profession/${profession.slug}`}>
                        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {profession.name}
                        </h2>
                      </Link>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {profession.subtitle}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Visa Options:</span>
                          <span className="font-medium">{profession.visaOptions.length}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Income:</span>
                          <span className="font-medium">{profession.incomeRequirements.amount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Remote:</span>
                          <span className={profession.remoteWork.feasible ? "text-green-600" : "text-amber-600"}>
                            {profession.remoteWork.feasible ? "✓ Suitable" : "Limited"}
                          </span>
                        </div>
                      </div>

                      <Link href={`/profession/${profession.slug}`}>
                        <Button variant="ghost" size="sm" className="w-full gap-1 group/btn">
                          View Guide
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Don't See Your Profession?</h2>
              <p className="text-muted-foreground mb-6">
                Every profession has a pathway to Argentina. Contact us for personalized 
                guidance tailored to your specific career and situation.
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
