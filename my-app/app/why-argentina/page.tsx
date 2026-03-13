import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSignIcon,
  GlobeIcon,
  MapPinIcon,
  HeartIcon,
  UsersIcon,
  ArrowRightIcon,
  WineIcon,
  ShieldIcon,
  CoffeeIcon,
  WifiIcon,
  UtensilsIcon,
} from "@/components/ui/icon";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

export const metadata: Metadata = {
  title: "Why Move to Argentina? | Top Reasons Expats Choose Argentina",
  description:
    "Discover why thousands of expats choose Argentina every year. Affordable cost of living, rich culture, stunning landscapes, growing digital nomad scene, and accessible residency options.",
  keywords: [
    "why move to Argentina",
    "expat Argentina benefits",
    "living in Argentina pros",
    "digital nomad Argentina",
    "retire in Argentina",
    "Argentina cost of living",
  ],
  openGraph: {
    title: "Why Move to Argentina? Top Reasons Expats Love It",
    description:
      "From Patagonia to Buenos Aires, discover why Argentina is one of the top destinations for expats worldwide.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/why-argentina/",
  },
};

const reasons = [
  {
    icon: DollarSignIcon,
    title: "Remarkably Affordable Cost of Living",
    description:
      "A comfortable lifestyle in Buenos Aires costs $800-1,200/month. That includes a private apartment in a great neighborhood, eating out multiple times per week, and private healthcare. Compared to major cities in the US, Canada, or Western Europe, your money goes dramatically further here. A quality steak dinner with a bottle of Malbec runs about $15-20. A monthly gym membership is $20-30. A haircut is $5-8.",
  },
  {
    icon: UtensilsIcon,
    title: "Outstanding Food and Wine Culture",
    description:
      "Argentina is a food lover's paradise. The asado (barbecue) culture is legendary, with weekend gatherings around the grill being a foundation of social life. Buenos Aires has more restaurants per capita than almost any city in the world, ranging from hidden-door speakeasies to classic corner parrillas. Mendoza produces world-renowned Malbec and the wine country offers tastings for a fraction of Napa Valley prices.",
  },
  {
    icon: GlobeIcon,
    title: "Rich Culture and World-Class Arts Scene",
    description:
      "Buenos Aires is often called the 'Paris of South America' for a reason. The city has over 300 theaters (more than London), top-tier museums like MALBA and Bellas Artes, and a street art scene that rivals Berlin. Tango isn't just for tourists; milongas (tango dance halls) fill every night of the week. The literary tradition runs deep: this is the city of Borges, and you'll find stunning bookstores like El Ateneo Grand Splendid everywhere.",
  },
  {
    icon: MapPinIcon,
    title: "Breathtaking Natural Landscapes",
    description:
      "Few countries offer Argentina's geographic diversity. In the south, Patagonia delivers glaciers, turquoise lakes, and some of the best hiking on Earth. Iguazu Falls on the northern border is one of the planet's most spectacular waterfalls. Mendoza sits at the foot of the Andes with excellent skiing in winter and wine country in every direction. The Lake District around Bariloche looks like Switzerland. Salta's red rock canyons and Northwest Argentina feel like another planet entirely.",
  },
  {
    icon: WifiIcon,
    title: "Growing Digital Nomad Community",
    description:
      "Argentina launched its official Digital Nomad Visa in 2022, and the community has been growing rapidly since. Buenos Aires is packed with coworking spaces like WeWork, AreaTres, and dozens of independent spots. Cafes with fast Wi-Fi are everywhere, and many have become unofficial remote work hubs. Cities like Mendoza, Cordoba, and Bariloche also have thriving nomad scenes with the added bonus of smaller-city charm.",
  },
  {
    icon: ShieldIcon,
    title: "Accessible Visa and Residency Options",
    description:
      "Argentina is one of the most immigration-friendly countries in the world. Citizens of many nationalities can enter visa-free for 90 days, extendable to 180. The Digital Nomad Visa is straightforward. For those who want to stay long-term, temporary residency is achievable through work, family ties, retirement income, or the Mercosur agreement. If you have Italian or Spanish ancestry, you may qualify for citizenship by descent, which is extremely common among expats here.",
  },
  {
    icon: HeartIcon,
    title: "Excellent Healthcare at Low Cost",
    description:
      "Argentina's healthcare system consistently ranks among the best in Latin America. The public system is free for everyone, including foreigners. Most expats opt for private prepaid plans (prepagas) like OSDE or Swiss Medical, which cost $100-250/month and provide access to excellent private hospitals, specialists without referrals, and often dental and vision coverage. Medical tourism is also growing, with procedures costing 50-70% less than in the US.",
  },
  {
    icon: UsersIcon,
    title: "Welcoming and Social Culture",
    description:
      "Argentines are famously warm and social. Dinner parties last until 3am. New friends become close friends quickly. The culture values connection: long meals, mate shared in the park, weekend asados with extended family and friends. Expat communities are strong in Buenos Aires, Mendoza, Bariloche, and Cordoba, with regular meetups, language exchanges, and social events making it easy to build a network fast.",
  },
  {
    icon: CoffeeIcon,
    title: "Incredible Cafe and Nightlife Scene",
    description:
      "Buenos Aires might have the world's best cafe culture. Historic cafes like Cafe Tortoni have been serving cortados since the 1850s, while new third-wave coffee shops pop up constantly. The nightlife is legendary: dinner starts at 10pm, bars fill at midnight, and clubs don't peak until 3-4am. Whether you prefer craft cocktail bars in Palermo, underground electronic music in warehouses, or tango shows in San Telmo, the city never sleeps.",
  },
  {
    icon: WineIcon,
    title: "Wine Country at Your Doorstep",
    description:
      "Argentina is the fifth-largest wine producer in the world. Mendoza alone has over 1,500 wineries, many offering tastings and tours for a fraction of European or Californian prices. A full-day wine tour with lunch and multiple tastings runs $40-60. Beyond Malbec, the industry is producing first-rate Cabernet Franc, Torrontes, and blends. Cafayate in Salta and the San Juan region add even more diversity to the wine map.",
  },
];

