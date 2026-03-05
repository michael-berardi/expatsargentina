"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  FileTextIcon,
  PlaneIcon,
  HomeIcon,
  WalletIcon,
  HeartIcon,
  GlobeIcon,
  SmartphoneIcon,
  MapPinIcon,
} from "@/components/ui/icon";
import { LuceroLegalCTA } from "@/components/LuceroLegalCTA";

// --- Checklist Data ---

interface ChecklistItem {
  id: string;
  label: string;
  detail?: string;
  link?: { href: string; text: string };
}

interface ChecklistSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: "sm" | "md" | "lg" | "xl"; className?: string }>;
  items: ChecklistItem[];
}

const checklistSections: ChecklistSection[] = [
  {
    id: "3-6-months",
    title: "3-6 Months Before",
    subtitle: "Planning & preparation from home",
    icon: GlobeIcon,
    items: [
      {
        id: "research-visas",
        label: "Research visa options for your situation",
        detail: "Tourist, Digital Nomad, Rentista, Work, or Student visa - know your path before you go.",
        link: { href: "/visas", text: "Visa guide" },
      },
      {
        id: "passport-renewal",
        label: "Get passport renewed if expiring within 6 months",
        detail: "Argentina requires at least 6 months validity. Some airlines won't board you without it.",
      },
      {
        id: "apostille-docs",
        label: "Apostille key documents",
        detail: "Birth certificate, marriage certificate (if applicable), university degree, and criminal background check. This takes weeks - start early.",
      },
      {
        id: "health-insurance",
        label: "Research health insurance options",
        detail: "Look into international plans (SafetyWing, Cigna Global) or plan to get local prepaga coverage once you arrive.",
      },
      {
        id: "learn-spanish",
        label: "Start learning basic Spanish",
        detail: "Even basic greetings and numbers make a huge difference. Duolingo, Babbel, or a tutor - anything helps.",
        link: { href: "/learn-spanish", text: "Spanish resources" },
      },
      {
        id: "international-banking",
        label: "Set up international banking (Wise, etc.)",
        detail: "Open a Wise account and verify it before you leave. You'll need it to move money internationally at good rates.",
        link: { href: "/banking", text: "Banking guide" },
      },
      {
        id: "join-communities",
        label: "Join expat communities online",
        detail: "Facebook groups (BA Expats, Expats in Buenos Aires), Reddit r/argentina, and WhatsApp groups. Ask questions before you arrive.",
      },
    ],
  },
  {
    id: "1-2-months",
    title: "1-2 Months Before",
    subtitle: "Logistics & final preparations",
    icon: PlaneIcon,
    items: [
      {
        id: "temp-accommodation",
        label: "Book temporary accommodation (first 2-4 weeks)",
        detail: "Airbnb in Palermo, Recoleta, or Belgrano. Don't sign a lease until you've walked the neighborhoods yourself.",
      },
      {
        id: "money-transfer",
        label: "Arrange international money transfer method",
        detail: "Western Union, Wise, or crypto. Have at least 2 methods ready. The blue dollar rate can save you 30-50%.",
        link: { href: "/banking", text: "Money transfer options" },
      },
      {
        id: "travel-insurance",
        label: "Get travel insurance for initial period",
        detail: "Cover your first 3 months minimum. SafetyWing or World Nomads are popular choices among digital nomads.",
      },
      {
        id: "notify-bank",
        label: "Notify your bank of international travel",
        detail: "Prevent your cards from being blocked. Set up travel notifications and check daily withdrawal limits.",
      },
      {
        id: "download-apps",
        label: "Download essential apps",
        detail: "Google Translate (with offline Spanish pack), Mercado Pago, Uber/Cabify, WhatsApp, and DolarHoy.",
        link: { href: "/resources", text: "Full app list" },
      },
      {
        id: "research-neighborhoods",
        label: "Research neighborhoods",
        detail: "Palermo for nightlife and coworking, Recoleta for safety and culture, Belgrano for families, San Telmo for charm and budget.",
        link: { href: "/neighborhoods", text: "Neighborhood guide" },
      },
      {
        id: "book-flights",
        label: "Book flights",
        detail: "Fly into Ezeiza (EZE), not Aeroparque. Book a Tienda Leon shuttle or pre-arrange a transfer to the city.",
      },
    ],
  },
  {
    id: "first-week",
    title: "First Week in Argentina",
    subtitle: "Hit the ground running",
    icon: SmartphoneIcon,
    items: [
      {
        id: "sim-card",
        label: "Get a local SIM card",
        detail: "Personal, Movistar, or Claro. Go to any carrier store with your passport. Ask for a 'chip prepago' (prepaid SIM). Plans start around $5-10/month.",
      },
      {
        id: "mercado-pago",
        label: "Set up Mercado Pago",
        detail: "Needs an Argentine phone number. This is your digital wallet for QR payments at most stores, restaurants, and for paying utilities.",
      },
      {
        id: "digital-bank",
        label: "Open Brubank or Uala digital account",
        detail: "These fintech apps work with a passport (no DNI needed). Get a prepaid debit card for everyday purchases.",
      },
      {
        id: "exchange-cash",
        label: "Exchange initial cash at a reputable exchange",
        detail: "Bring USD cash and exchange at the blue dollar rate. Ask your Airbnb host or expat groups for trusted exchange houses (cuevas).",
      },
      {
        id: "sube-card",
        label: "Get a SUBE card for public transport",
        detail: "Available at kioscos and subway stations. Load it with pesos. Works on buses, subte (metro), and trains across Buenos Aires.",
      },
      {
        id: "explore-neighborhood",
        label: "Explore your temporary neighborhood on foot",
        detail: "Walk the streets. Find the nearest supermarket, pharmacy, kiosco, and laundry. Get oriented before you start apartment hunting.",
      },
    ],
  },
  {
    id: "first-month",
    title: "First Month",
    subtitle: "Getting settled for the long term",
    icon: HomeIcon,
    items: [
      {
        id: "apartment-search",
        label: "Start apartment search",
        detail: "ZonaProp, Argenprop, and Facebook groups. Budget 2-3 weeks for searching. Always see apartments in person before committing.",
        link: { href: "/housing", text: "Housing guide" },
      },
      {
        id: "migraciones",
        label: "Visit Migraciones for visa/residency if applicable",
        detail: "Book an appointment online at migraciones.gov.ar. Bring all apostilled documents and their certified Spanish translations.",
      },
      {
        id: "dni-appointment",
        label: "Get DNI appointment (if starting residency)",
        detail: "The DNI (national identity card) is essential for banking, work, and daily life. Processing currently takes 6+ months, so start early.",
        link: { href: "/guides/getting-dni", text: "DNI guide" },
      },
      {
        id: "bank-account",
        label: "Open a bank account",
        detail: "Requires DNI (or use fintech alternatives while waiting). Banco Galicia and BBVA are popular with expats for their digital platforms.",
        link: { href: "/banking", text: "Banking guide" },
      },
      {
        id: "healthcare-register",
        label: "Register for healthcare/obra social",
        detail: "If employed, you'll get obra social through your employer. Otherwise, look into prepaga plans (OSDE, Swiss Medical, Galeno) for private coverage.",
        link: { href: "/healthcare", text: "Healthcare guide" },
      },
      {
        id: "social-group",
        label: "Find a local gym, coworking, or social group",
        detail: "Megatlon gyms, La Maquinita coworking, Meetup.com events, language exchange groups. Building a social circle is key to feeling at home.",
        link: { href: "/social-life", text: "Social life guide" },
      },
    ],
  },
];

