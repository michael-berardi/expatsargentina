import { cities, type City } from "./argentina";

export interface CityComparison {
  slug: string; // e.g., "buenos-aires-vs-mendoza"
  city1Slug: string;
  city2Slug: string;
  title: string;
  description: string;
  seoKeywords: string[];
  verdict: string; // Summary recommendation
  categories: {
    name: string;
    city1Score: number; // 1-10
    city2Score: number; // 1-10
    city1Detail: string;
    city2Detail: string;
  }[];
  bestFor: {
    city1: string[]; // e.g., ["Digital nomads", "Nightlife lovers"]
    city2: string[]; // e.g., ["Wine enthusiasts", "Outdoor lovers"]
  };
}

export const cityComparisons: CityComparison[] = [
  // Comparison 1: Buenos Aires vs Mendoza
  {
    slug: "buenos-aires-vs-mendoza",
    city1Slug: "buenos-aires",
    city2Slug: "mendoza",
    title: "Buenos Aires vs Mendoza",
    description: "Capital city energy vs wine country tranquility. Compare Argentina's biggest metropolis with its premier wine region for expat life, cost of living, safety, and lifestyle.",
    seoKeywords: ["Buenos Aires vs Mendoza", "Argentina cities comparison", "best city for expats Argentina", "Mendoza or Buenos Aires"],
    verdict: "Buenos Aires wins for career opportunities, nightlife, and cultural depth. Mendoza wins for quality of life, outdoor activities, and wine culture. Budget-conscious expats may prefer Mendoza's lower costs.",
    categories: [
      { name: "Cost of Living", city1Score: 4, city2Score: 7, city1Detail: "$1,200-3,500/month. Argentina's most expensive city. Palermo rents can rival European capitals.", city2Detail: "$700-1,800/month. Significantly cheaper rent, food, and entertainment. Wine is absurdly affordable." },
      { name: "Safety", city1Score: 5, city2Score: 8, city1Detail: "Moderate. Petty theft common in tourist areas. Avoid certain neighborhoods at night.", city2Detail: "Good. One of Argentina's safest cities. Relaxed atmosphere, low street crime." },
      { name: "Nightlife & Culture", city1Score: 10, city2Score: 5, city1Detail: "World-class. Tango, theaters, live music, bars open until dawn. Never a dull night.", city2Detail: "Low-key but charming. Wine bars, bodega tours, occasional festivals. Quiet by 1am." },
      { name: "Internet & Remote Work", city1Score: 8, city2Score: 6, city1Detail: "50-100+ Mbps. Coworking spaces everywhere. Cafes with good WiFi abundant.", city2Detail: "30-60 Mbps. Growing coworking scene. Less reliable in rural wine areas." },
      { name: "Climate", city1Score: 6, city2Score: 8, city1Detail: "Humid subtropical. Brutally hot summers, mild winters. High humidity.", city2Detail: "Arid and sunny. 300+ sunny days. Dry heat, cool winters. Great year-round." },
      { name: "Outdoor Activities", city1Score: 4, city2Score: 10, city1Detail: "Parks and riverside. Limited natural scenery within the city.", city2Detail: "Andes hiking, skiing, rafting, climbing. Wine cycling tours. Aconcagua base camp nearby." },
      { name: "Food Scene", city1Score: 9, city2Score: 7, city1Detail: "Everything from world-class parrillas to sushi to vegan. Most diverse food scene in South America.", city2Detail: "Excellent parrillas and wine pairings. Growing international food scene. Fewer options overall." },
      { name: "Expat Community", city1Score: 9, city2Score: 6, city1Detail: "Massive. Thousands of expats, dozens of meetups weekly. Easy to find your tribe.", city2Detail: "Growing. Smaller but tight-knit community. Easier to make Argentine friends." },
    ],
    bestFor: {
      city1: ["Digital nomads wanting social life", "Career-focused expats", "Culture lovers", "Nightlife enthusiasts", "Food adventurers"],
      city2: ["Outdoor enthusiasts", "Wine lovers", "Families", "Retirees", "Those seeking tranquility"],
    },
  },
  // Comparison 2: Buenos Aires vs Cordoba
  {
    slug: "buenos-aires-vs-cordoba",
    city1Slug: "buenos-aires",
    city2Slug: "cordoba",
    title: "Buenos Aires vs Cordoba",
    description: "Mega-city sophistication vs university-town energy. Compare Argentina's capital with its second city for cost, culture, tech scene, and expat lifestyle.",
    seoKeywords: ["Buenos Aires vs Cordoba", "Argentina cities for expats", "Cordoba digital nomads", "cheapest city Argentina"],
    verdict: "Buenos Aires is unbeatable for culture and career. Cordoba offers a younger, more affordable vibe with a growing tech scene. For budget-conscious digital nomads, Cordoba is increasingly the smarter choice.",
    categories: [
      { name: "Cost of Living", city1Score: 4, city2Score: 8, city1Detail: "$1,200-3,500/month. Premium pricing across the board. Rent alone eats 40-50% of budget.", city2Detail: "$600-1,500/month. Dramatically cheaper than BA. University town economics keep prices low." },
      { name: "Safety", city1Score: 5, city2Score: 6, city1Detail: "Moderate. Standard big-city precautions needed. Petty crime in tourist zones.", city2Detail: "Moderate to Good. Safer feel than BA. University areas well-lit and active." },
      { name: "Nightlife & Culture", city1Score: 10, city2Score: 7, city1Detail: "World-class cultural capital. Tango, theater, art, music 24/7.", city2Detail: "Vibrant student nightlife. Great live music scene. More grassroots and authentic." },
      { name: "Internet & Remote Work", city1Score: 8, city2Score: 7, city1Detail: "Best in country. Fiber widely available. Many coworking options.", city2Detail: "Good. Growing tech hub with startup culture. Multiple coworking spaces." },
      { name: "Climate", city1Score: 6, city2Score: 7, city1Detail: "Humid. Hot summers, mild winters. Can feel oppressive Jan-Feb.", city2Detail: "Warm and dry. Sierras nearby provide cooler escapes. Pleasant most of year." },
      { name: "Outdoor Activities", city1Score: 4, city2Score: 7, city1Detail: "Urban parks. Day trips to delta and coast.", city2Detail: "Sierras de Cordoba hiking, lakes, rivers. Carlos Paz 30 min away." },
      { name: "Food Scene", city1Score: 9, city2Score: 6, city1Detail: "Endless variety. World-class dining to street food.", city2Detail: "Good local food. Famous for fernet con coca. Growing food scene." },
      { name: "Tech & Startup Scene", city1Score: 8, city2Score: 8, city1Detail: "Major tech hub. Many international companies. Higher salaries.", city2Detail: "Argentina's 'Silicon Hills'. Growing fast. Lower costs attract startups." },
    ],
    bestFor: {
      city1: ["Career professionals", "Culture enthusiasts", "Food lovers", "Those who thrive in big cities"],
      city2: ["Budget digital nomads", "Students", "Tech entrepreneurs", "Outdoor lovers", "Those who prefer smaller cities"],
    },
  },
  // Comparison 3: Mendoza vs Bariloche
  {
    slug: "mendoza-vs-bariloche",
    city1Slug: "mendoza",
    city2Slug: "bariloche",
    title: "Mendoza vs Bariloche",
    description: "Wine country vs lake district. Two of Argentina's most stunning regions compared for expat life, outdoor access, cost, and year-round livability.",
    seoKeywords: ["Mendoza vs Bariloche", "Argentina mountain cities", "best outdoor city Argentina", "Patagonia vs Cuyo"],
    verdict: "Mendoza offers year-round sunshine, wine culture, and better infrastructure. Bariloche is unmatched for dramatic scenery and outdoor extremes but has harsh winters and seasonal economics.",
    categories: [
      { name: "Cost of Living", city1Score: 7, city2Score: 5, city1Detail: "$700-1,800/month. Affordable wine country living with good infrastructure.", city2Detail: "$900-2,200/month. Tourism premium on rent and food. Seasonal price swings." },
      { name: "Safety", city1Score: 8, city2Score: 8, city1Detail: "Good. Relaxed city with low crime rates.", city2Detail: "Good. Small-town safety. Very low crime." },
      { name: "Natural Beauty", city1Score: 8, city2Score: 10, city1Detail: "Andes backdrop, vineyards, dry mountain landscapes. Stunning.", city2Detail: "Jaw-dropping. Glacial lakes, snow-capped peaks, ancient forests. Patagonia's jewel." },
      { name: "Climate", city1Score: 8, city2Score: 5, city1Detail: "300+ sunny days. Dry, pleasant. Hot summers, mild winters.", city2Detail: "Cold and wet winters (snow Nov-Aug). Cool summers. Rain is frequent." },
      { name: "Outdoor Activities", city1Score: 8, city2Score: 10, city1Detail: "Hiking, skiing (Las Lenas), cycling, rafting. Aconcagua access.", city2Detail: "Skiing (Cerro Catedral), kayaking, trekking, mountain biking, fishing. Year-round." },
      { name: "Infrastructure", city1Score: 7, city2Score: 5, city1Detail: "Major city infrastructure. Good hospital, flights, services.", city2Detail: "Small town. Limited healthcare, seasonal services. Airport is small." },
      { name: "Food & Wine", city1Score: 10, city2Score: 6, city1Detail: "World-class wine region. Malbec capital. Excellent restaurants.", city2Detail: "Craft beer capital. Chocolate shops. Good but limited dining." },
      { name: "Year-Round Livability", city1Score: 8, city2Score: 5, city1Detail: "Active year-round. No dead season. Always something happening.", city2Detail: "Seasonal. Summer is magic, winter is ski season, shoulder seasons quiet." },
    ],
    bestFor: {
      city1: ["Wine enthusiasts", "Year-round sunshine seekers", "Families", "Retirees", "Those wanting city amenities"],
      city2: ["Skiing/snowboarding fans", "Extreme outdoor athletes", "Nature photographers", "Seasonal workers", "Those seeking dramatic scenery"],
    },
  },
  // Comparison 4: Salta vs Cordoba
  {
    slug: "salta-vs-cordoba",
    city1Slug: "salta",
    city2Slug: "cordoba",
    title: "Salta vs Cordoba",
    description: "Colonial Northwest charm vs central university energy. Compare two affordable Argentine cities for budget expats seeking authentic culture and community.",
    seoKeywords: ["Salta vs Cordoba Argentina", "cheap cities Argentina expats", "Salta for expats", "Cordoba or Salta"],
    verdict: "Salta wins for cultural immersion, stunning landscapes, and ultra-low costs. Cordoba wins for modern amenities, tech opportunities, and a larger expat-friendly infrastructure.",
    categories: [
      { name: "Cost of Living", city1Score: 9, city2Score: 8, city1Detail: "$400-1,000/month. One of the cheapest cities in Argentina.", city2Detail: "$600-1,500/month. Affordable but slightly pricier than Salta." },
      { name: "Safety", city1Score: 7, city2Score: 6, city1Detail: "Good. Small-city safety. Friendly locals.", city2Detail: "Moderate to Good. Bigger city has more varied safety profile." },
      { name: "Cultural Experience", city1Score: 10, city2Score: 6, city1Detail: "Deep colonial history, indigenous culture, unique Northwest cuisine, folk music.", city2Detail: "University culture, Jesuit heritage. More modern and less 'traditional' feel." },
      { name: "Internet", city1Score: 5, city2Score: 7, city1Detail: "15-40 Mbps. Adequate but slower. Limited coworking.", city2Detail: "30-80 Mbps. Better infrastructure. Multiple coworking spaces." },
      { name: "Natural Surroundings", city1Score: 9, city2Score: 7, city1Detail: "Quebrada de las Flechas, Cachi, vineyards, colorful mountains.", city2Detail: "Sierras, lakes, Carlos Paz resort town nearby." },
      { name: "Nightlife", city1Score: 5, city2Score: 8, city1Detail: "Penas (folk music venues) and quiet bars. Early nights.", city2Detail: "Wild student nightlife. Fernet culture. Bars and clubs everywhere." },
      { name: "Cuisine", city1Score: 9, city2Score: 6, city1Detail: "Empanadas saltenas (best in Argentina), humita, tamales, locro. Unique.", city2Detail: "Standard Argentine fare plus university-town variety. Good but less distinctive." },
      { name: "Expat Infrastructure", city1Score: 4, city2Score: 7, city1Detail: "Small expat community. Fewer English speakers. True immersion.", city2Detail: "Growing expat scene. More services, meetups, English-friendly options." },
    ],
    bestFor: {
      city1: ["Cultural immersion seekers", "Ultra-budget expats", "Foodies wanting authentic Northwest cuisine", "Photographers", "Spanish students"],
      city2: ["Digital nomads", "Young professionals", "Students", "Those wanting expat community", "Tech workers"],
    },
  },
];

export function getComparisonBySlug(slug: string): CityComparison | undefined {
  return cityComparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return cityComparisons.map((c) => c.slug);
}

export function getComparisonCities(comparison: CityComparison): { city1: City | undefined; city2: City | undefined } {
  return {
    city1: cities.find((c) => c.slug === comparison.city1Slug),
    city2: cities.find((c) => c.slug === comparison.city2Slug),
  };
}
