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
  Wine,
  Grape,
  Mountain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best Restaurants in Mendoza | Wine Country Dining Guide | Expats Argentina",
  description: "The essential dining guide to Mendoza, Argentina's wine capital. From winery restaurants to local parrillas, discover where to eat in wine country.",
  keywords: ["Mendoza restaurants", "wine country dining", "Mendoza food guide", "winery restaurants", "where to eat Mendoza"],
  openGraph: {
    title: "Best Restaurants in Mendoza | Wine Country Dining",
    description: "Discover the best restaurants in Mendoza, from fine dining wineries to local gems.",
    images: [{ url: "/images/cities/mendoza.webp", width: 1200, height: 630 }],
  },
};

const priceColors = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

export default function MendozaRestaurantsPage() {
  const mendozaRestaurants = getRestaurantsByCity("Mendoza");
  const allMendozaRestaurants = restaurants.filter(r => 
    r.city.toLowerCase().includes("mendoza") || 
    r.address.toLowerCase().includes("mendoza")
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/cities/mendoza.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Grape className="w-8 h-8" />
              </div>
              <span className="text-purple-100 font-medium">Wine Country Dining</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Restaurants in<br />
              <span className="text-purple-200">Mendoza</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mb-8">
              Argentina's wine capital offers world-class dining from historic winery restaurants 
              to innovative contemporary cuisine. Eat and drink among the vines.
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
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-600">Featured Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">1500+</div>
              <div className="text-sm text-gray-600">Wineries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">5M</div>
              <div className="text-sm text-gray-600">Annual Visitors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">★★★</div>
              <div className="text-sm text-gray-600">Wine Tourism</div>
            </CardContent>
          </Card>
        </div>

        {/* Mendoza Dining Context */}
        <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-100 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wine className="w-5 h-5 text-purple-600" />
              Dining in Wine Country
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Mendoza is Argentina's premier wine region, and the dining scene reflects this. 
              Many of the best restaurants are located within wineries (bodegas), offering 
              multi-course meals paired with estate wines and views of the Andes.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wine Regions</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Luján de Cuyo:</strong> Historic wineries, Malbec birthplace</li>
                  <li>• <strong>Valle de Uco:</strong> High-altitude wines, modern architecture</li>
                  <li>• <strong>Maipú:</strong> Traditional bodegas, bike-friendly routes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dining Tips</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Book winery restaurants well in advance</li>
                  <li>• Lunch is the main meal; dinner starts late (9pm+)</li>
                  <li>• Wine pairings are always worth it</li>
                  <li>• Harvest season (Feb-Apr) books up fast</li>
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
              <p className="text-gray-600 mt-1">The best dining experiences in Mendoza</p>
            </div>
          </div>

          <div className="space-y-6">
            {allMendozaRestaurants.map((restaurant) => (
              <Card key={restaurant.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr,200px] gap-6">
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {restaurant.name}
                          </h3>
                          <p className="text-sm text-purple-600">
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
                        <div className="mt-4 bg-purple-50 rounded-lg p-3 text-sm">
                          <span className="font-semibold text-purple-800">Local tip:</span>
                          <span className="text-purple-700"> {restaurant.localTip}</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-purple-100 to-indigo-50 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-purple-200 mb-2">
                          {restaurant.name[0]}
                        </div>
                        {restaurant.rating && (
                          <div className="flex items-center justify-center gap-1 text-purple-700">
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

        {/* More Mendoza Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-purple-600" />
                Must-Visit Wineries with Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Bodega Catena Zapata</h4>
                <p className="text-sm text-gray-600">Iconic pyramid winery with tastings and food pairings</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bodega Salentein</h4>
                <p className="text-sm text-gray-600">Modern art and wine in Valle de Uco</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bodega Zuccardi</h4>
                <p className="text-sm text-gray-600">Award-winning architecture and excellent restaurant</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Bodega Ruca Malén</h4>
                <p className="text-sm text-gray-600">Famous 5-course lunch with wine pairings</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-purple-600" />
                Local Mendoza Specialties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Cordero Patagónico</h4>
                <p className="text-sm text-gray-600">Patagonian lamb, often cooked over open fire</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Cabrito</h4>
                <p className="text-sm text-gray-600">Roast goat, a regional specialty</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Alfajores Mendocinos</h4>
                <p className="text-sm text-gray-600">Local variation with walnut and quince</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Aceite de Oliva</h4>
                <p className="text-sm text-gray-600">Mendoza also produces excellent olive oil</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Planning Your Mendoza Wine Trip?
              </h2>
              <p className="text-purple-100 mb-6 max-w-xl mx-auto">
                Check out our complete Mendoza city guide for wineries, accommodation, 
                and travel tips for Argentina's wine capital.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/cities/mendoza">
                  Mendoza City Guide
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
