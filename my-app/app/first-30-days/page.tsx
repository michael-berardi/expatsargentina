import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  PlaneIcon, 
  HomeIcon, 
  SmartphoneIcon, 
  ShoppingCartIcon, 
  UtensilsIcon,
  DollarSignIcon,
  MessageCircleIcon,
  BuildingIcon,
  FileTextIcon,
  WifiIcon,
  TrainIcon,
  CoffeeIcon,
  UsersIcon,
  HeartIcon,
  StarIcon,
  AlertCircleIcon,
  LightbulbIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "First 30 Days in Buenos Aires - Complete Arrival Guide 2026",
  description: "Your week-by-week survival guide for the first month in Buenos Aires. Real advice on housing, money, transport, and settling in from someone who's been through it.",
  keywords: ["first month Buenos Aires", "moving to Buenos Aires guide", "Buenos Aires arrival tips", "expat first 30 days Argentina"],
  openGraph: {
    title: "First 30 Days in Buenos Aires - The Real Survival Guide",
    description: "Week-by-week guide for your first month. What nobody tells you about arriving in Buenos Aires.",
  },
  alternates: { canonical: "https://expatsargentina.com/first-30-days" },
};

const week1Tasks = [
  {
    title: "Getting from EZE Airport",
    icon: PlaneIcon,
    content: `Skip the taxi touts inside arrivals - they're overpriced and sometimes shady. Head straight to the official taxi booth ("Remis") or book a transfer in advance.

**Best options:**
- **Tienda León** - Reliable shuttle service, about $15-20 to the city
- **Uber/Cabify** - Works well, usually $12-18 depending on traffic
- **Official taxi booth** - Fixed rates, no surprises

**Avoid:** The guys shouting "Taxi! Taxi!" inside the terminal. They'll charge double.`
  },
  {
    title: "First Accommodation",
    icon: HomeIcon,
    content: `Book an Airbnb for your first 2-3 weeks minimum. You need time to see apartments in person before committing to a lease.

**Where to book:**
- **Palermo Soho/Hollywood** - Central, lots of cafes, easy to get around
- **Recoleta** - Safer, quieter, more expensive
- **Belgrano** - Good for families, residential feel

**I wish I'd known:** Don't book a long-term rental before you arrive. Photos lie, neighborhoods feel different in person, and you need to understand your commute before committing.`
  },
  {
    title: "Local SIM Card",
    icon: SmartphoneIcon,
    content: `Get connected within your first day. You'll need data for maps, translations, and staying in touch.

**The carriers:**
- **Personal** - Best coverage, slightly pricier, good English support in some stores
- **Movistar** - Cheapest, decent coverage, can be spotty in some buildings
- **Claro** - Middle ground, good city coverage

**Where to buy:** Any carrier store with your passport. Ask for a "chip prepago" (prepaid SIM). Plans start around $5-10/month for basic data.

**Pro tip:** Download WhatsApp before you arrive. Everyone uses it here - businesses, landlords, new friends.`
  },
  {
    title: "First Grocery Shop",
    icon: ShoppingCartIcon,
    content: `You'll need to stock your Airbnb. Here's where locals actually shop:

**Supermarkets:**
- **Día** - Budget option, basic selection
- **Carrefour** - Mid-range, good variety, locations everywhere
- **Jumbo** - Premium, best selection of imported goods
- **Disco** - Good middle ground, common in nicer neighborhoods

**What to buy first:**
- Mate (if you're curious) - get a kit with bombilla and yerba
- Facturas for breakfast - the bakery section has amazing pastries
- Wine - it's ridiculously cheap and good
- Subte card (SUBE) - usually at the customer service desk

**Markets:** Find your local "verdulería" (produce shop) for fresh fruits and vegetables at half the supermarket price.`
  },
  {
    title: "Finding Your First Meal",
    icon: UtensilsIcon,
    content: `You're tired, hungry, and everything is new. Skip the tourist traps near your Airbnb.

**First-night recommendations:**
- **El Cuartito** (Talcahuano 937) - Classic pizza, been around since 1934
- **Las Cuartetas** (Corrientes 388) - Another pizza institution
- **Any empanada shop on a side street** - Look for places with locals waiting

**Empanada spots to know:**
- **La Continental** (multiple locations) - Reliable chain
- **El Sanjuanino** (Posadas 1515) - Traditional, excellent
- **Ña Serapia** (various) - Open late, perfect for post-flight hunger

**Avoid:** Restaurants with menus in 3 languages and photos of food. They're for tourists.`
  },
  {
    title: "Getting Cash",
    icon: DollarSignIcon,
    content: `This is crucial. Argentina runs on cash, and you'll need pesos immediately.

**Your options:**

1. **Western Union** - Best rates, but locations can have long lines
   - Download the app, send from your home bank
   - Pick up at any WU location with your passport
   - You'll get the "blue rate" - significantly better than official

2. **Cuevas (exchange houses)** - Fast, good rates, cash only
   - Ask your Airbnb host for a recommendation
   - Count your money carefully
   - Don't flash cash on the street

3. **ATMs** - Last resort
   - Terrible rates (official rate)
   - Low withdrawal limits
   - Fees add up fast

**Bring USD cash if possible** - you'll get the best rate exchanging physical dollars.`
  },
  {
    title: "Basic Spanish Phrases",
    icon: MessageCircleIcon,
    content: `You don't need fluency, but these phrases will save you:

**Essentials:**
- "No entiendo" (I don't understand)
- "Más despacio, por favor" (Slower, please)
- "¿Cuánto cuesta?" (How much does it cost?)
- "La cuenta, por favor" (The bill, please)
- "¿Dónde está...?" (Where is...?)

**For taxis/UBER:**
- "Derecho" (straight ahead)
- "Aquí está bien" (Here is fine)
- "A la derecha/izquierda" (To the right/left)

**Shopping:**
- "¿Aceptan tarjeta?" (Do you take card?)
- "Solo tengo efectivo" (I only have cash)
- "¿Tiene cambio?" (Do you have change?)

**Download:** Google Translate with offline Spanish pack. The camera feature reads menus in real-time.`
  },
];

