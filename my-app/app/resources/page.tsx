"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  SearchIcon,
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  DownloadIcon,
  GlobeIcon,
  BriefcaseIcon,
  HomeIcon,
  HeartIcon,
  GraduationCapIcon,
  CoffeeIcon,
  DumbbellIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  MessageSquareIcon,
  ShieldAlertIcon,
  FileTextIcon,
  BuildingIcon,
  SmartphoneIcon,
  UsersIcon,
  AlertCircleIcon,
  ScaleIcon,
  DollarSignIcon,
  ArrowRightIcon
} from "@/components/ui/icon";

// --- DATA: Service Providers ---
const serviceProviders = {
  lawyers: [
    {
      name: "Lucero Legal",
      specialty: "Digital Nomad Visas, Residency, Citizenship",
      phone: "+54 11 1234-5678",
      address: "Av. Libertador 1234, Recoleta",
      website: "https://lucerolegal.com",
      rating: 5,
      reviews: 47,
      notes: "English-speaking, specializes in expat cases. Partner firm of this site.",
      verified: "2025-02",
    },
    {
      name: "Estudio Jurídico Pérez & Asoc.",
      specialty: "Business Setup, Corporate Law",
      phone: "+54 11 4567-8901",
      address: "Av. Corrientes 2345, Microcentro",
      website: "https://perezlegal.com.ar",
      rating: 4,
      reviews: 23,
      notes: "Good for company formation. Some English support.",
      verified: "2025-01",
    },
    {
      name: "Immigration BA",
      specialty: "Residency, Work Permits",
      phone: "+54 11 7890-1234",
      address: "Thames 567, Palermo Soho",
      website: "https://immigrationba.com",
      rating: 4,
      reviews: 31,
      notes: "Fast turnaround on residency applications. Cash only.",
      verified: "2025-02",
    },
  ],
  realEstate: [
    {
      name: "BA Expat Rentals",
      specialty: "Furnished apartments, No garantía",
      phone: "+54 11 2345-6789",
      address: "Honduras 4567, Palermo Hollywood",
      website: "https://baexpatrentals.com",
      rating: 5,
      reviews: 89,
      notes: "Specializes in helping foreigners rent without local guarantor. Speaks English.",
      verified: "2025-02",
    },
    {
      name: "Properati BA",
      specialty: "Long-term rentals",
      phone: "+54 11 8765-4321",
      address: "Av. Santa Fe 3456, Recoleta",
      website: "https://properati.com.ar",
      rating: 4,
      reviews: 156,
      notes: "Large database. Some agents speak English. Verify listings exist before visiting.",
      verified: "2025-01",
    },
    {
      name: "Rent in Buenos Aires",
      specialty: "Short & medium term",
      phone: "+54 11 3456-7890",
      address: "El Salvador 1234, Palermo Soho",
      website: "https://rentinbuenosaires.com",
      rating: 3,
      reviews: 42,
      notes: "Good for temporary stays. Prices negotiable for longer terms.",
      verified: "2024-12",
      warning: "Some listings may be outdated. Always confirm availability.",
    },
  ],
  accountants: [
    {
      name: "Contador Expat",
      specialty: "Foreign income, Tax residency",
      phone: "+54 11 5678-9012",
      address: "Av. Córdoba 4567, Retiro",
      website: "https://contadoreexpat.com.ar",
      rating: 5,
      reviews: 34,
      notes: "Specializes in expat tax situations. Explains things in English. Worth every peso.",
      verified: "2025-02",
    },
    {
      name: "Estudio Contable Martínez",
      specialty: "Freelancers, Monotributo",
      phone: "+54 11 9012-3456",
      address: "Av. Callao 789, Recoleta",
      website: "https://martinezcontable.com",
      rating: 4,
      reviews: 28,
      notes: "Good for setting up monotributo (simplified tax regime). Spanish only.",
      verified: "2025-01",
    },
  ],
  healthcare: [
    {
      name: "Hospital Alemán",
      specialty: "Full-service hospital",
      phone: "+54 11 4827-7000",
      address: "Av. Pueyrredón 1640, Recoleta",
      website: "https://hospitalaleman.org.ar",
      rating: 5,
      reviews: 203,
      notes: "Excellent English-speaking staff. Direct billing with most prepagas.",
      verified: "2025-02",
    },
    {
      name: "Hospital Italiano",
      specialty: "Full-service hospital",
      phone: "+54 11 4959-0200",
      address: "Gaspar Campos 1245, Caballito",
      website: "https://hospitalitaliano.org.ar",
      rating: 5,
      reviews: 178,
      notes: "Top-tier care. Many English-speaking doctors. Can be expensive without insurance.",
      verified: "2025-02",
    },
    {
      name: "Swiss Medical Center",
      specialty: "Private clinic",
      phone: "+54 11 5166-9500",
      address: "Av. Pueyrredón 1648, Recoleta",
      website: "https://swissmedical.com.ar",
      rating: 4,
      reviews: 145,
      notes: "Premium service. English-speaking staff. Requires Swiss Medical prepaga.",
      verified: "2025-01",
    },
  ],
  translators: [
    {
      name: "Traducciones Oficiales BA",
      specialty: "Certified translations, Legal docs",
      phone: "+54 11 2345-6789",
      address: "Av. de Mayo 1234, Monserrat",
      website: "https://traduccionesoficialesba.com",
      rating: 5,
      reviews: 67,
      notes: "Certified translator for court documents. Fast turnaround (24-48h).",
      verified: "2025-02",
    },
    {
      name: "Traductora Pública María González",
      specialty: "Birth certificates, Diplomas",
      phone: "+54 11 8765-4321",
      address: "Av. Belgrano 567, San Telmo",
      website: "mailto:mgonzalez@traductora.com.ar",
      rating: 4,
      reviews: 45,
      notes: "Good rates. Can handle apostille requirements. Email preferred.",
      verified: "2025-01",
    },
  ],
};

