// ============================================================================
// PSEO Data: Nationalities
// Country-specific immigration guidance for expats from different nations
// ============================================================================

import { nationalitiesBatch1 } from "./nationalities-batch1";
import { nationalitiesBatch2 } from "./nationalities-batch2";
import { nationalitiesBatch3 } from "./nationalities-batch3";
import { nationalitiesBatch4 } from "./nationalities-batch4";
import { nationalitiesBatch5 } from "./nationalities-batch5";
import { nationalitiesBatch6 } from "./nationalities-batch6";
import { nationalitiesBatch7 } from "./nationalities-batch7";
import { nationalitiesBatch8 } from "./nationalities-batch8";

export interface Nationality {
  slug: string;
  name: string;
  demonym: string;
  flag: string;
  title: string;
  subtitle: string;
  description: string;
  region: "north-america" | "europe" | "latin-america" | "asia" | "oceania" | "africa";
  
  // Visa-specific info
  visaRequirements: {
    tourist: {
      duration: string;
      notes: string;
      reciprocityFee?: boolean;
      feeAmount?: string;
    };
    digitalNomad: {
      eligible: boolean;
      notes: string;
      incomeRequirement: string;
    };
    work: {
      eligible: boolean;
      notes: string;
      sponsorshipRequired: boolean;
    };
    mercosur?: {
      eligible: boolean;
      notes: string;
    };
  };
  
  // Special agreements
  specialAgreements: {
    hasAgreement: boolean;
    type?: string;
    description?: string;
    benefits?: string[];
  };
  
  // Documentation requirements
  documents: {
    passportValidity: string;
    criminalRecord: {
      required: boolean;
      apostille: boolean;
      notes?: string;
    };
    birthCertificate: {
      required: boolean;
      apostille: boolean;
    };
    additionalDocs?: string[];
  };
  
  // Practical info
  practicalInfo: {
    currencyExchange: string;
    banking: string;
    taxTreaty: boolean;
    taxTreatyDetails?: string;
    dualCitizenshipAllowed: boolean;
  };
  
  // Community info
  communityInfo: {
    populationInArgentina: string;
    mainLocations: string[];
    associations?: { name: string; url?: string }[];
    facebookGroups?: string[];
  };
  
  // Path to residency
  residencyPath: {
    easiestRoute: string;
    timeline: string;
    steps: string[];
    tips: string[];
  };
  
  faqs: {
    question: string;
    answer: string;
  }[];
  
  relatedResources: {
    title: string;
    url: string;
    description: string;
  }[];
  
  image: string;
}

