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
  return (
    <RelatedContent
      title="Explore more"
      items={[
        { title: "Cost of Living Guide", href: "/cost-of-living", description: "Compare costs across cities" },
        { title: "Food & Dining", href: "/food", description: "Where and what to eat" },
        { title: "Neighborhood Guides", href: "/neighborhoods", description: "Find the right area for you" },
        { title: "Visa Requirements", href: "/visas", description: "Immigration options" },
      ]}
    />
  );
}

export function RelatedForNationality({ nationality }: { nationality: string }) {
  return (
    <RelatedContent
      title="Helpful resources"
      items={[
        { title: "Digital Nomad Visa", href: "/visas/digital-nomad", description: "Work remotely from Argentina" },
        { title: "Cost of Living Guide", href: "/cost-of-living", description: "Budget planning for your move" },
        { title: "Finding Accommodation", href: "/housing", description: "Renting apartments in Argentina" },
        { title: "Community Forums", href: "/resources", description: "Connect with other expats" },
      ]}
    />
  );
}
