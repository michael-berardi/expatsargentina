import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MailIcon,
  MessageSquareIcon,
  ArrowRightIcon,
  ClockIcon,
  UsersIcon,
  SmartphoneIcon,
  GlobeIcon,
  FileTextIcon,
  DollarSignIcon,
  HeartIcon,
  WalletIcon,
  ShieldIcon,
  CalendarIcon,
  MapPinIcon,
  BusIcon,
  PlaneIcon,
  HelpCircleIcon,
  BriefcaseIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Contact Us - Expats Argentina",
  description: "Get in touch with Expats Argentina. Questions, feedback, or partnership inquiries - we'd love to hear from you.",
  keywords: ["contact Expats Argentina", "Argentina expat help", "moving to Argentina questions"],
  alternates: {
    canonical: "https://expatsargentina.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I get visa information for Argentina?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Check our detailed visa guides for information on tourist visas, work permits, and residency options. For complex legal situations, we recommend consulting an immigration attorney.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of living in Argentina?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "See our cost of living guide for detailed budget breakdowns with 2026 pricing. Monthly costs range from $1,200-5,000+ depending on lifestyle.",
                },
              },
              {
                "@type": "Question",
                name: "Which neighborhood in Buenos Aires should I live in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Explore our neighborhood guides for detailed comparisons of 15+ Buenos Aires neighborhoods including rent prices, safety ratings, and lifestyle fit.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <MailIcon size="sm" className="mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions, feedback, or want to share your story? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we&apos;ll get back to you within 48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" action="mailto:hello@expatsargentina.com" method="post" encType="text/plain">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Name</label>
                      <input type="text" name="name" placeholder="Your name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email</label>
                      <input type="email" name="email" placeholder="your@email.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Subject</label>
                      <input type="text" name="subject" placeholder="What's this about?" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message</label>
                      <textarea name="message" placeholder="Your message..." rows={5} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MailIcon size="md" className="text-primary" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      For general inquiries:
                    </p>
                    <a href="mailto:hello@expatsargentina.com" className="text-primary hover:underline">
                      hello@expatsargentina.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquareIcon size="md" className="text-primary" />
                      Share Your Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Are you an expat living in Argentina? We&apos;d love to feature your experience.
                    </p>
                    <Button asChild variant="outline">
                      <Link href="mailto:stories@expatsargentina.com">
                        Submit Your Story
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legal Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For visa and immigration legal advice, contact our partner:
                    </p>
                    <Button asChild variant="outline">
                      <Link href="https://lucerolegal.com" target="_blank" rel="noopener noreferrer">
                        Visit Lucero Legal
                        <ArrowRightIcon size="sm" className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Before You Contact Us</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Visa Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check our detailed <Link href="/visas" className="text-primary hover:underline">visa guides</Link> first. 
                    For complex legal situations, we recommend consulting an immigration attorney.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cost Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    See our <Link href="/cost-of-living" className="text-primary hover:underline">cost of living guide</Link> for 
                    detailed budget breakdowns and current prices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Neighborhood Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore our <Link href="/neighborhoods" className="text-primary hover:underline">neighborhood guides</Link> for 
                    detailed comparisons of Buenos Aires areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <ClockIcon size="sm" className="mr-1" />
                Response Times
              </Badge>
              <h2 className="text-3xl font-bold mb-4">When to Expect a Reply</h2>
              <p className="text-muted-foreground text-lg">
                We read every message and aim to respond as quickly as possible. Here are our typical turnaround times.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 flex items-center justify-center">
                      <MailIcon size="sm" />
                    </div>
                    <CardTitle className="text-lg">General Inquiries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">24 - 48 hours</p>
                  <p className="text-muted-foreground text-sm">
                    Questions about living in Argentina, site feedback, corrections, or general help requests. We prioritize these daily.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 flex items-center justify-center">
                      <FileTextIcon size="sm" />
                    </div>
                    <CardTitle className="text-lg">Story Submissions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">~1 week</p>
                  <p className="text-muted-foreground text-sm">
                    We review every story submission carefully. If selected, we&apos;ll follow up with any editing notes and a publication timeline.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 flex items-center justify-center">
                      <BriefcaseIcon size="sm" />
                    </div>
                    <CardTitle className="text-lg">Partnership Inquiries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">3 - 5 business days</p>
                  <p className="text-muted-foreground text-sm">
                    Sponsorship, advertising, affiliate programs, or collaboration proposals. We evaluate each partnership for relevance to our community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <UsersIcon size="sm" className="mr-1" />
                Community
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Community Resources</h2>
              <p className="text-muted-foreground text-lg">
                Connect with fellow expats through our active community channels. Get real-time advice, share experiences, and make friends before you even arrive.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-400" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg w-10 h-10 flex items-center justify-center">
                      <SmartphoneIcon size="sm" />
                    </div>
                    <CardTitle className="text-lg">WhatsApp & Telegram</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join our active WhatsApp and Telegram groups to chat with expats in real time. Get instant answers about neighborhoods, visa processes, and daily life in Argentina.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources">
                      View Groups
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg w-10 h-10 flex items-center justify-center">
                      <GlobeIcon size="sm" />
                    </div>
                    <CardTitle className="text-lg">Facebook Groups</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Browse our curated list of the best Facebook groups for expats in Buenos Aires and across Argentina. Great for buy/sell, housing, and social events.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/social-life">
                      Browse Groups
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/80" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 flex items-center justify-center">
                      <MailIcon size="sm" />
                    </div>
                    <CardTitle className="text-lg">Newsletter</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get weekly updates on exchange rates, policy changes, new guides, and community events delivered straight to your inbox. Free and unsubscribe anytime.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/newsletter">
                      Subscribe
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Help Topics */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <HelpCircleIcon size="sm" className="mr-1" />
                Quick Links
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Popular Help Topics</h2>
              <p className="text-muted-foreground text-lg">
                Find answers fast. These are the topics our community asks about most frequently.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/visas" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <PlaneIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Visa Types</span>
                    <span className="text-xs text-muted-foreground mt-1">Tourist, work, residency</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cost-of-living" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <DollarSignIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Cost of Living</span>
                    <span className="text-xs text-muted-foreground mt-1">Budgets & pricing</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/healthcare" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <HeartIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Healthcare</span>
                    <span className="text-xs text-muted-foreground mt-1">Insurance & hospitals</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/banking" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <WalletIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Banking</span>
                    <span className="text-xs text-muted-foreground mt-1">Accounts & transfers</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/safety" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <ShieldIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Safety</span>
                    <span className="text-xs text-muted-foreground mt-1">Tips & awareness</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/first-30-days" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <CalendarIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">First 30 Days</span>
                    <span className="text-xs text-muted-foreground mt-1">Step-by-step guide</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/neighborhoods" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <MapPinIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Neighborhoods</span>
                    <span className="text-xs text-muted-foreground mt-1">Where to live</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/transportation" className="group">
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <BusIcon size="md" />
                    </div>
                    <span className="font-medium text-sm">Transportation</span>
                    <span className="text-xs text-muted-foreground mt-1">Getting around BA</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
