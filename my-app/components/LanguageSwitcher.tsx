"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@/components/ui/icon";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLocale}
      className="flex items-center gap-2"
    >
      <GlobeIcon size="sm" />
      <span className="uppercase">{locale === "en" ? "ES" : "EN"}</span>
    </Button>
  );
}
