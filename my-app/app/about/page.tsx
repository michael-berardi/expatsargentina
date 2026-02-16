import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPinIcon,
  CoffeeIcon,
  UtensilsIcon,
  CalendarIcon,
  AlertCircleIcon,
  HeartIcon,
  MailIcon,
  ArrowRightIcon,
  CameraIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "About Me - Expats Argentina",
  description: "Hi, I'm Mike. I moved to Buenos Aires in 2022 and made every mistake so you don't have to. Real stories, real mishaps, real recommendations.",
  keywords: ["about Expats Argentina", "Buenos Aires expat story", "moving to Argentina experience"],
};

const timeline = [
  {
    date: "March 2022",
    title: "The Arrival",
    description: "Landed at EZE with two suitcases and a naive belief that I'd find an apartment in a week. Spoiler: I was very wrong.",
  },
  {
    date: "April 2022",
    title: "The Visa Disaster",
    description: "Spent 6 hours at Migraciones only to be told I had the wrong form. Cried in a taxi on the way home. The driver gave me a free alfajor.",
  },
  {
    date: "June 2022",
    title: "First 'Real' Empanada",
    description: "Discovered El Hornero in Belgrano. Realized I'd been eating tourist-trap empanadas for three months. Life changed.",
  },
  {
    date: "August 2022",
    title: "The Break-in",
    description: "Got my phone stolen in Palermo. Learned about 'no mostrar el celular' the hard way. Now I have a burner phone and trust issues.",
  },
  {
    date: "January 2023",
    title: "Started This Site",
    description: "Couldn't find accurate visa info anywhere. Every blog had prices from 2019. Built this to save others from my mistakes.",
  },
];

const mistakes = [
  {
    title: "The 'Furnished' Apartment",
    story: "Signed a lease on a 'fully furnished' place in San Telmo. The 'furnished' part was a mattress on the floor and a camping chair. I slept on that mattress for three months because I was too stubborn to admit I'd messed up.",
  },
  {
    title: "The Blue Dollar Confusion",
    story: "Used my US credit card for everything the first month. Paid the official rate. Lost approximately $400 in potential savings. My Argentine friends still laugh at me.",
  },
  {
    title: "The Siesta Schedule",
    story: "Tried to open a bank account at 2 PM on a Tuesday. Stood outside a locked bank for 20 minutes before someone told me about siesta hours. I was that clueless gringo.",
  },
  {
    title: "The Taxi Airport Run",
    story: "Paid 15,000 pesos for a taxi from EZE to Palermo because I didn't know about Uber or the Manuel Tienda León bus. The driver saw me coming from a mile away.",
  },
];

