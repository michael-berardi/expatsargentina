import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSignIcon, 
  HomeIcon, 
  UtensilsIcon, 
  BusIcon, 
  HeartIcon, 
  WifiIcon, 
  FilmIcon,
  AlertCircleIcon,
  TrendingUpIcon,
  ArrowRightIcon,
  CalculatorIcon,
  WalletIcon,
  CreditCardIcon,
  PiggyBankIcon,
  MapPinIcon,
  ZapIcon,
  BriefcaseIcon,
  DumbbellIcon,
  CoffeeIcon,
  ReceiptIcon,
  ShieldIcon,
  LightbulbIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Cost of Living in Argentina 2026 - Prices Doubled, Reality Check",
  description: "Argentina is NOT cheap anymore. 2026 cost of living guide with doubled prices, Milei economy impact, and Western Europe-level costs. Updated for 2026.",
  keywords: ["cost of living Argentina 2026", "Argentina expensive now", "Buenos Aires prices doubled", "Milei economy cost", "is Argentina still cheap 2026"],
  openGraph: {
    title: "Cost of Living in Argentina 2026 - Prices Doubled",
    description: "Argentina cost of living has doubled. Real 2026 budgets: $1,200-5,000/month for Western Europe-level prices.",
  },
};

// Real 2026 budget profiles - prices have DOUBLED since 2023
const monthlyCosts = {
  backpacker: {
    rent: 550,
    food: 320,
    transport: 35,
    utilities: 75,
    healthcare: 85,
    entertainment: 100,
    coworking: 0,
    gym: 0,
    misc: 85,
    total: 1250,
    description: "Shared apartment in Villa Crespo or Caballito, cooking most meals, SUBE card, no frills",
    rentDetails: "Room in shared apartment (3-4 people)",
    foodDetails: "Mostly groceries, occasional empanadas",
    lifestyle: "Local bars, free events, parks"
  },
  comfortable: {
    rent: 1200,
    food: 650,
    transport: 120,
    utilities: 180,
    healthcare: 250,
    entertainment: 350,
    coworking: 150,
    gym: 55,
    misc: 200,
    total: 3155,
    description: "Own 1-bedroom in Palermo or Belgrano, mix of cooking and dining out, gym membership",
    rentDetails: "1-bedroom apartment, mid-range building",
    foodDetails: "Groceries + 3-4 restaurant meals/week",
    lifestyle: "Coworking space, weekend trips, decent nightlife"
  },
  highroller: {
    rent: 2800,
    food: 1200,
    transport: 300,
    utilities: 350,
    healthcare: 450,
    entertainment: 800,
    coworking: 250,
    gym: 120,
    misc: 450,
    total: 6720,
    description: "Nice 2-bedroom in Palermo Hollywood or Puerto Madero, dining out frequently, premium everything",
    rentDetails: "Modern 2-bedroom with amenities (gym, pool, security)",
    foodDetails: "Frequent dining out, delivery, quality groceries",
    lifestyle: "Premium coworking, regular travel, upscale nightlife"
  }
};

