import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyTOC } from "@/components/StickyTOC";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";
import {
  FileTextIcon,
  GlobeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  AlertCircleIcon,
  ClockIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  CalendarIcon,
  ScaleIcon,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Argentina Visa Guide for Expats | Types, Requirements & Process",
  description:
    "A concise overview of Argentine visa options for expats: tourist entry, digital nomad visa, temporary residency, work visas, student visas, and the path to citizenship.",
  keywords: [
    "Argentina visa guide",
    "Argentina visa types",
    "Argentina digital nomad visa",
    "Argentina residency",
    "Argentina work visa",
    "Argentina student visa",
    "Argentina citizenship",
    "expat visa Argentina",
  ],
  openGraph: {
    title: "Argentina Visa Guide for Expats | Types, Requirements & Process",
    description:
      "Understand your visa options for moving to Argentina. From tourist entry to citizenship, this guide covers every pathway for expats.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/guides/visas/",
  },
};

const tocItems = [
  { id: "tourist-entry", text: "Tourist Entry", level: 1 },
  { id: "digital-nomad-visa", text: "Digital Nomad Visa", level: 1 },
  { id: "temporary-residency", text: "Temporary Residency", level: 1 },
  { id: "work-visa", text: "Work Visa", level: 1 },
  { id: "student-visa", text: "Student Visa", level: 1 },
  { id: "path-to-citizenship", text: "Path to Citizenship", level: 1 },
  { id: "common-mistakes", text: "Common Mistakes", level: 1 },
  { id: "next-steps", text: "Next Steps", level: 1 },
];

