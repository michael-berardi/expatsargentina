import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  visas: [
    { label: "Digital Nomad Visa", href: "/visas/digital-nomad" },
    { label: "Work Visa", href: "/visas/work" },
    { label: "Retirement Visa", href: "/visas/retirement" },
    { label: "Student Visa", href: "/visas/student" },
  ],
  guides: [
    { label: "Cost of Living", href: "/cost-of-living" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Housing", href: "/housing" },
    { label: "Food & Dining", href: "/food" },
    { label: "Transportation", href: "/transportation" },
    { label: "Safety", href: "/safety" },
  ],
  resources: [
    { label: "All Guides", href: "/sitemap" },
    { label: "Expat Stories", href: "/stories" },
    { label: "Resources Directory", href: "/resources" },
    { label: "Remote Work", href: "/remote-work" },
    { label: "Learn Spanish", href: "/learn-spanish" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                EA
              </div>
              <span className="font-bold text-xl">Expats Argentina</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted resource for moving to and living in Argentina. 
              Practical guides, expert advice, and real expat stories.
            </p>
          </div>

          {/* Visas */}
          <div>
            <h3 className="font-semibold mb-3">Visas</h3>
            <ul className="space-y-2">
              {footerLinks.visas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Expats Argentina. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
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