const favoriteSpots = [
  {
    name: "El Hornero",
    location: "Belgrano",
    type: "Empanadas",
    description: "The best empanadas in the city, full stop. I get the carne suave and ham & cheese. The owners know me by name now.",
  },
  {
    name: "Café Registrado",
    location: "Colegiales",
    type: "Work Café",
    description: "Where I'm writing this right now. Good WiFi, great coffee, and they don't give you the side-eye for staying 4 hours with one cortado.",
  },
  {
    name: "Libros del Pasaje",
    location: "Palermo Soho",
    type: "Bookstore/Café",
    description: "My Sunday morning ritual. Browse books, drink coffee, pretend I'm a sophisticated writer instead of a guy who builds websites.",
  },
  {
    name: "Mercado de Belgrano",
    location: "Belgrano",
    type: "Market",
    description: "Where I actually shop now. Fresh produce, cheap prices, and vendors who tolerate my terrible Spanish.",
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <MapPinIcon size="sm" className="mr-1" />
              Buenos Aires, Argentina
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm Mike. I Moved Here and Made Every Mistake So You Don't Have To.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I landed in Buenos Aires in March 2022 with two suitcases, terrible Spanish, 
              and a naive confidence that everything would work out. It didn't—at least not at first. 
              This site exists because I couldn't find accurate, up-to-date information anywhere, 
              and I got tired of learning things the hard way.
            </p>
            
            {/* Photo Placeholder */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-64 h-64 bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25">
                <CameraIcon size="lg" className="text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">Photo: First week in BA</span>
                <span className="text-xs text-muted-foreground/60">(Looking very lost)</span>
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground">
                  That's supposed to be a photo of me looking exhausted at EZE airport, 
                  but I haven't uploaded it yet. Imagine a 30-something guy with jet lag 
                  and a confused expression trying to figure out where to get a SIM card. 
                  That's the vibe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Started This Site */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why I Started This Site</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Here's the thing: when I was researching my move to Argentina, every blog post 
                I found was from 2019. The prices were wrong. The visa requirements were outdated. 
                The "best neighborhoods" recommendations were clearly written by someone who'd 
                never stepped foot in the city.
              </p>
              <p className="mb-4">
                I spent my first month here making expensive mistakes. I overpaid for everything. 
                I got the wrong visa forms (twice). I signed a lease on an apartment that had 
                "character"—which is real estate speak for "no hot water and a door that doesn't lock."
              </p>
              <p className="mb-4">
                After the third friend asked me for advice about moving to BA, I realized I had 
                accumulated enough painful experience to actually help people. So I built this site 
                in January 2023, mostly as a way to stop repeating the same advice in WhatsApp messages.
              </p>
              <p>
                The goal is simple: give you the information I wish I'd had. No fluff, no outdated 
                nonsense, no "digital nomad guru" pretending to be an expert after a two-week vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Buenos Aires Journey */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Buenos Aires Journey</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="relative">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <CalendarIcon size="sm" className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
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

      {/* What I Got Wrong */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What I Got Wrong (So You Can Do Better)</h2>
            <p className="text-muted-foreground mb-8">
              Look, I'm not going to pretend I had it all figured out. Here are the actual mistakes 
              I made—some expensive, some embarrassing, all educational.
            </p>
            <div className="space-y-6">
              {mistakes.map((mistake, index) => (
                <Card key={index} className="border-red-200 dark:border-red-900/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircleIcon size="md" className="text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{mistake.title}</h3>
                        <p className="text-muted-foreground">{mistake.story}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Favorite Spots */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Favorite Spots (The Real Ones)</h2>
            <p className="text-muted-foreground mb-8">
              These aren't the tourist recommendations you'll find on every travel blog. 
              These are the places I actually go, where the staff recognizes me, and where 
              I don't have to explain that I live here, not vacation here.
            </p>
            <div className="grid gap-4">
              {favoriteSpots.map((spot, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{spot.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPinIcon size="sm" />
                          {spot.location}
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {spot.type === "Empanadas" && <UtensilsIcon size="sm" className="mr-1" />}
                        {spot.type === "Work Café" && <CoffeeIcon size="sm" className="mr-1" />}
                        {spot.type === "Bookstore/Café" && <HeartIcon size="sm" className="mr-1" />}
                        {spot.type === "Market" && <UtensilsIcon size="sm" className="mr-1" />}
                        {spot.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{spot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* More Photos Placeholder */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25">
                <CameraIcon size="md" className="text-muted-foreground mb-1" />
                <span className="text-xs text-muted-foreground text-center px-2">El Hornero empanadas</span>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25">
                <CameraIcon size="md" className="text-muted-foreground mb-1" />
                <span className="text-xs text-muted-foreground text-center px-2">My work setup at Café Registrado</span>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25">
                <CameraIcon size="md" className="text-muted-foreground mb-1" />
                <span className="text-xs text-muted-foreground text-center px-2">Weekend at Mercado de Belgrano</span>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25">
                <CameraIcon size="md" className="text-muted-foreground mb-1" />
                <span className="text-xs text-muted-foreground text-center px-2">My actual apartment (much better now)</span>
              </div>
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
                Let's talk about money because I hate when sites pretend they're doing this 
                out of pure altruism. I'm not. This site helps pay my rent in pesos, and 
                I'm going to be straight with you about how.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Sponsorship</h3>
              <p className="mb-4">
                This site is sponsored by <strong>Lucero Legal</strong>, a Buenos Aires law firm 
                that specializes in helping expats with visas and residency. They approached me 
                in mid-2023 after I'd already written most of the visa guides. I chose to work 
                with them because:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>They actually know what they're talking about (I've verified this the hard way)</li>
                <li>They don't try to upsell people on services they don't need</li>
                <li>They answer my questions when I'm updating content, so the info stays accurate</li>
              </ul>
              <p className="mb-4">
                Does this affect my recommendations? Only in that I can afford to keep the site 
                running and updated. I still tell people when DIY is a better option than hiring 
                a lawyer. Lucero knows this and is cool with it.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Affiliate Links</h3>
              <p className="mb-4">
                Some pages have affiliate links (like to Wise for money transfers). If you sign 
                up through those links, I get a small commission. It doesn't cost you anything extra. 
                I only recommend services I actually use—my Wise account has saved me hundreds 
                of dollars in bank fees.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What I Don't Do</h3>
              <p className="mb-4">
                I don't take money to write positive reviews of apartments, cafés, or services. 
                I don't sell your email address. I don't publish sponsored content disguised as 
                advice. If I'm recommending something, it's because I genuinely think it's helpful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Moment I Fell in Love */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/10 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Moment I Fell in Love With This City</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                It wasn't the steak (though that's excellent). It wasn't the tango shows 
                (still haven't been to one, honestly). It wasn't even the absurdly cheap 
                wine that doesn't give you a headache.
              </p>
              <p className="mb-4">
                It was a Tuesday in July. I'd had a terrible day—my internet was out, 
                I'd burned my milanesa, and I was homesick in that deep, aching way that 
                makes you question every decision that led you here.
              </p>
              <p className="mb-4">
                I went to my local café—the one where I was still just "the American who 
                orders cortado"—and the owner, Carlos, asked why I looked sad. I tried 
                to explain in my broken Spanish. He listened, nodded, and then refused 
                to let me pay for my coffee. "Para que te sientas mejor," he said. 
                So you feel better.
              </p>
              <p className="mb-4">
                That's Buenos Aires. The bureaucracy is a nightmare. The economy makes 
                no sense. But the people? They'll give you a free coffee because you 
                look like you need it. They'll help you figure out the bus system even 
                when you can barely explain where you're going. They'll adopt you into 
                their city with a warmth I didn't know existed.
              </p>
              <p>
                That's why I'm still here. That's why I built this site. Because this 
                city is worth the hassle, and I want to help you get past the hard parts 
                to the good stuff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Say Hi?</h2>
            <p className="text-muted-foreground mb-8">
              I actually read every email. Seriously. If you have questions, suggestions, 
              or just want to tell me about your own BA disasters, I'd love to hear from you. 
              Bonus points if you include a café recommendation I haven't tried yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:mike@expatsargentina.com">
                  <MailIcon size="sm" className="mr-2" />
                  Email Me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/newsletter">
                  Get the Newsletter
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Response time: usually 24-48 hours unless I'm dealing with another Migraciones adventure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Make Your Own Mistakes?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Hopefully fewer than I did. Start with the guides, learn from my disasters, 
              and then go write your own Buenos Aires story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/digital-nomad">
                  Explore Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  Calculate Your Costs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
