import { SourceAttribution } from "@/components/SourceAttribution";

interface Fact {
  label: string;
  value: string;
}

interface FactBoxProps {
  title: string;
  facts: Fact[];
  source?: string;
  sourceUrl?: string;
  sourceDate?: string;
  className?: string;
}

export function FactBox({ title, facts, source, sourceUrl, sourceDate, className = "" }: FactBoxProps) {
  return (
    <div className={`bg-white dark:bg-card border border-border rounded-xl overflow-hidden ${className}`}>
      <div className="bg-primary/5 border-b border-border px-5 py-3">
        <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="p-5">
        <dl className="space-y-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex justify-between items-baseline gap-4">
              <dt className="text-sm text-muted-foreground font-medium">{fact.label}</dt>
              <dd className="text-sm font-semibold text-foreground text-right">{fact.value}</dd>
            </div>
          ))}
        </dl>
        {source && (
          <SourceAttribution source={source} url={sourceUrl} date={sourceDate} className="mt-4 pt-3 border-t border-border" />
        )}
      </div>
    </div>
  );
}
