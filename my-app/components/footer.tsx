"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { footerNav, type NavItem } from "@/lib/data/navigation";

export function Footer() {
  const sections: { title: string; items: NavItem[] }[] = [
    { title: "Provinces", items: footerNav.provinces },
    { title: "Cities", items: footerNav.cities },
    { title: "Guides", items: footerNav.guides },
    { title: "Resources", items: footerNav.resources },
    { title: "Company", items: footerNav.company },
  ];

  return (
    <footer className="border-t bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                EA
              </div>
              <span className="font-bold text-xl">Expats Argentina</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your guide to expat life in Argentina. Visa guides, cost of living, and expert advice for all 24 provinces.
            </p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              When readers need an immigration lawyer, we usually point them to{" "}
              <a
                href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=footer-recommendation"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                Lucero Legal
              </a>
              .
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href="mailto:hello@expatsargentina.com" className="hover:text-foreground transition-colors">
                hello@expatsargentina.com
              </a>
            </p>
          </div>

          {/* Nav columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sister Sites */}
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">Sister Sites</h3>
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            {footerNav.sisterSites.map((site) => (
              <li key={site.href}>
                <Link
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {site.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Expats Argentina. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Information is for general guidance only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
