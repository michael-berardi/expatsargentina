import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MailIcon,
  MessageSquareIcon,
  ArrowRightIcon,
  HelpCircleIcon,
  PlaneIcon,
  DollarSignIcon,
  HeartIcon,
  MapPinIcon,
} from "@/components/ui/icon";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Expats Argentina. Questions, feedback, or partnership inquiries — we'd love to hear from you.",
  keywords: ["contact Expats Argentina", "Argentina expat help", "moving to Argentina questions"],
  alternates: {
    canonical: "https://expatsargentina.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
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
              Have questions about moving to Argentina? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Form */}
              <div className="md:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form and we&apos;ll get back to you within 48 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquareIcon size="md" className="text-primary" />
                      Share Your Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Are you an expat living in Argentina? We&apos;d love to feature your experience. Use the contact form and select &quot;General Inquiry&quot; to tell us about your story.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legal Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For visa and immigration legal advice, our partner specializes in expat immigration law:
                    </p>
                    <Button asChild variant="outline">
                      <Link href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=contact" target="_blank" rel="noopener noreferrer">
                        Get Consultation
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
            <div className="text-center mb-10">
              <Badge className="mb-4" variant="secondary">
                <HelpCircleIcon size="sm" className="mr-1" />
                Quick Links
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Before You Contact Us</h2>
              <p className="text-muted-foreground text-lg">
                Many questions are answered in our detailed guides.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
