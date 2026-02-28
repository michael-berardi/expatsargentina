import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Star,
  Phone,
  ArrowRight,
  Utensils,
  Waves,
  Flame,
  Beer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best Restaurants in Rosario | Top Guide | Expats Argentina",
  description: "Where to eat in Rosario, Argentina's third-largest city. From legendary parrillas and riverside dining along the Costanera to classic cafes and craft beer spots.",
  keywords: ["Rosario restaurants", "Rosario dining", "Costanera restaurants", "Rosario parrillas", "where to eat Rosario", "Rosario food guide"],
  openGraph: {
    title: "Best Restaurants in Rosario | Top Guide",
    description: "Discover the best restaurants in Rosario, from legendary parrillas to riverside dining along the Paraná.",
    images: [{ url: "/images/cities/rosario.webp", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://expatsargentina.com/food/restaurants/rosario" },
};

const priceColors: Record<string, string> = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

interface RosarioRestaurant {
  name: string;
  cuisine: string;
  category: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  description: string;
  whatToOrder: string[];
  neighborhood: string;
  phone?: string;
  localTip?: string;
  rating?: number;
}

const rosarioRestaurants: RosarioRestaurant[] = [
  // Parrillas
  {
    name: "El Viejo Balcón",
    cuisine: "Parrilla",
    category: "Parrillas",
    priceRange: "$$",
    description: "A Rosario institution for decades. This classic parrilla on the Costanera serves perfectly grilled meats with panoramic river views. The bife de chorizo is legendary among locals and visitors alike.",
    whatToOrder: ["Bife de chorizo", "Asado de tira", "Provoleta"],
    neighborhood: "Costanera Norte",
    phone: "+54 341 454-1419",
    localTip: "Go at sunset for the best views of the Paraná river while you eat. Weekends get packed, so arrive early or reserve.",
    rating: 4.5,
  },
  {
    name: "Lo de Roque",
    cuisine: "Parrilla",
    category: "Parrillas",
    priceRange: "$$",
    description: "A neighborhood parrilla beloved by rosarinos for its generous portions and honest cooking. The meat is always top quality, cooked slowly over wood fire. No frills, just excellent asado.",
    whatToOrder: ["Vacío", "Entraña", "Molleja"],
    neighborhood: "Barrio Echesortu",
    localTip: "This is where locals eat, not tourists. Order the parrillada completa to share and let the parrillero guide you.",
    rating: 4.4,
  },
  {
    name: "Parrilla Escauriza",
    cuisine: "Parrilla",
    category: "Parrillas",
    priceRange: "$$",
    description: "Another long-standing Rosario parrilla that draws crowds for its consistently excellent grilled meats. Known for keeping traditional Argentine grilling methods alive with quality cuts.",
    whatToOrder: ["Tira de asado", "Chorizo casero", "Ensalada mixta"],
    neighborhood: "Centro",
    phone: "+54 341 421-5873",
    localTip: "The chorizo casero (homemade sausage) here is some of the best in the city. Perfect as a starter before the main cuts arrive.",
    rating: 4.3,
  },
  // Riverside Dining
  {
    name: "Davis Restaurant",
    cuisine: "Contemporary Argentine",
    category: "Riverside Dining",
    priceRange: "$$$",
    description: "Upscale riverside dining on the Costanera with a modern take on Argentine cuisine. The menu blends river fish with premium meats, all served with views of the Paraná and the islands beyond.",
    whatToOrder: ["Surubí a la parrilla", "Risotto de río", "Lomo con reducción de Malbec"],
    neighborhood: "Costanera Norte",
    phone: "+54 341 454-1800",
    localTip: "Request a table on the terrace. The river breeze and sunset make this one of Rosario's most romantic dining spots.",
    rating: 4.6,
  },
  {
    name: "Restaurant del Puerto",
    cuisine: "River Fish & Seafood",
    category: "Riverside Dining",
    priceRange: "$$",
    description: "Located near the old port area, this restaurant specializes in freshwater fish from the Paraná river. The surubí and pacú are caught locally and prepared in traditional river-style recipes.",
    whatToOrder: ["Surubí a la plancha", "Pacú relleno", "Empanadas de pescado"],
    neighborhood: "Puerto Norte",
    phone: "+54 341 440-2891",
    localTip: "Rosario is famous for its river fish—this is the place to try it. The surubí (a large catfish) is the local star.",
    rating: 4.3,
  },
  {
    name: "La Fluvial",
    cuisine: "Contemporary & River Fish",
    category: "Riverside Dining",
    priceRange: "$$$",
    description: "Set in the beautifully renovated Estación Fluvial building on the waterfront, this restaurant combines stunning architecture with a menu that celebrates Rosario's river heritage and modern gastronomy.",
    whatToOrder: ["Dorado a la parrilla", "Tabla de pescados", "Tiramisu"],
    neighborhood: "Costanera Central",
    localTip: "The building itself is worth the visit. After dinner, walk along the Costanera—it's beautifully lit at night.",
    rating: 4.5,
  },
  // Traditional / Historic Cafes
  {
    name: "Bar El Cairo",
    cuisine: "Cafe & Bar",
    category: "Traditional",
    priceRange: "$",
    description: "A legendary Rosario cafe that was a favorite haunt of Roberto Fontanarrosa, the beloved Argentine cartoonist and writer. The walls are decorated with his artwork, and the cafe preserves its old-school porteño bar atmosphere.",
    whatToOrder: ["Café con leche", "Tostado de jamón y queso", "Vermú con soda"],
    neighborhood: "Centro",
    phone: "+54 341 421-6531",
    localTip: "Come for the atmosphere, not just the food. This is a piece of Rosario's cultural history—Fontanarrosa wrote many of his stories here.",
    rating: 4.2,
  },
  {
    name: "La Sede",
    cuisine: "Argentine Traditional",
    category: "Traditional",
    priceRange: "$$",
    description: "A classic Rosario restaurant serving hearty traditional Argentine dishes in a warm, family-style atmosphere. Known for their milanesas and pastas, both hallmarks of the city's Italian immigrant heritage.",
    whatToOrder: ["Milanesa napolitana", "Sorrentinos de jamón y queso", "Flan casero"],
    neighborhood: "Barrio Pichincha",
    localTip: "The picada (shared appetizer board) is enormous and perfect for sharing before the main course. Come hungry.",
    rating: 4.3,
  },
  {
    name: "Café de la Flor",
    cuisine: "Cafe & Bistro",
    category: "Traditional",
    priceRange: "$$",
    description: "An elegant traditional cafe in the center of Rosario with a refined menu of classic Argentine dishes. Popular for business lunches and leisurely weekend brunches, with excellent pastries and coffee.",
    whatToOrder: ["Medialunas", "Lomo al champignon", "Torta de chocolate"],
    neighborhood: "Centro",
    localTip: "One of the best spots in Rosario for a proper Argentine breakfast—medialunas and café con leche on a quiet morning.",
    rating: 4.1,
  },
  // International
  {
    name: "Berlina",
    cuisine: "Craft Beer & Gastropub",
    category: "International",
    priceRange: "$$",
    description: "Rosario's craft beer scene is thriving, and Berlina is at the forefront. A modern brewpub serving house-brewed beers alongside refined pub food including gourmet burgers and creative sharing plates.",
    whatToOrder: ["IPA de la casa", "Burger de cordero", "Nachos cargados"],
    neighborhood: "Barrio Pichincha",
    localTip: "The Pichincha neighborhood is Rosario's hippest area—combine a visit here with a walk through the local galleries and bars.",
    rating: 4.4,
  },
  {
    name: "Comité Sushi",
    cuisine: "Japanese-Peruvian Fusion",
    category: "International",
    priceRange: "$$$",
    description: "A stylish Nikkei-inspired restaurant offering creative sushi rolls and ceviches that blend Japanese precision with South American flair. One of the best sushi spots outside Buenos Aires.",
    whatToOrder: ["Roll de salmón con palta", "Ceviche nikkei", "Tiradito de atún"],
    neighborhood: "Barrio Pichincha",
    phone: "+54 341 527-0099",
    localTip: "The omakase menu is the best way to experience the chef's creativity. Book ahead on weekends.",
    rating: 4.5,
  },
  {
    name: "Fratello Pasta Bar",
    cuisine: "Italian",
    category: "International",
    priceRange: "$$",
    description: "Fresh handmade pasta in a cozy, intimate setting. Rosario has deep Italian roots—many residents descend from Italian immigrants—and Fratello honors that heritage with exceptional pasta dishes.",
    whatToOrder: ["Ravioles de ricota y nuez", "Pappardelle al ragú", "Tiramisú"],
    neighborhood: "Centro",
    localTip: "Rosario's Italian heritage runs deep—this is one of the best places to experience it. Try the daily fresh pasta special.",
    rating: 4.3,
  },
  {
    name: "Green Eat",
    cuisine: "Vegetarian & Health Food",
    category: "International",
    priceRange: "$$",
    description: "A refreshing option in a meat-dominated city, Green Eat offers creative vegetarian and vegan dishes using locally sourced produce. Their bowls, wraps, and fresh juices are popular with health-conscious rosarinos.",
    whatToOrder: ["Buddha bowl", "Wrap de hummus", "Smoothie de frutos rojos"],
    neighborhood: "Centro",
    localTip: "One of the few quality vegetarian options in Rosario. Great for a light lunch between exploring the city.",
    rating: 4.1,
  },
  // Budget-Friendly
  {
    name: "El Buen Sabor",
    cuisine: "Rotisería",
    category: "Budget-Friendly",
    priceRange: "$",
    description: "A classic Rosario rotisería offering takeaway and eat-in options for home-style Argentine cooking at unbeatable prices. Their empanadas, milanesas, and tartas are made fresh daily and perfect for a quick, affordable meal.",
    whatToOrder: ["Empanadas de carne", "Milanesa con puré", "Tarta de jamón y queso"],
    neighborhood: "Centro",
    localTip: "Rotiserías are an Argentine institution—this is how locals eat when they don't cook. Order empanadas by the dozen for the best price.",
    rating: 4.0,
  },
  {
    name: "Pizzería Imperio",
    cuisine: "Pizza",
    category: "Budget-Friendly",
    priceRange: "$",
    description: "A beloved neighborhood pizza place serving classic Argentine-style pizza—thick, doughy, and loaded with mozzarella. The fugazzeta (onion pizza with cheese) is a standout, and whole pizzas are incredibly affordable.",
    whatToOrder: ["Fugazzeta", "Muzzarella", "Fainá"],
    neighborhood: "Centro",
    phone: "+54 341 421-3456",
    localTip: "Order fainá (chickpea flatbread) to stack on top of your pizza—it's an Argentine tradition. A whole pizza and fainá feeds two easily.",
    rating: 4.2,
  },
  {
    name: "Kentucky Pizza & Pasta",
    cuisine: "Pizza & Pasta",
    category: "Budget-Friendly",
    priceRange: "$",
    description: "A Rosario chain that has been serving affordable pizza and pasta for decades. Popular with students and families, it offers generous portions of classic Argentine comfort food at wallet-friendly prices.",
    whatToOrder: ["Pizza especial", "Fideos con tuco", "Canelones"],
    neighborhood: "Multiple locations",
    localTip: "The lunch menú ejecutivo (set lunch) is one of the best deals in the city—a main, drink, and dessert for a fraction of restaurant prices.",
    rating: 3.9,
  },
];

const categories = ["Parrillas", "Riverside Dining", "Traditional", "International", "Budget-Friendly"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com/" },
    { "@type": "ListItem", position: 2, name: "Food Guide", item: "https://expatsargentina.com/food/" },
    { "@type": "ListItem", position: 3, name: "Restaurants", item: "https://expatsargentina.com/food/restaurants/" },
    { "@type": "ListItem", position: 4, name: "Rosario", item: "https://expatsargentina.com/food/restaurants/rosario/" },
  ],
};

export default function RosarioRestaurantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-rose-600 via-red-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/cities/rosario.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Flame className="w-8 h-8" />
              </div>
              <span className="text-rose-100 font-medium">City of Parrillas & River Views</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Restaurants in<br />
              <span className="text-rose-200">Rosario</span>
            </h1>
            <p className="text-xl text-rose-100 max-w-2xl mb-8">
              Argentina's third-largest city sits on the banks of the Paraná river and is legendary
              for its parrillas, river fish, and vibrant cafe culture. Home to Messi and some of the
              country's best asado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link href="#top-restaurants">
                  <Star className="w-4 h-4" />
                  Top Restaurants
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/food/restaurants">
                  All Restaurant Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-rose-600">{rosarioRestaurants.length}</div>
              <div className="text-base text-gray-600">Curated Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-rose-600">1.2M+</div>
              <div className="text-base text-gray-600">City Population</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-rose-600">15km</div>
              <div className="text-base text-gray-600">Costanera Riverside</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-rose-600">3rd</div>
              <div className="text-base text-gray-600">Largest City in AR</div>
            </CardContent>
          </Card>
        </div>

        {/* Rosario Dining Context */}
        <Card className="bg-gradient-to-r from-rose-50 to-orange-50 border-rose-100 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-rose-600" />
              Dining on the Paraná
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Rosario is a city built along the banks of the mighty Paraná river, and its dining
              culture reflects this. The city is famous across Argentina for its parrillas—many argue
              the best asado in the country comes from Rosario, not Buenos Aires. The Costanera
              (riverside promenade) offers spectacular dining with river views, and the local river
              fish like surubí and dorado are must-tries.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-base">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Neighborhoods</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Costanera Norte/Central:</strong> Riverside restaurants with Paraná views</li>
                  <li>• <strong>Centro:</strong> Historic cafes, traditional restaurants, pizza joints</li>
                  <li>• <strong>Barrio Pichincha:</strong> Trendy gastro scene, craft beer, galleries</li>
                  <li>• <strong>Puerto Norte:</strong> Upscale dining in the renovated port district</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Rosario Specialties</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Asado rosarino:</strong> Locals claim the best parrilla in Argentina</li>
                  <li>• <strong>Surubí:</strong> Prized Paraná river catfish, grilled or pan-fried</li>
                  <li>• <strong>Dorado:</strong> The "golden" river fish, a local delicacy</li>
                  <li>• <strong>Milanesa napolitana:</strong> Rosario-style, often enormous</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Restaurants by Category */}
        <section id="top-restaurants" className="mb-16">
          {categories.map((category) => {
            const categoryRestaurants = rosarioRestaurants.filter(r => r.category === category);
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  <Badge variant="secondary">{categoryRestaurants.length} spots</Badge>
                </div>
                <div className="space-y-6">
                  {categoryRestaurants.map((restaurant) => (
                    <Card key={restaurant.name} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[1fr,200px] gap-6">
                          <div className="p-6">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {restaurant.name}
                                </h3>
                                <p className="text-base text-rose-600">
                                  {restaurant.cuisine} • {restaurant.neighborhood}
                                </p>
                              </div>
                              <Badge className={`${priceColors[restaurant.priceRange]} shrink-0`}>
                                {restaurant.priceRange}
                              </Badge>
                            </div>

                            <p className="text-gray-600 mb-4">{restaurant.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {restaurant.whatToOrder.map((item) => (
                                <Badge key={item} variant="secondary" className="font-normal">
                                  {item}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-base text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{restaurant.neighborhood}</span>
                              </div>
                              {restaurant.phone && (
                                <div className="flex items-center gap-1">
                                  <Phone className="w-4 h-4" />
                                  <a href={`tel:${restaurant.phone.replace(/\s/g, '')}`} className="hover:underline">{restaurant.phone}</a>
                                </div>
                              )}
                            </div>

                            {restaurant.localTip && (
                              <div className="mt-4 bg-rose-50 rounded-lg p-3 text-base">
                                <span className="font-semibold text-rose-800">Local tip:</span>
                                <span className="text-rose-700"> {restaurant.localTip}</span>
                              </div>
                            )}
                          </div>

                          <div className="bg-gradient-to-br from-rose-100 to-orange-50 flex items-center justify-center p-6">
                            <div className="text-center">
                              <div className="text-6xl font-bold text-rose-200 mb-2">
                                {restaurant.name[0]}
                              </div>
                              {restaurant.rating && (
                                <div className="flex items-center justify-center gap-1 text-rose-700">
                                  <Star className="w-4 h-4 fill-current" />
                                  <span className="font-semibold">{restaurant.rating}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* More Rosario Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-rose-600" />
                Costanera & River Life
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-gray-600">
                The Costanera is the heart of Rosario's social and dining life. Stretching along the Paraná, it offers:
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Costanera Norte</h4>
                <p className="text-base text-gray-600">Premium restaurants and parrillas with the best river views</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Parque España</h4>
                <p className="text-base text-gray-600">Green spaces with food vendors and weekend markets</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Isla de los Inventos</h4>
                <p className="text-base text-gray-600">Cultural center near the riverfront with casual dining nearby</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Weekend Island Trips</h4>
                <p className="text-base text-gray-600">Take a boat to the river islands for asado on the beach—a quintessential Rosario experience</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beer className="w-5 h-5 text-rose-600" />
                Tips for Dining in Rosario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Parrilla Etiquette</h4>
                <p className="text-base text-gray-600">Rosarinos take their asado seriously. Don't ask for your steak well-done unless you want disapproving looks.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">River Fish Season</h4>
                <p className="text-base text-gray-600">Surubí and dorado are best from spring through autumn (September to April). Ask what's fresh.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Lunch Is King</h4>
                <p className="text-base text-gray-600">Many of the best restaurants serve their finest menus at lunch. Dinner starts late—9:30pm or later.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Budget Tip</h4>
                <p className="text-base text-gray-600">Rosario is significantly cheaper than Buenos Aires. A parrilla meal for two with wine runs 30-50% less than the capital.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-rose-600 to-orange-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Exploring Rosario?
              </h2>
              <p className="text-rose-100 mb-6 max-w-xl mx-auto">
                Check out our complete Rosario guide for activities, neighborhoods,
                and travel tips for Argentina's vibrant riverside city.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/cities/rosario">
                    Rosario City Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="/food/restaurants">
                    All Restaurant Guides
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
