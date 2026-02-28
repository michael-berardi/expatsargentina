import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, ArrowRight } from "lucide-react";

interface LuceroLegalCTAProps {
  title?: string;
  description?: string;
  variant?: "inline" | "sidebar" | "full";
}

export function LuceroLegalCTA({
  title = "Need Immigration Help?",
  description = "Lucero Legal specializes in Argentine immigration law. From visa applications to permanent residency, their team handles the complex paperwork so you don't have to.",
  variant = "inline",
}: LuceroLegalCTAProps) {
  if (variant === "sidebar") {
    return (
      <Card className="p-5 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="h-5 w-5 text-primary" />
          <span className="font-semibold text-sm">Lucero Legal</span>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild className="w-full" size="sm">
          <a href="https://lucerolegal.com" target="_blank" rel="noopener">
            Get Legal Help
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </Card>
    );
  }

  if (variant === "full") {
    return (
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Scale className="h-6 w-6" />
              <span className="font-semibold">Lucero Legal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <a href="https://lucerolegal.com" target="_blank" rel="noopener">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:+541150000000">Call Now</a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-6">
              Free initial consultation · English-speaking attorneys · 15+ years
              experience
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Inline variant (default)
  return (
    <Card className="p-6 my-8 bg-gradient-to-br from-primary/5 via-primary/5 to-transparent border-primary/20">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm text-primary">
              Lucero Legal
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Button asChild className="shrink-0">
          <a href="https://lucerolegal.com" target="_blank" rel="noopener">
            Get Help
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </Card>
  );
}

// Compact version for article sidebars
export function LuceroLegalCTAMini() {
  return (
    <a
      href="https://lucerolegal.com"
      target="_blank"
      rel="noopener"
      className="block p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
    >
      <div className="flex items-center gap-2 mb-1">
        <Scale className="h-4 w-4 text-primary" />
        <span className="font-semibold text-sm">Lucero Legal</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Immigration attorneys specializing in Argentine visas and residency.
      </p>
    </a>
  );
}
