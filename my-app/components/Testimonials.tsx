import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  location?: string;
  quote: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

export function Testimonials({ 
  title = "What expats say", 
  testimonials 
}: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  {t.rating && (
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star 
                          key={j} 
                          className={`h-4 w-4 ${j < t.rating! ? "text-amber-500 fill-amber-500" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      {(t.role || t.location) && (
                        <p className="text-sm text-muted-foreground">
                          {t.role}{t.role && t.location && " · "}{t.location}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pre-defined testimonials for neighborhoods
export function NeighborhoodTestimonials({ neighborhood }: { neighborhood: string }) {
  const testimonials: Record<string, Testimonial[]> = {
    "palermo-soho": [
      {
        name: "Sarah",
        role: "Digital Nomad",
        location: "From Canada",
        quote: "Palermo Soho was the perfect landing spot. Everything is walkable, the coffee shops are amazing for working, and I met other expats immediately. Yes, it's expensive, but the convenience is worth it when you're new to BA.",
        rating: 5,
      },
      {
        name: "Marcus",
        role: "Software Developer",
        location: "From Germany",
        quote: "Lived here for 8 months. Loved the energy, the restaurants, the weekend markets. Eventually moved to Belgrano for more space and lower rent, but Soho was exactly what I needed as a newcomer.",
        rating: 4,
      },
    ],
    "palermo-hollywood": [
      {
        name: "Jake",
        role: "Content Creator",
        location: "From UK",
        quote: "The nightlife here is unmatched. Every weekend there's something happening. Just make sure your apartment faces away from the street or bring earplugs. Learned that the hard way!",
        rating: 4,
      },
    ],
    "recoleta": [
      {
        name: "Elena",
        role: "Retiree",
        location: "From Spain",
        quote: "Recoleta reminds me of Madrid's Salamanca district. Safe, elegant, everything works. I walk everywhere, even at night. The museums and cafes keep me busy. Perfect for my retirement.",
        rating: 5,
      },
      {
        name: "David & Maria",
        role: "Family with kids",
        location: "From USA",
        quote: "Moved here with our two kids for a year. The safety factor was everything for us. Kids can play in the parks, walk to school. It's expensive but you get what you pay for.",
        rating: 5,
      },
    ],
    "belgrano": [
      {
        name: "Tom",
        role: "Long-term expat",
        location: "From Australia",
        quote: "Did my time in Palermo, then moved to Belgrano. It's where you graduate to when you want a real life, not just the expat scene. Chinatown is a gem. Rent is 30% cheaper for more space.",
        rating: 5,
      },
    ],
    "san-telmo": [
      {
        name: "Ana",
        role: "Artist",
        location: "From Mexico",
        quote: "San Telmo has soul. The Sunday market, the tango in the streets, the old buildings with character. Yes, it's grittier than Palermo, but that's why I love it. Feels like real Buenos Aires.",
        rating: 4,
      },
    ],
  };

  const hoodTestimonials = testimonials[neighborhood] || [];
  
  if (hoodTestimonials.length === 0) return null;
  
  return (
    <Testimonials 
      title={`What expats say about ${neighborhood.replace(/-/g, " ")}`}
      testimonials={hoodTestimonials}
    />
  );
}

// General expat testimonials
export function GeneralTestimonials() {
  return (
    <Testimonials
      title="What expats say about living in Argentina"
      testimonials={[
        {
          name: "Rachel",
          role: "Remote Worker",
          location: "From USA",
          quote: "I moved to Buenos Aires with $2,000/month income and live comfortably. The exchange rate means I can afford a nice apartment in Palermo, eat out regularly, and still save money. Quality of life is incredible.",
          rating: 5,
        },
        {
          name: "Luis",
          role: "Entrepreneur",
          location: "From Spain",
          quote: "The startup ecosystem in Buenos Aires surprised me. Great talent, lower costs than Europe, and a city that actually feels alive 24/7. Wish I'd moved here sooner.",
          rating: 5,
        },
        {
          name: "Emma",
          role: "Student",
          location: "From UK",
          quote: "Studied at UBA for a year. Cost of living was half what I paid in London. Learned Spanish, made friends from all over Latin America, traveled to Patagonia and Iguazu. Best year of my life.",
          rating: 5,
        },
      ]}
    />
  );
}
