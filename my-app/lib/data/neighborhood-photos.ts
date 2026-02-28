export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

// Generate neighborhood photos from Unsplash
export function getNeighborhoodPhotos(neighborhood: string): Photo[] {
  const photoSets: Record<string, Photo[]> = {
    "palermo-soho": [
      { src: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80", alt: "Colorful street in Palermo Soho", caption: "Cobblestone streets with colorful facades", location: "Palermo Soho" },
      { src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80", alt: "Plaza Serrano", caption: "Weekend craft fair at Plaza Serrano", location: "Plaza Cortázar" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Street art in Palermo", caption: "Famous street art and murals", location: "Palermo Soho" },
      { src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80", alt: "Café in Palermo", caption: "Specialty coffee shop", location: "Gurruchaga Street" },
    ],
    "palermo-hollywood": [
      { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80", alt: "Nightlife in Palermo Hollywood", caption: "Bars and nightlife on Honduras Street", location: "Palermo Hollywood" },
      { src: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=800&q=80", alt: "Craft brewery", caption: "Local craft beer scene", location: "Hollywood" },
      { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Restaurant", caption: "Trendy restaurant interior", location: "Fitz Roy Street" },
    ],
    "recoleta": [
      { src: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80", alt: "Recoleta architecture", caption: "French-inspired architecture", location: "Recoleta" },
      { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", alt: "Recoleta Cemetery", caption: "Famous Recoleta Cemetery", location: "Cementerio de la Recoleta" },
      { src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800&q=80", alt: "Floralis Genérica", caption: "Iconic metal flower sculpture", location: "Plaza Naciones Unidas" },
      { src: "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=800&q=80", alt: "MALBA museum", caption: "MALBA - Latin American Art Museum", location: "Recoleta" },
    ],
    "san-telmo": [
      { src: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80", alt: "San Telmo streets", caption: "Cobblestone streets and antiques", location: "San Telmo" },
      { src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80", alt: "Tango dancers", caption: "Street tango performances", location: "Plaza Dorrego" },
      { src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80", alt: "Sunday market", caption: "Feria de San Telmo on Sundays", location: "Defensa Street" },
    ],
    "belgrano": [
      { src: "https://images.unsplash.com/photo-1564429238961-dc5ca7f3317a?w=800&q=80", alt: "Belgrano streets", caption: "Tree-lined residential streets", location: "Belgrano R" },
      { src: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80", alt: "Chinatown", caption: "Barrio Chino - Buenos Aires Chinatown", location: "Belgrano" },
      { src: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80", alt: "Riverside", caption: "Costanera Norte riverside", location: "Belgrano" },
    ],
  };

  return photoSets[neighborhood] || [];
}