const week2Tasks = [
  {
    title: "Finding an Apartment",
    icon: BuildingIcon,
    content: `Now that you're rested, start the real apartment hunt. This takes 1-3 weeks typically.

**Where to search:**
- **ZonaProp** - Biggest selection, filter by neighborhood and price
- **MercadoLibre** - Classifieds, good for direct owner listings
- **Facebook groups** - "Expats in Buenos Aires" often has sublets
- **Walking around** - Look for "Alquila" (for rent) signs with phone numbers

**What you'll need:**
- Proof of income (bank statements work)
- Passport
- Usually 1-2 months deposit
- Sometimes a garantía (see below)

**Red flags:**
- Asking for money before you see the place
- Prices way below market rate
- Pressure to decide immediately
- No written contract offered`
  },
  {
    title: "The Garantía Nightmare",
    icon: AlertCircleIcon,
    content: `The garantía is a local property owner who co-signs your lease. For foreigners, it's often impossible to get.

**Your alternatives:**

1. **Pay more upfront** - Offer 3-6 months deposit instead
2. **Seguro de caución** - Insurance that acts as guarantee (about 1 month's rent)
3. **Find flexible landlords** - Some accept foreign bank statements
4. **Use an agency** - They sometimes have solutions for expats
5. **Airbnb long-term** - Many negotiate monthly rates 30-40% off

**Reality check:** Many expats just don't bother with formal leases. They do Airbnb long-term or find landlords willing to work without garantía. It's not ideal, but it's common.`
  },
  {
    title: "Utilities & Internet",
    icon: WifiIcon,
    content: `Most apartments include basic utilities in rent. Internet is usually your responsibility.

**Internet providers:**
- **Fibertel** - Most common, reliable, good speeds
- **Telecentro** - Cheaper, decent service
- **Flow** - Bundle with TV if you want local channels

**Setup process:**
1. Call or go to a store with your address
2. They'll check if service is available
3. Schedule installation (usually 3-7 days out)
4. Technician comes to set up modem/router

**Cost:** $20-35/month for 100-300 Mbps

**Note:** Some buildings have existing contracts. Check with your landlord before ordering.`
  },
  {
    title: "First Trip to Migraciones",
    icon: FileTextIcon,
    content: `If you're staying long-term, you'll need to deal with immigration. Even for tourist extensions, you'll end up here.

**Location:** Av. Antártida Argentina 1205 (Retiro)

**What to bring:**
- Passport
- Proof of onward travel (if extending tourist visa)
- Any application forms you've submitted
- Patience (lots of it)

**Tips:**
- Arrive early - lines form before opening
- Bring a book or fully charged phone
- Some processes require appointments online first
- Consider hiring a "gestor" (administrative helper) for complex cases

**For Digital Nomad Visa:** Start this process online at migraciones.gov.ar before your tourist stamp expires.`
  },
  {
    title: "Opening a Bank Account",
    icon: DollarSignIcon,
    content: `Honestly? Many expats don't bother. But it can be useful for rent and utilities.

**If you want to try:**
- **Banco Galicia** - Most expat-friendly
- **BBVA** - Good online platform
- **Santander Río** - International connections

**You'll likely need:**
- DNI (Argentine ID) - catch-22 for new arrivals
- Or CDI (tax ID) - easier to get
- Proof of address
- Proof of income

**Alternative:** Many expats just use:
- Western Union for regular transfers
- Home country credit cards (no foreign transaction fees)
- Cash for daily expenses

**The reality:** Wait until you have residency or at least a CDI. It's not worth the hassle otherwise.`
  },
  {
    title: "Gym & Coworking",
    icon: UsersIcon,
    content: `Time to build your routine. Buenos Aires has great options for both.

**Gyms:**
- **Megatlon** - Premium, multiple locations, $40-60/month
- **SportClub** - Good mid-range option
- **SmartFit** - Budget-friendly, $15-25/month
- **CrossFit boxes** - Every neighborhood has several

**Coworking:**
- **WeWork** - Multiple locations, familiar if you've used elsewhere
- **La Maquinita** - Local chain, good vibes
- **AreaTres** - Popular with startups and nomads
- **Huerta** - Palermo, great community

**Cost:** $80-150/month for coworking

**Try before committing:** Most offer day passes so you can test the vibe.`
  },
];

