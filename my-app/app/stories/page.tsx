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
  {
    name: "Sofia Nguyen",
    from: "Sydney, Australia",
    role: "Freelance Graphic Designer",
    duration: "1.5 years in BA",
    neighborhood: "Villa Crespo",
    street: "Calle Loyola near Parque Centenario",
    quote: "I sold everything in Sydney, bought a one-way ticket, and landed with two suitcases and a Wacom tablet. Best financial decision I ever made. My rent here is less than my weekly coffee budget back home.",
    summary: "Sofia left Australia's eye-watering cost of living at 27, drawn by Buenos Aires' street art scene and the promise of stretching her freelance income. She found a creative community she never expected, learned to love fernet con coca, and accidentally became the go-to designer for half the expat businesses in Villa Crespo.",
    theGood: [
      "My apartment has 3-meter ceilings, exposed brick, and a balcony. In Sydney I was renting a shoebox in Marrickville for triple the price",
      "The street art here is museum-quality. Every walk to the grocery store is an art gallery",
      "Villa Crespo has this incredible mix of old-school porteño culture and new creative energy",
      "The cafe culture is perfect for freelancers - nobody rushes you out after one coffee",
      "I've connected with more designers and illustrators here than I did in 5 years in Sydney",
    ],
    theBad: [
      "The internet quality is inconsistent. I've lost video calls mid-presentation with clients",
      "Getting paid from Australian clients involves three different apps and losing 4-5% in transfer fees",
      "The summer heat in January/February is brutal - my apartment turns into an oven and AC units are expensive to run",
    ],
    theReality: "You will become a different kind of creative here. The chaos, the color, the intensity of this city seeps into your work. My portfolio has completely transformed - it's bolder, more expressive, more alive. But you also learn that 'creative inspiration' doesn't pay the bills when your internet drops during a client deadline at 2am because of a power cut in your building.",
    wishIKnew: [
      "Set up Wise (formerly TransferWise) and a crypto wallet before you leave. You need multiple ways to move money.",
      "Bring your own tech. Laptops and tablets cost 2-3x more here due to import taxes. My backup Wacom would have cost me $800 USD locally.",
      "The Australian-to-Argentine culture shock is real. We're both 'relaxed' cultures but in completely different ways. Argentine 'relaxed' means your plumber might show up... eventually.",
      "Join the BA Creatives WhatsApp group immediately. It's how you find clients, collaborators, and sanity.",
    ],
    budget: {
      rent: "$450 USD (1BR in Villa Crespo, beautiful old building)",
      utilities: "$45 USD (including internet - Fibertel 300mb)",
      food: "$280 USD (cooking a lot, ferias for produce, occasional Restaurant Animo splurge)",
      coworking: "$70 USD (Selina coworking days when I need fast WiFi)",
      transport: "$25 USD (I bike everywhere, SUBE for rainy days)",
      miscellaneous: "$80 USD (art supplies, Procreate subscription, life)",
      total: "~$950/month",
    },
    hangouts: [
      "Café Registrado on Humberto Primo for the best specialty coffee in the city",
      "Parque Centenario weekend feria for vintage finds and people sketching",
      "Galería Patio del Liceo for art exhibitions and creative meetups",
      "Cervecería On Tap in Villa Crespo for craft beer with other freelancers",
      "Hollywood in Cambodia bar for late-night cocktails and live music",
    ],
    mistakes: "I didn't get a monotributo (tax ID) for my first 8 months. I was just receiving money through Western Union and crypto like a tourist. Then I wanted to sign a proper lease and they asked for proof of income. No monotributo, no lease. Getting it set up took 2 months of bureaucratic hell with a contador. Do this early, even if you're freelancing for overseas clients.",
    highlights: ["Freelance life on a budget", "Creative community building", "Street art culture", "Australian expat perspective"],
    readTime: "12 min read",
  },
  {
    name: "Marcus Williams",
    from: "London, United Kingdom",
    role: "Retired Financial Analyst",
    duration: "4 years in BA",
    neighborhood: "Belgrano",
    street: "Avenida Cabildo near Barrancas de Belgrano",
    quote: "My City pension in London bought me a modest flat and careful budgeting. Here, my wife and I live in a three-bedroom apartment with a doorman, eat at excellent restaurants twice a week, and still save money. The maths simply works.",
    summary: "Marcus and his wife Patricia retired from London at 63 and 60, after Marcus spent 35 years in the City. They chose Buenos Aires over the traditional British expat destinations after a two-week scouting trip. Four years on, they've built a rich social life around tango, Teatro Colón season tickets, and a circle of Argentine and expat friends who've become family.",
    theGood: [
      "The cultural life is extraordinary. Teatro Colón alone is worth moving here - world-class opera for the price of a London cinema ticket",
      "Belgrano feels like a leafy European suburb. Barrancas de Belgrano park is our daily walk and it's genuinely beautiful",
      "We've taken up tango properly. At our age! Patricia is obsessed. We go to milongas three nights a week",
      "The private healthcare through Swiss Medical is superb. Marcus had a knee replacement last year - the surgeon trained at Johns Hopkins and the total cost was a fraction of private UK care",
      "Argentines genuinely respect older people. We're not invisible here the way seniors become in London",
    ],
    theBad: [
      "The bureaucracy is Dickensian. Renewing our temporary residency involved 14 separate documents, three office visits, and a notarized translation of our marriage certificate",
      "We miss Marks & Spencer, proper cheddar, and reliable public transport that runs on time",
      "The economic instability is wearing. We've lived through three currency crises in four years. You learn to keep most of your money offshore",
    ],
    theReality: "At our age, healthcare is everything. We pay $520 USD a month for Swiss Medical's top plan covering both of us, and the quality is genuinely excellent. But navigating the system requires Spanish. We hired a health advocate - essentially a bilingual person who helps you deal with the medical bureaucracy. Best $100/month we spend. Without her, Patricia's cataract surgery would have been a nightmare.",
    wishIKnew: [
      "Get the retirement visa (pensionado) sorted before you arrive. You need proof of pension income - minimum around $500 USD/month. Our immigration lawyer, Dr. Gabriela Montoya, was worth every peso.",
      "Open a dollar account at ICBC or Santander once you have your DNI. It lets you receive international transfers without the blue dollar headache.",
      "Learn conversational Spanish to B1 level minimum before moving. At our age, immersion learning is slower. We did six months of intensive classes before leaving London.",
      "Bring your complete medical records translated into Spanish. Every specialist wants your full history.",
    ],
    budget: {
      rent: "$950 USD (3BR in Belgrano, portero building, near Cabildo subway)",
      utilities: "$80 USD (including cable, internet, building expenses)",
      healthcare: "$520 USD (Swiss Medical Plan SMG30 for two)",
      food: "$450 USD (good groceries, restaurants twice weekly, wine)",
      transport: "$120 USD (taxis mostly, SUBE for short trips)",
      miscellaneous: "$150 USD (Teatro Colón, tango, social activities)",
      total: "~$2,270/month for two",
    },
    hangouts: [
      "Barrancas de Belgrano park for morning walks and weekend book fairs",
      "Teatro Colón - we have season tickets, absolutely non-negotiable",
      "La Cátedra Tango in Almagro for milongas on Tuesday and Thursday nights",
      "El Preferido de Palermo for classic Argentine lunch with friends",
      "The British Argentine community at St. Andrew's Scots Church events",
    ],
    mistakes: "We brought too many belongings in a shipping container. The customs process took four months, cost $3,000 in storage and brokerage fees, and half the things we shipped we never use. Sell everything. Bring two suitcases each and buy what you need here. Furniture is cheap and the apartment came partly furnished anyway.",
    highlights: ["Retirement visa process", "Healthcare comparison", "Tango lifestyle", "Couple's adaptation", "Cultural immersion after 60"],
    readTime: "14 min read",
  },
  {
    name: "Ana & Carlos Ferreira",
    from: "São Paulo, Brazil",
    role: "Restaurant Owners",
    duration: "5 years in BA",
    neighborhood: "San Telmo",
    street: "Calle Chile near Parque Lezama",
    quote: "In São Paulo we worked 16-hour days and could barely afford rent. Here we own a restaurant, live above it, and our kids play in the park across the street. The Mercosur visa made it possible - two Brazilians could never have done this in Europe or the US.",
    summary: "Ana and Carlos left Brazil's restaurant industry after a decade of grinding. The Mercosur residency agreement let them settle legally in Argentina within months. They opened 'Boteco Lezama' - a Brazilian-Argentine fusion spot in San Telmo that's become a neighborhood institution. Five years in, they employ eight people and have permanent residency.",
    theGood: [
      "The Mercosur visa path is incredible. We had temporary residency in 90 days. Try doing that in the US or Europe as restaurant workers",
      "Commercial rent in San Telmo was a quarter of what we'd pay for the same space in Vila Madalena back home",
      "Argentines love Brazilian food. Coxinhas, pão de queijo, feijoada - they go crazy for it",
      "The neighborhood has embraced us. Our regulars are like family now",
      "Our kids go to a public school two blocks away and they're thriving - fully bilingual in Spanish and Portuguese",
    ],
    theBad: [
      "The AFIP (tax authority) is relentless. The tax system for small businesses is complicated and changes constantly. Our contador earns every peso",
      "Supplier prices change weekly. We've had to reprint our menu four times this year alone",
      "The habilitación (business permit) process took 11 months. Eleven. We operated in legal limbo the entire time",
      "Importing Brazilian ingredients is nearly impossible. We source locally and adapt recipes",
    ],
    theReality: "Running a restaurant in Argentina means you're also an amateur economist, a tax strategist, and a crisis manager. When the peso crashed in 2024, our ingredient costs doubled overnight but we couldn't raise prices that fast or we'd lose customers. You learn to build fat margins on some items to survive the shocks on others. Feijoada is our loss leader. Caipirinhas are where we make the money.",
    wishIKnew: [
      "Register as a Sociedad de Responsabilidad Limitada (SRL) from day one. We started as monotributistas and the transition was a bureaucratic nightmare.",
      "The Mercosur visa is easy but you still need patience. Bring every document apostilled and translated by a traductor público.",
      "Find a good contador BEFORE you open the business. Ours, Martín, literally saved us from a tax audit that would have shut us down in year two.",
      "Location matters more than concept. San Telmo foot traffic on weekends saved us during slow months.",
      "Build relationships with multiple suppliers. When one can't deliver (which happens constantly), you need backups.",
    ],
    budget: {
      rent: "$1,100 USD (combined: restaurant space + 2BR apartment above, San Telmo)",
      utilities: "$180 USD (restaurant + apartment, gas-heavy for commercial kitchen)",
      food: "$800 USD (family of 4 groceries + some restaurant inventory overlap)",
      transport: "$60 USD (mostly walking, delivery moto for catering)",
      miscellaneous: "$350 USD (kids' school supplies, activities, personal expenses)",
      total: "~$2,490/month personal + ~$500 additional business costs",
    },
    hangouts: [
      "Parque Lezama every evening with the kids and other neighborhood families",
      "Mercado de San Telmo for sourcing and morning coffee at Coffee Town",
      "The Brazilian expat asado meetups in Costanera Sur once a month",
      "Feria de San Telmo on Sundays - we sometimes set up a coxinha stand for extra income",
      "Bar Plaza Dorrego for a late-night fernet after closing the restaurant",
    ],
    mistakes: "We underestimated working capital. We budgeted for renovations and first month's rent but didn't account for the habilitación delays, slow first months, and the gap between spending on ingredients and actually getting paid. We nearly went broke in month four. Bring at least six months of living expenses PLUS your business startup costs. And then add 30% more.",
    highlights: ["Mercosur visa advantages", "Opening a business in Argentina", "Brazilian-Argentine cultural bridge", "Family relocation", "Restaurant economics in inflation"],
    readTime: "15 min read",
  },
  {
    name: "Yuki Tanaka",
    from: "Tokyo, Japan",
    role: "Language Teacher",
    duration: "8 months in BA",
    neighborhood: "Almagro",
    street: "Calle Medrano near Parque Rivadavia",
    quote: "In Tokyo, I was a salaryman working 70-hour weeks. Here, I teach Japanese four hours a day and spend the rest exploring, studying Spanish, and actually living. My salary is tiny but my life is enormous.",
    summary: "Yuki left a burnout-inducing corporate job in Tokyo at 31 to teach Japanese abroad. He chose Buenos Aires partly because of the small but passionate Japanese-Argentine community, and partly because it was the furthest he could get from his old life. Eight months in, his Spanish is shaky, his budget is tight, but he's never been happier.",
    theGood: [
      "The work-life balance is unrecognizable compared to Japan. People here actually prioritize living over working",
      "There's a surprising Japanese-Argentine community - the Jardín Japonés in Palermo hosts cultural events and I teach there sometimes",
      "Argentines are incredibly warm. Random strangers invite you to asados. In Tokyo, my neighbors of 5 years never spoke to me",
      "Almagro is genuine Buenos Aires - no tourists, real neighborhood life, the best pizza at El Noble and Güerrín nearby",
    ],
    theBad: [
      "The bureaucracy makes Japanese bureaucracy look efficient, and that's saying something. Getting my DNI took 5 months of Kafkaesque appointments",
      "Personal space doesn't exist here. People stand close, kiss you on the cheek the first time they meet you. I had to recalibrate everything",
      "The noise. My building has no sound insulation. I can hear my neighbor's entire telenovela. In Tokyo, silence was sacred",
    ],
    theReality: "Teaching Japanese in Buenos Aires pays very little in global terms - about $8-12 USD per hour for private lessons. I survive because my costs are so low. But you have to be comfortable with financial uncertainty. I budget meticulously, something my Japanese upbringing prepared me for perfectly. I track every expense in a kakeibo (Japanese budget journal). Most months I break even. Some months I dip into savings. It's the opposite of financial security, but it's also the opposite of spiritual bankruptcy.",
    wishIKnew: [
      "Start finding students BEFORE you arrive. Post on Buenos Aires language exchange Facebook groups and italki. I had three students lined up before landing.",
      "The Japanese-Argentine community (Nikkei) is small but incredibly welcoming. Connect with the Asociación Japonesa en la Argentina - they helped me find housing and students.",
      "WhatsApp is life here. In Japan we use LINE. Here, if you're not on WhatsApp, you don't exist. All my students book through WhatsApp.",
      "Learn to say 'no' to social invitations or you'll never have free time. Argentines will invite you to something every single night.",
    ],
    budget: {
      rent: "$320 USD (room in shared apartment with two Argentine roommates, Almagro)",
      utilities: "$30 USD (my share)",
      food: "$200 USD (cooking Japanese food with local ingredients, ferias for vegetables)",
      transport: "$20 USD (subte and walking)",
      miscellaneous: "$80 USD (teaching materials, Spanish classes at CUI, phone)",
      total: "~$650/month",
    },
    hangouts: [
      "Jardín Japonés in Palermo for cultural events and a taste of home",
      "Parque Rivadavia weekend book market - I'm building a Spanish library slowly",
      "CUI (Centro Universitario de Idiomas) where I take Spanish classes",
      "The language exchange meetups at Mundolingo in Palermo every Wednesday",
      "My kitchen, teaching my roommates to make onigiri while they teach me empanada folding",
    ],
    mistakes: "I tried to find an apartment on my own without speaking Spanish, without a DNI, and without understanding garantías. I spent two weeks in a terrible hostel in Once, panicking. Then a contact from the Asociación Japonesa connected me with my current roommates who were looking for a third person. The lesson: use community networks. Trying to navigate Buenos Aires housing alone, especially without Spanish, is a recipe for misery and getting scammed.",
    highlights: ["Career change abroad", "Japanese-Argentine cultural exchange", "Minimalist budget living", "Language learning journey", "Work-life balance transformation"],
    readTime: "11 min read",
  },
  {
    name: "Sarah & Tom Mitchell",
    from: "Vancouver, Canada",
    role: "Parents & Remote Workers (UX Researcher & DevOps Engineer)",
    duration: "2 years in BA",
    neighborhood: "Núñez",
    street: "Near Avenida del Libertador and the river",
    quote: "We were spending $6,000 a month just on childcare and mortgage in Vancouver. Here, our kids go to an excellent bilingual school, we have a live-in nanny two days a week, and we're saving more than we ever did in Canada. The tradeoff? Explaining to our parents why we moved our grandchildren to South America.",
    summary: "Sarah and Tom relocated with their two kids - Emma (9) and Liam (6) - after realizing remote work meant they didn't have to endure Vancouver's cost of living anymore. They chose Núñez for its quiet, family-friendly streets near the river, the proximity to international schools, and the fact that it feels like a small town inside a massive city.",
    theGood: [
      "Lincoln International School is genuinely excellent. Bilingual curriculum, small classes, and our kids are now fluent in Spanish",
      "The family culture here is incredible. Kids are welcome everywhere, even at 10pm restaurants. No dirty looks for bringing children to a nice dinner",
      "Costanera Norte is our backyard - running paths, playgrounds, weekend cycling along the river",
      "Our kids have more independence here than they ever would in Vancouver. Emma walks to her friend's house three blocks away. In Vancouver we drove her everywhere",
      "We found an amazing pediatrician through Swiss Medical who does house calls. House calls! For $15 USD",
    ],
    theBad: [
      "The school costs $800 USD/month per kid. It's the biggest expense by far and non-negotiable for us",
      "Birthday parties here are a production. Every weekend is another party with a rented salon, magician, and 40 kids. The social pressure to keep up is exhausting",
      "Getting the kids' Canadian school records recognized took three months of apostilles and translations",
      "Argentine grandparents spoil the neighborhood kids rotten. Our kids now expect dulce de leche with every meal",
    ],
    theReality: "Moving with kids is a different game entirely. You're not just adapting yourself - you're watching your children adapt, and that's both beautiful and heartbreaking. Emma cried every day for the first month. She missed her friends, her teacher, her room. Then one day she came home speaking Spanish with an Argentine accent and asked if her Vancouver friend could come visit. Liam adapted in about three days because six-year-olds are basically invincible. The school community became our social network - other international families who understood exactly what we were going through.",
    wishIKnew: [
      "Apply to international schools 6 months before moving. Lincoln, Northlands, and St. Andrew's all have waitlists. We got lucky with a mid-year opening.",
      "Bring your kids' vaccination records translated and apostilled. Argentine schools require specific vaccines on a different schedule than Canada.",
      "Join the BA Families expat Facebook group immediately. It's the single most useful resource for parents - school reviews, pediatrician recommendations, playdate connections.",
      "Budget for activities. Swimming, football, art classes - kids need structure and friends. Budget $150-200 per kid per month for extracurriculars.",
      "Your kids will adapt faster than you. Let them lead sometimes. Liam taught us more about the neighborhood than Google Maps ever did.",
    ],
    budget: {
      rent: "$1,200 USD (3BR house with small garden, Núñez, near the school)",
      utilities: "$100 USD (including high-speed internet - essential for remote work)",
      food: "$600 USD (family of 4, cooking mostly, kids eat everything)",
      healthcare: "$400 USD (Swiss Medical family plan, all 4 of us)",
      transport: "$80 USD (car service for school runs, SUBE for city trips)",
      miscellaneous: "$1,100 USD (school $1,600 for two, activities $350, split across months)",
      total: "~$3,480/month for family of 4",
    },
    hangouts: [
      "Costanera Norte bike path every weekend with the kids",
      "Parque de la Memoria playground - best river views in the city",
      "Club Obras for kids' swimming lessons and Saturday morning sports",
      "Caminito in La Boca for art days with Emma (she's obsessed with the colors)",
      "Sunday asados with other international school families - rotating houses",
    ],
    mistakes: "We assumed our Canadian health insurance would cover us internationally for the first few months. It didn't, not meaningfully. Liam got a nasty ear infection in week two and we paid out of pocket at a private clinic - $400 for the visit and antibiotics. We signed up for Swiss Medical the next day. Get health coverage sorted BEFORE you arrive, not after your kid spikes a fever at midnight in a country where you don't speak the language yet.",
    highlights: ["International school experience", "Family relocation logistics", "Kids' adaptation", "Remote work with kids", "Healthcare for families"],
    readTime: "14 min read",
  },
  {
    name: "Diego Morales",
    from: "Mexico City, Mexico",
    role: "Digital Marketing Consultant",
    duration: "3 years in BA",
    neighborhood: "Palermo Hollywood",
    street: "Calle Honduras near the production studios",
    quote: "Everyone thinks being Mexican in Argentina is easy because we speak the same language. We don't. They speak something else entirely. But once you crack the code, being a Spanish-speaker here is an enormous advantage over English-speaking expats.",
    summary: "Diego moved from Mexico City's startup scene to Buenos Aires to tap into the growing LATAM tech market while enjoying a lower cost of living. Three years later, he runs a small consultancy serving clients across Latin America, has an Argentine partner, and has strong opinions about why Buenos Aires' tacos are a crime against humanity but the nightlife makes up for it.",
    theGood: [
      "The LATAM tech and startup scene here is booming. Buenos Aires is basically the Silicon Valley of South America and I landed right in the middle of it",
      "Being a native Spanish speaker means you skip the hardest part of expat life. I was functional from day one - banks, leases, doctors, everything",
      "Palermo Hollywood is creative energy incarnate. Production companies, tech startups, design studios, ad agencies - all my potential clients are within walking distance",
      "The nightlife is genuinely world-class. Mexico City is good but Buenos Aires at 3am on a Saturday is another dimension",
      "The work-life balance - Argentines taught me that working until midnight isn't a badge of honor, it's a failure of planning",
    ],
    theBad: [
      "Rioplatense Spanish is a trip. 'Vos' instead of 'tú', 'che' every other word, and they pronounce 'll' as 'sh'. I sounded like a tourist for months despite being Mexican",
      "Argentine clients pay late. Always. Mexican business culture has its issues but at least people pay on the agreed date. Here, 30 days means 60, and 60 means maybe",
      "I miss real Mexican food desperately. There are Mexican restaurants here but they're... an interpretation. The salsa is sweet. The tortillas are wrong. I've started making my own",
    ],
    theReality: "The biggest advantage of being a Latin American expat here versus a North American or European one is that you understand the underlying logic. The bureaucracy, the improvisation, the 'it'll work out' mentality - it's familiar. You don't waste energy being shocked by it. What catches you off guard is the Argentine ego. They genuinely believe Buenos Aires is the Paris of South America and they'll argue about it passionately. Once you stop fighting it and start appreciating it, you realize they're not entirely wrong.",
    wishIKnew: [
      "Get a CUIL/CUIT immediately. As a LATAM professional, you can register as monotributista relatively easily and invoice Argentine clients legally. It opens doors.",
      "The Mercosur residency path exists for Mexicans too through bilateral agreements, but it's slower than for Brazilians. Budget 6-8 months for temporary residency.",
      "Build your network at Palermo tech meetups and WeWork events before you need clients. The Argentine business world runs on personal connections even more than Mexico's does.",
      "Keep your Mexican clients. The time zone overlap with Mexico is perfect (same zone) and peso-denominated Argentine income alone won't sustain you.",
      "Learn the local slang fast. 'Boludo', 'quilombo', 'al pedo', 'fiaca' - these aren't in any textbook but they're in every conversation.",
    ],
    budget: {
      rent: "$600 USD (1BR in Palermo Hollywood, modern building with amenities)",
      utilities: "$50 USD (including 100mb fiber)",
      food: "$300 USD (cooking Mexican food at home, eating out 2-3x week)",
      coworking: "$90 USD (WeWork hot desk, essential for networking)",
      transport: "$35 USD (mostly walking and subte, occasional Uber for client meetings)",
      miscellaneous: "$75 USD (nightlife, gym at Megatlon, imported hot sauce habit)",
      total: "~$1,150/month",
    },
    hangouts: [
      "WeWork Palermo Hollywood for work and accidentally running into future clients",
      "Nicky Harrison speakeasy for Thursday night cocktails with the marketing crowd",
      "Parque Las Heras for Saturday morning runs and outdoor gym sessions",
      "La Fábrica del Taco - the closest thing to real Mexican food (I've trained the chef personally)",
      "Congo bar on Honduras for when you want to dance until the sun comes up",
    ],
    mistakes: "I quoted my first Argentine client in dollars. Big mistake. They agreed, then the peso crashed, and suddenly my invoice was 'too expensive' even though the number hadn't changed. Now I quote in dollars but offer a peso payment option at a fixed rate with a one-week payment window. It sounds complicated but it saved every client relationship I have. Learn to be creative with pricing or you'll lose Argentine clients every time there's a devaluation, which is roughly every Tuesday.",
    highlights: ["LATAM perspective on expat life", "Spanish-speaker advantages", "Tech startup ecosystem", "Nightlife and social scene", "Cross-cultural business strategies"],
    readTime: "13 min read",
  },
];

export default function StoriesPage() {
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
                "name": "Expat Stories",
                "item": "https://expatsargentina.com/stories"
              }
            ]
          })
        }}
      />
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

      {/* Related Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Continue Exploring</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/cost-of-living" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Cost of Living</p>
                    <p className="text-sm text-muted-foreground">Real budget breakdowns for Buenos Aires</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/housing" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Housing Guide</p>
                    <p className="text-sm text-muted-foreground">Find your apartment in Argentina</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/visas" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Visa Options</p>
                    <p className="text-sm text-muted-foreground">Digital nomad, work, and retirement visas</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/first-30-days" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">First 30 Days</p>
                    <p className="text-sm text-muted-foreground">Week-by-week survival guide for your arrival</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
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
