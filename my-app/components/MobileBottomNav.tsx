"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, FileText, MapPin, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/visas", label: "Visas", icon: FileText },
  { href: "/cities", label: "Cities", icon: MapPin },
  { href: "/guides", label: "Guides", icon: Compass },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  // Don't show on homepage (it has its own navigation)
  if (pathname === "/") return null;

  return (
    <>
      {/* Sticky Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
          
          {/* More Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                <Menu className="h-5 w-5" />
                <span className="text-[10px] font-medium">More</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[70vh]">
              <div className="py-4">
                <h3 className="font-semibold text-lg mb-4">Menu</h3>
                <div className="space-y-1">
                  <MobileMenuItem href="/about" label="About" />
                  <MobileMenuItem href="/blog" label="Blog" />
                  <MobileMenuItem href="/food" label="Food & Dining" />
                  <MobileMenuItem href="/cost-of-living" label="Cost of Living" />
                  <MobileMenuItem href="/housing" label="Housing" />
                  <MobileMenuItem href="/healthcare" label="Healthcare" />
                  <MobileMenuItem href="/resources" label="Resources" />
                  <MobileMenuItem href="/profession" label="Profession Guides" />
                  <MobileMenuItem href="/nationality" label="Nationality Guides" />
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-3">Need immigration help?</p>
                  <Button asChild className="w-full">
                    <a href="https://lucerolegal.com" target="_blank" rel="noopener">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Lucero Legal
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Spacer for bottom nav */}
      <div className="lg:hidden h-16" />
    </>
  );
}

function MobileMenuItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
    >
      {label}
    </Link>
  );
}

// Floating action button for mobile (appears on scroll)
export function MobileScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="lg:hidden fixed bottom-20 right-4 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