const week3Tasks = [
  {
    title: "Your First Asado",
    icon: UtensilsIcon,
    content: `You'll get invited to an asado (Argentine BBQ). This is a big deal - don't mess it up.

**What to bring:**
- Wine (Malbec or Cabernet) - never show up empty-handed
- OR a dessert (facturas from a good bakery)
- NOT beer (wine is the asado drink)

**What to expect:**
- Starts late (9-10pm is normal)
- Goes for hours
- Multiple rounds of meat
- Lots of conversation
- Mate might be passed around

**Etiquette:**
- Don't rush the asador (grill master)
- Try everything offered
- Compliment the food sincerely
- Stay until the end if you can

**Conversation topics:**
- Football (know which team your host supports)
- Travel
- Food
- Avoid: Politics, the economy (unless they bring it up)`
  },
  {
    title: "Mastering the SUBE",
    icon: TrainIcon,
    content: `The SUBE card is your key to the city. You'll use it for buses, subways (subte), and trains.

**How it works:**
- Tap when entering buses/subte
- One card works for all transport
- Can be shared (tap multiple times for multiple people)
- Load it at kiosks, subway stations, or online

**The subte lines:**
- **Linea A** (light blue) - Historic, runs through San Telmo
- **Linea B** (red) - Connects Palermo to center
- **Linea D** (green) - Palermo to Congreso
- **Linea H** (yellow) - North-south connector

**Bus tips:**
- Tell the driver your destination when boarding
- They'll set the fare, then you tap
- Buses run 24/7 on major routes
- Google Maps works well for routes

**Cost:** About $0.30-0.50 per ride (prices change frequently due to inflation)`
  },
  {
    title: "Finding Your Local Spots",
    icon: MapPinIcon,
    content: `This is when Buenos Aires starts feeling like home. Find your regular places.

**Your rotation should include:**

**Café de confianza** - Your go-to coffee spot
- Find one with good WiFi within walking distance
- Go regularly, tip well, learn the staff's names
- Eventually they'll remember your order

**Panadería** - Your bakery
- Fresh medialunas every morning
- Try different ones until you find your favorite
- Ask what's fresh ("¿Qué tienen caliente?")

**Carnicería** - Your butcher
- Quality varies wildly
- Find one with good cuts and fair prices
- Learn the cuts (bife de chorizo, vacío, entraña)

**Verdulería** - Your produce shop
- Better quality and prices than supermarkets
- Build a relationship for the best stuff`
  },
  {
    title: "Meeting Other Expats",
    icon: UsersIcon,
    content: `Making friends takes effort. Here's where to actually meet people:

**Online to offline:**
- **Meetup.com** - Language exchanges, hiking groups, tech meetups
- **Internations** - Monthly events, mix of expats and locals
- **Couchsurfing hangouts** - Even if you're not surfing

**Language exchanges:**
- **Mundo Lingo** - Weekly events, very social
- **Conversation Exchange** - One-on-one language practice
- **Spanglish** - Structured exchanges

**Coworking communities:**
- Many host happy hours and events
- Great for digital nomads

**Classes:**
- Tango lessons (obviously)
- Cooking classes
- Yoga or fitness classes
- Spanish group classes

**Real talk:** It takes 2-3 months to build a social circle. Be patient, say yes to everything at first.`
  },
  {
    title: "First Doctor Visit",
    icon: HeartIcon,
    content: `Sooner or later, you'll need medical care. Here's how it works:

**For emergencies:**
Go to a "guardia" (ER) at any hospital. Public hospitals treat everyone, but private is faster if you have insurance.

**For non-emergencies:**
- **Omint** - Good private hospital chain
- **Hospital Alemán** - Excellent, English-speaking staff
- **Hospital Italiano** - Top-tier care

**Finding a doctor:**
- Ask in expat groups for recommendations
- Many doctors speak English
- Private consultations run $30-80

**Health insurance (prepaga):**
- **OSDE** - Premium, expensive, excellent
- **Swiss Medical** - Very good, slightly cheaper
- **Galeno** - Good mid-range option
- **Medicus** - Budget-friendly

**Pharmacies:** Look for the green cross. Many medications available without prescription that require them elsewhere.`
  },
  {
    title: "Dealing with Homesickness",
    icon: CoffeeIcon,
    content: `Week 3 is when it hits. The novelty wears off, the challenges pile up, and you miss home.

**It's normal.** Everyone goes through it.

**What helps:**
- **Find your comfort foods** - There's a diaspora community for everything here. Missing Thai food? There's a place. Jewish deli food? Got it. Southern BBQ? Yep.
- **Video calls home** - Schedule regular times
- **English-speaking hangouts** - Sometimes you need a break from Spanish
- **Exercise** - Gyms, running groups, yoga
- **Routine** - Create structure in your days

**Places that feel like home:**
- **The Book Cellar** (Palermo) - English bookstore and café
- **NOLA** (Gorriti 4389) - American-style food
- **Any Starbucks** - I know, I know, but sometimes you need it

**Remember:** This feeling passes. Month 2 is usually when things turn around.`
  },
];