// Detailed expense categories with real 2025 prices
const expenseCategories = [
  {
    icon: HomeIcon,
    title: "Rent (USD Prices)",
    description: "Rent is typically quoted in USD and paid in cash or via wire. Prices have doubled since 2023.",
    items: [
      { name: "Room in shared apt (Villa Crespo/Caballito)", price: "$450-600" },
      { name: "Room in shared apt (Palermo)", price: "$600-800" },
      { name: "Studio apartment (budget areas)", price: "$700-950" },
      { name: "1-bedroom (Belgrano/Almagro)", price: "$900-1,200" },
      { name: "1-bedroom (Palermo/Recoleta)", price: "$1,100-1,600" },
      { name: "2-bedroom nice building (Palermo)", price: "$1,800-2,400" },
      { name: "2-bedroom luxury (Puerto Madero)", price: "$2,500-4,000" },
    ],
  },
  {
    icon: UtensilsIcon,
    title: "Food & Dining",
    description: "Restaurant prices now rival Western Europe. The 'cheap Argentina' of 2020-2023 is gone.",
    items: [
      { name: "Empanada (takeaway)", price: "$1.50-2.50" },
      { name: "Menu del día (weekday lunch)", price: "$12-18" },
      { name: "Pizza + beer (casual place)", price: "$22-32" },
      { name: "Dinner for 2 (mid-range restaurant)", price: "$80-120" },
      { name: "Dinner for 2 (nice restaurant)", price: "$150-220" },
      { name: "Coffee at café", price: "$4-6" },
      { name: "Craft beer (pint)", price: "$7-12" },
      { name: "Bottle of wine (mid-range)", price: "$12-20" },
    ],
  },
  {
    icon: BusIcon,
    title: "Transportation",
    description: "Public transport is extremely cheap. Taxis and Uber are affordable compared to US/Europe.",
    items: [
      { name: "SUBE card (bus/subway)", price: "$0.25-0.35/ride" },
      { name: "Taxi (short trip, 2-3km)", price: "$3-5" },
      { name: "Taxi (airport to city)", price: "$25-35" },
      { name: "Uber/Cabify (short trip)", price: "$4-7" },
      { name: "Uber/Cabify (cross-city)", price: "$8-15" },
      { name: "Monthly SUBE pass (frequent use)", price: "$18-25" },
    ],
  },
  {
    icon: HeartIcon,
    title: "Healthcare (Prepaga)",
    description: "Private health insurance is essential. Prices vary by age bracket significantly.",
    items: [
      { name: "Basic plan (under 35)", price: "$65-95/month" },
      { name: "Basic plan (35-50)", price: "$95-145/month" },
      { name: "Basic plan (50+)", price: "$145-225/month" },
      { name: "Premium plan (under 35)", price: "$125-185/month" },
      { name: "Premium plan (35-50)", price: "$185-275/month" },
      { name: "Doctor consultation (private)", price: "$35-65" },
      { name: "Dental cleaning", price: "$35-65" },
      { name: "Emergency room visit", price: "$45-85" },
    ],
  },
  {
    icon: WifiIcon,
    title: "Utilities & Services",
    description: "Internet is fast and cheap. Phone plans are affordable. Electricity has been rising.",
    items: [
      { name: "Internet (300 Mbps)", price: "$22-28/month" },
      { name: "Internet (1000 Mbps)", price: "$32-42/month" },
      { name: "Mobile plan (5-10GB)", price: "$8-15/month" },
      { name: "Mobile plan (unlimited)", price: "$18-28/month" },
      { name: "Electricity (1BR apt)", price: "$35-65/month" },
      { name: "Gas & water (1BR apt)", price: "$25-45/month" },
      { name: "Building expenses (expensas)", price: "$85-175/month" },
    ],
  },
  {
    icon: BriefcaseIcon,
    title: "Coworking Spaces",
    description: "Coworking is popular among digital nomads. Prices vary by amenities and location.",
    items: [
      { name: "Basic hot desk (monthly)", price: "$75-115" },
      { name: "Dedicated desk (monthly)", price: "$125-185" },
      { name: "Private office (monthly)", price: "$285-450" },
      { name: "Day pass", price: "$12-18" },
      { name: "Weekly pass", price: "$45-65" },
    ],
  },
  {
    icon: DumbbellIcon,
    title: "Gym & Fitness",
    description: "Gyms are affordable. Many modern apartment buildings include basic gyms.",
    items: [
      { name: "Basic gym (monthly)", price: "$22-35" },
      { name: "Mid-range gym (monthly)", price: "$35-55" },
      { name: "Premium gym/spa (monthly)", price: "$65-95" },
      { name: "CrossFit box (monthly)", price: "$45-75" },
      { name: "Yoga studio (monthly)", price: "$35-55" },
      { name: "Personal training session", price: "$18-28" },
    ],
  },
  {
    icon: FilmIcon,
    title: "Entertainment",
    description: "Entertainment is where Argentina shines - world-class culture at affordable prices.",
    items: [
      { name: "Movie ticket", price: "$5-8" },
      { name: "Theater ticket (good seats)", price: "$25-65" },
      { name: "Tango show (tourist)", price: "$45-85" },
      { name: "Night out (drinks + cover)", price: "$25-55" },
      { name: "Museum entrance", price: "$2-8" },
      { name: "Concert ticket (local)", price: "$15-35" },
      { name: "Concert ticket (international)", price: "$65-185" },
    ],
  },
];

