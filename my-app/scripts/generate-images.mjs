#!/usr/bin/env node
/**
 * Generate professional travel photography for all provinces and cities
 * using Google's Gemini (Nano Banana) image generation API.
 *
 * Usage: GEMINI_API_KEY=xxx node scripts/generate-images.mjs
 */

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("GEMINI_API_KEY environment variable required");
  process.exit(1);
}

const MODEL = "gemini-2.0-flash-exp-image-generation";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
const PUBLIC_DIR = path.resolve(import.meta.dirname, "../public/images");

// Concurrency control - API quota: 10 req/min per model
const BATCH_SIZE = 2;
const DELAY_BETWEEN_BATCHES_MS = 15000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 60000;

// ============================================================================
// Province image prompts - landscape travel photography
// ============================================================================
const provinceImages = [
  {
    slug: "buenos-aires-city",
    prompt:
      "Professional travel photograph of Buenos Aires, Argentina. Aerial view of the wide Avenida 9 de Julio with the Obelisco monument at golden hour. Warm sunset light, city buildings on both sides, busy boulevard. Photorealistic, National Geographic travel photography style, 16:9 landscape.",
  },
  {
    slug: "buenos-aires-province",
    prompt:
      "Professional travel photograph of the Pampas grasslands in Buenos Aires Province, Argentina. Vast green pastoral landscape with cattle grazing, scattered trees, and dramatic cloud formations at sunset. Photorealistic landscape photography, warm golden light, 16:9.",
  },
  {
    slug: "cordoba",
    prompt:
      "Professional travel photograph of Cordoba, Argentina. View of the historic Jesuit Block and colonial architecture with the Sierra de Cordoba mountains visible in the background. Clear blue sky, warm afternoon light. Photorealistic travel magazine quality, 16:9 landscape.",
  },
  {
    slug: "mendoza",
    prompt:
      "Professional travel photograph of Mendoza wine country, Argentina. Lush vineyard rows stretching toward the snow-capped Andes mountains under clear blue sky. Golden afternoon sunlight. Photorealistic, wine country travel photography, 16:9 landscape.",
  },
  {
    slug: "salta",
    prompt:
      "Professional travel photograph of Salta, Argentina. Colorful colonial architecture along a cobblestone street, with terracotta roofs, wrought-iron balconies, and the Andean foothills visible. Warm light, vibrant colors. Photorealistic travel photography, 16:9 landscape.",
  },
  {
    slug: "rio-negro",
    prompt:
      "Professional travel photograph of the Lake District in Rio Negro, Argentina. Crystal clear turquoise lake surrounded by snow-capped Andes mountains and dense forest. Bariloche area landscape. Photorealistic, pristine nature photography, 16:9 landscape.",
  },
  {
    slug: "neuquen",
    prompt:
      "Professional travel photograph of Neuquen Province, Argentina. Volcanic landscape of the Andes with Lanin volcano, araucaria (monkey puzzle) trees in foreground, alpine lake. Dramatic mountain scenery. Photorealistic nature photography, 16:9 landscape.",
  },
  {
    slug: "misiones",
    prompt:
      "Professional travel photograph of Iguazu Falls, Misiones Province, Argentina. Massive cascading waterfalls surrounded by lush subtropical rainforest, rainbow in the mist. Dramatic and powerful natural wonder. Photorealistic National Geographic style, 16:9 landscape.",
  },
  {
    slug: "santa-fe",
    prompt:
      "Professional travel photograph of Rosario city waterfront along the Parana River in Santa Fe Province, Argentina. Modern skyline with the Monumento a la Bandera (Flag Monument), river promenade, sunset reflections on water. Photorealistic urban landscape, 16:9.",
  },
  {
    slug: "tierra-del-fuego",
    prompt:
      "Professional travel photograph of Tierra del Fuego, Argentina. Dramatic end-of-the-world landscape with the Beagle Channel, snow-capped mountains, and the colorful houses of Ushuaia. Moody atmospheric light. Photorealistic adventure travel photography, 16:9 landscape.",
  },
  {
    slug: "tucuman",
    prompt:
      "Professional travel photograph of Tucuman Province, Argentina. Lush subtropical yungas forest on mountain slopes, with the Tafi del Valle highland valley visible. Green terraced hills, misty atmosphere. Photorealistic nature photography, 16:9 landscape.",
  },
  {
    slug: "chubut",
    prompt:
      "Professional travel photograph of Peninsula Valdes, Chubut Province, Argentina. Southern right whale breaching in turquoise Atlantic waters with dramatic Patagonian coastline cliffs in background. Wildlife photography, 16:9 landscape.",
  },
  {
    slug: "entre-rios",
    prompt:
      "Professional travel photograph of Entre Rios Province, Argentina. Peaceful riverside landscape with thermal hot springs, palm tree groves (Palmar de Colon), and the gentle Uruguay River. Warm golden light. Photorealistic travel photography, 16:9 landscape.",
  },
  {
    slug: "san-juan",
    prompt:
      "Professional travel photograph of San Juan Province, Argentina. The dramatic Ischigualasto Valley (Valle de la Luna) with eroded red rock formations, moon-like desert landscape under vivid blue sky. Photorealistic geological landscape photography, 16:9.",
  },
  {
    slug: "jujuy",
    prompt:
      "Professional travel photograph of the Quebrada de Humahuaca, Jujuy Province, Argentina. Colorful striped mountain formations (Cerro de los Siete Colores at Purmamarca) with vibrant reds, oranges, greens, and purples. Clear sky. Photorealistic landscape photography, 16:9.",
  },
  {
    slug: "santa-cruz",
    prompt:
      "Professional travel photograph of Perito Moreno Glacier, Santa Cruz Province, Argentina. Massive blue-white ice wall of the glacier with turquoise meltwater lake, mountains in background. Dramatic scale. Photorealistic adventure travel photography, 16:9 landscape.",
  },
  {
    slug: "corrientes",
    prompt:
      "Professional travel photograph of the Ibera Wetlands, Corrientes Province, Argentina. Vast marshland with water lilies, capybaras, and exotic birds. Lush green wetland ecosystem at golden hour. Photorealistic wildlife/nature photography, 16:9 landscape.",
  },
  {
    slug: "san-luis",
    prompt:
      "Professional travel photograph of San Luis Province, Argentina. Rolling Sierras Puntanas hills with native caldén woodland, rocky outcrops, and a cascading mountain stream. Serene rural landscape at sunset. Photorealistic nature photography, 16:9 landscape.",
  },
  {
    slug: "la-pampa",
    prompt:
      "Professional travel photograph of La Pampa Province, Argentina. Endless flat Pampas grassland stretching to the horizon, lone gaucho on horseback, windmill silhouetted against dramatic sunset sky. Photorealistic rural Argentina photography, 16:9 landscape.",
  },
  {
    slug: "catamarca",
    prompt:
      "Professional travel photograph of Catamarca Province, Argentina. The stunning Campo de Piedra Pomez (Pumice Stone Field) with white volcanic rock formations against deep blue sky and distant Andean peaks. Photorealistic desert landscape photography, 16:9.",
  },
  {
    slug: "chaco",
    prompt:
      "Professional travel photograph of El Impenetrable National Park, Chaco Province, Argentina. Dense dry subtropical forest (Chaco woodland) with tall quebracho trees, dappled sunlight, wildlife. Photorealistic nature photography, 16:9 landscape.",
  },
  {
    slug: "formosa",
    prompt:
      "Professional travel photograph of Formosa Province, Argentina. Tropical wetland landscape with palm trees, winding river channels, lush green vegetation, and exotic birdlife. Warm humid atmosphere at golden hour. Photorealistic nature photography, 16:9 landscape.",
  },
  {
    slug: "la-rioja",
    prompt:
      "Professional travel photograph of Talampaya National Park, La Rioja Province, Argentina. Towering red sandstone canyon walls with dramatic striations, blue sky above. Ancient geological formations. Photorealistic landscape photography, 16:9.",
  },
  {
    slug: "santiago-del-estero",
    prompt:
      "Professional travel photograph of Santiago del Estero Province, Argentina. Hot springs thermal pools surrounded by native chaco vegetation, Termas de Rio Hondo area. Steaming mineral-rich water, serene atmosphere. Photorealistic travel photography, 16:9 landscape.",
  },
];

