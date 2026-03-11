interface LuceroLegalCTAProps {
  title?: string;
  description?: string;
  variant?: "inline" | "sidebar" | "full" | "card";
  ctaLabel?: string;
  highlights?: string[];
  utmMedium?: string;
}

export function LuceroLegalCTA({
  title = "Need immigration legal help?",
  description = "Lucero Legal specializes in Argentine immigration law, from visa applications to permanent residency.",
  variant = "inline",
  ctaLabel = "Talk to Lucero Legal",
  highlights = [],
  utmMedium,
}: LuceroLegalCTAProps) {
  const medium = utmMedium ?? `cta-${variant}`;
  const utmUrl = `https://lucerolegal.org?utm_source=expatsargentina&utm_medium=${medium}`;

  if (variant === "sidebar") {
    return (
      <div className="text-sm text-muted-foreground">
        <p className="mb-1">{title}</p>
        <p>
          <a href={utmUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Lucero Legal
          </a>{" "}
          can assist with visas and residency.
        </p>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-primary/10 p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
          Recommended lawyer
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
        {highlights.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-primary/15 bg-background px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <a
            href={utmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className="py-6 text-center text-sm text-muted-foreground">
        <p>
          {title}{" "}
          <a href={utmUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Lucero Legal
          </a>{" "}
          can assist with visas, residency, and immigration paperwork.
        </p>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <p className="text-sm text-muted-foreground my-6">
      {title}{" "}
      <a href={utmUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        Lucero Legal
      </a>{" "}
      {description}
    </p>
  );
}

// Compact version for article sidebars
export function LuceroLegalCTAMini() {
  return (
    <p className="text-xs text-muted-foreground">
      Immigration legal help:{" "}
      <a
        href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=cta-mini"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Lucero Legal
      </a>
    </p>
  );
}
