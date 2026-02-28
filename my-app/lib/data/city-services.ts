// ============================================================================
// PSEO Data: City Services Matrix
// Services available in each city for expats
// ============================================================================

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

export const cityServices: CityService[] = [
  // IMMIGRATION SERVICES
  {
    slug: "immigration-offices",
    name: "Immigration Offices (Migraciones)",
    category: "immigration",
    description: " Dirección Nacional de Migraciones (DNM) offices where expats process visa applications, residency permits, and other immigration paperwork.",
    whatToExpect: "Immigration offices can be busy with long wait times. Appointments are recommended for many services. Bring all required documentation and copies.",
    topProviders: [
      { name: "DNM Central Office", address: "Av. Antártida Argentina 1355, C1104ACA CABA", notes: "Main office for all immigration matters" },
      { name: "RENAPER", address: "Various locations", notes: "For DNI processing after residency approval" }
    ],
    tips: [
      "Book appointments online in advance when possible",
      "Arrive early even with an appointment",
      "Bring multiple copies of all documents",
      "Spanish proficiency helps significantly",
      "Consider hiring a gestor for complex cases"
    ],
    costs: "Government fees vary by service; legal assistance $50-200 USD",
    documentsNeeded: [
      "Valid passport",
      "Residency application forms",
      "Supporting documents (varies by visa type)",
      "Proof of address",
      "Birth certificate (apostilled)",
      "Criminal background check (apostilled)"
    ],
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "Many services require appointments booked through the RADEX system online. Walk-ins accepted for some services but expect long waits."
      },
      {
        q: "How long does the process take?",
        a: "Processing times vary by visa type: Digital Nomad 30-45 days, Temporary Residency 60-90 days. You'll receive a 'precaria' allowing legal stay during processing."
      }
    ]
  },

  {
    slug: "banking",
    name: "Banking & Financial Services",
    category: "banking",
    description: "Opening bank accounts, accessing financial services, and managing money as an expat in Argentina.",
    whatToExpect: "Traditional banks require DNI and proof of address. Fintech options available with just passport. Banking hours typically 10am-3pm weekdays.",
    topProviders: [
      { name: "Banco Galicia", notes: "Large network, expat-friendly" },
      { name: "Banco Santander Río", notes: "International connections" },
      { name: "BBVA Argentina", notes: "Digital platform in Spanish" },
      { name: "Ualá", notes: "Fintech - open with passport only" },
      { name: "Mercado Pago", notes: "Popular digital wallet" },
      { name: "Naranja X", notes: "Digital bank, easy signup" }
    ],
    tips: [
      "Start with fintech (Ualá/Naranja X) while waiting for DNI",
      "Bring utility bill for proof of address",
      "Spanish-only service at most banks",
      "Keep dollars for best exchange rates",
      "Multiple accounts recommended for flexibility"
    ],
    costs: "Most accounts free; some have monthly fees $2-10 USD",
    documentsNeeded: [
      "DNI (for traditional banks) or Passport (for fintech)",
      "Proof of address (utility bill, rental contract)",
      "CUIT/CUIL number (can obtain at ANSES)"
    ],
    faqs: [
      {
        q: "Can I open an account without DNI?",
        a: "Yes, using fintech apps like Ualá, Mercado Pago, or Naranja X. Traditional banks require DNI."
      },
      {
        q: "How do I exchange money?",
        a: "Use Western Union for best rates, or 'cuevas' (exchange houses) for cash. Avoid official bank rates."
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
    description: "Finding apartments, rental agencies, and real estate services for expats.",
    whatToExpect: "Rental market operates in USD for long-term contracts. Short-term rentals in pesos. Guarantor (garantía) often required - expats use seguro de caución instead.",
    topProviders: [
      { name: "ZonaProp", notes: "Largest rental portal" },
      { name: "Argenprop", notes: "Major real estate portal" },
      { name: "Properati", notes: "Property search engine" },
      { name: "Mercado Libre (Properties)", notes: "Classified listings" },
      { name: "Airbnb", notes: "Short-term furnished rentals" }
    ],
    tips: [
      "Use seguro de caución instead of garantía (guarantor)",
      "Long-term contracts typically in USD",
      "Short-term in pesos with monthly adjustments",
      "Photos can be outdated - visit in person",
      "Use reputable agencies for contracts"
    ],
    costs: "Studio: $400-700 USD | 1BR: $600-1,000 USD | 2BR: $800-1,500 USD (monthly)",
    documentsNeeded: [
      "DNI (or passport for temporary)",
      "Proof of income",
      "Seguro de caución (surety bond) or garantía",
      "Previous rental references (helpful)"
    ],
    faqs: [
      {
        q: "What is a garantía?",
        a: "A property owner who guarantees your rent. Expats typically can't provide this. Instead, use 'seguro de caución' (surety insurance) costing 1-1.5 months rent annually."
      },
      {
        q: "Should I rent in USD or pesos?",
        a: "Long-term contracts are typically in USD (more stable). Short-term can be in pesos but will adjust monthly for inflation."
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