const allItems = checklistSections.flatMap((s) => s.items);
const totalItems = allItems.length;

// --- Page Component ---

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load saved state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("expatsarg-checklist");
      if (saved) {
        setChecked(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors (SSR, privacy mode, etc.)
    }
  }, []);

  // Persist checked state to localStorage on change
  useEffect(() => {
    try {
      if (Object.keys(checked).length > 0) {
        localStorage.setItem("expatsarg-checklist", JSON.stringify(checked));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [checked]);

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      // Clean up false values
      if (!next[id]) delete next[id];
      return next;
    });
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const getSectionProgress = (section: ChecklistSection) => {
    const sectionChecked = section.items.filter((item) => checked[item.id]).length;
    return { checked: sectionChecked, total: section.items.length };
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setChecked({});
    try {
      localStorage.removeItem("expatsarg-checklist");
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30 print:hidden">
        <div className="container mx-auto px-5 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-foreground">Resources</Link>
            <span>/</span>
            <span className="text-foreground">Moving Checklist</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <FileTextIcon size="sm" className="mr-1" />
              Interactive Checklist
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Argentina Moving Checklist
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to do before, during, and after your move.
              Check items off as you go &mdash; your progress is saved automatically.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">
                  {checkedCount} of {totalItems} completed
                </span>
                <span className="font-semibold text-primary">
                  {progressPercent}%
                </span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              {progressPercent === 100 && (
                <p className="mt-3 text-sm text-primary font-medium">
                  All done! You&apos;re ready for Argentina.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto space-y-8">
            {checklistSections.map((section) => {
              const SectionIcon = section.icon;
              const sectionProgress = getSectionProgress(section);
              const sectionComplete = sectionProgress.checked === sectionProgress.total;

              return (
                <Card key={section.id} className={sectionComplete ? "border-primary/30 bg-primary/5" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
                          <SectionIcon size="md" className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-serif">{section.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{section.subtitle}</p>
                        </div>
                      </div>
                      <Badge
                        variant={sectionComplete ? "default" : "secondary"}
                        className="flex-shrink-0"
                      >
                        {sectionProgress.checked}/{sectionProgress.total}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {section.items.map((item) => {
                        const isChecked = !!checked[item.id];
                        return (
                          <li key={item.id}>
                            <label
                              className={`flex items-start gap-3 cursor-pointer group rounded-lg p-3 -mx-3 transition-colors hover:bg-muted/50 ${
                                isChecked ? "opacity-60" : ""
                              }`}
                            >
                              <div className="flex-shrink-0 mt-0.5">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => toggleItem(item.id)}
                                  className="sr-only"
                                />
                                <div
                                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                    isChecked
                                      ? "bg-primary border-primary text-primary-foreground"
                                      : "border-border group-hover:border-primary/50"
                                  }`}
                                >
                                  {isChecked && (
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      className="text-primary-foreground"
                                    >
                                      <path
                                        d="M2 6L5 9L10 3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span
                                  className={`font-medium leading-snug ${
                                    isChecked ? "line-through text-muted-foreground" : "text-foreground"
                                  }`}
                                >
                                  {item.label}
                                </span>
                                {item.detail && (
                                  <p
                                    className={`text-sm mt-1 leading-relaxed ${
                                      isChecked ? "text-muted-foreground/50" : "text-muted-foreground"
                                    }`}
                                  >
                                    {item.detail}
                                  </p>
                                )}
                                {item.link && (
                                  <Link
                                    href={item.link.href}
                                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {item.link.text}
                                    <ArrowRightIcon size="sm" />
                                  </Link>
                                )}
                              </div>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actions Bar */}
      <section className="py-8 print:hidden">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handlePrint} variant="outline" size="lg">
                <FileTextIcon size="sm" className="mr-2" />
                Print This Checklist
              </Button>
              <Button onClick={handleReset} variant="ghost" size="lg" className="text-muted-foreground">
                Reset All Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-muted/30 print:hidden">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-center mb-8">Related Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/first-30-days" className="group">
                <Card className="h-full transition-colors group-hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPinIcon size="md" className="text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        First 30 Days Guide
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Week-by-week survival guide for your first month in Buenos Aires.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/banking" className="group">
                <Card className="h-full transition-colors group-hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <WalletIcon size="md" className="text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        Banking & Money
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Navigate the blue dollar, transfers, and managing finances as an expat.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/cost-of-living" className="group">
                <Card className="h-full transition-colors group-hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <HeartIcon size="md" className="text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        Cost of Living
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      What things actually cost in Buenos Aires - rent, food, transport, and more.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-8 print:hidden">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <LuceroLegalCTA variant="inline" />
          </div>
        </div>
      </section>
    </div>
  );
}
