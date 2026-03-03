import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GlobeIcon,
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  UsersIcon,
  FileTextIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Expat Profiles - Who Moves to Argentina?",
  description:
    "Discover the diverse community of expats living in Argentina. Real profiles of digital nomads, retirees, entrepreneurs, and professionals from around the world who call Argentina home.",
  keywords: [
    "expat profiles Argentina",
    "who lives in Argentina",
    "Argentina expat community",
    "digital nomads Argentina",
    "retirees in Argentina",
    "move to Argentina stories",
  ],
  openGraph: {
    title: "Expat Profiles - Who Moves to Argentina?",
    description:
      "Meet the digital nomads, retirees, entrepreneurs, and professionals who have made Argentina their home.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/expat-profiles/",
  },
};

const profiles = [
  {
    name: "Emily Chen",
    country: "United States",
    flag: "US",
    visaType: "Digital Nomad Visa",
    visaSlug: "digital-nomad",
    profession: "Product Designer",
    yearsInArgentina: 2,
    city: "Buenos Aires",
    neighborhood: "Palermo Soho",
    quote:
      "I traded my $3,200 San Francisco studio for a two-bedroom with a terrace in Palermo. My quality of life improved overnight, and the design community here is surprisingly vibrant.",
    background:
      "Emily left her role at a Bay Area startup in 2024, drawn by Buenos Aires' creative scene and the new digital nomad visa. She now freelances for US clients while building connections in Argentina's growing tech ecosystem.",
    tips: [
      "Join coworking spaces early - they're your instant social network",
      "Get a local phone number on day one, WhatsApp rules everything",
      "The blue dollar rate is your friend - learn how it works before you arrive",
    ],
    monthlyBudget: "$1,400",
  },
  {
    name: "Hans Mueller",
    country: "Germany",
    flag: "DE",
    visaType: "Retirement Visa",
    visaSlug: "retirement",
    profession: "Retired Mechanical Engineer",
    yearsInArgentina: 4,
    city: "Mendoza",
    neighborhood: "Ciudad de Mendoza",
    quote:
      "My German pension goes three times further here. I spend my mornings hiking the pre-Andes, afternoons at wine tastings, and evenings at milongas. This is the retirement I dreamed about.",
    background:
      "Hans retired at 63 from a manufacturing firm in Stuttgart. After a scouting trip through South America, he fell in love with Mendoza's climate, wine culture, and mountain access. He now volunteers teaching German at a local cultural center.",
    tips: [
      "Mendoza is dramatically cheaper than Buenos Aires for retirees",
      "Learn basic Spanish before you come - outside BA, English is rare",
      "Private healthcare through OSDE or Swiss Medical is excellent and affordable",
    ],
    monthlyBudget: "$1,800",
  },
  {
    name: "Aisha Okafor",
    country: "Nigeria",
    flag: "NG",
    visaType: "Student Visa",
    visaSlug: "student",
    profession: "Medical Student (UBA)",
    yearsInArgentina: 3,
    city: "Buenos Aires",
    neighborhood: "Caballito",
    quote:
      "Studying medicine at UBA is free - even for international students. The academic rigor rivals anything in Europe, and the multicultural student community has become my second family.",
    background:
      "Aisha came to Argentina on a student visa to study medicine at the Universidad de Buenos Aires, one of Latin America's top medical schools. She funds her living costs through a part-time English tutoring gig and a small scholarship.",
    tips: [
      "UBA is free but competitive - prepare for the CBC entrance year",
      "Student visa allows part-time work, which helps cover living costs",
      "Caballito and Almagro are the best affordable neighborhoods near campus",
    ],
    monthlyBudget: "$750",
  },
  {
    name: "James & Fiona Whitfield",
    country: "United Kingdom",
    flag: "GB",
    visaType: "Investment Visa",
    visaSlug: "investment",
    profession: "Boutique Hotel Owners",
    yearsInArgentina: 5,
    city: "Bariloche",
    neighborhood: "Circuito Chico area",
    quote:
      "We sold our London flat, invested in a lakeside property in Patagonia, and built the boutique hotel we always dreamed of. The investment visa made it possible, and the tourism here is booming.",
    background:
      "James worked in finance and Fiona in hospitality management. They pooled their savings, secured an investment visa, and opened a 12-room boutique hotel near Lago Nahuel Huapi. Their business has been profitable since year two.",
    tips: [
      "The investment visa requires real capital outlay - have a solid business plan",
      "Tourism in Patagonia has strong winter AND summer seasons",
      "Hire a local accountant who understands the tax system for foreign investors",
    ],
    monthlyBudget: "$2,800 (personal)",
  },
  {
    name: "Mateo Ruiz Gonzalez",
    country: "Colombia",
    flag: "CO",
    visaType: "Work Visa (Mercosur path)",
    visaSlug: "work",
    profession: "Software Engineer",
    yearsInArgentina: 3,
    city: "Buenos Aires",
    neighborhood: "Villa Crespo",
    quote:
      "As a Colombian, the Mercosur agreement made moving here incredibly smooth. I got temporary residency in under 90 days. The tech salaries are lower than the US, but the lifestyle more than compensates.",
    background:
      "Mateo was recruited by an Argentine fintech startup after years at a Bogota tech company. The Mercosur residency agreement for South American nationals fast-tracked his move. He now leads a development team and mentors junior engineers.",
    tips: [
      "Mercosur nationals have a huge advantage - use it, the process is straightforward",
      "Argentine tech companies value experience from other LATAM markets",
      "Villa Crespo is the sweet spot between affordability and Palermo proximity",
    ],
    monthlyBudget: "$1,100",
  },
  {
    name: "Yuki Sato",
    country: "Japan",
    flag: "JP",
    visaType: "Temporary Resident Visa",
    visaSlug: "temporary",
    profession: "Freelance Photographer",
    yearsInArgentina: 1.5,
    city: "Buenos Aires",
    neighborhood: "San Telmo",
    quote:
      "Buenos Aires is the most photogenic city I have ever lived in. Every block tells a story. I came for six months and I still cannot bring myself to leave. The creative energy here is addictive.",
    background:
      "Yuki left a commercial photography career in Tokyo seeking creative renewal. She arrived on a tourist visa, transitioned to a temporary residency, and now splits her time between freelance editorial work and a personal photo book project documenting Buenos Aires' street culture.",
    tips: [
      "San Telmo is perfect for creatives - affordable, atmospheric, inspiring",
      "Bring your own camera gear - electronics are expensive here due to import taxes",
      "The Argentine art and photography community is welcoming if you make the effort",
    ],
    monthlyBudget: "$950",
  },
  {
    name: "Pierre Dubois",
    country: "France",
    flag: "FR",
    visaType: "Digital Nomad Visa",
    visaSlug: "digital-nomad",
    profession: "Marketing Consultant",
    yearsInArgentina: 1,
    city: "Cordoba",
    neighborhood: "Nueva Cordoba",
    quote:
      "Everyone goes to Buenos Aires, but Cordoba is Argentina's best-kept secret. It is a university city with incredible nightlife, the sierras are 30 minutes away, and my rent is half what I would pay in Palermo.",
    background:
      "Pierre ran a marketing agency from Paris before going fully remote. He chose Cordoba over Buenos Aires after a friend's recommendation and hasn't looked back. He's now part of a growing expat community in the city's university district.",
    tips: [
      "Cordoba has everything BA has at half the cost - seriously consider it",
      "Nueva Cordoba has the best coworking spaces and nightlife outside BA",
      "The fernet con coca culture is real and you will get on board",
    ],
    monthlyBudget: "$900",
  },
  {
    name: "Lucia Ferreira Santos",
    country: "Brazil",
    flag: "BR",
    visaType: "Permanent Resident (Mercosur)",
    visaSlug: "permanent",
    profession: "Restaurant Owner & Chef",
    yearsInArgentina: 6,
    city: "Buenos Aires",
    neighborhood: "San Telmo",
    quote:
      "The Mercosur agreement let me turn my dream into reality. I went from temporary resident to permanent in two years. My Brazilian-Argentine fusion restaurant is now a neighborhood staple with a two-week waitlist on weekends.",
    background:
      "Lucia left Sao Paulo's competitive restaurant scene to open her own place in Buenos Aires. The lower startup costs and Mercosur residency pathway made it feasible. She now employs 12 people and has been featured in Argentine food magazines.",
    tips: [
      "Mercosur path to permanent residency is the fastest legal route for South Americans",
      "Commercial rents in San Telmo are a fraction of equivalent neighborhoods in Sao Paulo or Rio",
      "Argentines are adventurous eaters - fusion concepts do very well here",
    ],
    monthlyBudget: "$2,200 (personal)",
  },
];

