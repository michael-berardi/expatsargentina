"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VisaQuizClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Visa Finder Quiz
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our interactive visa quiz is coming soon. In the meantime, explore
              our detailed visa guides to find the right option for your move to
              Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/visas">Browse All Visa Types</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/visas/compare">Compare Visas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
