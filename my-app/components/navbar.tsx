"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
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

const provinceItems = [
  { title: "All Provinces", href: "/provinces", description: "Explore all 24 provinces" },
  { title: "Buenos Aires (CABA)", href: "/provinces/buenos-aires-city", description: "The capital and largest city" },
  { title: "Cordoba", href: "/provinces/cordoba", description: "Argentina's second-largest province" },
  { title: "Mendoza", href: "/provinces/mendoza", description: "Wine country at the foot of the Andes" },
  { title: "Salta", href: "/provinces/salta", description: "Colonial charm in the northwest" },
  { title: "Patagonia (Rio Negro)", href: "/provinces/rio-negro", description: "Lakes, mountains, and adventure" },
  { title: "Tierra del Fuego", href: "/provinces/tierra-del-fuego", description: "The end of the world" },
];

const cityItems = [
  { title: "All City Guides", href: "/cities", description: "15+ city guides for expats" },
  { title: "Buenos Aires", href: "/cities/buenos-aires", description: "The vibrant capital city" },
  { title: "Mendoza", href: "/cities/mendoza", description: "Wine, sun, and outdoor living" },
  { title: "Cordoba", href: "/cities/cordoba", description: "University town with a young vibe" },
  { title: "Bariloche", href: "/cities/bariloche", description: "Patagonian lakeside paradise" },
  { title: "Salta", href: "/cities/salta", description: "Affordable living with rich culture" },
  { title: "Rosario", href: "/cities/rosario", description: "Riverside city with great food" },
];

const visaItems = [
  { title: "Digital Nomad Visa", href: "/visas/digital-nomad", description: "Work remotely from Argentina for up to 180 days" },
  { title: "Work Visa", href: "/visas/work", description: "Employment-based residency options" },
  { title: "Retirement Visa", href: "/visas/retirement", description: "Pension-based residency for retirees" },
  { title: "Student Visa", href: "/visas/student", description: "Study at Argentine universities" },
  { title: "Investment Visa", href: "/visas/investment", description: "Business and investment pathways" },
];

const guideItems = [
  { title: "Cost of Living", href: "/cost-of-living", description: "Detailed breakdown of monthly expenses" },
  { title: "Neighborhoods", href: "/neighborhoods", description: "Best areas to live in Buenos Aires" },
  { title: "Healthcare", href: "/healthcare", description: "Insurance options and medical care" },
  { title: "Banking", href: "/banking", description: "Setting up accounts and transferring money" },
  { title: "Housing", href: "/housing", description: "Renting and buying property" },
  { title: "Transportation", href: "/transportation", description: "Getting around the city" },
  { title: "Food & Dining", href: "/food", description: "Where and what to eat" },
  { title: "Safety", href: "/safety", description: "Staying safe and avoiding scams" },
  { title: "Learn Spanish", href: "/learn-spanish", description: "Language learning resources" },
  { title: "Remote Work", href: "/remote-work", description: "Working remotely from BA" },
  { title: "Social Life", href: "/social-life", description: "Dating, nightlife, and making friends" },
  { title: "First 30 Days", href: "/first-30-days", description: "Week-by-week guide for new arrivals" },
  { title: "Culture & Customs", href: "/culture", description: "Social norms and unwritten rules" },
  { title: "Leaving Argentina", href: "/leaving", description: "When it's time to go" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                <NavigationMenuTrigger>Provinces</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Cities</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Visas</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {guideItems.map((item) => (
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="default">
            <Link href="/contact">Contact Us</Link>
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

              <nav className="flex flex-col gap-4">
                <div className="text-base md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Provinces
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
                  Cities
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
                  Visas
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
                  Guides
                </div>
                {guideItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <Button asChild className="mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
