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
      <div className="container mx-auto px-5 py-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
                EA
              </div>
              <span className="font-bold text-lg">Expats Argentina</span>
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground max-w-[200px]">
              Visa guides, cost of living, and expert advice for all 24 provinces.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Immigration law:{" "}
              <a
                href="https://lucerolegal.org?utm_source=expatsargentina&utm_medium=footer-recommendation"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                Lucero Legal
              </a>
            </p>
          </div>

          {/* Nav columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold mb-2.5 uppercase tracking-wider text-primary">
                {section.title}
              </h3>
              <ul className="space-y-1.5">
                {section.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-xs font-semibold mb-2 uppercase tracking-wider text-primary">Sister Sites</h3>
          <ul className="flex flex-row gap-4">
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

        <Separator className="my-6" />

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
