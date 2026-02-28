import type { MetadataRoute } from "next";
import { provinces, cities } from "@/lib/data/argentina";
import { neighborhoods } from "@/lib/data/neighborhoods";
import { recipes } from "@/lib/data/recipes";
import { investmentSectors } from "@/lib/data/investments";
import { cityComparisons } from "@/lib/data/comparisons";
import { visaComparisons } from "@/lib/data/visa-comparisons";
import { blogPosts } from "@/lib/data/blog";
import { professions } from "@/lib/data/professions";
import { nationalities } from "@/lib/data/nationalities";
import { cityServices } from "@/lib/data/city-services";

export const dynamic = "force-static";

const BASE_URL = "https://expatsargentina.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/banking/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/cost-of-living/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/culture/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/first-30-days/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/healthcare/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/housing/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/learn-spanish/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/leaving/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/neighborhoods/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/newsletter/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/pet-importation/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/remote-work/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/social-life/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/stories/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/transportation/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/wine/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Visa pages
    { url: `${BASE_URL}/visas/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/visas/digital-nomad/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/work/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/retirement/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/student/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/visas/investment/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/tourist/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/temporary/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/permanent/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/visas/citizenship/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Food pages
    { url: `${BASE_URL}/food/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/food/recipes/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/food/restaurants/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/food/restaurants/buenos-aires/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/food/restaurants/best-parrillas/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/food/restaurants/cordoba/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/food/restaurants/mendoza/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/food/restaurants/bariloche/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/food/restaurants/rosario/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/food/restaurants/salta/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    // Index pages
    { url: `${BASE_URL}/provinces/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/cities/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/investments/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Compare pages
    { url: `${BASE_URL}/cities/compare/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/visas/compare/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // Blog
    { url: `${BASE_URL}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // Professions
    { url: `${BASE_URL}/profession/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Nationalities
    { url: `${BASE_URL}/nationality/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Dynamic PSEO pages - Provinces
  const provincePages: MetadataRoute.Sitemap = provinces.map((p) => ({
    url: `${BASE_URL}/provinces/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic PSEO pages - Cities
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/cities/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic PSEO pages - Neighborhoods
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${BASE_URL}/neighborhoods/${n.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic PSEO pages - Recipes
  const recipePages: MetadataRoute.Sitemap = recipes.map((r) => ({
    url: `${BASE_URL}/food/recipes/${r.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic PSEO pages - Investment sectors
  const investmentPages: MetadataRoute.Sitemap = investmentSectors.map((s) => ({
    url: `${BASE_URL}/investments/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic PSEO pages - City comparisons
  const comparisonPages: MetadataRoute.Sitemap = cityComparisons.map((c) => ({
    url: `${BASE_URL}/cities/compare/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic PSEO pages - Visa comparisons
  const visaComparisonPages: MetadataRoute.Sitemap = visaComparisons.map((c) => ({
    url: `${BASE_URL}/visas/compare/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic PSEO pages - Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic PSEO pages - Professions
  const professionPages: MetadataRoute.Sitemap = professions.map((prof) => ({
    url: `${BASE_URL}/profession/${prof.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic PSEO pages - Nationalities
  const nationalityPages: MetadataRoute.Sitemap = nationalities.map((nat) => ({
    url: `${BASE_URL}/nationality/${nat.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Visa Matrix pages (241 combinations)
  const visaMatrixCombinations = [
    { type: "digital-nomad", nationalities: [
      "united-states", "canada", "united-kingdom", "germany", "france", "netherlands", 
      "spain", "italy", "portugal", "belgium", "switzerland", "sweden", "norway", 
      "denmark", "finland", "ireland", "austria",
      "russia", "ukraine", "poland", "czech-republic", "hungary", "romania", 
      "bulgaria", "croatia", "serbia", "slovakia", "slovenia", "estonia", "latvia", "lithuania",
      "india", "south-africa", "israel", "australia", "new-zealand", "china", "japan", "south-korea",
      "mexico", "brazil", "chile", "colombia", "peru", "uruguay", "paraguay", "bolivia", "ecuador", "venezuela",
      "cuba", "dominican-republic", "puerto-rico"
    ]},
    { type: "rentista", nationalities: [
      "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy", 
      "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland", "ireland",
      "israel", "south-africa", "australia", "new-zealand",
      "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
      "mexico", "chile", "uruguay", "brazil", "colombia", "peru", "venezuela",
      "china", "japan"
    ]},
    { type: "pensionado", nationalities: [
      "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy",
      "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland", "ireland",
      "israel", "south-africa", "australia", "new-zealand",
      "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
      "mexico", "chile", "uruguay", "brazil", "colombia", "peru", "venezuela",
      "china", "japan"
    ]},
    { type: "work", nationalities: [
      "united-states", "canada", "united-kingdom", "germany", "france", "netherlands", "spain", "italy",
      "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland", "ireland",
      "russia", "ukraine", "poland", "czech-republic", "hungary", "romania", 
      "bulgaria", "croatia", "serbia", "slovakia", "slovenia",
      "india", "south-africa", "israel", "australia", "new-zealand", "china", "japan", "south-korea",
      "mexico", "brazil", "chile", "colombia", "peru", "uruguay", "paraguay", "bolivia", "ecuador", "venezuela",
      "cuba", "dominican-republic"
    ]},
    { type: "student", nationalities: [
      "united-states", "canada", "united-kingdom", "germany", "france", "netherlands", "spain", "italy",
      "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland", "ireland",
      "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
      "india", "south-africa", "israel", "australia", "new-zealand", "china", "japan", "south-korea",
      "mexico", "brazil", "chile", "colombia", "peru", "uruguay", "paraguay", "bolivia", "ecuador", "venezuela"
    ]},
    { type: "investment", nationalities: [
      "united-states", "canada", "united-kingdom", "germany", "france", "spain", "italy",
      "portugal", "belgium", "switzerland", "sweden", "norway", "denmark", "finland",
      "israel", "south-africa", "australia", "new-zealand",
      "russia", "ukraine", "poland", "czech-republic", "hungary", "romania",
      "mexico", "chile", "uruguay", "brazil", "colombia", "peru",
      "china", "japan"
    ]},
    { type: "mercosur", nationalities: ["brazil", "uruguay", "paraguay", "bolivia", "chile", "peru", "colombia", "ecuador", "venezuela"] },
  ];

  const visaMatrixPages: MetadataRoute.Sitemap = [];
  for (const combo of visaMatrixCombinations) {
    for (const nat of combo.nationalities) {
      visaMatrixPages.push({
        url: `${BASE_URL}/visas-matrix/${combo.type}/${nat}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  // City Services pages
  const cityServicesPages: MetadataRoute.Sitemap = [];
  for (const city of cities) {
    for (const service of cityServices) {
      cityServicesPages.push({
        url: `${BASE_URL}/cities-services/${city.slug}/${service.slug}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return [
    ...staticPages,
    ...provincePages,
    ...cityPages,
    ...neighborhoodPages,
    ...recipePages,
    ...investmentPages,
    ...comparisonPages,
    ...visaComparisonPages,
    ...blogPages,
    ...professionPages,
    ...nationalityPages,
    ...visaMatrixPages,
    ...cityServicesPages,
  ];
}
