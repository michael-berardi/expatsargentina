import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found | Expats Argentina",
  description: "The page you're looking for doesn't exist. Explore our guides to living in Argentina.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-24 px-4">
      <div className="max-w-md text-center">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or
          no longer exists. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cities">Explore Cities</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/visas">Visa Guides</Link>
          </Button>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          <p className="mb-2">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/cost-of-living" className="hover:text-foreground">Cost of Living</Link>
            <Link href="/healthcare" className="hover:text-foreground">Healthcare</Link>
            <Link href="/housing" className="hover:text-foreground">Housing</Link>
            <Link href="/banking" className="hover:text-foreground">Banking</Link>
            <Link href="/safety" className="hover:text-foreground">Safety</Link>
            <Link href="/neighborhoods" className="hover:text-foreground">Neighborhoods</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
