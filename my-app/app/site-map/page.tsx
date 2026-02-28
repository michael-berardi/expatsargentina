import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileTextIcon, 
  DollarSignIcon, 
  MapPinIcon, 
  HomeIcon, 
  HeartIcon, 
  UsersIcon,
  GlobeIcon,
  ShieldIcon,
  CoffeeIcon,
  MapIcon,
  BusIcon,
  CalendarIcon,
  UtensilsIcon,
  ArrowRightIcon,
  SparklesIcon
} from "@/components/ui/icon";

const visaGuides = [
  {
    icon: GlobeIcon,
    title: "Digital Nomad Visa",
    description: "Work remotely from Argentina for up to 180 days. The most popular option for remote workers.",
    href: "/visas/digital-nomad",
    badge: "Most Popular",
  },
  {
    icon: FileTextIcon,
    title: "Work Visa",
    description: "Employment-based residency for those with Argentine job offers.",
    href: "/visas/work",
  },
  {
    icon: HeartIcon,
    title: "Retirement Visa",
    description: "Pension-based residency for retirees with stable monthly income.",
    href: "/visas/retirement",
  },
  {
    icon: FileTextIcon,
    title: "Student Visa",
    description: "Study at Argentine universities and stay after graduation.",
    href: "/visas/student",
  },
  {
    icon: DollarSignIcon,
    title: "Investment Visa",
    description: "Business and investment pathways to residency.",
    href: "/visas/investment",
  },
];

const livingGuides = [
  {
    icon: DollarSignIcon,
    title: "Cost of Living",
    description: "Real 2026 budgets including the unofficial exchange rates and inflation reality.",
    href: "/cost-of-living",
    badge: "Updated Weekly",
  },
  {
    icon: MapPinIcon,
    title: "Neighborhoods",
    description: "Palermo Hollywood vs Soho, Recoleta, San Telmo, and where locals actually live.",
    href: "/neighborhoods",
  },
  {
    icon: HomeIcon,
    title: "Housing & Apartments",
    description: "Finding a place without a garantía, dealing with landlords, and avoiding scams.",
    href: "/housing",
  },
  {
    icon: HeartIcon,
    title: "Healthcare",
    description: "The prepaga system, finding English-speaking doctors, and medical insurance options.",
    href: "/healthcare",
  },
  {
    icon: DollarSignIcon,
    title: "Banking & Money",
    description: "Setting up accounts, the blue dollar, Western Union, and transferring money.",
    href: "/banking",
  },
];

const dailyLifeGuides = [
  {
    icon: MapIcon,
    title: "Transportation",
    description: "SUBE card, subway lines, buses, taxis vs Uber, and getting to/from the airport.",
    href: "/transportation",
    badge: "New",
  },
  {
    icon: ShieldIcon,
    title: "Safety",
    description: "Real crime stats, common scams, and the 'no dar papaya' philosophy.",
    href: "/safety",
    badge: "New",
  },
  {
    icon: FileTextIcon,
    title: "Learn Spanish",
    description: "Argentine Spanish differences, Lunfardo slang, and language school reviews.",
    href: "/learn-spanish",
    badge: "New",
  },
  {
    icon: GlobeIcon,
    title: "Remote Work",
    description: "Internet speeds, coworking spaces, cafe etiquette, and getting paid across borders.",
    href: "/remote-work",
    badge: "New",
  },
  {
    icon: UsersIcon,
    title: "Social Life & Dating",
    description: "Making friends, dating apps that work, nightlife, and social customs.",
    href: "/social-life",
    badge: "New",
  },
];

