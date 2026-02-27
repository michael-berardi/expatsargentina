import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  Star,
  Building2,
  Mountain,
  Grape,
  GraduationCap,
  Compass,
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Restaurant Guides | Buenos Aires, Mendoza, Salta & More | Expats Argentina",
  description: "Comprehensive restaurant guides for Buenos Aires, Mendoza, Bariloche, Córdoba, Rosario, Salta and more. From world-famous parrillas to hidden local gems.",
  keywords: ["argentina restaurants", "buenos aires dining", "mendoza restaurants", "bariloche dining", "cordoba restaurants", "rosario restaurants", "salta restaurants"],
  alternates: { canonical: "https://expatsargentina.com/food/restaurants" },
};

const cityGuides = [
  {
    name: "Buenos Aires",
    slug: "buenos-aires",
    description: "The complete guide to dining in Argentina's capital—from world-famous parrillas to Michelin-starred fine dining.",
    highlights: ["Don Julio (#1 steakhouse)", "Michelin-starred restaurants", "40+ curated spots"],
    icon: Building2,
    color: "from-orange-500 to-red-600",
    image: "/images/cities/buenos-aires.webp",
  },
  {
    name: "Best Parrillas",
    slug: "best-parrillas",
    description: "The ultimate guide to Argentine steakhouses. Where to find the perfect bife de chorizo.",
    highlights: ["Top 10 parrillas", "Reservation tips", "What to order"],
    icon: Utensils,
    color: "from-red-600 to-orange-600",
    image: "/images/guides/food-bg.webp",
  },
  {
    name: "Mendoza",
    slug: "mendoza",
    description: "Wine country dining at its finest. Winery restaurants, local gems, and the best of Mendoza's food scene.",
    highlights: ["Winery dining", "1884 Restaurant", "Local specialties"],
    icon: Grape,
    color: "from-purple-600 to-indigo-700",
    image: "/images/cities/mendoza.webp",
  },
  {
    name: "Bariloche",
    slug: "bariloche",
    description: "Patagonia's culinary capital. Lakeside dining, traditional lamb, and mountain views.",
    highlights: ["Lakeside restaurants", "Cordero al asador", "Local trout"],
    icon: Mountain,
    color: "from-blue-600 to-cyan-700",
    image: "/images/cities/bariloche.webp",
  },
  {
    name: "Córdoba",
    slug: "cordoba",
    description: "Argentina's second city offers excellent value and a vibrant university-town dining scene.",
    highlights: ["Historic center", "Student-friendly prices", "Sunday tradition"],
    icon: GraduationCap,
    color: "from-amber-600 to-orange-600",
    image: "/images/cities/cordoba.webp",
  },
  {
    name: "Rosario",
    slug: "rosario",
    description: "Argentina's third city delivers excellent parrillas, river fish, and a vibrant riverside dining scene.",
    highlights: ["Riverside dining", "Historic parrillas", "Craft beer scene"],
    icon: Compass,
    color: "from-teal-600 to-cyan-600",
    image: "/images/cities/rosario.webp",
  },
  {
    name: "Salta",
    slug: "salta",
    description: "The northwest's culinary capital. Empanadas salteñas, peñas with live folk music, and torrontés wine.",
    highlights: ["Best empanadas in Argentina", "Peñas folk dining", "Torrontés wine"],
    icon: Landmark,
    color: "from-rose-600 to-orange-600",
    image: "/images/cities/salta.webp",
  },
];

export default function RestaurantsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/guides/food-bg.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Utensils className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Restaurant Guides
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-sm">
              Discover the best places to eat across Argentina—from Buenos Aires' world-class 
              dining to wine country gems and Patagonian specialties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/food/restaurants/buenos-aires">
                  Buenos Aires
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

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-1">40+</div>
              <div className="text-base text-gray-600">Curated Restaurants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-1">7</div>
              <div className="text-base text-gray-600">City Guides</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-1">4</div>
              <div className="text-base text-gray-600">Michelin Stars</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-1">#1</div>
              <div className="text-base text-gray-600">World Steakhouse</div>
            </CardContent>
          </Card>
        </div>

        {/* City Guides Grid */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by City</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityGuides.map((city) => {
            const Icon = city.icon;
            return (
              <Link key={city.slug} href={`/food/restaurants/${city.slug}`} className="group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${city.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white/30" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{city.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {city.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-base text-gray-500">
                          <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                      Explore Guide
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Back to Food Guide */}
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/food">
              <Utensils className="w-4 h-4 mr-2" />
              Back to Complete Food Guide
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
