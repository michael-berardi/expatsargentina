import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  WineIcon,
  MapPinIcon,
  StarIcon,
  DollarSignIcon,
  GlobeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CalendarIcon,
  AlertCircleIcon,
  HeartIcon,
  SparklesIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentine Wine Guide for Expats - Regions, Grapes & Buying Tips",
  description:
    "Everything expats need to know about Argentine wine. From Malbec in Mendoza to Torrontes in Salta, learn about wine regions, grape varieties, where to buy, tasting experiences, and wine culture in Argentina.",
  keywords: [
    "Argentine wine",
    "Malbec Argentina",
    "Mendoza wine",
    "wine regions Argentina",
    "Torrontes",
    "buying wine Argentina",
    "wine tasting Mendoza",
    "expat guide Argentina wine",
    "Argentine wine culture",
    "best Argentine wines",
  ],
  alternates: { canonical: "https://expatsargentina.com/wine" },
  openGraph: {
    title: "Argentine Wine Guide for Expats - Regions, Grapes & Buying Tips",
    description:
      "Everything expats need to know about Argentine wine. From Malbec in Mendoza to Torrontes in Salta, learn about wine regions, grape varieties, where to buy, and wine culture.",
    url: "https://expatsargentina.com/wine",
    type: "article",
    locale: "en_US",
  },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const quickStats = [
  { label: "World Ranking", value: "5th Largest Producer", icon: GlobeIcon },
  { label: "Wineries", value: "1,500+", icon: StarIcon },
  { label: "Flagship Grape", value: "Malbec World Capital", icon: WineIcon },
  { label: "Wine History", value: "400+ Years", icon: CalendarIcon },
];

const wineRegions = [
  {
    name: "Mendoza",
    tagline: "The Heart of Argentine Wine",
    production: "75% of national production",
    grapes: ["Malbec", "Cabernet Sauvignon", "Bonarda", "Chardonnay"],
    subRegions: ["Lujan de Cuyo", "Valle de Uco", "Maipu", "San Rafael"],
    description:
      "Mendoza is Argentina's undisputed wine capital. Sitting at the base of the Andes between 600 and 1,500 meters altitude, the region produces the Malbec that put Argentina on the global wine map. Lujan de Cuyo is the traditional Malbec heartland with bold, ripe fruit; Valle de Uco is the cooler, higher-altitude frontier producing more elegant, mineral-driven wines; and Maipu is the historic district with classic bodegas and easy access from the city.",
    highlight: "Malbec Capital of the World",
    color: "purple",
  },
  {
    name: "Salta & Cafayate",
    tagline: "Where Vineyards Touch the Sky",
    production: "Highest vineyards in the world (up to 3,111m)",
    grapes: ["Torrontes", "Malbec", "Cabernet Sauvignon", "Tannat"],
    subRegions: ["Cafayate", "Molinos", "Cachi", "Quebrada de Humahuaca"],
    description:
      "Salta's Calchaqui Valley is home to some of the highest commercial vineyards on Earth. The extreme altitude means intense UV exposure, massive day-night temperature swings, and virtually zero humidity -- producing wines with extraordinary concentration and aromatics. Cafayate is the main wine town, a gorgeous colonial village surrounded by red-rock canyons and vineyards. The region's signature is Torrontes, an explosively aromatic white grape that thrives nowhere else like it does here.",
    highlight: "Extreme altitude terroir",
    color: "amber",
  },
  {
    name: "Patagonia (Neuquen & Rio Negro)",
    tagline: "The Cool-Climate Frontier",
    production: "Fastest-growing wine region",
    grapes: ["Pinot Noir", "Malbec", "Merlot", "Sauvignon Blanc"],
    subRegions: ["Neuquen", "Rio Negro (Alto Valle)", "San Patricio del Chanar"],
    description:
      "Patagonia is Argentina's emerging cool-climate wine frontier. Strong winds, low temperatures, and long growing seasons produce wines with bright acidity and finesse that contrast with the power of Mendoza. Pinot Noir is the star here -- lighter, more Burgundian in style -- and Malbec takes on a different character: more floral, with crunchy red fruit. Bodega families from Mendoza have invested heavily here, betting on climate change making this region increasingly important.",
    highlight: "Best Pinot Noir in Argentina",
    color: "blue",
  },
  {
    name: "San Juan",
    tagline: "Argentina's Second Wine Province",
    production: "2nd largest producing region",
    grapes: ["Syrah", "Bonarda", "Malbec", "Torrontes"],
    subRegions: ["Tulum Valley", "Pedernal", "Calingasta", "Ullum"],
    description:
      "San Juan lives in Mendoza's shadow but produces excellent value wines, especially Syrah. The region is hotter and drier, which means ripe, jammy reds at bargain prices. The Pedernal sub-region at higher altitude is producing increasingly serious wines that rival Mendoza's best. For expats on a budget, San Juan wines offer incredible bang for the buck -- many supermarket wines come from here.",
    highlight: "Best value wines in Argentina",
    color: "red",
  },
  {
    name: "La Rioja",
    tagline: "The Birthplace of Torrontes",
    production: "Historic small-producer region",
    grapes: ["Torrontes Riojano", "Bonarda", "Malbec", "Syrah"],
    subRegions: ["Chilecito", "Famatina Valley", "Nonogasta"],
    description:
      "La Rioja claims the origin story of Torrontes Riojano (the grape is literally named after this province). While it produces far less wine than Mendoza or San Juan, the region has a rugged charm and a handful of passionate small producers making distinctive wines. The Famatina Valley, in the shadow of the Sierra de Famatina mountains, produces Torrontes with a character distinct from Salta's -- a bit rounder, a bit less explosive, and well worth trying for comparison.",
    highlight: "Origin of Torrontes Riojano",
    color: "green",
  },
];