// ============================================================================
// City image prompts - urban/lifestyle photography
// ============================================================================
const cityImages = [
  {
    slug: "buenos-aires",
    prompt:
      "Professional travel photograph of La Boca neighborhood in Buenos Aires, Argentina. Colorful painted Caminito street with tango dancers, vibrant buildings in yellows, blues, and reds. Lively street scene with cafe tables. Photorealistic street photography, 16:9 landscape.",
  },
  {
    slug: "mendoza",
    prompt:
      "Professional travel photograph of Mendoza city, Argentina. Tree-lined boulevard with outdoor wine bars and cafes, acequias (irrigation channels) along the sidewalk, Andes mountains visible at the end of the street. Warm afternoon. Photorealistic urban photography, 16:9.",
  },
  {
    slug: "cordoba",
    prompt:
      "Professional travel photograph of central Cordoba, Argentina. The colonial Manzana Jesuitica (Jesuit Block) with students and young people in the surrounding plaza. University city atmosphere, historic architecture, blue sky. Photorealistic urban photography, 16:9.",
  },
  {
    slug: "bariloche",
    prompt:
      "Professional travel photograph of San Carlos de Bariloche, Argentina. Swiss-style chocolate shops and alpine architecture along the main street with Lake Nahuel Huapi and snow-capped Andes visible. Cozy mountain town feel. Photorealistic travel photography, 16:9.",
  },
  {
    slug: "salta",
    prompt:
      "Professional travel photograph of Salta city center, Argentina. The pink-hued Basilica Cathedral on Plaza 9 de Julio, surrounded by colonial buildings, jacaranda trees in bloom. Warm evening light. Photorealistic architectural travel photography, 16:9.",
  },
  {
    slug: "rosario",
    prompt:
      "Professional travel photograph of Rosario, Argentina. The iconic Monumento a la Bandera (Flag Monument) with the Parana River and modern skyline. People walking along the costanera (riverside promenade) at sunset. Photorealistic urban landscape, 16:9.",
  },
  {
    slug: "ushuaia",
    prompt:
      "Professional travel photograph of Ushuaia, Argentina, the southernmost city in the world. Colorful waterfront buildings with harbor, snow-covered Martial Mountains rising behind the city. Moody Patagonian sky. Photorealistic travel photography, 16:9 landscape.",
  },
  {
    slug: "mar-del-plata",
    prompt:
      "Professional travel photograph of Mar del Plata, Argentina. The iconic sea lion colony at the port with fishing boats, the beach coastline and city skyline visible in the background. Summer coastal atmosphere. Photorealistic travel photography, 16:9 landscape.",
  },
  {
    slug: "san-martin-de-los-andes",
    prompt:
      "Professional travel photograph of San Martin de los Andes, Argentina. Charming Patagonian mountain village on the shore of Lake Lacar, wooden chalets, autumn-colored forests, mountains reflected in calm water. Photorealistic landscape photography, 16:9.",
  },
  {
    slug: "el-calafate",
    prompt:
      "Professional travel photograph of El Calafate, Argentina. The town's main avenue with outdoor restaurants and shops, with a view toward Lago Argentino and distant glaciers. Clean Patagonian sky. Photorealistic travel photography, 16:9 landscape.",
  },
  {
    slug: "puerto-madryn",
    prompt:
      "Professional travel photograph of Puerto Madryn, Argentina. Beautiful Atlantic coast beach with clear turquoise water, the pier, and the city's white buildings along the waterfront. Southern right whale visible in the bay. Photorealistic coastal photography, 16:9.",
  },
  {
    slug: "la-plata",
    prompt:
      "Professional travel photograph of La Plata, Argentina. The stunning neo-gothic La Plata Cathedral, one of the largest in South America, at blue hour with dramatic illumination. Grand architectural photography. Photorealistic, 16:9 landscape.",
  },
  {
    slug: "tucuman",
    prompt:
      "Professional travel photograph of San Miguel de Tucuman, Argentina. The historic Casa de Tucuman (House of Independence) with its white colonial facade and courtyard garden. National landmark with warm afternoon light. Photorealistic architectural photography, 16:9.",
  },
];

