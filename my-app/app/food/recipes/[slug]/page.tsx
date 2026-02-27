import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipeBySlug, getAllRecipeSlugs } from "@/lib/data/recipes";
import { 
  Clock, 
  Users, 
  ChefHat, 
  ArrowLeft,
  Printer,
  Share2,
  Clock3,
  Flame,
  MapPin,
  Wine,
  Lightbulb,
  History,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return getAllRecipeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe Not Found | Expats Argentina" };
  }

  return {
    title: `${recipe.name} | Authentic Argentine Recipe | Expats Argentina`,
    description: `${recipe.description} Prep time: ${recipe.prepTime}. Serves ${recipe.servings}.`,
    keywords: recipe.seoKeywords,
    openGraph: {
      title: `${recipe.name} | Authentic Argentine Recipe`,
      description: recipe.description,
      images: [{ url: recipe.image, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://expatsargentina.com/food/recipes/${recipe.slug}`,
    },
  };
}

const difficultyColors = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  hard: "bg-red-100 text-red-700",
};

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  // Generate recipe schema
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description,
    image: `https://expatsargentina.com${recipe.image}`,
    author: {
      "@type": "Organization",
      name: "Expats Argentina",
    },
    datePublished: "2025-01-01",
    prepTime: `PT${recipe.prepTime.replace(/\D/g, "")}M`,
    cookTime: `PT${recipe.cookTime.replace(/\D/g, "")}M`,
    totalTime: `PT${parseInt(recipe.prepTime) + parseInt(recipe.cookTime)}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    recipeCuisine: "Argentine",
    keywords: recipe.seoKeywords.join(", "),
    nutrition: recipe.calories ? {
      "@type": "NutritionInformation",
      calories: `${recipe.calories} calories`,
      proteinContent: `${recipe.protein}g`,
      carbohydrateContent: `${recipe.carbs}g`,
      fatContent: `${recipe.fat}g`,
    } : undefined,
    recipeIngredient: recipe.ingredients.flatMap(section => 
      section.items.map(item => section.section ? `${section.section}: ${item}` : item)
    ),
    recipeInstructions: recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />

      {/* Navigation */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40 print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/food/recipes">
                <ArrowLeft className="w-4 h-4" />
                All Recipes
              </Link>
            </Button>

          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white print:bg-none print:text-black">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('${recipe.image}')` }} />
        <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-wrap items-center gap-2 mb-4 print:hidden">
            <Badge className={`${difficultyColors[recipe.difficulty]} capitalize`}>
              {recipe.difficulty}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              <MapPin className="w-3 h-3 mr-1" />
              {recipe.region}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white capitalize">
              {recipe.category}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {recipe.name}
          </h1>
          <p className="text-xl text-orange-100 mb-4 print:text-gray-600">
            {recipe.spanishName}
          </p>
          <p className="text-lg text-orange-50 max-w-2xl print:text-gray-700">
            {recipe.description}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 print:hidden">
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Prep Time</div>
              <div className="font-semibold">{recipe.prepTime}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Flame className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Cook Time</div>
              <div className="font-semibold">{recipe.cookTime}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock3 className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Total Time</div>
              <div className="font-semibold">{recipe.totalTime}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-5 h-5 text-orange-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Servings</div>
              <div className="font-semibold">{recipe.servings}</div>
            </CardContent>
          </Card>
        </div>

        {/* Print Header */}
        <div className="hidden print:block mb-8">
          <h1 className="text-3xl font-bold">{recipe.name} ({recipe.spanishName})</h1>
          <p className="text-gray-600 mt-2">{recipe.description}</p>
          <div className="mt-4 text-sm text-gray-600">
            Prep: {recipe.prepTime} | Cook: {recipe.cookTime} | Total: {recipe.totalTime} | Serves: {recipe.servings}
          </div>
          <Separator className="my-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Ingredients & Info */}
          <div className="space-y-6">
            {/* Ingredients */}
            <Card className="print:shadow-none print:border-gray-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ChefHat className="w-5 h-5 text-orange-600" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {recipe.ingredients.map((section, idx) => (
                  <div key={idx} className={idx > 0 ? "mt-4" : ""}>
                    {section.section && (
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">
                        {section.section}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-sm">
                          <input 
                            type="checkbox" 
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 print:hidden"
                          />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nutrition */}
            {recipe.calories && (
              <Card className="print:shadow-none print:border-gray-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Nutrition (per serving)</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-gray-600">Calories</div>
                      <div className="font-semibold text-lg">{recipe.calories}</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-gray-600">Protein</div>
                      <div className="font-semibold text-lg">{recipe.protein}g</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-gray-600">Carbs</div>
                      <div className="font-semibold text-lg">{recipe.carbs}g</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="text-gray-600">Fat</div>
                      <div className="font-semibold text-lg">{recipe.fat}g</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Wine Pairing */}
            {recipe.winePairing && (
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 print:bg-none print:border-gray-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wine className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-900">Wine Pairing</h4>
                  </div>
                  <p className="text-sm text-purple-800">{recipe.winePairing}</p>
                </CardContent>
              </Card>
            )}

            {/* Where to Find */}
            {recipe.whereToFind && (
              <Card className="print:shadow-none print:border-gray-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Store className="w-5 h-5 text-orange-600" />
                    Where to Try It
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {recipe.whereToFind.map((place, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {place}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column: Instructions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Jump to */}
            <div className="flex items-center gap-4 text-sm print:hidden">
              <span className="text-gray-500">Jump to:</span>
              <a href="#instructions" className="text-orange-600 hover:underline">Instructions</a>
              <a href="#tips" className="text-orange-600 hover:underline">Tips</a>
              {recipe.history && <a href="#history" className="text-orange-600 hover:underline">History</a>}
            </div>

            {/* Instructions */}
            <Card className="print:shadow-none print:border-gray-300" id="instructions">
              <CardHeader>
                <CardTitle className="text-xl">Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100 print:bg-none print:border-gray-300" id="tips">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  Pro Tips from the Kitchen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recipe.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-amber-500 mt-1">✦</span>
                      <p className="text-gray-700">{tip}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* History */}
            {recipe.history && (
              <Card className="print:shadow-none print:border-gray-300" id="history">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <History className="w-5 h-5 text-orange-600" />
                    The Story Behind the Dish
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{recipe.history}</p>
                </CardContent>
              </Card>
            )}

            {/* Storage */}
            {recipe.storageInstructions && (
              <Card className="print:shadow-none print:border-gray-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Storage & Leftovers</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700">{recipe.storageInstructions}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* More Recipes */}
        <div className="mt-12 pt-8 border-t print:hidden">
          <h2 className="text-2xl font-bold mb-6">More Argentine Recipes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(() => {
              const sameCategory = recipes
                .filter(r => r.slug !== recipe.slug && r.category === recipe.category)
                .slice(0, 2);
              const others = recipes
                .filter(r => r.slug !== recipe.slug && r.category !== recipe.category)
                .slice(0, 4 - sameCategory.length);
              return [...sameCategory, ...others];
            })().map((relatedRecipe) => (
                <Link 
                  key={relatedRecipe.slug}
                  href={`/food/recipes/${relatedRecipe.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-50 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-2xl font-bold text-orange-200">
                          {relatedRecipe.name[0]}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {relatedRecipe.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{relatedRecipe.totalTime}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Print Footer */}
      <div className="hidden print:block mt-8 pt-4 border-t text-center text-sm text-gray-500">
        Recipe from Expats Argentina | expatsargentina.com/food/recipes/{recipe.slug}
      </div>
    </div>
  );
}
