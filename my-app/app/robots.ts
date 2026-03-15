import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// AI training crawlers and aggressive scrapers to block
const AI_AND_SCRAPER_BOTS = [
  "GPTBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "anthropic-ai",
  "Bytespider", "CCBot", "Google-Extended", "FacebookBot", "Amazonbot",
  "Applebot-Extended", "Diffbot", "Omgilibot", "cohere-ai", "PerplexityBot",
  "YouBot", "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "BLEXBot",
  "DataForSeoBot", "PetalBot", "MegaIndex.ru",
  "Meta-ExternalAgent", "Meta-ExternalFetcher", "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      ...AI_AND_SCRAPER_BOTS.map((bot) => ({
        userAgent: bot,
        disallow: ['/'],
      })),
    ],
    sitemap: 'https://expatsargentina.com/sitemap.xml',
  };
}
