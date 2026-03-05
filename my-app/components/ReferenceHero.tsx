import { Badge } from "@/components/ui/badge";

interface StatItem {
  value: string;
  label: string;
}

interface ReferenceHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  stats?: StatItem[];
  children?: React.ReactNode;
}

export function ReferenceHero({ badge, title, subtitle, stats, children }: ReferenceHeroProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="secondary">
              {badge}
            </Badge>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {subtitle}
          </p>
          {children}
        </div>

        {/* Stat Bar */}
        {stats && stats.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-card border border-border rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
