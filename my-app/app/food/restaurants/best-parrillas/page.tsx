import { Metadata } from "next";
import Link from "next/link";
import { getParrillas } from "@/lib/data/restaurants";
import { 
  Flame, 
  MapPin, 
  Star, 
  DollarSign, 
  Clock,
  Phone,
  CheckCircle,
  XCircle,
  ArrowRight,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Best Parrillas in Buenos Aires | Top 30 Steakhouses | Expats Argentina",
  description: "The ultimate guide to Argentine steakhouses—from Don Julio (#1 in the world) to hidden local gems. Complete with what to order, how to book, and insider tips.",
  keywords: ["best parrillas buenos aires", "argentine steakhouse", "don julio", "asado buenos aires", "where to eat steak buenos aires", "top parrillas"],
  openGraph: {
    title: "Best Parrillas in Buenos Aires | Top 30 Steakhouses",
    description: "The ultimate guide to Argentine steakhouses—from Don Julio to hidden local gems.",
    images: [{ url: "/images/restaurants/parrillas.webp", width: 1200, height: 630 }],
  },
};

const priceColors = {
  "$": "bg-green-100 text-green-700",
  "$$": "bg-yellow-100 text-yellow-700",
  "$$$": "bg-orange-100 text-orange-700",
  "$$$$": "bg-red-100 text-red-700",
};

