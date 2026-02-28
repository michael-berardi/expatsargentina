"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List, X } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface StickyTOCProps {
  items: TOCItem[];
  title?: string;
}

export function StickyTOC({ items, title = "Contents" }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Sticky Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg">
              <List className="h-5 w-5 mr-2" />
              {title}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[70vh]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <nav className="space-y-1 overflow-y-auto max-h-[calc(70vh-80px)]">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeId === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  } ${item.level > 1 ? "pl-6 text-muted-foreground" : ""}`}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
                activeId === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              } ${item.level > 1 ? "pl-4" : ""}`}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
