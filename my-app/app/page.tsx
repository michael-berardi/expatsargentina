import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPinIcon, 
  DollarSignIcon, 
  FileTextIcon, 
  HomeIcon, 
  HeartIcon, 
  UsersIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  ShieldIcon,
  MailIcon,
  CoffeeIcon,
  MapIcon
} from "@/components/ui/icon";

const features = [
  {
    icon: FileTextIcon,
    title: "Visa Reality Checks",
    description: "The actual visa process, not the government website version. What really works, what doesn't, and how long things actually take.",
    href: "/visas/digital-nomad",
  },
  {
    icon: DollarSignIcon,
    title: "Real Cost of Living",
    description: "Monthly budgets that factor in the 'Argentina premium' — the unofficial exchange rates, the cash economy, and inflation workarounds.",
    href: "/cost-of-living",
  },
  {
    icon: MapPinIcon,
    title: "Neighborhood Deep Dives",
    description: "Palermo Hollywood vs. Soho, why Recoleta isn't always worth it, and the neighborhoods locals actually live in.",
    href: "/neighborhoods",
  },
  {
    icon: HeartIcon,
    title: "Healthcare Hacks",
    description: "How to get quality medical care without paying gringo prices. The prepaga system explained by someone who's used it.",
    href: "/healthcare",
  },
  {
    icon: HomeIcon,
    title: "Apartment Hunting",
    description: "Finding a place without a garantía, dealing with landlords who ghost you, and why that 'perfect' apartment has been empty for months.",
    href: "/housing",
  },
  {
    icon: UsersIcon,
    title: "Expat War Stories",
    description: "The mistakes, the wins, and the 'I can't believe that worked' moments from people who've actually made the move.",
    href: "/stories",
  },
  {
    icon: GlobeIcon,
    title: "Remote Work Setup",
    description: "Internet speeds by neighborhood, coworking reviews, cafe etiquette, and getting paid across borders without losing your shirt.",
    href: "/remote-work",
  },
  {
    icon: CoffeeIcon,
    title: "Food & Dining",
    description: "Where to find the best empanadas, asado culture explained, delivery apps, and why dinner happens at 10pm.",
    href: "/food",
  },
  {
    icon: MapIcon,
    title: "Getting Around",
    description: "The SUBE system, when to take taxis vs Uber, biking in BA, and airport transfers that won't rip you off.",
    href: "/transportation",
  },
];

const stats = [
  { value: "6+", label: "Years Living Here" },
  { value: "3", label: "Apartments Lived In" },
  { value: "2", label: "Visas Navigated" },
  { value: "∞", label: "Media Lunas Eaten" },
];

