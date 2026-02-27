import { Metadata } from "next";
import Link from "next/link";
import { restaurants, getRestaurantsByCity } from "@/lib/data/restaurants";
import { 
  MapPin, 
  Star, 
  DollarSign, 
  Phone, 
  Clock, 
  ArrowRight,
  Utensils,
  Mountain,
  Fish,
  Snowflake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best Restaurants in Bariloche | Patagonia Dining Guide | Expats Argentina",
  description: "Where to eat in Bariloche, the gateway to Patagonia. From lakeside dining to traditional cordero, discover the best restaurants in Argentina's Lake District.",
  keywords: ["Bariloche restaurants", "Patagonia dining", "Bariloche food guide", "Lake District restaurants", "where to eat Bariloche"],
  openGraph: {
    title: "Best Restaurants in Bariloche | Patagonia Dining",
    description: "Discover the best restaurants in Bariloche, from lakeside fine dining to traditional Patagonian cuisine.",
    images: [{ url: "/images/cities/bariloche.webp", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://expatsargentina.com/food/restaurants/bariloche" },
};

const priceColors = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

export default function BarilocheRestaurantsPage() {
  const barilocheRestaurants = restaurants.filter(r => 
    r.city.toLowerCase().includes("bariloche") || 
    r.address.toLowerCase().includes("bariloche")
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/cities/bariloche.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Mountain className="w-8 h-8" />
              </div>
              <span className="text-blue-100 font-medium">Patagonia Dining</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Restaurants in<br />
              <span className="text-blue-200">Bariloche</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-8">
              The gateway to Patagonia offers stunning lakeside dining, traditional lamb roasted over open fires, 
              and fresh mountain trout in Argentina's most scenic setting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link href="#top-restaurants">
                  <Star className="w-4 h-4" />
                  Top Restaurants
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/food">
                  Back to Food Guide
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
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Featured Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">★★★</div>
              <div className="text-sm text-gray-600">Scenic Dining</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">🐑</div>
              <div className="text-sm text-gray-600">Cordero al Asador</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">🎿</div>
              <div className="text-sm text-gray-600">Ski Season Hotspot</div>
            </CardContent>
          </Card>
        </div>

        {/* Bariloche Dining Context */}
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-100 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fish className="w-5 h-5 text-blue-600" />
              Dining in the Lake District
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Bariloche sits on the shores of Lake Nahuel Huapi surrounded by the Andes. 
              The dining scene reflects its Patagonian location—hearty mountain cuisine 
              featuring local lamb, freshwater trout, and wild mushrooms, often with 
              stunning lake and mountain views.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Must-Try Specialties</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Cordero al asador:</strong> Whole lamb roasted over open fire</li>
                  <li>• <strong>Trucha:</strong> Fresh mountain trout, often smoked</li>
                  <li>• <strong>Centolla:</strong> King crab (from the south)</li>
                  <li>• <strong>Chocolate:</strong> Bariloche is Argentina's chocolate capital</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dining Tips</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Book lakeside restaurants in advance during summer</li>
                  <li>• Ski season (June-Aug) brings crowds—reserve early</li>
                  <li>• Many restaurants offer early dinner (7pm) for tourists</li>
                  <li>• Try the local craft beer scene—it's excellent</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Restaurants */}
        <section id="top-restaurants" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Restaurants</h2>
              <p className="text-gray-600 mt-1">The best dining experiences in Bariloche</p>
            </div>
          </div>

          <div className="space-y-6">
            {barilocheRestaurants.map((restaurant) => (
              <Card key={restaurant.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr,200px] gap-6">
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {restaurant.name}
                          </h3>
                          <p className="text-sm text-blue-600">
                            {restaurant.cuisineType} • {restaurant.subCategory}
                          </p>
                        </div>
                        <Badge className={`${priceColors[restaurant.priceRange]} shrink-0`}>
                          {restaurant.priceRange}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{restaurant.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {restaurant.mustTry.slice(0, 3).map((item) => (
                          <Badge key={item} variant="secondary" className="font-normal">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{restaurant.address}</span>
                        </div>
                        {restaurant.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>{restaurant.phone}</span>
                          </div>
                        )}
                      </div>

                      {restaurant.localTip && (
                        <div className="mt-4 bg-blue-50 rounded-lg p-3 text-sm">
                          <span className="font-semibold text-blue-800">Local tip:</span>
                          <span className="text-blue-700"> {restaurant.localTip}</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-blue-100 to-cyan-50 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-blue-200 mb-2">
                          {restaurant.name[0]}
                        </div>
                        {restaurant.rating && (
                          <div className="flex items-center justify-center gap-1 text-blue-700">
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
        </section>

        {/* More Bariloche Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-blue-600" />
                Notable Dining Areas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Circuito Chico</h4>
                <p className="text-sm text-gray-600">Scenic route with lakeside restaurants and stunning views</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Centro (Downtown)</h4>
                <p className="text-sm text-gray-600">Highest concentration of restaurants, from casual to fine dining</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Cerro Catedral Base</h4>
                <p className="text-sm text-gray-600">Mountain restaurants perfect for apres-ski dining</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Colonia Suiza</h4>
                <p className="text-sm text-gray-600">Swiss heritage area with traditional curanto and craft fair</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Snowflake className="w-5 h-5 text-blue-600" />
                Seasonal Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Summer (Dec-Feb)</h4>
                <p className="text-sm text-gray-600">Peak season—book restaurants well in advance. Lakeside dining at its best.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ski Season (Jun-Sep)</h4>
                <p className="text-sm text-gray-600">Second busy period. Mountain restaurants buzz with skiers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Shoulder Seasons</h4>
                <p className="text-sm text-gray-600">Mar-May and Oct-Nov offer quieter dining, better service, and lower prices.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Winter Nights</h4>
                <p className="text-sm text-gray-600">Many restaurants feature fireplaces and hearty comfort food.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Planning Your Patagonia Adventure?
              </h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Check out our complete Bariloche guide for activities, accommodation, 
                and travel tips for Argentina's Lake District.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/cities/bariloche">
                  Bariloche City Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
