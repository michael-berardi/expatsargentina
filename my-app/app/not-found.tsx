import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <MapPinIcon size="xl" className="text-primary mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Looks like you took a wrong turn. This page doesn&apos;t exist, but
        there&apos;s plenty to explore across Argentina.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">
            Go Home
            <ArrowRightIcon size="sm" className="ml-2" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/provinces">Explore Provinces</Link>
        </Button>
      </div>
    </div>
  );
}