const foodGuides = [
  {
    icon: CoffeeIcon,
    title: "Food Guide",
    description: "Complete guide to Argentine cuisine—asado culture, best restaurants, delivery apps, and dining etiquette.",
    href: "/food",
    badge: "Updated",
  },
  {
    icon: UtensilsIcon,
    title: "Recipes",
    description: "Authentic Argentine recipes: empanadas, chimichurri, asado, milanesa, and more with local tips.",
    href: "/food/recipes",
    badge: "New",
  },
  {
    icon: MapPinIcon,
    title: "Buenos Aires Restaurants",
    description: "Top 40 restaurants by category—from Don Julio to hidden local gems. Rankings and what to order.",
    href: "/food/restaurants/buenos-aires",
    badge: "New",
  },
  {
    icon: CoffeeIcon,
    title: "Best Parrillas",
    description: "The ultimate guide to Argentine steakhouses featuring the world's #1 best steak restaurant.",
    href: "/food/restaurants/best-parrillas",
    badge: "New",
  },
];

const cultureGuides = [
  {
    icon: CalendarIcon,
    title: "First 30 Days",
    description: "Week-by-week survival guide for your first month. What to do, when to do it.",
    href: "/first-30-days",
  },
  {
    icon: SparklesIcon,
    title: "Culture & Customs",
    description: "Mate etiquette, 'yes means maybe,' personal space, and unwritten rules.",
    href: "/culture",
  },
  {
    icon: BusIcon,
    title: "Leaving Argentina",
    description: "When it's time to go. Getting your money out, closing accounts, saying goodbye.",
    href: "/leaving",
    badge: "New",
  },
];

const otherPages = [
  {
    icon: UsersIcon,
    title: "Expat Stories",
    description: "Real stories from people who've made the move. The mistakes, wins, and lessons learned.",
    href: "/stories",
  },
  {
    icon: FileTextIcon,
    title: "Resources Directory",
    description: "Service providers, emergency contacts, apps, and useful websites all in one place.",
    href: "/resources",
    badge: "New",
  },
  {
    icon: UsersIcon,
    title: "About",
    description: "Who's behind this site and why I started it.",
    href: "/about",
  },
];

function GuideSection({ 
  title, 
  description, 
  guides 
}: { 
  title: string; 
  description: string; 
  guides: typeof visaGuides;
}) {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <Card key={guide.title} className="group hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <guide.icon size="sm" className="text-primary" />
                </div>
                {guide.badge && (
                  <Badge variant={guide.badge === "New" ? "default" : "secondary"} className="text-xs">
                    {guide.badge}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg mt-3">{guide.title}</CardTitle>
              <CardDescription className="text-sm">{guide.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link 
                href={guide.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read guide
                <ArrowRightIcon size="sm" className="ml-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-white dark:from-sky-950/20 dark:via-background dark:to-background py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Guide Index
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about moving to and living in Buenos Aires. 
              No fluff, no AI-generated generic advice — just real experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge variant="default">New</Badge>
                <span>Recently added</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Updated Weekly</Badge>
                <span>Regular updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Most Popular</Badge>
                <span>Reader favorites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Sections */}
      <div className="container mx-auto px-5 pb-20">
        <GuideSection 
          title="Visa Guides"
          description="Choose the right visa for your situation. Each guide includes requirements, costs, timelines, and real application experiences."
          guides={visaGuides}
        />

        <div className="border-t" />

        <GuideSection 
          title="Living in Buenos Aires"
          description="The essentials: where to live, how much it costs, and getting set up."
          guides={livingGuides}
        />

        <div className="border-t" />

        <GuideSection 
          title="Food & Dining"
          description="Authentic recipes, restaurant guides, and everything you need to eat like a local."
          guides={foodGuides}
        />

        <div className="border-t" />

        <GuideSection 
          title="Daily Life"
          description="Getting around, staying safe, and making the most of your time here."
          guides={dailyLifeGuides}
        />

        <div className="border-t" />

        <GuideSection 
          title="Culture & Transition"
          description="Understanding the culture and navigating major life transitions."
          guides={cultureGuides}
        />

        <div className="border-t" />

        <GuideSection 
          title="Stories & Resources"
          description="Real experiences and practical resources."
          guides={otherPages}
        />
      </div>

      {/* CTA */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-6">
              I'm constantly adding new guides based on reader questions. 
              If there's something you need to know, ask me directly.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Ask a Question
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
