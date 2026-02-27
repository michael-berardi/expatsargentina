import { Metadata } from "next";
import Link from "next/link";
import { restaurants } from "@/lib/data/restaurants";
import { 
  MapPin, 
  Star, 
  Phone, 
  ArrowRight,
  Utensils,
  GraduationCap,
  Church,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best Restaurants in Córdoba | Argentina's Second City Dining | Expats Argentina",
  description: "Where to eat in Córdoba, Argentina's second largest city. From historic center classics to Nueva Córdoba's modern dining scene.",
  keywords: ["Córdoba restaurants", "Córdoba dining", "Nueva Córdoba food", "historic center restaurants", "where to eat Córdoba"],
  openGraph: {
    title: "Best Restaurants in Córdoba | Argentina's Second City",
    description: "Discover the best restaurants in Córdoba, from traditional favorites to contemporary dining.",
    images: [{ url: "/images/cities/cordoba.webp", width: 1200, height: 630 }],
  },
};

const priceColors = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

export default function CordobaRestaurantsPage() {
  const cordobaRestaurants = restaurants.filter(r => 
    r.city.toLowerCase().includes("córdoba") || 
    r.city.toLowerCase().includes("cordoba") ||
    r.address.toLowerCase().includes("córdoba") ||
    r.address.toLowerCase().includes("cordoba")
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/cities/cordoba.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <GraduationCap className="w-8 h-8" />
              </div>
              <span className="text-amber-100 font-medium">University City Dining</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Restaurants in<br />
              <span className="text-amber-200">Córdoba</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mb-8">
              Argentina's second city blends colonial history with a vibrant youth culture. 
              The dining scene ranges from historic center classics to Nueva Córdoba's innovative restaurants.
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
              <div className="text-3xl font-bold text-amber-600">2</div>
              <div className="text-sm text-gray-600">Featured Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-600">200K+</div>
              <div className="text-sm text-gray-600">University Students</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-600">🏛️</div>
              <div className="text-sm text-gray-600">UNESCO Heritage</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-600">☀️</div>
              <div className="text-sm text-gray-600">300+ Sunny Days</div>
            </CardContent>
          </Card>
        </div>

        {/* Córdoba Dining Context */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Church className="w-5 h-5 text-amber-600" />
              Dining in La Docta
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Córdoba, nicknamed "La Docta" (The Learned One) for its historic university, 
              has a dining scene shaped by its large student population and colonial heritage. 
              The city offers excellent value—prices are generally lower than Buenos Aires—and 
              a mix of traditional Argentine cuisine and innovative contemporary restaurants.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Neighborhoods</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Centro Histórico:</strong> Colonial atmosphere, traditional restaurants</li>
                  <li>• <strong>Nueva Córdoba:</strong> Student area, modern cafes and bars</li>
                  <li>• <strong>Barrio Güemes:</strong> Trendy dining and nightlife</li>
                  <li>• <strong>Cañada:</strong> Upscale residential dining</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Córdoba Specialties</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Choripán cordobés:</strong> Local sausage sandwich variation</li>
                  <li>• <strong>Locro cordobés:</strong> Thicker, heartier version of the stew</li>
                  <li>• <strong>Alfajores cordobeses:</strong> With local dulce de leche</li>
                  <li>• <strong>Fernet with Coke:</strong> The city's signature drink</li>
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
              <p className="text-gray-600 mt-1">The best dining experiences in Córdoba</p>
            </div>
          </div>

          <div className="space-y-6">
            {cordobaRestaurants.map((restaurant) => (
              <Card key={restaurant.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr,200px] gap-6">
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {restaurant.name}
                          </h3>
                          <p className="text-sm text-amber-600">
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
        </section>

        {/* More Córdoba Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-600" />
                Student-Friendly Dining
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Córdoba's massive student population means plenty of affordable, quality options:
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Barrio Güemes</h4>
                <p className="text-sm text-gray-600">Trendy area with diverse restaurants, craft beer bars, and cafes</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Paseo de las Artes</h4>
                <p className="text-sm text-gray-600">Weekend crafts fair with food stalls and live music</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Mercado Norte</h4>
                <p className="text-sm text-gray-600">Historic market with fresh produce and casual eateries</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Nueva Córdoba Cafes</h4>
                <p className="text-sm text-gray-600">Excellent coffee scene with student-friendly prices</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                Day Trips for Foodies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Alta Gracia</h4>
                <p className="text-sm text-gray-600">Historic town with traditional restaurants, home to Che Guevara's childhood</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Villa General Belgrano</h4>
                <p className="text-sm text-gray-600">German-inspired town known for beer, chocolate, and Oktoberfest</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">La Cumbrecita</h4>
                <p className="text-sm text-gray-600">Pedestrian-only alpine village with German bakeries and cafes</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Carlos Paz</h4>
                <p className="text-sm text-gray-600">Lakeside resort town with waterfront dining</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-amber-600 to-orange-700 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Exploring La Docta?
              </h2>
              <p className="text-amber-100 mb-6 max-w-xl mx-auto">
                Check out our complete Córdoba guide for activities, neighborhoods, 
                and travel tips for Argentina's vibrant second city.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/cities/cordoba">
                  Córdoba City Guide
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
