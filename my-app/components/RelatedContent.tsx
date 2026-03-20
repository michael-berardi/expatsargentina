import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, MapPin, Building, Scale, Globe } from "lucide-react";

interface RelatedItem {
  title: string;
  href: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
  variant?: "card" | "list" | "compact";
}

export function RelatedContent({ 
  title = "You might also like", 
  items,
  variant = "card" 
}: RelatedContentProps) {
  if (items.length === 0) return null;

  if (variant === "compact") {
    return (
      <div className="border-t pt-6 mt-8">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
            >
              {item.title}
              <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="border-t pt-8 mt-8">
        <h3 className="font-semibold mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors">
                    {item.title}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Card variant (default)
  return (
    <Card className="mt-8">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <div>
              <div className="font-medium group-hover:text-primary transition-colors">
                {item.title}
              </div>
              {item.description && (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

// Pre-configured related content for common page types
export function RelatedForVisa({ visaType }: { visaType: string }) {
  const relatedMap: Record<string, RelatedItem[]> = {
    "digital-nomad": [
      { title: "Cost of Living in Argentina", href: "/cost-of-living", description: "Budget breakdown for remote workers" },
      { title: "Best Cities for Digital Nomads", href: "/cities/buenos-aires", description: "Where to base yourself" },
      { title: "Internet & Coworking", href: "/remote-work", description: "Connectivity and workspaces" },
    ],
    "work": [
      { title: "Finding Jobs in Argentina", href: "/work", description: "Job market and employment tips" },
      { title: "Cost of Living", href: "/cost-of-living", description: "Salary expectations and budgets" },
      { title: "Work Culture", href: "/work/culture", description: "What to expect in Argentine offices" },
    ],
    "retirement": [
      { title: "Healthcare for Retirees", href: "/healthcare", description: "Insurance and medical care" },
      { title: "Cost of Living", href: "/cost-of-living", description: "Budget for retirement income" },
      { title: "Best Retirement Cities", href: "/cities/mendoza", description: "Mendoza, Cordoba, and more" },
    ],
  };

  const items = relatedMap[visaType] || [
    { title: "Compare All Visas", href: "/visas/compare", description: "Side-by-side comparison" },
    { title: "Cost of Living", href: "/cost-of-living", description: "Budget planning" },
    { title: "Immigration FAQ", href: "/visas/faq", description: "Common questions answered" },
  ];

  return <RelatedContent title="Next steps for your visa" items={items} />;
}

export function RelatedForCity({ citySlug }: { citySlug: string }) {
  const cityRelated: Record<string, RelatedItem[]> = {
    "buenos-aires": [
      { title: "Palermo Guide", href: "/neighborhoods/palermo", description: "The expat-friendly heart of BA" },
      { title: "San Telmo Guide", href: "/neighborhoods/san-telmo", description: "Historic charm and culture" },
      { title: "Recoleta Guide", href: "/neighborhoods/recoleta", description: "Elegant living in BA" },
    ],
    "mendoza": [
      { title: "Wine Country Living", href: "/food", description: "Food and wine scene" },
      { title: "Cordoba — Another Option", href: "/cities/cordoba", description: "Compare with Argentina's second city" },
    ],
    "cordoba": [
      { title: "Mendoza — Wine Country", href: "/cities/mendoza", description: "Compare with Mendoza" },
      { title: "Buenos Aires Living", href: "/cities/buenos-aires", description: "The capital experience" },
    ],
    "bariloche": [
      { title: "Mendoza", href: "/cities/mendoza", description: "Another Patagonian gateway" },
      { title: "El Calafate", href: "/cities/el-calafate", description: "Glaciers and southern Patagonia" },
    ],
  };

  const specificLinks = cityRelated[citySlug] || [];
  const items: RelatedItem[] = [
    ...specificLinks,
    { title: "Cost of Living Guide", href: "/cost-of-living", description: "Compare costs across cities" },
    { title: "Neighborhood Guides", href: "/neighborhoods", description: "Find the right area for you" },
    { title: "Visa Requirements", href: "/visas", description: "Immigration options for your move" },
  ];

  return <RelatedContent title="Explore more" items={items.slice(0, 5)} />;
}

export function RelatedForNationality({ nationality, region, hasMercosur, hasDigitalNomad }: { nationality: string; region?: string; hasMercosur?: boolean; hasDigitalNomad?: boolean }) {
  const items: RelatedItem[] = [];

  // Dynamic: link to same-region nationalities
  const regionPeers: Record<string, RelatedItem[]> = {
    "north-america": [
      { title: "Americans in Argentina", href: "/nationality/united-states", description: "Visa paths and community resources" },
      { title: "Canadians in Argentina", href: "/nationality/canada", description: "Immigration and tax considerations" },
    ],
    "europe": [
      { title: "British Expats in Argentina", href: "/nationality/united-kingdom", description: "Post-Brexit visa rules" },
      { title: "Spanish Citizens Moving Here", href: "/nationality/spain", description: "Historical ties and easy pathways" },
      { title: "Italian Citizenship by Descent", href: "/nationality/italy", description: "Dual citizenship opportunities" },
    ],
    "latin-america": [
      { title: "Mercosur Residency Pathway", href: "/visas/mercosur", description: "Fast-track for Latin American citizens" },
      { title: "Brazilians in Argentina", href: "/nationality/brazil", description: "Southern neighbor community" },
    ],
    "asia": [
      { title: "Community Networks", href: "/resources", description: "Connect with other Asian expats in Buenos Aires" },
      { title: "Cultural Adjustment Guide", href: "/culture", description: "Bridging the cultural gap" },
    ],
    "oceania": [
      { title: "Working Holiday Visa", href: "/visas/working-holiday", description: "Available for Australians and New Zealanders" },
      { title: "Remote Work from Argentina", href: "/remote-work", description: "Working across time zones" },
    ],
    "africa": [
      { title: "Cost of Living Comparison", href: "/cost-of-living", description: "Purchasing power and living standards" },
      { title: "Community Resources", href: "/resources", description: "Support networks for African expats" },
    ],
  };

  // Add region-specific peers (but not the current nationality)
  const peers = regionPeers[region || ""] || [];
  for (const peer of peers) {
    if (!peer.href.includes(nationality)) {
      items.push(peer);
    }
    if (items.length >= 2) break;
  }

  // Dynamic: relevant visa type based on nationality's eligibility
  if (hasMercosur) {
    items.push({ title: "Mercosur Residency", href: "/visas/mercosur", description: "Your fastest path to legal residency" });
  } else if (hasDigitalNomad) {
    items.push({ title: "Digital Nomad Visa", href: "/visas/digital-nomad", description: "Work remotely with legal status" });
  } else {
    items.push({ title: "Compare All Visa Types", href: "/visas", description: "Find the right visa for your situation" });
  }

  // Always include practical links
  items.push({ title: "Cost of Living Guide", href: "/cost-of-living", description: "Budget planning for your move" });
  items.push({ title: "Best Neighborhoods", href: "/neighborhoods", description: "Where to live in Buenos Aires" });

  // Cross-link to cities if relevant
  if (region === "europe" || region === "north-america") {
    items.push({ title: "Cities Beyond Buenos Aires", href: "/cities/mendoza", description: "Mendoza, Cordoba, Bariloche and more" });
  }

  return <RelatedContent title={`Resources for ${nationality} expats`} items={items.slice(0, 5)} />;
}
