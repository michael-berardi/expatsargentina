import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MailIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Newsletter - Weekly Updates from Buenos Aires",
  description: "Get weekly emails about life in Buenos Aires. Real updates on prices, events, and expat life from someone who actually lives here.",
  alternates: { canonical: "https://expatsargentina.com/newsletter" },
};

const pastNewsletters = [
  {
    date: "January 12, 2025",
    title: "The Blue Dollar Hit 1400: What It Means for You",
    preview: "Plus: My favorite new coffee spot in Palermo and why you should avoid EZE on Friday afternoons.",
  },
  {
    date: "January 5, 2025",
    title: "Summer in the City: Empty Buenos Aires",
    preview: "January is magical here. Also: the best ice cream you haven't tried yet, and a visa update.",
  },
  {
    date: "December 29, 2024",
    title: "Surviving the Holidays as an Expat",
    preview: "Christmas alone isn't so bad. Plus: 2025 predictions and my annual 'things I got wrong' list.",
  },
];

const whatYouGet = [
  {
    title: "Real Price Updates",
    description: "I track the blue dollar, inflation, and actual costs so you know what to expect.",
  },
  {
    title: "Event Recommendations",
    description: "The stuff worth doing, not the tourist traps. From milongas to underground concerts.",
  },
  {
    title: "Visa & Bureaucracy News",
    description: "When rules change, I figure out what it actually means (not just what Migraciones says).",
  },
  {
    title: "Random Rants",
    description: "Sometimes I just need to complain about Argentine customer service. You'll relate.",
  },
];

export default function NewsletterPage() {
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
                "name": "Newsletter",
                "item": "https://expatsargentina.com/newsletter"
              }
            ]
          })
        }}
      />
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Newsletter</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <MailIcon size="sm" className="mr-1" />
              Weekly Emails
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Buenos Aires Reality Check
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A weekly email about life in Buenos Aires. Real updates on prices, events, 
              and the stuff they don't tell you in the guidebooks.
            </p>
            
            {/* Email Signup Form */}
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <form className="space-y-4" action="#">
                  <div>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                    <ArrowRightIcon size="sm" className="ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. Unsubscribe anytime. I respect your inbox.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>2,400+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Sent every Tuesday</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon size="sm" className="text-green-500" />
                <span>Written by a real person</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What You'll Actually Get
            </h2>
            <p className="text-muted-foreground">
              Not generic " Buenos Aires is great!" fluff. Real, useful information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatYouGet.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Issues Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recent Issues
            </h2>
            <div className="space-y-4">
              {pastNewsletters.map((issue) => (
                <Card key={issue.date} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">{issue.date}</div>
                    <h3 className="font-semibold text-lg mb-2">{issue.title}</h3>
                    <p className="text-muted-foreground text-sm">{issue.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              These are example topics. Subscribe to get the real thing.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground mb-4">
                  "I started this newsletter because I was tired of outdated blog posts and 
                  Facebook groups full of misinformation. I wanted a place to share what's 
                  actually happening right now in Buenos Aires."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-semibold text-primary">M</span>
                  </div>
                  <div>
                    <p className="font-medium">Mike</p>
                    <p className="text-sm text-muted-foreground">Living in Buenos Aires since 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Questions?
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is this really free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, completely free. I make money through the Lucero Legal partnership 
                    and occasional affiliate links, not by charging for the newsletter.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I want to unsubscribe?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every email has an unsubscribe link at the bottom. No hard feelings, 
                    no guilt trip. I get it - inboxes are overwhelming.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you sell my email?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Never. Your email stays with me. I use a reputable email service 
                    (ConvertKit) and follow all privacy laws.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Join 2,400+ Expats Getting the Real Story
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get weekly updates on Buenos Aires life. No fluff, no spam, just useful info.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="#">
                <MailIcon size="sm" className="mr-2" />
                Subscribe Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
