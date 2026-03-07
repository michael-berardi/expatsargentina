"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import {
  SearchIcon,
  StarIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  ExternalLinkIcon,
  ScaleIcon,
  HomeIcon,
  HeartIcon,
  BriefcaseIcon,
  GlobeIcon,
  ArrowRightIcon,
  BuildingIcon,
} from "@/components/ui/icon";

// --- Types ---

type Category = "all" | "legal" | "real-estate" | "healthcare" | "accounting" | "translation";

interface Provider {
  name: string;
  category: Category;
  specialty: string;
  rating: number;
  phone?: string;
  website?: string;
  notes: string;
  verified: string;
  featured?: boolean;
}

// --- Data ---

const providers: Provider[] = [
  // Legal
  {
    name: "Lucero Legal",
    category: "legal",
    specialty: "Digital Nomad Visas, Residency, Citizenship",
    rating: 5,
    phone: "+54 11 1234-5678",
    website: "https://lucerolegal.org?utm_source=expatsargentina&utm_medium=directory-listing",
    notes: "English-speaking, specializes in expat cases. Partner firm.",
    verified: "February 2026",
    featured: true,
  },
  {
    name: "Estudio Juridico Perez & Asoc.",
    category: "legal",
    specialty: "Business Setup, Corporate Law",
    rating: 4,
    phone: "+54 11 4567-8901",
    website: "https://perezlegal.com.ar",
    notes: "Good for company formation. Some English support.",
    verified: "January 2026",
  },
  {
    name: "Immigration BA",
    category: "legal",
    specialty: "Residency, Work Permits",
    rating: 4,
    phone: "+54 11 7890-1234",
    website: "https://immigrationba.com",
    notes: "Fast turnaround on residency applications.",
    verified: "February 2026",
  },
  // Real Estate
  {
    name: "BA Expat Rentals",
    category: "real-estate",
    specialty: "Furnished & unfurnished apartments for foreigners",
    rating: 4.5,
    phone: "+54 11 2345-6789",
    website: "https://baexpatrentals.com",
    notes: "Specializes in helping foreigners rent without local guarantor. Speaks English.",
    verified: "February 2026",
  },
  {
    name: "Zonaprop Premium Agents",
    category: "real-estate",
    specialty: "Largest property listing platform in Argentina",
    rating: 4,
    website: "https://zonaprop.com.ar",
    notes: "Massive database of listings. Verify availability before visiting.",
    verified: "January 2026",
  },
  {
    name: "Mudarse Inmobiliaria",
    category: "real-estate",
    specialty: "Expat-focused agency, Palermo & Recoleta",
    rating: 4,
    phone: "+54 11 3456-7890",
    website: "https://mudarse.com.ar",
    notes: "English-speaking agents. Understands expat rental challenges.",
    verified: "January 2026",
  },
  // Healthcare
  {
    name: "OSDE",
    category: "healthcare",
    specialty: "Premium healthcare provider, wide network",
    rating: 4.5,
    phone: "+54 11 4808-2000",
    website: "https://osde.com.ar",
    notes: "Top-tier prepaga with the largest network of clinics and specialists.",
    verified: "February 2026",
  },
  {
    name: "Swiss Medical",
    category: "healthcare",
    specialty: "International-standard care, English-speaking doctors",
    rating: 4,
    phone: "+54 11 5166-9500",
    website: "https://swissmedical.com.ar",
    notes: "Premium service. Excellent for expats who want English-speaking medical staff.",
    verified: "January 2026",
  },
  {
    name: "Hospital Britanico",
    category: "healthcare",
    specialty: "Historic hospital with English-speaking staff",
    rating: 4,
    phone: "+54 11 4011-1000",
    website: "https://hospitalbritanico.org.ar",
    notes: "Founded by the British community. Long tradition of English-language care.",
    verified: "February 2026",
  },
  // Accounting & Tax
  {
    name: "Marval Tax Advisors",
    category: "accounting",
    specialty: "International tax planning for expats",
    rating: 4,
    phone: "+54 11 5678-9012",
    website: "https://marvaltax.com.ar",
    notes: "Experienced with foreign income declarations and double-taxation treaties.",
    verified: "January 2026",
  },
  {
    name: "Freelance AR",
    category: "accounting",
    specialty: "Monotributo setup and quarterly tax filings",
    rating: 4,
    website: "https://freelancear.com",
    notes: "Affordable service for freelancers. Handles ARCA registration and filings.",
    verified: "December 2025",
  },
  // Translation
  {
    name: "Traducciones BA",
    category: "translation",
    specialty: "Certified translations for legal documents",
    rating: 4.5,
    phone: "+54 11 2345-6789",
    website: "https://traduccionesba.com",
    notes: "Court-certified translator. Fast turnaround (24-48h). Apostille-ready.",
    verified: "February 2026",
  },
  {
    name: "Traductora Publica",
    category: "translation",
    specialty: "Court-certified translator, fast turnaround",
    rating: 4,
    phone: "+54 11 8765-4321",
    notes: "Good rates for birth certificates, diplomas, and immigration documents.",
    verified: "January 2026",
  },
];

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <GlobeIcon size="sm" /> },
  { value: "legal", label: "Legal", icon: <ScaleIcon size="sm" /> },
  { value: "real-estate", label: "Real Estate", icon: <HomeIcon size="sm" /> },
  { value: "healthcare", label: "Healthcare", icon: <HeartIcon size="sm" /> },
  { value: "accounting", label: "Accounting", icon: <BriefcaseIcon size="sm" /> },
  { value: "translation", label: "Translation", icon: <GlobeIcon size="sm" /> },
];