const week4Tasks = [
  {
    title: "Negotiating Rent",
    icon: DollarSignIcon,
    content: `Yes, you can negotiate. Landlords expect it.

**What you can negotiate:**
- **Price** - Ask for 10-15% off listed price
- **Deposit** - Try to pay 1 month instead of 2
- **Garantía** - Offer more deposit instead
- **Furnishings** - Ask for items you need
- **Contract length** - Shorter terms if you're unsure

**Leverage you have:**
- Paying several months upfront
- Foreign income (stable in USD)
- Long-term commitment
- No pets/no kids (if true)

**How to ask:**
"¿Hay alguna flexibilidad en el precio?" (Is there any flexibility on the price?)

**Be ready to walk away.** There are always more apartments.`
  },
  {
    title: "Starting the DNI Process",
    icon: FileTextIcon,
    content: `The DNI (Documento Nacional de Identidad) is your Argentine ID. It's worth getting if you're staying 6+ months.

**Who qualifies:**
- Residents (temporary or permanent)
- Those with certain visa types
- People born in Argentina (even if you've never lived here)

**The process:**
1. Get your residency visa approved first
2. Make an appointment at Renaper (renaper.gob.ar)
3. Bring: passport, visa, proof of address, birth certificate (apostilled)
4. Get fingerprinted and photographed
5. Wait 2-4 weeks for the card

**Why bother:**
- Easier banking
- Local phone plans
- Some discounts only for residents
- You feel more official

**Gestor option:** Hire an administrative helper if the bureaucracy overwhelms you. Worth every peso.`
  },
  {
    title: "Argentine Spanish (Lunfardo)",
    icon: MessageCircleIcon,
    content: `Argentine Spanish is different. You'll hear words that don't exist in other Spanish-speaking countries.

**Essential lunfardo:**
- **Che** - Hey/you (used constantly)
- **Boludo/a** - Idiot (among friends) / dude
- **Mina** - Woman (can be neutral or slightly crude)
- **Tipo** - Guy/dude
- **Laburo** - Work
- **Mufa** - Bad luck/jinx
- **Piola** - Cool/smart
- **Quilombo** - Mess/trouble

**The "sh" sound:**
Argentines pronounce "ll" and "y" like "sh" or "zh"
- "Calle" sounds like "cashe"
- "Yo" sounds like "sho"

**Voseo:**
They use "vos" instead of "tú" for "you"
- "Vos tenés" instead of "Tú tienes"
- "Vos sabés" instead of "Tú sabes"

**Don't worry:** You'll pick it up. Locals appreciate when you try.`
  },
  {
    title: "Building a Routine",
    icon: ClockIcon,
    content: `By week 4, you should have some structure. Argentine schedules are different.

**Typical Argentine day:**
- **8-9am** - Breakfast (light)
- **1-2pm** - Lunch (main meal)
- **5-6pm** - Merienda (afternoon snack)
- **9-10pm** - Dinner (very late by most standards)
- **Midnight+** - Social life begins

**Building your routine:**
- Find a café for morning work/coffee
- Schedule calls/meetings for your morning (their afternoon)
- Embrace the late dinner - it's non-negotiable
- Siesta isn't really a thing in Buenos Aires (unlike the provinces)

**Your week might include:**
- Language exchange meetup
- Tango class
- Gym routine
- Regular asado with friends
- Weekend feria (market) visit`
  },
  {
    title: "When Things Go Wrong",
    icon: AlertCircleIcon,
    content: `Stuff will go sideways. Here's who to call:

**Emergencies:**
- **911** - Police, fire, medical (works in Buenos Aires)
- **107** - Medical emergencies
- **101** - Fire

**Police:**
- ** Tourist Police** (Comisaría del Turista): 0800-999-5000
  - English-speaking officers
  - Used to dealing with foreigner issues

**Your embassy:**
- Keep their emergency number saved
- They can help with lost passports, legal issues
- Won't help with money or minor inconveniences

**Useful apps:**
- **BA Cómo Llego** - Public transport routes
- **Cómo Estacionar** - Parking info
- **Mi Argentina** - Government services

**Expat groups:**
- Facebook groups are surprisingly helpful for real-time advice
- Someone has dealt with whatever problem you're having

**Remember:** Most problems here are solvable. It just takes patience and sometimes a gestor.`
  },
];

