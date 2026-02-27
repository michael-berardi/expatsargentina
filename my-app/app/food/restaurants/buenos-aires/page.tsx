import { Metadata } from "next";
import Link from "next/link";
import { restaurants, getParrillas, getTopRestaurants } from "@/lib/data/restaurants";
import { 
  MapPin, 
  Star, 
  DollarSign, 
  Phone, 
  Globe, 
  Clock, 
  ArrowRight,
  Utensils,
  Heart,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Best Restaurants in Buenos Aires | Top 40 Guide | Expats Argentina",
  description: "The definitive guide to Buenos Aires restaurants—from world-famous parrillas like Don Julio to hidden local gems. Top 40 restaurants by category with prices, reservations tips, and what to order.",
  keywords: ["buenos aires restaurants", "best restaurants buenos aires", "parrillas buenos aires", "don julio", "buenos aires dining guide", "where to eat buenos aires"],
  openGraph: {
    title: "Best Restaurants in Buenos Aires | Top 40 Guide",
    description: "The definitive guide to Buenos Aires dining—from world-famous parrillas to hidden local gems.",
    images: [{ url: "/images/restaurants/buenos-aires-dining.webp", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://expatsargentina.com/food/restaurants/buenos-aires" },
};

const priceLabels = {
  "$": "Budget ($10-20 USD per person)",
  "$$": "Mid-range ($30-50 USD per person)",
  "$$$": "Upscale ($60-100 USD per person)",
  "$$$$": "Fine dining ($100+ USD per person)",
};

const priceColors = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

export default function BuenosAiresRestaurantsPage() {
  const topRestaurants = getTopRestaurants(20);
  const parrillas = getParrillas().slice(0, 8);
  const pizzaPlaces = restaurants.filter(r => r.cuisineType === "Pizza");
  const empanadaPlaces = restaurants.filter(r => r.cuisineType === "Empanadas");
  const cafes = restaurants.filter(r => r.cuisineType === "Café");
  const vegetarian = restaurants.filter(r => r.cuisineType === "Vegetarian");
  const international = restaurants.filter(r => 
    !["Parrilla", "Pizza", "Empanadas", "Café", "Vegetarian", "Traditional Argentine"].includes(r.cuisineType)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/guides/food-bg.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Utensils className="w-8 h-8" />
              </div>
              <span className="text-white/95 font-medium drop-shadow-md">Expats Argentina Dining Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Restaurants in<br />
              <span className="text-orange-200">Buenos Aires</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mb-8 drop-shadow-md">
              From the world's best steakhouse to hidden neighborhood gems. 
              Our curated guide to the top 40 restaurants in Buenos Aires.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link href="#top-picks">
                  <Star className="w-4 h-4" />
                  Top 20 Restaurants
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/food/restaurants/best-parrillas">
                  Best Parrillas
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
              <div className="text-3xl font-bold text-orange-600">40+</div>
              <div className="text-base text-gray-600">Curated Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">#1</div>
              <div className="text-base text-gray-600">World's Best Steak</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">8</div>
              <div className="text-base text-gray-600">Neighborhoods</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">$</div>
              <div className="text-base text-gray-600">All Price Ranges</div>
            </CardContent>
          </Card>
        </div>

        {/* Price Guide */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Price Guide</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(priceLabels).map(([price, label]) => (
              <div key={price} className="flex items-center gap-3">
                <Badge className={`${priceColors[price as keyof typeof priceColors]} text-base px-3 py-1`}>
                  {price}
                </Badge>
                <span className="text-base text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top 20 Restaurants */}
        <section id="top-picks" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Top 20 Restaurants</h2>
              <p className="text-gray-600 mt-1">The best of Buenos Aires across all categories</p>
            </div>
            <Badge variant="outline" className="hidden md:flex items-center gap-1">
              <Heart className="w-3 h-3" />
              Expats Argentina Picks
            </Badge>
          </div>

          <div className="space-y-6">
            {topRestaurants.map((restaurant, index) => (
              <Card key={restaurant.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr,200px] gap-6">
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                            {restaurant.ranking}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {restaurant.name}
                            </h3>
                            <p className="text-base text-orange-600">
                              {restaurant.cuisineType} • {restaurant.neighborhood}
                            </p>
                          </div>
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

                      <div className="flex flex-wrap items-center gap-4 text-base text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{restaurant.address}</span>
                        </div>
                        {restaurant.reservationsRequired && (
                          <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                            Reservations Required
                          </Badge>
                        )}
                      </div>

                      {restaurant.localTip && (
                        <div className="mt-4 bg-amber-50 rounded-lg p-3 text-base">
                          <span className="font-semibold text-amber-800">Local tip:</span>
                          <span className="text-amber-700"> {restaurant.localTip}</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-orange-200 mb-2">
                          {restaurant.name[0]}
                        </div>
                        <div className="flex items-center justify-center gap-1 text-amber-700">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold">{restaurant.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Parrillas Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Best Parrillas (Steakhouses)</h2>
              <p className="text-gray-600 mt-1">Where to get the perfect Argentine steak</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/food/restaurants/best-parrillas">
                View All Parrillas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {parrillas.map((parrilla) => (
              <Card key={parrilla.slug} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{parrilla.name}</h3>
                    <Badge className={priceColors[parrilla.priceRange]}>{parrilla.priceRange}</Badge>
                  </div>
                  <p className="text-base text-gray-600 mb-3 line-clamp-2">{parrilla.description}</p>
                  <div className="flex items-center gap-2 text-base text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{parrilla.neighborhood}</span>
                  </div>
                  {parrilla.whyWeLoveIt && (
                    <p className="mt-3 text-base text-orange-700 bg-orange-50 rounded-lg p-2">
                      <span className="font-semibold">Why we love it:</span> {parrilla.whyWeLoveIt}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pizza & Empanadas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Pizza</h2>
            <div className="space-y-4">
              {pizzaPlaces.map((pizza) => (
                <Card key={pizza.slug}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{pizza.name}</h3>
                      <Badge className={priceColors[pizza.priceRange]}>{pizza.priceRange}</Badge>
                    </div>
                    <p className="text-base text-gray-600 mb-2">{pizza.address}</p>
                    <p className="text-base text-orange-600">Must try: {pizza.mustTry[0]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Empanadas</h2>
            <div className="space-y-4">
              {empanadaPlaces.map((empanada) => (
                <Card key={empanada.slug}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{empanada.name}</h3>
                      <Badge className={priceColors[empanada.priceRange]}>{empanada.priceRange}</Badge>
                    </div>
                    <p className="text-base text-gray-600 mb-2">{empanada.address}</p>
                    <p className="text-base text-orange-600">Must try: {empanada.mustTry[0]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Vegetarian & International */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vegetarian & Vegan</h2>
            <div className="space-y-4">
              {vegetarian.map((veg) => (
                <Card key={veg.slug}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{veg.name}</h3>
                      <Badge className={priceColors[veg.priceRange]}>{veg.priceRange}</Badge>
                    </div>
                    <p className="text-base text-gray-600 mb-2">{veg.neighborhood}</p>
                    <p className="text-base text-gray-500">{veg.description.slice(0, 100)}...</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International</h2>
            <div className="space-y-4">
              {international.slice(0, 3).map((rest) => (
                <Card key={rest.slug}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{rest.name}</h3>
                      <Badge className={priceColors[rest.priceRange]}>{rest.priceRange}</Badge>
                    </div>
                    <p className="text-base text-orange-600 mb-1">{rest.cuisineType}</p>
                    <p className="text-base text-gray-600">{rest.neighborhood}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Reservation Tips */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              Reservation Tips for Buenos Aires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">1.</span>
                  <span className="text-gray-700">Book top parrillas (Don Julio, etc.) 30-60 days ahead online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">2.</span>
                  <span className="text-gray-700">Walk in at opening (7pm) for places that don't take reservations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">3.</span>
                  <span className="text-gray-700">Dinner is late—9pm is early, 10pm is normal for locals</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">4.</span>
                  <span className="text-gray-700">Many top restaurants are closed Sunday night and Monday</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">5.</span>
                  <span className="text-gray-700">WhatsApp is commonly used for reservations—ask your hotel to book</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">6.</span>
                  <span className="text-gray-700">Bring cash—some top parrillas are cash-only</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Cook Instead?
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Learn to make authentic Argentine dishes at home with our tested recipes 
                and local tips.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/food/recipes">
                  Browse Our Recipes
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
