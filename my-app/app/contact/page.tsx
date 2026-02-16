import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MailIcon, MessageSquareIcon, ArrowRightIcon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Contact Us - Expats Argentina",
  description: "Get in touch with Expats Argentina. Questions, feedback, or partnership inquiries - we'd love to hear from you.",
  keywords: ["contact Expats Argentina", "Argentina expat help", "moving to Argentina questions"],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
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
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 48 hours.
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
                      Are you an expat living in Argentina? We'd love to feature your experience.
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
        <div className="container mx-auto px-4">
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
    </div>
  );
}