const budgetBreakdown = {
  accommodation: {
    item: "Accommodation (Airbnb, 3 weeks)",
    cost: "$600-1,200",
    note: "Varies wildly by neighborhood"
  },
  deposit: {
    item: "Apartment deposit",
    cost: "$500-1,500",
    note: "If you find a long-term place"
  },
  food: {
    item: "Food & dining",
    cost: "$300-600",
    note: "Mix of cooking and eating out"
  },
  transport: {
    item: "Transportation",
    cost: "$50-100",
    note: "SUBE, taxis, Ubers"
  },
  phone: {
    item: "Phone & internet",
    cost: "$30-60",
    note: "SIM + home internet setup"
  },
  visa: {
    item: "Visa fees",
    cost: "$100-400",
    note: "If applying for residency"
  },
  miscellaneous: {
    item: "Miscellaneous",
    cost: "$200-400",
    note: "SIM card, household items, surprises"
  },
};

const wishIKnew = [
  {
    title: "The \"No\" That Means \"Maybe\"",
    content: "Argentines rarely say no directly. 'We'll see,' 'possibly,' or 'let me check' often mean no. Learn to read between the lines."
  },
  {
    title: "Cash is King",
    content: "Even though cards are more accepted now, cash (especially USD) gives you leverage in negotiations and access to better exchange rates."
  },
  {
    title: "Time is Flexible",
    content: "If someone says 'come at 9,' they might mean 9:30. If a repairman says 'Tuesday,' it might be Thursday. Plan accordingly."
  },
  {
    title: "The Expat Bubble is Real",
    content: "It's easy to only hang out with other foreigners. Make an effort to meet locals - that's where the real Buenos Aires is."
  },
  {
    title: "Inflation Changes Everything",
    content: "Prices I paid last month might be 10% higher now. Always verify current prices, especially for rent and services."
  },
  {
    title: "You Don't Need as Much Stuff",
    content: "I brought way too many clothes and gadgets. You can buy almost everything here, often for less than you'd pay at home."
  },
];

