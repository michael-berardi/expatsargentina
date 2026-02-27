"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@/components/ui/icon";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const locales = ["en", "es", "pt"] as const;
  const currentIndex = locales.indexOf(locale as "en" | "es" | "pt");
  const nextIndex = (currentIndex + 1) % locales.length;
  const nextLocale = locales[nextIndex];

  const labels: Record<string, string> = {
    en: "EN",
    es: "ES",
    pt: "PT"
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => setLocale(nextLocale)}
      className="flex items-center gap-2"
    >
      <GlobeIcon size="sm" />
      <span className="uppercase">{labels[nextLocale]}</span>
    </Button>
  );
}