export default function WhyArgentinaPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Why Argentina</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <GlobeIcon size="sm" className="mr-1" />
              Updated 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Move to Argentina?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Affordable living, incredible food and wine, stunning landscapes
              from Patagonia to Iguazu, and one of the most welcoming cultures
              on the planet. Here is why thousands of expats are making the move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/visas">
                  Explore Visa Options
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cost-of-living">See Cost of Living</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-primary/5 border-y">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                $1,000
              </div>
              <div className="text-sm text-muted-foreground">
                Avg. Monthly Budget
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                90+
              </div>
              <div className="text-sm text-muted-foreground">
                Visa-Free Countries
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                300+
              </div>
              <div className="text-sm text-muted-foreground">
                Theaters in BA
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                1,500+
              </div>
              <div className="text-sm text-muted-foreground">
                Wineries in Mendoza
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              10 Reasons Expats Love Argentina
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are not abstract selling points. These are the real reasons
              people uproot their lives and move thousands of miles to call
              Argentina home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon size="md" className="text-primary" />
                      </div>
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* But Is It Right For You */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Is Argentina Right for You?
            </h2>
            <p className="text-muted-foreground mb-6 text-center text-lg">
              Argentina is not perfect. No country is. Before you pack your bags,
              here are a few things to consider honestly.
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Inflation is Real
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Argentina has experienced high inflation for years. Prices in
                  pesos change frequently. If you earn in USD, EUR, or GBP, this
                  actually works in your favor as your purchasing power increases.
                  But it requires adapting to a different economic reality than
                  most expats are used to.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Bureaucracy Takes Patience
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Government processes move slowly here. Getting a DNI, opening a
                  bank account, or dealing with any official paperwork requires
                  patience. A good immigration lawyer (like{" "}
                  <a
                    href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=why-argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Lucero Legal
                  </a>
                  ) makes a massive difference.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Spanish Helps (a Lot)
                </h3>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  While you can get by with English in touristy areas of Buenos
                  Aires, daily life is much easier with at least basic Spanish.
                  The good news: Argentine Spanish is beautiful, language schools
                  are affordable, and locals are incredibly patient with learners.
                  Check our{" "}
                  <Link href="/learn-spanish" className="underline">
                    Spanish learning guide
                  </Link>{" "}
                  for resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-muted-foreground mb-8">
              Start planning your move to Argentina with our detailed guides
              on visas, neighborhoods, cost of living, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/guides/getting-started">
                  Getting Started Guide
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/neighborhoods">Browse Neighborhoods</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <LuceroLegalCTA />
    </main>
  );
}