const specificRecommendations = [
  {
    category: "Cafés with WiFi",
    places: [
      { name: "LAB Tostadores", address: "Honduras 4146, Palermo", note: "Serious coffee, reliable WiFi" },
      { name: "Full City Coffee", address: "Thames 1535, Palermo", note: "Australian-style, great for working" },
      { name: "The Shelter", address: "José A. Cabrera 3940, Palermo", note: "Quiet, good for calls" },
    ]
  },
  {
    category: "Empanada Spots",
    places: [
      { name: "El Sanjuanino", address: "Posadas 1515, Recoleta", note: "Traditional, excellent" },
      { name: "La Continental", address: "Multiple locations", note: "Reliable chain, open late" },
      { name: "Ña Serapia", address: "Various locations", note: "Open 24 hours" },
    ]
  },
  {
    category: "Grocery Stores",
    places: [
      { name: "Jumbo", address: "Multiple locations", note: "Best selection, higher prices" },
      { name: "Disco", address: "Neighborhood locations", note: "Good middle ground" },
      { name: "Carrefour", address: "Everywhere", note: "Budget-friendly, decent quality" },
    ]
  },
  {
    category: "Coworking Spaces",
    places: [
      { name: "WeWork", address: "Multiple locations", note: "Familiar, reliable" },
      { name: "La Maquinita", address: "Costa Rica 5544, Palermo", note: "Local vibe, good community" },
      { name: "AreaTres", address: "El Salvador 5218, Palermo", note: "Popular with startups" },
    ]
  },
];

