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
  const guidesLabel = locale === 'es' ? 'Guías' : locale === 'pt' ? 'Guias' : 'Guides';
  const contactLabel = t("navigation.contactUs") as string;
  const allProvinces = locale === 'es' ? 'Todas las Provincias' : locale === 'pt' ? 'Todas as Províncias' : 'All Provinces';
  const allCities = locale === 'es' ? 'Todas las Ciudades' : locale === 'pt' ? 'Todas as Cidades' : 'All Cities';
  const cityGuides = locale === 'es' ? 'Guías de Ciudad' : locale === 'pt' ? 'Guias de Cidade' : 'City Guides';
  const expatGuides = locale === 'es' ? 'Guías para Expatriados' : locale === 'pt' ? 'Guias para Expatriados' : 'Expat Guides';

  const provinceItems = [
    { title: allProvinces, href: "/provinces", description: locale === 'es' ? "Explora las 24 provincias" : locale === 'pt' ? "Explore todas as 24 províncias" : "Explore all 24 provinces" },
    { title: "Buenos Aires (CABA)", href: "/provinces/buenos-aires-city", description: locale === 'es' ? "La capital y ciudad más grande" : locale === 'pt' ? "A capital e maior cidade" : "The capital and largest city" },
    { title: "Cordoba", href: "/provinces/cordoba", description: locale === 'es' ? "La segunda provincia más grande" : locale === 'pt' ? "A segunda maior província" : "Argentina's second-largest province" },
    { title: "Mendoza", href: "/provinces/mendoza", description: locale === 'es' ? "Tierra del vino al pie de los Andes" : locale === 'pt' ? "Terra do vinho ao pé dos Andes" : "Wine country at the foot of the Andes" },
    { title: "Salta", href: "/provinces/salta", description: locale === 'es' ? "Encanto colonial en el noroeste" : locale === 'pt' ? "Charme colonial no noroeste" : "Colonial charm in the northwest" },
    { title: "Patagonia (Rio Negro)", href: "/provinces/rio-negro", description: locale === 'es' ? "Lagos, montañas y aventura" : locale === 'pt' ? "Lagos, montanhas e aventura" : "Lakes, mountains, and adventure" },
    { title: "Tierra del Fuego", href: "/provinces/tierra-del-fuego", description: locale === 'es' ? "El fin del mundo" : locale === 'pt' ? "O fim do mundo" : "The end of the world" },
  ];

  const cityItems = [
    { title: allCities, href: "/cities", description: locale === 'es' ? "Más de 15 guías de ciudad" : locale === 'pt' ? "15+ guias de cidades para expats" : "15+ city guides for expats" },
    { title: "Buenos Aires", href: "/cities/buenos-aires", description: locale === 'es' ? "La vibrante capital" : locale === 'pt' ? "A vibrante capital" : "The vibrant capital city" },
    { title: "Mendoza", href: "/cities/mendoza", description: locale === 'es' ? "Vino, sol y vida al aire libre" : locale === 'pt' ? "Vinho, sol e vida ao ar livre" : "Wine, sun, and outdoor living" },
    { title: "Cordoba", href: "/cities/cordoba", description: locale === 'es' ? "Ciudad universitaria con ambiente joven" : locale === 'pt' ? "Cidade universitária com ambiente jovem" : "University town with a young vibe" },
    { title: "Bariloche", href: "/cities/bariloche", description: locale === 'es' ? "Paraíso patagónico junto al lago" : locale === 'pt' ? "Paraíso patagônico à beira do lago" : "Patagonian lakeside paradise" },
    { title: "Salta", href: "/cities/salta", description: locale === 'es' ? "Vida asequible con rica cultura" : locale === 'pt' ? "Vida acessível com rica cultura" : "Affordable living with rich culture" },
    { title: "Rosario", href: "/cities/rosario", description: locale === 'es' ? "Ciudad ribereña con gran comida" : locale === 'pt' ? "Cidade ribeirinha com ótima comida" : "Riverside city with great food" },
  ];

  const visaItems = [
    { title: locale === 'es' ? "Visa Nómada Digital" : locale === 'pt' ? "Visto Nômade Digital" : "Digital Nomad Visa", href: "/visas/digital-nomad", description: locale === 'es' ? "Trabaja remotamente desde Argentina hasta 180 días" : locale === 'pt' ? "Trabalhe remotamente da Argentina por até 180 dias" : "Work remotely from Argentina for up to 180 days" },
    { title: locale === 'es' ? "Visa de Trabajo" : locale === 'pt' ? "Visto de Trabalho" : "Work Visa", href: "/visas/work", description: locale === 'es' ? "Opciones de residencia basadas en empleo" : locale === 'pt' ? "Opções de residência baseadas em emprego" : "Employment-based residency options" },
    { title: locale === 'es' ? "Visa de Jubilación" : locale === 'pt' ? "Visto de Aposentadoria" : "Retirement Visa", href: "/visas/retirement", description: locale === 'es' ? "Residencia basada en pensión para jubilados" : locale === 'pt' ? "Residência baseada em pensão para aposentados" : "Pension-based residency for retirees" },
    { title: locale === 'es' ? "Visa de Estudiante" : locale === 'pt' ? "Visto de Estudante" : "Student Visa", href: "/visas/student", description: locale === 'es' ? "Estudia en universidades argentinas" : locale === 'pt' ? "Estude em universidades argentinas" : "Study at Argentine universities" },
    { title: locale === 'es' ? "Visa de Inversión" : locale === 'pt' ? "Visto de Investimento" : "Investment Visa", href: "/visas/investment", description: locale === 'es' ? "Vías de negocios e inversión" : locale === 'pt' ? "Caminhos de negócios e investimento" : "Business and investment pathways" },
  ];

  const guideItems = [
    { title: t("navigation.costOfLiving"), href: "/cost-of-living", description: locale === 'es' ? "Desglose detallado de gastos mensuales" : locale === 'pt' ? "Detalhamento de despesas mensais" : "Detailed breakdown of monthly expenses" },
    { title: t("navigation.neighborhoods"), href: "/neighborhoods", description: locale === 'es' ? "Mejores áreas para vivir en Buenos Aires" : locale === 'pt' ? "Melhores áreas para morar em Buenos Aires" : "Best areas to live in Buenos Aires" },
    { title: t("navigation.healthcare"), href: "/healthcare", description: locale === 'es' ? "Opciones de seguro y atención médica" : locale === 'pt' ? "Opções de seguro e atendimento médico" : "Insurance options and medical care" },
    { title: t("navigation.banking"), href: "/banking", description: locale === 'es' ? "Configurar cuentas y transferir dinero" : locale === 'pt' ? "Abrir contas e transferir dinheiro" : "Setting up accounts and transferring money" },
    { title: t("navigation.housing"), href: "/housing", description: locale === 'es' ? "Alquilar y comprar propiedad" : locale === 'pt' ? "Alugar e comprar imóveis" : "Renting and buying property" },
    { title: t("navigation.safety"), href: "/safety", description: locale === 'es' ? "Mantenerse seguro y evitar estafas" : locale === 'pt' ? "Manter-se seguro e evitar golpes" : "Staying safe and avoiding scams" },
    { title: t("navigation.learnSpanish"), href: "/learn-spanish", description: locale === 'es' ? "Recursos para aprender idioma" : locale === 'pt' ? "Recursos para aprender o idioma" : "Language learning resources" },
  ];

  const foodLabel = locale === 'es' ? 'Comida' : locale === 'pt' ? 'Comida' : 'Food';
  const foodItems = [
    { title: locale === 'es' ? "Guía de Comida" : locale === 'pt' ? "Guia de Comida" : "Food Guide", href: "/food", description: locale === 'es' ? "Todo sobre la comida argentina" : locale === 'pt' ? "Tudo sobre a comida argentina" : "Everything about Argentine food culture" },
    { title: locale === 'es' ? "Recetas" : locale === 'pt' ? "Receitas" : "Recipes", href: "/food/recipes", description: locale === 'es' ? "Recetas auténticas argentinas" : locale === 'pt' ? "Receitas autênticas argentinas" : "Authentic Argentine recipes with local tips" },
    { title: locale === 'es' ? "Restaurantes BA" : locale === 'pt' ? "Restaurantes BA" : "Buenos Aires Restaurants", href: "/food/restaurants/buenos-aires", description: locale === 'es' ? "Top 40 restaurantes" : locale === 'pt' ? "Top 40 restaurantes" : "Top 40 restaurants by category" },
    { title: locale === 'es' ? "Mejores Parrillas" : locale === 'pt' ? "Melhores Parrillas" : "Best Parrillas", href: "/food/restaurants/best-parrillas", description: locale === 'es' ? "Las mejores parrillas" : locale === 'pt' ? "As melhores parrillas" : "Best steakhouses in Buenos Aires" },
    { title: locale === 'es' ? "Guía de Vinos" : locale === 'pt' ? "Guia de Vinhos" : "Wine Guide", href: "/wine", description: locale === 'es' ? "Regiones vinícolas, cepas y degustaciones" : locale === 'pt' ? "Regiões vinícolas, variedades e degustações" : "Wine regions, grape varieties, and tastings" },
  ];

  const investLabel = locale === 'es' ? 'Invertir' : locale === 'pt' ? 'Investir' : 'Invest';
  const investItems = [
    { title: locale === 'es' ? "Oportunidades de Inversión" : locale === 'pt' ? "Oportunidades de Investimento" : "Investment Overview", href: "/investments", description: locale === 'es' ? "Guía completa de inversión en Argentina" : locale === 'pt' ? "Guia completo de investimento na Argentina" : "Complete guide to investing in Argentina" },
    { title: locale === 'es' ? "Bienes Raíces" : locale === 'pt' ? "Imóveis" : "Real Estate", href: "/investments/real-estate", description: locale === 'es' ? "Propiedad y desarrollo inmobiliario" : locale === 'pt' ? "Propriedade e desenvolvimento imobiliário" : "Property and real estate development" },
    { title: locale === 'es' ? "Agricultura" : locale === 'pt' ? "Agricultura" : "Agriculture", href: "/investments/agriculture", description: locale === 'es' ? "Tierra agrícola y agtech" : locale === 'pt' ? "Terra agrícola e agtech" : "Farmland and agtech opportunities" },
    { title: locale === 'es' ? "Minería" : locale === 'pt' ? "Mineração" : "Mining", href: "/investments/mining", description: locale === 'es' ? "Litio, cobre y minerales críticos" : locale === 'pt' ? "Lítio, cobre e minerais críticos" : "Lithium, copper, and critical minerals" },
    { title: locale === 'es' ? "Energía" : locale === 'pt' ? "Energia" : "Energy", href: "/investments/energy", description: locale === 'es' ? "Vaca Muerta y renovables" : locale === 'pt' ? "Vaca Muerta e energias renováveis" : "Vaca Muerta and renewable energy" },
    { title: locale === 'es' ? "Tecnología" : locale === 'pt' ? "Tecnologia" : "Technology", href: "/investments/technology", description: locale === 'es' ? "Startups y sector tecnológico" : locale === 'pt' ? "Startups e setor tecnológico" : "Startups and tech sector" },
    { title: locale === 'es' ? "Turismo" : locale === 'pt' ? "Turismo" : "Tourism", href: "/investments/tourism", description: locale === 'es' ? "Hotelería y experiencias" : locale === 'pt' ? "Hotelaria e experiências" : "Hospitality and experiences" },
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
                  <ul className="grid w-[360px] gap-1 p-2 md:w-[480px] md:grid-cols-2 text-left">
                    {provinceItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                          >
                            <div className="text-base font-medium leading-tight">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
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
                  <ul className="grid w-[360px] gap-1 p-2 md:w-[480px] md:grid-cols-2 text-left">
                    {cityItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                          >
                            <div className="text-base font-medium leading-tight">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
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
                  <ul className="grid w-[360px] gap-1 p-2 md:w-[480px] md:grid-cols-2 text-left">
                    {visaItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                          >
                            <div className="text-base font-medium leading-tight">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
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
                  <ul className="grid w-[360px] gap-1 p-2 md:w-[480px] md:grid-cols-2 text-left">
                    {guideItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                          >
                            <div className="text-base font-medium leading-tight">{item.title as string}</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
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
                <NavigationMenuTrigger>{investLabel}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[360px] gap-1 p-2 md:w-[480px] md:grid-cols-2 text-left">
                    {investItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                          >
                            <div className="text-base font-medium leading-tight">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
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
                <NavigationMenuTrigger>{foodLabel}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[360px] gap-1 p-2 md:w-[400px] md:grid-cols-1 text-left">
                    {foodItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                          >
                            <div className="text-base font-medium leading-tight">{item.title as string}</div>
                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
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
          
          {/* Blog Link */}
          <Link 
            href="/blog" 
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          
          {/* Profession Link */}
          <Link 
            href="/profession" 
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
          >
            Professions
          </Link>
        </div>

        {/* CTA Button & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Button asChild variant="outline" size="sm">
            <a href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=navbar" target="_blank" rel="noopener noreferrer">
              {locale === 'es' ? 'Consulta Gratis' : locale === 'pt' ? 'Consulta Gratuita' : 'Free Consultation'}
            </a>
          </Button>
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

              <nav className="flex flex-col gap-3">
                <div className="text-base md:text-base font-semibold text-muted-foreground uppercase tracking-wider">
                  {locale === 'es' ? "Destinos" : locale === 'pt' ? "Destinos" : "Destinations"}
                </div>
                <SheetClose asChild>
                  <Link href="/provinces" className="text-foreground hover:text-primary transition-colors font-medium">
                    {locale === 'es' ? "Todas las Provincias →" : locale === 'pt' ? "Todas as Províncias →" : "All Provinces →"}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/cities" className="text-foreground hover:text-primary transition-colors font-medium">
                    {locale === 'es' ? "Todas las Ciudades →" : locale === 'pt' ? "Todas as Cidades →" : "All Cities →"}
                  </Link>
                </SheetClose>
                <div className="pl-3 border-l-2 border-border space-y-2 mt-1">
                  {cityItems.slice(1, 5).map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="text-base md:text-base font-semibold text-muted-foreground uppercase tracking-wider mt-4">
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

                <div className="text-base md:text-base font-semibold text-muted-foreground uppercase tracking-wider mt-4">
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

                <div className="text-base md:text-base font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  {locale === 'es' ? 'Comida' : locale === 'pt' ? 'Comida' : 'Food'}
                </div>
                {foodItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title as string}
                    </Link>
                  </SheetClose>
                ))}

                <div className="text-base md:text-base font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  {investLabel}
                </div>
                {investItems.slice(0, 4).map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <SheetClose asChild>
                <Button asChild variant="outline" className="mt-4">
                  <a href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=mobile-menu" target="_blank" rel="noopener noreferrer">
                    {locale === 'es' ? 'Consulta Gratis' : locale === 'pt' ? 'Consulta Gratuita' : 'Free Consultation'}
                  </a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="mt-2">
                  <Link href="/contact">{contactLabel as string}</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