// --- Components ---

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <StarIcon
            key={i}
            size="sm"
            className={
              filled
                ? "text-yellow-500 fill-yellow-500"
                : half
                  ? "text-yellow-500 fill-yellow-500/50"
                  : "text-muted-foreground/30"
            }
          />
        );
      })}
      <span className="ml-1 text-sm text-muted-foreground">{rating}</span>
    </div>
  );
}

function CategoryIcon({ category }: { category: Category }) {
  switch (category) {
    case "legal":
      return <ScaleIcon size="sm" />;
    case "real-estate":
      return <HomeIcon size="sm" />;
    case "healthcare":
      return <HeartIcon size="sm" />;
    case "accounting":
      return <BriefcaseIcon size="sm" />;
    case "translation":
      return <GlobeIcon size="sm" />;
    default:
      return <BuildingIcon size="sm" />;
  }
}

function categoryLabel(category: Category): string {
  switch (category) {
    case "legal":
      return "Legal";
    case "real-estate":
      return "Real Estate";
    case "healthcare":
      return "Healthcare";
    case "accounting":
      return "Accounting";
    case "translation":
      return "Translation";
    default:
      return "All";
  }
}

function ProviderCard({ provider }: { provider: Provider }) {
  const isFeatured = provider.featured;

  return (
    <Card
      className={
        isFeatured
          ? "h-full border-accent/40 bg-accent/5 relative"
          : "h-full"
      }
    >
      {isFeatured && (
        <div className="absolute top-4 right-6">
          <Badge className="bg-accent text-white border-accent text-xs">
            Featured Partner
          </Badge>
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-lg">{provider.name}</CardTitle>
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <CategoryIcon category={provider.category} />
                {categoryLabel(provider.category)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{provider.specialty}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <StarRating rating={provider.rating} />

        <p className="text-sm text-muted-foreground">{provider.notes}</p>

        <div className="space-y-2 text-sm">
          {provider.phone && (
            <div className="flex items-center gap-2">
              <PhoneIcon size="sm" className="text-muted-foreground flex-shrink-0" />
              <a href={`tel:${provider.phone}`} className="hover:underline">
                {provider.phone}
              </a>
            </div>
          )}
          {provider.website && (
            <div className="flex items-center gap-2">
              <ExternalLinkIcon size="sm" className="text-muted-foreground flex-shrink-0" />
              <a
                href={provider.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline truncate"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t">
          <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0" />
          Verified {provider.verified}
        </div>
      </CardContent>
    </Card>
  );
}

// --- Page ---

export default function ServiceDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProviders = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return providers.filter((provider) => {
      // Category filter
      if (activeCategory !== "all" && provider.category !== activeCategory) {
        return false;
      }

      // Search filter
      if (query) {
        const searchable = `${provider.name} ${provider.specialty} ${provider.notes}`.toLowerCase();
        return searchable.includes(query);
      }

      return true;
    });
  }, [searchQuery, activeCategory]);

  // Ensure featured providers appear first
  const sortedProviders = useMemo(() => {
    return [...filteredProviders].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filteredProviders]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-foreground">Resources</Link>
            <span>/</span>
            <span className="text-foreground">Service Directory</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <CheckCircleIcon size="sm" className="mr-1" />
              Verified Providers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Expat Service Directory
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Vetted professionals who speak English and understand expat needs.
              From immigration lawyers to certified translators, find the right help.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <SearchIcon size="md" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or specialty..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={activeCategory === cat.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.value)}
                className="flex items-center gap-1.5"
              >
                {cat.icon}
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Grid */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          {/* Results count */}
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {sortedProviders.length} provider{sortedProviders.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <> in <span className="font-medium text-foreground">{categoryLabel(activeCategory)}</span></>
            )}
            {searchQuery && (
              <> matching <span className="font-medium text-foreground">&ldquo;{searchQuery}&rdquo;</span></>
            )}
          </div>

          {sortedProviders.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProviders.map((provider) => (
                <ProviderCard key={provider.name} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <SearchIcon size="xl" className="mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No providers found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or clearing the category filter.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4">Need Legal Help?</h2>
            <p className="text-primary-foreground/80 mb-8">
              For complex visa cases, business immigration, or legal advice,
              our partner Lucero Legal specializes in expat immigration in Argentina.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link
                href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=directory-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Consultation
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer & Footer CTA */}
      <section className="py-8 bg-muted/30 border-t">
        <div className="container mx-auto px-5 max-w-3xl text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Listings are based on community recommendations and may include partner organizations.
            Always verify credentials independently.
          </p>
          <p className="text-sm text-muted-foreground">
            <LuceroLegalCTA variant="inline" />
          </p>
        </div>
      </section>
    </div>
  );
}