// Neighborhood rent comparison - updated for 2026 reality
const neighborhoodComparison = [
  { name: "Puerto Madero", rent: "$$$$", rentRange: "$2,500-4,500", vibe: "Ultra-modern, waterfront, expat enclave", transport: "Good" },
  { name: "Palermo (Hollywood/Soho)", rent: "$$$", rentRange: "$1,400-2,400", vibe: "Trendy, nightlife, restaurants, young", transport: "Excellent" },
  { name: "Recoleta", rent: "$$$", rentRange: "$1,200-2,200", vibe: "Upscale, historic, museums, families", transport: "Excellent" },
  { name: "Belgrano", rent: "$$", rentRange: "$900-1,500", vibe: "Residential, quiet, parks, families", transport: "Very Good" },
  { name: "San Telmo", rent: "$$", rentRange: "$700-1,100", vibe: "Bohemian, touristy, tango, artsy", transport: "Good" },
  { name: "Villa Crespo", rent: "$", rentRange: "$600-1,000", vibe: "Up-and-coming, authentic, outlets", transport: "Good" },
  { name: "Caballito", rent: "$", rentRange: "$550-950", vibe: "Traditional, residential, very local", transport: "Very Good" },
  { name: "Almagro", rent: "$", rentRange: "$650-1,100", vibe: "Student area, cafes, affordable-ish", transport: "Good" },
];

// Sample grocery receipt - 2026 prices (doubled from 2023)
const groceryReceipt = [
  { item: "1L milk", price: "$2.40" },
  { item: "Dozen eggs", price: "$4.80" },
  { item: "1kg chicken breast", price: "$9.50" },
  { item: "1kg rice", price: "$3.20" },
  { item: "1kg pasta", price: "$2.80" },
  { item: "Bread (baguette)", price: "$2.40" },
  { item: "Butter (200g)", price: "$4.40" },
  { item: "Cheese (500g)", price: "$8.40" },
  { item: "Yogurt (1kg)", price: "$5.60" },
  { item: "Coffee (250g)", price: "$7.60" },
  { item: "Wine (decent bottle)", price: "$11" },
  { item: "6-pack beer", price: "$9" },
  { item: "Fresh vegetables (assorted)", price: "$13" },
  { item: "Fruit (assorted)", price: "$9.50" },
];

const groceryTotal = "$93.60";

// City comparison data - 2026 reality
const cityComparison = [
  { city: "Buenos Aires", rent: "$1,100", meal: "$22", transport: "$50", total: "$2,500" },
  { city: "Mexico City", rent: "$900", meal: "$18", transport: "$20", total: "$1,800" },
  { city: "Lisbon", rent: "$1,300", meal: "$24", transport: "$50", total: "$2,600" },
  { city: "Barcelona", rent: "$1,500", meal: "$30", transport: "$60", total: "$3,000" },
  { city: "Austin, TX", rent: "$1,700", meal: "$40", transport: "$70", total: "$3,400" },
];

