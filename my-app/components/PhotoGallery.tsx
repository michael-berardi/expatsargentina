"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  variant?: "grid" | "featured" | "masonry";
}

export function PhotoGallery({ 
  photos, 
  title = "Photo Gallery",
  variant = "grid" 
}: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  if (variant === "featured" && photos.length > 0) {
    const [featured, ...rest] = photos;
    return (
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}
            
            {/* Featured Image */}
            <Card 
              className="overflow-hidden cursor-pointer mb-4"
              onClick={() => setSelectedIndex(0)}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  className="object-cover"
                />
                {featured.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{featured.caption}</p>
                    {featured.location && (
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {featured.location}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Card>

            {/* Thumbnail Grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {rest.slice(0, 4).map((photo, i) => (
                  <Card 
                    key={i}
                    className="overflow-hidden cursor-pointer aspect-square"
                    onClick={() => setSelectedIndex(i + 1)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                ))}
                {rest.length > 4 && (
                  <Card 
                    className="overflow-hidden cursor-pointer aspect-square bg-muted flex items-center justify-center"
                    onClick={() => setSelectedIndex(5)}
                  >
                    <span className="text-2xl font-bold text-muted-foreground">+{rest.length - 4}</span>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Lightbox */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95">
            {selectedIndex !== null && (
              <div className="relative">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={photos[selectedIndex].src}
                    alt={photos[selectedIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Navigation */}
                {photos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Caption */}
                {(photos[selectedIndex].caption || photos[selectedIndex].location) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    {photos[selectedIndex].caption && (
                      <p className="text-white font-medium text-lg">{photos[selectedIndex].caption}</p>
                    )}
                    {photos[selectedIndex].location && (
                      <p className="text-white/70 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {photos[selectedIndex].location}
                      </p>
                    )}
                  </div>
                )}

                {/* Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedIndex + 1} / {photos.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    );
  }

  // Grid variant (default)
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <Card 
                key={i}
                className="overflow-hidden cursor-pointer aspect-square"
                onClick={() => setSelectedIndex(i)}
              >
                <div className="relative w-full h-full group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium truncate">{photo.caption}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95">
          {selectedIndex !== null && (
            <div className="relative">
              <div className="relative aspect-[16/9]">
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              {photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {(photos[selectedIndex].caption || photos[selectedIndex].location) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  {photos[selectedIndex].caption && (
                    <p className="text-white font-medium text-lg">{photos[selectedIndex].caption}</p>
                  )}
                  {photos[selectedIndex].location && (
                    <p className="text-white/70 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {photos[selectedIndex].location}
                    </p>
                  )}
                </div>
              )}

              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedIndex + 1} / {photos.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
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