// --- DATA: Apps ---
const apps = {
  essential: [
    {
      name: "WhatsApp",
      category: "Communication",
      description: "Everyone uses this. Business, friends, landlords — it's the default.",
      download: { ios: "https://apps.apple.com/app/whatsapp-messenger/id310633997", android: "https://play.google.com/store/apps/details?id=com.whatsapp" },
      mustHave: true,
    },
    {
      name: "Google Translate",
      category: "Communication",
      description: "Download offline Spanish pack. Camera feature is a lifesaver for menus.",
      download: { ios: "https://apps.apple.com/app/google-translate/id414706506", android: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate" },
      mustHave: true,
    },
    {
      name: "Cabify",
      category: "Transport",
      description: "More reliable than Uber in BA. Better driver vetting.",
      download: { ios: "https://apps.apple.com/app/cabify/id476087442", android: "https://play.google.com/store/apps/details?id=com.cabify.rider" },
      mustHave: true,
    },
    {
      name: "SUBE",
      category: "Transport",
      description: "Official SUBE card app. Check balance and top up at select locations.",
      download: { ios: "https://apps.apple.com/app/sube/id1225028388", android: "https://play.google.com/store/apps/details?id=com.sube.app" },
      mustHave: true,
    },
  ],
  delivery: [
    {
      name: "Rappi",
      category: "Delivery",
      description: "Food, groceries, pharmacy — everything. Cash or card.",
      download: { ios: "https://apps.apple.com/app/rappi/id984044296", android: "https://play.google.com/store/apps/details?id=com.grability.rappi" },
      mustHave: true,
    },
    {
      name: "PedidosYa",
      category: "Delivery",
      description: "Stronger restaurant selection than Rappi in some neighborhoods.",
      download: { ios: "https://apps.apple.com/app/pedidosya/id490857177", android: "https://play.google.com/store/apps/details?id=com.pedidosya" },
      mustHave: false,
    },
    {
      name: "Mercado Libre",
      category: "Shopping",
      description: "Amazon of Argentina. Buy everything here.",
      download: { ios: "https://apps.apple.com/app/mercado-libre/id463624852", android: "https://play.google.com/store/apps/details?id=com.mercadolibre" },
      mustHave: true,
    },
  ],
  banking: [
    {
      name: "Wise",
      category: "Finance",
      description: "Best for receiving international transfers. Get a USD/ARS balance.",
      download: { ios: "https://apps.apple.com/app/wise/id612261027", android: "https://play.google.com/store/apps/details?id=com.transferwise.android" },
      mustHave: true,
    },
    {
      name: "DolarHoy",
      category: "Finance",
      description: "Track blue dollar rate in real-time. Essential for exchange timing.",
      download: { ios: "https://apps.apple.com/app/dolarhoy/id1459804391", android: "https://play.google.com/store/apps/details?id=com.dolarhoy.app" },
      mustHave: true,
    },
    {
      name: "Mercado Pago",
      category: "Finance",
      description: "QR code payments everywhere. The local Venmo + Apple Pay.",
      download: { ios: "https://apps.apple.com/app/mercado-pago/id490757049", android: "https://play.google.com/store/apps/details?id=com.mercadopago.wallet" },
      mustHave: true,
    },
    {
      name: "Naranja X",
      category: "Finance",
      description: "Popular local bank app. Good for locals, harder for foreigners to open.",
      download: { ios: "https://apps.apple.com/app/naranja-x/id1164409676", android: "https://play.google.com/store/apps/details?id=com.tarjetanaranja.nx" },
      mustHave: false,
    },
  ],
};

// --- DATA: Websites & Tools ---
const websites = {
  exchange: [
    {
      name: "DolarHoy.com",
      url: "https://dolarhoy.com",
      description: "Real-time blue dollar rates. The gold standard for exchange rate tracking.",
      notes: "Check before every exchange. Rates update throughout the day.",
    },
    {
      name: "Blue Dollar.net",
      url: "https://bluedollar.net",
      description: "Historical rates and trends. Good for understanding the bigger picture.",
      notes: "Useful for budgeting long-term stays.",
    },
  ],
  government: [
    {
      name: "Migraciones (RENAPER)",
      url: "https://migraciones.gov.ar",
      description: "Official immigration website. For visa applications and appointments.",
      notes: "Often slow. Use early morning for best results. Have patience.",
    },
    {
      name: "AFIP",
      url: "https://afip.gob.ar",
      description: "Tax authority. For getting CUIL/CUIT and tax matters.",
      notes: "You'll need a CUIL for many services. Apply early.",
    },
    {
      name: "BA 147",
      url: "https://buenosaires.gob.ar/147",
      description: "City government services and information line.",
      notes: "Call 147 for city-related questions. Spanish only.",
    },
  ],
  community: [
    {
      name: "BA Expats Facebook Group",
      url: "https://facebook.com/groups/baexpats",
      description: "30k+ members. Active community for questions and meetups.",
      notes: "Search before posting. Most questions have been answered.",
    },
    {
      name: "Reddit r/argentina",
      url: "https://reddit.com/r/argentina",
      description: "Local perspective on current events and culture.",
      notes: "Mostly in Spanish. Great for understanding local sentiment.",
    },
    {
      name: "Expat.com Argentina",
      url: "https://expat.com/en/destination/argentina",
      description: "Forums, events, and classifieds for expats.",
      notes: "Smaller community but very helpful.",
    },
  ],
  jobs: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      description: "Growing presence in Argentina. Best for professional roles.",
      notes: "Many remote positions available for Argentina-based workers.",
    },
    {
      name: "Bumeran",
      url: "https://bumeran.com.ar",
      description: "Local job board. Spanish required for most positions.",
      notes: "Good for understanding local salary ranges.",
    },
    {
      name: "We Work Remotely",
      url: "https://weworkremotely.com",
      description: "Remote jobs that pay in USD. Perfect for digital nomads.",
      notes: "Competition is fierce but quality is high.",
    },
  ],
  housing: [
    {
      name: "ZonaProp",
      url: "https://zonaprop.com.ar",
      description: "Largest property portal. Filter by neighborhood and price.",
      notes: "Many listings are outdated. Always call to confirm.",
    },
    {
      name: "Argenprop",
      url: "https://argenprop.com",
      description: "Alternative to ZonaProp. Sometimes has different listings.",
      notes: "Good for comparing prices.",
    },
    {
      name: "Airbnb",
      url: "https://airbnb.com",
      description: "For short-term stays. Negotiate for monthly discounts.",
      notes: "Message hosts about long-term rates (40-50% off is common).",
    },
  ],
};

