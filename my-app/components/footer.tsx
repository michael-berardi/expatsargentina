import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  provinces: [
    { label: "Buenos Aires", href: "/provinces/buenos-aires-city" },
    { label: "Cordoba", href: "/provinces/cordoba" },
    { label: "Mendoza", href: "/provinces/mendoza" },
    { label: "Salta", href: "/provinces/salta" },
    { label: "Patagonia", href: "/provinces/rio-negro" },
    { label: "All Provinces", href: "/provinces" },
  ],
  cities: [
    { label: "Buenos Aires", href: "/cities/buenos-aires" },
    { label: "Mendoza", href: "/cities/mendoza" },
    { label: "Cordoba", href: "/cities/cordoba" },
    { label: "Bariloche", href: "/cities/bariloche" },
    { label: "Salta", href: "/cities/salta" },
    { label: "All Cities", href: "/cities" },
  ],
  guides: [
    { label: "Visas", href: "/visas/digital-nomad" },
    { label: "Cost of Living", href: "/cost-of-living" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Housing", href: "/housing" },
    { label: "Banking", href: "/banking" },
    { label: "Safety", href: "/safety" },
  ],
  resources: [
    { label: "Expat Stories", href: "/stories" },
    { label: "Remote Work", href: "/remote-work" },
    { label: "Learn Spanish", href: "/learn-spanish" },
    { label: "Transportation", href: "/transportation" },
    { label: "Food & Dining", href: "/food" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Site Map", href: "/sitemap" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                EA
              </div>
              <span className="font-bold text-xl">Expats Argentina</span>
            </Link>
            <p className="text-base md:text-sm text-muted-foreground max-w-xs">
              Your comprehensive guide to living anywhere in Argentina.
              Explore 24 provinces, 15+ city guides, visa information, and practical advice.
            </p>
            <p className="text-base md:text-sm text-muted-foreground mt-3">
              <a href="mailto:hello@expatsargentina.com" className="hover:text-foreground transition-colors">
                hello@expatsargentina.com
              </a>
            </p>
          </div>

          {/* Provinces */}
          <div>
            <h3 className="font-semibold mb-3">Provinces</h3>
            <ul className="space-y-2">
              {footerLinks.provinces.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base md:text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold mb-3">Cities</h3>
            <ul className="space-y-2">
              {footerLinks.cities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base md:text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold mb-3">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base md:text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base md:text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base md:text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base md:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Expats Argentina. All rights reserved.
          </p>
          <p className="text-base md:text-sm text-muted-foreground text-center md:text-right">
            Sponsored by{" "}
            <Link href="https://lucerolegal.com" className="underline hover:text-foreground">
              Lucero Legal
            </Link>
            . Information provided is for educational purposes only and not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
