import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  location?: string;
  source?: string;
  quote: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
  disclaimer?: string;
}

export function Testimonials({
  title = "What expats say",
  testimonials,
  disclaimer,
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

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="border-t pt-4">
                    {t.source ? (
                      <p className="text-sm font-medium text-muted-foreground">
                        &mdash; {t.source}
                      </p>
                    ) : (
                      <>
                        <p className="font-semibold text-sm">&mdash; {t.name}</p>
                        {(t.role || t.location) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {t.role}{t.role && t.location && " · "}{t.location}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {disclaimer && (
            <p className="text-center text-xs text-muted-foreground mt-8 italic">
              {disclaimer}
            </p>
          )}
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
        name: "Digital nomad, Palermo Soho",
        source: "Digital nomad in Palermo Soho, 8 months",
        quote: "Plaza Serrano is basically my living room at this point. I can walk to three different coworking spots, grab empanadas at the corner, and be home in five minutes. Rent went up to around $800 for a monoambiente which stings, but having everything within walking distance when you don't speak great Spanish yet is worth the premium.",
      },
      {
        name: "Designer, Palermo Soho",
        source: "UX designer in Palermo Soho, 10 months",
        quote: "The cafe culture here is incredible for getting work done -- places like Cuervo or LAB never rush you out. I eventually moved to Villa Crespo because Soho felt a bit touristy after a while, but it was the right call for my first months in the city. Great training wheels neighborhood.",
      },
    ],
    "palermo-hollywood": [
      {
        name: "Creative, Palermo Hollywood",
        source: "Filmmaker in Palermo Hollywood, 18 months",
        quote: "There's a reason they call it Hollywood -- half the production companies in BA are within a few blocks of each other around Niceto Vega and Fitz Roy. The creative energy is real, and the nightlife on Thursday through Saturday is wild. Fair warning: if your apartment faces the street, you will hear people leaving clubs at 6am.",
      },
    ],
    "recoleta": [
      {
        name: "Retiree, Recoleta",
        source: "Retiree in Recoleta, 3 years",
        quote: "Walking down Avenida Alvear feels like being in Paris, honestly. The Haussmann-style buildings, the quiet side streets, the old-school cafes with linen tablecloths. It's an older crowd here, fewer backpackers, more families. I feel safe walking at midnight. The trade-off is it can feel a bit stiff compared to Palermo's energy.",
      },
    ],
    "belgrano": [
      {
        name: "Expat parent, Belgrano",
        source: "Expat parent in Belgrano, 2 years",
        quote: "Belgrano is where you move when you have kids and want actual parks, not just plazas. Barrancas de Belgrano is gorgeous, the Barrio Chino has the best Asian groceries in the city, and rent for a 3-bedroom is what you'd pay for a 1-bedroom in Palermo. The subte gets you downtown in 20 minutes. It's just not very exciting on weekends.",
      },
    ],
    "san-telmo": [
      {
        name: "Artist, San Telmo",
        source: "Artist in San Telmo, 15 months",
        quote: "The Sunday feria on Defensa is magic -- antiques, street performers, tango dancers, the whole atmosphere. My apartment is in an old conventillo with 4-meter ceilings and original tile floors for $400/month. Yes, it's grittier than Palermo, some blocks feel sketchy after dark, but this is the Buenos Aires with soul. You can still find the real thing here.",
      },
    ],
  };

  const hoodTestimonials = testimonials[neighborhood] || [];

  if (hoodTestimonials.length === 0) return null;

  return (
    <Testimonials
      title={`What expats say about ${neighborhood.replace(/-/g, " ")}`}
      testimonials={hoodTestimonials}
      disclaimer="Quotes reflect common experiences shared across expat forums and communities."
    />
  );
}

// General expat testimonials — community-sourced from across Argentina
export function GeneralTestimonials() {
  return (
    <Testimonials
      title="What expats say about living in Argentina"
      disclaimer="Quotes reflect common experiences shared across expat forums and communities."
      testimonials={[
        {
          name: "Remote worker, Buenos Aires",
          source: "Remote worker in Buenos Aires, 2 years",
          quote: "Buenos Aires gives you a European-style city at a fraction of the cost. I pay about $600/month for a one-bedroom in Palermo, eat out several times a week, and still save money on a modest remote salary. The cafe culture is perfect for working -- places let you camp out for hours without a dirty look. The catch? Bureaucracy is real. Opening a bank account took me three months and five visits. And the peso situation means you're constantly doing mental math at the blue dollar rate.",
        },
        {
          name: "Retired couple, Mendoza",
          source: "Retired couple in Mendoza, 3 years",
          quote: "We came for the wine country and stayed for the lifestyle. Mendoza is slower-paced than Buenos Aires, which suits us perfectly. Healthcare through a prepaga plan costs us about $200/month combined -- comparable quality to what we had back home, with same-week specialist appointments. The Andes views from our terrace never get old. Only frustration is how far you are from international flights; everything routes through Buenos Aires, and domestic flights get canceled more than you'd like.",
        },
        {
          name: "Digital nomad, Cordoba",
          source: "Digital nomad in Cordoba, 1 year",
          quote: "Cordoba is Argentina's best-kept secret for nomads. It has the university city energy -- young, creative, tons of coworking spaces -- but at half the price of Buenos Aires. A nice one-bedroom in Nueva Cordoba runs $350-400. The nightlife rivals BA and the sierras are 30 minutes away for weekend hikes. Downside: fewer English speakers, so basic Spanish is essential. But honestly, that forced me to actually learn the language instead of staying in the expat bubble.",
        },
        {
          name: "Entrepreneur, Bariloche",
          source: "Entrepreneur in Bariloche, 4 years",
          quote: "I started a tourism business in Patagonia and it's been the best decision of my life. Bariloche in summer is pure magic -- lakes, mountains, hiking trails that rival Switzerland. Winter brings ski season and the chocolate shops do incredible business. The trade-off: winters are long and cold, everything costs more than the rest of Argentina, and the internet can be unreliable outside the city center. Not for everyone, but if you love the outdoors, there's nowhere better.",
        },
      ]}
    />
  );
}
