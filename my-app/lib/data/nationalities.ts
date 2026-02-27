// ============================================================================
// PSEO Data: Nationalities
// Country-specific immigration guidance for expats from different nations
// ============================================================================

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
    description: "As fellow Mercosur members and neighbors, Uruguayans enjoy the easiest immigration pathway to Argentina. No visas, no reciprocity fees, and full work rights from day one. This guide covers everything from residency to cross-border living.",
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
    image: "/images/nationalities/uruguay.webp"
  },

  // CHILE - Full Featured Entry
  {
    slug: "chile",
    name: "Chile",
    demonym: "Chilean",
    flag: "🇨🇱",
    title: "Chilean Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur freedom of movement, cross-Andes living, and everything Chileans need to know",
    description: "As Mercosur associates, Chileans enjoy simplified immigration to Argentina. With strong cultural ties and similar Spanish variants, Chileans integrate easily while benefiting from Argentina's lower cost of living.",
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
    image: "/images/nationalities/chile.webp"
  },

  // PARAGUAY - Full Featured Entry
  {
    slug: "paraguay",
    name: "Paraguay",
    demonym: "Paraguayan",
    flag: "🇵🇾",
    title: "Paraguayan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur full membership, cultural connections, and immigration benefits",
    description: "As founding Mercosur members, Paraguayans enjoy unrestricted freedom of movement to Argentina. With significant cultural ties and a large established community, Paraguayans find familiar welcome in Argentina.",
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
    image: "/images/nationalities/paraguay.webp"
  },

  // BOLIVIA - Full Featured Entry
  {
    slug: "bolivia",
    name: "Bolivia",
    demonym: "Bolivian",
    flag: "🇧🇴",
    title: "Bolivian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur membership, cultural ties, and immigration pathways",
    description: "Bolivia is a full Mercosur member, giving Bolivians unrestricted access to live and work in Argentina. With deep historical connections and a large community, Bolivians find strong support networks in Argentina.",
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
    image: "/images/nationalities/bolivia.webp"
  },

  // PERU - Full Featured Entry (Mercosur Associate)
  {
    slug: "peru",
    name: "Peru",
    demonym: "Peruvian",
    flag: "🇵🇪",
    title: "Peruvian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur associate benefits, vibrant community, and immigration pathways for Peruvians",
    description: "As Mercosur associates since 2003, Peruvians enjoy streamlined immigration to Argentina. With one of the largest and most vibrant immigrant communities, Peruvians have established strong cultural and economic ties throughout Argentina.",
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
    image: "/images/nationalities/peru.webp"
  },

  // COLOMBIA - Full Featured Entry (Mercosur Associate)
  {
    slug: "colombia",
    name: "Colombia",
    demonym: "Colombian",
    flag: "🇨🇴",
    title: "Colombian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur associate benefits, growing community, and immigration pathways",
    description: "Colombia became a Mercosur associate in 2012, giving Colombians preferential immigration access to Argentina. With a rapidly growing community and strong cultural presence, Colombians find increasing opportunities in Argentina.",
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
    image: "/images/nationalities/colombia.webp"
  },

  // BRAZIL - Full Featured Entry (Mercosur Full Member)
  {
    slug: "brazil",
    name: "Brazil",
    demonym: "Brazilian",
    flag: "🇧🇷",
    title: "Brazilian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Full Mercosur member benefits, immediate permanent residency, and established community",
    description: "As a founding Mercosur member, Brazilians enjoy the easiest immigration path to Argentina with immediate permanent residency, no criminal record requirement, and the largest foreign community in the country.",
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
    image: "/images/nationalities/brazil.webp"
  },

  // VENEZUELA - Full Featured Entry (Non-Mercosur, Large Diaspora)
  {
    slug: "venezuela",
    name: "Venezuela",
    demonym: "Venezuelan",
    flag: "🇻🇪",
    title: "Venezuelan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "DNE migratory agreement, special humanitarian provisions, and established community support",
    description: "Venezuelans represent one of Argentina's largest immigrant communities. Through the DNE agreement and humanitarian provisions, Venezuelans have established pathways to residency, work authorization, and integration support.",
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
    image: "/images/nationalities/venezuela.webp"
  },

  // UNITED STATES - Full Featured Entry (Non-Mercosur, Digital Nomad Focus)
  {
    slug: "united-states",
    name: "United States",
    demonym: "American",
    flag: "🇺🇸",
    title: "US Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Digital nomad visa, tourist entry, and pathways to residency for Americans",
    description: "Argentina has become increasingly popular with Americans seeking lower costs of living, vibrant culture, and a welcoming environment. The digital nomad visa provides an excellent pathway for remote workers, while the 90-day tourist entry allows for extended exploration.",
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
    image: "/images/nationalities/united-states.webp"
  },

  // SPAIN - Full Featured Entry (Special Bilateral Agreements)
  {
    slug: "spain",
    name: "Spain",
    demonym: "Spanish",
    flag: "🇪🇸",
    title: "Spanish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Bilateral agreements, preferential treatment, and strong cultural ties",
    description: "Spain and Argentina share deep historical and cultural bonds. Spanish citizens benefit from bilateral agreements that simplify residency, offer special pension arrangements, and honor the unique relationship between these two nations.",
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
    image: "/images/nationalities/spain.webp"
  },

  // ITALY - Full Featured Entry (Massive Diaspora, Special Agreements)
  {
    slug: "italy",
    name: "Italy",
    demonym: "Italian",
    flag: "🇮🇹",
    title: "Italian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Strongest European ties, simplified processes, and the heart of Argentine culture",
    description: "Argentina has the largest Italian population outside Italy. Italian citizens enjoy simplified immigration processes, cultural familiarity, and a welcoming environment where Italian heritage is celebrated. The Italian-Argentine connection is woven into the fabric of Argentine society.",
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
    image: "/images/nationalities/italy.webp"
  },

  // MEXICO - Full Featured Entry (Growing Latin American Community)
  {
    slug: "mexico",
    name: "Mexico",
    demonym: "Mexican",
    flag: "🇲🇽",
    title: "Mexican Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, cultural exchange, and expanding opportunities",
    description: "The Mexican community in Argentina has grown significantly in recent years, drawn by educational opportunities, professional mobility, and cultural exchange programs. Mexicans find a welcoming environment with expanding networks in major Argentine cities.",
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
    image: "/images/nationalities/mexico.webp"
  },

  // CANADA - Full Featured Entry (English/French Speaking, Similar to US Profile)
  {
    slug: "canada",
    name: "Canada",
    demonym: "Canadian",
    flag: "🇨🇦",
    title: "Canadian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Digital nomad pathway, lower cost of living, and emerging expat community",
    description: "Argentina has become increasingly popular with Canadians seeking affordable living, vibrant culture, and adventure. The digital nomad visa offers an excellent pathway for Canadian remote workers, while the favorable exchange rate makes Argentina highly attractive for those with CAD income.",
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
    image: "/images/nationalities/canada.webp"
  },

  // UNITED KINGDOM - Full Featured Entry (Post-Brexit Interest, English-Speaking)
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    demonym: "British",
    flag: "🇬🇧",
    title: "UK Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Post-Brexit opportunities, digital nomad pathway, and historic Anglo-Argentine ties",
    description: "Post-Brexit, more Britons are exploring Argentina for its affordability, lifestyle, and adventure opportunities. The digital nomad visa provides an excellent pathway for UK remote workers, while historical Anglo-Argentine connections create familiar touchpoints.",
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
    image: "/images/nationalities/united-kingdom.webp"
  },

  // FRANCE - Full Featured Entry (European, Cultural Ties)
  {
    slug: "france",
    name: "France",
    demonym: "French",
    flag: "🇫🇷",
    title: "French Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Cultural exchange, professional opportunities, and quality of life",
    description: "French citizens are drawn to Argentina for its cultural vibrancy, lower cost of living, and professional opportunities. The French community maintains strong institutional presence through schools, cultural centers, and business networks.",
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
    image: "/images/nationalities/france.webp"
  },

  // GERMANY - Full Featured Entry (European, Growing Interest)
  {
    slug: "germany",
    name: "Germany",
    demonym: "German",
    flag: "🇩🇪",
    title: "German Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, professional opportunities, and quality lifestyle",
    description: "German interest in Argentina has grown significantly, driven by remote work opportunities, lower living costs, and Argentina's European-influenced culture. Germans find a welcoming environment with expanding professional networks.",
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
    image: "/images/nationalities/germany.webp"
  },

  // AUSTRALIA - Full Featured Entry (English-Speaking, Working Holiday)
  {
    slug: "australia",
    name: "Australia",
    demonym: "Australian",
    flag: "🇦🇺",
    title: "Australian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Working holiday agreements, digital nomad pathway, and adventure opportunities",
    description: "Argentina offers Australians unique opportunities through working holiday agreements, a growing digital nomad community, and adventure tourism connections. The favorable exchange rate makes Argentina highly attractive for those with AUD income.",
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
    image: "/images/nationalities/australia.webp"
  },

  // NEW ZEALAND - Full Featured Entry (English-Speaking, Similar to Australia)
  {
    slug: "new-zealand",
    name: "New Zealand",
    demonym: "New Zealander",
    flag: "🇳🇿",
    title: "New Zealand Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Digital nomad pathway, adventure tourism, and growing expat community",
    description: "New Zealanders find Argentina attractive for its adventure opportunities, lower cost of living, and cultural experiences. While there's no working holiday agreement, the digital nomad visa offers an excellent pathway for remote workers.",
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
    image: "/images/nationalities/new-zealand.webp"
  },

  // CHINA - Full Featured Entry (Major Asian Community)
  {
    slug: "china",
    name: "China",
    demonym: "Chinese",
    flag: "🇨🇳",
    title: "Chinese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, business opportunities, and cultural exchange",
    description: "The Chinese community in Argentina is one of the most established Asian communities, with deep historical roots and significant economic presence. Chinese citizens find expanding opportunities in trade, gastronomy, and professional sectors.",
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
    image: "/images/nationalities/china.webp"
  },

  // JAPAN - Full Featured Entry (Growing Professional Community)
  {
    slug: "japan",
    name: "Japan",
    demonym: "Japanese",
    flag: "🇯🇵",
    title: "Japanese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Cultural exchange, professional opportunities, and unique bilateral connections",
    description: "Japan and Argentina maintain strong cultural and economic ties. Japanese citizens find opportunities in technology, automotive, gastronomy, and cultural exchange, with a well-established Japanese community in Buenos Aires.",
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
    image: "/images/nationalities/japan.webp"
  },

  // ECUADOR - Full Featured Entry (Mercosur Associate, Andean Community)
  {
    slug: "ecuador",
    name: "Ecuador",
    demonym: "Ecuadorian",
    flag: "🇪🇨",
    title: "Ecuadorian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Mercosur associate benefits, Andean connections, and growing community",
    description: "As a Mercosur associate member, Ecuadorians enjoy preferential immigration access to Argentina with 2-year renewable residency and work authorization. The growing Ecuadorian community finds opportunities across various sectors.",
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
    image: "/images/nationalities/ecuador.webp"
  },

  // PORTUGAL - Full Featured Entry (European, Brazilian Connections)
  {
    slug: "portugal",
    name: "Portugal",
    demonym: "Portuguese",
    flag: "🇵🇹",
    title: "Portuguese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "European pathway, Brazilian connections, and cultural ties",
    description: "Portuguese citizens find Argentina attractive for its lower cost of living, Brazilian cultural connections, and European-influenced lifestyle. The Portuguese community maintains strong ties through language and shared Latin heritage.",
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
    image: "/images/nationalities/portugal.webp"
  },

  // SOUTH KOREA - Full Featured Entry (Growing Asian Community)
  {
    slug: "south-korea",
    name: "South Korea",
    demonym: "South Korean",
    flag: "🇰🇷",
    title: "South Korean Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing community, business opportunities, and cultural exchange",
    description: "The South Korean community in Argentina has grown significantly, with strong presence in technology, automotive, and gastronomy sectors. Korean citizens find expanding opportunities and increasing cultural appreciation.",
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
    image: "/images/nationalities/south-korea.webp"
  },

  // NETHERLANDS - Full Featured Entry (European, Business Focus)
  {
    slug: "netherlands",
    name: "Netherlands",
    demonym: "Dutch",
    flag: "🇳🇱",
    title: "Dutch Citizens in Argentina: Complete Immigration Guide",
    subtitle: "European pathway, agricultural connections, and growing business presence",
    description: "Dutch citizens are increasingly drawn to Argentina for agricultural business opportunities, lower cost of living, and adventure. The Netherlands maintains strong agricultural and trade relationships with Argentina.",
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
    image: "/images/nationalities/netherlands.webp"
  },

  {
    slug: "united-states",
    name: "United States",
    demonym: "American",
    flag: "🇺🇸",
    title: "US Citizens Moving to Argentina: Complete Guide",
    subtitle: "Visa options, reciprocity fees, and everything Americans need to know about moving to Argentina",
    description: "Argentina is increasingly popular among American expats seeking a lower cost of living, vibrant culture, and favorable exchange rates. This guide covers everything from tourist visas to permanent residency for US citizens.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can be extended for another 90 days at immigration office",
        reciprocityFee: false,
        feeAmount: "$0 (fee eliminated in 2016)"
      },
      digitalNomad: {
        eligible: true,
        notes: "Perfect for remote workers employed by US companies",
        incomeRequirement: "$1,500-$2,000/month minimum"
      },
      work: {
        eligible: true,
        notes: "Requires job offer from Argentine employer",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special visa agreements, but Digital Nomad Visa is ideal for Americans"
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "FBI background check with apostille for residency applications"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: ["Proof of income", "Health insurance"]
    },
    practicalInfo: {
      currencyExchange: "Americans benefit enormously from the blue dollar rate. Bring USD cash for best rates or use Wise/Western Union.",
      banking: "US citizens can open accounts with DNI. Wise and Schwab popular for transfers.",
      taxTreaty: true,
      taxTreatyDetails: "US-Argentina tax treaty prevents double taxation. Consult tax advisor for foreign income reporting.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-20,000",
      mainLocations: ["Buenos Aires (Palermo, Recoleta)", "Mendoza", "Bariloche", "Cordoba"],
      associations: [
        { name: "American Club of Buenos Aires" }
      ],
      facebookGroups: ["Americans in Argentina", "BA Expats"]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa → Temporary Residency → Permanent Residency",
      timeline: "2-3 years total",
      steps: [
        "Enter on tourist visa or apply for Digital Nomad Visa",
        "Apply for temporary residency (precaria/radicación)",
        "Renew temporary residency annually",
        "Apply for permanent residency after 2 years",
        "Citizenship possible after 2 years permanent residency"
      ],
      tips: [
        "Start FBI background check early (takes 2-3 months)",
        "Bring apostilled birth certificate from home",
        "Open Wise account before arriving for transfers",
        "Learn basic Spanish - helps with bureaucracy",
        "Connect with American community before moving"
      ]
    },
    faqs: [
      {
        question: "Do Americans need a visa for Argentina?",
        answer: "No visa required for stays up to 90 days as a tourist. For longer stays, apply for the Digital Nomad Visa (up to 180 days) or temporary residency."
      },
      {
        question: "Is there a reciprocity fee for Americans?",
        answer: "No, the $160 reciprocity fee was eliminated in March 2016. Entry is now free for US tourists."
      },
      {
        question: "Can I work remotely for a US company from Argentina?",
        answer: "Yes, the Digital Nomad Visa specifically allows this. Many Americans live in Argentina on remote work visas, paying no Argentine income tax on foreign earnings."
      },
      {
        question: "How do taxes work for Americans in Argentina?",
        answer: "US citizens must file US taxes regardless of residence. Argentina taxes residents on worldwide income after 183 days, but the tax treaty prevents double taxation. Most digital nomads on short stays don't trigger tax residency."
      },
      {
        question: "Is it safe for Americans in Argentina?",
        answer: "Generally yes. Buenos Aires is safer than most US cities. Standard urban precautions apply. Anti-American sentiment is rare; Argentines are generally welcoming to foreigners."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Complete guide to the Digital Nomad Visa"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for Americans in Argentina"
      },
      {
        title: "Opening a Bank Account",
        url: "/blog/opening-bank-account-argentina-expat",
        description: "Banking setup for US citizens"
      }
    ],
    image: "/images/nationalities/usa.webp"
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    demonym: "British",
    flag: "🇬🇧",
    title: "UK Citizens Moving to Argentina: Complete Guide",
    subtitle: "Post-Brexit immigration options, visa pathways, and British community connections",
    description: "With strong historical ties and a significant British community, Argentina offers UK citizens an accessible and welcoming destination. This guide covers visa options after Brexit and practical advice for Brits.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable for additional 90 days"
      },
      digitalNomad: {
        eligible: true,
        notes: "Ideal for UK remote workers",
        incomeRequirement: "£1,200-1,600/month minimum"
      },
      work: {
        eligible: true,
        notes: "Requires employer sponsorship",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special post-Brexit agreement, but Digital Nomad Visa provides excellent pathway"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "ACRO police certificate with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "GBP can be exchanged but USD often preferred for best rates. TransferWise (Wise) excellent for transfers.",
      banking: "UK citizens can open accounts with residency. Monzo and Starling work for travel but limited for local use.",
      taxTreaty: true,
      taxTreatyDetails: "UK-Argentina double taxation agreement in place",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "8,000-10,000",
      mainLocations: ["Buenos Aires", "Mendoza wine region", "Bariloche"],
      associations: [
        { name: "British Argentine Chamber of Commerce" }
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa → Temporary Residency",
      timeline: "2-3 years to permanent residency",
      steps: [
        "Apply for Digital Nomad Visa (or enter as tourist)",
        "Obtain temporary residency",
        "Maintain residency for 2 years",
        "Apply for permanent residency"
      ],
      tips: [
        "Get ACRO certificate before leaving UK",
        "Apostille documents at FCDO",
        "NHS coverage doesn't extend to Argentina - get private insurance",
        "British Council Buenos Aires offers cultural connections"
      ]
    },
    faqs: [
      {
        question: "Has Brexit changed anything for Brits in Argentina?",
        answer: "Not significantly. Argentina was never part of EU freedom of movement. The Digital Nomad Visa provides the same access as before."
      },
      {
        question: "Do I need to speak Spanish?",
        answer: "Not essential but highly recommended. English proficiency varies outside tourist areas and business districts."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "Best visa option for UK remote workers"
      }
    ],
    image: "/images/nationalities/uk.webp"
  },
  {
    slug: "germany",
    name: "Germany",
    demonym: "German",
    flag: "🇩🇪",
    title: "German Citizens in Argentina: Immigration Guide",
    subtitle: "Visa pathways, working holiday option, and German-Argentine connections",
    description: "With strong historical ties and a large German-Argentine community, Germany offers unique connections to Argentina. Learn about visa options including the Working Holiday Agreement.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable once"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for German remote workers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Visa",
      description: "Germany and Argentina have a Working Holiday Agreement for ages 18-35",
      benefits: [
        "1-year visa without prior job offer",
        "Can work for any employer",
        "Valid for ages 18-35",
        "Simple application process"
      ]
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Führungszeugnis with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise and Revolut popular among Germans. Euros accepted at some exchange houses.",
      banking: "N26 accounts work for travel but local account recommended for long-term",
      taxTreaty: true,
      taxTreatyDetails: "Germany-Argentina double taxation agreement",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "7,000-8,000 citizens (hundreds of thousands of German descent)",
      mainLocations: ["Buenos Aires", "Villa General Belgrano (Cordoba)", "Bariloche"],
      associations: [
        { name: "German-Argentine Chamber of Commerce" },
        { name: "Goethe-Institut Buenos Aires" }
      ]
    },
    residencyPath: {
      easiestRoute: "Working Holiday (18-35) OR Digital Nomad Visa",
      timeline: "Varies by route",
      steps: [
        "Apply for Working Holiday (if 18-35) or Digital Nomad Visa",
        "Convert to temporary residency if staying longer",
        "Apply for permanent residency after qualifying period"
      ],
      tips: [
        "Working Holiday is easiest option if you're under 35",
        "Large German communities in Bariloche and Villa General Belgrano",
        "Goethe-Institut offers cultural programs and language courses"
      ]
    },
    faqs: [
      {
        question: "Can I use my German health insurance in Argentina?",
        answer: "German public insurance typically doesn't cover Argentina. Private travel insurance or Argentine prepaid health insurance (prepaga) is required."
      },
      {
        question: "Is the Working Holiday Visa difficult to get?",
        answer: "No, it's straightforward if you're 18-35. Apply at Argentine consulate in Germany with passport, funds proof, and health insurance."
      }
    ],
    relatedResources: [
      {
        title: "Working in Argentina",
        url: "/resources",
        description: "Employment resources for German citizens"
      }
    ],
    image: "/images/nationalities/germany.webp"
  },
  {
    slug: "spain",
    name: "Spain",
    demonym: "Spanish",
    flag: "🇪🇸",
    title: "Spanish Citizens in Argentina: Immigration Guide",
    subtitle: "Special provisions for Spanish citizens, Mercosur benefits, and community connections",
    description: "Spain and Argentina share deep cultural, linguistic, and historical ties. Spanish citizens enjoy special immigration pathways including Mercosur residency benefits and simplified citizenship options.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can extend for additional 90 days"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur visa often better",
        incomeRequirement: "€1,400/month"
      },
      work: {
        eligible: true,
        notes: "Mercosur agreement simplifies work authorization",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Spain has associate member status with Mercosur, granting simplified residency"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Residence Agreement + Dual Nationality Treaty",
      description: "Spain has special agreements with Argentina including Mercosur associate membership and dual citizenship recognition",
      benefits: [
        "Mercosur visa: 2-year temporary residency",
        "No job offer required for Mercosur visa",
        "Dual citizenship recognized",
        "Simplified naturalization (2 years residency for citizenship)"
      ]
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: false,
        notes: "Spanish certificate of good conduct (certificado de antecedentes penales)"
      },
      birthCertificate: {
        required: true,
        apostille: false
      }
    },
    practicalInfo: {
      currencyExchange: "Spanish bank cards work but Wise recommended for better rates",
      banking: "Spanish citizens can open accounts relatively easily",
      taxTreaty: true,
      taxTreatyDetails: "Spain-Argentina double taxation treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "25,000+ citizens (millions of Spanish descent)",
      mainLocations: ["Buenos Aires", "Rosario", "Cordoba", "Mendoza"],
      associations: [
        { name: "Spanish Center Buenos Aires" },
        { name: "Casa de Galicia" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (best option)",
      timeline: "Mercosur: 2 years → Citizenship possible in 2 years",
      steps: [
        "Apply for Mercosur visa (2-year temporary residency)",
        "Renew Mercosur visa or convert to permanent",
        "Apply for citizenship after just 2 years (special treaty)",
        "Keep Spanish citizenship (dual nationality allowed)"
      ],
      tips: [
        "Mercosur visa is the easiest pathway for Spanish citizens",
        "No Spanish language requirement for citizenship (you already speak it)",
        "Strong Spanish community throughout Argentina",
        "Spanish pension can sometimes be transferred"
      ]
    },
    faqs: [
      {
        question: "Can Spanish citizens get Argentine citizenship easily?",
        answer: "Yes! The dual nationality treaty allows Spanish citizens to apply for Argentine citizenship after just 2 years of legal residency (vs. 2 years for others, but you're exempt from renouncing Spanish citizenship)."
      },
      {
        question: "What's the Mercosur visa advantage?",
        answer: "The Mercosur visa gives Spanish citizens 2-year temporary residency without needing a job offer. It's simpler and cheaper than other visa types."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Visa Information",
        url: "/visas/temporary",
        description: "Details on Mercosur residency agreement"
      }
    ],
    image: "/images/nationalities/spain.webp"
  },
  {
    slug: "italy",
    name: "Italy",
    demonym: "Italian",
    flag: "🇮🇹",
    title: "Italian Citizens in Argentina: Immigration Guide",
    subtitle: "Jus sanguinis citizenship, Mercosur benefits, and Italian-Argentine heritage",
    description: "Argentina has the largest Italian population outside Italy. Italian citizens enjoy special pathways including Mercosur benefits, and many Argentines are eligible for Italian citizenship by descent.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available",
        incomeRequirement: "€1,400/month"
      },
      work: {
        eligible: true,
        notes: "Mercosur simplifies process",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Italy is Mercosur associate member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur + Cultural Agreements",
      description: "Italy holds Mercosur associate membership. Additionally, millions of Argentines have Italian ancestry and can claim Italian citizenship."
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: false,
        notes: "Italian casellario giudiziale"
      },
      birthCertificate: {
        required: true,
        apostille: false
      }
    },
    practicalInfo: {
      currencyExchange: "Italian banks work but Wise recommended",
      banking: "Easy account opening for Italian citizens",
      taxTreaty: true,
      taxTreatyDetails: "Italy-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "Thousands of citizens (millions of Italian descent)",
      mainLocations: ["Buenos Aires", "La Plata", "Rosario"],
      associations: [
        { name: "Italian Society of Buenos Aires" },
        { name: "Dante Alighieri Society" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Apply for Mercosur visa (2-year residency)",
        "Establish residency in Argentina",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Mercosur visa easiest option",
        "Italian culture deeply embedded in Argentina",
        "Italian pensions may be transferable"
      ]
    },
    faqs: [
      {
        question: "How many Argentines have Italian ancestry?",
        answer: "Approximately 60% of Argentina's population has some Italian ancestry, making it the largest Italian population outside Italy."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Visa",
        url: "/visas/temporary",
        description: "Mercosur residency information"
      }
    ],
    image: "/images/nationalities/italy.webp"
  },
  {
    slug: "canada",
    name: "Canada",
    demonym: "Canadian",
    flag: "🇨🇦",
    title: "Canadians Moving to Argentina: Complete Guide",
    subtitle: "Working Holiday visa, digital nomad options, and Canadian community",
    description: "Canada and Argentina have a Working Holiday Agreement, making it easy for young Canadians to experience Argentina. This guide covers all pathways for Canadian citizens.",
    region: "north-america",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Great for remote workers",
        incomeRequirement: "CAD $2,000-2,600/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Agreement",
      description: "Canada and Argentina have a Working Holiday Agreement for ages 18-35",
      benefits: [
        "1-year open work permit",
        "No job offer required",
        "Ages 18-35 eligible",
        "Can work for any employer"
      ]
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "RCMP background check"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise popular among Canadians. CAD can be exchanged but USD often preferred.",
      banking: "Canadian banks limited in Argentina. Local account recommended for long stays.",
      taxTreaty: true,
      taxTreatyDetails: "Canada-Argentina tax treaty prevents double taxation",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-7,000",
      mainLocations: ["Buenos Aires", "Bariloche", "Mendoza"],
      associations: [
        { name: "Canadian-Argentine Chamber of Commerce" }
      ]
    },
    residencyPath: {
      easiestRoute: "Working Holiday (18-35) OR Digital Nomad",
      timeline: "Varies",
      steps: [
        "Apply for Working Holiday (if eligible) or Digital Nomad",
        "Extend or convert to temporary residency",
        "Progress to permanent residency"
      ],
      tips: [
        "Working Holiday is excellent if you're under 35",
        " IEC program through official Canadian channels",
        "Many Canadians love outdoor destinations like Bariloche"
      ]
    },
    faqs: [
      {
        question: "Is there a Working Holiday program for Canadians?",
        answer: "Yes! Canadians aged 18-35 can get a 1-year open work permit through the International Experience Canada (IEC) program."
      }
    ],
    relatedResources: [
      {
        title: "Working Holiday Information",
        url: "/visas/work",
        description: "Details on working holiday visas"
      }
    ],
    image: "/images/nationalities/canada.webp"
  },
  {
    slug: "australia",
    name: "Australia",
    demonym: "Australian",
    flag: "🇦🇺",
    title: "Australians Moving to Argentina: Complete Guide",
    subtitle: "Working Holiday visa, remote work options, and Australian community",
    description: "Australians enjoy a Working Holiday Agreement with Argentina, making it easy to experience the country. This guide covers visa options and life for Aussies in Argentina.",
    region: "oceania",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Good for remote workers",
        incomeRequirement: "AUD $2,300-3,000/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Agreement",
      description: "Australia and Argentina have a Working Holiday Agreement for ages 18-35"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Australian Federal Police check"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise recommended. AUD can be exchanged in BA.",
      banking: "Australian banks limited locally. Local account recommended.",
      taxTreaty: true,
      taxTreatyDetails: "Australia-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000",
      mainLocations: ["Buenos Aires", "Bariloche"],
      associations: [
        { name: "Australian-Argentine Association" }
      ]
    },
    residencyPath: {
      easiestRoute: "Working Holiday (18-35) or Digital Nomad",
      timeline: "Varies",
      steps: [
        "Apply for Working Holiday (18-35) or Digital Nomad",
        "Convert to residency if staying longer"
      ],
      tips: [
        "Working Holiday great for younger Australians",
        "Bariloche popular with Australian skiers/outdoor enthusiasts"
      ]
    },
    faqs: [
      {
        question: "Do Australians need a visa for Argentina?",
        answer: "Tourists get 90 days on arrival. For longer stays, apply for Working Holiday (if 18-35) or Digital Nomad Visa."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "Best option for remote workers"
      }
    ],
    image: "/images/nationalities/australia.webp"
  },
  {
    slug: "brazil",
    name: "Brazil",
    demonym: "Brazilian",
    flag: "🇧🇷",
    title: "Brazilians in Argentina: Complete Guide",
    subtitle: "Mercosur benefits, simplified residency, and Brazilian community",
    description: "As fellow Mercosur members, Brazilians enjoy the easiest pathway to living in Argentina. No visa required for stays up to 2 years, and simplified citizenship options.",
    region: "latin-america",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can extend up to 2 years under Mercosur"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available but Mercosur is better",
        incomeRequirement: "R$7,500-10,000/month"
      },
      work: {
        eligible: true,
        notes: "No sponsorship needed for Mercosur residents",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Brazilians are full Mercosur members with maximum benefits"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Mercosur Full Membership",
      description: "Brazil is a founding member of Mercosur, granting citizens the most favorable immigration terms",
      benefits: [
        "2-year residency without job offer",
        "Work authorization included",
        "Path to citizenship in 2 years",
        "No visa needed to enter",
        "Only need valid passport"
      ]
    },
    documents: {
      passportValidity: "Valid passport only",
      criminalRecord: {
        required: false,
        apostille: false,
        notes: "Not required for Mercosur entry, but may be needed for residency"
      },
      birthCertificate: {
        required: false,
        apostille: false
      }
    },
    practicalInfo: {
      currencyExchange: "Brazilian reais accepted at border exchanges. Wise works well.",
      banking: "Brazilians can open accounts with relative ease",
      taxTreaty: false,
      taxTreatyDetails: "No double taxation treaty, but tax agreements exist",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "50,000+",
      mainLocations: ["Buenos Aires", "Misiones", "Foz do Iguaçu border area"],
      associations: [
        { name: "Brazilian Cultural Center Buenos Aires" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur (automatic 2-year residency)",
      timeline: "Immediate entry, 2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with valid Brazilian passport",
        "Apply for Mercosur residency within 90 days",
        "Receive 2-year temporary residency with work authorization",
        "Apply for citizenship after 2 years if desired"
      ],
      tips: [
        "Mercosur is the easiest pathway in the world to Argentine residency",
        "No need for job offer or proof of funds",
        "Portuguese speakers adapt easily (Portuñol works)",
        "Large Brazilian community in BA"
      ]
    },
    faqs: [
      {
        question: "Do Brazilians need a visa for Argentina?",
        answer: "No! Brazilians can enter with just a valid passport and stay up to 90 days, extendable to 2 years under Mercosur."
      },
      {
        question: "Can Brazilians work immediately in Argentina?",
        answer: "After applying for Mercosur residency (within 90 days of arrival), you receive work authorization. The process is simple and fast."
      },
      {
        question: "Is Portuguese enough or do I need Spanish?",
        answer: "Portuguese and Spanish are mutually intelligible (Portuñol). You'll understand and be understood, though learning Spanish helps with bureaucracy."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "Mercosur agreement details"
      }
    ],
    image: "/images/nationalities/brazil.webp"
  }
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
