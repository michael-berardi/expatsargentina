import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, GlobeIcon, UsersIcon, ShieldIcon, MailIcon, CheckCircleIcon, HeartIcon, StarIcon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Expats Argentina — a comprehensive reference guide covering all 24 provinces, 20+ cities, visa pathways, and the practical realities of expat life across the entire country.",
  keywords: ["about Expats Argentina", "Argentina expat guide", "living in Argentina", "move to Argentina"],
  alternates: {
    canonical: "https://expatsargentina.com/about",
  },
};

const coverageStats = [
  { label: "Provinces Covered", value: "24", icon: GlobeIcon },
  { label: "Cities with Guides", value: "15+", icon: MapPinIcon },
  { label: "Regions Explored", value: "6", icon: StarIcon },
  { label: "Contributors", value: "Expanding", icon: UsersIcon },
];

const differentiators = [
  {
    title: "All of Argentina, not just Buenos Aires",
    description: "Most expat sites treat Argentina and Buenos Aires as synonyms. We cover Patagonia, the Northwest, Cuyo, Litoral, and everywhere in between -- because expat life looks different in Mendoza than it does in Palermo.",
  },
  {
    title: "Research-driven, not anecdote-driven",
    description: "Our guides are built from public data, government statistics, expat community forums, and on-the-ground reporting. We cite sources where possible and flag when information may be outdated.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://expatsargentina.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://expatsargentina.com/about"
              }
            ]
          })
        }}
      />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <GlobeIcon size="sm" className="mr-1" />
              About This Project
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About Expats Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Expats Argentina is a comprehensive reference guide for people considering
              a move to Argentina. We cover all 24 provinces, 20+ cities, visa pathways,
              and the practical realities of expat life across the entire country.
            </p>
            <p className="text-lg text-muted-foreground">
              Our goal: be the most accurate, comprehensive, and honest source of expat
              information for Argentina — not just Buenos Aires, but everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Our Approach</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Most &quot;Argentina expat&quot; sites are really &quot;Buenos Aires expat&quot; sites. We built
                this to cover the whole country because Argentina is a continent-sized nation
                with wildly different living experiences depending on where you go.
              </p>
              <p className="mb-4">
                Our guides are researched using public data sources, government statistics,
                community forums, and the lived experiences of expats in Argentina. We cite
                our sources where possible and update content when conditions change.
              </p>
              <p>
                We are not immigration lawyers and this site is not legal advice. For current
                visa regulations, always verify with official sources or a qualified attorney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">What We Cover</h2>
            <p className="text-muted-foreground mb-8">
              Argentina has 24 provinces spanning from subtropical jungle to glacial ice fields.
              We are building guides for all of them.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {coverageStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <stat.icon size="md" className="mx-auto mb-2 text-primary" />
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
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Buenos Aires &amp; Pampa</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Patagonia (Lake District &amp; Glaciers)</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Cuyo (Wine Country)</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Northwest (Salta, Jujuy, Tucuman)</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Litoral &amp; Northeast</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Central Sierras</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Guide Topics</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Visas &amp; Residency</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Cost of Living by City</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Healthcare &amp; Insurance</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Housing &amp; Neighborhoods</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Banking &amp; Money</li>
                  <li className="flex items-center gap-2"><CheckCircleIcon size="sm" className="text-primary flex-shrink-0" /> Culture, Food &amp; Social Life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-white dark:from-primary/5 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">What Makes This Site Different</h2>
            <p className="text-muted-foreground mb-8">
              There is no shortage of Buenos Aires expat content on the internet. Here is why
              we think Expats Argentina offers something the others do not.
            </p>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <StarIcon size="md" className="text-primary flex-shrink-0 mt-1" />
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
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">How This Site Makes Money (Full Transparency)</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                We believe you deserve to know how this site is funded. Transparency builds trust,
                and trust is the most important thing an expat resource can have.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                <ShieldIcon size="sm" className="inline mr-2 text-primary" />
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
                <HeartIcon size="sm" className="inline mr-2 text-primary" />
                Affiliate Links
              </h3>
              <p className="mb-4">
                Some pages contain affiliate links (for example, to Wise for international
                money transfers). If you sign up through those links, we earn a small commission
                at no extra cost to you. We only link to services we actually use and trust.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                <CheckCircleIcon size="sm" className="inline mr-2 text-primary" />
                What We Do Not Do
              </h3>
              <p className="mb-4">
                We do not accept payment for positive reviews. We do not sell your email address
                or personal data. We do not publish sponsored content disguised as editorial advice.
                If we recommend something, it is because we genuinely find it useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have a question about moving to Argentina? Found outdated information on the site?
              Want to contribute as a writer from your corner of the country? We read every message
              and do our best to respond within 48 hours.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button asChild>
                <Link href="/contact">
                  <MailIcon size="sm" className="mr-2" />
                  Contact Us
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Need help with visas or residency?{" "}
                <Link
                  href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=about-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Talk to Lucero Legal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">Ready to Explore Argentina?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Start with our most popular guides. Whether you are planning a move or just
              exploring the idea, we have the information you need to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas">
                  Explore Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
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