const grapeVarieties = [
  {
    name: "Malbec",
    type: "Red",
    status: "The Flagship",
    description:
      "Originally from Cahors in France, Malbec found its true home in Argentina. The high-altitude sun and dry climate produce deeply colored wines with plush dark fruit, velvety tannins, and a signature violet floral note. Entry-level Malbec is fruit-forward and easy-drinking. Premium bottlings from single vineyards can age for decades.",
    priceRange: "Budget: $2-5 | Mid: $8-15 | Premium: $20-50 | Icon: $80+",
    bestFrom: "Mendoza (Lujan de Cuyo, Valle de Uco)",
    foodPairing: "Asado (the classic), empanadas, provoleta, steak",
    tip: "Look for 'Reserva' or 'Gran Reserva' for more complexity. Single-vineyard bottlings from Altamira, Gualtallary, or Agrelo are the sweet spot for quality.",
  },
  {
    name: "Torrontes",
    type: "White",
    status: "The Aromatic Star",
    description:
      "Argentina's signature white grape is explosively aromatic -- think rose petals, jasmine, lychee, and grapefruit. Despite its perfumed nose, the best Torrontes is bone-dry with crisp acidity, making it a perfect summer sipper or aperitif. The new generation of winemakers is producing restrained, elegant versions that have shed the grape's old reputation for being sweet and flabby.",
    priceRange: "Budget: $2-4 | Mid: $5-10 | Premium: $12-25",
    bestFrom: "Salta (Cafayate), La Rioja",
    foodPairing: "Ceviche, fresh salads, spicy empanadas, sushi, Thai food",
    tip: "Drink it young and cold. Torrontes does not improve with age. Buy the current vintage.",
  },
  {
    name: "Bonarda",
    type: "Red",
    status: "The Underrated Dark Horse",
    description:
      "Actually Argentina's most planted red grape (yes, more than Malbec by acreage), Bonarda is the everyday drinker that wine snobs are just now discovering. It produces juicy, medium-bodied reds with dark cherry fruit, soft tannins, and a friendly, approachable personality. This is the wine Argentines actually drink at home most nights -- it's cheaper than Malbec and endlessly drinkable.",
    priceRange: "Budget: $1.50-3 | Mid: $4-8 | Premium: $10-20",
    bestFrom: "Mendoza (Maipu, San Rafael), San Juan",
    foodPairing: "Pizza, pasta, casual asados, choripan",
    tip: "The best secret in Argentine wine. Ask any sommelier what they drink at home and many will say Bonarda.",
  },
  {
    name: "Cabernet Franc",
    type: "Red",
    status: "The Rising Star",
    description:
      "While Cabernet Franc plays a supporting role in Bordeaux blends elsewhere, in Argentina it has stepped into the spotlight as a solo varietal. Uco Valley producers have found that high-altitude Cabernet Franc produces wines with stunning aromatic complexity -- red pepper, graphite, herbs, and dark fruit -- with a silky texture that sets it apart from Malbec's power. Many critics consider Argentine Cab Franc the most exciting development in South American wine.",
    priceRange: "Mid: $8-15 | Premium: $18-40 | Icon: $50+",
    bestFrom: "Mendoza (Valle de Uco, especially Altamira and Gualtallary)",
    foodPairing: "Lamb, grilled vegetables, aged cheeses, mushroom risotto",
    tip: "This is the grape sommeliers and wine geeks are obsessed with right now. If you see a single-vineyard Uco Valley Cab Franc, buy it.",
  },
  {
    name: "Pinot Noir",
    type: "Red",
    status: "The Patagonian Specialty",
    description:
      "Pinot Noir is notoriously difficult to grow well, but Patagonia's cool climate and long growing season provide ideal conditions. Argentine Pinot is lighter and more delicate than Malbec -- think red cherry, strawberry, earth, and spice. The best examples have genuine Burgundian character at a fraction of the price. This is a niche category but growing rapidly as Patagonian wine gains international recognition.",
    priceRange: "Mid: $8-12 | Premium: $15-35 | Icon: $40+",
    bestFrom: "Patagonia (Neuquen, Rio Negro)",
    foodPairing: "Salmon, duck, roasted chicken, mushroom dishes, soft cheeses",
    tip: "Patagonian Pinot is one of the best values in the world for this grape. Compare it to a $40 Oregon or $60 Burgundy.",
  },
];