const faqs = [
  {
    question: "What's the first thing I should do when I arrive in Buenos Aires?",
    answer: "Get cash and a local SIM card within your first day. Argentina runs on cash, and you'll need pesos immediately for taxis, food, and basic purchases. Get a prepaid SIM from Personal, Movistar, or Claro at any carrier store with your passport. Download WhatsApp before you arrive—everyone uses it here for everything from business to social life.",
  },
  {
    question: "How do I get a SIM card in Buenos Aires?",
    answer: "Visit any Personal, Movistar, or Claro store with your passport and ask for a 'chip prepago' (prepaid SIM). Personal has the best coverage and some English support. Plans start around $5-10/month for basic data. You can top up at kiosks or online. Make sure your phone is unlocked before arriving.",
  },
  {
    question: "Can I open a bank account as a tourist in Argentina?",
    answer: "It's very difficult as a tourist. Most banks require a DNI (Argentine ID) or at minimum a CDI (tax ID). Many expats skip formal banking entirely and use Western Union for transfers, home country credit cards with no foreign transaction fees, and cash for daily expenses. Wait until you have residency or at least a CDI before attempting to open an account.",
  },
  {
    question: "How do I find an apartment in Buenos Aires?",
    answer: "Book an Airbnb for your first 2-3 weeks, then search in person using ZonaProp, MercadoLibre, Facebook groups like 'Expats in Buenos Aires', and by walking neighborhoods looking for 'Alquila' signs. Never commit to a long-term rental before seeing it in person. You'll typically need proof of income, your passport, and 1-2 months deposit. The garantía (local co-signer) requirement is the biggest challenge for foreigners.",
  },
  {
    question: "How much cash should I bring to Buenos Aires?",
    answer: "Bring $2,000-3,000 USD in cash as a buffer for your first month. USD bills get significantly better exchange rates than ATM withdrawals or card payments. Use Western Union to send yourself money for the best rates, or exchange physical dollars at cuevas (exchange houses) recommended by your Airbnb host. Always carry smaller denominations—breaking large bills is difficult.",
  },
  {
    question: "What are the most common mistakes new expats make in Buenos Aires?",
    answer: "The biggest mistakes are: booking a long-term rental before arriving (photos lie), using ATMs for cash (terrible official exchange rate), not learning basic Spanish phrases, staying only in the expat bubble, expecting things to work on a fixed schedule (Argentine time is flexible), and bringing too much stuff from home when most things are available locally.",
  },
  {
    question: "What's the realistic budget for the first month in Buenos Aires?",
    answer: "Expect to spend $1,780-4,260 USD in your first month. This includes temporary accommodation ($600-1,200), apartment deposit ($500-1,500), food and dining ($300-600), transportation ($50-100), phone and internet ($30-60), and miscellaneous expenses ($200-400). Visa fees can add $100-400 if you're applying for residency.",
  },
];

