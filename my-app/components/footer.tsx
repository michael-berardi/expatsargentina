"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/i18n";

const footerLinks = {
  provinces: [
    { labelKey: "Buenos Aires", href: "/provinces/buenos-aires-city" },
    { labelKey: "Cordoba", href: "/provinces/cordoba" },
    { labelKey: "Mendoza", href: "/provinces/mendoza" },
    { labelKey: "Salta", href: "/provinces/salta" },
    { labelKey: "Patagonia", href: "/provinces/rio-negro" },
    { labelKey: "All Provinces", href: "/provinces" },
  ],
  cities: [
    { labelKey: "Buenos Aires", href: "/cities/buenos-aires" },
    { labelKey: "Mendoza", href: "/cities/mendoza" },
    { labelKey: "Cordoba", href: "/cities/cordoba" },
    { labelKey: "Bariloche", href: "/cities/bariloche" },
    { labelKey: "Salta", href: "/cities/salta" },
    { labelKey: "All Cities", href: "/cities" },
  ],
  guides: [
    { labelKey: "navigation.visas", href: "/visas/digital-nomad" },
    { labelKey: "navigation.costOfLiving", href: "/cost-of-living" },
    { labelKey: "navigation.healthcare", href: "/healthcare" },
    { labelKey: "navigation.housing", href: "/housing" },
    { labelKey: "navigation.banking", href: "/banking" },
    { labelKey: "navigation.safety", href: "/safety" },
  ],
  resources: [
    { labelKey: "Expat Stories", href: "/stories" },
    { labelKey: "navigation.remoteWork", href: "/remote-work" },
    { labelKey: "navigation.learnSpanish", href: "/learn-spanish" },
    { labelKey: "navigation.transportation", href: "/transportation" },
    { labelKey: "navigation.food", href: "/food" },
    { labelKey: "Newsletter", href: "/newsletter" },
  ],
  company: [
    { labelKey: "About Us", href: "/about" },
    { labelKey: "navigation.contactUs", href: "/contact" },
    { labelKey: "Privacy Policy", href: "/privacy" },
    { labelKey: "Site Map", href: "/site-map" },
  ],
};

export function Footer() {
  const { t, locale } = useI18n();
  const currentYear = new Date().getFullYear();
  
  // Helper to get translated text
  const getText = (key: string) => {
    if (key.startsWith('navigation.')) {
      return t(key) as string;
    }
    // For non-translation keys, return as-is (these are proper nouns)
    return key;
  };

  const allProvinces = locale === 'es' ? 'Todas las Provincias' : 'All Provinces';
  const allCities = locale === 'es' ? 'Todas las Ciudades' : 'All Cities';
  const expatStories = locale === 'es' ? 'Historias de Expatriados' : 'Expat Stories';
  const newsletter = locale === 'es' ? 'Boletín' : 'Newsletter';
  const aboutUs = locale === 'es' ? 'Sobre Nosotros' : 'About Us';
  const privacyPolicy = locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy';
  const siteMap = locale === 'es' ? 'Mapa del Sitio' : 'Site Map';
  const provincesLabel = locale === 'es' ? 'Provincias' : 'Provinces';
  const citiesLabel = locale === 'es' ? 'Ciudades' : 'Cities';
  const guidesLabel = locale === 'es' ? 'Guías' : 'Guides';
  const resourcesLabel = locale === 'es' ? 'Recursos' : 'Resources';
  const companyLabel = locale === 'es' ? 'Empresa' : 'Company';
  const rights = locale === 'es' ? 'Todos los derechos reservados' : 'All rights reserved';
  const sponsored = locale === 'es' ? 'Patrocinado por' : 'Sponsored by';
  const disclaimer = locale === 'es' 
    ? 'La información proporcionada es solo para fines educativos y no constituye asesoramiento legal.'
    : 'Information provided is for educational purposes only and not legal advice.';
  const description = locale === 'es'
    ? 'Tu guía completa para vivir en cualquier lugar de Argentina. Explora 24 provincias, más de 15 guías de ciudad, información de visas y consejos prácticos.'
    : 'Your comprehensive guide to living anywhere in Argentina. Explore 24 provinces, 15+ city guides, visa information, and practical advice.';

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                EA
              </div>
              <span className="font-bold text-xl">Expats Argentina</span>
            </Link>
            <p className="text-base text-muted-foreground max-w-xs">
              {description}
            </p>
            <p className="text-base text-muted-foreground mt-3">
              <a href="mailto:hello@expatsargentina.com" className="hover:text-foreground transition-colors">
                hello@expatsargentina.com
              </a>
            </p>
          </div>

          {/* Provinces */}
          <div>
            <h3 className="font-semibold mb-3">{provincesLabel}</h3>
            <ul className="space-y-2">
              {footerLinks.provinces.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.labelKey === "All Provinces" ? allProvinces : link.labelKey}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold mb-3">{citiesLabel}</h3>
            <ul className="space-y-2">
              {footerLinks.cities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.labelKey === "All Cities" ? allCities : link.labelKey}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold mb-3">{guidesLabel}</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {getText(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">{resourcesLabel}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.labelKey === "Expat Stories" ? expatStories : 
                      link.labelKey === "Newsletter" ? newsletter :
                      getText(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">{companyLabel}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.labelKey === "About Us" ? aboutUs :
                     link.labelKey === "Privacy Policy" ? privacyPolicy :
                     link.labelKey === "Site Map" ? siteMap :
                     getText(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-muted-foreground">
            &copy; {currentYear} Expats Argentina. {rights}.
          </p>
          <p className="text-base text-muted-foreground text-center md:text-right">
            {sponsored}{" "}
            <Link href="https://lucerolegal.com" className="underline hover:text-foreground">
              Lucero Legal
            </Link>
            . {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