export default function VisasGuidePage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://expatsargentina.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: "https://expatsargentina.com/guides/getting-started/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Visas & Residency",
                item: "https://expatsargentina.com/guides/visas/",
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground">Visas & Residency</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <GlobeIcon size="sm" className="mr-1" />
              Visa & Immigration Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              Visas & Residency: Know Your Options
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Argentina offers several pathways for expats, from short-term
              stays to full citizenship. Here is a concise overview to help you
              figure out which visa fits your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with TOC */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <StickyTOC items={tocItems} title="On this page" />
            </aside>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {/* Tourist Entry */}
              <section id="tourist-entry" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <GlobeIcon size="md" className="text-primary" />
                  Tourist Entry
                </h2>
                <Card className="mb-4">
                  <CardContent className="pt-4 pb-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-primary">90 days</div>
                        <div className="text-muted-foreground">Duration</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">No visa needed</div>
                        <div className="text-muted-foreground">Requirement</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">+90 days</div>
                        <div className="text-muted-foreground">Extendable</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Instant</div>
                        <div className="text-muted-foreground">Processing</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground mb-4">
                  Citizens of most Western countries (US, Canada, EU, UK,
                  Australia) can enter Argentina visa-free for 90 days. This is
                  the default starting point for most expats exploring a move.
                </p>
                <p className="text-muted-foreground mb-4">
                  You can extend your stay once for an additional 90 days by
                  visiting a Migraciones office and paying a small fee (around
                  $50 USD). This gives you a total of 180 days on tourist
                  status. Some expats do &quot;border runs&quot; to Uruguay or
                  Brazil to reset the clock, but this is not a sustainable
                  long-term strategy and immigration officials have become
                  stricter about repeat entries.
                </p>
                <p className="text-muted-foreground">
                  Tourist status does not allow you to work legally or access
                  most services that require a DNI. It is best used as a
                  scouting period while you decide on a longer-term visa path.
                </p>
              </section>

              {/* Digital Nomad Visa */}
              <section id="digital-nomad-visa" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <FileTextIcon size="md" className="text-primary" />
                  Digital Nomad Visa
                </h2>
                <Card className="mb-4">
                  <CardContent className="pt-4 pb-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-primary">6 months</div>
                        <div className="text-muted-foreground">Duration</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">$1,500+/mo</div>
                        <div className="text-muted-foreground">Income Required</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Renewable</div>
                        <div className="text-muted-foreground">Extension</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">~30 days</div>
                        <div className="text-muted-foreground">Processing</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground mb-4">
                  Introduced in 2022, the Digital Nomad Visa (Visa para
                  Nómadas Digitales) is designed for remote workers earning
                  income from foreign sources. It is one of the easiest
                  pathways for freelancers and remote employees.
                </p>
                <p className="text-muted-foreground mb-4">
                  Requirements include proof of remote employment or freelance
                  contracts, a minimum monthly income of approximately
                  $1,500 USD, and valid health insurance covering your stay in
                  Argentina. The process is straightforward: apply online
                  through the Migraciones portal, attend an in-person
                  appointment, and receive approval in roughly 30 days.
                </p>
                <p className="text-muted-foreground">
                  Note that the Digital Nomad Visa does not grant you a DNI or
                  lead directly to residency. It is a special authorization for
                  staying and working remotely, not a residency permit.
                </p>
              </section>

              {/* Temporary Residency (Rentista) */}
              <section id="temporary-residency" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <CalendarIcon size="md" className="text-primary" />
                  Temporary Residency (Rentista)
                </h2>
                <Card className="mb-4">
                  <CardContent className="pt-4 pb-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-primary">1 year</div>
                        <div className="text-muted-foreground">Duration</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">~$1,200/mo</div>
                        <div className="text-muted-foreground">Income Required</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Renewable</div>
                        <div className="text-muted-foreground">Extension</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">2-4 months</div>
                        <div className="text-muted-foreground">Processing</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground mb-4">
                  The Rentista visa is ideal for expats with passive income from
                  pensions, investments, rental properties, or other stable
                  sources. You need to demonstrate a minimum monthly income of
                  approximately $1,200 USD, though requirements can shift with
                  economic conditions.
                </p>
                <p className="text-muted-foreground mb-4">
                  This is a true residency permit. It grants you a DNI, allows
                  you to open bank accounts, sign leases, and access
                  healthcare. It is renewable annually and, after maintaining
                  continuous legal residency, leads to permanent residency.
                </p>
                <p className="text-muted-foreground">
                  The application requires apostilled and translated documents
                  (birth certificate, police background check) and proof of
                  income. Processing times vary but typically run 2-4 months
                  through Migraciones.
                </p>
              </section>

              {/* Work Visa */}
              <section id="work-visa" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <BriefcaseIcon size="md" className="text-primary" />
                  Work Visa
                </h2>
                <Card className="mb-4">
                  <CardContent className="pt-4 pb-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-primary">1 year</div>
                        <div className="text-muted-foreground">Duration</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Job offer</div>
                        <div className="text-muted-foreground">Requirement</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Renewable</div>
                        <div className="text-muted-foreground">Extension</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">2-3 months</div>
                        <div className="text-muted-foreground">Processing</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground mb-4">
                  If you have a job offer from an Argentine company, your
                  employer can sponsor your work visa. The company handles most
                  of the paperwork, including submitting the application to
                  Migraciones and demonstrating why a foreign worker is needed.
                </p>
                <p className="text-muted-foreground">
                  This is a common path for expats who find employment with
                  Argentine businesses, NGOs, or international companies with
                  local offices. The visa is renewable annually and leads to
                  permanent residency after the required period. Your employer
                  will also help you obtain a CUIL/CUIT number for working and
                  paying taxes legally.
                </p>
              </section>

              {/* Student Visa */}
              <section id="student-visa" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <GraduationCapIcon size="md" className="text-primary" />
                  Student Visa
                </h2>
                <Card className="mb-4">
                  <CardContent className="pt-4 pb-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-primary">1-2 years</div>
                        <div className="text-muted-foreground">Duration</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Enrollment</div>
                        <div className="text-muted-foreground">Requirement</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Renewable</div>
                        <div className="text-muted-foreground">Extension</div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">1-2 months</div>
                        <div className="text-muted-foreground">Processing</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-muted-foreground mb-4">
                  Enrolling in an accredited Argentine educational institution
                  qualifies you for a student visa. Argentine universities are
                  well-regarded and tuition is remarkably affordable, even at
                  private institutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  This is a popular strategy even for expats who are not
                  traditional students. Language courses at accredited
                  institutions count, making this an accessible pathway. You get
                  legal residency, a DNI, and the right to work part-time while
                  studying.
                </p>
                <p className="text-muted-foreground">
                  The student visa grants temporary residency and can be renewed
                  as long as you maintain enrollment and academic progress. Many
                  expats use this as a stepping stone to permanent residency.
                </p>
              </section>

              {/* Path to Citizenship */}
              <section id="path-to-citizenship" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <ScaleIcon size="md" className="text-primary" />
                  Path to Citizenship
                </h2>
                <p className="text-muted-foreground mb-4">
                  Argentina has one of the fastest paths to citizenship in the
                  world. After just 2 years of continuous legal residency
                  (temporary or permanent), you can apply for Argentine
                  citizenship through naturalization.
                </p>
                <p className="text-muted-foreground mb-4">
                  Argentina allows dual citizenship, so you do not need to
                  renounce your current nationality. The process involves
                  appearing before a federal judge, demonstrating basic Spanish
                  comprehension, and showing knowledge of Argentine history and
                  the constitution (a straightforward interview, not an exam).
                </p>
                <div className="bg-primary/5 border border-border rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon size="sm" className="text-primary" />
                    <span className="font-semibold text-foreground">
                      Citizenship Benefits
                    </span>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Argentine passport (visa-free access to 170+ countries)</li>
                    <li>Full voting rights</li>
                    <li>No residency renewal requirements</li>
                    <li>Access to Mercosur free movement agreements</li>
                    <li>Pass citizenship to your children</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  The 2-year clock starts from the date your residency is
                  officially granted, not from when you entered the country as a
                  tourist. Start your residency process as early as possible to
                  begin the countdown.
                </p>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                  <AlertCircleIcon size="md" className="text-primary" />
                  Common Mistakes
                </h2>
                <p className="text-muted-foreground mb-4">
                  Most visa headaches are entirely avoidable. Here are the
                  mistakes we see expats make again and again:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ClockIcon size="sm" className="text-accent" />
                        Overstaying your tourist visa
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Overstaying results in fines and, more importantly,
                        complicates future visa and residency applications.
                        Immigration officials take note. If you are approaching
                        your 180-day limit, either leave the country or begin a
                        residency application before your time expires.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileTextIcon size="sm" className="text-accent" />
                        Not apostilling documents before arrival
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Your birth certificate, background check, and other
                        official documents must be apostilled in your home
                        country before you can use them in Argentina. Getting
                        apostilles from abroad is slow and expensive. Handle
                        this before you leave home.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CalendarIcon size="sm" className="text-accent" />
                        Waiting too long to start the residency process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Many expats enjoy tourist life for months and then
                        scramble to apply for residency near the end of their
                        stay. Processing times are unpredictable, and
                        Migraciones appointments can be booked out for weeks.
                        Start researching and gathering documents as soon as
                        you decide Argentina is your long-term destination.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                  Next Steps
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ready to figure out your best visa path? Use our interactive
                  tools or dive deeper into the guides below.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="gap-2">
                    <Link href="/visas">
                      Interactive Visa Finder
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/guides/getting-dni">
                      Getting Your DNI
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="/guides/getting-started">
                      Full Moving Guide
                      <ArrowRightIcon size="sm" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Lucero Legal CTA */}
              <LuceroLegalCTA
                variant="full"
                title="Need professional immigration help?"
                description="Lucero Legal specializes in Argentine immigration law and can guide you through visa applications, residency paperwork, and citizenship."
              />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