const buyingGuide = {
  vinotecas: [
    { name: "Lo de Joaquin Alberdi", location: "Palermo", note: "Curated selection, knowledgeable staff, fair prices" },
    { name: "Winery", location: "Multiple locations", note: "Best chain vinoteca, wide range from budget to premium" },
    { name: "Terroir", location: "Recoleta / San Telmo", note: "Upscale selection, great for gifts, expert recommendations" },
    { name: "Grand Cru", location: "Palermo", note: "Boutique wines from small producers you won't find elsewhere" },
  ],
  supermarketTips: [
    "Coto, Jumbo, and Disco have the biggest wine sections -- look in the dedicated wine aisle, not the drinks section",
    "Don Luigi, Trumpeter, and Alamos are reliable budget Malbecs (under $5 USD)",
    "Catena, Luigi Bosca, and Norton mid-range bottles are excellent for $8-15 USD",
    "Supermarkets run 2x1 and 3x2 promotions on wine constantly -- stock up during sales",
    "Check the vintage year: avoid anything older than 2-3 years for budget wines",
  ],
  priceRanges: [
    { tier: "Budget", range: "$2-5 USD", description: "Everyday table wine. Bonarda and entry Malbec. Perfect for casual drinking and cooking.", color: "green" },
    { tier: "Mid-Range", range: "$5-15 USD", description: "Where Argentina shines. Reserva Malbecs, varietal Torrontes, blends. Better than $20-30 wines from other countries.", color: "blue" },
    { tier: "Premium", range: "$15-40 USD", description: "Single vineyard, Gran Reserva, boutique producers. World-class quality at Argentine prices.", color: "purple" },
    { tier: "Ultra-Premium", range: "$40+ USD", description: "Icon wines: Catena Zapata Adrianna, Zuccardi Finca Piedra Infinita, Achaval-Ferrer Finca Altamira. Collector territory.", color: "amber" },
  ],
  onlineStores: [
    { name: "MercadoLibre", url: "mercadolibre.com.ar", note: "Largest selection, competitive prices, fast delivery. Look for 'MercadoLider' sellers." },
    { name: "Vinofilos", url: "vinofilos.com.ar", note: "Curated selections, wine club subscriptions, expert picks and reviews." },
    { name: "Wine.com.ar", url: "wine.com.ar", note: "Good promotions, case discounts, and reliable delivery across Argentina." },
    { name: "Bodega direct", url: "Various", note: "Many wineries sell direct through their websites, often with exclusive wines and shipping included." },
  ],
};

