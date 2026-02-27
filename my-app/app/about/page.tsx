import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, GlobeIcon, UsersIcon, ShieldIcon, MailIcon, ArrowRightIcon, CheckCircleIcon, HeartIcon, StarIcon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "About Expats Argentina - Our Team Across the Country",
  description: "Expats Argentina is run by a team of expats living across Argentina -- from Buenos Aires to Bariloche, Mendoza to Salta. Honest, comprehensive guides for every corner of the country.",
  keywords: ["about Expats Argentina", "expat team Argentina", "living in Argentina", "Argentina expat guide"],
};

const teamLocations = [
  {
    city: "Buenos Aires",
    region: "Pampa",
    focus: "Nightlife, coworking, banking, neighborhoods, tango culture",
  },
  {
    city: "Mendoza",
    region: "Cuyo",
    focus: "Wine country living, outdoor sports, cost of living outside BA",
  },
  {
    city: "Cordoba",
    region: "Central Sierras",
    focus: "University town life, tech scene, affordable living",
  },
  {
    city: "Bariloche",
    region: "Patagonia",
    focus: "Mountain living, seasonal work, adventure tourism",
  },
  {
    city: "Salta",
    region: "Northwest",
    focus: "Colonial culture, slow living, indigenous heritage, budget expat life",
  },
];

const coverageStats = [
  { label: "Provinces Covered", value: "24", icon: GlobeIcon },
  { label: "Cities with Guides", value: "15+", icon: MapPinIcon },
  { label: "Regions Explored", value: "6", icon: StarIcon },
  { label: "Contributors", value: "Growing team", icon: UsersIcon },
];

const differentiators = [
  {
    title: "All of Argentina, not just Buenos Aires",
    description: "Most expat sites treat Argentina and Buenos Aires as synonyms. We cover Patagonia, the Northwest, Cuyo, Litoral, and everywhere in between -- because expat life looks different in Mendoza than it does in Palermo.",
  },
  {
    title: "Written by people who actually live here",
    description: "Every guide is written or reviewed by someone who lives in the region they cover. No fly-by travel bloggers, no two-week tourists passing off vacation tips as relocation advice.",
  },
  {
    title: "Kept current, not abandoned",
    description: "Argentina changes fast. Exchange rates shift weekly, visa rules update, neighborhoods evolve. We update our content continuously so you never rely on prices from three years ago.",
  },
  {
    title: "Honest about the hard parts",
    description: "We are not a tourism board. If the bureaucracy is brutal, we say so. If a city has safety concerns, we cover them. You get the full picture so you can make informed decisions.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <GlobeIcon size="sm" className="mr-1" />
              Across Argentina
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Expats Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We are a team of expats living across Argentina -- from the capital to Patagonia,
              the wine country to the Andean northwest. We built this site because we got tired
              of seeing &quot;Argentina expat guides&quot; that only covered one neighborhood in Buenos Aires.
            </p>
            <p className="text-lg text-muted-foreground">
              Argentina is a vast, complicated, beautiful country with wildly different experiences
              depending on where you land. Our mission is to give you comprehensive, honest information
              about living in every corner of it -- not just the corners that look good on Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                When most of us were researching our moves to Argentina, we hit the same wall:
                outdated blog posts with prices from 2019, visa advice that was flat-out wrong,
                and a near-total blindspot for anywhere outside Buenos Aires.
              </p>
              <p className="mb-4">
                We started Expats Argentina to fill that gap. The goal is simple -- provide the
                information we all wish we had before we moved. Accurate costs, current visa
                requirements, real neighborhood insights, and honest takes on the challenges
                you will face. No sugar-coating, no sales pitches disguised as advice.
              </p>
              <p>
                Whether you are considering a digital nomad stint in Buenos Aires, retirement in
                Mendoza, or a complete life reset in a small Patagonian town, we want to be the
                resource that helps you make an informed decision -- and then helps you navigate
                the reality once you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Coverage</h2>
            <p className="text-muted-foreground mb-8">
              Argentina has 24 provinces spanning from subtropical jungle to glacial ice fields.
              We are building guides for all of them.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {coverageStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <stat.icon size="md" className="mx-auto mb-2 text-teal-600 dark:text-teal-400" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2 text-lg">Regions</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Buenos Aires &amp; Pampa</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Patagonia (Lake District &amp; Glaciers)</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Cuyo (Wine Country)</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Northwest (Salta, Jujuy, Tucuman)</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Litoral &amp; Northeast</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Central Sierras</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Guide Topics</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Visas &amp; Residency</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Cost of Living by City</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Healthcare &amp; Insurance</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Housing &amp; Neighborhoods</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Banking &amp; Money</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-teal-600 dark:text-teal-400 flex-shrink-0" /> Culture, Food &amp; Social Life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Across Argentina */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Team Across Argentina</h2>
            <p className="text-muted-foreground mb-8">
              Every city and region on this site is covered by someone who actually lives there.
              Here is where our contributors are based and what they focus on.
            </p>
            <div className="space-y-4">
              {teamLocations.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center">
                          <MapPinIcon size="sm" className="text-teal-600 dark:text-teal-400" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{member.city}</h3>
                          <Badge variant="secondary" className="text-xs">{member.region}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{member.focus}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/10 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What Makes This Site Different</h2>
            <p className="text-muted-foreground mb-8">
              There is no shortage of Buenos Aires expat content on the internet. Here is why
              we think Expats Argentina offers something the others do not.
            </p>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <StarIcon size="md" className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How This Site Makes Money */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How This Site Makes Money (Full Transparency)</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                We believe you deserve to know how this site is funded. Transparency builds trust,
                and trust is the most important thing an expat resource can have.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                <ShieldIcon size="sm" className="inline mr-2 text-teal-600 dark:text-teal-400" />
                Sponsorship
              </h3>
              <p className="mb-4">
                This site is sponsored by <strong>Lucero Legal</strong>, a Buenos Aires law firm
                that specializes in helping expats with visas and residency. We chose to work
                with them because:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>They have a proven track record with expat immigration cases</li>
                <li>They do not upsell people on services they do not need</li>
                <li>They help us verify and update legal information so our guides stay accurate</li>
              </ul>
              <p className="mb-4">
                Does this affect our content? No. We still recommend DIY when it makes sense,
                and we are upfront when professional legal help is worth the cost. Lucero Legal
                understands and supports our editorial independence.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                <HeartIcon size="sm" className="inline mr-2 text-teal-600 dark:text-teal-400" />
                Affiliate Links
              </h3>
              <p className="mb-4">
                Some pages contain affiliate links (for example, to Wise for international
                money transfers). If you sign up through those links, we earn a small commission
                at no extra cost to you. We only link to services our team members actually use
                and trust.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                <CheckCircleIcon size="sm" className="inline mr-2 text-teal-600 dark:text-teal-400" />
                What We Do Not Do
              </h3>
              <p className="mb-4">
                We do not accept payment for positive reviews. We do not sell your email address
                or personal data. We do not publish sponsored content disguised as editorial advice.
                If we recommend something, it is because our team genuinely finds it useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have a question about moving to Argentina? Found outdated information on the site?
              Want to contribute as a writer from your corner of the country? We read every message
              and do our best to respond within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  <MailIcon size="sm" className="mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/newsletter">
                  Get the Newsletter
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Argentina?</h2>
            <p className="text-white/80 mb-8">
              Start with our most popular guides. Whether you are planning a move or just
              exploring the idea, we have the information you need to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas">
                  Explore Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/provinces">
                  Browse All Provinces
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