function getFlagEmoji(countryCode: string): string {
  const flags: Record<string, string> = {
    US: "\uD83C\uDDFA\uD83C\uDDF8",
    DE: "\uD83C\uDDE9\uD83C\uDDEA",
    NG: "\uD83C\uDDF3\uD83C\uDDEC",
    GB: "\uD83C\uDDEC\uD83C\uDDE7",
    CO: "\uD83C\uDDE8\uD83C\uDDF4",
    JP: "\uD83C\uDDEF\uD83C\uDDF5",
    FR: "\uD83C\uDDEB\uD83C\uDDF7",
    BR: "\uD83C\uDDE7\uD83C\uDDF7",
  };
  return flags[countryCode] || "";
}

export default function ExpatProfilesPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
                item: "https://expatsargentina.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Expat Profiles",
                item: "https://expatsargentina.com/expat-profiles",
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
            <span className="text-foreground">Expat Profiles</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <UsersIcon size="sm" className="mr-1" />
              Real People, Real Moves
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expat Profiles
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Meet the digital nomads, retirees, students, and entrepreneurs
              from around the world who have made Argentina their home. Every
              story is different, but they all start with the same question:
              &ldquo;What if I actually did it?&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/visas/quiz">
                  Find Your Visa Match
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/stories">Read Full Expat Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-b bg-white dark:bg-background">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">8+</p>
              <p className="text-sm text-muted-foreground">
                Countries Represented
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Visa Types Used</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">$750-$2,800</p>
              <p className="text-sm text-muted-foreground">
                Monthly Budget Range
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1-6</p>
              <p className="text-sm text-muted-foreground">
                Years in Argentina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {profiles.map((profile) => (
                <Card
                  key={profile.name}
                  className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/30"
                >
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <span className="text-2xl">
                            {getFlagEmoji(profile.flag)}
                          </span>
                          {profile.name}
                        </CardTitle>
                        <CardDescription className="text-base mt-1">
                          {profile.profession}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {profile.yearsInArgentina}{" "}
                        {profile.yearsInArgentina === 1 ? "year" : "years"}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <GlobeIcon size="sm" />
                        {profile.country}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <MapPinIcon size="sm" />
                        {profile.city}
                        {profile.neighborhood
                          ? `, ${profile.neighborhood}`
                          : ""}
                      </Badge>
                      <Link href={`/visas/${profile.visaSlug}`}>
                        <Badge className="flex items-center gap-1 cursor-pointer hover:bg-primary/90">
                          <FileTextIcon size="sm" />
                          {profile.visaType}
                        </Badge>
                      </Link>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-5">
                    {/* Quote */}
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      &ldquo;{profile.quote}&rdquo;
                    </blockquote>

                    {/* Background */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {profile.background}
                    </p>

                    {/* Tips */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <BriefcaseIcon size="sm" className="text-primary" />
                        Top Tips
                      </h3>
                      <ul className="space-y-2">
                        {profile.tips.map((tip, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-primary shrink-0">
                              &rarr;
                            </span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Budget & Visa Link */}
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon size="sm" className="text-primary" />
                        <span className="text-muted-foreground">
                          Monthly budget:
                        </span>
                        <span className="font-semibold">
                          {profile.monthlyBudget}
                        </span>
                      </div>
                      <Link
                        href={`/visas/${profile.visaSlug}`}
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Visa details
                        <ArrowRightIcon size="sm" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visa Breakdown */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Which Visa Is Right for You?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              The expats above used different visa pathways. Here is a quick
              overview of the most common options.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Digital Nomad Visa",
                  slug: "digital-nomad",
                  desc: "For remote workers with foreign income. Up to 180 days, renewable.",
                  who: "Freelancers, remote employees",
                },
                {
                  name: "Work Visa",
                  slug: "work",
                  desc: "Employer-sponsored residency for those working in Argentina.",
                  who: "Employees of Argentine companies",
                },
                {
                  name: "Retirement Visa",
                  slug: "retirement",
                  desc: "For retirees with pension income. Path to permanent residency.",
                  who: "Retirees with stable pension",
                },
                {
                  name: "Student Visa",
                  slug: "student",
                  desc: "Study at Argentine universities. Part-time work allowed.",
                  who: "University students",
                },
                {
                  name: "Investment Visa",
                  slug: "investment",
                  desc: "For business owners and investors making capital investments.",
                  who: "Entrepreneurs, investors",
                },
                {
                  name: "Mercosur Residency",
                  slug: "work",
                  desc: "Fast-track residency for citizens of Mercosur member states.",
                  who: "South American nationals",
                },
              ].map((visa) => (
                <Link href={`/visas/${visa.slug}`} key={visa.name} className="group">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardContent className="p-5">
                      <p className="font-semibold group-hover:text-primary transition-colors mb-1">
                        {visa.name}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {visa.desc}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {visa.who}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Continue Exploring</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/stories" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      Full Expat Stories
                    </p>
                    <p className="text-sm text-muted-foreground">
                      In-depth accounts with budgets and advice
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/cost-of-living" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      Cost of Living
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Detailed monthly expense breakdowns
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/visas/quiz" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      Visa Finder Quiz
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Find your best visa match in 2 minutes
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/neighborhoods" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      Neighborhoods
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Best areas to live in Buenos Aires
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Own Story?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Every expat in Argentina started exactly where you are now. Take
              the first step with our visa finder quiz or explore our
              comprehensive guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/quiz">Take the Visa Quiz</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Link href="/first-30-days">First 30 Days Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
