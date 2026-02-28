import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityBySlug } from "@/lib/data/argentina";
import { cityServices, getServiceBySlug } from "@/lib/data/city-services";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, MapPin, Clock, DollarSign, 
  FileText, CheckCircle, ExternalLink,
  Phone, Mail, Globe
} from "lucide-react";

interface CityServicePageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

// Define which city + service combinations to generate
// This creates our PSEO matrix for local services
// EXPANDED: All 20 cities with comprehensive service coverage = 150+ pages
const MATRIX_COMBINATIONS = [
  // Buenos Aires - all 10 services (expat hub)
  { city: "buenos-aires", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "coworking", "accountants", "grocery-stores", "gym-fitness"] },
  // Mendoza - 9 services (wine/expat hub)
  { city: "mendoza", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "coworking", "accountants", "gym-fitness"] },
  // Córdoba - 9 services (major city)
  { city: "cordoba", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "coworking", "accountants", "gym-fitness"] },
  // Rosario - 8 services
  { city: "rosario", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "coworking", "accountants"] },
  // Mar del Plata - 7 services (coastal)
  { city: "mar-del-plata", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "gym-fitness"] },
  // Bariloche - 8 services (Patagonia/tourism)
  { city: "bariloche", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "coworking", "accountants"] },
  // Salta - 7 services (northwest)
  { city: "salta", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "accountants"] },
  // Ushuaia - 6 services (southernmost)
  { city: "ushuaia", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // La Plata - 7 services
  { city: "la-plata", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools", "accountants"] },
  // San Miguel de Tucumán - 6 services
  { city: "tucuman", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // Puerto Iguazú - 6 services (tourist hub)
  { city: "puerto-iguazu", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // El Calafate - 6 services (Patagonia)
  { city: "el-calafate", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // San Juan - 6 services (wine region)
  { city: "san-juan", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // Neuquén - 6 services (Patagonia gateway)
  { city: "neuquen", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // San Carlos de Bariloche (already covered above)
  // Jujuy - 5 services
  { city: "jujuy", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community"] },
  // Santa Fe - 6 services
  { city: "santa-fe", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community", "language-schools"] },
  // Resistencia - 5 services (Chaco)
  { city: "resistencia", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community"] },
  // Corrientes - 5 services
  { city: "corrientes", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community"] },
  // Posadas - 5 services (Misiones)
  { city: "posadas", services: ["immigration-offices", "banking", "healthcare", "housing", "expat-community"] },
];

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  
  for (const combo of MATRIX_COMBINATIONS) {
    for (const service of combo.services) {
      params.push({
        city: combo.city,
        service: service,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { city, service } = await params;
  const cityData = getCityBySlug(city);
  const serviceData = getServiceBySlug(service);
  
  if (!cityData || !serviceData) {
    return {
      title: "Not Found | Expats Argentina",
    };
  }

  const title = `${serviceData.name} in ${cityData.name} | Expat Guide`;
  const description = `Find the best ${serviceData.name.toLowerCase()} in ${cityData.name}, Argentina. Locations, tips, costs, and everything expats need to know.`;

  return {
    title,
    description,
    keywords: [
      `${serviceData.slug} ${cityData.name.toLowerCase()}`,
      `${serviceData.name.toLowerCase()} in ${cityData.name}`,
      `expat ${serviceData.slug} argentina`,
      `${cityData.name.toLowerCase()} expat services`,
      `living in ${cityData.name.toLowerCase()}`
    ],
    openGraph: {
      title,
      description,
      type: "article",
    },
    alternates: {
      canonical: `https://expatsargentina.com/cities-services/${city}/${service}`,
    },
  };
}

// Generate city-specific content
function generateCitySpecificContent(service: typeof cityServices[0], city: typeof cities[0]) {
  const notes: string[] = [];
  
  // City-specific notes based on service type
  if (service.slug === "immigration-offices") {
    if (city.slug === "buenos-aires") {
      notes.push("Buenos Aires has the main DNM headquarters and multiple satellite offices. The central office in Retiro handles most visa applications.");
    } else {
      notes.push(`${city.name} has a local migraciones office. For complex cases, you may need to visit the main office in Buenos Aires.`);
    }
  }
  
  if (service.slug === "healthcare") {
    if (city.slug === "buenos-aires") {
      notes.push("Buenos Aires has Argentina's best healthcare infrastructure with numerous private hospitals and English-speaking doctors.");
    } else if (["mendoza", "cordoba", "rosario"].includes(city.slug)) {
      notes.push(`${city.name} has good private healthcare options, though fewer English-speaking doctors than Buenos Aires.`);
    } else {
      notes.push(`${city.name} has basic healthcare services. For specialized care, you may need to travel to a larger city.`);
    }
  }
  
  if (service.slug === "coworking") {
    if (city.slug === "buenos-aires") {
      notes.push("Buenos Aires has the most developed coworking scene in Latin America with international chains and local options.");
    } else if (["mendoza", "cordoba"].includes(city.slug)) {
      notes.push(`${city.name} has growing coworking options, popular with remote workers and digital nomads.`);
    } else {
      notes.push(`Coworking options in ${city.name} are limited. Cafes with WiFi are alternatives for light work.`);
    }
  }
  
  if (service.slug === "expat-community") {
    if (city.slug === "buenos-aires") {
      notes.push("Buenos Aires has Argentina's largest and most active expat community with regular meetups and events.");
    } else {
      notes.push(`The expat community in ${city.name} is smaller but welcoming. Facebook groups are the best way to connect.`);
    }
  }
  
  if (service.slug === "housing") {
    if (city.slug === "buenos-aires") {
      notes.push("Buenos Aires has the most competitive rental market. Prices vary significantly by neighborhood - Palermo and Recoleta are most expensive.");
    } else {
      notes.push(`Rental prices in ${city.name} are significantly lower than Buenos Aires. More inventory available in local peso contracts.`);
    }
  }
  
  if (service.slug === "language-schools") {
    if (city.slug === "buenos-aires") {
      notes.push("Buenos Aires has the widest selection of Spanish schools with options for every budget and schedule.");
    } else {
      notes.push(`${city.name} has fewer language schools but often with more personalized attention and lower prices.`);
    }
  }

  return { notes };
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { city, service } = await params;
  const cityData = getCityBySlug(city);
  const serviceData = getServiceBySlug(service);

  if (!cityData || !serviceData) {
    notFound();
  }

  const specificContent = generateCitySpecificContent(serviceData, cityData);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-foreground transition-colors">Cities</Link>
            <span>/</span>
            <Link href={`/cities/${city}`} className="hover:text-foreground transition-colors">{cityData.name}</Link>
            <span>/</span>
            <span className="text-foreground">{serviceData.name}</span>
          </nav>

          <div className="max-w-4xl">
            <Badge className="mb-4">{cityData.name}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {serviceData.name} in {cityData.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to know about {serviceData.name.toLowerCase()} as an expat in {cityData.name}. 
              Locations, tips, costs, and local insights.
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
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {serviceData.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {serviceData.whatToExpect}
              </p>
              
              {specificContent.notes.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 mt-4">
                  <p className="font-medium text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Specific to {cityData.name}:
                  </p>
                  <ul className="mt-2 space-y-1">
                    {specificContent.notes.map((note, i) => (
                      <li key={i} className="text-sm text-blue-700 dark:text-blue-300">
                        • {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <Separator />

            {/* Top Providers */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Recommended Providers</h2>
              <div className="space-y-4">
                {serviceData.topProviders.map((provider, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{provider.name}</h3>
                          {provider.address && (
                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3" />
                              {provider.address}
                            </p>
                          )}
                          {provider.notes && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {provider.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator />

            {/* Tips */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tips for Expats</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {serviceData.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Costs */}
            {serviceData.costs && (
              <>
                <section>
                  <h2 className="text-2xl font-bold mb-4">Costs</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <p className="text-lg font-medium">{serviceData.costs}</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                <Separator />
              </>
            )}

            {/* Documents */}
            {serviceData.documentsNeeded.length > 0 && (
              <>
                <section>
                  <h2 className="text-2xl font-bold mb-4">Documents Needed</h2>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-2">
                        {serviceData.documentsNeeded.map((doc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </section>
                <Separator />
              </>
            )}

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {serviceData.faqs.map((faq, i) => (
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
                <h3 className="font-semibold">Quick Info</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Service</p>
                  <p className="font-medium">{serviceData.name}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">City</p>
                  <p className="font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {cityData.name}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Category</p>
                  <p className="font-medium capitalize">{serviceData.category.replace("-", " ")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Other Services in This City */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Other Services in {cityData.name}</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {cityServices
                  .filter(s => s.slug !== service)
                  .slice(0, 6)
                  .map(s => (
                    <Link 
                      key={s.slug}
                      href={`/cities-services/${city}/${s.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <span>{s.name}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
              </CardContent>
            </Card>

            {/* Same Service in Other Cities */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">{serviceData.name} in Other Cities</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {cities
                  .filter(c => c.slug !== city)
                  .slice(0, 5)
                  .map(c => (
                    <Link 
                      key={c.slug}
                      href={`/cities-services/${c.slug}/${service}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <span>{c.name}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </Link>
                  ))}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Get personalized guidance for {serviceData.name.toLowerCase()} in {cityData.name}.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      {/* Navigation */}
      <div className="container px-4 md:px-6 pb-12">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link href={`/cities/${city}`}>
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" />
              Back to {cityData.name}
            </Button>
          </Link>
          <Link href="/cities">
            <Button className="gap-2 w-full sm:w-auto">
              All Cities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