// --- DATA: Emergency Contacts ---
const emergencyContacts = {
  general: [
    { name: "Emergency (Police, Fire, Medical)", number: "911", notes: "Works in Buenos Aires. English not guaranteed." },
    { name: "Tourist Police", number: "0800-999-5000", notes: "English-speaking officers. Specialized in helping tourists/expats." },
    { name: "Ambulance (SAME)", number: "107", notes: "Public ambulance service. Free." },
    { name: "Fire Department", number: "100", notes: "Bomberos. Also do rescue operations." },
  ],
  hospitals: [
    { name: "Hospital Alemán Emergency", address: "Av. Pueyrredón 1640, Recoleta", phone: "+54 11 4827-7000", notes: "English-speaking staff. 24/7 emergency room." },
    { name: "Hospital Italiano Emergency", address: "Gaspar Campos 1245, Caballito", phone: "+54 11 4959-0200", notes: "Top-tier emergency care. Accepts most insurance." },
    { name: "Hospital Británico Emergency", address: "Av. Santa Fe 2426, Recoleta", phone: "+54 11 4011-1000", notes: "English-speaking doctors. Private hospital." },
  ],
  pharmacies: [
    { name: "Farmacity (24h)", address: "Multiple locations", phone: "+54 11 4861-6021", notes: "Chain pharmacy. 24-hour locations marked on website." },
    { name: "Farmacia de Turno", address: "Varies by neighborhood", phone: "107", notes: "Call 107 to find the nearest 24-hour pharmacy." },
  ],
  embassies: [
    { name: "US Embassy", address: "Av. Colombia 4300, Palermo", phone: "+54 11 5777-4533", notes: "Consular services by appointment. Emergency line for citizens." },
    { name: "UK Embassy", address: "Dr. Luis Agote 2412, Recoleta", phone: "+54 11 4808-2200", notes: "Passport and consular services." },
    { name: "Canadian Embassy", address: "Tagle 2828, Recoleta", phone: "+54 11 4808-1000", notes: "By appointment only. Emergency assistance available." },
    { name: "Australian Embassy", address: "Villanueva 1400, Recoleta", phone: "+54 11 6117-4200", notes: "Limited hours. Check website before visiting." },
  ],
};

