"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useI18n();
  
  // Get translated strings
  const provincesLabel = t("navigation.provinces") as string;
  const citiesLabel = t("navigation.cities") as string;
  const visasLabel = t("navigation.visas") as string;
  const guidesLabel = locale === 'es' ? 'Guías' : 'Guides';
  const contactLabel = t("navigation.contactUs") as string;
  const allProvinces = locale === 'es' ? 'Todas las Provincias' : 'All Provinces';
  const allCities = locale === 'es' ? 'Todas las Ciudades' : 'All Cities';
  const cityGuides = locale === 'es' ? 'Guías de Ciudad' : 'City Guides';
  const expatGuides = locale === 'es' ? 'Guías para Expatriados' : 'Expat Guides';

  const provinceItems = [
    { title: allProvinces, href: "/provinces", description: locale === 'es' ? "Explora las 24 provincias" : "Explore all 24 provinces" },
    { title: "Buenos Aires (CABA)", href: "/provinces/buenos-aires-city", description: locale === 'es' ? "La capital y ciudad más grande" : "The capital and largest city" },
    { title: "Cordoba", href: "/provinces/cordoba", description: locale === 'es' ? "La segunda provincia más grande" : "Argentina's second-largest province" },
    { title: "Mendoza", href: "/provinces/mendoza", description: locale === 'es' ? "Tierra del vino al pie de los Andes" : "Wine country at the foot of the Andes" },
    { title: "Salta", href: "/provinces/salta", description: locale === 'es' ? "Encanto colonial en el noroeste" : "Colonial charm in the northwest" },
    { title: "Patagonia (Rio Negro)", href: "/provinces/rio-negro", description: locale === 'es' ? "Lagos, montañas y aventura" : "Lakes, mountains, and adventure" },
    { title: "Tierra del Fuego", href: "/provinces/tierra-del-fuego", description: locale === 'es' ? "El fin del mundo" : "The end of the world" },
  ];

  const cityItems = [
    { title: allCities, href: "/cities", description: locale === 'es' ? "Más de 15 guías de ciudad" : "15+ city guides for expats" },
    { title: "Buenos Aires", href: "/cities/buenos-aires", description: locale === 'es' ? "La vibrante capital" : "The vibrant capital city" },
    { title: "Mendoza", href: "/cities/mendoza", description: locale === 'es' ? "Vino, sol y vida al aire libre" : "Wine, sun, and outdoor living" },
    { title: "Cordoba", href: "/cities/cordoba", description: locale === 'es' ? "Ciudad universitaria con ambiente joven" : "University town with a young vibe" },
    { title: "Bariloche", href: "/cities/bariloche", description: locale === 'es' ? "Paraíso patagónico junto al lago" : "Patagonian lakeside paradise" },
    { title: "Salta", href: "/cities/salta", description: locale === 'es' ? "Vida asequible con rica cultura" : "Affordable living with rich culture" },
    { title: "Rosario", href: "/cities/rosar", description: locale === 'es' ? "Ciudad ribereña con gran comida" : "Riverside city with great food" },
  ];

  const visaItems = [
    { title: locale === 'es' ? "Visa Nómada Digital" : "Digital Nomad Visa", href: "/visas/digital-nomad", description: locale === 'es' ? "Trabaja remotamente desde Argentina hasta 180 días" : "Work remotely from Argentina for up to 180 days" },
    { title: locale === 'es' ? "Visa de Trabajo" : "Work Visa", href: "/visas/work", description: locale === 'es' ? "Opciones de residencia basadas en empleo" : "Employment-based residency options" },
    { title: locale === 'es' ? "Visa de Jubilación" : "Retirement Visa", href: "/visas/retirement", description: locale === 'es' ? "Residencia basada en pensión para jubilados" : "Pension-based residency for retirees" },
    { title: locale === 'es' ? "Visa de Estudiante" : "Student Visa", href: "/visas/student", description: locale === 'es' ? "Estudia en universidades argentinas" : "Study at Argentine universities" },
    { title: locale === 'es' ? "Visa de Inversión" : "Investment Visa", href: "/visas/investment", description: locale === 'es' ? "Vías de negocios e inversión" : "Business and investment pathways" },
  ];

  const guideItems = [
    { title: t("navigation.costOfLiving"), href: "/cost-of-living", description: locale === 'es' ? "Desglose detallado de gastos mensuales" : "Detailed breakdown of monthly expenses" },
    { title: t("navigation.neighborhoods"), href: "/neighborhoods", description: locale === 'es' ? "Mejores áreas para vivir en Buenos Aires" : "Best areas to live in Buenos Aires" },
    { title: t("navigation.healthcare"), href: "/healthcare", description: locale === 'es' ? "Opciones de seguro y atención médica" : "Insurance options and medical care" },
    { title: t("navigation.banking"), href: "/banking", description: locale === 'es' ? "Configurar cuentas y transferir dinero" : "Setting up accounts and transferring money" },
    { title: t("navigation.housing"), href: "/housing", description: locale === 'es' ? "Alquilar y comprar propiedad" : "Renting and buying property" },
    { title: t("navigation.safety"), href: "/safety", description: locale === 'es' ? "Mantenerse seguro y evitar estafas" : "Staying safe and avoiding scams" },
    { title: t("navigation.learnSpanish"), href: "/learn-spanish", description: locale === 'es' ? "Recursos para aprender idioma" : "Language learning resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            EA
          </div>
          <span className="hidden font-bold text-xl sm:inline-block">
            Expats Argentina
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{provincesLabel}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {provinceItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{citiesLabel}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {cityItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{visasLabel}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {visaItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{guidesLabel}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {guideItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title as string}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild variant="default">
            <Link href="/contact">{contactLabel as string}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon size="md" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                  EA
                </div>
                <span className="font-bold text-xl">Expats Argentina</span>
              </div>

              <div className="flex items-center gap-2">
                <LanguageSwitcher />
              </div>

              <nav className="flex flex-col gap-4">
                <div className="text-base md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {provincesLabel}
                </div>
                {provinceItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="text-base md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  {citiesLabel}
                </div>
                {cityItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="text-base md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  {visasLabel}
                </div>
                {visaItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="text-base md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  {guidesLabel}
                </div>
                {guideItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title as string}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <Button asChild className="mt-4">
                <Link href="/contact">{contactLabel as string}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