const tastingExperiences = {
  mendozaWineries: [
    { name: "Catena Zapata", highlight: "The Mayan pyramid winery. Argentina's most prestigious producer. Book the 'Ernesto Catena Experience' for a private vertical tasting.", cost: "$15-60 USD" },
    { name: "Zuccardi Valle de Uco", highlight: "Named World's Best Vineyard multiple times. Stunning architecture. The restaurant is one of Argentina's best.", cost: "$20-80 USD" },
    { name: "Salentein", highlight: "Dutch-owned estate with an art gallery, chapel, and gorgeous grounds. Great introduction for wine beginners.", cost: "$10-40 USD" },
    { name: "Achaval-Ferrer", highlight: "Single-vineyard specialists. Their Finca Altamira and Finca Bella Vista are legendary. Intimate tastings.", cost: "$15-50 USD" },
    { name: "Clos de los Siete", highlight: "Michel Rolland's Argentine project. Seven estates, one terroir. The blend is a crowd-pleaser.", cost: "$10-35 USD" },
  ],
  saltaRoute: [
    { name: "Bodega Colome", highlight: "The oldest continuously operating winery in Argentina (1831). Drive through spectacular canyon scenery to get there. James Turrell art museum on site.", cost: "$20-50 USD" },
    { name: "El Esteco", highlight: "Beautiful colonial-style winery in Cafayate. Excellent Torrontes and their Old Vines Malbec is superb.", cost: "$10-30 USD" },
    { name: "Piattelli", highlight: "Stunning Cafayate property with mountain views. Their Grand Reserve Torrontes is benchmark quality.", cost: "$10-35 USD" },
  ],
  buenosAiresBars: [
    { name: "Pain et Vin", location: "Palermo", note: "French-Argentine wine bar with an extraordinary by-the-glass selection. The sommelier team is world-class." },
    { name: "Aldo's Vinoteca & Restoran", location: "Multiple locations", note: "Casual wine bar with excellent food pairings and approachable staff who won't judge your wine knowledge." },
    { name: "Gran Bar Danzon", location: "Recoleta", note: "Upscale cocktail and wine bar. Their Argentine wine list is comprehensive. Try the wine flights." },
    { name: "Vico Wine Bar", location: "Palermo", note: "Natural wine focused. Great for discovering small-production, organic Argentine wines." },
  ],
  bookingTips: [
    "Book winery visits at least 2-3 days in advance, especially during high season (March-May, September-November)",
    "Most wineries require reservations -- don't just show up",
    "Morning tastings (10-11 AM) are best -- your palate is fresher and wineries are less crowded",
    "Hire a driver or join a tour -- DO NOT drive between wineries. DUI laws are strict and police checkpoints are common",
    "Many wineries offer lunch with wine pairings -- these are often the best dining experiences in the region",
    "Expect to pay $10-30 USD per tasting at most wineries; some apply the fee to purchases",
  ],
};

