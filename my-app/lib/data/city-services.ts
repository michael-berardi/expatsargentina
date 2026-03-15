// ============================================================================
// PSEO Data: City Services Matrix
// Services available in each city for expats
// ============================================================================

import { applyFactOverridesBySlug } from "../source-of-truth-sync";
import { cityServicesFactOverrides } from "../../content-sync/generated/source-of-truth-fact-overrides";

export interface CityService {
  slug: string;
  name: string;
  category: "immigration" | "banking" | "healthcare" | "housing" | "community" | "education" | "business";
  description: string;
  whatToExpect: string;
  topProviders: { name: string; address?: string; notes?: string }[];
  tips: string[];
  costs?: string;
  documentsNeeded: string[];
  faqs: { q: string; a: string }[];
}

export const cityServicesBase: CityService[] = [
  // IMMIGRATION SERVICES
  {
    slug: "immigration-offices",
    name: "Immigration Offices (Migraciones)",
    category: "immigration",
    description: "Dirección Nacional de Migraciones (DNM) offices where expats process visa applications, residency permits, and other immigration paperwork. Updated for 2026 procedures including Decreto 366/2025 reforms.",
    whatToExpect: "Immigration offices can be busy with long wait times. Appointments through the RADEX online system are strongly recommended. The 2025 immigration reforms (Decreto 366/2025) streamlined processing — citizenship now achievable in 2 years of continuous legal residence. Bring all required documentation, certified Spanish translations, and multiple copies.",
    topProviders: [
      { name: "DNM Central Office", address: "Av. Antártida Argentina 1355, C1104ACA CABA", notes: "Main office for all immigration matters — largest, busiest" },
      { name: "DNM Retiro", address: "Near Retiro bus terminal", notes: "Satellite office, sometimes less crowded" },
      { name: "RENAPER", address: "Multiple locations across BA", notes: "For DNI (national ID) processing after residency approval" },
      { name: "Migraciones Online", address: "migraciones.gov.ar", notes: "Digital Nomad Visa and many applications now fully online" }
    ],
    tips: [
      "Book appointments through RADEX system (radex.migraciones.gov.ar) — walk-ins accepted but expect 3-4 hour waits",
      "Arrive 30 minutes early even with an appointment — security screening and queue",
      "Bring original documents + 2 photocopies of everything",
      "All foreign documents must be apostilled and translated by a Traductor Público (sworn translator)",
      "Spanish proficiency helps significantly — bring a Spanish-speaking friend or hire a gestor ($50-200)",
      "Digital Nomad Visa can be applied for entirely online through migraciones.gov.ar",
      "The precaria (temporary authorization) you receive during processing is legally valid for work and travel within Argentina",
      "Decreto 366/2025 reduced citizenship timeline to 2 years of continuous legal residence"
    ],
    costs: "DN Visa: $117 USD | Temporary Residency: $200-400 USD | Gestor/attorney: $50-200 per visit | Sworn translations: $30-80 per document",
    documentsNeeded: [
      "Valid passport (6+ months remaining)",
      "Residency application forms (downloaded from migraciones.gov.ar or filled on-site)",
      "Birth certificate — apostilled with certified Spanish translation",
      "Criminal background check — apostilled with certified Spanish translation (from country of origin + any country lived 1+ year)",
      "Proof of address in Argentina (rental contract, utility bill, or accommodation booking)",
      "Proof of financial means (bank statements, income documentation, or employment contract)",
      "Health insurance valid in Argentina (private prepaga recommended: $50-300 USD/month)",
      "2x passport photos (4x4 cm, white background)"
    ],
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "Strongly recommended. Book through the RADEX system at radex.migraciones.gov.ar. Digital Nomad Visa applications are now fully online. Walk-ins are accepted for some services but expect 3-4 hour waits. Appointment availability varies — book 2-3 weeks in advance."
      },
      {
        q: "How long does the process take?",
        a: "Digital Nomad Visa: 2-4 weeks (online application). Temporary Residency: 60-90 days. Permanent Residency: 90-120 days. You'll receive a 'precaria' (temporary authorization document) immediately upon filing, which allows you to stay and work legally while your application processes. Citizenship eligibility: 2 years of continuous legal residence (Decreto 366/2025)."
      },
      {
        q: "What changed with the 2025 immigration reforms?",
        a: "Decreto 366/2025 reduced the citizenship timeline from 3+ years to 2 years of continuous legal residence. It also streamlined digital processing for several visa categories and clarified the Digital Nomad Visa framework. Separately, Decreto 524/2025 introduced a Citizenship by Investment pathway ($500,000 USD) for qualifying investors."
      }
    ]
  },

  {
    slug: "banking",
    name: "Banking & Financial Services",
    category: "banking",
    description: "Opening bank accounts, accessing financial services, and managing money as an expat in Argentina.",
    whatToExpect: "Traditional banks require DNI and proof of address. Fintech apps (Ualá, Mercado Pago, Brubank) available immediately with just a passport. Banking hours typically 10am-3pm weekdays. As of 2026, the blue dollar gap has converged to 5-10% of the official rate, simplifying currency exchange significantly.",
    topProviders: [
      { name: "Banco Galicia", notes: "Large network, expat-friendly, English support available" },
      { name: "Banco Santander Río", notes: "International connections, operates in 10+ countries" },
      { name: "BBVA Argentina", notes: "Strong digital platform, international transfers" },
      { name: "Ualá", notes: "Fintech — open with passport only, Mastercard debit, instant" },
      { name: "Mercado Pago", notes: "Argentina's dominant digital wallet, QR payments everywhere" },
      { name: "Brubank", notes: "Digital bank — free USD account, competitive exchange rates" },
      { name: "Naranja X", notes: "Digital bank, easy signup, cashback rewards" },
      { name: "Wise", notes: "International transfers — best rates for USD/EUR to ARS conversion" }
    ],
    tips: [
      "Start with fintech apps (Ualá, Brubank, Mercado Pago) immediately — passport is enough",
      "Wise is the best option for receiving international payments and converting to ARS",
      "The blue dollar gap has converged to 5-10% (2026) — official channels are now reasonable",
      "Crypto banking law (April 2026) enables regulated stablecoin (USDT/USDC) transactions",
      "Open a Brubank account for a free USD sub-account within Argentina",
      "Mercado Pago QR codes accepted at 90%+ of Buenos Aires businesses",
      "Multiple accounts recommended — fintech for daily spending, traditional bank for large transactions"
    ],
    costs: "Most fintech accounts free; traditional banks $2-10 USD/month. Wise transfer fees ~0.5-1.5%",
    documentsNeeded: [
      "Passport (sufficient for fintech apps — Ualá, Brubank, Mercado Pago)",
      "DNI (required for traditional banks — Galicia, Santander, BBVA)",
      "Proof of address (utility bill or rental contract — for traditional banks)",
      "CUIT/CUIL number (obtainable at ANSES or online — needed for formal employment)"
    ],
    faqs: [
      {
        q: "Can I open an account without DNI?",
        a: "Yes — fintech apps like Ualá, Brubank, Mercado Pago, and Naranja X accept passport registration immediately upon arrival. You get a debit card and can make QR payments. Traditional banks (Galicia, Santander, BBVA) require DNI, which you receive after temporary residency approval."
      },
      {
        q: "How do I exchange money in 2026?",
        a: "The blue dollar gap has converged to 5-10% of the official rate, making exchange much simpler than before. Best options: 1) Wise for international transfers (best rates, 0.5-1.5% fee), 2) Brubank for USD-ARS conversion within Argentina, 3) Western Union for cash pickup at favorable rates, 4) Crypto exchanges (Lemon Cash, Belo) for stablecoin conversion. The April 2026 crypto banking law enables regulated stablecoin transactions through traditional banks."
      },
      {
        q: "What about receiving freelance payments?",
        a: "For Digital Nomad Visa holders: Wise is the most popular option — clients pay to your Wise USD account, you convert to ARS at market rates. Payoneer and PayPal also work but with higher fees. Crypto (USDT/USDC via Lemon Cash or Belo) is increasingly common. For Argentine-registered freelancers (monotributo), you can receive payments through traditional bank accounts and must declare income to ARCA."
      }
    ]
  },

  {
    slug: "healthcare",
    name: "Healthcare & Medical Services",
    category: "healthcare",
    description: "Hospitals, clinics, doctors, and health insurance options for expats.",
    whatToExpect: "Public healthcare is free but crowded. Private healthcare (prepaga) offers faster service. Many doctors speak English in expat areas.",
    topProviders: [
      { name: "Hospital Alemán", address: "Av. Pueyrredón 1640, Buenos Aires", notes: "Private hospital, excellent care" },
      { name: "Hospital Británico", address: "Av. Montes de Oca 40, Buenos Aires", notes: "English-speaking staff available" },
      { name: "Swiss Medical", notes: "Premium health insurance network" },
      { name: "OSDE", notes: "Top-tier health insurance" },
      { name: "Hospital de Clínicas", notes: "Public hospital, free care" }
    ],
    tips: [
      "Get health insurance (prepaga) for private care",
      "Bring medical records translated to Spanish",
      "Many medications available without prescription",
      "Public hospitals free but expect long waits",
      "Emergency number: 107 for medical emergencies"
    ],
    costs: "Public: Free | Private insurance: $100-400 USD/month | Consultations: $30-100 USD",
    documentsNeeded: [
      "DNI or passport",
      "Health insurance card (if private)",
      "Medical history (recommended)"
    ],
    faqs: [
      {
        q: "Do I need health insurance?",
        a: "Not legally required but highly recommended. Public healthcare is free but crowded. Private insurance gives access to better facilities and shorter waits."
      },
      {
        q: "Are English-speaking doctors available?",
        a: "Yes, especially in private hospitals in Buenos Aires (Hospital Alemán, Hospital Británico). Less common in public hospitals and smaller cities."
      }
    ]
  },

  {
    slug: "housing",
    name: "Housing & Real Estate",
    category: "housing",
    description: "Finding apartments, rental agencies, and real estate services for expats in Argentina's evolving rental market.",
    whatToExpect: "Argentina's rental market has changed significantly. The 2023 deregulation (DNU 70/2023) eliminated rent controls, allowing freely negotiated terms between landlord and tenant. Contracts can be in USD or pesos, with duration and adjustment frequency freely agreed. Guarantor (garantía) is often required — expats use seguro de caución instead. Buenos Aires has a large furnished temporary rental market popular with digital nomads.",
    topProviders: [
      { name: "ZonaProp", notes: "Largest rental portal — filter by 'alquiler temporal' for furnished short-term" },
      { name: "Argenprop", notes: "Major real estate portal with English filters" },
      { name: "Properati", notes: "Property search engine with map view" },
      { name: "Mercado Libre (Inmuebles)", notes: "Classified listings, often owner-direct" },
      { name: "Airbnb", notes: "Short-term furnished rentals — popular for first 1-3 months while searching" },
      { name: "Compartamos BA", notes: "Shared housing / roommate platform" },
      { name: "BA Flats / Oasis Collections", notes: "Furnished apartments for expats (premium)" }
    ],
    tips: [
      "Use seguro de caución ($80-150/month) instead of garantía if you don't have a local guarantor",
      "Since DNU 70/2023 deregulation, contract terms (duration, currency, adjustments) are freely negotiable",
      "Start with Airbnb or furnished temporary rental for 1-2 months while you search for long-term",
      "Budget apartments: $500-700 for 1BR in Almagro/Caballito. Premium: $800-1,200 for 1BR in Palermo/Recoleta",
      "Always visit in person — photos are often outdated or misleading",
      "Ask about expensas (building maintenance fees) — they can add $50-150/month on top of rent",
      "Facebook group 'Expats Buenos Aires Housing' is active for direct-from-owner listings"
    ],
    costs: "Studio: $400-700 | 1BR: $500-1,000 | 2BR: $700-1,500 (Palermo/Recoleta premium: add 20-40%)",
    documentsNeeded: [
      "DNI or passport (passport accepted for temporary/furnished rentals)",
      "Proof of income (bank statements, employment letter, or freelance contracts)",
      "Seguro de caución or garantía propietaria (for long-term unfurnished contracts)",
      "First month rent + 1 month deposit (typical for furnished temporaries)"
    ],
    faqs: [
      {
        q: "What is a garantía and how do expats handle it?",
        a: "A garantía is a property owner in the same jurisdiction who guarantees your rent — similar to a co-signer. Expats rarely have this. Instead, use 'seguro de caución' (surety insurance) from companies like Finaer, Garantía Total, or Porto Seguros. It costs roughly 1-1.5 months' rent annually. Some landlords also accept a larger deposit (2-3 months) in lieu of garantía."
      },
      {
        q: "How did the 2023 rental deregulation change things?",
        a: "DNU 70/2023 eliminated the previous Ley de Alquileres restrictions. Now: contract duration is freely negotiable (previously mandated 3 years), currency can be USD or pesos (previously only pesos), and adjustment frequency/index are freely agreed between parties. This has increased rental supply in Buenos Aires and given both landlords and tenants more flexibility. Most long-term contracts are now 1-2 years with quarterly or semi-annual adjustments."
      },
      {
        q: "Should I rent furnished or unfurnished?",
        a: "For stays under 12 months, furnished temporary rentals (alquiler temporal) are the easiest — no garantía needed, shorter commitments, all-inclusive pricing. For 12+ months, unfurnished long-term contracts offer better monthly rates but require garantía/seguro de caución and a more formal process. Many expats start furnished for 1-3 months and switch to long-term once they know their preferred neighborhood."
      }
    ]
  },

  {
    slug: "expat-community",
    name: "Expat Communities & Networking",
    category: "community",
    description: "Facebook groups, meetups, clubs, and community organizations for expats.",
    whatToExpect: "Active expat communities in Buenos Aires, smaller but present in other cities. Facebook groups are the main hub for connections and advice.",
    topProviders: [
      { name: "Expats in Buenos Aires (Facebook)", notes: "60,000+ members, very active" },
      { name: "Americans in Argentina (Facebook)", notes: "US-specific community" },
      { name: "InterNations Buenos Aires", notes: "Monthly networking events" },
      { name: "Mundo Lingo", notes: "Language exchange meetups" },
      { name: "BA Entrepreneurs", notes: "Business networking" }
    ],
    tips: [
      "Join Facebook groups before arriving",
      "Attend InterNations events for networking",
      "Language exchanges great for meeting people",
      "Coworking spaces offer community",
      "Nationality-specific groups available"
    ],
    costs: "Most groups free; InterNations events $10-20 USD",
    documentsNeeded: [],
    faqs: [
      {
        q: "How do I meet other expats?",
        a: "Facebook groups, InterNations events, language exchanges at bars, coworking spaces, and sports clubs."
      },
      {
        q: "Are there communities outside Buenos Aires?",
        a: "Yes, smaller communities in Córdoba, Mendoza, and Bariloche. Facebook is still the best way to connect."
      }
    ]
  },

  {
    slug: "language-schools",
    name: "Spanish Language Schools",
    category: "education",
    description: "Language schools, tutors, and immersion programs for learning Spanish.",
    whatToExpect: "Group classes, private lessons, and immersion programs available. Prices significantly lower than US/Europe. Argentine Spanish (voseo) is distinct.",
    topProviders: [
      { name: "Expanish", address: "Palermo", notes: "Popular with expats, intensive programs" },
      { name: "Vamos Spanish Academy", address: "San Telmo", notes: "Small groups, relaxed atmosphere" },
      { name: "InterBA", address: "Belgrano", notes: "Flexible programs" },
      { name: "Academia Buenos Aires", notes: "Established school" }
    ],
    tips: [
      "Intensive courses (20hrs/week) best for rapid learning",
      "Group classes more affordable and social",
      "Private tutors $10-20 USD/hour",
      "Learn 'voseo' (Argentine 'vos' form)",
      "Combine classes with language exchanges"
    ],
    costs: "Group classes: $150-300 USD/week | Private: $15-25 USD/hour",
    documentsNeeded: [
      "Passport (for enrollment)"
    ],
    faqs: [
      {
        q: "How long to become conversational?",
        a: "With intensive study (20hrs/week), most reach conversational level in 3-6 months. Full fluency takes 1-2 years."
      },
      {
        q: "Is Argentine Spanish different?",
        a: "Yes, Argentines use 'vos' instead of 'tú', have distinct pronunciation (ll/y sounds like 'sh'), and unique vocabulary. You'll be understood throughout Latin America."
      }
    ]
  },

  {
    slug: "coworking",
    name: "Coworking Spaces",
    category: "business",
    description: "Shared offices, coworking spaces, and business centers for remote workers.",
    whatToExpect: "Buenos Aires has excellent coworking infrastructure. Monthly memberships, day passes, and dedicated desks available. Good internet and networking opportunities.",
    topProviders: [
      { name: "WeWork", address: "Multiple locations", notes: "Global brand, reliable" },
      { name: "AreaTres", address: "Palermo Hollywood", notes: "Popular with startups" },
      { name: "La Maquinita", address: "Multiple locations", notes: "Local chain, affordable" },
      { name: "CoWork LatAm", address: "Various", notes: "Budget-friendly" },
      { name: "Urban Station", notes: "Multiple locations" }
    ],
    tips: [
      "Day passes ($10-20) to test spaces",
      "Monthly memberships $100-300 USD",
      "Check internet speed before committing",
      "Evening/weekend access varies",
      "Many offer free coffee and meeting rooms"
    ],
    costs: "Day pass: $10-20 | Monthly hot desk: $100-200 | Dedicated desk: $200-350",
    documentsNeeded: [
      "ID (passport acceptable)",
      "Payment method"
    ],
    faqs: [
      {
        q: "Do I need to sign a contract?",
        a: "Monthly memberships typically month-to-month. Discounts for longer commitments."
      },
      {
        q: "Is the internet reliable?",
        a: "Generally yes in coworking spaces. Most have fiber optic with backup. Test during your visit."
      }
    ]
  },

  {
    slug: "accountants",
    name: "Accountants & Tax Advisors",
    category: "business",
    description: "English-speaking accountants for expat tax planning and compliance.",
    whatToExpect: "Important for navigating Argentine tax system, especially for remote workers and business owners. Many specialize in expat situations.",
    topProviders: [
      { name: "Estudio Contable Expat", notes: "Specializes in expat taxes" },
      { name: "Consultora Internacional", notes: "Cross-border tax planning" },
      { name: "Contador Digital", notes: "Modern, digital-first approach" }
    ],
    tips: [
      "Find accountant familiar with your home country's tax treaties",
      "Essential for digital nomads and business owners",
      "Get CUIT/Tax ID sorted early",
      "Monthly accounting services $50-150 USD",
      "Ask about monotributo vs general tax regime"
    ],
    costs: "Initial consultation: $50-100 | Monthly services: $50-200 | Annual tax filing: $200-500",
    documentsNeeded: [
      "CUIT/CUIL",
      "Bank statements",
      "Income documentation",
      "Previous tax returns (helpful)"
    ],
    faqs: [
      {
        q: "Do I need an accountant?",
        a: "Highly recommended if working remotely, running a business, or staying long-term. Argentine tax system is complex."
      },
      {
        q: "What is monotributo?",
        a: "Simplified tax regime for small earners. Fixed monthly payment covers taxes and social security. Ask your accountant if you qualify."
      }
    ]
  },

  {
    slug: "grocery-stores",
    name: "Grocery Stores & International Foods",
    category: "community",
    description: "Supermarkets, international food stores, and specialty shops for expats.",
    whatToExpect: "Major chains have most essentials. Specialty stores for Asian, Middle Eastern, and other international foods. Barrio Chino (Chinatown) has diverse options.",
    topProviders: [
      { name: "Carrefour", notes: "Large French chain, widespread" },
      { name: "Coto", notes: "Local chain, good prices" },
      { name: "Disco", notes: "Premium products" },
      { name: "Jumbo", notes: "Hypermarket format" },
      { name: "Barrio Chino", address: "Belgrano", notes: "Asian groceries and products" },
      { name: "Mercado de Belgrano", notes: "Fresh produce market" }
    ],
    tips: [
      "Barrio Chino for Asian ingredients",
      "Once neighborhood for Middle Eastern foods",
      "Mercado San Telmo for fresh produce",
      "Imported products expensive - buy local",
      "Delivery apps: Rappi, PedidosYa"
    ],
    costs: "Weekly groceries: $80-150 USD per person",
    documentsNeeded: [],
    faqs: [
      {
        q: "Can I find international foods?",
        a: "Yes, Barrio Chino (Belgrano) has Asian products. Once has Middle Eastern. Some American/European products at Carrefour and specialty stores."
      },
      {
        q: "Is food delivery available?",
        a: "Yes, Rappi and PedidosYa deliver groceries from supermarkets and specialty stores. Very popular and convenient."
      }
    ]
  },

  {
    slug: "gym-fitness",
    name: "Gyms & Fitness Centers",
    category: "community",
    description: "Gyms, fitness centers, and sports clubs for expats.",
    whatToExpect: "Good gym infrastructure in major cities. Various options from budget to premium. Many offer classes and personal training.",
    topProviders: [
      { name: "Megatlon", notes: "Premium chain, multiple locations" },
      { name: "Sport Club", notes: "Full-service clubs with pools" },
      { name: " crunch", notes: "Budget-friendly option" },
      { name: "Armenio Club", notes: "Community sports club" },
      { name: "CrossFit boxes", notes: "Various locations" }
    ],
    tips: [
      "Ask about expat discounts",
      "Month-to-month often available",
      "Peak hours: 6-9pm weekdays",
      "Many include classes in membership",
      "Outdoor running popular in parks"
    ],
    costs: "Budget: $30-50/month | Mid-range: $60-100/month | Premium: $100-200/month",
    documentsNeeded: [
      "ID (passport acceptable)",
      "Medical clearance (sometimes required)"
    ],
    faqs: [
      {
        q: "Do I need a long-term contract?",
        a: "Many gyms offer month-to-month, especially for foreigners. Ask about flexibility."
      },
      {
        q: "Are there English-speaking trainers?",
        a: "At premium gyms in expat areas (Palermo, Recoleta), yes. Less common at budget options."
      }
    ]
  }
];

export const cityServices = applyFactOverridesBySlug(cityServicesBase, cityServicesFactOverrides);

// Helper functions
export function getServiceBySlug(slug: string): CityService | undefined {
  return cityServices.find(s => s.slug === slug);
}

export function getServicesByCategory(category: CityService["category"]): CityService[] {
  return cityServices.filter(s => s.category === category);
}

export function getAllServiceCategories(): { slug: string; name: string; count: number }[] {
  const categories: Record<string, string> = {
    "immigration": "Immigration",
    "banking": "Banking & Finance",
    "healthcare": "Healthcare",
    "housing": "Housing",
    "community": "Community",
    "education": "Education",
    "business": "Business"
  };

  return Object.entries(categories).map(([slug, name]) => ({
    slug,
    name,
    count: cityServices.filter(s => s.category === slug).length
  }));
}
