import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuoteIcon, ArrowRightIcon, MapPinIcon, BriefcaseIcon, DollarSignIcon, CoffeeIcon, AlertTriangleIcon, HeartIcon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Expat Stories - Real Experiences Living in Argentina",
  description: "Real stories from expats living in Argentina. Learn from their experiences, challenges, and advice for moving to Buenos Aires.",
  keywords: ["expat stories Argentina", "living in Buenos Aires experience", "move to Argentina stories"],
  alternates: { canonical: "https://expatsargentina.com/stories" },
};

const stories = [
  {
    name: "Jake Donovan",
    from: "Portland, Oregon, USA",
    role: "Software Developer",
    duration: "2 years in BA",
    neighborhood: "Palermo Soho",
    street: "Near Plaza Serrano",
    quote: "I came for three months and stayed for two years. The first month I was like 'what the hell is a blue dollar?' Now I can explain it to newcomers in my sleep.",
    summary: "Jake arrived as a digital nomad in 2022, thinking he'd bounce around South America. Two years later, he's still in the same apartment on Costa Rica Street, has a local girlfriend, and has learned that 'mañana' doesn't always mean tomorrow.",
    theGood: [
      "I can actually afford to live alone in a nice apartment",
      "The tech community here is surprisingly tight-knit",
      "Nobody judges you for having wine with lunch",
      "La Viruta on Wednesday nights - life-changing",
    ],
    theBad: [
      "The garantía system is actual hell. I needed a local friend to co-sign for my apartment",
      "Inflation means you're constantly doing mental math",
      "Good luck getting anything done between 1-4pm",
    ],
    theReality: "You will gain weight. The food is incredible and cheap. The gym culture exists but it's not the same pressure as the US. I've accepted my 'empanada body'.",
    wishIKnew: [
      "Bring more cash than you think. The blue dollar rate is real and it matters.",
      "Learn Spanish BEFORE you come. 'I can learn there' is a cute idea that will make your first 6 months harder.",
      "The European architecture tricks you. This is still Latin America. Things break. Plans change.",
    ],
    budget: {
      rent: "$650 USD (2BR in Palermo Soho, splitting with girlfriend)",
      utilities: "$40 USD (varies wildly with inflation)",
      food: "$400 USD (eating out 3-4x/week)",
      coworking: "$120 USD (WeWork membership)",
      transport: "$30 USD (SUBE card + occasional Ubers)",
      total: "~$1,240/month",
    },
    hangouts: [
      "La Biela in Recoleta for coffee and people-watching",
      "Mercado de San Telmo on Sundays (get the choripán)",
      "El Boliche de Dario for the best empanadas",
      "Any park with mate and friends on weekends",
    ],
    mistakes: "I tried to open a bank account in my first month. Don't. Just use Western Union, bring cash, or use crypto. The banking system here is not designed for you and you don't need it anyway.",
    highlights: ["Remote tech work from cafes", "Tango lessons at La Viruta", "Weekend trips to Tigre", "Building a local friend group"],
    readTime: "12 min read",
  },
  {
    name: "Klaus & Ingrid Hoffmann",
    from: "Munich, Germany",
    role: "Retired Engineer & Teacher",
    duration: "3 years in BA",
    neighborhood: "Recoleta",
    street: "Avenida Callao near Recoleta Cemetery",
    quote: "Our German pension gives us a lifestyle here we could never afford in Munich. But the healthcare system took us a year to figure out.",
    summary: "Klaus and Ingrid moved to Buenos Aires at 68 and 65, chasing better weather and lower costs. They've navigated the healthcare maze, dealt with a broken hip, and learned that Argentine dinner time is non-negotiable.",
    theGood: [
      "Our apartment has a terrace with a view. In Munich, we'd be in a studio.",
      "The private healthcare (OSDE) is excellent and affordable",
      "The cafe culture suits us perfectly",
      "We've made more friends here in 3 years than 20 in Munich",
    ],
    theBad: [
      "The garantía was impossible. We had to pay 6 months upfront",
      "Paperwork. So much paperwork. Everything requires a DNI",
      "When Ingrid broke her hip, navigating the hospital system in Spanish was terrifying",
    ],
    theReality: "You will eat dinner at 10pm. There is no alternative. We tried to find restaurants that opened at 7pm. They don't exist or they're tourist traps. We adapted. Now we have 'merienda' at 5pm like locals.",
    wishIKnew: [
      "Get a good immigration lawyer. The retirement visa process is straightforward but the bureaucracy is not.",
      "Bring original birth certificates, marriage certificates, everything. Apostilled.",
      "The 'European feel' is only skin deep. Underneath, this is a different world.",
    ],
    budget: {
      rent: "$900 USD (2BR with terrace, full service)",
      utilities: "$60 USD",
      healthcare: "$300 USD (OSDE 310 plan for both)",
      food: "$500 USD (mostly cooking, nice dinners out)",
      transport: "$100 USD (mostly taxis - we're not taking the subway at our age)",
      total: "~$1,860/month",
    },
    hangouts: [
      "La Biela for coffee and pastries",
      "The parks in Palermo for walking",
      "Teatro Colón for opera and concerts",
      "Our building's terrace with wine and neighbors",
    ],
    mistakes: "We didn't realize how important the DNI is. We tried to do everything with our passport for the first 6 months. Get your temporary residency started immediately, then get your DNI. Everything is easier with a DNI.",
    highlights: ["Retirement visa process", "Healthcare quality", "Building social life in 60s", "Cost of living comparison"],
    readTime: "15 min read",
  },
  {
    name: "Marisol Vega",
    from: "Miami, USA (Cuban-American)",
    role: "Marketing Manager",
    duration: "1.5 years in BA",
    neighborhood: "Belgrano",
    street: "Calle Echeverría near Chinatown",
    quote: "I moved here with my Argentine boyfriend. Being Latina, I thought I'd adapt easily. I was wrong. Miami Cuban is not the same as Porteño.",
    summary: "Marisol followed her boyfriend home after 3 years of long-distance. She thought her Spanish and Latin background would make it easy. Instead, she struggled with the 'Porteño' attitude, the economic uncertainty, and finding work.",
    theGood: [
      "Living with my partner finally, after years of long-distance",
      "The food reminds me of my abuela's cooking sometimes",
      "Weekend asados with his family are everything",
      "I found a remote job with a US company - game changer",
    ],
    theBad: [
      "The 'Porteño' superiority complex is real. They think they're the Europeans of South America",
      "Finding a job that pays in dollars took 8 months",
      "His family still asks when we're having kids. Every. Sunday.",
    ],
    theReality: "The inflation is psychological warfare. You never know what anything costs. You develop this hoarding instinct - buy it now because it'll be more expensive tomorrow. I have 6 bottles of my favorite shampoo.",
    wishIKnew: [
      "Your Spanish being 'good' isn't enough. Porteño slang is its own language.",
      "The job market is brutal if you need pesos. Start looking for remote work before you move.",
      "Dating a local helps but also complicates everything. You're not just dating him, you're dating his entire family.",
    ],
    budget: {
      rent: "$0 (living with partner, he owns the apartment)",
      utilities: "$50 USD (my contribution)",
      food: "$300 USD (my share of groceries and eating out)",
      transport: "$40 USD",
      therapy: "$200 USD (yes, really, everyone has a therapist here)",
      total: "~$590/month (lucky situation)",
    },
    hangouts: [
      "Barrio Chino for Asian groceries and bubble tea",
      "Las Cañitas for drinks with other expat friends",
      "My boyfriend's family house in Olivos for Sunday asado",
      "Any feria artesanal for shopping",
    ],
    mistakes: "I thought I could just 'find a local job.' I applied to 40+ positions. The salaries were insulting - like $800 USD/month for a senior marketing role. I finally got a remote US job and now I live like a queen here. Don't move without dollar income.",
    highlights: ["Moving with a local partner", "Job search reality", "Cultural adaptation", "Remote work transition"],
    readTime: "11 min read",
  },
  {
    name: "Tom Brennan",
    from: "Dublin, Ireland",
    role: "UX Designer",
    duration: "8 months in BA",
    neighborhood: "Villa Crespo",
    street: "Malabia near the outlet shops",
    quote: "The 'mañana' culture nearly broke me. I'm Irish, we're direct, we get things done. Here, everything is 'tranqui' until it's an emergency.",
    summary: "Tom moved to Buenos Aires thinking he'd found the perfect remote work setup. Instead, he spent his first three months in a Kafkaesque nightmare of delayed deliveries, missed appointments, and learning that 'yes' often means 'maybe' or even 'no.'",
    theGood: [
      "The cost of living is absurdly good for someone with European salary",
      "The steak. My god, the steak.",
      "Once you make friends, they're friends for life",
      "The city is beautiful in a way that still makes me stop and stare",
    ],
    theBad: [
      "The internet went out for 3 days and my landlord said 'tranqui, it'll be fixed when it's fixed'",
      "Delivery times are fictional. 'It arrives Tuesday' means 'sometime this month hopefully'",
      "Nobody tells you no directly. You have to learn to read between the lines",
    ],
    theReality: "I had to learn to lower my expectations. Things that would take a day in Dublin take a week here. Things that would take a week take a month. You either adapt or you go insane. I'm still working on the adaptation.",
    wishIKnew: [
      "Bring a VPN that works. The internet restrictions here are annoying.",
      "Get a local SIM immediately. WhatsApp is the operating system of Argentina.",
      "Don't expect things to work the way they do at home. They don't. They won't.",
    ],
    budget: {
      rent: "$550 USD (studio in Villa Crespo)",
      utilities: "$35 USD",
      food: "$350 USD (cooking mostly, steak splurges)",
      coworking: "$80 USD (local coworking space)",
      transport: "$25 USD",
      therapy: "$150 USD (I need it here)",
      total: "~$1,190/month",
    },
    hangouts: [
      "The Irish pubs when I need to hear English and feel at home",
      "Don Julio when someone else is paying",
      "My rooftop for mate and complaining with other expats",
      "Palermo parks for running and clearing my head",
    ],
    mistakes: "I signed a lease without understanding the garantía system. I thought my Irish bank references would work. They didn't. I had to pay a 'guarantor service' $500 to basically vouch for me. Read about this stuff BEFORE you sign anything.",
    highlights: ["Remote work challenges", "Cultural adjustment", "Mañana culture navigation", "Building patience"],
    readTime: "10 min read",
  },
  {
    name: "Priya Sharma",
    from: "London, UK",
    role: "Freelance Writer",
    duration: "6 months in BA",
    neighborhood: "San Telmo",
    street: "Defensa near Plaza Dorrego",
    quote: "I came to write a novel. Instead, I'm writing about inflation and economic collapse. The irony isn't lost on me.",
    summary: "Priya moved to Buenos Aires for inspiration and affordable living as a writer. She found both, but also found herself navigating an economy in crisis, learning to think in multiple currencies, and discovering that artistic inspiration sometimes comes from chaos.",
    theGood: [
      "I can afford to write full-time here. In London, I needed a day job.",
      "San Telmo is like living in a movie. The tango, the street art, the antique shops",
      "The literary scene here is incredible - bookstores everywhere",
      "I've written more in 6 months than in 2 years in London",
    ],
    theBad: [
      "Watching prices change weekly is anxiety-inducing",
      "I had to become an amateur economist just to grocery shop",
      "The power went out during a deadline. 'Tranqui' doesn't pay my bills",
    ],
    theReality: "You become obsessed with exchange rates. You check the blue dollar rate like other people check Instagram. You know which cuevas give the best rates. You have opinions about stablecoins. This is not normal life.",
    wishIKnew: [
      "Have multiple income streams in different currencies. Peso income is worthless.",
      "The romantic idea of the struggling artist is cute until you're actually struggling.",
      "Bring a power bank and download offline maps. Infrastructure fails.",
    ],
    budget: {
      rent: "$400 USD (room in shared apartment, San Telmo)",
      utilities: "$25 USD",
      food: "$250 USD (cooking, cheap empanadas, occasional splurge)",
      coworking: "$0 (writing in cafes)",
      transport: "$20 USD",
      miscellaneous: "$100 USD",
      total: "~$795/month",
    },
    hangouts: [
      "El Federal for writing and coffee",
      "Mercado de San Telmo for cheap lunches",
      "The feria on Sundays for people-watching",
      "Any quiet corner of a milonga for tango inspiration",
    ],
    mistakes: "I didn't bring enough cash and I didn't understand the blue dollar. I was using my UK card at the official rate for my first month. I basically paid double for everything. Learn about the parallel exchange rates BEFORE you spend a penny.",
    highlights: ["Living on freelance income", "Creative inspiration", "Economic reality", "San Telmo life"],
    readTime: "9 min read",
  },
];

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Expat Stories</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <QuoteIcon size="sm" className="mr-1" />
              Real Experiences
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expat Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              No BS. Real stories from people actually living here - the good, the bad, 
              and the "why didn't anyone tell me this before I moved?"
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {stories.map((story) => (
              <Card key={story.name} className="overflow-hidden">
                {/* Header */}
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-1">{story.name}</CardTitle>
                      <CardDescription className="text-base">
                        {story.from} • {story.role}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">{story.readTime}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPinIcon size="sm" />
                      {story.neighborhood}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <BriefcaseIcon size="sm" />
                      {story.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {story.street}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-8">
                  {/* Quote */}
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                    "{story.quote}"
                  </blockquote>

                  {/* Summary */}
                  <p className="text-muted-foreground leading-relaxed">{story.summary}</p>

                  {/* The Good, The Bad, The Reality */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <HeartIcon size="sm" />
                        The Good
                      </div>
                      <ul className="space-y-2 text-sm">
                        {story.theGood.map((item, i) => (
                          <li key={i} className="text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-amber-600 font-semibold">
                        <AlertTriangleIcon size="sm" />
                        The Bad
                      </div>
                      <ul className="space-y-2 text-sm">
                        {story.theBad.map((item, i) => (
                          <li key={i} className="text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-blue-600 font-semibold">
                        <CoffeeIcon size="sm" />
                        The Reality
                      </div>
                      <p className="text-sm text-muted-foreground">{story.theReality}</p>
                    </div>
                  </div>

                  {/* What I Wish I Knew */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangleIcon size="sm" />
                      What I Wish I Knew Before Moving
                    </h3>
                    <ul className="space-y-2">
                      {story.wishIKnew.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Monthly Budget */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <DollarSignIcon size="sm" />
                      My Monthly Budget (USD)
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rent:</span>
                        <span>{story.budget.rent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Utilities:</span>
                        <span>{story.budget.utilities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Food:</span>
                        <span>{story.budget.food}</span>
                      </div>
                      {story.budget.healthcare && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Healthcare:</span>
                          <span>{story.budget.healthcare}</span>
                        </div>
                      )}
                      {story.budget.coworking && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Coworking:</span>
                          <span>{story.budget.coworking}</span>
                        </div>
                      )}
                      {story.budget.therapy && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Therapy:</span>
                          <span>{story.budget.therapy}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Transport:</span>
                        <span>{story.budget.transport}</span>
                      </div>
                      {story.budget.miscellaneous && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Misc:</span>
                          <span>{story.budget.miscellaneous}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-2 col-span-full font-semibold">
                        <span>Total:</span>
                        <span className="text-primary">{story.budget.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Where I Hang Out */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MapPinIcon size="sm" />
                      Where I Hang Out
                    </h3>
                    <ul className="space-y-2">
                      {story.hangouts.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">📍</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Biggest Mistake */}
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200 flex items-center gap-2">
                      <AlertTriangleIcon size="sm" />
                      My Biggest Mistake (So You Don't Make It)
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300">{story.mistakes}</p>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {story.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-muted-foreground mb-8">
              Are you an expat living in Argentina? We'd love to hear the real story - 
              the good, the bad, and everything in between.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Submit Your Story
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Get practical guides, visa information, and cost breakdowns to plan your move to Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/digital-nomad">
                  Explore Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  Calculate Costs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