const wineCulture = [
  {
    title: "Wine With Every Meal (It's Normal)",
    content:
      "In Argentina, having wine at lunch on a Tuesday is completely normal. A glass of Malbec with your milanesa at noon doesn't raise eyebrows. Wine is considered food here, not an indulgence. Most restaurants include a decent house wine option, and the waiter won't judge you for ordering a bottle at lunch. Don't overthink it -- when in Argentina, drink wine like Argentines do.",
    icon: WineIcon,
  },
  {
    title: "The Asado Wine Pairing Tradition",
    content:
      "Asado and Malbec is the national pairing, as sacred as steak and cabernet in the US. Bringing wine to an asado is expected -- one bottle per person is the minimum. The host provides the meat, guests bring the wine. Red wine with grilled beef is the default, but don't be afraid to bring a Torrontes for the provoleta and ensalada. Pro tip: bringing a premium bottle ($15+) signals respect for the asador's effort.",
    icon: HeartIcon,
  },
  {
    title: "BYO Culture at Restaurants",
    content:
      "Many casual restaurants, especially parrillas and neighborhood spots, are relaxed about BYO wine. Some have a small 'descorche' (corkage) fee, typically $2-5 USD. Some don't charge at all. Always ask first, but this is a great way to enjoy better wine for less money when dining out. Higher-end restaurants usually don't allow BYO, but the markup on wine is still far more reasonable than in the US or Europe.",
    icon: DollarSignIcon,
  },
  {
    title: "Wine as Gifts (What to Bring to a Dinner Party)",
    content:
      "When invited to an Argentine home for dinner, bring wine. Always. A mid-range Malbec ($8-15 USD) is the safe choice. If you want to impress, bring a premium bottle and tell the host about it -- Argentines love discussing wine. Avoid bringing the cheapest bottle from the supermarket; it's noticed. A Reserva or Gran Reserva from a recognized bodega (Catena, Zuccardi, Luigi Bosca, Norton) is always appreciated.",
    icon: SparklesIcon,
  },
  {
    title: "The Fernet con Coca vs Wine Debate",
    content:
      "While wine is the traditional drink of Argentine meals, fernet con coca-cola (a bitter herbal liqueur mixed with Coke) is the social drink of choice among younger Argentines. At parties and pregames, fernet flows freely -- wine is for the dinner table. Understanding this distinction will save you from showing up with a bottle of Malbec to a boliche (nightclub) pregame. Read the room: dinner party = wine, pregame/party = fernet or beer.",
    icon: AlertCircleIcon,
  },
];