// ============================================================================
// Image generation logic
// ============================================================================

async function generateImage(prompt, outputPath, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
        }),
      });

      if (response.status === 429) {
        if (attempt < retries) {
          console.log(`  RATE LIMITED ${path.basename(outputPath, '.png')} - waiting 60s (attempt ${attempt}/${retries})`);
          await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
          continue;
        }
        throw new Error("Rate limited after all retries");
      }

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`API error ${response.status}: ${err.slice(0, 200)}`);
      }

      const data = await response.json();
      const parts = data.candidates?.[0]?.content?.parts || [];
      const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));

      if (!imagePart) {
        throw new Error("No image in response");
      }

      const buffer = Buffer.from(imagePart.inlineData.data, "base64");
      await writeFile(outputPath, buffer);
      return buffer.length;
    } catch (err) {
      if (attempt === retries) throw err;
      console.log(`  RETRY ${path.basename(outputPath, '.png')}: ${err.message.slice(0, 100)} (attempt ${attempt}/${retries})`);
      await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
    }
  }
}

async function processBatch(items, type) {
  const dir = path.join(PUBLIC_DIR, type);
  await mkdir(dir, { recursive: true });

  const results = [];

  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(items.length / BATCH_SIZE);

    console.log(`\n[${type}] Batch ${batchNum}/${totalBatches}: ${batch.map((b) => b.slug).join(", ")}`);

    const promises = batch.map(async (item) => {
      const outputPath = path.join(dir, `${item.slug}.png`);

      if (existsSync(outputPath)) {
        console.log(`  SKIP ${item.slug} (already exists)`);
        return { slug: item.slug, status: "skipped" };
      }

      try {
        const size = await generateImage(item.prompt, outputPath);
        const sizeKB = Math.round(size / 1024);
        console.log(`  OK   ${item.slug} (${sizeKB} KB)`);
        return { slug: item.slug, status: "ok", size: sizeKB };
      } catch (err) {
        console.error(`  FAIL ${item.slug}: ${err.message}`);
        return { slug: item.slug, status: "error", error: err.message };
      }
    });

    const batchResults = await Promise.all(promises);
    results.push(...batchResults);

    // Rate limit delay between batches
    if (i + BATCH_SIZE < items.length) {
      await new Promise((r) => setTimeout(r, DELAY_BETWEEN_BATCHES_MS));
    }
  }

  return results;
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  console.log("=== Generating images for Expats Argentina ===");
  console.log(`Model: ${MODEL}`);
  console.log(`Output: ${PUBLIC_DIR}`);
  console.log(`Provinces: ${provinceImages.length}, Cities: ${cityImages.length}`);
  console.log(`Batch size: ${BATCH_SIZE}, Delay: ${DELAY_BETWEEN_BATCHES_MS}ms\n`);

  const provinceResults = await processBatch(provinceImages, "provinces");
  const cityResults = await processBatch(cityImages, "cities");

  const allResults = [...provinceResults, ...cityResults];
  const ok = allResults.filter((r) => r.status === "ok").length;
  const skipped = allResults.filter((r) => r.status === "skipped").length;
  const failed = allResults.filter((r) => r.status === "error").length;

  console.log(`\n=== SUMMARY ===`);
  console.log(`Generated: ${ok}`);
  console.log(`Skipped:   ${skipped}`);
  console.log(`Failed:    ${failed}`);

  if (failed > 0) {
    console.log("\nFailed items:");
    allResults
      .filter((r) => r.status === "error")
      .forEach((r) => console.log(`  - ${r.slug}: ${r.error}`));
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