// --- DATA: Places ---
const places = {
  coworking: [
    { name: "WeWork Torre Bellini", address: "Esmeralda 950, Retiro", price: "$300-500/month", notes: "Reliable WiFi, international community. Expensive but professional." },
    { name: "La Maquinita Co", address: "Av. Córdoba 5272, Palermo", price: "$200-350/month", notes: "Great vibe, good coffee, strong WiFi. Popular with nomads." },
    { name: "AreaTres", address: "El Salvador 5218, Palermo Hollywood", price: "$250-400/month", notes: "Events and workshops. Good networking opportunities." },
    { name: "Globant Offices (for members)", address: "Multiple locations", price: "Varies", notes: "If you work for a company with Globant partnership." },
  ],
  gyms: [
    { name: "Megatlon", address: "Multiple locations", price: "$50-80/month", notes: "Premium gym chain. Pool and spa at some locations." },
    { name: "Sport Club", address: "Multiple locations", price: "$40-60/month", notes: "Good equipment, crowded after work." },
    { name: "Armenian Sports Club", address: "Armenia 1344, Palermo", price: "$30-50/month", notes: "Tennis, pool, gym. Historic club with character." },
    { name: "CrossFit Palermo", address: "Fitz Roy 1800, Palermo", price: "$60-100/month", notes: "English-speaking coaches. Strong community." },
  ],
  languageSchools: [
    { name: "Vamos Spanish Academy", address: "Av. Córdoba 1565, Centro", price: "$200-400/month", notes: "Popular with expats. Flexible scheduling. Group and private classes." },
    { name: "Expanish", address: "Santiago del Estero 453, San Telmo", price: "$250-500/month", notes: "Intensive courses. Visa assistance for student visas." },
    { name: "Academia Buenos Aires", address: "San Martín 439, Centro", price: "$180-350/month", notes: "Small groups. Cultural activities included." },
    { name: "ILEE (Instituto de Lengua Española)", address: "Av. Callao 200, Centro", price: "$150-300/month", notes: "More academic approach. Good for serious learners." },
  ],
  cafes: [
    { name: "LAB Tostadores", address: "Honduras 4146, Palermo", notes: "Best coffee in BA. Reliable WiFi. Laptop-friendly." },
    { name: "Ninina", address: "Gorriti 4738, Palermo", notes: "Great food, good WiFi, can get crowded." },
    { name: "Coffee Town", address: "Bolívar 976, San Telmo", notes: "Excellent coffee. Historic building. Limited seating." },
    { name: "The Shelter", address: "José Antonio Cabrera 3940, Palermo", notes: "Quiet, good for focused work. Healthy food options." },
  ],
  grocery: [
    { name: "Día", locations: "Every neighborhood", notes: "Budget option. Limited selection but cheapest prices." },
    { name: "Carrefour", locations: "Major neighborhoods", notes: "Mid-range. Good selection. Regular sales." },
    { name: "Jumbo", locations: "Palermo, Belgrano, Recoleta", notes: "Premium option. Imported goods. Higher prices." },
    { name: "El Galpón", address: "Chacabuco 954, San Telmo", notes: "Organic/local produce. Co-op style. Good for veggies." },
    { name: "Mercado de Belgrano", address: "Juramento 2527, Belgrano", notes: "Fresh produce market. Best prices on fruits/vegetables." },
  ],
};

