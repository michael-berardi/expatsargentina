interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

interface StatBarProps {
  stats: StatItem[];
  className?: string;
}

export function StatBar({ stats, className = "" }: StatBarProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 6)} gap-3 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-xl p-4 text-center border ${
            stat.highlight
              ? "bg-primary/5 border-primary/20"
              : "bg-white dark:bg-card border-border"
          }`}
        >
          <div className={`text-2xl md:text-3xl font-bold ${stat.highlight ? "text-accent" : "text-primary"}`}>
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