export default function CostOfLivingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Cost of Living</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <TrendingUpIcon size="sm" className="mr-1" />
              Updated February 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cost of Living in Argentina 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The &quot;cheap Argentina&quot; era is OVER. Prices have doubled since 2023.
              Real 2026 budgets for Buenos Aires—now rivaling Western Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>USD pricing (2026)</span>
              </div>
              <div className="flex items-center gap-2">
                <CalculatorIcon size="sm" className="text-primary" />
                <span>3 budget profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircleIcon size="sm" className="text-primary" />
                <span>Prices doubled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Economic Reality Banner */}
      <section className="py-12 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircleIcon size="lg" className="text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                  2026 Reality: Argentina Is NOT Cheap Anymore
                </h2>
                <p className="text-amber-800 dark:text-amber-200 mb-3">
                  <strong>Prices have doubled since 2023.</strong> The &quot;bargain Argentina&quot; that attracted 
                  digital nomads with $600 apartments is gone. Buenos Aires now rivals Lisbon or Barcelona in cost.
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Under Milei&apos;s economy, inflation has stabilized at 2-3% monthly (down from 25%), but the 
                  base prices are now permanently higher. Expect Western Europe-level costs for restaurants, 
                  rent, and services.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white/80 dark:bg-black/20">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-amber-600 mb-1">2-3%</div>
                  <p className="text-sm text-muted-foreground">Monthly inflation (stabilized under Milei)</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 dark:bg-black/20">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-amber-600 mb-1">2x</div>
                  <p className="text-sm text-muted-foreground">Price increase since 2023</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 dark:bg-black/20">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-amber-600 mb-1">Europe</div>
                  <p className="text-sm text-muted-foreground">Current price level comparison</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Exchange Rate Confusion Explained */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Exchange Rate Maze</h2>
            <p className="text-muted-foreground mb-8">
              Understanding Argentina's multiple exchange rates is crucial. Using the wrong one can cost you 50% more.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-red-500">✗</span> Official Rate (Banco Nación)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    The government-set rate. This is what you&apos;ll get if you use your foreign credit card 
                    or withdraw from an ATM. <strong>NEVER use this—you&apos;ll lose ~40%.</strong>
                  </p>
                  <div className="text-2xl font-bold text-red-600">~$1,400 ARS/$1 USD</div>
                  <p className="text-xs text-muted-foreground mt-1">You lose ~40% of your money</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-green-500">✓</span> Blue Dollar (Dólar Blue)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    The unofficial street rate for physical USD cash. Bring USD bills and exchange at cuevas. 
                    Check <a href="https://dolarhoy.com" target="_blank" rel="noopener" className="text-primary underline">dolarhoy.com</a> daily.
                  </p>
                  <div className="text-2xl font-bold text-green-600">~$1,400 ARS/$1 USD</div>
                  <p className="text-xs text-muted-foreground mt-1">The rate locals actually use</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-blue-500">★</span> Western Union / Remittances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send yourself money via Western Union. Most popular option for expats without DNI. 
                    Pick up in pesos at branches with passport only.
                  </p>
                  <div className="text-2xl font-bold text-blue-600">~$1,380 ARS/$1 USD</div>
                  <p className="text-xs text-muted-foreground mt-1">Best option for most expats</p>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-amber-500">◆</span> MEP / CCL (Financial)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Financial market rates through local brokers. Requires local bank account and DNI. 
                    Best for large amounts once you have residency.
                  </p>
                  <div className="text-2xl font-bold text-amber-600">~$1,380 ARS/$1 USD</div>
                  <p className="text-xs text-muted-foreground mt-1">For those with DNI and local banking</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                <LightbulbIcon size="sm" />
                The Golden Rule
              </h3>
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                <strong>Never use your foreign credit or debit card in Argentina.</strong> You'll get the official rate 
                and instantly lose 40-50% of your purchasing power. Bring USD cash, use Western Union, or open a 
                local bank account and use MEP/CCL. The cash economy is king here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Budget Calculator */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Real Monthly Budgets</h2>
            <p className="text-center text-muted-foreground mb-8">
              Three authentic profiles based on actual expat spending. Prices in USD at blue rate equivalent.
            </p>

            <Tabs defaultValue="comfortable" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="backpacker">Budget Backpacker</TabsTrigger>
                <TabsTrigger value="comfortable">Comfortable Expat</TabsTrigger>
                <TabsTrigger value="highroller">High Roller</TabsTrigger>
              </TabsList>

              {Object.entries(monthlyCosts).map(([key, costs]) => (
                <TabsContent key={key} value={key}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="capitalize">
                        {key === "backpacker" && "Budget Backpacker"}
                        {key === "comfortable" && "Comfortable Expat"}
                        {key === "highroller" && "High Roller"}
                      </CardTitle>
                      <CardDescription>{costs.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Lifestyle Snapshot</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li><strong>Housing:</strong> {costs.rentDetails}</li>
                          <li><strong>Food:</strong> {costs.foodDetails}</li>
                          <li><strong>Social:</strong> {costs.lifestyle}</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <HomeIcon size="sm" className="text-muted-foreground" />
                            <span>Rent</span>
                          </div>
                          <span className="font-semibold">${costs.rent}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <UtensilsIcon size="sm" className="text-muted-foreground" />
                            <span>Food & Dining</span>
                          </div>
                          <span className="font-semibold">${costs.food}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <BusIcon size="sm" className="text-muted-foreground" />
                            <span>Transportation</span>
                          </div>
                          <span className="font-semibold">${costs.transport}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <WifiIcon size="sm" className="text-muted-foreground" />
                            <span>Utilities & Internet</span>
                          </div>
                          <span className="font-semibold">${costs.utilities}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <HeartIcon size="sm" className="text-muted-foreground" />
                            <span>Healthcare</span>
                          </div>
                          <span className="font-semibold">${costs.healthcare}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <FilmIcon size="sm" className="text-muted-foreground" />
                            <span>Entertainment</span>
                          </div>
                          <span className="font-semibold">${costs.entertainment}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <BriefcaseIcon size="sm" className="text-muted-foreground" />
                            <span>Coworking</span>
                          </div>
                          <span className="font-semibold">${costs.coworking}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <DumbbellIcon size="sm" className="text-muted-foreground" />
                            <span>Gym</span>
                          </div>
                          <span className="font-semibold">${costs.gym}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <ReceiptIcon size="sm" className="text-muted-foreground" />
                            <span>Miscellaneous</span>
                          </div>
                          <span className="font-semibold">${costs.misc}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 bg-primary/5 rounded-lg px-4">
                          <span className="font-bold">Total Monthly</span>
                          <span className="font-bold text-xl text-primary">${costs.total}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>These are baseline estimates. Add 15-20% buffer for inflation adjustments and unexpected expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What $1000/Month Actually Looks Like */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What $1,000/Month Actually Looks Like</h2>
            <p className="text-center text-muted-foreground mb-8">
              The most common question from prospective expats. Here's the honest breakdown.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Room in shared apartment (Palermo/Villa Crespo)</span>
                    <span className="font-semibold">$350</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Food (mix of cooking + some dining out)</span>
                    <span className="font-semibold">$275</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Transportation (SUBE + occasional Uber)</span>
                    <span className="font-semibold">$45</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Utilities (split in shared apt)</span>
                    <span className="font-semibold">$55</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Basic prepaga (under 35)</span>
                    <span className="font-semibold">$85</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Coworking (hot desk, 2-3x/week)</span>
                    <span className="font-semibold">$75</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Entertainment & going out</span>
                    <span className="font-semibold">$95</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Miscellaneous & buffer</span>
                    <span className="font-semibold">$20</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-50 dark:bg-green-950/20 rounded-lg px-4">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-xl text-green-600">$1,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✓ What you CAN do:</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>Live in a decent shared apartment in a good neighborhood</li>
                  <li>Eat out 2-3 times per week at mid-range places</li>
                  <li>Go out on weekends (bars, not clubs every night)</li>
                  <li>Take occasional weekend trips (Mendoza, Tigre)</li>
                  <li>Have basic private health insurance</li>
                  <li>Work from a coworking space part-time</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">✗ What you CAN'T do:</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>Live alone in Palermo or Recoleta</li>
                  <li>Dine out every meal</li>
                  <li>Party at upscale clubs every weekend</li>
                  <li>Take frequent international trips</li>
                  <li>Have a car (parking alone is $150+/month)</li>
                  <li>Build significant savings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Expenses */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Detailed Expense Breakdown</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real prices from February 2025. Peso prices fluctuate monthly; USD equivalents shown at blue rate.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expenseCategories.map((category) => (
              <Card key={category.title} className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <category.icon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-xs">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Grocery Receipt */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Sample Grocery Run</h2>
            <p className="text-center text-muted-foreground mb-8 text-sm">
              What $47 gets you at a mid-range supermarket (Coto, Carrefour, Día)
            </p>

            <Card className="font-mono">
              <CardHeader className="border-b border-dashed">
                <div className="text-center">
                  <div className="font-bold text-lg">SUPERMERCADO</div>
                  <div className="text-xs text-muted-foreground">Buenos Aires, Argentina</div>
                  <div className="text-xs text-muted-foreground">February 2025</div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-1 text-sm">
                  {groceryReceipt.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.item}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dashed mt-4 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>TOTAL</span>
                    <span>{groceryTotal}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-4 text-center">
                  * Prices vary by neighborhood and inflation
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>This covers roughly 4-5 days of meals for one person cooking at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Rent by Neighborhood</h2>
            <p className="text-center text-muted-foreground mb-8">
              USD rent ranges for a 1-bedroom apartment. Prices vary by building amenities and exact location.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Neighborhood</th>
                        <th className="text-left py-3 px-2">1BR Range</th>
                        <th className="text-left py-3 px-2">Vibe</th>
                        <th className="text-left py-3 px-2">Transport</th>
                      </tr>
                    </thead>
                    <tbody>
                      {neighborhoodComparison.map((hood) => (
                        <tr key={hood.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">
                            <Link href={`/neighborhoods/${hood.name.toLowerCase().replace(/[()]/g, "").replace(/ /g, "-")}`} className="hover:text-primary hover:underline">
                              {hood.name}
                            </Link>
                          </td>
                          <td className="py-3 px-2 font-mono text-sm">{hood.rentRange}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{hood.vibe}</td>
                          <td className="py-3 px-2 text-sm">{hood.transport}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hidden Costs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Hidden Costs & Gotchas</h2>
            <p className="text-center text-muted-foreground mb-8">
              Expenses that catch expats off guard. Budget for these upfront.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <HomeIcon size="sm" className="text-amber-500" />
                    Garantía (Rental Guarantee)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Most landlords require a garantía - a property owner who guarantees your rent. 
                    As a foreigner, you likely don't have one. Solutions:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Seguro de caución:</strong> Insurance policy (~1-1.5 months rent)</li>
                    <li>• <strong>More deposit:</strong> Offer 3-6 months upfront</li>
                    <li>• <strong>Airbnb/sublet:</strong> Bypass requirement entirely</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ReceiptIcon size="sm" className="text-amber-500" />
                    Realtor Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you use a real estate agent (inmobiliaria), you'll pay:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Commission:</strong> 1-1.5 months rent</li>
                    <li>• <strong>Contract fee:</strong> ~$50-100</li>
                    <li>• <strong>Pro tip:</strong> Find apartments on Facebook groups or Airbnb to avoid this</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CreditCardIcon size="sm" className="text-amber-500" />
                    Visa & Residency Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you plan to stay long-term:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Digital Nomad Visa:</strong> ~$200-400 total</li>
                    <li>• <strong>Rentista Visa:</strong> ~$1,500-3,000 (with lawyer)</li>
                    <li>• <strong>DNI (ID card):</strong> ~$50-100</li>
                    <li>• <strong>Lawyer fees:</strong> $500-1,500 depending on visa type</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ZapIcon size="sm" className="text-amber-500" />
                    Building Expenses (Expensas)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Monthly building maintenance fees, often not included in rent:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Old building:</strong> $50-100/month</li>
                    <li>• <strong>Modern building:</strong> $100-200/month</li>
                    <li>• <strong>Luxury building:</strong> $200-400/month (includes gym, pool, security)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Saving Hacks */}
      <section className="py-16 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Money-Saving Hacks</h2>
            <p className="text-center text-muted-foreground mb-8">
              How to stretch your dollars further in Argentina.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <WalletIcon size="sm" className="text-green-500" />
                    The Western Union Hack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send money to yourself via Western Union. You'll often get a better rate than the blue dollar, 
                    and it's safer than carrying large amounts of cash.
                  </p>
                  <div className="text-sm bg-muted p-3 rounded">
                    <strong>How:</strong> Send from your home bank account to yourself in Argentina. 
                    Pick up pesos at any WU branch (bring passport).
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSignIcon size="sm" className="text-green-500" />
                    Crypto Arbitrage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Many expats use USDC/USDT to move money. Buy stablecoins abroad, sell for pesos 
                    at the crypto blue rate (often better than cash blue).
                  </p>
                  <div className="text-sm bg-muted p-3 rounded">
                    <strong>Platforms:</strong> Lemon Cash, Buenbit, Ripio. Requires local bank account.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPinIcon size="sm" className="text-green-500" />
                    Shop at Ferias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Neighborhood ferias (street markets) offer produce at 30-50% less than supermarkets. 
                    Plus, the quality is often better.
                  </p>
                  <div className="text-sm bg-muted p-3 rounded">
                    <strong>Best ones:</strong> Mercado de San Telmo, your local barrio feria (usually weekends)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PiggyBankIcon size="sm" className="text-green-500" />
                    Menu del Día
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Weekday lunch specials are incredible value. 2-3 courses with drink for $6-10 at decent places.
                  </p>
                  <div className="text-sm bg-muted p-3 rounded">
                    <strong>Tip:</strong> Look for "MDQ" or "Menú Ejecutivo" signs. Usually Mon-Fri, 12-4pm.
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircleIcon size="sm" />
                What NOT to Do
              </h3>
              <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                <li>• <strong>Never use foreign cards</strong> - you'll get the official rate and lose 40-50%</li>
                <li>• <strong>Don't exchange at the airport</strong> - terrible rates, use Western Union instead</li>
                <li>• <strong>Don't carry all your cash</strong> - use safety deposit boxes or split it up</li>
                <li>• <strong>Don't ignore expensas</strong> - ask about building fees before signing a lease</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Buenos Aires vs Other Cities</h2>
            <p className="text-center text-muted-foreground mb-8">
              How Buenos Aires compares to other popular expat destinations (monthly costs, single person).
            </p>

            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">City</th>
                        <th className="text-left py-3 px-2">Rent (1BR)</th>
                        <th className="text-left py-3 px-2">Meal Out</th>
                        <th className="text-left py-3 px-2">Transport</th>
                        <th className="text-left py-3 px-2">Total Est.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cityComparison.map((city) => (
                        <tr key={city.city} className={`border-b last:border-0 ${city.city === "Buenos Aires" ? "bg-primary/5" : ""}`}>
                          <td className="py-3 px-2 font-medium">{city.city}</td>
                          <td className="py-3 px-2">{city.rent}</td>
                          <td className="py-3 px-2">{city.meal}</td>
                          <td className="py-3 px-2">{city.transport}</td>
                          <td className="py-3 px-2 font-semibold">{city.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Buenos Aires offers European-quality lifestyle at Latin American prices - if you navigate the exchange rates correctly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Psychological Aspect */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Psychological Reality</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                Living with high inflation changes your psychology. Here's what to expect:
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The Price Check Habit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You'll find yourself checking dolarhoy.com daily. Prices at your favorite restaurant 
                      will change between visits. You'll celebrate when the exchange rate moves in your favor.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The Cash Economy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You'll carry more cash than you're used to. You'll learn to count stacks of pesos 
                      quickly. Paying with a card will feel weird and wrong.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The Stockpile Instinct</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      When you see a good price on something non-perishable, you'll buy extra. 
                      Locals do this constantly - it's rational behavior in an inflationary economy.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The USD Anchor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You'll start thinking in USD for big purchases, even though you're earning/spending pesos. 
                      It's the only way to maintain sanity and compare value.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Your Spending */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">How to Track Your Spending</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Spreadsheet Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Simple Google Sheet with categories. Convert peso expenses to USD daily using that day's rate. 
                    Best for detail-oriented people.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">App Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Apps like Spendee, Splitwise, or even a notes app. Record every purchase, categorize weekly. 
                    Less precise but easier to maintain.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Envelope Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Withdraw your weekly budget in pesos. When it's gone, it's gone. Forces discipline 
                    and eliminates tracking overhead.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Recommended Tracking Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-blue-800 dark:text-blue-200">
                <div>• Rent</div>
                <div>• Groceries</div>
                <div>• Dining Out</div>
                <div>• Transport</div>
                <div>• Healthcare</div>
                <div>• Coworking</div>
                <div>• Entertainment</div>
                <div>• Miscellaneous</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircleIcon size="lg" className="text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Final Reality Check
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      These numbers are accurate as of February 2025, but Argentina's economy is volatile. 
                      Prices can change rapidly. Always verify current rates on <a href="https://dolarhoy.com" target="_blank" rel="noopener" className="underline">dolarhoy.com</a> or 
                      similar sites. Connect with current expats in Facebook groups or Reddit (r/ArgentinaExpats) 
                      for real-time updates. Budget 15-20% extra for your first month as you figure things out.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Make the Move?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Explore neighborhoods, visa options, and get the full picture of life in Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/visas/digital-nomad">
                  Visa Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