// --- DATA: Documents ---
const documents = [
  {
    title: "Moving to Argentina Checklist",
    description: "Complete timeline from 3 months before to your first month here.",
    type: "PDF",
    size: "245 KB",
    downloadUrl: "/downloads/moving-checklist.pdf",
  },
  {
    title: "Visa Application Document List",
    description: "Every document you need for Digital Nomad, Rentista, and Pensionado visas.",
    type: "PDF",
    size: "180 KB",
    downloadUrl: "/downloads/visa-documents.pdf",
  },
  {
    title: "Apartment Hunting Checklist",
    description: "Questions to ask, red flags to watch for, and what to check before signing.",
    type: "PDF",
    size: "156 KB",
    downloadUrl: "/downloads/apartment-checklist.pdf",
  },
  {
    title: "Monthly Budget Spreadsheet",
    description: "Template for tracking expenses in both USD and ARS.",
    type: "XLSX",
    size: "45 KB",
    downloadUrl: "/downloads/budget-template.xlsx",
  },
  {
    title: "Common Spanish Phrases for Expats",
    description: "Essential phrases for apartments, immigration, and daily life.",
    type: "PDF",
    size: "320 KB",
    downloadUrl: "/downloads/spanish-phrases.pdf",
  },
  {
    title: "Contract Review Checklist",
    description: "Key clauses to look for in rental and service contracts.",
    type: "PDF",
    size: "128 KB",
    downloadUrl: "/downloads/contract-checklist.pdf",
  },
];