export const nationalities: Nationality[] = [
  // URUGUAY - Full Featured Entry (Template Quality)
  {
    slug: "uruguay",
    name: "Uruguay",
    demonym: "Uruguayan",
    flag: "🇺🇾",
    title: "Uruguayan Citizens in Argentina: The Complete Immigration Guide",
    subtitle: "Mercosur benefits, border living, and everything Uruguayans need to know about moving to Argentina",
    description: "Uruguayans enjoy the easiest immigration as Mercosur members. No visas, no fees, and full work rights from day one. Guide to residency and cross-border living.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "Unlimited (Mercosur freedom of movement)",
        notes: "Uruguayans can enter Argentina with just a valid ID card (cédula) or passport. No entry limits as fellow Mercosur members.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur residency is far superior and free",
        incomeRequirement: "N/A - Mercosur residency doesn't require income proof"
      },
      work: {
        eligible: true,
        notes: "Work authorization automatic with Mercosur residency - no sponsorship needed",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Full Mercosur member with maximum benefits. Immediate residency rights."
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Full Membership + Freedom of Movement",
      description: "Uruguay is a founding member of Mercosur and enjoys complete freedom of movement with Argentina. This includes unlimited entry, immediate residency rights, and full work authorization.",
      benefits: [
        "Enter with just cédula (national ID) - no passport required",
        "No visa or entry fees ever",
        "Immediate right to reside and work",
        "2-year renewable temporary residency",
        "Path to citizenship in 2 years",
        "Access to healthcare and education",
        "Cross-border living flexibility"
      ]
    },
    documents: {
      passportValidity: "Valid cédula or passport (no minimum validity enforced)",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Not required for Mercosur residency - a major advantage over other nationalities"
      },
      birthCertificate: {
        required: true,
        apostille: false
      },
      additionalDocs: [
        "Proof of address in Argentina (rental contract or utility bill)",
        "Proof of means of support (bank statements or employment contract - flexible requirements)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Uruguayan pesos accepted at border exchanges. Most Uruguayans keep accounts in both countries. The Uruguayan peso is more stable than Argentine peso.",
      banking: "Many Uruguayans maintain accounts in both countries. Opening an Argentine account is straightforward with residency. Cross-border banking common.",
      taxTreaty: true,
      taxTreatyDetails: "Uruguay-Argentina have tax coordination. Uruguayans typically pay tax where income is earned. Consult accountant for cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "100,000+ (largest foreign community)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano)",
        "Tigre (delta region)",
        "Coastal areas (Mar del Plata)",
        "Border cities (Concordia, Gualeguaychú)",
        "Throughout Argentina"
      ],
      associations: [
        { name: "Uruguayan Social Club Buenos Aires" },
        { name: "Centro Uruguayano de Buenos Aires" }
      ],
      facebookGroups: [
        "Uruguayos en Buenos Aires",
        "Uruguayos en Argentina",
        "Cruce Frontera Uruguay-Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Residency (immediate, upon arrival)",
      timeline: "Same day to 30 days for residency card. Citizenship in 2 years.",
      steps: [
        "Enter Argentina with cédula or passport (no prior paperwork needed)",
        "Find accommodation and gather basic documents",
        "Visit migraciones office to apply for 'Residencia Mercosur'",
        "Receive precaria (temporary receipt) same day - you're now legal",
        "Pick up residency card (DNI for foreigners) within 30 days",
        "After 2 years, apply for citizenship if desired"
      ],
      tips: [
        "You can start working immediately upon applying for residency",
        "No need to hire a lawyer - the process is straightforward",
        "Apply within 90 days of entry (though enforcement is relaxed for Uruguayans)",
        "Keep your Uruguayan cédula current",
        "Consider cross-border living: many Uruguayans live in Argentina but work in Uruguay (or vice versa)",
        "Your Mercosur residency allows you to live anywhere in Argentina"
      ]
    },
    faqs: [
      {
        question: "Do Uruguayans need a passport to enter Argentina?",
        answer: "No! Uruguayans can enter Argentina using just their cédula de identidad (national ID card). This is one of the unique benefits of Mercosur freedom of movement. A passport is optional but not required."
      },
      {
        question: "How long does it take to get residency?",
        answer: "The same day you apply, you receive a 'precaria' (temporary receipt) that makes you legal. Your actual residency card (DNI extranjero) is ready within 2-4 weeks. No other nationality gets residency this fast."
      },
      {
        question: "Can I work immediately?",
        answer: "Yes! From the moment you apply for Mercosur residency, you have full work authorization. You can even start working while waiting for your appointment at migraciones."
      },
      {
        question: "Do I need to show income or job to get residency?",
        answer: "The requirements are very flexible. You need to show 'means of support' but this can be a job offer, bank statements, or even a declaration. Many Uruguayans get residency without formal employment."
      },
      {
        question: "Can I live in Argentina but work in Uruguay?",
        answer: "Absolutely! This is very common. Many Uruguayans live in Buenos Aires (lower cost of living) but maintain jobs in Montevideo, or work remotely for Uruguayan companies. The border is open and crossing is easy."
      },
      {
        question: "Will I lose my Uruguayan citizenship?",
        answer: "No. Argentina and Uruguay both allow dual citizenship. You can become Argentine without losing your Uruguayan nationality. In fact, many Uruguayans hold both passports."
      },
      {
        question: "Is healthcare available?",
        answer: "Yes. With Mercosur residency, you can access the public healthcare system (free) or purchase private health insurance (prepaga) just like Argentine citizens."
      },
      {
        question: "What's the difference between living in Montevideo vs Buenos Aires?",
        answer: "Buenos Aires is much larger (3x the population), has more job opportunities, better nightlife, and lower cost of living. Montevideo is safer, more stable economically, and quieter. Many Uruguayans choose BA for career growth but miss Montevideo's tranquility."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency Guide",
        url: "/visas/temporary",
        description: "Complete details on Mercosur residency process"
      },
      {
        title: "Best Neighborhoods in Buenos Aires",
        url: "/blog/best-neighborhoods-expats-buenos-aires",
        description: "Where to live - popular with Uruguayans"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget comparison with Montevideo"
      },
      {
        title: "Opening a Bank Account",
        url: "/blog/opening-bank-account-argentina-expat",
        description: "Banking for Mercosur residents"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // CHILE - Full Featured Entry
  {
    slug: "chile",
    name: "Chile",
    demonym: "Chilean",
    flag: "🇨🇱",
    title: "Chilean Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur freedom of movement, cross-Andes living, and everything Chileans need to know",
    description: "Chileans enjoy simplified immigration to Argentina as Mercosur associates. Strong cultural ties and lower cost of living make integration easy for Chilean expats.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (renewable to 180)",
        notes: "Chileans can enter visa-free. ID card accepted at land borders, passport recommended for flights.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur residency is better",
        incomeRequirement: "N/A for Mercosur route"
      },
      work: {
        eligible: true,
        notes: "Work authorization included with Mercosur residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Chile is a Mercosur associate member with residency rights"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Associate Membership",
      description: "Chile holds associate member status in Mercosur, granting residency and work rights similar to full members. This is a unique advantage among South American nations.",
      benefits: [
        "2-year renewable residency",
        "Full work authorization",
        "No visa fees",
        "Land border entry with ID card",
        "Path to citizenship in 2 years",
        "Can enter as tourist while processing residency"
      ]
    },
    documents: {
      passportValidity: "Valid passport or cédula (6+ months recommended)",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado de Antecedentes (from Registro Civil) with apostille. Required for residency."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support"
      ]
    },
    practicalInfo: {
      currencyExchange: "Chilean pesos can be exchanged in Buenos Aires. Many Chileans use Wise for transfers. Note: Chilean peso is more stable.",
      banking: "Chileans can open Argentine accounts with Mercosur residency. Some maintain accounts in both countries.",
      taxTreaty: true,
      taxTreatyDetails: "Chile-Argentina have tax agreements. Consult accountant for cross-border income.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "80,000-100,000",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "Mendoza (near Santiago)",
        "Bariloche (lake district)",
        "Coastal cities"
      ],
      associations: [
        { name: "Colectividad Chilena de Buenos Aires" },
        { name: "Chilean-Argentine Chamber of Commerce" }
      ],
      facebookGroups: [
        "Chilenos en Buenos Aires",
        "Chilenos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Residency (for associates)",
      timeline: "30-60 days for residency. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free as tourist)",
        "Gather documents including apostilled criminal record",
        "Apply for 'Residencia Mercosur para Asociados' at migraciones",
        "Receive precaria (temporary authorization)",
        "Pick up residency card within 30-60 days",
        "After 2 years, apply for citizenship if desired"
      ],
      tips: [
        "Get your Chilean criminal record apostilled before traveling",
        "The process is slightly longer than Uruguayans (full members)",
        "Mendoza is popular - close to Santiago with mountain lifestyle",
        "Chilean Spanish is understood but your accent will be noticed",
        "Many Chileans work remotely for Santiago companies from Argentina",
        "Cost of living in BA is significantly lower than Santiago"
      ]
    },
    faqs: [
      {
        question: "Do Chileans need a visa for Argentina?",
        answer: "No visa required for 90 days. For longer stays, apply for Mercosur associate residency, which gives you 2 years with work rights."
      },
      {
        question: "Can I use my Chilean ID card (cédula) to enter?",
        answer: "At land borders, yes. For flights, a passport is recommended. The cédula works for Mercosur freedom of movement at border crossings."
      },
      {
        question: "How is the Chilean community in Argentina?",
        answer: "Large and well-established, especially in Buenos Aires and Mendoza. There's a strong presence of Chilean professionals, students, and families."
      },
      {
        question: "Will my Chilean Spanish be understood?",
        answer: "Yes, though Chilean Spanish (with its unique slang and fast pace) might take some getting used to for Argentines. The reverse is also true - you'll adjust to Argentine Spanish quickly."
      },
      {
        question: "Is it true that Argentina is cheaper than Chile?",
        answer: "Yes, significantly. Buenos Aires is 30-40% cheaper than Santiago, especially for rent, dining out, and services. This is a major draw for Chileans."
      },
      {
        question: "Can I work for a Chilean company while living in Argentina?",
        answer: "Yes, many Chileans do exactly this. With Mercosur residency, you can work remotely for Chilean companies, taking advantage of the exchange rate and lower cost of living."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency for Associates",
        url: "/visas/temporary",
        description: "Associate member process details"
      },
      {
        title: "Mendoza City Guide",
        url: "/cities/mendoza",
        description: "Popular with Chileans - near the border"
      },
      {
        title: "Cost of Living Comparison",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "BA vs Santiago costs"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // PARAGUAY - Full Featured Entry
  {
    slug: "paraguay",
    name: "Paraguay",
    demonym: "Paraguayan",
    flag: "🇵🇾",
    title: "Paraguayan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur full membership, cultural connections, and immigration benefits",
    description: "Paraguayans enjoy unrestricted freedom of movement as Mercosur founding members. Strong cultural ties and a large community welcome expats from Paraguay.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "Unlimited (Mercosur freedom of movement)",
        notes: "Paraguayans can enter with cédula or passport. No limits on length of stay.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur residency is superior",
        incomeRequirement: "N/A - Mercosur doesn't require income proof"
      },
      work: {
        eligible: true,
        notes: "Automatic work authorization with Mercosur residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Paraguay is a founding Mercosur member with full rights"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Full Membership",
      description: "Paraguay is a founding member of Mercosur with complete freedom of movement rights to Argentina.",
      benefits: [
        "Enter with just cédula (national ID)",
        "No visa or entry fees",
        "Immediate residency rights",
        "2-year renewable temporary residency",
        "Full work authorization",
        "Access to public services",
        "Path to citizenship in 2 years"
      ]
    },
    documents: {
      passportValidity: "Valid cédula or passport",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Not required for Mercosur residency"
      },
      birthCertificate: {
        required: true,
        apostille: false
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support (flexible requirements)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Paraguayan guaraní can be exchanged at borders. Many Paraguayans send remittances home.",
      banking: "Paraguayans can open accounts with Mercosur residency. Cross-border banking available.",
      taxTreaty: true,
      taxTreatyDetails: "Paraguay-Argentina have tax coordination agreements",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "500,000+ (one of the largest communities)",
      mainLocations: [
        "Buenos Aires (Flores, Florest, Liniers)",
        "Córdoba",
        "Rosario",
        "Misiones (border region)"
      ],
      associations: [
        { name: "Centro Paraguayo de Buenos Aires" }
      ],
      facebookGroups: [
        "Paraguayos en Buenos Aires",
        "Paraguayos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Residency (immediate)",
      timeline: "Same day precaria. Card in 2-4 weeks. Citizenship in 2 years.",
      steps: [
        "Enter Argentina with cédula or passport",
        "Apply for Mercosur residency at migraciones",
        "Receive precaria same day",
        "Pick up residency card within 2-4 weeks",
        "After 2 years, apply for citizenship"
      ],
      tips: [
        "The process is straightforward - no lawyer needed",
        "Large Paraguayan community provides support network",
        "Guaraní is widely spoken in the community",
        "Many Paraguayans maintain strong ties to home",
        "Apply within 90 days of entry"
      ]
    },
    faqs: [
      {
        question: "Do Paraguayans need a passport to enter Argentina?",
        answer: "No, Paraguayans can enter using just their cédula de identidad. This is a Mercosur freedom of movement benefit."
      },
      {
        question: "How big is the Paraguayan community?",
        answer: "Very large - over 500,000 Paraguayans live in Argentina, making it one of the biggest immigrant communities. You'll find Paraguayan restaurants, cultural centers, and community support."
      },
      {
        question: "Can I work immediately?",
        answer: "Yes, from the moment you apply for Mercosur residency, you have full work authorization."
      },
      {
        question: "Will I lose my Paraguayan citizenship?",
        answer: "No, both countries allow dual citizenship. Many Paraguayans maintain both nationalities."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency Guide",
        url: "/visas/temporary",
        description: "Full Mercosur member process"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for Paraguayans"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BOLIVIA - Full Featured Entry
  {
    slug: "bolivia",
    name: "Bolivia",
    demonym: "Bolivian",
    flag: "🇧🇴",
    title: "Bolivian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur membership, cultural ties, and immigration pathways",
    description: "Bolivians enjoy unrestricted access to live and work as full Mercosur members. Deep historical connections and a large community provide strong support networks.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "Unlimited (Mercosur freedom of movement)",
        notes: "Bolivians can enter with ID card or passport under Mercosur agreements",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur is superior",
        incomeRequirement: "N/A for Mercosur"
      },
      work: {
        eligible: true,
        notes: "Work authorization with Mercosur residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Bolivia is a full Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Full Membership",
      description: "Bolivia joined Mercosur as a full member, granting citizens complete freedom of movement to Argentina.",
      benefits: [
        "Enter with cédula or passport",
        "No visa fees",
        "Immediate residency rights",
        "2-year renewable residency",
        "Full work rights",
        "Access to public services",
        "Citizenship in 2 years"
      ]
    },
    documents: {
      passportValidity: "Valid cédula or passport",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Not required for Mercosur residency"
      },
      birthCertificate: {
        required: true,
        apostille: false
      },
      additionalDocs: [
        "Proof of address",
        "Proof of means of support"
      ]
    },
    practicalInfo: {
      currencyExchange: "Bolivian boliviano can be exchanged. Many Bolivians send remittances home.",
      banking: "Bolivians can open accounts with residency. Some maintain cross-border banking.",
      taxTreaty: true,
      taxTreatyDetails: "Bolivia-Argentina have tax agreements",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "300,000-400,000",
      mainLocations: [
        "Buenos Aires (Once, Flores)",
        "Córdoba",
        "Rosario",
        "Northern Argentina (border region)"
      ],
      associations: [
        { name: "Federación Boliviana en Argentina" }
      ],
      facebookGroups: [
        "Bolivianos en Buenos Aires",
        "Bolivianos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Residency",
      timeline: "Same day precaria. Card in 2-4 weeks. Citizenship in 2 years.",
      steps: [
        "Enter with cédula or passport",
        "Apply for Mercosur residency",
        "Receive precaria same day",
        "Pick up card in 2-4 weeks",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Large Bolivian community provides support",
        "Process is straightforward",
        "Many Bolivian cultural associations",
        "Apply within 90 days"
      ]
    },
    faqs: [
      {
        question: "Do Bolivians need a visa for Argentina?",
        answer: "No, Bolivians can enter with just their cédula under Mercosur freedom of movement."
      },
      {
        question: "How big is the Bolivian community?",
        answer: "One of the largest - 300,000 to 400,000 Bolivians live in Argentina, with strong communities in Buenos Aires and northern provinces."
      },
      {
        question: "Can I work immediately?",
        answer: "Yes, Mercosur residency includes immediate work authorization."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "Full member process"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // PERU - Full Featured Entry (Mercosur Associate)
  {
    slug: "peru",
    name: "Peru",
    demonym: "Peruvian",
    flag: "🇵🇪",
    title: "Peruvian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur associate benefits, vibrant community, and immigration pathways for Peruvians",
    description: "Peruvians enjoy streamlined immigration as Mercosur associates since 2003. One of the largest immigrant communities with strong cultural and economic ties.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Peruvians enter visa-free. Passport recommended; ID card accepted at land borders.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur associate residency is better",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work authorization included with Mercosur associate residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Peru is a Mercosur associate member with residency rights"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Associate Membership",
      description: "Peru has been a Mercosur associate member since 2003, granting Peruvians preferential immigration treatment including residency and work rights in Argentina.",
      benefits: [
        "2-year renewable residency",
        "Full work authorization",
        "No visa fees for entry",
        "Path to citizenship in 2 years",
        "Land border entry with ID",
        "Can work while processing residency"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado de Antecedentes Policiales (from Ministerio del Interior) with apostille. Required for residency."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Partida de nacimiento (birth record from RENIEC)",
        "Proof of address in Argentina",
        "Proof of means of support"
      ]
    },
    practicalInfo: {
      currencyExchange: "Peruvian soles can be exchanged in Buenos Aires. Wise popular for transfers. Many Peruvians send remittances home.",
      banking: "Peruvians can open Argentine accounts with Mercosur residency. Some maintain dual banking for remittances.",
      taxTreaty: true,
      taxTreatyDetails: "Peru-Argentina have tax coordination agreements. Consult accountant for cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "150,000-200,000 (rapidly growing)",
      mainLocations: [
        "Buenos Aires (Belgrano, Villa Urquiza, Balvanera)",
        "Córdoba",
        "Rosario",
        "Mendoza"
      ],
      associations: [
        { name: "Asociación Peruanos en Argentina" },
        { name: "Casa Peruana Buenos Aires" }
      ],
      facebookGroups: [
        "Peruanos en Buenos Aires",
        "Peruanos en Argentina",
        "Comida Peruana en Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Associate Residency",
      timeline: "30-60 days for card. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free as tourist)",
        "Gather apostilled documents in Peru (criminal record, birth certificate)",
        "Apply for 'Residencia Mercosur para Asociados' at migraciones",
        "Receive precaria (temporary authorization) - can work immediately",
        "Pick up residency card within 30-60 days",
        "After 2 years, apply for citizenship if desired"
      ],
      tips: [
        "Get criminal record and birth certificate apostilled in Lima before traveling",
        "The Peruvian community is very supportive - connect on arrival",
        "Peruvian restaurants and shops throughout BA make transition easier",
        "Your accent will be noticed but Spanish is fully understood",
        "Many Peruvians work in gastronomy, healthcare, and services",
        "Consider joining Peruvian associations for networking",
        "Cost of living in BA is higher than Lima but salaries can be too"
      ]
    },
    faqs: [
      {
        question: "Do Peruvians need a visa for Argentina?",
        answer: "No visa needed for 90 days. For longer stays, Mercosur associate residency gives you 2 years with full work rights. The process is streamlined compared to non-Mercosur countries."
      },
      {
        question: "How big is the Peruvian community?",
        answer: "One of the fastest-growing communities - 150,000 to 200,000 Peruvians live in Argentina, heavily concentrated in Buenos Aires. You'll find Peruvian restaurants, cultural events, and strong community support."
      },
      {
        question: "What kind of work do Peruvians do in Argentina?",
        answer: "Many work in gastronomy (Peruvian restaurants are extremely popular), healthcare (nurses, caregivers), construction, and services. There's also a growing professional class in IT and business."
      },
      {
        question: "Is the Peruvian Spanish accent understood in Argentina?",
        answer: "Yes, though distinct. Peruvian Spanish is clear and formal, which Argentines appreciate. You may be asked about your accent, but communication is easy. You'll quickly adapt to Argentine slang (lunfardo)."
      },
      {
        question: "Can I bring my family?",
        answer: "Yes, Mercosur associate residency extends to spouse and children. Family reunification is straightforward for Peruvians."
      },
      {
        question: "Will I lose my Peruvian citizenship?",
        answer: "No, both countries allow dual citizenship. Many Peruvians maintain their Peruvian passport while acquiring Argentine nationality."
      },
      {
        question: "How does cost of living compare to Lima?",
        answer: "Buenos Aires is generally 20-30% more expensive than Lima for rent and services, but salaries can be higher too. The exchange rate situation makes budgeting complex but manageable."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Associate Residency",
        url: "/visas/temporary",
        description: "Associate member process details"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget comparison Lima vs Buenos Aires"
      },
      {
        title: "Work Opportunities",
        url: "/profession",
        description: "Career guides for immigrants"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // COLOMBIA - Full Featured Entry (Mercosur Associate)
  {
    slug: "colombia",
    name: "Colombia",
    demonym: "Colombian",
    flag: "🇨🇴",
    title: "Colombian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur associate benefits, growing community, and immigration pathways",
    description: "Colombians enjoy preferential immigration access as Mercosur associates since 2012. Rapidly growing community with strong cultural presence and opportunities.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Colombians enter visa-free with passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur associate is better for long-term",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work authorization with Mercosur associate residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Colombia is a Mercosur associate member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Associate Membership",
      description: "Colombia joined Mercosur as an associate member in 2012, granting Colombians residency and work rights in Argentina with streamlined processing.",
      benefits: [
        "2-year renewable residency",
        "Full work authorization",
        "No entry visa required",
        "Path to citizenship in 2 years",
        "Can work immediately upon application",
        "Family reunification available"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado de Antecedentes (Policía Nacional) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Registro civil de nacimiento",
        "Proof of address in Argentina",
        "Proof of means of support"
      ]
    },
    practicalInfo: {
      currencyExchange: "Colombian pesos can be exchanged in BA. Wise popular for transfers. Note: Colombian peso is weaker than Argentine blue rate.",
      banking: "Colombians can open accounts with residency. Some maintain dual accounts.",
      taxTreaty: true,
      taxTreatyDetails: "Colombia-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "80,000-120,000 (fastest growing)",
      mainLocations: [
        "Buenos Aires (Caballito, Almagro, Palermo)",
        "Córdoba",
        "Rosario",
        "Mendoza"
      ],
      associations: [
        { name: "Colombianos en Argentina" },
        { name: "Fundación Colombia Argentina" }
      ],
      facebookGroups: [
        "Colombianos en Buenos Aires",
        "Colombianos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Associate Residency",
      timeline: "30-60 days for card. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free)",
        "Gather apostilled documents from Colombia",
        "Apply for Mercosur associate residency",
        "Receive precaria (can work immediately)",
        "Pick up card in 30-60 days",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Get documents apostilled in Colombia before traveling",
        "Colombian accent is very distinct - you'll be recognized",
        "Growing professional opportunities beyond traditional sectors",
        "Connect with Colombian community for support",
        "Many Colombians work in tech, services, and creative industries",
        "Cost of living in BA is higher than Bogotá/Medellín"
      ]
    },
    faqs: [
      {
        question: "Do Colombians need a visa for Argentina?",
        answer: "No visa needed for 90 days. For longer stays, Mercosur associate residency provides 2 years with work rights."
      },
      {
        question: "How big is the Colombian community?",
        answer: "Rapidly growing - 80,000 to 120,000 Colombians in Argentina, mostly in Buenos Aires. The community has expanded significantly in recent years."
      },
      {
        question: "What work do Colombians do?",
        answer: "Increasingly diverse - from traditional services to tech, marketing, design, and professional sectors. Colombian work ethic is highly regarded."
      },
      {
        question: "Is Colombian Spanish understood?",
        answer: "Yes, though the accent is very distinctive. Colombians are known for clear, formal Spanish. You may stand out, but communication is easy."
      },
      {
        question: "Can I bring family?",
        answer: "Yes, family reunification is available under Mercosur associate residency. Spouse and children can be included."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Associate Residency",
        url: "/visas/temporary",
        description: "Associate member details"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "BA vs Colombia costs"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BRAZIL - Full Featured Entry (Mercosur Full Member)
  {
    slug: "brazil",
    name: "Brazil",
    demonym: "Brazilian",
    flag: "🇧🇷",
    title: "Brazilian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Full Mercosur member benefits, immediate permanent residency, and established community",
    description: "Brazilians enjoy easiest immigration as founding Mercosur members. Immediate permanent residency with no criminal record required and the largest foreign community.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Brazilians enter visa-free with passport or national ID",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur residency is superior",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Immediate work authorization with Mercosur residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Brazil is a founding Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Full Member",
      description: "As a founding Mercosur member (1991), Brazilians receive immediate permanent residency in Argentina with the fastest processing and fewest requirements of any nationality.",
      benefits: [
        "Immediate permanent residency (not temporary)",
        "No criminal record check required",
        "Work immediately upon arrival",
        "Citizenship in just 2 years",
        "Can apply with just ID card (no passport needed)",
        "Family reunification expedited",
        "No income requirements"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Not required for Mercosur full members"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Brazilian ID (RG) acceptable instead of passport",
        "Proof of address in Argentina",
        "Two passport photos"
      ]
    },
    practicalInfo: {
      currencyExchange: "Brazilian reais widely accepted in border areas. ATMs work normally. Many Brazilians use Wise or bank transfers.",
      banking: "Easy account opening due to Mercosur agreements. Brazilian banks (Itaú, Bradesco) have branches in BA.",
      taxTreaty: true,
      taxTreatyDetails: "Brazil-Argentina have comprehensive tax agreements. Consult accountant for CPF/CUIT implications.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "250,000+ (largest foreign community)",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo, Centro)",
        "Foz do Iguaçu / Puerto Iguazú border",
        "Misiones province",
        "Córdoba",
        "Rosario"
      ],
      associations: [
        { name: "Federación de Sociedades Brasileñas" },
        { name: "Casa do Brasil em Buenos Aires" },
        { name: "Centro Brasileiro de Buenos Aires" }
      ],
      facebookGroups: [
        "Brasileiros em Buenos Aires",
        "Brasileiros na Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Permanent Residency",
      timeline: "Immediate permanent status. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free with RG or passport)",
        "Gather documents (no criminal record needed!)",
        "Apply for Mercosur permanent residency at migraciones",
        "Receive precaria immediately (can work right away)",
        "Pick up permanent card in 30-45 days",
        "Apply for citizenship after 2 years residency"
      ],
      tips: [
        "You can use your Brazilian RG instead of passport for entry",
        "No criminal record check required - this saves weeks",
        "Learn Spanish ASAP - Brazilian Portuguese speakers adapt quickly",
        "Belgrano has the largest Brazilian neighborhood",
        "Many Brazilian professionals work in IT, hospitality, and business",
        "Argentines love Brazilian culture - you'll feel welcome",
        "Consider getting a CUIT for business activities"
      ]
    },
    faqs: [
      {
        question: "Do Brazilians need a visa for Argentina?",
        answer: "No visa required. Brazilians can enter with just their RG (national ID card) or passport for up to 90 days, renewable to 180 days."
      },
      {
        question: "What's the difference between Mercosur full vs associate for Brazilians?",
        answer: "As a full Mercosur member, Brazilians get immediate PERMANENT residency (not temporary), no criminal record requirement, and the fastest path to citizenship."
      },
      {
        question: "How big is the Brazilian community in Argentina?",
        answer: "The largest foreign community - over 250,000 Brazilians live in Argentina, with significant populations in Buenos Aires (especially Belgrano), Misiones, and border regions."
      },
      {
        question: "Do I need to speak Spanish?",
        answer: "While many Brazilians get by with Portuguese initially, learning Spanish is highly recommended for work and daily life. The languages are similar but distinct enough to cause confusion."
      },
      {
        question: "Can I work immediately upon arrival?",
        answer: "Yes! Once you apply for Mercosur residency, you receive a 'precaria' document that authorizes you to work immediately while your permanent card is processed."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Permanent Residency",
        url: "/visas/permanent",
        description: "Full member details"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "BA vs São Paulo/Rio costs"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // VENEZUELA - Full Featured Entry (Non-Mercosur, Large Diaspora)
  {
    slug: "venezuela",
    name: "Venezuela",
    demonym: "Venezuelan",
    flag: "🇻🇪",
    title: "Venezuelan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "DNE migratory agreement, special humanitarian provisions, and established community support",
    description: "Venezuelans have pathways to residency through the DNE agreement and humanitarian provisions. One of Argentina's largest communities with work authorization support.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Venezuelans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available, DNE agreement simplifies process",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: false,
        notes: "Venezuela is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "DNE Agreement & Humanitarian Provisions",
      description: "Argentina has implemented special provisions for Venezuelans including the DNE (Documento Nacional de Extranjería) agreement and humanitarian residency programs established in response to the Venezuelan crisis.",
      benefits: [
        "Expedited residency processing",
        "Humanitarian visa provisions",
        "Work authorization during application",
        "Access to public healthcare",
        "Children's access to education",
        "Family reunification programs",
        "Temporary protection status available"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Required, but processing expedited for humanitarian cases"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Passport photos",
        "For humanitarian cases: supporting documentation"
      ]
    },
    practicalInfo: {
      currencyExchange: "Venezuelan bolívars not widely exchangeable. Bring USD or use Wise/transfers. Many Venezuelans work in cash-based services initially.",
      banking: "Can open accounts with residency. Many start with digital banks (Naranja X, Ualá) before traditional banks.",
      taxTreaty: false,
      taxTreatyDetails: "No specific tax treaty. Consult accountant about obligations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "180,000-200,000 (second largest foreign community)",
      mainLocations: [
        "Buenos Aires (Once, Flores, Caballito)",
        "Córdoba",
        "Rosario",
        "Mendoza",
        "La Plata"
      ],
      associations: [
        { name: "Unión de Venezolanos en Argentina" },
        { name: "Fundación Venezuela Argentina" },
        { name: "Casa de Venezuela en Buenos Aires" }
      ],
      facebookGroups: [
        "Venezolanos en Buenos Aires",
        "Venezolanos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "DNE Residency or Humanitarian Program",
      timeline: "60-90 days for residency. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free)",
        "Gather required documents from Venezuela",
        "Apply for residency under DNE agreement or humanitarian program",
        "Receive precaria (work authorization during processing)",
        "Complete biometric data collection",
        "Receive residency card in 60-90 days",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "The DNE agreement is your best path - research it thoroughly",
        "Many Venezuelan professionals work in IT, services, and healthcare",
        "Community organizations can help with paperwork",
        "Argentines are generally welcoming to Venezuelans",
        "Learn Argentine Spanish - vocabulary differs from Venezuelan",
        "Consider the 'Mercosur visa' option if you have ancestry from member countries",
        "Keep copies of all documents - Venezuelan documents can be hard to replace"
      ]
    },
    faqs: [
      {
        question: "Do Venezuelans need a visa for Argentina?",
        answer: "No visa required for 90 days entry. For longer stays, apply for residency under the DNE agreement or humanitarian programs."
      },
      {
        question: "What is the DNE agreement?",
        answer: "The Documento Nacional de Extranjería agreement provides expedited residency processing for Venezuelans with work authorization during the application period."
      },
      {
        question: "How big is the Venezuelan community?",
        answer: "One of the largest - approximately 180,000 to 200,000 Venezuelans in Argentina, concentrated in Buenos Aires (especially Once/Flores neighborhoods), Córdoba, and Rosario."
      },
      {
        question: "Can I work while my residency is processing?",
        answer: "Yes! The precaria document you receive upon application authorizes you to work legally while your residency is being processed."
      },
      {
        question: "Are there special provisions for Venezuelans?",
        answer: "Yes, Argentina has humanitarian programs specifically for Venezuelans including expedited processing, temporary protection, and integration support through various organizations."
      }
    ],
    relatedResources: [
      {
        title: "DNE Residency Program",
        url: "/visas/temporary",
        description: "Venezuelan-specific information"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for Venezuelans"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // UNITED STATES - Full Featured Entry (Non-Mercosur, Digital Nomad Focus)
  {
    slug: "united-states",
    name: "United States",
    demonym: "American",
    flag: "🇺🇸",
    title: "US Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Digital nomad visa, tourist entry, and pathways to residency for Americans",
    description: "Complete guide for Americans moving to Argentina. Digital nomad visa, tourist entry, residency pathways, and practical advice for US citizens.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "US citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Argentina's digital nomad visa is ideal for US remote workers",
        incomeRequirement: "$2,500-3,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa requires local sponsorship or company formation",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "US is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While the US doesn't have a special immigration agreement with Argentina, Americans benefit from straightforward tourist entry, an excellent digital nomad visa program, and a well-established expat community.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong USD purchasing power",
        "Established American expat community",
        "English widely understood in business",
        "Direct flights from major US cities"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "FBI background check with apostille required for residency"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "For digital nomad: proof of remote employment",
        "For work visa: employment contract or business plan",
        "Proof of means of support",
        "Health insurance (recommended)"
      ]
    },
    practicalInfo: {
      currencyExchange: "USD is king in Argentina. Bring cash for blue rate exchanges (significantly better than official rate). Use Western Union or cuevas for transfers.",
      banking: "Open accounts with residency. Many Americans use Wise, Revolut, or US cards initially. Some open Argentine accounts after establishing residency.",
      taxTreaty: true,
      taxTreatyDetails: "US-Argentina have tax agreements, but US citizens must still file US taxes (foreign earned income exclusion applies). Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-25,000 (growing rapidly)",
      mainLocations: [
        "Buenos Aires (Palermo, Recoleta, San Telmo)",
        "Mendoza (wine country)",
        "Córdoba",
        "Bariloche (outdoor enthusiasts)",
        "Salta (digital nomads)"
      ],
      associations: [
        { name: "American Club of Buenos Aires" },
        { name: "Expat Facebook Groups" }
      ],
      facebookGroups: [
        "Americans in Buenos Aires",
        "US Expats in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Decide on pathway: digital nomad, work visa, or investment",
        "Gather documents (FBI check takes 4-8 weeks)",
        "Apply for chosen visa type",
        "Receive precaria (allows work/stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "The digital nomad visa is your best bet if you work remotely",
        "Bring USD cash for blue rate exchanges - you'll get ~40-50% more",
        "Get your FBI background check before traveling (apostille required)",
        "Buenos Aires has a vibrant American expat scene",
        "Healthcare is excellent and affordable compared to US",
        "Consider the 'rentista' visa if you have passive income",
        "Learning Spanish will transform your experience"
      ]
    },
    faqs: [
      {
        question: "Do US citizens need a visa for Argentina?",
        answer: "No visa required for 90 days entry. The digital nomad visa is excellent for remote workers wanting to stay longer."
      },
      {
        question: "How's the cost of living compared to the US?",
        answer: "Significantly lower. With the blue dollar rate, costs can be 60-70% less than major US cities. A $3,000/month income provides a comfortable lifestyle."
      },
      {
        question: "Can I work remotely for my US company?",
        answer: "Yes! The digital nomad visa is specifically designed for this. You can work remotely for US companies while legally residing in Argentina."
      },
      {
        question: "Is it safe for Americans?",
        answer: "Generally yes, with normal big-city precautions. Buenos Aires is safer than most US cities. Avoid flashing expensive items and be aware of pickpockets in tourist areas."
      },
      {
        question: "Do I need to speak Spanish?",
        answer: "You can get by in Buenos Aires with English, but learning Spanish greatly improves your experience and is necessary outside the capital. Many Americans take classes upon arrival."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Remote worker pathway"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "BA vs US city costs"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SPAIN - Full Featured Entry (Special Bilateral Agreements)
  {
    slug: "spain",
    name: "Spain",
    demonym: "Spanish",
    flag: "🇪🇸",
    title: "Spanish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Bilateral agreements, preferential treatment, and strong cultural ties",
    description: "Spanish citizens benefit from bilateral agreements that simplify residency and offer special pension arrangements. Deep historical bonds between Spain and Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Spanish citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Simplified work authorization under bilateral agreements",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: false,
        notes: "Spain is not a Mercosur member but has special agreements"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Bilateral Agreements & Cultural Ties",
      description: "Spain and Argentina maintain multiple bilateral agreements including the Treaty of Friendship and Cooperation (1963), social security agreements for pensioners, and special provisions for Spanish citizens seeking residency.",
      benefits: [
        "Simplified residency process",
        "Social security/pension reciprocity",
        "Recognition of professional qualifications",
        "Spanish citizens can use DNI-E (electronic ID) for some processes",
        "Access to public healthcare with residency",
        "Cultural integration programs"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado de Antecedentes Penales from Spain with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Spanish DNI (valid for entry as alternative to passport)",
        "Proof of means of support",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros can be exchanged easily in Buenos Aires. Spanish banks (Santander, BBVA) operate in Argentina. Wise popular for transfers.",
      banking: "Easy account opening with residency. Spanish banks have presence. Digital banks (Naranja X, Ualá) popular.",
      taxTreaty: true,
      taxTreatyDetails: "Spain-Argentina have comprehensive tax agreements including provisions for pensioners. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "50,000-70,000",
      mainLocations: [
        "Buenos Aires (Recoleta, Palermo, Puerto Madero)",
        "Mendoza",
        "Córdoba",
        "Rosario",
        "Mar del Plata"
      ],
      associations: [
        { name: "Centro Español de Buenos Aires" },
        { name: "Casa de España en Argentina" },
        { name: "Colegio de Abogados Españoles" }
      ],
      facebookGroups: [
        "Españoles en Buenos Aires",
        "Españoles en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Bilateral Agreement Residency",
      timeline: "45-60 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free with passport or DNI)",
        "Gather documents from Spain (certificado de antecedentes, birth certificate)",
        "Apply for residency citing bilateral agreements",
        "Receive precaria (work authorization during processing)",
        "Complete biometric data collection",
        "Receive residency card in 45-60 days",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Mention bilateral agreements in your application - it speeds processing",
        "Your Spanish DNI is valid for entry and some official processes",
        "Argentina has the largest Spanish-descended population outside Spain",
        "Spanish professionals are highly regarded, especially in law, medicine, education",
        "The accent is different but you'll be understood immediately",
        "Consider the pensionado/retiree visa if eligible",
        "Spanish cuisine is extremely popular - opportunities for Spanish chefs"
      ]
    },
    faqs: [
      {
        question: "Do Spanish citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. Spanish citizens can enter with passport or DNI and apply for residency under bilateral agreements."
      },
      {
        question: "What special benefits do Spanish citizens have?",
        answer: "Bilateral agreements provide simplified residency, social security reciprocity for pensioners, and recognition of Spanish professional qualifications."
      },
      {
        question: "How big is the Spanish community?",
        answer: "Approximately 50,000-70,000 Spanish citizens in Argentina, with significant communities in Buenos Aires, Mendoza, and major cities."
      },
      {
        question: "Can I use my Spanish DNI in Argentina?",
        answer: "Yes, your Spanish DNI is valid for entry and can be used for some official processes, though a passport is recommended for initial entry."
      },
      {
        question: "Are Spanish qualifications recognized?",
        answer: "Generally yes, especially for university degrees and professional licenses, though some may require validation (homologación) depending on the profession."
      }
    ],
    relatedResources: [
      {
        title: "Bilateral Agreement Details",
        url: "/visas/temporary",
        description: "Spanish-specific provisions"
      },
      {
        title: "Retiree/Pensioner Visa",
        url: "/visas/retirement",
        description: "For Spanish pensioners"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ITALY - Full Featured Entry (Massive Diaspora, Special Agreements)
  {
    slug: "italy",
    name: "Italy",
    demonym: "Italian",
    flag: "🇮🇹",
    title: "Italian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Strongest European ties, simplified processes, and the heart of Argentine culture",
    description: "Italians enjoy simplified immigration to Argentina, home to the largest Italian population outside Italy. Cultural familiarity celebrates Italian heritage across the country.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Italian citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Simplified work authorization, qualifications recognized",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: false,
        notes: "Italy is not a Mercosur member but has special status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Bilateral Agreements & Cultural Recognition",
      description: "Italy and Argentina share unique bonds including bilateral agreements on social security, professional qualification recognition, and special provisions acknowledging the massive Italian-Argentine population and ongoing cultural exchange.",
      benefits: [
        "Simplified residency process",
        "Social security/pension reciprocity",
        "Recognition of Italian professional qualifications",
        "Italian citizens eligible for Italian-Argentine cultural programs",
        "Access to Italian consular services throughout Argentina",
        "Special provisions for jure sanguinis descendants"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Casellario Giudiziale from Italy with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Carta d'Identità (valid for some processes)",
        "Codice Fiscale (helpful for banking)",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged. Italian banks (Intesa Sanpaolo) operate in Argentina. Wise popular for transfers.",
      banking: "Easy account opening with residency. Many Italians use Italian bank branches or digital banks.",
      taxTreaty: true,
      taxTreatyDetails: "Italy-Argentina have comprehensive tax agreements including provisions for pensioners and dual residents. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "40,000-60,000 Italian citizens",
      mainLocations: [
        "Buenos Aires (Little Italy, San Telmo, La Boca)",
        "Rosario (strong Italian heritage)",
        "Córdoba",
        "Mar del Plata",
        "Mendoza (wine connection)"
      ],
      associations: [
        { name: "Società Italiana di Unione e Mutuo Soccorso" },
        { name: "Dante Alighieri Society Buenos Aires" },
        { name: "Camera di Commercio Italiana" }
      ],
      facebookGroups: [
        "Italiani a Buenos Aires",
        "Italiani in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Bilateral Agreement Residency",
      timeline: "45-60 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free)",
        "Gather documents from Italy (Casellario Giudiziale, birth certificate)",
        "Apply for residency citing bilateral agreements",
        "Receive precaria (work authorization during processing)",
        "Complete biometric data collection",
        "Receive residency card in 45-60 days",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Argentina has the largest Italian population outside Italy - you'll feel at home",
        "Italian restaurants, cafes, and businesses are everywhere in Buenos Aires",
        "Italian language is widely understood and appreciated",
        "Italian professionals (chefs, designers, engineers) are highly sought after",
        "The Lunfardo dialect in Buenos Aires has Italian roots",
        "Consider bringing Italian food products - they sell well to the expat community",
        "Italian cultural events happen year-round"
      ]
    },
    faqs: [
      {
        question: "Do Italian citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. Italian citizens can enter with passport and apply for residency under bilateral agreements."
      },
      {
        question: "How Italian is Argentina really?",
        answer: "Extremely. Over 60% of Argentines have Italian ancestry. Buenos Aires has a 'Little Italy,' Italian is the second most spoken language in homes, and Italian culture permeates food, language, and customs."
      },
      {
        question: "Will I need to speak Spanish?",
        answer: "Yes, though you'll find many Italians here and Italian is widely understood. Argentine Spanish has significant Italian influence (Lunfardo), making it easier for Italians to learn."
      },
      {
        question: "Are Italian professional qualifications recognized?",
        answer: "Generally yes, especially for culinary arts, design, fashion, and engineering. Some professions may require validation depending on regulatory requirements."
      },
      {
        question: "Is there an Italian business community?",
        answer: "Yes, very active. The Italian Chamber of Commerce, Italian restaurants, importers, and Italian-Argentine businesses create strong networking opportunities."
      }
    ],
    relatedResources: [
      {
        title: "Italian-Argentine Cultural Guide",
        url: "/blog/italian-heritage-argentina",
        description: "Cultural connections"
      },
      {
        title: "Italian Restaurants in BA",
        url: "/food",
        description: "Find authentic Italian food"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MEXICO - Full Featured Entry (Growing Latin American Community)
  {
    slug: "mexico",
    name: "Mexico",
    demonym: "Mexican",
    flag: "🇲🇽",
    title: "Mexican Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, cultural exchange, and expanding opportunities",
    description: "The Mexican community has grown, drawn by educational opportunities. Expanding networks in major cities provide support for Mexican expats in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Mexicans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through standard process",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Mexico is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While Mexico doesn't have a special immigration agreement with Argentina, Mexicans benefit from the standard 90-day tourist entry, and both countries actively promote cultural and educational exchange through university partnerships and professional mobility programs.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Strong academic exchange programs",
        "Professional mobility initiatives",
        "Cultural affinity between Latin American nations",
        "Spanish language commonality",
        "Growing Mexican business presence"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Carta de No Antecedentes Penales from Mexico with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "CURP (helpful but not required)",
        "Proof of means of support",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Mexican pesos can be exchanged in BA, though USD often preferred for larger amounts. Wise popular for transfers.",
      banking: "Open accounts with residency. Mexican banks (BBVA México) have some presence through parent company.",
      taxTreaty: true,
      taxTreatyDetails: "Mexico-Argentina have tax agreements. Consult accountant for RFC/CUIT implications.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-25,000 (growing)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano)",
        "Córdoba (university city)",
        "La Plata",
        "Mendoza"
      ],
      associations: [
        { name: "Casa de México en Argentina" },
        { name: "Asociación de Mexicanos en Argentina" }
      ],
      facebookGroups: [
        "Mexicanos en Buenos Aires",
        "Mexicanos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad or Work Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: digital nomad (if remote worker) or work visa",
        "Gather documents from Mexico (criminal record, birth certificate with apostille)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay/work during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "The digital nomad visa is excellent if you work remotely for Mexican/international companies",
        "Many Mexicans come for university exchanges - consider student visa first",
        "Mexican cuisine is increasingly popular - opportunities for Mexican chefs",
        "Your Spanish is immediately understood, though vocabulary differs",
        "Argentines are curious and welcoming toward Mexicans",
        "Consider academic/professional exchange programs as entry point",
        "Mexican professionals in tech, creative industries, and hospitality do well"
      ]
    },
    faqs: [
      {
        question: "Do Mexicans need a visa for Argentina?",
        answer: "No visa required for 90 days entry. For longer stays, apply for digital nomad visa (if remote worker) or work visa with sponsorship."
      },
      {
        question: "Is there a big Mexican community?",
        answer: "Growing rapidly - approximately 15,000-25,000 Mexicans in Argentina, concentrated in Buenos Aires and university cities like Córdoba."
      },
      {
        question: "Will my Mexican Spanish be understood?",
        answer: "Absolutely. While Argentine Spanish has its own character (voseo, different vocabulary), Mexicans are understood immediately and adapt quickly."
      },
      {
        question: "Are there Mexican restaurants and products?",
        answer: "Growing presence! While not as ubiquitous as in the US, Mexican restaurants, tortillas, and products are increasingly available in Buenos Aires."
      },
      {
        question: "Can Mexican students study in Argentina?",
        answer: "Yes, active exchange programs exist between Mexican and Argentine universities. Student visas are straightforward for enrolled students."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Student Visa Information",
        url: "/visas/student",
        description: "For Mexican students"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // CANADA - Full Featured Entry (English/French Speaking, Similar to US Profile)
  {
    slug: "canada",
    name: "Canada",
    demonym: "Canadian",
    flag: "🇨🇦",
    title: "Canadian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Digital nomad pathway, lower cost of living, and emerging expat community",
    description: "Canadians find Argentina attractive for affordable living and adventure. Digital nomad visa offers a pathway for remote workers with favorable exchange rates.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Canadians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Perfect for Canadian remote workers",
        incomeRequirement: "$2,500-3,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa requires local sponsorship or company formation",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Canada is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While Canada doesn't have a special immigration agreement with Argentina, Canadians benefit from straightforward tourist entry, an excellent digital nomad visa program, strong USD/CAD purchasing power, and a growing community of Canadian remote workers and retirees.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong CAD/USD purchasing power in Argentina",
        "Growing Canadian expat community",
        "English widely understood in business",
        "Similar profile to US citizens"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "RCMP background check with apostille required for residency"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "For digital nomad: proof of remote employment",
        "For work visa: employment contract or business plan",
        "Proof of means of support",
        "Health insurance (recommended)"
      ]
    },
    practicalInfo: {
      currencyExchange: "USD cash is king for blue rate exchanges. CAD can be exchanged but USD preferred. Wise, Western Union, or crypto popular for transfers.",
      banking: "Open accounts with residency. Many Canadians use Wise, Canadian cards, or open Argentine accounts after establishing residency.",
      taxTreaty: true,
      taxTreatyDetails: "Canada-Argentina have tax agreements. Canadians must file Canadian taxes but may claim foreign tax credits. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "8,000-12,000 (growing)",
      mainLocations: [
        "Buenos Aires (Palermo, Recoleta)",
        "Mendoza (wine region)",
        "Bariloche (ski/outdoor enthusiasts)",
        "Córdoba"
      ],
      associations: [
        { name: "Canadians in Argentina Facebook Group" },
        { name: "Maple Leaf Community Buenos Aires" }
      ],
      facebookGroups: [
        "Canadians in Buenos Aires",
        "Canadians in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Decide on pathway: digital nomad, work visa, or investment",
        "Gather documents (RCMP check takes 2-4 weeks)",
        "Apply for chosen visa type",
        "Receive precaria (allows work/stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "The digital nomad visa is perfect for Canadian remote workers",
        "Bring USD cash for blue rate exchanges - you'll get significantly more",
        "Get your RCMP background check before traveling (apostille required)",
        "Canadians are well-regarded and find welcoming reception",
        "Healthcare is excellent and very affordable compared to Canada",
        "Consider the 'rentista' visa if you have passive income",
        "Bariloche is popular with Canadians who love skiing/outdoors",
        "Wine lovers gravitate to Mendoza"
      ]
    },
    faqs: [
      {
        question: "Do Canadians need a visa for Argentina?",
        answer: "No visa required for 90 days entry. The digital nomad visa is excellent for Canadian remote workers wanting to stay longer."
      },
      {
        question: "How's the cost of living compared to Canada?",
        answer: "Significantly lower. With the blue dollar rate, costs can be 50-60% less than Canadian cities. A $3,500-4,000 CAD monthly income provides a very comfortable lifestyle."
      },
      {
        question: "Can I work remotely for my Canadian company?",
        answer: "Yes! The digital nomad visa is specifically designed for remote workers. You can work for Canadian companies while legally residing in Argentina."
      },
      {
        question: "Is it safe for Canadians?",
        answer: "Generally yes with normal precautions. Buenos Aires is comparable to major Canadian cities in terms of safety. Exercise standard awareness in tourist areas."
      },
      {
        question: "What about healthcare?",
        answer: "Excellent and affordable. Many Canadians pay out-of-pocket for private healthcare which costs a fraction of Canadian prices. Quality is high, especially in Buenos Aires."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Remote worker pathway"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "BA vs Canadian city costs"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // UNITED KINGDOM - Full Featured Entry (Post-Brexit Interest, English-Speaking)
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    demonym: "British",
    flag: "🇬🇧",
    title: "UK Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Post-Brexit opportunities, digital nomad pathway, and historic Anglo-Argentine ties",
    description: "Britons explore Argentina for affordability post-Brexit. Digital nomad visa provides a pathway for UK remote workers with historical Anglo-Argentine connections.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "UK citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Ideal for UK remote workers post-Brexit",
        incomeRequirement: "£2,000-2,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa requires local sponsorship or company formation",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "UK is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While the UK doesn't have a special immigration agreement with Argentina, Britons benefit from straightforward tourist entry, an excellent digital nomad visa, strong GBP purchasing power, historical Anglo-Argentine ties, and a growing post-Brexit expat community.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong GBP purchasing power in Argentina",
        "Growing post-Brexit expat community",
        "English widely understood in business",
        "Historic Anglo-Argentine connections"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "ACRO police certificate with apostille required for residency"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "For digital nomad: proof of remote employment",
        "For work visa: employment contract or business plan",
        "Proof of means of support",
        "Health insurance (recommended)"
      ]
    },
    practicalInfo: {
      currencyExchange: "GBP can be exchanged in BA, though USD often preferred for better rates. Wise, Western Union popular for transfers.",
      banking: "Open accounts with residency. Many Britons use UK cards initially, then open Argentine accounts after establishing residency.",
      taxTreaty: true,
      taxTreatyDetails: "UK-Argentina have tax agreements. UK citizens may need to file UK taxes depending on residency status. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "10,000-15,000",
      mainLocations: [
        "Buenos Aires (Recoleta, Palermo, San Telmo)",
        "Mendoza",
        "Bariloche",
        "Córdoba"
      ],
      associations: [
        { name: "British Argentine Society" },
        { name: "St. Andrew's Society of the River Plate" }
      ],
      facebookGroups: [
        "Brits in Buenos Aires",
        "UK Expats in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Decide on pathway: digital nomad, work visa, or investment",
        "Gather documents (ACRO certificate takes 2-3 weeks)",
        "Apply for chosen visa type",
        "Receive precaria (allows work/stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "The digital nomad visa is excellent for UK remote workers",
        "Bring USD cash for blue rate exchanges",
        "Get your ACRO certificate before traveling (apostille required)",
        "British culture has left marks on Argentina - you'll find familiar elements",
        "The Anglo-Argentine community has deep historical roots",
        "Tea culture ( té ) and afternoon snacks (merienda) will feel familiar",
        "Polo and rugby have strong British influence in Argentina",
        "Consider the Falklands history - be sensitive in conversations"
      ]
    },
    faqs: [
      {
        question: "Do UK citizens need a visa for Argentina?",
        answer: "No visa required for 90 days entry. Post-Brexit, the digital nomad visa is excellent for UK remote workers wanting to stay longer."
      },
      {
        question: "How's the cost of living compared to the UK?",
        answer: "Significantly lower. With the blue dollar rate, costs can be 60-70% less than London and 50% less than other UK cities. A £2,000-2,500 monthly income provides a comfortable lifestyle."
      },
      {
        question: "Can I work remotely for my UK company?",
        answer: "Yes! The digital nomad visa is specifically designed for this. You can work remotely for UK companies while legally residing in Argentina."
      },
      {
        question: "Is there British influence in Argentina?",
        answer: "Yes, significant. British immigrants built Argentina's railways, introduced football, polo, and tea culture. You'll find historic Anglo-Argentine clubs and communities."
      },
      {
        question: "What about the Falklands issue?",
        answer: "The Falklands/Malvinas remains a sensitive topic. Most Argentines distinguish between British people and British government policy. Be respectful if the topic arises."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Remote worker pathway"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "BA vs UK city costs"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // FRANCE - Full Featured Entry (European, Cultural Ties)
  {
    slug: "france",
    name: "France",
    demonym: "French",
    flag: "🇫🇷",
    title: "French Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Cultural exchange, professional opportunities, and quality of life",
    description: "French citizens are drawn to Argentina for cultural vibrancy and lower cost of living. Institutional presence supports the French community in major cities."
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "French citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "€1,500-2,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through standard process",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "France is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While France doesn't have a special immigration agreement with Argentina, French citizens benefit from the standard 90-day tourist entry, digital nomad visa, strong EUR purchasing power, and a well-established French community with schools and cultural institutions.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong EUR purchasing power",
        "Established French community",
 "French international schools available",
        "Cultural affinity with Argentine arts scene"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Bulletin n°3 from France with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Proof of address in Argentina",
        "Health insurance (recommended)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged in BA. French banks (BNP Paribas, Société Générale) operate in Argentina. Wise popular for transfers.",
      banking: "Easy account opening with residency. French bank presence available.",
      taxTreaty: true,
      taxTreatyDetails: "France-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-20,000",
      mainLocations: [
        "Buenos Aires (Recoleta, Palermo)",
        "Mendoza",
        "Córdoba"
      ],
      associations: [
        { name: "Alliance Française Buenos Aires" },
        { name: "Chambre de Commerce Franco-Argentine" }
      ],
      facebookGroups: [
        "Français à Buenos Aires",
        "Français en Argentine"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad or Work Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: digital nomad, work visa, or investment",
        "Gather documents (Bulletin n°3, birth certificate with apostille)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay/work during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "The Alliance Française offers excellent Spanish courses",
        "French cuisine is highly regarded - opportunities for French chefs",
        "Wine culture connects France and Argentina strongly",
        "Your French may help with learning Argentine Spanish",
        "French professionals in fashion, gastronomy, and arts do well",
        "Lycée Franco-Argentin offers French curriculum for families"
      ]
    },
    faqs: [
      {
        question: "Do French citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. The digital nomad visa is excellent for French remote workers wanting to stay longer."
      },
      {
        question: "Is there a French school in Buenos Aires?",
        answer: "Yes, the Lycée Franco-Argentin Jean Mermoz offers French curriculum from kindergarten through high school, recognized by the French Ministry of Education."
      },
      {
        question: "How big is the French community?",
        answer: "Approximately 15,000-20,000 French citizens in Argentina, with strong presence in Buenos Aires and cultural institutions throughout the country."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Alliance Française BA",
        url: "/resources",
        description: "Cultural center & language courses"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // GERMANY - Full Featured Entry (European, Growing Interest)
  {
    slug: "germany",
    name: "Germany",
    demonym: "German",
    flag: "🇩🇪",
    title: "German Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, professional opportunities, and quality lifestyle",
    description: "German interest has grown significantly, driven by remote work opportunities and lower living costs. Expanding professional networks support Germans in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "German citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for German remote workers",
        incomeRequirement: "€1,500-2,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through standard process",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Germany is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While Germany doesn't have a special immigration agreement with Argentina, German citizens benefit from 90-day tourist entry, digital nomad visa, strong EUR purchasing power, and a growing German business and expat community.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong EUR purchasing power",
        "Growing German business community",
        "German-Argentine Chamber of Commerce",
        "German international schools available"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Führungszeugnis from Germany with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Proof of address in Argentina",
        "Health insurance (recommended)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged. German banks have some presence. Wise popular for transfers.",
      banking: "Easy account opening with residency. Digital banks popular.",
      taxTreaty: true,
      taxTreatyDetails: "Germany-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "12,000-18,000",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "Villa General Belgrano (German heritage town)",
        "Bariloche",
        "Córdoba"
      ],
      associations: [
        { name: "Cámara Argentino-Alemana" },
        { name: "Goethe-Institut Buenos Aires" }
      ],
      facebookGroups: [
        "Deutsche in Buenos Aires",
        "Deutsche in Argentinien"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad or Work Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: digital nomad, work visa, or investment",
        "Gather documents (Führungszeugnis, birth certificate with apostille)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay/work during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Goethe-Institut offers excellent Spanish courses",
        "Villa General Belgrano is a German-heritage town with Oktoberfest",
        "German engineering and technical skills are highly valued",
        "Punctuality is less strict here - adapt to local timing",
        "German beer culture has influenced Argentine craft beer scene",
        "Consider the German School for families"
      ]
    },
    faqs: [
      {
        question: "Do German citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. The digital nomad visa is excellent for German remote workers."
      },
      {
        question: "Is there German cultural presence?",
        answer: "Yes, including Villa General Belgrano (German town), Goethe-Institut, German School, and strong business connections through the German-Argentine Chamber of Commerce."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Villa General Belgrano",
        url: "/provinces/cordoba",
        description: "German heritage town"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // AUSTRALIA - Full Featured Entry (English-Speaking, Working Holiday)
  {
    slug: "australia",
    name: "Australia",
    demonym: "Australian",
    flag: "🇦🇺",
    title: "Australian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Working holiday agreements, digital nomad pathway, and adventure opportunities",
    description: "Australians enjoy working holiday agreements and a growing digital nomad community. Favorable exchange rates make Argentina attractive for those with AUD income.",
    region: "oceania",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Australians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for Australian remote workers",
        incomeRequirement: "$2,000-2,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Working Holiday Visa available (18-30 years)",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: false,
        notes: "Australia is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Agreement",
      description: "Australia and Argentina have a Working Holiday Maker agreement allowing Australians aged 18-30 to work and travel in Argentina for up to 12 months. This provides a unique pathway not available to all nationalities.",
      benefits: [
        "Working Holiday Visa (18-30 years)",
        "12 months validity",
        "Can work for any employer",
        "Study up to 3 months",
        "Digital nomad visa also available",
        "Adventure tourism connections"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Australian Federal Police check required for residency"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of funds for Working Holiday",
        "Health insurance",
        "Return ticket or proof of onward travel"
      ]
    },
    practicalInfo: {
      currencyExchange: "AUD can be exchanged but USD preferred for better rates. Wise popular for transfers.",
      banking: "Open accounts with residency. Many Australians use international banks initially.",
      taxTreaty: true,
      taxTreatyDetails: "Australia-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000",
      mainLocations: [
        "Buenos Aires (Palermo, San Telmo)",
        "Bariloche (ski/outdoor hub)",
        "Mendoza",
        "Córdoba"
      ],
      associations: [
        { name: "Aussies in Argentina" },
        { name: "Australian-New Zealand Club BA" }
      ],
      facebookGroups: [
        "Australians in Buenos Aires",
        "Aussies in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Working Holiday or Digital Nomad Visa",
      timeline: "Working Holiday: Immediate. Digital nomad: 30-45 days. Citizenship in 2 years.",
      steps: [
        "Apply for Working Holiday Visa (if 18-30) OR enter on tourist visa",
        "For Working Holiday: apply before arrival, receive visa",
        "For residency: gather documents (AFP check, birth certificate)",
        "Apply for digital nomad or work visa",
        "Receive precaria (allows stay/work during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Working Holiday Visa is a huge advantage - use it if eligible",
        "Bariloche is popular with Australians - skiing, hiking, outdoor adventure",
        "Australian English is well understood",
        "Sports connections: rugby, polo both have Anglo-Argentine ties",
        "Working Holiday allows work in tourism, hospitality, English teaching",
        "Consider teaching English as entry point",
        "Adventure tourism sector connects well with Australian experience"
      ]
    },
    faqs: [
      {
        question: "Do Australians need a visa for Argentina?",
        answer: "Tourist entry: 90 days visa-free. For longer stays: Working Holiday Visa (ages 18-30) or digital nomad visa for remote workers."
      },
      {
        question: "What is the Working Holiday Visa?",
        answer: "Available to Australians aged 18-30, allows 12 months in Argentina with work rights. Can work for any employer, study up to 3 months."
      },
      {
        question: "Is there an Australian community?",
        answer: "Small but growing - approximately 5,000-8,000 Australians, concentrated in Buenos Aires and outdoor hubs like Bariloche."
      },
      {
        question: "Can I teach English as an Australian?",
        answer: "Yes, English teaching is a popular option, especially with the Working Holiday Visa. Native English speakers are in demand."
      },
      {
        question: "What's the best area for outdoor enthusiasts?",
        answer: "Bariloche in Patagonia - skiing, hiking, lakes. Known as the 'Switzerland of Argentina' and popular with adventure seekers."
      }
    ],
    relatedResources: [
      {
        title: "Working Holiday Information",
        url: "/visas/temporary",
        description: "Youth mobility program"
      },
      {
        title: "Bariloche Guide",
        url: "/cities/bariloche",
        description: "Outdoor adventure hub"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // NEW ZEALAND - Full Featured Entry (English-Speaking, Similar to Australia)
  {
    slug: "new-zealand",
    name: "New Zealand",
    demonym: "New Zealander",
    flag: "🇳🇿",
    title: "New Zealand Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Digital nomad pathway, adventure tourism, and growing expat community",
    description: "New Zealanders find Argentina attractive for adventure and lower cost of living. Digital nomad visa offers a pathway for remote workers seeking cultural experiences.",
    region: "oceania",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "New Zealanders enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for NZ remote workers",
        incomeRequirement: "$2,000-2,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "New Zealand is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While New Zealand doesn't have a special immigration agreement with Argentina, New Zealanders benefit from 90-day tourist entry, digital nomad visa, strong NZD purchasing power, and connections with the broader Anglo-Argentine community.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong NZD purchasing power",
        "Adventure tourism connections",
        "English-speaking community",
        "Similar profile to Australians"
      ]
    },
    documents: {
      passportValidity: "6 months recommended",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "NZ Police check required for residency"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Health insurance",
        "For digital nomad: proof of remote employment"
      ]
    },
    practicalInfo: {
      currencyExchange: "NZD can be exchanged but USD preferred. Wise popular for transfers.",
      banking: "Open accounts with residency. Many use international banks initially.",
      taxTreaty: true,
      taxTreatyDetails: "NZ-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "2,000-4,000",
      mainLocations: [
        "Buenos Aires",
        "Bariloche",
        "Mendoza"
      ],
      associations: [
        { name: "Kiwis in Argentina" }
      ],
      facebookGroups: [
        "New Zealanders in Buenos Aires",
        "Kiwis in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: digital nomad (if remote worker) or work visa",
        "Gather documents (NZ Police check, birth certificate)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay/work during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Digital nomad visa is excellent for remote workers",
        "Adventure tourism sector values NZ experience",
        "Bariloche popular with outdoor enthusiasts",
        "English teaching opportunities available",
        "Connect with Australian community as well",
        "Rugby connections can help with integration"
      ]
    },
    faqs: [
      {
        question: "Do New Zealanders need a visa for Argentina?",
        answer: "90 days visa-free. For longer stays: digital nomad visa for remote workers or work visa with sponsorship."
      },
      {
        question: "Is there a big NZ community?",
        answer: "Small but growing - approximately 2,000-4,000 New Zealanders in Argentina, often connected with Australian community."
      },
      {
        question: "Can I work remotely from Argentina?",
        answer: "Yes! The digital nomad visa is perfect for NZ remote workers. You can work for NZ companies while legally residing in Argentina."
      },
      {
        question: "Are there outdoor adventure opportunities?",
        answer: "Absolutely. Patagonia offers world-class hiking, skiing, climbing. Mendoza for wine and mountains. Bariloche is an outdoor hub."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Remote worker pathway"
      },
      {
        title: "Patagonia Adventure Guide",
        url: "/guides/patagonia",
        description: "Outdoor activities"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // CHINA - Full Featured Entry (Major Asian Community)
  {
    slug: "china",
    name: "China",
    demonym: "Chinese",
    flag: "🇨🇳",
    title: "Chinese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, business opportunities, and cultural exchange",
    description: "The Chinese community is one of Argentina's most established Asian communities. Opportunities in trade, gastronomy, and professional sectors welcome expats.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Chinese citizens require tourist visa before arrival",
        reciprocityFee: false,
        feeAmount: "$150-200 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or business ownership",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "China is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While China doesn't have a special immigration agreement with Argentina, Chinese citizens benefit from one of the most established Asian communities in Argentina, significant business networks, and growing cultural institutions.",
      benefits: [
        "Established Chinese community with deep roots",
        "Strong business networks in trade and import/export",
        "Chinese supermarkets and restaurants throughout BA",
        "Chinese-language media and services",
        "Growing professional opportunities",
        "Cultural associations and support"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Chinese police certificate with apostille required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Visa application (required before arrival)",
        "Proof of means of support",
        "Proof of address in Argentina",
        "For business: commercial documentation"
      ]
    },
    practicalInfo: {
      currencyExchange: "RMB can be exchanged in BA. Chinese banks (ICBC) operate in Argentina. WeChat Pay/Alipay limited but growing.",
      banking: "ICBC Argentina (Industrial and Commercial Bank of China) has significant presence. Easy account opening with residency.",
      taxTreaty: true,
      taxTreatyDetails: "China-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "120,000-200,000 (largest Asian community)",
      mainLocations: [
        "Buenos Aires (Belgrano - Chinatown, Once, Flores)",
        "La Plata",
        "Rosario",
        "Mendoza"
      ],
      associations: [
        { name: "Federación de Asociaciones Chinas" },
        { name: "Instituto Confucio Buenos Aires" }
      ],
      facebookGroups: [
        "华人阿根廷",
        "Chinese in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Business/Investment or Work Visa",
      timeline: "Business visa: 60-90 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Apply for tourist visa at Argentine consulate in China",
        "Enter Argentina (90 days)",
        "Establish business or find employment",
        "Apply for business or work visa",
        "Gather documents (police certificate, birth certificate)",
        "Receive precaria (allows stay during processing)",
        "Pick up residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Apply for tourist visa well in advance",
        "Belgrano (Barrio Chino) is the heart of Chinese community",
        "Chinese supermarkets provide familiar products",
        "Business opportunities strong in import/export",
        "Learn Spanish - essential for business",
        "ICBC bank provides Chinese-language services",
        "Chinese New Year celebrated throughout Buenos Aires"
      ]
    },
    faqs: [
      {
        question: "Do Chinese citizens need a visa for Argentina?",
        answer: "Yes, Chinese citizens must obtain a tourist visa before arrival (90 days). Apply at Argentine consulate in China."
      },
      {
        question: "How big is the Chinese community?",
        answer: "One of the largest Asian communities - approximately 120,000-200,000 Chinese citizens in Argentina, with deep historical roots."
      },
      {
        question: "Is there a Chinatown in Buenos Aires?",
        answer: "Yes, Belgrano neighborhood has Barrio Chino (Chinatown) with Chinese supermarkets, restaurants, and cultural institutions."
      },
      {
        question: "Can I open a business as a Chinese citizen?",
        answer: "Yes, many Chinese citizens own businesses in Argentina. The business visa pathway is well-established."
      },
      {
        question: "Are there Chinese banks in Argentina?",
        answer: "Yes, ICBC (Industrial and Commercial Bank of China) has significant presence and offers Chinese-language services."
      }
    ],
    relatedResources: [
      {
        title: "Business Visa Guide",
        url: "/visas/investment",
        description: "For entrepreneurs"
      },
      {
        title: "Chinatown BA",
        url: "/neighborhoods/belgrano",
        description: "Barrio Chino guide"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // JAPAN - Full Featured Entry (Growing Professional Community)
  {
    slug: "japan",
    name: "Japan",
    demonym: "Japanese",
    flag: "🇯🇵",
    title: "Japanese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Cultural exchange, professional opportunities, and unique bilateral connections",
    description: "Japan and Argentina maintain strong cultural and economic ties. Japanese citizens find opportunities in technology sectors with a community in Buenos Aires.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Japanese citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,500-2,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through sponsorship",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Japan is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While Japan doesn't have a special immigration agreement with Argentina, Japanese citizens benefit from visa-free entry, strong bilateral business relationships, significant Japanese corporate presence, and an established Japanese cultural community.",
      benefits: [
        "90-day visa-free entry",
        "Strong Japanese corporate presence (automotive, technology)",
        "Japanese garden and cultural center in BA",
        "Japanese gastronomy highly regarded",
        "Cultural exchange programs",
        "Established Japanese community"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Japanese police certificate (keisatsu shōmeisho) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Proof of address in Argentina",
        "For work visa: employment contract"
      ]
    },
    practicalInfo: {
      currencyExchange: "JPY can be exchanged in BA. Japanese banks have limited presence. Wise popular for transfers.",
      banking: "Open accounts with residency. International banks or digital banks popular.",
      taxTreaty: true,
      taxTreatyDetails: "Japan-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "10,000-15,000",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "Around Japanese companies (automotive plants)"
      ],
      associations: [
        { name: "Asociación Japonesa en Argentina" },
        { name: "Jardín Japonés Buenos Aires" }
      ],
      facebookGroups: [
        "日本人 アルゼンチン",
        "Japanese in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Work Visa or Digital Nomad",
      timeline: "Work visa: 60-90 days. Digital nomad: 30-45 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: work visa with sponsorship or digital nomad",
        "Gather documents (police certificate, birth certificate)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Japanese automotive companies (Toyota, Honda) have plants in Argentina",
        "Jardín Japonés (Japanese Garden) is a cultural center",
        "Japanese gastronomy highly valued - opportunities for chefs",
        "Technology sector welcomes Japanese professionals",
        "Learn Spanish - essential for daily life",
        "Japan-Argentina cultural exchange is active",
        "Judo and martial arts connections strong"
      ]
    },
    faqs: [
      {
        question: "Do Japanese citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. For longer stays: work visa with sponsorship or digital nomad visa for remote workers."
      },
      {
        question: "Is there a Japanese community in Buenos Aires?",
        answer: "Yes, approximately 10,000-15,000 Japanese citizens. The Jardín Japonés is a major cultural center."
      },
      {
        question: "Are there Japanese companies in Argentina?",
        answer: "Yes, major Japanese automotive companies (Toyota, Honda) have manufacturing plants and operations in Argentina."
      },
      {
        question: "Can I find Japanese food products?",
        answer: "Yes, Japanese supermarkets and products available in Buenos Aires, especially in Belgrano and Palermo neighborhoods."
      }
    ],
    relatedResources: [
      {
        title: "Work Visa Information",
        url: "/visas/work",
        description: "Employment pathway"
      },
      {
        title: "Japanese Garden BA",
        url: "/attractions/japanese-garden",
        description: "Cultural center"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ECUADOR - Full Featured Entry (Mercosur Associate, Andean Community)
  {
    slug: "ecuador",
    name: "Ecuador",
    demonym: "Ecuadorian",
    flag: "🇪🇨",
    title: "Ecuadorian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur associate benefits, Andean connections, and growing community",
    description: "Ecuadorians enjoy preferential immigration access as Mercosur associates. 2-year renewable residency with work authorization and opportunities across sectors.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Ecuadorians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur associate is better",
        incomeRequirement: "$1,000-1,500/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work authorization with Mercosur associate residency",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Ecuador is a Mercosur associate member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Associate Membership",
      description: "Ecuador joined Mercosur as an associate member, granting Ecuadorians 2-year renewable residency with work rights in Argentina and a pathway to citizenship in 2 years.",
      benefits: [
        "2-year renewable residency",
        "Full work authorization",
        "No entry visa required",
        "Path to citizenship in 2 years",
        "Can work immediately upon application",
        "Family reunification available"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado de Antecedentes Penales from Ecuador"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support"
      ]
    },
    practicalInfo: {
      currencyExchange: "USD is Ecuador's currency - easily exchanged in Argentina. Wise popular for transfers.",
      banking: "Open accounts with residency. Many Ecuadorians use digital banks.",
      taxTreaty: true,
      taxTreatyDetails: "Ecuador-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "30,000-50,000 (growing)",
      mainLocations: [
        "Buenos Aires (Flores, Caballito)",
        "Córdoba",
        "Rosario"
      ],
      associations: [
        { name: "Asociación de Ecuatorianos en Argentina" }
      ],
      facebookGroups: [
        "Ecuatorianos en Buenos Aires",
        "Ecuatorianos en Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Associate Residency",
      timeline: "30-60 days for card. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free)",
        "Gather apostilled documents from Ecuador",
        "Apply for Mercosur associate residency",
        "Receive precaria (can work immediately)",
        "Pick up card in 30-60 days",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Get documents apostilled in Ecuador before traveling",
        "Ecuadorian accent is understood - similar vocabulary",
        "Growing community provides support network",
        "Many work in services, construction, and hospitality",
        "Andean cultural connections with Argentine northwest"
      ]
    },
    faqs: [
      {
        question: "Do Ecuadorians need a visa for Argentina?",
        answer: "No visa needed for 90 days. For longer stays, Mercosur associate residency provides 2 years with work rights."
      },
      {
        question: "How big is the Ecuadorian community?",
        answer: "Growing rapidly - approximately 30,000-50,000 Ecuadorians in Argentina, concentrated in Buenos Aires."
      },
      {
        question: "Can I work immediately with Mercosur residency?",
        answer: "Yes! Once you apply, you receive precaria allowing immediate work authorization while your card is processed."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Associate Residency",
        url: "/visas/temporary",
        description: "Associate member details"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // PORTUGAL - Full Featured Entry (European, Brazilian Connections)
  {
    slug: "portugal",
    name: "Portugal",
    demonym: "Portuguese",
    flag: "🇵🇹",
    title: "Portuguese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "European pathway, Brazilian connections, and cultural ties",
    description: "Portuguese citizens find Argentina attractive for lower cost of living and European lifestyle. Ties through language and Latin heritage support the community.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Portuguese citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "€1,500-2,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through standard process",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Portugal is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While Portugal doesn't have a special immigration agreement with Argentina, Portuguese citizens benefit from 90-day tourist entry, digital nomad visa, and strong cultural connections through Brazil and shared Latin heritage.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Portuguese language understood due to Brazilian influence",
        "European professional qualifications recognized",
        "Cultural affinity with Argentine lifestyle"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado do Registo Criminal from Portugal"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged. Portuguese banks have limited presence. Wise popular for transfers.",
      banking: "Open accounts with residency. Digital banks popular.",
      taxTreaty: true,
      taxTreatyDetails: "Portugal-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "8,000-12,000",
      mainLocations: [
        "Buenos Aires",
        "Mendoza",
        "Mar del Plata"
      ],
      associations: [
        { name: "Centro Portugués de Buenos Aires" }
      ],
      facebookGroups: [
        "Portugueses em Buenos Aires",
        "Portugueses na Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad or Work Visa",
      timeline: "Digital nomad: 30-45 days. Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: digital nomad or work visa",
        "Gather documents (criminal record, birth certificate)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Portuguese is understood due to Brazilian TV and culture",
        "Brazilian Portuguese and Argentine Spanish similarities help",
        "Portuguese cuisine connections (pastel de nata popular)",
        "Consider teaching Portuguese (growing demand)",
        "Portuguese professionals in design, arts do well"
      ]
    },
    faqs: [
      {
        question: "Do Portuguese citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. Digital nomad visa available for remote workers."
      },
      {
        question: "Is Portuguese understood in Argentina?",
        answer: "Somewhat - Brazilian Portuguese is familiar through media, though Argentine Spanish differs. You'll find many similarities."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SOUTH KOREA - Full Featured Entry (Growing Asian Community)
  {
    slug: "south-korea",
    name: "South Korea",
    demonym: "South Korean",
    flag: "🇰🇷",
    title: "South Korean Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, business opportunities, and cultural exchange",
    description: "The South Korean community has grown with presence in technology sectors. Opportunities and cultural appreciation welcome Korean expats to Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "South Koreans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "$1,500-2,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through sponsorship",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "South Korea is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While South Korea doesn't have a special immigration agreement with Argentina, Korean citizens benefit from visa-free entry, strong business presence (automotive, electronics), and growing Korean cultural popularity.",
      benefits: [
        "90-day visa-free entry",
        "Strong Korean corporate presence (automotive, technology)",
        "Growing Korean cultural popularity (K-pop, K-drama)",
        "Korean gastronomy increasingly popular",
        "Active Korean community"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Korean police certificate (범죄경력회보서) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "KRW can be exchanged in BA. Wise popular for transfers.",
      banking: "Open accounts with residency. Digital banks popular.",
      taxTreaty: true,
      taxTreatyDetails: "Korea-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "25,000-35,000",
      mainLocations: [
        "Buenos Aires (Flores, Belgrano)",
        "Around Korean company offices"
      ],
      associations: [
        { name: "Asociación Coreana de Argentina" }
      ],
      facebookGroups: [
        "한인 아르헨티나",
        "Koreans in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Work Visa or Business Visa",
      timeline: "Work visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Find employment or establish business",
        "Gather documents (police certificate, birth certificate)",
        "Apply for work or business visa",
        "Receive precaria (allows stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Korean automotive and electronics companies have presence",
        "Korean cuisine increasingly popular - restaurant opportunities",
        "Korean language teaching demand growing",
        "K-pop/K-drama fanbase creates cultural connections",
        "Study Spanish - essential for daily life"
      ]
    },
    faqs: [
      {
        question: "Do South Koreans need a visa for Argentina?",
        answer: "No visa required for 90 days. For longer stays: work visa with sponsorship or business visa."
      },
      {
        question: "How big is the Korean community?",
        answer: "Approximately 25,000-35,000 South Koreans in Argentina, with strong business and cultural presence."
      },
      {
        question: "Are there Korean restaurants?",
        answer: "Yes, growing number of Korean restaurants in Buenos Aires, especially in Flores and Belgrano neighborhoods."
      }
    ],
    relatedResources: [
      {
        title: "Work Visa Information",
        url: "/visas/work",
        description: "Employment pathway"
      }
    ],
    image: "/images/nationalities/default.webp"
  },

  // NETHERLANDS - Full Featured Entry (European, Business Focus)
  {
    slug: "netherlands",
    name: "Netherlands",
    demonym: "Dutch",
    flag: "🇳🇱",
    title: "Dutch Citizens in Argentina: Complete Immigration Guide",
    subtitle: "European pathway, agricultural connections, and growing business presence",
    description: "Dutch citizens are drawn to Argentina for agricultural business and lower cost of living. Agricultural and trade relationships between the Netherlands and Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Dutch citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers",
        incomeRequirement: "€1,500-2,000/month equivalent"
      },
      work: {
        eligible: true,
        notes: "Work visa available through sponsorship",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Netherlands is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "While the Netherlands doesn't have a special immigration agreement with Argentina, Dutch citizens benefit from 90-day tourist entry, digital nomad visa, and strong agricultural and trade business relationships.",
      benefits: [
        "90-day visa-free entry (extendable to 180 days)",
        "Digital nomad visa available",
        "Strong agricultural business connections",
        "Dutch agricultural expertise highly valued",
        "English widely spoken in business"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Dutch police certificate (Verklaring Omtrent Gedrag) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of means of support",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged. Wise popular for transfers.",
      banking: "Open accounts with residency. Digital banks popular.",
      taxTreaty: true,
      taxTreatyDetails: "Netherlands-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000",
      mainLocations: [
        "Buenos Aires",
        "Agricultural regions (Pampas)",
        "Mendoza"
      ],
      associations: [
        { name: "Dutch Business Club Argentina" }
      ],
      facebookGroups: [
        "Dutch in Buenos Aires",
        "Nederlanders in Argentinië"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad or Business Visa",
      timeline: "Digital nomad: 30-45 days. Business visa: 60-90 days. Citizenship in 2 years.",
      steps: [
        "Enter Argentina on 90-day tourist visa",
        "Choose pathway: digital nomad, work visa, or business/investment",
        "Gather documents (police certificate, birth certificate)",
        "Apply for chosen visa type",
        "Receive precaria (allows stay during processing)",
        "Pick up visa/residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Dutch agricultural expertise highly valued in Argentina",
        "Consider agribusiness opportunities",
        "English widely understood in business settings",
        "Dutch directness may need softening - Argentine communication is indirect",
        "Cycling culture minimal - adjust expectations",
        "Argentine work hours are later than Dutch norms"
      ]
    },
    faqs: [
      {
        question: "Do Dutch citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. Digital nomad visa available for remote workers."
      },
      {
        question: "Are there Dutch business opportunities?",
        answer: "Yes, particularly in agriculture, agribusiness, and technology sectors where Dutch expertise is highly valued."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Investment Visa",
        url: "/visas/investment",
        description: "Business pathway"
      }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "russia",
    name: "Russia",
    demonym: "Russian",
    flag: "🇷🇺",
    title: "Russian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing Russian community, streamlined visa pathways, and new opportunities",
    description: "Russians find Argentina offers stability with no visa required for tourism. Straightforward temporary residency process and a welcoming community in Buenos Aires.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Russians enter visa-free with valid passport. Extensions available via migraciones.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular option for Russians working remotely. Streamlined process.",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires employer sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "No bilateral immigration agreement, but Argentina welcomes Russian immigrants through standard visa pathways including tourist, work, and digital nomad options.",
      benefits: [
        "90-day visa-free entry",
        "Straightforward visa extensions",
        "Digital nomad visa available",
        "Path to permanent residency"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police certificate with apostille required for residency"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of income or employment",
        "Health insurance (for digital nomad visa)",
        "Proof of address in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "RUB is not easily exchanged in Argentina. Bring USD/EUR or use crypto/Wise for transfers.",
      banking: "Russian cards don't work in Argentina. Open local account or use international cards/ Wise/ crypto.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult accountant for tax residency planning.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-20,000 (growing rapidly since 2022)",
      mainLocations: ["Buenos Aires (Palermo, Belgrano)", "Mar del Plata", "Córdoba"],
      associations: [
        { name: "Russian Community Buenos Aires", url: "https://facebook.com/groups/rusosenargentina" }
      ],
      facebookGroups: [
        "Русские в Аргентине / Russians in Argentina",
        "Русскоязычные в Буэнос-Айресе"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa (transitory residency for remote workers)",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate at migraciones.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa online or at migraciones",
        "Submit criminal record, proof of income, health insurance",
        "Receive temporary residency (1 year, renewable)",
        "After 2 years, apply for permanent residency"
      ],
      tips: [
        "Apply for residency within first 90 days",
        "Digital nomad visa is fastest route for remote workers",
        "Join Russian community groups for support",
        "Learn basic Spanish for bureaucratic processes"
      ]
    },
    faqs: [
      {
        question: "Do Russians need a visa for Argentina?",
        answer: "No! Russians can enter visa-free for up to 90 days, extendable to 180 days at migraciones. For longer stays, apply for temporary residency."
      },
      {
        question: "What is the easiest visa for Russians?",
        answer: "The Digital Nomad Visa is the most straightforward for remote workers. It grants 1-year temporary residency and can lead to permanent residency."
      },
      {
        question: "How big is the Russian community in Argentina?",
        answer: "Approximately 15,000-20,000 Russians live in Argentina, with the community growing rapidly since 2022. Most are in Buenos Aires (Palermo, Belgrano)."
      },
      {
        question: "Can Russian bank cards be used in Argentina?",
        answer: "No, Russian cards don't work in Argentina. You'll need to bring cash (USD/EUR), use Wise/Revolut, or open a local Argentine bank account."
      },
      {
        question: "How long until Russians can get permanent residency?",
        answer: "After 2 years of temporary residency (digital nomad or other), you can apply for permanent residency, which leads to citizenship eligibility after 2 more years."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "Full guide to Argentina's digital nomad visa" },
      { title: "Temporary Residency", url: "/visas/temporary", description: "All temporary residency options" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "india",
    name: "India",
    demonym: "Indian",
    flag: "🇮🇳",
    title: "Indian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing business ties, student pathways, and community connections",
    description: "Argentina and India share growing business ties. Indian professionals find opportunities in tech and education with a well-established community in Buenos Aires.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (must obtain visa beforehand)",
        notes: "Indian citizens need to apply for tourist visa at Argentine consulate. Processing time: 2-4 weeks.",
        reciprocityFee: false,
        feeAmount: "$150-200 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available option for remote workers with consistent income",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires pre-arranged employment contract",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "No specific bilateral immigration agreement, but strong diplomatic ties facilitate visa processing.",
      benefits: [
        "Student visa pathway available",
        "Business visa for entrepreneurs",
        "Digital nomad option for remote workers"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Clearance Certificate (PCC) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Passport photos (4x4cm Argentine size)",
        "Travel itinerary and accommodation proof",
        "Bank statements (3-6 months)",
        "Health insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "INR not exchanged in Argentina. Bring USD or use Wise/Remitly for transfers.",
      banking: "Indian cards may have limited acceptance. Best to open local account or use international cards.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Plan for tax residency carefully.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000",
      mainLocations: ["Buenos Aires", "Córdoba (IT sector)", "Mendoza (agriculture)"],
      associations: [
        { name: "Indian Association of Argentina", url: "https://facebook.com/indianassociationargentina" }
      ],
      facebookGroups: [
        "Indians in Argentina",
        "Indian Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Student Visa (for those pursuing education)",
      timeline: "Student visa: 1-2 months processing. Digital nomad: 30-60 days.",
      steps: [
        "Obtain tourist visa from Argentine consulate in India",
        "Enter Argentina and explore opportunities",
        "Apply for student visa (if enrolled) or digital nomad visa",
        "Complete required documentation with apostille",
        "After 2 years temporary residency, apply for permanent"
      ],
      tips: [
        "Apply for visas well in advance (2-3 months)",
        "Student visa is most straightforward path",
        "Learn Spanish before arriving - essential for daily life",
        "Connect with Indian community for support"
      ]
    },
    faqs: [
      {
        question: "Do Indians need a visa for Argentina?",
        answer: "Yes, Indian citizens must obtain a visa before traveling. Apply at the Argentine consulate in India with required documentation. Processing takes 2-4 weeks."
      },
      {
        question: "What is the best visa option for Indians?",
        answer: "Student visa if pursuing education (fastest path), or digital nomad visa for remote workers with consistent income."
      },
      {
        question: "Is there an Indian community in Argentina?",
        answer: "Yes, approximately 3,000-5,000 Indians live in Argentina, mainly in Buenos Aires and Córdoba's tech sector. The Indian Association of Argentina provides community support."
      },
      {
        question: "Can I work on a tourist visa in Argentina?",
        answer: "No, working on a tourist visa is illegal. You must obtain a work visa or temporary residency with work authorization before starting employment."
      },
      {
        question: "How long does permanent residency take?",
        answer: "After 2 years of legal temporary residency (student, work, or digital nomad), you can apply for permanent residency. Citizenship eligibility follows after 2 more years."
      }
    ],
    relatedResources: [
      { title: "Student Visa Guide", url: "/visas/student", description: "Complete student visa information" },
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "Remote worker visa details" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "south-africa",
    name: "South Africa",
    demonym: "South African",
    flag: "🇿🇦",
    title: "South African Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Working holiday agreement, vibrant community, and lifestyle opportunities",
    description: "South Africans enjoy working holiday agreements for up to a year. Growing community of retirees and professionals in Buenos Aires and coastal areas of Argentina.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "South Africans enter visa-free. Extensions available at migraciones.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Great option for remote workers from South Africa",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or working holiday visa (ages 18-30)",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Agreement",
      description: "South Africa and Argentina have a working holiday agreement allowing citizens aged 18-30 to work and travel in Argentina for up to 12 months.",
      benefits: [
        "12-month working holiday visa",
        "Can work for any employer",
        "Multiple entry allowed",
        "Open to ages 18-30"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate (SAPS) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of funds for working holiday",
        "Health insurance",
        "Return flight ticket or funds",
        "Working holiday application form"
      ]
    },
    practicalInfo: {
      currencyExchange: "ZAR can be exchanged at casas de cambio but rates vary. USD is preferred.",
      banking: "South African cards work in Argentina. Consider opening local account for long-term stays.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Check with SARS about tax residency implications.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires", "Mar del Plata", "Bariloche"],
      associations: [
        { name: "South Africans in Argentina", url: "https://facebook.com/groups/southafricansargentina" }
      ],
      facebookGroups: [
        "South Africans in Argentina",
        "Saffas in Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Working Holiday Visa (ages 18-30)",
      timeline: "Working holiday: 4-6 weeks processing. Tourist extension: immediate.",
      steps: [
        "If 18-30: Apply for working holiday visa at Argentine consulate",
        "For older applicants: Enter as tourist (90 days)",
        "Apply for temporary residency (digital nomad or work visa)",
        "Submit required documentation",
        "After 2 years, apply for permanent residency"
      ],
      tips: [
        "Working holiday visa is perfect for young South Africans",
        "Apply early - limited quota each year",
        "Learn Spanish before arrival",
        "Connect with Saffa community for housing tips"
      ]
    },
    faqs: [
      {
        question: "Do South Africans need a visa for Argentina?",
        answer: "No for tourism - South Africans get 90 days visa-free. For working holiday (ages 18-30), apply in advance. For work, you'll need a work visa."
      },
      {
        question: "What is the working holiday visa?",
        answer: "A special agreement allowing South Africans aged 18-30 to work and travel in Argentina for up to 12 months. You can work for any employer and it's renewable in some cases."
      },
      {
        question: "Can South Africans retire in Argentina?",
        answer: "Yes! Argentina's retirement visa requires proof of stable passive income (pension, investments, rental income). Many South Africans choose coastal areas like Mar del Plata."
      },
      {
        question: "Is there a South African community in Argentina?",
        answer: "Yes, approximately 2,000-3,000 South Africans live in Argentina, concentrated in Buenos Aires, Mar del Plata, and Bariloche. Facebook groups provide excellent support."
      },
      {
        question: "How long until permanent residency?",
        answer: "After 2 years of temporary residency (working holiday can convert to temporary), you can apply for permanent residency, leading to citizenship after 2 more years."
      }
    ],
    relatedResources: [
      { title: "Working Holiday Visa", url: "/visas/working-holiday", description: "Complete working holiday information" },
      { title: "Retirement Visa", url: "/visas/retirement", description: "Pensioner and retirement options" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "israel",
    name: "Israel",
    demonym: "Israeli",
    flag: "🇮🇱",
    title: "Israeli Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Strong historical ties, vibrant Jewish community, and business opportunities",
    description: "Israelis find a welcoming environment in Argentina, home to the largest Jewish community in Latin America. Opportunities in tech startups with cultural connections.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Israelis enter visa-free. Extensions available at migraciones for ARS 12,000.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular among Israeli tech workers and digital entrepreneurs",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa available through sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "No specific bilateral immigration agreement, but strong cultural ties through the large Jewish community facilitate integration.",
      benefits: [
        "Visa-free entry (90 days)",
        "Strong Jewish community support",
        "Hebrew-speaking services available",
        "Kosher food widely available in BA"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Teudat Yosher from Israeli Police with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of income or employment",
        "Health insurance",
        "Argentine address proof"
      ]
    },
    practicalInfo: {
      currencyExchange: "ILS not easily exchanged. Bring USD or use Wise/Revolut.",
      banking: "Israeli cards work in Argentina. Many Israelis use Leumi Bank or open local accounts.",
      taxTreaty: true,
      taxTreatyDetails: "Israel-Argentina tax treaty prevents double taxation. Consult accountant for details.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "200,000+ Jewish community; 3,000-5,000 Israeli nationals",
      mainLocations: ["Buenos Aires (Once, Belgrano, Palermo)", "Córdoba", "Rosario"],
      associations: [
        { name: "AMIA - Jewish Community Center", url: "https://amia.org.ar" },
        { name: "Israeli Embassy Buenos Aires", url: "https://embassies.gov.il/buenos-aires" }
      ],
      facebookGroups: [
        "Israelis in Argentina",
        "ישראלים בארגנטינה"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for tech workers, or Community ties for those with Jewish heritage",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate at migraciones.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Explore community connections and opportunities",
        "Apply for temporary residency (digital nomad or work visa)",
        "Submit documentation with apostille",
        "After 2 years, apply for permanent residency"
      ],
      tips: [
        "Connect with AMIA and Jewish community organizations",
        "Many synagogues offer Hebrew services",
        "Kosher restaurants concentrated in Once and Belgrano",
        "Israeli tech scene is growing in Buenos Aires"
      ]
    },
    faqs: [
      {
        question: "Do Israelis need a visa for Argentina?",
        answer: "No! Israelis can enter visa-free for 90 days, extendable to 180 days at migraciones. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Jewish community in Argentina?",
        answer: "Yes! Argentina has the largest Jewish community in Latin America (200,000+). Buenos Aires has synagogues, kosher restaurants, Jewish schools, and cultural centers."
      },
      {
        question: "Can I get kosher food in Argentina?",
        answer: "Absolutely. Buenos Aires has numerous kosher restaurants, supermarkets, and bakeries, especially in the Once and Belgrano neighborhoods."
      },
      {
        question: "Is there an Israeli community in Buenos Aires?",
        answer: "Yes, approximately 3,000-5,000 Israeli nationals live in Argentina, plus a large Jewish community. Many organizations serve the Israeli community including the embassy and cultural centers."
      },
      {
        question: "How can Israelis get permanent residency?",
        answer: "After 2 years of temporary residency (digital nomad, work visa, or other), Israelis can apply for permanent residency. Citizenship is possible after 2 more years."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "Guide for remote workers" },
      { title: "Buenos Aires Jewish Guide", url: "/guides/jewish-buenos-aires", description: "Kosher dining and community info" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "ireland",
    name: "Ireland",
    demonym: "Irish",
    flag: "🇮🇪",
    title: "Irish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Working holiday agreement, Celtic connections, and entrepreneurial opportunities",
    description: "Irish citizens enjoy working holiday agreements and visa-free travel. Deep historical ties with Argentina, home to the fifth-largest Irish diaspora globally.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Irish citizens enter visa-free. Extensions available at migraciones.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent option for Irish remote workers and tech professionals",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa available through sponsorship or working holiday (ages 18-35)",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Agreement",
      description: "Ireland and Argentina have a working holiday agreement allowing Irish citizens aged 18-35 to work and travel in Argentina for up to 12 months, with possible extension.",
      benefits: [
        "12-month working holiday visa",
        "Can work for any employer",
        "Ages 18-35 eligible",
        "Possible to extend in certain circumstances"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Irish Police Certificate with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of funds (working holiday)",
        "Health insurance",
        "Return flight or proof of onward travel",
        "Working holiday application"
      ]
    },
    practicalInfo: {
      currencyExchange: "EUR easily exchanged at casas de cambio. Good rates for euro.",
      banking: "Irish cards work well in Argentina. Revolut/ N26 popular for transfers.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty, but both countries have foreign income exemptions for temporary residents.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "600,000+ of Irish descent; 2,000-3,000 Irish nationals",
      mainLocations: ["Buenos Aires", "Córdoba", "Lobos (Irish heritage town)"],
      associations: [
        { name: "Irish Argentine Society", url: "https://facebook.com/irishargentine" },
        { name: "Embassy of Ireland Buenos Aires", url: "https://www.dfa.ie/irish-embassy/argentina" }
      ],
      facebookGroups: [
        "Irish in Argentina",
        "Irish Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Working Holiday Visa (ages 18-35) - fastest path",
      timeline: "Working holiday: 4-6 weeks. Digital nomad: 30-60 days.",
      steps: [
        "If 18-35: Apply for working holiday visa",
        "Enter Argentina and explore",
        "Apply for temporary residency before working holiday expires",
        "Submit required documentation",
        "After 2 years total temporary residency, apply for permanent"
      ],
      tips: [
        "Working holiday visa is perfect for young Irish",
        "Irish pubs in Buenos Aires provide community connections",
        "Visit Lobos - town founded by Irish immigrants",
        "St. Patrick's Day is celebrated throughout Argentina"
      ]
    },
    faqs: [
      {
        question: "Do Irish citizens need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For working holiday (ages 18-35), apply at the Argentine consulate in Dublin. For work, you'll need a work visa."
      },
      {
        question: "Is there an Irish community in Argentina?",
        answer: "Yes! Argentina has the 5th largest Irish diaspora globally (600,000+ of Irish descent). Buenos Aires has Irish pubs, cultural societies, and even a town (Lobos) founded by Irish immigrants."
      },
      {
        question: "What is the working holiday visa for Irish citizens?",
        answer: "Allows Irish citizens aged 18-35 to live and work in Argentina for 12 months. You can work for any employer. Apply through the Argentine consulate in Dublin."
      },
      {
        question: "Can Irish citizens get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency (working holiday can convert), Irish citizens can apply for permanent residency, leading to citizenship after 2 more years."
      },
      {
        question: "Are there Irish pubs in Buenos Aires?",
        answer: "Absolutely! Buenos Aires has numerous Irish pubs including The Kilkenny, Buller Pub, and others. They're popular gathering spots for the Irish community and offer authentic Irish atmosphere."
      }
    ],
    relatedResources: [
      { title: "Working Holiday Visa", url: "/visas/working-holiday", description: "Irish working holiday details" },
      { title: "Irish Heritage in Argentina", url: "/guides/irish-argentina", description: "Historical Irish connections" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "argentina",
    name: "Argentina",
    demonym: "Argentine",
    flag: "🇦🇷",
    title: "Argentine Citizens: Returning Home & Dual Citizenship Guide",
    subtitle: "Information for Argentine citizens abroad considering return or dual citizenship",
    description: "Argentine citizens returning home find welcoming repatriation benefits. Guide covers citizenship by descent and pathways for those with foreign-born children.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "Unlimited (citizenship)",
        notes: "Argentine citizens have unrestricted right of return and residence",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: false,
        notes: "Not applicable for citizens",
        incomeRequirement: "N/A"
      },
      work: {
        eligible: true,
        notes: "Full work rights as citizen",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Argentina is founding member of Mercosur"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Full Member",
      description: "As a founding member of Mercosur, Argentine citizens enjoy freedom of movement across all member countries and visa-free access to associate members.",
      benefits: [
        "Freedom of movement in Mercosur",
        "Visa-free access to 174+ countries",
        "Right to reside in any Mercosur country",
        "Consular protection worldwide"
      ]
    },
    documents: {
      passportValidity: "Valid 10 years (adults), 5 years (minors)",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Not required for citizens"
      },
      birthCertificate: {
        required: true,
        apostille: false
      },
      additionalDocs: [
        "DNI (Documento Nacional de Identidad)",
        "Proof of residence abroad (if returning)"
      ]
    },
    practicalInfo: {
      currencyExchange: "ARS is local currency. Foreign income advantageous due to exchange rate differentials.",
      banking: "Full banking access. Dollar accounts available. Argentine citizens can hold foreign currency accounts.",
      taxTreaty: false,
      taxTreatyDetails: "Worldwide income taxation applies. Consult accountant for foreign income reporting.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "46+ million citizens",
      mainLocations: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Mar del Plata"],
      associations: [
        { name: "Consulados Argentinos Worldwide", url: "https://cancilleria.gob.ar" }
      ],
      facebookGroups: [
        "Argentinos Retornando",
        "Argentinos en el Exterior"
      ]
    },
    residencyPath: {
      easiestRoute: "Birthright citizenship (jus soli) - immediate",
      timeline: "Immediate for citizens by birth. Naturalization: 2 years legal residency.",
      steps: [
        "Verify citizenship status (birth certificate or DNI)",
        "Obtain/renew Argentine passport",
        "Update DNI if needed",
        "Register residence with local authorities",
        "Access full citizen benefits"
      ],
      tips: [
        "Children born abroad to Argentine parents can claim citizenship",
        "Renouncing citizenship requires specific legal process",
        "Military service no longer mandatory",
        "Voting is mandatory for citizens 18-70"
      ]
    },
    faqs: [
      {
        question: "Can I return to Argentina if I have dual citizenship?",
        answer: "Yes! Argentina allows and recognizes dual citizenship. You can return anytime using your Argentine passport or DNI, with full citizen rights."
      },
      {
        question: "Can my children born abroad get Argentine citizenship?",
        answer: "Yes. Children born abroad to at least one Argentine parent are entitled to Argentine citizenship by descent. Register them at the nearest consulate."
      },
      {
        question: "Do I need to do military service?",
        answer: "No. Military service has been voluntary since 1994. There are no obligations for returning citizens."
      },
      {
        question: "Is voting mandatory?",
        answer: "Yes, for Argentine citizens aged 18-70 residing in Argentina. Voting is mandatory in all elections. Failure to vote can result in fines."
      },
      {
        question: "What documents do I need to return?",
        answer: "Valid Argentine passport or DNI. If your documents expired abroad, consulates can issue emergency travel documents. Renew DNI upon arrival."
      }
    ],
    relatedResources: [
      { title: "Citizenship by Descent", url: "/visas/citizenship", description: "Children born abroad to Argentine parents" },
      { title: "Mercosur Benefits", url: "/visas/temporary", description: "Freedom of movement in South America" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "belgium",
    name: "Belgium",
    demonym: "Belgian",
    flag: "🇧🇪",
    title: "Belgian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "EU benefits, chocolate business connections, and quality of life",
    description: "Belgians find Argentina attractive for European-style culture and business opportunities. Welcoming environment for professionals with EU connections in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Belgians enter visa-free with valid passport. Schengen benefits don't extend to Argentina.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for EU remote workers. Belgium-based companies common.",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EU Member Benefits",
      description: "While no specific bilateral agreement exists, EU citizens enjoy streamlined processing and strong diplomatic support from the Belgian Embassy in Buenos Aires.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "EU citizen processing priority",
        "Consular support in Buenos Aires"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Casier Judiciaire / Uittreksel uit het strafregister with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation in Argentina",
        "Health insurance coverage",
        "Proof of income or employment"
      ]
    },
    practicalInfo: {
      currencyExchange: "EUR easily exchanged. Major Belgian banks have correspondent relationships.",
      banking: "Belgian cards work well. ING, BNP Paribas have presence. Wise/Revolut popular.",
      taxTreaty: true,
      taxTreatyDetails: "Belgium-Argentina tax treaty prevents double taxation. Consult accountant for details.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "1,500-2,500 Belgian nationals",
      mainLocations: ["Buenos Aires", "Bariloche", "Mendoza"],
      associations: [
        { name: "Belgian Chamber of Commerce Argentina", url: "https://belgianchamber.com.ar" }
      ],
      facebookGroups: [
        "Belges en Argentine / Belgen in Argentinië"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if remote worker",
        "Submit documents with apostille",
        "Receive temporary residency (1 year, renewable)",
        "After 2 years, apply for permanent residency"
      ],
      tips: [
        "Belgian chocolates and beer are popular in Argentina - business opportunities exist",
        "Learn Spanish before arrival - essential for daily life",
        "Join expat groups for housing advice",
        "Consider Bariloche for outdoor lifestyle"
      ]
    },
    faqs: [
      {
        question: "Do Belgians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency (digital nomad, work, or student visa)."
      },
      {
        question: "Is there a Belgian community in Argentina?",
        answer: "Yes, approximately 1,500-2,500 Belgians live in Argentina, mostly in Buenos Aires. There's also a Belgian Chamber of Commerce."
      },
      {
        question: "Can Belgians get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency, Belgians can apply for permanent residency, leading to citizenship eligibility after 2 more years."
      },
      {
        question: "Do Belgian cards work in Argentina?",
        answer: "Yes, Belgian cards work in Argentina. BNP Paribas and ING have correspondent relationships. Many Belgians use Wise or Revolut for transfers."
      },
      {
        question: "Is there a tax treaty between Belgium and Argentina?",
        answer: "Yes, there is a double taxation treaty. This prevents paying tax on the same income in both countries. Consult an accountant for optimization."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "Guide for remote workers" },
      { title: "EU Citizens in Argentina", url: "/guides/eu-expats", description: "Resources for European expats" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    demonym: "Swiss",
    flag: "🇨🇭",
    title: "Swiss Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Alpine connections, precision industry opportunities, and quality living",
    description: "Switzerland and Argentina share deep historical ties. Swiss immigrants helped build infrastructure and dairy industry. Professionals find opportunities in Argentina."
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Swiss enter visa-free. Switzerland is not EU but has similar Schengen benefits.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular among Swiss remote workers and consultants",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EFTA Cooperation",
      description: "While no specific immigration agreement exists, Switzerland's EFTA status and strong diplomatic presence facilitate visa processing.",
      benefits: [
        "Visa-free entry (90 days)",
        "Strong Swiss Embassy support",
        "Digital nomad visa available",
        "Business-friendly environment"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Führungszeugnis / Casier Judiciaire / Certificato Penale with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of health insurance",
        "Financial solvency proof",
        "Swiss residence proof (if applicable)"
      ]
    },
    practicalInfo: {
      currencyExchange: "CHF can be exchanged but USD/EUR preferred. Swiss banks have correspondent relationships.",
      banking: "Swiss cards work internationally. UBS, Credit Suisse clients find banking straightforward.",
      taxTreaty: true,
      taxTreatyDetails: "Switzerland-Argentina tax treaty prevents double taxation. Consult Swiss tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-20,000 (including Swiss descent)",
      mainLocations: ["Buenos Aires", "Santa Fe (Swiss heritage)", "Córdoba"],
      associations: [
        { name: "Swiss-Argentine Chamber of Commerce", url: "https://casuizargentina.com" },
        { name: "Swiss Club Buenos Aires", url: "https://swissclubba.org" }
      ],
      facebookGroups: [
        "Suizos en Argentina",
        "Schweizer in Argentinien"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers and consultants",
      timeline: "Digital nomad: 30-60 days. Retirement visa: 2-3 months.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Choose appropriate visa pathway",
        "Prepare documents with apostille",
        "Apply at migraciones",
        "After 2 years temporary, apply for permanent"
      ],
      tips: [
        "Swiss precision industries (watches, pharma) have opportunities",
        "Santa Fe province has Swiss heritage towns",
        "Swiss-German speakers find German communities in Bariloche",
        "Consider retirement visa if over 60 with pension"
      ]
    },
    faqs: [
      {
        question: "Do Swiss citizens need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency (digital nomad, work, retirement, or student visa)."
      },
      {
        question: "Is there a Swiss community in Argentina?",
        answer: "Yes, approximately 15,000-20,000 Swiss nationals and descendants. Strong presence in Buenos Aires and Santa Fe province with Swiss heritage towns."
      },
      {
        question: "Can Swiss get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency, Swiss citizens can apply for permanent residency. Citizenship follows after 2 more years."
      },
      {
        question: "Is there a tax treaty between Switzerland and Argentina?",
        answer: "Yes, a double taxation treaty exists. Swiss tax advisors familiar with Argentina can help optimize your tax situation."
      },
      {
        question: "Can I use Swiss German in Argentina?",
        answer: "In daily life, Spanish is essential. However, there's a German-speaking community in Bariloche, and some Swiss clubs maintain German language connections."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Retirement Visa", url: "/visas/retirement", description: "For pensioners" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "sweden",
    name: "Sweden",
    demonym: "Swedish",
    flag: "🇸🇪",
    title: "Swedish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Nordic lifestyle, tech opportunities, and sustainable living",
    description: "Swedes are drawn to Argentina's vibrant culture and growing tech scene. Opportunities in sustainability and design with an active community in Buenos Aires.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Swedes enter visa-free with valid passport.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular among Swedish tech workers and designers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EU Member Benefits",
      description: "No specific bilateral agreement, but EU membership facilitates processing and provides consular support through the Swedish Embassy.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "EU citizen priority processing",
        "Swedish consular services"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Belastningsregisterutdrag with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance for stay duration",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "SEK not easily exchanged. Bring USD/EUR or use Wise/Revolut.",
      banking: "Swedish cards work in Argentina. Many use Wise or Revolut for transfers. SEB and Handelsbanken have correspondent banks.",
      taxTreaty: true,
      taxTreatyDetails: "Sweden-Argentina tax treaty prevents double taxation. Skatteverket can provide guidance.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "800-1,200 Swedish nationals",
      mainLocations: ["Buenos Aires", "Bariloche", "Patagonia"],
      associations: [
        { name: "Swedish Club Buenos Aires", url: "https://swedishclub.com.ar" }
      ],
      facebookGroups: [
        "Svenskar i Argentina",
        "Swedes in Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate at migraciones.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if working remotely",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent residency"
      ],
      tips: [
        "Swedish design and sustainability expertise is valued",
        "Learn Spanish - essential for daily life",
        "Join Swedish community for support",
        "Consider Bariloche for outdoor lifestyle similar to Sweden"
      ]
    },
    faqs: [
      {
        question: "Do Swedes need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Swedish community in Argentina?",
        answer: "Yes, approximately 800-1,200 Swedes live in Argentina, mainly in Buenos Aires. There's an active Swedish Club."
      },
      {
        question: "Can Swedes get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency. Citizenship eligibility follows after 2 more years."
      },
      {
        question: "Is there a tax treaty?",
        answer: "Yes, Sweden and Argentina have a double taxation treaty. Contact Skatteverket for guidance."
      },
      {
        question: "What visa is best for Swedish remote workers?",
        answer: "The Digital Nomad Visa is ideal for Swedes working remotely for Swedish or international companies."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Learn Spanish", url: "/learn-spanish", description: "Language courses in Argentina" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "norway",
    name: "Norway",
    demonym: "Norwegian",
    flag: "🇳🇴",
    title: "Norwegian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Seafaring heritage, salmon industry connections, and outdoor lifestyle",
    description: "Norwegians find Argentina's diverse landscapes reminiscent of home. Growing business ties in aquaculture and renewable energy with a community in Buenos Aires.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Norwegians enter visa-free with valid passport.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for Norwegian remote workers and consultants",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "Schengen Cooperation",
      description: "No specific bilateral immigration agreement, but Norway's EEA status and strong diplomatic presence facilitate visa processing.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "Strong Norwegian Embassy support",
        "Business-friendly environment"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Politiet registeringsuttalelse with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation in Argentina",
        "Health insurance coverage",
        "Proof of financial means"
      ]
    },
    practicalInfo: {
      currencyExchange: "NOK not easily exchanged. Use Wise/Revolut or bring USD.",
      banking: "Norwegian cards work well. DNB and Nordea have correspondent relationships. Wise popular for transfers.",
      taxTreaty: true,
      taxTreatyDetails: "Norway-Argentina tax treaty prevents double taxation. Skatteetaten provides guidance.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "600-1,000 Norwegian nationals",
      mainLocations: ["Buenos Aires", "Patagonia", "Bariloche"],
      associations: [
        { name: "Norsk-Argentinsk Handelskammer", url: "https://nahk.com.ar" }
      ],
      facebookGroups: [
        "Nordmenn i Argentina",
        "Norwegians in Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if eligible",
        "Submit documents with apostille",
        "Receive temporary residency (1 year)",
        "After 2 years, apply for permanent residency"
      ],
      tips: [
        "Norwegian aquaculture expertise is in demand",
        "Patagonia resembles Norwegian landscapes",
        "Learn Spanish before arrival",
        "Connect with Norwegian business networks"
      ]
    },
    faqs: [
      {
        question: "Do Norwegians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Norwegian community?",
        answer: "Yes, approximately 600-1,000 Norwegians live in Argentina, concentrated in Buenos Aires and Patagonia areas."
      },
      {
        question: "Can Norwegians get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency, Norwegians can apply for permanent residency."
      },
      {
        question: "Is there a tax treaty?",
        answer: "Yes, Norway and Argentina have a double taxation treaty. Contact Skatteetaten for tax residency questions."
      },
      {
        question: "What's the best visa for Norwegian remote workers?",
        answer: "The Digital Nomad Visa is perfect for Norwegians working remotely. Requires proof of income and health insurance."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Patagonia Guide", url: "/guides/patagonia", description: "Norwegian-like landscapes" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "denmark",
    name: "Denmark",
    demonym: "Danish",
    flag: "🇩🇰",
    title: "Danish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Hygge lifestyle, design expertise, and sustainable business opportunities",
    description: "Danes bring design sensibility and sustainability focus to Argentina. Visa-free entry and affordable living with a community in Buenos Aires for professionals.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Danes enter visa-free with valid passport.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular among Danish designers and tech workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EU Member Benefits",
      description: "No specific bilateral immigration agreement, but EU membership and strong diplomatic ties facilitate visa processing.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "EU citizen processing priority",
        "Danish Embassy support in Buenos Aires"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Straffeattest from Rigspolitiet with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Financial means proof"
      ]
    },
    practicalInfo: {
      currencyExchange: "DKK not easily exchanged. Bring USD or use Wise/Revolut.",
      banking: "Danish cards work in Argentina. Danske Bank and Nordea have correspondent relationships. Wise popular.",
      taxTreaty: true,
      taxTreatyDetails: "Denmark-Argentina tax treaty prevents double taxation. SKAT provides guidance.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "500-800 Danish nationals",
      mainLocations: ["Buenos Aires", "Mendoza", "Bariloche"],
      associations: [
        { name: "Dansk-Argentinsk Selskab", url: "https://danskbuenosaires.com" }
      ],
      facebookGroups: [
        "Danskere i Argentina",
        "Danes in Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if working remotely",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Danish design expertise is valued in Argentina",
        "Learn Spanish before arrival",
        "Connect with Danish community for support",
        "Consider Mendoza for wine country lifestyle"
      ]
    },
    faqs: [
      {
        question: "Do Danes need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Danish community?",
        answer: "Yes, approximately 500-800 Danes live in Argentina, mainly in Buenos Aires. There's a Danish Society."
      },
      {
        question: "Can Danes get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency. Citizenship follows after 2 more years."
      },
      {
        question: "Is there a tax treaty?",
        answer: "Yes, Denmark and Argentina have a double taxation treaty. Contact SKAT for tax residency guidance."
      },
      {
        question: "What's the best visa for Danish remote workers?",
        answer: "The Digital Nomad Visa is ideal for Danes working remotely for Danish or international companies."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Retirement Visa", url: "/visas/retirement", description: "For pensioners" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "finland",
    name: "Finland",
    demonym: "Finnish",
    flag: "🇫🇮",
    title: "Finnish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Sauna culture, tech innovation, and Patagonian adventures",
    description: "Finns find Argentina's landscapes a perfect match for love of nature. Opportunities in tech and education with a small community in Buenos Aires.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Finns enter visa-free with valid passport.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for Finnish tech workers and consultants",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EU Member Benefits",
      description: "No specific bilateral agreement, but EU membership facilitates processing and Finnish education credentials are recognized.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "EU processing priority",
        "Education credentials recognized"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Ote rikosrekisteristä from Poliisi with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "EUR easily exchanged. USD also widely accepted for exchange.",
      banking: "Finnish cards work well. Nordea has strong presence. Wise/Revolut popular.",
      taxTreaty: true,
      taxTreatyDetails: "Finland-Argentina tax treaty prevents double taxation. Vero provides guidance.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "400-600 Finnish nationals",
      mainLocations: ["Buenos Aires", "Patagonia", "Ushuaia"],
      associations: [
        { name: "Finnish-Argentine Association", url: "https://finlandiaargentina.com" }
      ],
      facebookGroups: [
        "Suomalaiset Argentiinassa",
        "Finns in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if eligible",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Finnish tech skills are in demand",
        "Learn Spanish - essential for daily life",
        "Join Finnish community for support",
        "Consider Ushuaia for unique southern experience"
      ]
    },
    faqs: [
      {
        question: "Do Finns need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Finnish community?",
        answer: "Yes, approximately 400-600 Finns live in Argentina, mainly in Buenos Aires. There's a Finnish-Argentine Association."
      },
      {
        question: "Can Finns get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency. Citizenship follows after 2 more years."
      },
      {
        question: "Is there a tax treaty?",
        answer: "Yes, Finland and Argentina have a double taxation treaty. Contact Vero for tax guidance."
      },
      {
        question: "What's the best visa for Finnish remote workers?",
        answer: "The Digital Nomad Visa is perfect for Finns working remotely. Finnish tech workers are particularly in demand."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Tech Jobs in Argentina", url: "/remote-work", description: "Tech opportunities" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "poland",
    name: "Poland",
    demonym: "Polish",
    flag: "🇵🇱",
    title: "Polish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, EU benefits, and cultural connections",
    description: "Poland and Argentina share deep historical ties. Polish citizens find visa-free entry and a welcoming community dating back generations in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Poles enter visa-free with valid passport.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular among Polish tech workers and professionals",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EU Member Benefits",
      description: "No specific bilateral agreement, but EU membership and large Polish-Argentine community facilitate integration.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "Large Polish community support",
        "Polish heritage organizations"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Zaświadczenie o niekaralności from Policja with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of financial means"
      ]
    },
    practicalInfo: {
      currencyExchange: "PLN not easily exchanged. Bring USD/EUR or use Wise/Revolut.",
      banking: "Polish cards work in Argentina. mBank and ING popular. Wise used for transfers.",
      taxTreaty: true,
      taxTreatyDetails: "Poland-Argentina tax treaty prevents double taxation. Consult Polish tax office.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "500,000+ of Polish descent; 2,000-3,000 Polish nationals",
      mainLocations: ["Buenos Aires (Retiro, Belgrano)", "Córdoba", "Santa Fe"],
      associations: [
        { name: "Polish Association of Buenos Aires", url: "https://poloniaargentina.org" },
        { name: "Polish Embassy Buenos Aires", url: "https://buenosaires.msz.gov.pl" }
      ],
      facebookGroups: [
        "Polacy w Argentynie",
        "Polish Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if eligible",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Large Polish community provides excellent support",
        "Polish language schools and cultural centers available",
        "Connect with Polonia organizations",
        "Learn Spanish for daily life"
      ]
    },
    faqs: [
      {
        question: "Do Poles need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Polish community in Argentina?",
        answer: "Yes! Argentina has one of the largest Polish communities in South America (500,000+ of Polish descent). Strong presence in Buenos Aires, Retiro, and Belgrano neighborhoods."
      },
      {
        question: "Can Poles get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency. Citizenship follows after 2 more years."
      },
      {
        question: "Is there a tax treaty?",
        answer: "Yes, Poland and Argentina have a double taxation treaty. Contact Polish tax authorities for guidance."
      },
      {
        question: "What's the best visa for Polish remote workers?",
        answer: "The Digital Nomad Visa is ideal for Poles working remotely. Large Polish community makes integration easier."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Polish Heritage", url: "/guides/polish-argentina", description: "Polish community history" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "czech-republic",
    name: "Czech Republic",
    demonym: "Czech",
    flag: "🇨🇿",
    title: "Czech Citizens in Argentina: Complete Immigration Guide",
    subtitle: "EU opportunities, beer culture connections, and growing community",
    description: "Czech citizens find Argentina's European culture and tech sector welcoming. Active community in Buenos Aires with visa-free entry and EU benefits.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Czechs enter visa-free with valid passport.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular among Czech tech workers and developers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship or independent work permit",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "EU Member Benefits",
      description: "No specific bilateral agreement, but EU membership and Czech expertise in manufacturing and IT facilitate opportunities.",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available",
        "EU processing priority",
        "Tech sector opportunities"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Výpis z evidence rejstříku trestů with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "CZK not easily exchanged. Bring USD/EUR or use Wise/Revolut.",
      banking: "Czech cards work in Argentina. ČSOB and KB have correspondent relationships. Wise popular.",
      taxTreaty: true,
      taxTreatyDetails: "Czech Republic-Argentina tax treaty prevents double taxation.",
      dualCitizenshipAllowed: true
    },
    communityInfo:    {
      populationInArgentina: "1,500-2,000 Czech nationals",
      mainLocations: ["Buenos Aires", "Mendoza", "Bariloche"],
      associations: [
        { name: "Czech Centre Buenos Aires", url: "https://buenosaires.czechcentres.cz" }
      ],
      facebookGroups: [
        "Češi v Argentině",
        "Czechs in Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days. Tourist extension: immediate.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa if eligible",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Czech beer culture appreciated in Argentina",
        "Learn Spanish before arrival",
        "Connect with Czech community for support",
        "Consider Mendoza for wine region lifestyle"
      ]
    },
    faqs: [
      {
        question: "Do Czechs need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      },
      {
        question: "Is there a Czech community?",
        answer: "Yes, approximately 1,500-2,000 Czechs live in Argentina, mainly in Buenos Aires. There's a Czech Centre."
      },
      {
        question: "Can Czechs get permanent residency?",
        answer: "Yes, after 2 years of legal temporary residency. Citizenship follows after 2 more years."
      },
      {
        question: "Is there a tax treaty?",
        answer: "Yes, the Czech Republic and Argentina have a double taxation treaty."
      },
      {
        question: "What's the best visa for Czech remote workers?",
        answer: "The Digital Nomad Visa is perfect for Czech tech workers and developers working remotely."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" },
      { title: "Beer Culture", url: "/food/beer", description: "Argentina's craft beer scene" }
    ],
    image: "/images/nationalities/default.webp"
  },
  {
    slug: "ukraine",
    name: "Ukraine",
    demonym: "Ukrainian",
    flag: "🇺🇦",
    title: "Ukrainian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Humanitarian pathways, growing community, and new beginnings",
    description: "Argentina has welcomed Ukrainian refugees with open arms, offering humanitarian visas. Simplified processes and a supportive community provide a safe new home.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (visa required)",
        notes: "Ukrainians need tourist visa (simplified process currently available).",
        reciprocityFee: false,
        feeAmount: "$0 (waived for humanitarian reasons)"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for remote workers with simplified processing",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visas available with expedited processing for Ukrainians",
        sponsorshipRequired: false
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Humanitarian Visa Program",
      description: "Argentina offers expedited humanitarian visas for Ukrainians, including temporary residency, work authorization, and family reunification.",
      benefits: [
        "Expedited humanitarian visa processing",
        "Work authorization included",
        "Family reunification available",
        "Path to permanent residency"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Waived for humanitarian visas. Civil state certificate may substitute."
      },
      birthCertificate: {
        required: true,
        apostille: false
      },
      additionalDocs: [
        "Ukrainian passport or ID",
        "Proof of Ukrainian residence (if applicable)",
        "Family documentation for reunification"
      ]
    },
    practicalInfo: {
      currencyExchange: "UAH not easily exchanged. Bring USD/EUR or use crypto/Wise.",
      banking: "Ukrainian cards have limited function. Open local account upon arrival. Aid organizations can assist.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult accountant for tax residency planning.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "10,000+ (rapidly growing since 2022)",
      mainLocations: ["Buenos Aires", "Mar del Plata", "Córdoba"],
      associations: [
        { name: "Ukrainian-Argentine Association", url: "https://facebook.com/ukrainianargentina" },
        { name: "Help for Ukraine Argentina", url: "https://helpukraine.ar" }
      ],
      facebookGroups: [
        "Українці в Аргентині",
        "Ukrainians in Argentina - Підтримка"
      ]
    },
    residencyPath: {
      easiestRoute: "Humanitarian Visa (expedited process)",
      timeline: "Humanitarian visa: 1-2 weeks. Temporary residency: immediate upon arrival.",
      steps: [
        "Contact Argentine consulate or embassy (Warsaw, neighboring countries)",
        "Apply for humanitarian visa (expedited)",
        "Travel to Argentina",
        "Apply for temporary residency at migraciones",
        "Receive work authorization and DNI"
      ],
      tips: [
        "Humanitarian visas processed quickly",
        "Ukrainian community very supportive",
        "Many aid organizations available to help",
        "Learn Spanish for integration"
      ]
    },
    faqs: [
      {
        question: "Do Ukrainians need a visa for Argentina?",
        answer: "Currently, Ukrainians can apply for expedited humanitarian visas at Argentine consulates. The process is streamlined and fee-waived for humanitarian reasons."
      },
      {
        question: "Is there support for Ukrainian refugees?",
        answer: "Yes, Argentina offers humanitarian visas with work authorization, community support, and aid organizations. The Ukrainian community is very active in helping newcomers."
      },
      {
        question: "How big is the Ukrainian community?",
        answer: "Approximately 10,000+ Ukrainians live in Argentina, with rapid growth since 2022. Strong community in Buenos Aires with support networks."
      },
      {
        question: "Can Ukrainians work immediately?",
        answer: "Yes, humanitarian visas include work authorization. You can work immediately upon receiving your DNI (Argentine ID card)."
      },
      {
        question: "How long until permanent residency?",
        answer: "After 2 years of temporary residency (humanitarian visa converts), Ukrainians can apply for permanent residency. Citizenship follows after 2 more years."
      }
    ],
    relatedResources: [
      { title: "Humanitarian Visa", url: "/visas/humanitarian", description: "Expedited process for Ukrainians" },
      { title: "Refugee Support", url: "/guides/refugee-support", description: "Resources and aid organizations" }
    ],
    image: "/images/nationalities/default.webp"
  }
,

  // CUBA
  {
    slug: "cuba",
    name: "Cuba",
    demonym: "Cuban",
    flag: "🇨🇺",
    title: "Cuban Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Cuban citizens",
    description: "Complete guide for Cuban citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Cubans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Cuban remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Cubans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // DOMINICAN REPUBLIC
  {
    slug: "dominican-republic",
    name: "Dominican Republic",
    demonym: "Dominican",
    flag: "🇩🇴",
    title: "Dominican Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Dominican citizens",
    description: "Complete guide for Dominican citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Dominicans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Dominican remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Dominicans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // GUATEMALA
  {
    slug: "guatemala",
    name: "Guatemala",
    demonym: "Guatemalan",
    flag: "🇬🇹",
    title: "Guatemalan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Guatemalan citizens",
    description: "Complete guide for Guatemalan citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Guatemalans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Guatemalan remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Guatemalans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // HONDURAS
  {
    slug: "honduras",
    name: "Honduras",
    demonym: "Honduran",
    flag: "🇭🇳",
    title: "Honduran Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Honduran citizens",
    description: "Complete guide for Honduran citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Hondurans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Honduran remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Hondurans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // EL SALVADOR
  {
    slug: "el-salvador",
    name: "El Salvador",
    demonym: "Salvadoran",
    flag: "🇸🇻",
    title: "Salvadoran Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Salvadoran citizens",
    description: "Complete guide for Salvadoran citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Salvadorans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Salvadoran remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Salvadorans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // NICARAGUA
  {
    slug: "nicaragua",
    name: "Nicaragua",
    demonym: "Nicaraguan",
    flag: "🇳🇮",
    title: "Nicaraguan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Nicaraguan citizens",
    description: "Complete guide for Nicaraguan citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Nicaraguans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Nicaraguan remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Nicaraguans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // HAITI
  {
    slug: "haiti",
    name: "Haiti",
    demonym: "Haitian",
    flag: "🇭🇹",
    title: "Haitian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Haitian citizens",
    description: "Complete guide for Haitian citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Haitians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Haitian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Haitians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // PUERTO RICO
  {
    slug: "puerto-rico",
    name: "Puerto Rico",
    demonym: "Puerto Rican",
    flag: "🇵🇷",
    title: "Puerto Rican Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Puerto Rican citizens",
    description: "Complete guide for Puerto Rican citizens looking to live, work, or study in Argentina.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Puerto Ricans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Puerto Rican remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Puerto Ricans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // HUNGARY
  {
    slug: "hungary",
    name: "Hungary",
    demonym: "Hungarian",
    flag: "🇭🇺",
    title: "Hungarian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Hungarian citizens",
    description: "Complete guide for Hungarian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Hungarians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Hungarian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Hungarians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ROMANIA
  {
    slug: "romania",
    name: "Romania",
    demonym: "Romanian",
    flag: "🇷🇴",
    title: "Romanian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Romanian citizens",
    description: "Complete guide for Romanian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Romanians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Romanian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Romanians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BULGARIA
  {
    slug: "bulgaria",
    name: "Bulgaria",
    demonym: "Bulgarian",
    flag: "🇧🇬",
    title: "Bulgarian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Bulgarian citizens",
    description: "Complete guide for Bulgarian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Bulgarians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Bulgarian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Bulgarians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // CROATIA
  {
    slug: "croatia",
    name: "Croatia",
    demonym: "Croatian",
    flag: "🇭🇷",
    title: "Croatian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Croatian citizens",
    description: "Complete guide for Croatian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Croatians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Croatian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Croatians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SERBIA
  {
    slug: "serbia",
    name: "Serbia",
    demonym: "Serbian",
    flag: "🇷🇸",
    title: "Serbian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Serbian citizens",
    description: "Complete guide for Serbian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Serbians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Serbian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Serbians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SLOVAKIA
  {
    slug: "slovakia",
    name: "Slovakia",
    demonym: "Slovak",
    flag: "🇸🇰",
    title: "Slovak Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Slovak citizens",
    description: "Complete guide for Slovak citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Slovaks enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Slovak remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Slovaks need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SLOVENIA
  {
    slug: "slovenia",
    name: "Slovenia",
    demonym: "Slovene",
    flag: "🇸🇮",
    title: "Slovene Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Slovene citizens",
    description: "Complete guide for Slovene citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Slovenes enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Slovene remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Slovenes need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ESTONIA
  {
    slug: "estonia",
    name: "Estonia",
    demonym: "Estonian",
    flag: "🇪🇪",
    title: "Estonian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Estonian citizens",
    description: "Complete guide for Estonian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Estonians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Estonian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Estonians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // LATVIA
  {
    slug: "latvia",
    name: "Latvia",
    demonym: "Latvian",
    flag: "🇱🇻",
    title: "Latvian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Latvian citizens",
    description: "Complete guide for Latvian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Latvians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Latvian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Latvians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // LITHUANIA
  {
    slug: "lithuania",
    name: "Lithuania",
    demonym: "Lithuanian",
    flag: "🇱🇹",
    title: "Lithuanian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Lithuanian citizens",
    description: "Complete guide for Lithuanian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Lithuanians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Lithuanian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Lithuanians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ALBANIA
  {
    slug: "albania",
    name: "Albania",
    demonym: "Albanian",
    flag: "🇦🇱",
    title: "Albanian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Albanian citizens",
    description: "Complete guide for Albanian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Albanians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Albanian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Albanians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BOSNIA
  {
    slug: "bosnia",
    name: "Bosnia",
    demonym: "Bosnian",
    flag: "🇧🇦",
    title: "Bosnian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Bosnian citizens",
    description: "Complete guide for Bosnian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Bosnians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Bosnian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Bosnians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // NORTH MACEDONIA
  {
    slug: "north-macedonia",
    name: "North Macedonia",
    demonym: "Macedonian",
    flag: "🇲🇰",
    title: "Macedonian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Macedonian citizens",
    description: "Complete guide for Macedonian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Macedonians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Macedonian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Macedonians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MOLDOVA
  {
    slug: "moldova",
    name: "Moldova",
    demonym: "Moldovan",
    flag: "🇲🇩",
    title: "Moldovan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Moldovan citizens",
    description: "Complete guide for Moldovan citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Moldovans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Moldovan remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Moldovans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ICELAND
  {
    slug: "iceland",
    name: "Iceland",
    demonym: "Icelandic",
    flag: "🇮🇸",
    title: "Icelandic Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Icelandic citizens",
    description: "Complete guide for Icelandic citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Icelandics enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Icelandic remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Icelandics need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // PAKISTAN
  {
    slug: "pakistan",
    name: "Pakistan",
    demonym: "Pakistani",
    flag: "🇵🇰",
    title: "Pakistani Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Pakistani citizens",
    description: "Complete guide for Pakistani citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Pakistanis enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Pakistani remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Pakistanis need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BANGLADESH
  {
    slug: "bangladesh",
    name: "Bangladesh",
    demonym: "Bangladeshi",
    flag: "🇧🇩",
    title: "Bangladeshi Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Bangladeshi citizens",
    description: "Complete guide for Bangladeshi citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Bangladeshis enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Bangladeshi remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Bangladeshis need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // INDONESIA
  {
    slug: "indonesia",
    name: "Indonesia",
    demonym: "Indonesian",
    flag: "🇮🇩",
    title: "Indonesian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Indonesian citizens",
    description: "Complete guide for Indonesian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Indonesians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Indonesian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Indonesians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MALAYSIA
  {
    slug: "malaysia",
    name: "Malaysia",
    demonym: "Malaysian",
    flag: "🇲🇾",
    title: "Malaysian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Malaysian citizens",
    description: "Complete guide for Malaysian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Malaysians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Malaysian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Malaysians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // NEPAL
  {
    slug: "nepal",
    name: "Nepal",
    demonym: "Nepali",
    flag: "🇳🇵",
    title: "Nepali Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Nepali citizens",
    description: "Complete guide for Nepali citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Nepalis enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Nepali remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Nepalis need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SRI LANKA
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    demonym: "Sri Lankan",
    flag: "🇱🇰",
    title: "Sri Lankan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Sri Lankan citizens",
    description: "Complete guide for Sri Lankan citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Sri Lankans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Sri Lankan remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Sri Lankans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // IRAN
  {
    slug: "iran",
    name: "Iran",
    demonym: "Iranian",
    flag: "🇮🇷",
    title: "Iranian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Iranian citizens",
    description: "Complete guide for Iranian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Iranians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Iranian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Iranians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // IRAQ
  {
    slug: "iraq",
    name: "Iraq",
    demonym: "Iraqi",
    flag: "🇮🇶",
    title: "Iraqi Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Iraqi citizens",
    description: "Complete guide for Iraqi citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Iraqis enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Iraqi remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Iraqis need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // JORDAN
  {
    slug: "jordan",
    name: "Jordan",
    demonym: "Jordanian",
    flag: "🇯🇴",
    title: "Jordanian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Jordanian citizens",
    description: "Complete guide for Jordanian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Jordanians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Jordanian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Jordanians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // LEBANON
  {
    slug: "lebanon",
    name: "Lebanon",
    demonym: "Lebanese",
    flag: "🇱🇧",
    title: "Lebanese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Lebanese citizens",
    description: "Complete guide for Lebanese citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Lebaneses enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Lebanese remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Lebaneses need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // ARMENIA
  {
    slug: "armenia",
    name: "Armenia",
    demonym: "Armenian",
    flag: "🇦🇲",
    title: "Armenian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Armenian citizens",
    description: "Complete guide for Armenian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Armenians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Armenian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Armenians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // GEORGIA
  {
    slug: "georgia",
    name: "Georgia",
    demonym: "Georgian",
    flag: "🇬🇪",
    title: "Georgian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Georgian citizens",
    description: "Complete guide for Georgian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Georgians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Georgian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Georgians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MYANMAR
  {
    slug: "myanmar",
    name: "Myanmar",
    demonym: "Burmese",
    flag: "🇲🇲",
    title: "Burmese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Burmese citizens",
    description: "Complete guide for Burmese citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Burmeses enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Burmese remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Burmeses need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // CAMBODIA
  {
    slug: "cambodia",
    name: "Cambodia",
    demonym: "Cambodian",
    flag: "🇰🇭",
    title: "Cambodian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Cambodian citizens",
    description: "Complete guide for Cambodian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Cambodians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Cambodian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Cambodians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // KUWAIT
  {
    slug: "kuwait",
    name: "Kuwait",
    demonym: "Kuwaiti",
    flag: "🇰🇼",
    title: "Kuwaiti Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Kuwaiti citizens",
    description: "Complete guide for Kuwaiti citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Kuwaitis enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Kuwaiti remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Kuwaitis need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // QATAR
  {
    slug: "qatar",
    name: "Qatar",
    demonym: "Qatari",
    flag: "🇶🇦",
    title: "Qatari Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Qatari citizens",
    description: "Complete guide for Qatari citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Qataris enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Qatari remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Qataris need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // KAZAKHSTAN
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    demonym: "Kazakh",
    flag: "🇰🇿",
    title: "Kazakh Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Kazakh citizens",
    description: "Complete guide for Kazakh citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Kazakhs enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Kazakh remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Kazakhs need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // AZERBAIJAN
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    demonym: "Azerbaijani",
    flag: "🇦🇿",
    title: "Azerbaijani Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Azerbaijani citizens",
    description: "Complete guide for Azerbaijani citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Azerbaijanis enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Azerbaijani remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Azerbaijanis need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // UZBEKISTAN
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    demonym: "Uzbek",
    flag: "🇺🇿",
    title: "Uzbek Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Uzbek citizens",
    description: "Complete guide for Uzbek citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Uzbeks enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Uzbek remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Uzbeks need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // KYRGYZSTAN
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    demonym: "Kyrgyz",
    flag: "🇰🇬",
    title: "Kyrgyz Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Kyrgyz citizens",
    description: "Complete guide for Kyrgyz citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Kyrgyzs enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Kyrgyz remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Kyrgyzs need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MONGOLIA
  {
    slug: "mongolia",
    name: "Mongolia",
    demonym: "Mongolian",
    flag: "🇲🇳",
    title: "Mongolian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Mongolian citizens",
    description: "Complete guide for Mongolian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Mongolians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Mongolian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Mongolians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BAHAMAS
  {
    slug: "bahamas",
    name: "Bahamas",
    demonym: "Bahamian",
    flag: "🇧🇸",
    title: "Bahamian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Bahamian citizens",
    description: "Complete guide for Bahamian citizens looking to live, work, or study in Argentina.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Bahamians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Bahamian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Bahamians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // JAMAICA
  {
    slug: "jamaica",
    name: "Jamaica",
    demonym: "Jamaican",
    flag: "🇯🇲",
    title: "Jamaican Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Jamaican citizens",
    description: "Complete guide for Jamaican citizens looking to live, work, or study in Argentina.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Jamaicans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Jamaican remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Jamaicans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // TRINIDAD AND TOBAGO
  {
    slug: "trinidad-and-tobago",
    name: "Trinidad and Tobago",
    demonym: "Trinidadian",
    flag: "🇹🇹",
    title: "Trinidadian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Trinidadian citizens",
    description: "Complete guide for Trinidadian citizens looking to live, work, or study in Argentina.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Trinidadians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Trinidadian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Trinidadians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BARBADOS
  {
    slug: "barbados",
    name: "Barbados",
    demonym: "Barbadian",
    flag: "🇧🇧",
    title: "Barbadian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Barbadian citizens",
    description: "Complete guide for Barbadian citizens looking to live, work, or study in Argentina.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Barbadians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Barbadian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Barbadians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // FIJI
  {
    slug: "fiji",
    name: "Fiji",
    demonym: "Fijian",
    flag: "🇫🇯",
    title: "Fijian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Fijian citizens",
    description: "Complete guide for Fijian citizens looking to live, work, or study in Argentina.",
    region: "oceania",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Fijians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Fijian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Fijians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // PAPUA NEW GUINEA
  {
    slug: "papua-new-guinea",
    name: "Papua New Guinea",
    demonym: "Papua New Guinean",
    flag: "🇵🇬",
    title: "Papua New Guinean Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Papua New Guinean citizens",
    description: "Complete guide for Papua New Guinean citizens looking to live, work, or study in Argentina.",
    region: "oceania",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Papua New Guineans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Papua New Guinean remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Papua New Guineans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  }
,

  // MALTA
  {
    slug: "malta",
    name: "Malta",
    demonym: "Maltese",
    flag: "🇲🇹",
    title: "Maltese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Maltese citizens",
    description: "Complete guide for Maltese citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Malteses enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Maltese remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Malteses need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // CYPRUS
  {
    slug: "cyprus",
    name: "Cyprus",
    demonym: "Cypriot",
    flag: "🇨🇾",
    title: "Cypriot Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Cypriot citizens",
    description: "Complete guide for Cypriot citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Cypriots enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Cypriot remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Cypriots need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // LUXEMBOURG
  {
    slug: "luxembourg",
    name: "Luxembourg",
    demonym: "Luxembourger",
    flag: "🇱🇺",
    title: "Luxembourger Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Luxembourger citizens",
    description: "Complete guide for Luxembourger citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Luxembourgers enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Luxembourger remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Luxembourgers need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MONTENEGRO
  {
    slug: "montenegro",
    name: "Montenegro",
    demonym: "Montenegrin",
    flag: "🇲🇪",
    title: "Montenegrin Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Montenegrin citizens",
    description: "Complete guide for Montenegrin citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Montenegrins enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Montenegrin remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Montenegrins need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BELARUS
  {
    slug: "belarus",
    name: "Belarus",
    demonym: "Belarusian",
    flag: "🇧🇾",
    title: "Belarusian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Belarusian citizens",
    description: "Complete guide for Belarusian citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Belarusians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Belarusian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Belarusians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // TAJIKISTAN
  {
    slug: "tajikistan",
    name: "Tajikistan",
    demonym: "Tajik",
    flag: "🇹🇯",
    title: "Tajik Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Tajik citizens",
    description: "Complete guide for Tajik citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Tajiks enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Tajik remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Tajiks need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // TURKMENISTAN
  {
    slug: "turkmenistan",
    name: "Turkmenistan",
    demonym: "Turkmen",
    flag: "🇹🇲",
    title: "Turkmen Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Turkmen citizens",
    description: "Complete guide for Turkmen citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Turkmens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Turkmen remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Turkmens need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BRUNEI
  {
    slug: "brunei",
    name: "Brunei",
    demonym: "Bruneian",
    flag: "🇧🇳",
    title: "Bruneian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Bruneian citizens",
    description: "Complete guide for Bruneian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Bruneians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Bruneian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Bruneians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // LAOS
  {
    slug: "laos",
    name: "Laos",
    demonym: "Lao",
    flag: "🇱🇦",
    title: "Lao Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Lao citizens",
    description: "Complete guide for Lao citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Laos enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Lao remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Laos need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // SAMOA
  {
    slug: "samoa",
    name: "Samoa",
    demonym: "Samoan",
    flag: "🇼🇸",
    title: "Samoan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Samoan citizens",
    description: "Complete guide for Samoan citizens looking to live, work, or study in Argentina.",
    region: "oceania",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Samoans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Samoan remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Samoans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // MALDIVES
  {
    slug: "maldives",
    name: "Maldives",
    demonym: "Maldivian",
    flag: "🇲🇻",
    title: "Maldivian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Maldivian citizens",
    description: "Complete guide for Maldivian citizens looking to live, work, or study in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Maldivians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Maldivian remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Maldivians need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  }
,

  // ANDORRA
  {
    slug: "andorra",
    name: "Andorra",
    demonym: "Andorran",
    flag: "🇦🇩",
    title: "Andorran Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Immigration pathway for Andorran citizens",
    description: "Complete guide for Andorran citizens looking to live, work, or study in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days (extendable to 180)",
        notes: "Andorrans enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Andorran remote workers",
        incomeRequirement: "$1,000-1,500/month"
      },
      work: {
        eligible: true,
        notes: "Work visa requires sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "No Special Agreement",
      description: "Standard immigration process applies",
      benefits: [
        "Visa-free entry (90 days)",
        "Digital nomad visa available"
      ]
    },
    documents: {
      passportValidity: "6 months minimum",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police clearance certificate required"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of accommodation",
        "Health insurance",
        "Proof of income"
      ]
    },
    practicalInfo: {
      currencyExchange: "Local currency easily exchanged",
      banking: "Open local account upon arrival",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Growing community",
      mainLocations: ["Buenos Aires"],
      associations: []
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa for remote workers",
      timeline: "Digital nomad: 30-60 days.",
      steps: [
        "Enter as tourist (90 days visa-free)",
        "Apply for digital nomad visa",
        "Submit documents with apostille",
        "Receive temporary residency",
        "After 2 years, apply for permanent"
      ],
      tips: [
        "Learn Spanish before arrival",
        "Connect with expat community"
      ]
    },
    faqs: [
      {
        question: "Do Andorrans need a visa for Argentina?",
        answer: "No for tourism - 90 days visa-free. For longer stays, apply for temporary residency."
      }
    ],
    relatedResources: [
      { title: "Digital Nomad Visa", url: "/visas/digital-nomad", description: "For remote workers" }
    ],
    image: "/images/nationalities/default.webp"
  },

  // BATCH IMPORTS: Additional countries from batch files
  ...nationalitiesBatch1,
  ...nationalitiesBatch2,
  ...nationalitiesBatch3,
  ...nationalitiesBatch4,
  ...nationalitiesBatch5,
  ...nationalitiesBatch6,
  ...nationalitiesBatch7,
  ...nationalitiesBatch8,
];

// Helper functions
export function getNationalityBySlug(slug: string): Nationality | undefined {
  return nationalities.find(nat => nat.slug === slug);
}

export function getNationalitiesByRegion(region: Nationality["region"]): Nationality[] {
  return nationalities.filter(nat => nat.region === region);
}

export function getAllRegions(): { slug: string; name: string; count: number }[] {
  const regions: Record<string, string> = {
    "north-america": "North America",
    "europe": "Europe",
    "latin-america": "Latin America",
    "asia": "Asia",
    "oceania": "Oceania",
    "africa": "Africa"
  };

  return Object.entries(regions).map(([slug, name]) => ({
    slug,
    name,
    count: nationalities.filter(n => n.region === slug).length
  })).filter(r => r.count > 0);
}

export function getMercosurNationalities(): Nationality[] {
  return nationalities.filter(nat => nat.visaRequirements.mercosur?.eligible);
}
