import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Star,
  Phone,
  ArrowRight,
  Utensils,
  Music,
  Wine,
  Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best Restaurants in Salta | Top Guide | Expats Argentina",
  description: "Where to eat in Salta la Linda. From the best empanadas salteñas and traditional peñas to torrontés wine bars and regional norteño cuisine.",
  keywords: ["Salta restaurants", "Salta dining", "empanadas salteñas", "peña Salta", "torrontés wine", "where to eat Salta", "Salta food guide", "norteño cuisine"],
  openGraph: {
    title: "Best Restaurants in Salta | Top Guide",
    description: "Discover the best restaurants in Salta, from legendary empanadas and folk music peñas to torrontés wine and norteño cuisine.",
    images: [{ url: "/images/cities/salta.webp", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://expatsargentina.com/food/restaurants/salta" },
};

const priceColors: Record<string, string> = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

interface SaltaRestaurant {
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

const saltaRestaurants: SaltaRestaurant[] = [
  // Regional Norteño Cuisine
  {
    name: "Doña Salta",
    cuisine: "Regional Norteño",
    category: "Regional Norteño Cuisine",
    priceRange: "$$",
    description: "One of Salta's most iconic restaurants for traditional northwestern Argentine cuisine. The empanadas salteñas here are considered among the finest in the city—hand-folded, with a juicy spiced beef filling cooked in the traditional horno de barro (clay oven).",
    whatToOrder: ["Empanadas salteñas", "Locro", "Tamales"],
    neighborhood: "Centro Histórico",
    phone: "+54 387 432-1921",
    localTip: "Order the empanadas 'de carne cortada a cuchillo' (hand-cut beef)—they're the most traditional and the filling is noticeably better than machine-ground.",
    rating: 4.5,
  },
  {
    name: "El Solar del Convento",
    cuisine: "Regional Gourmet",
    category: "Regional Norteño Cuisine",
    priceRange: "$$$",
    description: "Set in a beautifully restored colonial building near the main plaza, this restaurant elevates traditional Salta cuisine with modern techniques. The llama steak and quinoa dishes showcase the best of Andean gastronomy in an elegant setting.",
    whatToOrder: ["Lomo de llama", "Quinoa risotto", "Humita en chala"],
    neighborhood: "Centro Histórico",
    phone: "+54 387 421-5124",
    localTip: "The building's courtyard is stunning—request a table there. The wine list focuses on high-altitude Salta wines, especially torrontés from Cafayate.",
    rating: 4.6,
  },
  {
    name: "La Criollita",
    cuisine: "Traditional Norteño",
    category: "Regional Norteño Cuisine",
    priceRange: "$",
    description: "A no-frills institution that has been serving traditional norteño food for decades. Locals line up at lunch for their empanadas, locro, and tamales—all made from family recipes passed down through generations.",
    whatToOrder: ["Empanadas de carne", "Locro norteño", "Tamales en chala"],
    neighborhood: "Centro",
    localTip: "This is a takeaway-focused spot. Buy empanadas by the dozen—they're some of the cheapest and most authentic in the city.",
    rating: 4.4,
  },
  {
    name: "Viejo Jack",
    cuisine: "Regional Argentine",
    category: "Regional Norteño Cuisine",
    priceRange: "$$",
    description: "A well-established Salta restaurant known for hearty regional dishes and generous portions. Their cabrito al horno (roast goat) and locro are standouts, served in a warm, rustic atmosphere with exposed brick and wooden beams.",
    whatToOrder: ["Cabrito al horno", "Humitas", "Carbonada"],
    neighborhood: "Centro",
    phone: "+54 387 421-7529",
    localTip: "The cabrito (roast goat) is a specialty of the Argentine northwest. If it's on the menu, don't miss it—it's a regional delicacy rarely found elsewhere.",
    rating: 4.3,
  },
  // Peñas
  {
    name: "La Casona del Molino",
    cuisine: "Peña (Folk Music & Regional Food)",
    category: "Peñas",
    priceRange: "$$",
    description: "The most famous peña in Salta and arguably all of Argentina. This legendary venue combines traditional norteño food with live folk music (zambas, chacareras, bagualas) in a rustic adobe house. An absolutely essential Salta experience.",
    whatToOrder: ["Empanadas salteñas", "Locro", "Vino patero (homemade wine)"],
    neighborhood: "Barrio San Bernardo",
    phone: "+54 387 434-2835",
    localTip: "Go on a Saturday night for the full experience. Music starts around 10pm and goes until the early hours. Don't be surprised if you end up singing along.",
    rating: 4.7,
  },
  {
    name: "La Vieja Estación",
    cuisine: "Peña (Folk Music & Regional Food)",
    category: "Peñas",
    priceRange: "$$",
    description: "Housed in a converted railway station, this popular peña offers excellent regional food alongside nightly folk music performances. The atmosphere is magical—under string lights in the old station courtyard, with the Andes as backdrop.",
    whatToOrder: ["Tamales", "Empanadas", "Torrontés wine"],
    neighborhood: "Centro",
    phone: "+54 387 421-7727",
    localTip: "More tourist-friendly than La Casona del Molino, with earlier show times. A good choice if you want the peña experience but at a more manageable hour.",
    rating: 4.4,
  },
  {
    name: "Peña Balderrama",
    cuisine: "Peña (Folk Music & Regional Food)",
    category: "Peñas",
    priceRange: "$$",
    description: "Named after the famous zamba 'La Balderrama' by Cuchi Leguizamón, this intimate peña is a shrine to Argentine folk music. The food is traditional and hearty, but people come here primarily for the extraordinary live music in an intimate setting.",
    whatToOrder: ["Picada norteña", "Empanadas", "Vino torrontés"],
    neighborhood: "Centro Histórico",
    localTip: "This peña has deep cultural significance—the song 'La Balderrama' is one of Argentina's most beloved folk songs. Ask a local to explain the lyrics over a glass of torrontés.",
    rating: 4.5,
  },
  // Wine & Gastronomy
  {
    name: "Restaurante del Hotel Legado Mítico",
    cuisine: "Wine Bar & Fine Dining",
    category: "Wine & Gastronomy",
    priceRange: "$$$",
    description: "An elegant wine-focused restaurant in one of Salta's finest boutique hotels. The menu pairs refined Argentine cuisine with an exceptional selection of high-altitude wines from the Calchaquí Valley, including rare torrontés and tannat varietals.",
    whatToOrder: ["Degustación de vinos", "Cordero patagónico", "Tabla de quesos regionales"],
    neighborhood: "Centro Histórico",
    phone: "+54 387 422-8786",
    localTip: "The wine flights featuring Cafayate torrontés are a revelation—you'll taste how altitude and terroir create a completely different wine from lowland versions.",
    rating: 4.6,
  },
  {
    name: "Casimiro Bodega & Restaurante",
    cuisine: "Wine-Paired Dining",
    category: "Wine & Gastronomy",
    priceRange: "$$$",
    description: "A sophisticated restaurant dedicated to showcasing the wines of Salta's Calchaquí Valley alongside contemporary Argentine cuisine. The multi-course tasting menu with wine pairings is the highlight.",
    whatToOrder: ["Menú degustación", "Torrontés reserva", "Lomo con reducción de malbec de altura"],
    neighborhood: "Centro",
    localTip: "Salta's wine region (Cafayate) produces some of the world's highest-altitude wines. The torrontés grape is the star—aromatic, floral, and uniquely Argentine.",
    rating: 4.5,
  },
  {
    name: "Vinoteca del Centro",
    cuisine: "Wine Bar & Tapas",
    category: "Wine & Gastronomy",
    priceRange: "$$",
    description: "A casual wine bar in the heart of Salta perfect for sampling the region's wines without the formality of fine dining. Pair your glass of torrontés with a tabla of regional cheeses, cured meats, and homemade breads.",
    whatToOrder: ["Torrontés by the glass", "Tabla de quesos y fiambres", "Empanadas de queso"],
    neighborhood: "Centro Histórico",
    localTip: "A great first stop to orient your palate before visiting Cafayate. The staff are knowledgeable and happy to guide you through local varietals.",
    rating: 4.2,
  },
  // Cafes & Breakfast
  {
    name: "Café del Tiempo",
    cuisine: "Cafe & Breakfast",
    category: "Cafes & Breakfast",
    priceRange: "$",
    description: "A charming cafe in a colonial-era building on the main plaza, perfect for a leisurely Argentine breakfast or afternoon merienda. Excellent coffee, fresh pastries, and a peaceful courtyard make this a Salta morning ritual.",
    whatToOrder: ["Café con leche", "Medialunas de manteca", "Tostado de jamón y queso"],
    neighborhood: "Plaza 9 de Julio",
    localTip: "Grab a table in the courtyard facing the plaza. It's one of the most beautiful breakfast spots in all of northern Argentina.",
    rating: 4.3,
  },
  {
    name: "Café Van Gogh",
    cuisine: "Cafe & Brunch",
    category: "Cafes & Breakfast",
    priceRange: "$$",
    description: "A popular modern cafe near the main plaza offering excellent brunch options alongside traditional Argentine coffee culture. The space is bright and welcoming, with local art on the walls and a creative menu.",
    whatToOrder: ["Brunch completo", "Tostadas con palta", "Licuado de frutas"],
    neighborhood: "Centro Histórico",
    localTip: "One of the few places in Salta offering a proper brunch. Popular with expats and young locals on weekend mornings.",
    rating: 4.1,
  },
  {
    name: "Heladería El Chaltén",
    cuisine: "Ice Cream & Desserts",
    category: "Cafes & Breakfast",
    priceRange: "$",
    description: "An artisanal ice cream shop that uses regional flavors to create unique helado. Try flavors inspired by norteño ingredients like quinoa, dulce de cayote (local squash jam), and arrope (grape syrup).",
    whatToOrder: ["Dulce de cayote", "Quinoa con dulce de leche", "Malbec sorbet"],
    neighborhood: "Centro",
    localTip: "The regional flavors are what make this special—dulce de cayote is a Salta specialty you won't find anywhere else in the country.",
    rating: 4.3,
  },
  // International
  {
    name: "Ma Cuisine",
    cuisine: "French-Argentine Fusion",
    category: "International Cuisine",
    priceRange: "$$$",
    description: "A French-influenced restaurant that brings European technique to Argentine and norteño ingredients. Run by a French-Argentine couple, the menu changes seasonally and features creative dishes using llama, quinoa, and local produce.",
    whatToOrder: ["Tartare de llama", "Risotto de hongos andinos", "Crème brûlée de dulce de leche"],
    neighborhood: "Centro Histórico",
    phone: "+54 387 421-3969",
    localTip: "One of the most refined dining experiences in Salta. The chef's tasting menu is the way to go—it showcases the best of both French and norteño cuisines.",
    rating: 4.5,
  },
  {
    name: "José Ballivián",
    cuisine: "Contemporary Latin",
    category: "International Cuisine",
    priceRange: "$$",
    description: "A trendy restaurant bringing contemporary Latin American flavors to Salta. The menu draws inspiration from across the continent—Peruvian ceviche, Mexican tacos, and Brazilian influences—all filtered through a norteño lens.",
    whatToOrder: ["Ceviche de trucha", "Tacos de cordero", "Pisco sour"],
    neighborhood: "Centro",
    localTip: "The cocktail menu is excellent—try the regional twists on classic South American cocktails. The pisco sour with torrontés is inventive.",
    rating: 4.2,
  },
  {
    name: "El Patio de la Empanada y Más",
    cuisine: "Modern Argentine",
    category: "International Cuisine",
    priceRange: "$$",
    description: "Despite the name, this restaurant goes well beyond empanadas, offering a modern, eclectic menu in a beautiful courtyard setting. A good option for groups where some want traditional food and others want something different.",
    whatToOrder: ["Empanadas variadas", "Wok de vegetales andinos", "Pizza con llama y rúcula"],
    neighborhood: "Centro Histórico",
    localTip: "The courtyard dining is lovely in the evening. A good compromise restaurant if your group can't agree on traditional vs. modern.",
    rating: 4.1,
  },
];

const categories = ["Regional Norteño Cuisine", "Peñas", "Wine & Gastronomy", "Cafes & Breakfast", "International Cuisine"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://expatsargentina.com/" },
    { "@type": "ListItem", position: 2, name: "Food Guide", item: "https://expatsargentina.com/food/" },
    { "@type": "ListItem", position: 3, name: "Restaurants", item: "https://expatsargentina.com/food/restaurants/" },
    { "@type": "ListItem", position: 4, name: "Salta", item: "https://expatsargentina.com/food/restaurants/salta/" },
  ],
};

export default function SaltaRestaurantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-amber-700 via-orange-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/cities/salta.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Music className="w-8 h-8" />
              </div>
              <span className="text-amber-100 font-medium">Salta la Linda — Folk, Food & Wine</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Restaurants in<br />
              <span className="text-amber-200">Salta</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mb-8">
              Known as "Salta la Linda" (Salta the Beautiful), this colonial gem in Argentina's
              northwest is home to the country's best empanadas, traditional peñas with live folk
              music, and the world's highest-altitude vineyards producing exceptional torrontés wine.
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
              <div className="text-3xl font-bold text-amber-700">{saltaRestaurants.length}</div>
              <div className="text-sm text-gray-600">Curated Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-700">#1</div>
              <div className="text-sm text-gray-600">Empanadas in Argentina</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-700">3000m</div>
              <div className="text-sm text-gray-600">Highest Vineyards</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-700">1582</div>
              <div className="text-sm text-gray-600">Founded (Colonial)</div>
            </CardContent>
          </Card>
        </div>

        {/* Salta Dining Context */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-amber-700" />
              Dining in Salta la Linda
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Salta's cuisine is unlike anywhere else in Argentina. Influenced by indigenous Andean
              traditions, Spanish colonial heritage, and the harsh beauty of the northwest landscape,
              the food here is deeply regional. Empanadas salteñas are universally acknowledged as
              the best in the country, and the peña tradition—dining with live folk music—is an
              experience unique to this region. Add world-class high-altitude wines and you have one
              of Argentina's most distinctive food destinations.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Must-Try Regional Dishes</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Empanadas salteñas:</strong> Spiced beef in crispy dough, baked in clay oven</li>
                  <li>• <strong>Locro:</strong> Hearty corn, bean, and meat stew (especially May 25)</li>
                  <li>• <strong>Tamales:</strong> Corn masa with meat, wrapped in corn husks</li>
                  <li>• <strong>Humitas:</strong> Sweet corn paste steamed in corn husks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wine & Drink</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Torrontés:</strong> Argentina's signature white grape, best from Cafayate</li>
                  <li>• <strong>Malbec de altura:</strong> High-altitude reds with intense character</li>
                  <li>• <strong>Vino patero:</strong> Rustic homemade wine served at peñas</li>
                  <li>• <strong>Api:</strong> Hot purple corn drink, traditional Andean beverage</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Restaurants by Category */}
        <section id="top-restaurants" className="mb-16">
          {categories.map((category) => {
            const categoryRestaurants = saltaRestaurants.filter(r => r.category === category);
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
                                <p className="text-sm text-amber-700">
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

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{restaurant.neighborhood}</span>
                              </div>
                              {restaurant.phone && (
                                <div className="flex items-center gap-1">
                                  <Phone className="w-4 h-4" />
                                  <span>{restaurant.phone}</span>
                                </div>
                              )}
                            </div>

                            {restaurant.localTip && (
                              <div className="mt-4 bg-amber-50 rounded-lg p-3 text-sm">
                                <span className="font-semibold text-amber-800">Local tip:</span>
                                <span className="text-amber-700"> {restaurant.localTip}</span>
                              </div>
                            )}
                          </div>

                          <div className="bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center p-6">
                            <div className="text-center">
                              <div className="text-6xl font-bold text-amber-200 mb-2">
                                {restaurant.name[0]}
                              </div>
                              {restaurant.rating && (
                                <div className="flex items-center justify-center gap-1 text-amber-700">
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

        {/* More Salta Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wine className="w-5 h-5 text-amber-700" />
                The Cafayate Wine Trail
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Salta province is home to the Calchaquí Valley wine region, centered around Cafayate (3 hours south). A must-do day trip or overnight:
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Quebrada de las Flechas</h4>
                <p className="text-sm text-gray-600">Stunning rock formations en route to Cafayate wine country</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bodega Colomé</h4>
                <p className="text-sm text-gray-600">One of the world's highest wineries with a James Turrell museum</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bodega El Esteco</h4>
                <p className="text-sm text-gray-600">Historic winery with excellent restaurant and torrontés tastings</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Cafayate Plaza</h4>
                <p className="text-sm text-gray-600">Charming town square ringed with wine bars and restaurants</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-amber-700" />
                Tips for Dining in Salta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Empanada Etiquette</h4>
                <p className="text-sm text-gray-600">Eat them by hand, never with a fork. The repulgue (crimp pattern) tells you the filling. Locals eat them with a squeeze of lemon.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Peña Timing</h4>
                <p className="text-sm text-gray-600">Peñas start late (9-10pm) and go until 2-3am. Arrive by 10pm for dinner, stay for the music. Weekends are liveliest.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Festival Season</h4>
                <p className="text-sm text-gray-600">Visit in July for the Fiesta de la Empanada, or February for Carnival. Food experiences multiply during festivals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Budget Note</h4>
                <p className="text-sm text-gray-600">Salta is one of Argentina's most affordable food cities. A dozen empanadas costs less than a single dish in Buenos Aires.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-amber-700 to-red-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Exploring Salta la Linda?
              </h2>
              <p className="text-amber-100 mb-6 max-w-xl mx-auto">
                Check out our complete Salta guide for activities, day trips to Cafayate
                and the Quebrada de Humahuaca, and travel tips for Argentina's stunning northwest.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/cities/salta">
                    Salta City Guide
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
