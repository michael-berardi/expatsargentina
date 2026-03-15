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
import { mainNav, topNav } from "@/lib/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useI18n();

  const contactLabel = t("navigation.contactUs") as string;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Expats Argentina">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            EA
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {mainNav.map((section) => (
                <NavigationMenuItem key={section.label}>
                  <NavigationMenuTrigger className="h-10 px-3 py-2 text-base font-medium">
                    {section.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[360px] gap-1 p-2 md:w-[480px] md:grid-cols-2 text-left">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left items-start"
                            >
                              <div className="text-base font-medium leading-tight">{item.label}</div>
                              {item.description && (
                                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground text-left">
                                  {item.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Top nav plain links */}
          {topNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="h-10 px-3 py-2 flex items-center text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA & Language */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild size="sm" className="h-9 px-4">
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
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                  EA
                </div>
                <span className="font-bold text-xl">Expats Argentina</span>
              </div>

              <div className="flex items-center gap-2">
                <LanguageSwitcher />
              </div>

              <nav className="flex flex-col gap-3">
                {mainNav.map((section) => (
                  <div key={section.label}>
                    <div className="text-base font-semibold text-muted-foreground uppercase tracking-wider">
                      {section.label}
                    </div>
                    {section.items.slice(0, 6).map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-1.5 text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                    {section.items.length > 6 && (
                      <SheetClose asChild>
                        <Link
                          href={section.items[0].href}
                          className="block py-1.5 text-sm text-primary hover:underline"
                        >
                          View all {section.label.toLowerCase()} →
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}

                <div className="border-t border-border my-2" />

                {topNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

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