// --- COMPONENTS ---

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          size="sm"
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function ProviderCard({ provider }: { provider: any }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{provider.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{provider.specialty}</p>
          </div>
          {provider.rating && (
            <div className="flex items-center gap-1 text-sm">
              <StarRating rating={provider.rating} />
              <span className="text-muted-foreground">({provider.reviews})</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {provider.warning && (
          <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <AlertTriangleIcon size="sm" className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-200">{provider.warning}</p>
          </div>
        )}
        <div className="space-y-2 text-sm">
          {provider.phone && (
            <div className="flex items-center gap-2">
              <PhoneIcon size="sm" className="text-muted-foreground" />
              <a href={`tel:${provider.phone}`} className="hover:underline">{provider.phone}</a>
            </div>
          )}
          {provider.address && (
            <div className="flex items-center gap-2">
              <MapPinIcon size="sm" className="text-muted-foreground" />
              <span>{provider.address}</span>
            </div>
          )}
          {provider.website && (
            <div className="flex items-center gap-2">
              <GlobeIcon size="sm" className="text-muted-foreground" />
              <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                Website <ExternalLinkIcon size="sm" />
              </a>
            </div>
          )}
        </div>
        {provider.notes && (
          <p className="text-sm text-muted-foreground border-t pt-3">{provider.notes}</p>
        )}
        {provider.verified && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <CheckCircleIcon size="sm" className="text-green-500" />
            Verified {provider.verified}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function AppCard({ app }: { app: any }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{app.name}</CardTitle>
              {app.mustHave && (
                <Badge variant="default" className="text-xs">Must-Have</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{app.category}</p>
          </div>
          <SmartphoneIcon size="md" className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{app.description}</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={app.download.ios} target="_blank" rel="noopener noreferrer">
              App Store
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={app.download.android} target="_blank" rel="noopener noreferrer">
              Play Store
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function WebsiteCard({ site }: { site: any }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{site.name}</CardTitle>
          <GlobeIcon size="md" className="text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{site.description}</p>
        <Button variant="outline" size="sm" asChild className="w-full">
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
            Visit Site <ExternalLinkIcon size="sm" />
          </a>
        </Button>
        {site.notes && (
          <p className="text-sm text-muted-foreground border-t pt-3">{site.notes}</p>
        )}
      </CardContent>
    </Card>
  );
}

function EmergencyCard({ contact }: { contact: any }) {
  return (
    <Card className="h-full border-red-200 dark:border-red-800">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{contact.name}</CardTitle>
          {contact.number === "911" ? (
            <ShieldAlertIcon size="md" className="text-red-500" />
          ) : (
            <PhoneIcon size="md" className="text-muted-foreground" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {contact.number && (
          <div className="flex items-center gap-2">
            <PhoneIcon size="sm" className="text-muted-foreground" />
            <a href={`tel:${contact.number}`} className="text-lg font-semibold text-primary hover:underline">
              {contact.number}
            </a>
          </div>
        )}
        {contact.address && (
          <div className="flex items-start gap-2">
            <MapPinIcon size="sm" className="text-muted-foreground flex-shrink-0 mt-0.5" />
            <span className="text-sm">{contact.address}</span>
          </div>
        )}
        {contact.phone && contact.number !== contact.phone && (
          <div className="flex items-center gap-2">
            <PhoneIcon size="sm" className="text-muted-foreground" />
            <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
          </div>
        )}
        {contact.notes && (
          <p className="text-sm text-muted-foreground border-t pt-3">{contact.notes}</p>
        )}
      </CardContent>
    </Card>
  );
}

function PlaceCard({ place }: { place: any }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{place.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {place.address && (
          <div className="flex items-start gap-2">
            <MapPinIcon size="sm" className="text-muted-foreground flex-shrink-0 mt-0.5" />
            <span className="text-sm">{place.address}</span>
          </div>
        )}
        {place.locations && (
          <div className="flex items-start gap-2">
            <MapPinIcon size="sm" className="text-muted-foreground flex-shrink-0 mt-0.5" />
            <span className="text-sm">{place.locations}</span>
          </div>
        )}
        {place.price && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-green-600">{place.price}</span>
          </div>
        )}
        {place.notes && (
          <p className="text-sm text-muted-foreground border-t pt-2 mt-2">{place.notes}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Resources</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BriefcaseIcon size="sm" className="mr-1" />
              The Expat Phone Book
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources Directory
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The phone numbers, apps, websites, and contacts you actually need. 
              Everything verified and updated regularly.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <SearchIcon size="md" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="providers" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto justify-start gap-2 mb-8">
              <TabsTrigger value="providers" className="flex items-center gap-1">
                <BriefcaseIcon size="sm" />
                Service Providers
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-1">
                <SmartphoneIcon size="sm" />
                Apps
              </TabsTrigger>
              <TabsTrigger value="websites" className="flex items-center gap-1">
                <GlobeIcon size="sm" />
                Websites
              </TabsTrigger>
              <TabsTrigger value="emergency" className="flex items-center gap-1">
                <ShieldAlertIcon size="sm" />
                Emergency
              </TabsTrigger>
              <TabsTrigger value="places" className="flex items-center gap-1">
                <MapPinIcon size="sm" />
                Places
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-1">
                <FileTextIcon size="sm" />
                Downloads
              </TabsTrigger>
            </TabsList>

            {/* Service Providers Tab */}
            <TabsContent value="providers" className="space-y-8">
              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <AlertCircleIcon size="md" className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>About these listings:</strong> All providers have been personally verified or come highly recommended by the expat community. 
                    Ratings are based on community feedback. Last verified dates shown on each card.
                  </p>
                </div>
              </div>

              <Accordion type="multiple" defaultValue={["lawyers"]} className="space-y-4">
                <AccordionItem value="lawyers" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <ScaleIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Immigration Lawyers</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {serviceProviders.lawyers.map((provider) => (
                        <ProviderCard key={provider.name} provider={provider} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="realestate" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <HomeIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Real Estate Agents</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {serviceProviders.realEstate.map((provider) => (
                        <ProviderCard key={provider.name} provider={provider} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accountants" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <BriefcaseIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Accountants</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {serviceProviders.accountants.map((provider) => (
                        <ProviderCard key={provider.name} provider={provider} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="healthcare" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <HeartIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Healthcare Providers</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {serviceProviders.healthcare.map((provider) => (
                        <ProviderCard key={provider.name} provider={provider} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="translators" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <MessageSquareIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Translators & Certifiers</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {serviceProviders.translators.map((provider) => (
                        <ProviderCard key={provider.name} provider={provider} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Apps Tab */}
            <TabsContent value="apps" className="space-y-8">
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircleIcon size="md" className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Pro tip:</strong> Download these before you arrive. Set up Wise and verify your account 
                    while you still have easy access to your home bank.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <StarIcon size="md" className="text-yellow-500" />
                    Essential Apps (Download First)
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {apps.essential.map((app) => (
                      <AppCard key={app.name} app={app} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <ShoppingCartIcon size="md" className="text-primary" />
                    Delivery & Shopping
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {apps.delivery.map((app) => (
                      <AppCard key={app.name} app={app} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CreditCardIcon size="md" className="text-primary" />
                    Banking & Finance
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {apps.banking.map((app) => (
                      <AppCard key={app.name} app={app} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Websites Tab */}
            <TabsContent value="websites" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSignIcon size="md" className="text-green-600" />
                    Exchange Rate Trackers
                  </h3>
                  <div className="space-y-4">
                    {websites.exchange.map((site) => (
                      <WebsiteCard key={site.name} site={site} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BuildingIcon size="md" className="text-blue-600" />
                    Government Sites
                  </h3>
                  <div className="space-y-4">
                    {websites.government.map((site) => (
                      <WebsiteCard key={site.name} site={site} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <UsersIcon size="md" className="text-purple-600" />
                    Expat Communities
                  </h3>
                  <div className="space-y-4">
                    {websites.community.map((site) => (
                      <WebsiteCard key={site.name} site={site} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BriefcaseIcon size="md" className="text-orange-600" />
                    Job Boards
                  </h3>
                  <div className="space-y-4">
                    {websites.jobs.map((site) => (
                      <WebsiteCard key={site.name} site={site} />
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <HomeIcon size="md" className="text-red-600" />
                    Apartment Hunting
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {websites.housing.map((site) => (
                      <WebsiteCard key={site.name} site={site} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Emergency Tab */}
            <TabsContent value="emergency" className="space-y-8">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-3">
                  <ShieldAlertIcon size="lg" className="text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-1">Emergency Numbers</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Save these numbers in your phone now. 911 works in Buenos Aires but English is not guaranteed. 
                      Tourist Police (0800-999-5000) has English-speaking officers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {emergencyContacts.general.map((contact) => (
                  <EmergencyCard key={contact.name} contact={contact} />
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Hospitals with English Speakers</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {emergencyContacts.hospitals.map((contact) => (
                    <EmergencyCard key={contact.name} contact={contact} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">24-Hour Pharmacies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyContacts.pharmacies.map((contact) => (
                    <EmergencyCard key={contact.name} contact={contact} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Embassy Contacts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyContacts.embassies.map((contact) => (
                    <EmergencyCard key={contact.name} contact={contact} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Places Tab */}
            <TabsContent value="places" className="space-y-8">
              <Accordion type="multiple" defaultValue={["coworking"]} className="space-y-4">
                <AccordionItem value="coworking" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <BuildingIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Coworking Spaces</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {places.coworking.map((place) => (
                        <PlaceCard key={place.name} place={place} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gyms" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <DumbbellIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Gyms</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {places.gyms.map((place) => (
                        <PlaceCard key={place.name} place={place} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="language" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <GraduationCapIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Language Schools</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {places.languageSchools.map((place) => (
                        <PlaceCard key={place.name} place={place} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cafes" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <CoffeeIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Laptop-Friendly Cafes</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {places.cafes.map((place) => (
                        <PlaceCard key={place.name} place={place} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="grocery" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <ShoppingCartIcon size="md" className="text-primary" />
                      <span className="text-lg font-semibold">Grocery Shopping</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {places.grocery.map((place) => (
                        <PlaceCard key={place.name} place={place} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-8">
              <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <DownloadIcon size="md" className="text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>Free Downloads:</strong> These templates and checklists are based on real experiences. 
                    Updated regularly as processes change.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc) => (
                  <Card key={doc.title} className="h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <FileTextIcon size="md" className="text-muted-foreground" />
                      </div>
                      <CardDescription>{doc.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary">{doc.type}</Badge>
                        <span>{doc.size}</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={doc.downloadUrl}>
                          <DownloadIcon size="sm" className="mr-2" />
                          Download
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Have a resource to add?</h3>
                <p className="text-muted-foreground mb-4">
                  This directory is only as good as the community that contributes to it. 
                  If you've found a great service provider, app, or resource that's missing, let us know.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Submit a Resource</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/80 mb-8">
              Resources change — businesses close, phone numbers change, new apps launch. 
              Subscribe to get notified when this directory is updated.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/newsletter">
                Subscribe to Updates
                <ArrowRightIcon size="sm" className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