const testimonials = [
  {
    quote: "The visa guide saved me from a disaster. I was about to book a flight before my paperwork was ready — turns out you need the entry permit BEFORE you land. Crisis averted.",
    author: "Jake from Portland",
    role: "Remote dev, living in Palermo Soho since 2023",
    detail: "Works from a cafe on Honduras Street most mornings",
  },
  {
    quote: "Finally, someone who admits the banking situation is a nightmare. The blue dollar explanation alone saved me thousands. My Argentine friends were impressed I knew about cuevas.",
    author: "Marie & Tom",
    role: "Retired teachers from Manchester, settled in Belgrano",
    detail: "Found their apartment through a contact from this site",
  },
  {
    quote: "I spent my first month eating dinner at 7pm like a tourist. Now I know 10pm is early for asado. The cultural guides here are gold.",
    author: "Sofia K.",
    role: "Content creator from Toronto, Digital Nomad visa",
    detail: "Regular at the Tuesday expat meetup at Temple Bar on Marcelo T",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white dark:from-sky-950/20 dark:via-background dark:to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <CoffeeIcon size="sm" className="mr-1" />
              Buenos Aires expat since 2019
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Everything I Wish I'd Known Before{" "}
              <span className="text-primary">Moving to Buenos Aires</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              No sugar-coating, no AI fluff. Just six years of hard-won lessons about visas, 
              apartments, inflation hacks, and where to find the best empanadas on Avenida Corrientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/visas/digital-nomad">
                  Start With Visa Guides
                  <ArrowRightIcon size="sm" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cost-of-living">
                  See Real Costs (2025)
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Updated monthly (inflation waits for no one)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Lawyer-reviewed visa info</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Real stories from real expats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Intro Section */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">👋</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Hi, I'm the person behind this site</h2>
                <p className="text-muted-foreground mb-4">
                  I moved to Buenos Aires in 2019 with two suitcases, terrible Spanish, and a vague plan to 
                  "figure it out." I spent my first year in an illegally sublet apartment in Palermo, 
                  overpaying for everything because I didn't understand the blue dollar. I got scammed by 
                  a visa facilitator, waited four hours at migrations for appointments that took ten minutes, 
                  and learned which cafes actually have reliable WiFi (and which ones just pretend to).
                </p>
                <p className="text-muted-foreground">
                  This site is what I wish existed when I was googling "how to move to Argentina" at 2am. 
                  The real stuff. The messy stuff. The "why didn't anyone tell me this" stuff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Started This Site */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why I Started This Site</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When I was researching my move, I found two types of content: glossy travel blogs written by 
                people who'd visited for a week, and official government sites that hadn't been updated since 2015. 
                Neither prepared me for the reality of daily life here.
              </p>
              <p>
                Nobody warned me about the paperwork maze at migrations. Nobody explained why my landlord wanted 
                cash only, or why the price of my morning cortado changed every few weeks. I learned by making 
                mistakes — expensive, time-consuming mistakes.
              </p>
              <p>
                This site exists because Buenos Aires is an incredible place to live, but you need to know 
                the unwritten rules. The city rewards people who do their homework. I did the homework so 
                you don't have to learn everything the hard way.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-amber-600">⚠️</span>
                The honest truth about moving here
              </h3>
              <p className="text-sm text-muted-foreground">
                Argentina isn't for everyone. The bureaucracy will test your patience. Inflation means your 
                cost of living calculations are obsolete in months. Things break, appointments get cancelled, 
                and "mañana" sometimes means next week. But if you can roll with it, the quality of life is 
                unmatched — and I'm not just talking about the steak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Guides I Wish I'd Had
            </h2>
            <p className="text-muted-foreground text-lg">
              No generic advice. No "check with your local embassy" hand-waving. 
              Just practical, tested information from someone who's been through it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon size="md" className="text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href={feature.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read the guide
                    <ArrowRightIcon size="sm" className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Start Here</h2>
              <p className="text-muted-foreground">The guides people bookmark and come back to</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/guides">Browse All Guides</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Read</Badge>
                <CardTitle>The Digital Nomad Visa: What Actually Works</CardTitle>
                <CardDescription>
                  The 180-day remote work visa process, step by step. Including the mistakes that get 
                  applications rejected and the workaround if you're already in the country.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/visas/digital-nomad">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Updated Weekly</Badge>
                <CardTitle>Living Costs in Reality (Not Theory)</CardTitle>
                <CardDescription>
                  What I actually spent last month: rent in Palermo, groceries from Día vs. Carrefour, 
                  prepaga health insurance, and why you need to think in dollars but spend in pesos.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/cost-of-living">See My Budget</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Neighborhoods</Badge>
                <CardTitle>Where to Live (From Someone Who's Lived There)</CardTitle>
                <CardDescription>
                  Palermo Hollywood for the food scene, Recoleta for the architecture, San Telmo for 
                  the character (and the noise). The real pros and cons of each barrio.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/neighborhoods">Explore Barrios</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">New</Badge>
                <CardTitle>Working Remotely from Buenos Aires</CardTitle>
                <CardDescription>
                  Internet speeds by neighborhood, coworking space reviews, cafe etiquette, and how to 
                  get paid without losing 20% to fees.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/remote-work">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">New</Badge>
                <CardTitle>Safety Without the Fear-Mongering</CardTitle>
                <CardDescription>
                  Real crime stats vs perception, the 7 scams to watch for, and the "no dar papaya" 
                  philosophy that keeps you safe without being paranoid.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/safety">Stay Safe</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Messages From People Who've Made the Move</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real emails I've received from readers. These aren't polished marketing quotes — 
            they're the kind of messages that make the late nights updating this site worth it.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6">
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground mt-2 border-t pt-2">
                      {testimonial.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MailIcon size="lg" className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Get the Real Story in Your Inbox</h2>
            <p className="text-muted-foreground mb-6">
              I send one email a week with what's actually happening in Buenos Aires right now — 
              exchange rate updates, new restaurant finds, visa policy changes, and the occasional 
              rant about Argentine bureaucracy. No spam, no fluff, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1"
              />
              <Button className="gap-2">
                Subscribe
                <ArrowRightIcon size="sm" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Join 2,400+ expats getting the weekly update. I read every reply.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Figure This Out Together?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Moving to Argentina is an adventure. It's frustrating, magical, confusing, and 
              rewarding — sometimes all before lunch. I've made the mistakes so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/digital-nomad">
                  Start With Visas
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Ask Me Anything
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-3xl mx-auto text-sm text-muted-foreground">
            <ShieldIcon size="md" className="flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important:</strong> I'm not a lawyer, accountant, or immigration official. 
              I'm just someone who's been through the process and wants to help. The information 
              here is based on my experience and research, but laws change and everyone's situation 
              is different. For personalized legal help, talk to{" "}
              <Link href="https://lucerolegal.com" className="underline hover:text-foreground">
                Lucero Legal
              </Link>, 
              the firm I personally use and trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