const faqs = [
  {
    question: "What's the best Argentine Malbec for the price?",
    answer:
      "For under $5 USD, Alamos, Trumpeter, and Don Luigi are reliable daily drinkers. In the $8-15 range, Catena Malbec, Luigi Bosca De Sangre, Zuccardi Serie A, and Norton Reserva offer exceptional quality. For a splurge under $25, look for Catena Alta, Achaval-Ferrer Malbec, or Zuccardi Concreto. The sweet spot for price-to-quality is the $8-15 range -- you'll get wines that compete with $25-40 Malbecs exported to other countries.",
  },
  {
    question: "Can I ship wine from Argentina to my home country?",
    answer:
      "Yes, but it's complicated and not cheap. You can bring up to 2 liters per person in your checked luggage without extra duty in most countries. For larger shipments, specialty wine shipping services like Bodegas Argentina Export or DHL Wine handle the paperwork and logistics. Expect to pay $15-30 per bottle for international shipping. Some wineries offer direct international shipping, which can be more cost-effective for cases of 6+. Always check your destination country's import regulations.",
  },
  {
    question: "Is Argentine wine cheaper in Argentina?",
    answer:
      "Dramatically cheaper. A bottle of Catena Malbec that retails for $18-22 in the US costs $6-8 in Argentina. Premium wines that sell for $40-60 abroad are $15-25 locally. Budget wines that would cost $12-15 exported are $2-5 here. The savings are especially dramatic on mid-range and premium wines. This is one of the great perks of living in Argentina -- world-class wine at a fraction of global prices.",
  },
  {
    question: "When is harvest season (vendimia)?",
    answer:
      "Grape harvest in Argentina runs from late February through April, with the peak in March. The Fiesta de la Vendimia in Mendoza (usually the first week of March) is a massive celebration with parades, music, grape-stomping, and the crowning of the Vendimia Queen. It's Argentina's biggest regional festival. Visiting wineries during harvest is magical -- you'll see the crush in action, smell fermenting grapes, and taste juice straight from the press. Book accommodations months in advance.",
  },
  {
    question: "Do I need reservations for winery visits?",
    answer:
      "Yes, almost always. Unlike some wine regions where you can just walk in, Argentine wineries generally require advance reservations, even for basic tastings. During peak season (March-May and September-November), book at least 2-3 days ahead. For premium experiences at top wineries like Catena Zapata or Zuccardi, book 1-2 weeks in advance. Most wineries have online booking systems, or you can call directly. Some smaller bodegas are more flexible, but it's always better to call ahead.",
  },
  {
    question: "What's the difference between Lujan de Cuyo and Valle de Uco Malbec?",
    answer:
      "Lujan de Cuyo (800-1,100m altitude) is the traditional Malbec heartland. Wines tend to be richer, more full-bodied, with ripe dark fruit, chocolate, and plush tannins -- the classic Argentine Malbec profile. Valle de Uco (1,000-1,500m) is higher and cooler, producing Malbec with more acidity, freshness, and minerality -- think red fruit, florals, and a more elegant structure. Lujan is power; Uco is finesse. Many producers now blend both for balance. Both are excellent; it comes down to personal preference.",
  },
  {
    question: "Are there good Argentine wines under $5 USD?",
    answer:
      "Absolutely, and this is one of Argentina's greatest strengths. In the $2-5 range, look for Bonarda (Argentina's best-kept secret for everyday drinking), entry-level Malbecs from Alamos, Trumpeter, Fond de Cave, and Elementos, and Torrontes from Crios or Michel Torino. These wines won't win awards, but they're clean, well-made, and perfectly enjoyable for daily consumption. Many expats stock up on cases during supermarket 2x1 promotions and spend less than $50 a month on wine. Compare that to craft beer prices anywhere else.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */

export default function WinePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com" },
              { "@type": "ListItem", position: 2, name: "Wine Guide", item: "https://expatsargentina.com/wine" },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Wine Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <WineIcon size="sm" className="mr-1" />
              Expat Wine Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentine Wine Guide for Expats
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Argentina is the world's fifth-largest wine producer and home to the
              best Malbec on the planet. Whether you're navigating a supermarket wine
              aisle, planning a Mendoza winery trip, or trying to impress at an asado,
              this is everything you need to know.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline"><MapPinIcon size="sm" className="mr-1" />Wine Regions</Badge>
              <Badge variant="outline"><WineIcon size="sm" className="mr-1" />Grape Varieties</Badge>
              <Badge variant="outline"><DollarSignIcon size="sm" className="mr-1" />Buying Guide</Badge>
              <Badge variant="outline"><StarIcon size="sm" className="mr-1" />Tasting Experiences</Badge>
              <Badge variant="outline"><HeartIcon size="sm" className="mr-1" />Wine Culture</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                    <IconComp size="lg" className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="font-semibold text-lg">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wine Regions */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <MapPinIcon size="lg" className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Wine Regions</h2>
                <p className="text-muted-foreground">Five distinct terroirs, five different wine experiences</p>
              </div>
            </div>

            <div className="space-y-6">
              {wineRegions.map((region, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPinIcon size="sm" className={`text-${region.color}-600 dark:text-${region.color}-400`} />
                      {region.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{region.tagline}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{region.production}</Badge>
                      <Badge variant="outline" className="border-purple-200 text-purple-700 dark:text-purple-300">{region.highlight}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{region.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold mb-2">Key Grapes</p>
                        <div className="flex flex-wrap gap-1">
                          {region.grapes.map((grape) => (
                            <Badge key={grape} variant="outline" className="text-xs">{grape}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Sub-Regions</p>
                        <div className="flex flex-wrap gap-1">
                          {region.subRegions.map((sr) => (
                            <Badge key={sr} variant="outline" className="text-xs">{sr}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Grape Varieties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <WineIcon size="lg" className="text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Essential Grape Varieties</h2>
                <p className="text-muted-foreground">The five grapes every expat in Argentina should know</p>
              </div>
            </div>

            <div className="space-y-6">
              {grapeVarieties.map((grape, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <WineIcon size="sm" className={grape.type === "Red" ? "text-red-600 dark:text-red-400" : "text-amber-500 dark:text-amber-300"} />
                      {grape.name}
                      <Badge variant={grape.type === "Red" ? "destructive" : "secondary"} className="ml-auto text-xs">
                        {grape.type}
                      </Badge>
                    </CardTitle>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{grape.status}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{grape.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                        <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Price Range</p>
                        <p className="text-sm text-green-600 dark:text-green-400">{grape.priceRange}</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Best From</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">{grape.bestFrom}</p>
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg mb-3">
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">Food Pairing</p>
                      <p className="text-sm text-amber-600 dark:text-amber-400">{grape.foodPairing}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <SparklesIcon size="sm" className="text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong>Insider tip:</strong> {grape.tip}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buying Wine in Argentina */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <DollarSignIcon size="lg" className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Buying Wine in Argentina</h2>
                <p className="text-muted-foreground">Where to shop, what to spend, and how to get the best value</p>
              </div>
            </div>

            {/* Vinotecas */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <StarIcon size="sm" className="text-purple-600 dark:text-purple-400" />
                  Best Vinotecas (Wine Shops) in Buenos Aires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {buyingGuide.vinotecas.map((shop, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <MapPinIcon size="sm" className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{shop.name} <span className="font-normal text-sm text-muted-foreground">-- {shop.location}</span></p>
                        <p className="text-sm text-muted-foreground">{shop.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Supermarket Tips */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircleIcon size="sm" className="text-green-600 dark:text-green-400" />
                  Supermarket Wine Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {buyingGuide.supermarketTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircleIcon size="sm" className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Price Ranges */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSignIcon size="sm" className="text-green-600 dark:text-green-400" />
                  Price Guide (in USD)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {buyingGuide.priceRanges.map((range, index) => (
                    <div key={index} className={`bg-${range.color}-50 dark:bg-${range.color}-950/20 p-4 rounded-lg`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{range.tier}</Badge>
                        <span className="font-semibold text-sm">{range.range}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{range.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Online Ordering */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GlobeIcon size="sm" className="text-blue-600 dark:text-blue-400" />
                  Online Wine Ordering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {buyingGuide.onlineStores.map((store, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <GlobeIcon size="sm" className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{store.name} <span className="font-normal text-sm text-muted-foreground">-- {store.url}</span></p>
                        <p className="text-sm text-muted-foreground">{store.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wine Tasting Experiences */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <StarIcon size="lg" className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Wine Tasting Experiences</h2>
                <p className="text-muted-foreground">The best wineries, wine bars, and degustaciones in Argentina</p>
              </div>
            </div>

            {/* Mendoza Wineries */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon size="sm" className="text-purple-600 dark:text-purple-400" />
                  Top Mendoza Wineries to Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tastingExperiences.mendozaWineries.map((winery, index) => (
                    <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold">{winery.name}</p>
                        <Badge variant="outline" className="text-xs">{winery.cost}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{winery.highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Salta Route */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon size="sm" className="text-amber-600 dark:text-amber-400" />
                  Salta Wine Route
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tastingExperiences.saltaRoute.map((winery, index) => (
                    <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold">{winery.name}</p>
                        <Badge variant="outline" className="text-xs">{winery.cost}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{winery.highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Buenos Aires Wine Bars */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <WineIcon size="sm" className="text-rose-600 dark:text-rose-400" />
                  Buenos Aires Wine Bars & Tastings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tastingExperiences.buenosAiresBars.map((bar, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <MapPinIcon size="sm" className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{bar.name} <span className="font-normal text-sm text-muted-foreground">-- {bar.location}</span></p>
                        <p className="text-sm text-muted-foreground">{bar.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What to Expect & Booking Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon size="sm" className="text-blue-600 dark:text-blue-400" />
                  Booking Tips & What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tastingExperiences.bookingTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircleIcon size="sm" className="text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wine Culture for Expats */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <HeartIcon size="lg" className="text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Wine Culture for Expats</h2>
                <p className="text-muted-foreground">The unwritten rules of wine in Argentine social life</p>
              </div>
            </div>

            <div className="space-y-6">
              {wineCulture.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <IconComp size="md" className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Explore More of Argentine Food & Drink</h2>
            <p className="text-primary-foreground/80 mb-8">
              Wine is just the beginning. Discover Argentine cuisine, the best restaurants
              in Mendoza, and what life is like in Argentina's wine capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/food">
                  Argentine Food Guide
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/food/restaurants/mendoza">
                  Mendoza Restaurants
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cities/mendoza">
                  Living in Mendoza
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
