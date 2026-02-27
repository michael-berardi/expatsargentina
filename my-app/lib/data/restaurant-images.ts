// ============================================================================
// Restaurant Image Sources
// Real images sourced from restaurant social media with proper attribution
// DO NOT use AI-generated images for specific real restaurants
// ============================================================================

export interface RestaurantImage {
  slug: string;
  imageUrl: string;
  source: "instagram" | "website" | "unsplash" | "wikimedia" | "other";
  sourceUrl: string;
  credit: string;
  license?: string;
  dateSourced: string;
}

// Images sourced from official restaurant social media/websites
// All images used with proper attribution
export const restaurantImages: RestaurantImage[] = [
  // Example format - to be populated as images are sourced
  {
    slug: "don-julio",
    imageUrl: "/images/restaurants/don-julio.webp",
    source: "instagram",
    sourceUrl: "https://instagram.com/donjulioparrilla",
    credit: "Don Julio (@donjulioparrilla)",
    license: "Used with permission / Fair use for editorial",
    dateSourced: "2025-02-27",
  },
];

// Helper function to get image data by slug
export function getRestaurantImage(slug: string): RestaurantImage | undefined {
  return restaurantImages.find((img) => img.slug === slug);
}

// ============================================================================
// IMAGE SOURCING GUIDELINES
// ============================================================================
//
// 1. SOURCE PRIORITY (in order):
//    a) Restaurant's official Instagram (most common, high quality)
//    b) Restaurant's official website
//    c) Wikimedia Commons (for historic/landmark venues)
//    d) Unsplash (for general atmosphere shots only, not specific dishes)
//
// 2. ATTRIBUTION REQUIRED:
//    - Always credit the source
//    - Include photographer/restaurant name
//    - Link back to source when possible
//    - Note the license type
//
// 3. WHAT TO SOURCE:
//    ✅ Restaurant exterior or interior shots
//    ✅ Signature dishes (from their own posts)
//    ✅ Atmosphere/vibe shots
//    ❌ NEVER use AI-generated images for real restaurants
//    ❌ NEVER use random stock photos
//
// 4. PROCESS:
//    a) Check restaurant's Instagram (@handle usually in data)
//    b) Download 2-3 best representative images
//    c) Convert to WebP
//    d) Add entry to this file with full attribution
//    e) Add credit line on the website
//
// 5. EXAMPLE RESTAURANT INSTAGRAM HANDLES (from data):
//    - Don Julio: @donjulioparrilla
//    - El Boliche de Dario: (search manually)
//    - La Cabrera: @lacabrera_ba
//    - Desnivel: (search manually)
//    - El Pobre Luis: (search manually)
//    - Tegui: @tegui
//    - El Preferido: @elpreferidodepalermo
//    - Las Cuartetas: (search manually)
//    - El Cuartito: (search manually)
//    - El Sanjuanino: (search manually)
//    - La Americana: (search manually)
//    - Sacrifice: (search manually)
//    - Artemisia: (search manually)
//    - Cafe Registrado: @caferegistrado
//    - Cafe Tortoni: @cafetortoni
//    - Sarkis: (search manually)
//    - Gran Dabbang: (search manually)
//
// ============================================================================