export default function BestParrillasPage() {
  const parrillas = getParrillas();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-red-700 via-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/guides/food-bg.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Flame className="w-8 h-8" />
              </div>
              <span className="text-red-100 font-medium">The Ultimate Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Best Parrillas in<br />
              <span className="text-orange-200">Buenos Aires</span>
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mb-4">
              From Don Julio (#1 steakhouse in the world) to neighborhood gems 
              only locals know. Your complete guide to Argentine asado culture.
            </p>
            <div className="flex items-center gap-2 text-red-200">
              <Award className="w-5 h-5" />
              <span>Featuring the World's #1 Best Steak Restaurant</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Guide Intro */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Understanding Argentine Parrillas</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A parrilla (pronounced pa-REE-sha) is more than a steakhouse—it's a cultural institution. 
              At its heart is the asador (grill master) who tends cuts of beef over wood coals for hours, 
              transforming simple ingredients into something transcendent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unlike American steakhouses with their high heat and quick sears, Argentine parrillas favor 
              slow cooking over indirect heat. The result: beef that's smoky, tender, and deeply flavored. 
              Don Julio, currently ranked #1 in the world, exemplifies this art.
            </p>
            
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-3">Essential Cuts to Know</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Vacio (Flank Steak)</h4>
                  <p className="text-sm text-gray-600">Juicy, flavorful, with a distinctive grain. The connoisseur's choice.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bife de Chorizo (Sirloin)</h4>
                  <p className="text-sm text-gray-600">The classic steak—thick, tender, perfect marbling.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Entraña (Skirt Steak)</h4>
                  <p className="text-sm text-gray-600">Intense beef flavor, slightly chewy texture. Favorite among locals.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ojo de Bife (Ribeye)</h4>
                  <p className="text-sm text-gray-600">Rich, fatty, deeply flavored. The indulgence cut.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white border-0 h-fit">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
                  <span>Simple seasoning—just salt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
                  <span>Wood coal fire flavor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
                  <span>Chimichurri on the side</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
                  <span>Portions sized for sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <span>No sauces on the meat</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <span>No well-done (ask for "a punto")</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Top Parrillas */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Top Parrillas</h2>
              <p className="text-gray-600 mt-1">Ranked by quality, atmosphere, and value</p>
            </div>
            <Badge variant="outline" className="hidden md:inline-flex">
              <Award className="w-3 h-3 mr-1" />
              Updated 2025
            </Badge>
          </div>

          <div className="space-y-8">
            {parrillas.map((parrilla, index) => (
              <Card key={parrilla.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[120px,1fr] lg:grid-cols-[120px,1fr,300px]">
                    {/* Ranking */}
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold">{parrilla.ranking}</div>
                      <div className="text-sm opacity-80">rank</div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{parrilla.name}</h3>
                          <p className="text-orange-600 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {parrilla.neighborhood}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={`${priceColors[parrilla.priceRange]} text-base`}>
                            {parrilla.priceRange}
                          </Badge>
                          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
                            <Star className="w-4 h-4 text-amber-500 fill-current" />
                            <span className="font-semibold text-amber-700">{parrilla.rating}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{parrilla.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {parrilla.mustTry.slice(0, 4).map((item) => (
                          <Badge key={item} variant="secondary" className="font-normal">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{parrilla.address}</span>
                        </div>
                        {parrilla.hours && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{parrilla.hours}</span>
                          </div>
                        )}
                      </div>

                      {/* Reservation Note */}
                      <div className={`mt-4 p-3 rounded-lg ${parrilla.reservationsRequired ? 'bg-amber-50 border border-amber-100' : 'bg-green-50 border border-green-100'}`}>
                        <div className="flex items-start gap-2">
                          {parrilla.reservationsRequired ? (
                            <>
                              <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-amber-800">Reservations required:</span>
                                <span className="text-amber-700"> {parrilla.reservationTip}</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-green-800">Walk-ins welcome:</span>
                                <span className="text-green-700"> {parrilla.reservationTip}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Why We Love It */}
                      {parrilla.whyWeLoveIt && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-900">Why we love it:</span> {parrilla.whyWeLoveIt}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="bg-gray-50 p-6 border-l hidden lg:block">
                      <h4 className="font-semibold text-gray-900 mb-3">Good For</h4>
                      <ul className="space-y-2 mb-4">
                        {parrilla.goodFor?.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {parrilla.features && (
                        <>
                          <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {parrilla.features.slice(0, 4).map((feature) => (
                              <Badge key={feature} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}

                      {parrilla.phone && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{parrilla.phone}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Order */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">How to Order at a Parrilla</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">The Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span className="text-gray-700">Start with provoleta (grilled cheese) and chorizo/morcilla</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span className="text-gray-700">Order 1-2 main cuts to share—portions are huge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span className="text-gray-700">Add a simple salad (not creamy)—it cuts the richness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <span className="text-gray-700">Order wine by the bottle—it's cheaper than by the glass</span>
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Doneness Levels</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Vuelta y vuelta</span>
                    <Badge variant="outline">Rare (seared)</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">A punto</span>
                    <Badge variant="outline" className="border-green-500 text-green-700">Medium (recommended)</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Cocido</span>
                    <Badge variant="outline" className="border-red-300 text-red-600">Well done (avoid)</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Pro tip:</strong> Ask for "a punto"—it's how locals eat it. Well-done is considered a waste of good beef.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">By Budget</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <DollarSign className="w-5 h-5" />
                  Budget ($)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600 mb-3">$15-25 USD per person</p>
                <ul className="space-y-2">
                  <li className="text-sm font-medium">• Desnivel</li>
                  <li className="text-sm font-medium">• El Boliche de Dario</li>
                  <li className="text-sm text-gray-500">Neighborhood gems, huge portions, authentic</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-yellow-50">
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <DollarSign className="w-5 h-5" />
                  Mid-Range ($$)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600 mb-3">$40-60 USD per person</p>
                <ul className="space-y-2">
                  <li className="text-sm font-medium">• El Pobre Luis</li>
                  <li className="text-sm font-medium">• Caldén del Soho</li>
                  <li className="text-sm text-gray-500">Quality meat, good service, neighborhood favorites</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <DollarSign className="w-5 h-5" />
                  Upscale ($$$)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600 mb-3">$80-150+ USD per person</p>
                <ul className="space-y-2">
                  <li className="text-sm font-medium">• Don Julio (#1 in world)</li>
                  <li className="text-sm font-medium">• La Cabrera</li>
                  <li className="text-sm text-gray-500">Aged beef, wine cellars, world-class experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3">Ready to Make Reservations?</h3>
              <p className="text-gray-300 mb-4">
                Book 30-60 days ahead for top parrillas like Don Julio. 
                Use their websites or ask your hotel concierge.
              </p>
              <Button asChild variant="secondary">
                <Link href="/food/restaurants/buenos-aires">
                  Back to All Restaurants
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3">Learn to Cook Asado</h3>
              <p className="text-orange-100 mb-4">
                Can't get a reservation? Learn to make authentic Argentine 
                asado at home with our step-by-step guide.
              </p>
              <Button asChild variant="secondary">
                <Link href="/food/recipes/asado">
                  Asado Recipe
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
