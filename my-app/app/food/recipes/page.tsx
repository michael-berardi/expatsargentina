import { Metadata } from "next";
import Link from "next/link";
import { recipes } from "@/lib/data/recipes";
import {
  ChefHat,
  Clock,
  Users,
  Flame,
  ArrowRight,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Authentic Argentine Recipes",
  description: "Learn to cook authentic Argentine dishes: empanadas, chimichurri, asado, milanesa, and more. Step-by-step recipes with local tips and ingredient sourcing advice.",
  keywords: ["argentine recipes", "empanadas recipe", "chimichurri recipe", "asado recipe", "authentic argentine food", "cook argentine"],
  openGraph: {
    title: "Authentic Argentine Recipes",
    description: "Learn to cook authentic Argentine dishes with our step-by-step recipes and local tips.",
    images: [{ url: "/images/recipes/empanadas.webp", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://expatsargentina.com/food/recipes" },
};

const difficultyColors = {
  easy: "bg-green-100 text-green-700 border-green-200",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  hard: "bg-red-100 text-red-700 border-red-200",
};

const categoryIcons = {
  main: <Flame className="w-4 h-4" />,
  appetizer: <ChefHat className="w-4 h-4" />,
  sauce: <ChefHat className="w-4 h-4" />,
  dessert: <ChefHat className="w-4 h-4" />,
  stew: <Flame className="w-4 h-4" />,
};

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/5 to-background">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-primary to-accent text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/guides/food-bg.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <ChefHat className="w-8 h-8" />
              </div>
              <span className="text-white/95 font-medium drop-shadow-md">Expats Argentina Kitchen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Authentic Argentine<br />
              <span className="text-accent/30">Recipes</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mb-8 drop-shadow-md">
              Learn to cook like a local. From empanadas to asado, our tested recipes 
              come with ingredient sourcing tips and cultural context you won't find elsewhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link href="#all-recipes">
                  Browse All Recipes
                  <ArrowRight className="w-4 h-4" />
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

      {/* Stats Bar */}
      <div className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">{recipes.length}</div>
              <div className="text-sm text-muted-foreground">Tested Recipes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">
                {recipes.filter(r => r.difficulty === "easy").length}
              </div>
              <div className="text-sm text-muted-foreground">Beginner Friendly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">
                {new Set(recipes.map(r => r.region)).size}
              </div>
              <div className="text-sm text-muted-foreground">Regions Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">
                {recipes.filter(r => r.difficulty === "medium").length}/{recipes.filter(r => r.difficulty === "hard").length}
              </div>
              <div className="text-sm text-muted-foreground">Medium / Hard</div>
            </div>
          </div>
        </div>
      </div>

      {/* By Region */}
      <div className="border-b bg-gradient-to-r from-accent/5 to-amber-50/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-white/850" />
              By Region:
            </span>
            {Object.entries(
              recipes.reduce<Record<string, number>>((acc, r) => {
                const region = r.region.split("(")[0].trim().replace(/\s*$/, "");
                acc[region] = (acc[region] || 0) + 1;
                return acc;
              }, {})
            )
              .sort((a, b) => b[1] - a[1])
              .map(([region, count], idx, arr) => (
                <span key={region} className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{region}</span>
                  {" "}
                  <span className="text-accent font-semibold">{count}</span>
                  {idx < arr.length - 1 && <span className="ml-3 text-muted-foreground/50">|</span>}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[
            { name: "Main Dishes", count: recipes.filter(r => r.category === "main").length, slug: "main" },
            { name: "Appetizers", count: recipes.filter(r => r.category === "appetizer").length, slug: "appetizer" },
            { name: "Sauces", count: recipes.filter(r => r.category === "sauce").length, slug: "sauce" },
            { name: "Desserts", count: recipes.filter(r => r.category === "dessert").length, slug: "dessert" },
            { name: "Stews", count: recipes.filter(r => r.category === "stew").length, slug: "stew" },
          ].map((cat) => (
            <a key={cat.slug} href={`#category-${cat.slug}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">
                    {cat.count}
                  </div>
                  <div className="text-muted-foreground font-medium">{cat.name}</div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Recipe Grid — Grouped by Category */}
        <div id="all-recipes" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Recipes</h2>

          {([
            { key: "main" as const, label: "Main Dishes", icon: <Flame className="w-5 h-5 text-accent" /> },
            { key: "appetizer" as const, label: "Appetizers & Snacks", icon: <ChefHat className="w-5 h-5 text-accent" /> },
            { key: "sauce" as const, label: "Sauces & Condiments", icon: <ChefHat className="w-5 h-5 text-accent" /> },
            { key: "dessert" as const, label: "Desserts", icon: <ChefHat className="w-5 h-5 text-accent" /> },
            { key: "stew" as const, label: "Stews", icon: <Flame className="w-5 h-5 text-accent" /> },
          ]).map((group) => {
            const groupRecipes = recipes.filter(r => r.category === group.key);
            if (groupRecipes.length === 0) return null;
            return (
              <div key={group.key} id={`category-${group.key}`} className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  {group.icon}
                  <h3 className="text-xl font-bold text-foreground">{group.label}</h3>
                  <span className="text-sm text-muted-foreground ml-1">({groupRecipes.length})</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupRecipes.map((recipe) => (
                    <Link
                      key={recipe.slug}
                      href={`/food/recipes/${recipe.slug}`}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-accent/10">
                        {/* Image */}
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-accent/10 to-amber-50 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold text-accent/30">
                              {recipe.name[0]}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2">
                              <Badge className={`${difficultyColors[recipe.difficulty]} capitalize`}>
                                {recipe.difficulty}
                              </Badge>
                              <Badge variant="secondary" className="bg-white/90 text-muted-foreground">
                                {categoryIcons[recipe.category]}
                                <span className="ml-1 capitalize">{recipe.category}</span>
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {recipe.name}
                            </h3>
                          </div>
                          <p className="text-accent text-sm font-medium mb-3">
                            {recipe.spanishName}
                          </p>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {recipe.description}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{recipe.totalTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{recipe.servings} servings</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-accent/5 to-amber-50 rounded-2xl p-8 border border-accent/10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Cooking Argentine Food: Essential Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality Over Everything</h4>
                  <p className="text-sm text-muted-foreground">Argentine cuisine is simple—great ingredients shine. Use the best beef you can find, and don't skimp on olive oil.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Salt is Your Friend</h4>
                  <p className="text-sm text-muted-foreground">Argentines salt generously. Use coarse sea salt (sal gruesa) for meat—it's traditional and makes a difference.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Patience Pays</h4>
                  <p className="text-sm text-muted-foreground">Asado takes hours. Locro simmers all day. Argentine cooking isn't fast food—it's an event.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Share the Table</h4>
                  <p className="text-sm text-muted-foreground">Argentine food is meant to be shared. Invite friends, open wine, and make it an occasion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-foreground to-foreground/90 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Eat Out Instead?
              </h2>
              <p className="text-muted-foreground/50 mb-6 max-w-xl mx-auto">
                Sometimes you just want someone else to do the cooking. Check out our 
                curated guides to the best restaurants in Buenos Aires and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/food/restaurants/buenos-aires">
                    Buenos Aires Restaurants
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-white hover:bg-foreground/80">
                  <Link href="/food/restaurants/best-parrillas">
                    Best Parrillas
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
