interface LuceroLegalCTAProps {
  title?: string;
  description?: string;
  variant?: "inline" | "sidebar" | "full";
}

export function LuceroLegalCTA({
  title = "Need immigration legal help?",
  description = "Lucero Legal specializes in Argentine immigration law, from visa applications to permanent residency.",
  variant = "inline",
}: LuceroLegalCTAProps) {
  if (variant === "sidebar") {
    return (
      <div className="text-sm text-muted-foreground">
        <p className="mb-1">{title}</p>
        <p>
          <a href="https://lucerolegal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Lucero Legal
          </a>{" "}
          can assist with visas and residency.
        </p>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className="py-6 text-center text-sm text-muted-foreground">
        <p>
          {title}{" "}
          <a href="https://lucerolegal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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
      <a href="https://lucerolegal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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
        href="https://lucerolegal.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Lucero Legal
      </a>
    </p>
  );
}