export default function First30DaysPage() {
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
                "name": "First 30 Days",
                "item": "https://expatsargentina.com/first-30-days"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
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
            <span className="text-foreground">First 30 Days</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <PlaneIcon size="sm" className="mr-1" />
              Arrival Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your First 30 Days in Buenos Aires
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The real, unfiltered guide to your first month. Week by week, 
              here's what you actually need to know from someone who's been through it.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon size="sm" className="text-primary" />
                <span>4-week roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon size="sm" className="text-primary" />
                <span>Specific addresses</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSignIcon size="sm" className="text-primary" />
                <span>Real budget breakdown</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week-by-Week Guide */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Week-by-Week Roadmap</h2>
            
            <Tabs defaultValue="week1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                <TabsTrigger value="week1">Week 1</TabsTrigger>
                <TabsTrigger value="week2">Week 2</TabsTrigger>
                <TabsTrigger value="week3">Week 3</TabsTrigger>
                <TabsTrigger value="week4">Week 4</TabsTrigger>
              </TabsList>

              <TabsContent value="week1" className="mt-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Week 1: Survival Mode</h3>
                  <p className="text-muted-foreground">
                    You're exhausted, overwhelmed, and everything is new. Focus on the basics: 
                    a place to sleep, food to eat, and cash in your pocket.
                  </p>
                </div>
                <div className="space-y-6">
                  {week1Tasks.map((task, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <task.icon size="md" className="text-primary" />
                          </div>
                          {task.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                          {task.content}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="week2" className="mt-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Week 2: Getting Set Up</h3>
                  <p className="text-muted-foreground">
                    Now that you're rested, tackle the bigger tasks. Finding housing, dealing with 
                    bureaucracy, and setting up your life.
                  </p>
                </div>
                <div className="space-y-6">
                  {week2Tasks.map((task, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <task.icon size="md" className="text-primary" />
                          </div>
                          {task.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                          {task.content}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="week3" className="mt-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Week 3: Finding Your Rhythm</h3>
                  <p className="text-muted-foreground">
                    This is when it gets real. You're not a tourist anymore, but you're not quite 
                    a local either. Build your routine and your community.
                  </p>
                </div>
                <div className="space-y-6">
                  {week3Tasks.map((task, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <task.icon size="md" className="text-primary" />
                          </div>
                          {task.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                          {task.content}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="week4" className="mt-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Week 4: Feeling Like a Local</h3>
                  <p className="text-muted-foreground">
                    You're settling in. Time to optimize, negotiate, and start thinking longer-term. 
                    You might actually know what you're doing now.
                  </p>
                </div>
                <div className="space-y-6">
                  {week4Tasks.map((task, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <task.icon size="md" className="text-primary" />
                          </div>
                          {task.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                          {task.content}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">First Month Budget</h2>
            <p className="text-center text-muted-foreground mb-8">
              Realistic costs for your first 30 days. Prices in USD, but remember inflation means these change constantly.
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {Object.values(budgetBreakdown).map((item, index) => (
                    <div key={index} className="flex justify-between items-start py-3 border-b last:border-0">
                      <div>
                        <div className="font-medium">{item.item}</div>
                        <div className="text-sm text-muted-foreground">{item.note}</div>
                      </div>
                      <div className="font-semibold text-primary">{item.cost}</div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-4 bg-primary/5 rounded-lg px-4 mt-4">
                    <span className="font-bold">Total First Month</span>
                    <span className="font-bold text-xl text-primary">$1,780-4,260</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircleIcon size="md" className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Budget tip:</strong> Bring $2,000-3,000 in cash as a buffer. Unexpected expenses 
                  happen, and having USD gives you options. You can always exchange what you don't use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Specific Places to Know</h2>
            <p className="text-center text-muted-foreground mb-8">
              Actual addresses you can plug into Google Maps. These are the places I wish someone had told me about.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {specificRecommendations.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.places.map((place, pIndex) => (
                        <div key={pIndex} className="border-b last:border-0 pb-3 last:pb-0">
                          <div className="font-medium">{place.name}</div>
                          <div className="text-sm text-muted-foreground">{place.address}</div>
                          <div className="text-xs text-primary mt-1">{place.note}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* I Wish I'd Known */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">I Wish I'd Known...</h2>
            <p className="text-center text-muted-foreground mb-8">
              The things nobody tells you in the guidebooks. Learn from my mistakes.
            </p>
            
            <div className="space-y-4">
              {wishIKnew.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <LightbulbIcon size="md" className="text-primary" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Keep Reading</h2>
            <p className="text-center text-muted-foreground mb-8">
              These guides will help you dive deeper into specific topics.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <HomeIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Housing Guide</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Everything about renting in Buenos Aires. Contracts, scams, neighborhoods, and finding your place.
                  </p>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/housing">
                      Read Guide
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <DollarSignIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Banking & Money</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Understanding the blue dollar, transferring money, and managing finances as an expat.
                  </p>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/banking">
                      Read Guide
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <MapPinIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Neighborhoods</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Compare Palermo, Recoleta, Belgrano, and more. Find the barrio that fits your lifestyle.
                  </p>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/neighborhoods">
                      Read Guide
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <FileTextIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Visa Options</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Digital nomad, work, retirement, and student visas explained with requirements.
                  </p>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/visas">
                      Read Guide
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <StarIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Cost of Living</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Real budget breakdowns for Buenos Aires. From bare-bones to comfortable living.
                  </p>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/cost-of-living">
                      Read Guide
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <HeartIcon size="md" className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Healthcare</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    Health insurance, finding doctors, and navigating the Argentine medical system.
                  </p>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/healthcare">
                      Read Guide
                      <ArrowRightIcon size="sm" className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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

      {/* Reality Check */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">A Reality Check</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Your first month won't be perfect. You'll get lost. You'll misunderstand people. 
              You'll wonder if you made a huge mistake. That's normal.
            </p>
            <p className="text-primary-foreground/80 text-lg mb-8">
              But then something shifts. You'll have your first real conversation in Spanish. 
              You'll find your café. You'll get invited to an asado. And suddenly, Buenos Aires 
              won't feel like a foreign city anymore. It'll feel like home.
            </p>
            <p className="text-primary-foreground font-semibold">
              Stick with it. The best parts are coming.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Every arrival is different. If you have specific questions about your situation, 
              reach out. We've helped hundreds of people make this move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/newsletter">
                  Join the Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
