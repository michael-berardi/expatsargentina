// ============================================================================
// BATCH 5: Eastern European & Baltic Countries
// Ukraine, Poland, Romania, Czech Republic, Hungary
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch5: Nationality[] = [
  {
    slug: "ukraine",
    name: "Ukraine",
    demonym: "Ukrainian",
    flag: "🇺🇦",
    title: "Ukrainian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Humanitarian pathways, special provisions, and community support",
    description: "Argentina has implemented special humanitarian provisions for Ukrainian citizens fleeing conflict. With a growing community and supportive policies, Ukraine nationals find Argentina offers safety, opportunity, and a welcoming environment.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Ukrainians can enter visa-free for 90 days. Special humanitarian provisions available.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Ukrainian remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Work authorization available through humanitarian programs",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: false,
        notes: "Ukraine is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Humanitarian Provisions",
      description: "Argentina has implemented special humanitarian visa programs for Ukrainian citizens, including expedited processing, temporary protection status, and streamlined residency pathways.",
      benefits: [
        "Expedited residency processing",
        "Humanitarian visa provisions",
        "Work authorization during application",
        "Access to public healthcare and education",
        "Family reunification programs",
        "Community support networks"
      ]
    },
    documents: {
      passportValidity: "Valid at entry",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Довідка про відсутність судимості with apostille (or equivalent from host country if refugee)"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Humanitarian status documentation (if applicable)",
        "Health insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "Ukrainian hryvnia limited exchange. USD/EUR preferred. Wise and crypto used for transfers.",
      banking: "Can open accounts with residency. Some start with fintech (Ualá, Mercado Pago).",
      taxTreaty: false,
      taxTreatyDetails: "No specific tax treaty. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-25,000 (growing with recent arrivals)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano)",
        "Córdoba",
        "Rosario"
      ],
      associations: [
        { name: "Ukrainian-Argentine Association" },
        { name: "Ukrainian Community Buenos Aires" }
      ],
      facebookGroups: [
        "Ukrainians in Buenos Aires",
        "Українці в Аргентині"
      ]
    },
    residencyPath: {
      easiestRoute: "Humanitarian Visa or Temporary Residency",
      timeline: "30-60 days for humanitarian cases. Citizenship in 2 years.",
      steps: [
        "Enter Argentina (90 days visa-free)",
        "Apply for humanitarian visa or temporary residency",
        "Submit required documents (apostilled if available)",
        "Receive precaria (work authorization during processing)",
        "Complete biometric data collection",
        "Receive residency card",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Contact Ukrainian community organizations for support",
        "Humanitarian provisions may expedite your case",
        "Many Ukrainians work in IT, services, and hospitality",
        "Learn Spanish - essential for daily life",
        "Argentines are supportive of Ukrainians",
        "Document translation services available in Buenos Aires"
      ]
    },
    faqs: [
      {
        question: "Do Ukrainians need a visa for Argentina?",
        answer: "No visa required for 90 days. Special humanitarian provisions available for those seeking longer stays."
      },
      {
        question: "Are there special provisions for Ukrainians?",
        answer: "Yes, Argentina has implemented humanitarian visa programs with expedited processing for Ukrainian citizens fleeing conflict."
      },
      {
        question: "Is there a Ukrainian community?",
        answer: "Yes, a growing community in Buenos Aires with support organizations and cultural associations. Ukrainian language services available."
      },
      {
        question: "Can Ukrainians work immediately?",
        answer: "Humanitarian visa holders can work legally while their residency processes. The precaria document allows employment."
      },
      {
        question: "Is Argentine citizenship available?",
        answer: "Yes, after 2 years of legal residency, Ukrainians can apply for citizenship. Ukraine allows dual citizenship."
      }
    ],
    relatedResources: [
      {
        title: "Humanitarian Visa Information",
        url: "/visas/humanitarian",
        description: "Special provisions for Ukrainians"
      },
      {
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "General residency process"
      }
    ],
    image: "/images/nationalities/ukraine.webp"
  },

  {
    slug: "poland",
    name: "Poland",
    demonym: "Polish",
    flag: "🇵🇱",
    title: "Polish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Historical ties, growing community, and EU-Mercosur benefits",
    description: "Poland and Argentina share deep historical connections through Polish immigration waves. Polish citizens benefit from EU-Mercosur association agreements and find a welcoming community with cultural ties dating back generations.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Polish citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Polish remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Work authorization available through Mercosur association",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Poland has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Poland benefits from EU-Mercosur association agreements, providing simplified residency and work authorization pathways.",
      benefits: [
        "2-year Mercosur residency option",
        "No visa required for entry",
        "Work authorization with Mercosur visa",
        "Path to citizenship after 2 years",
        "Recognition of professional qualifications"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Zaświadczenie o niekaralności with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Polish złoty can be exchanged in Buenos Aires. EUR preferred. Wise popular for transfers.",
      banking: "Can open accounts with residency. Polish banks have correspondent relationships.",
      taxTreaty: true,
      taxTreatyDetails: "Poland-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-25,000",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano)",
        "Misiones province",
        "Chaco province"
      ],
      associations: [
        { name: "Polish-Argentine Association" },
        { name: "Casa Polaca Buenos Aires" }
      ],
      facebookGroups: [
        "Polish Community Argentina",
        "Polacy w Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year residency)",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with Polish passport (90 days visa-free)",
        "Gather documents including apostilled criminal record",
        "Apply for Mercosur residency within 90 days",
        "Receive 2-year temporary residency",
        "Apply for citizenship after 2 years"
      ],
      tips: [
        "Get criminal record certificate apostilled before leaving Poland",
        "Polish historical communities in Misiones and Chaco",
        "Many Polish professionals work in IT and business",
        "Consider learning Spanish before arrival"
      ]
    },
    faqs: [
      {
        question: "Do Polish citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. Apply for Mercosur residency for longer stays."
      },
      {
        question: "Is there a Polish community in Argentina?",
        answer: "Yes, established community of 15,000-25,000 with historical presence in Misiones province."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Visa Information",
        url: "/visas/temporary",
        description: "EU citizen residency pathway"
      }
    ],
    image: "/images/nationalities/poland.webp"
  },

  {
    slug: "romania",
    name: "Romania",
    demonym: "Romanian",
    flag: "🇷🇴",
    title: "Romanian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "EU-Mercosur benefits, Romanian community, and immigration pathways",
    description: "Romania and Argentina maintain positive diplomatic relations dating back decades. Romanian citizens benefit from EU-Mercosur association agreements, making Argentina an accessible destination for work, study, and residence. A growing Romanian community in Buenos Aires provides support for new arrivals.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Romanians enter visa-free with valid passport for up to 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Romanian remote workers and freelancers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Work authorization through Mercosur association - no employer sponsorship needed",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Romania has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Romania benefits from EU-Mercosur association agreements providing streamlined residency, work authorization, and path to citizenship.",
      benefits: [
        "2-year Mercosur residency option",
        "No visa required for 90-day entry",
        "Work authorization without employer sponsorship",
        "Path to citizenship after 2 years",
        "Recognition of EU professional qualifications",
        "Simplified document requirements"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Cazier judiciar with apostille from Romanian authorities"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support (for residency application)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Romanian leu can be exchanged at Buenos Aires currency exchanges, though USD and EUR are preferred. Wise and Revolut popular for transfers.",
      banking: "Romanians can open Argentine accounts with residency documentation. EU banking connections facilitate transfers.",
      taxTreaty: true,
      taxTreatyDetails: "Romania and Argentina have tax agreements to prevent double taxation. Consult an accountant familiar with cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000 (estimated)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano)",
        "Córdoba"
      ],
      associations: [
        { name: "Romanian Community Argentina" },
        { name: "Asociația Românilor din Argentina" }
      ],
      facebookGroups: [
        "Români în Buenos Aires",
        "Romanian Community Argentina",
        "Romanians in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year temporary residency)",
      timeline: "30-45 days processing. Citizenship eligibility after 2 years of residency.",
      steps: [
        "Enter Argentina with Romanian passport (90 days visa-free)",
        "Gather required documents including apostilled criminal record",
        "Apply for Mercosur residency at Dirección Nacional de Migraciones within 90 days",
        "Submit birth certificate (apostilled) and proof of address",
        "Receive precaria (temporary authorization) while processing",
        "Collect residency card (DNI extranjero) within 30-45 days",
        "Apply for citizenship after 2 years of legal residency"
      ],
      tips: [
        "Get criminal record certificate apostilled in Romania before departure",
        "Romanian community in Buenos Aires offers support and networking",
        "Many Romanian IT professionals find work in Argentine tech sector",
        "Consider Spanish lessons before arrival - essential for daily life",
        "Mercosur visa gives full work rights without employer sponsorship",
        "Document translation services available in Buenos Aires if needed"
      ]
    },
    faqs: [
      {
        question: "Do Romanians need a visa for Argentina?",
        answer: "No, Romanian citizens can enter Argentina visa-free for 90 days. For longer stays, apply for Mercosur residency which provides 2 years of legal residence with full work rights."
      },
      {
        question: "Can Romanians work in Argentina?",
        answer: "Yes, with the Mercosur visa, Romanians have full work authorization without needing employer sponsorship. You can work for Argentine companies, freelance, or start a business."
      },
      {
        question: "Is there a Romanian community in Argentina?",
        answer: "Yes, an estimated 5,000-8,000 Romanians live in Argentina, primarily in Buenos Aires. Active Facebook groups and community associations provide support for new arrivals."
      },
      {
        question: "How long until I can get citizenship?",
        answer: "After 2 years of legal residency with the Mercosur visa, you can apply for Argentine citizenship. Romania allows dual citizenship, so you can keep your Romanian passport."
      },
      {
        question: "What documents need apostille?",
        answer: "Your criminal record certificate (cazier judiciar) and birth certificate both need apostille from Romanian authorities. Get these before traveling to Argentina."
      },
      {
        question: "Do I need to speak Spanish?",
        answer: "While some Romanians get by initially with English in expat areas, Spanish is essential for daily life, work, and dealing with immigration. Start learning before arrival."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency Guide",
        url: "/visas/temporary",
        description: "Complete guide to EU citizen residency pathway"
      },
      {
        title: "Cost of Living in Buenos Aires",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for Romanian expats"
      },
      {
        title: "Working in Argentina",
        url: "/profession",
        description: "Career opportunities and work culture"
      }
    ],
    image: "/images/nationalities/romania.webp"
  },

  {
    slug: "czech-republic",
    name: "Czech Republic",
    demonym: "Czech",
    flag: "🇨🇿",
    title: "Czech Citizens in Argentina: Complete Immigration Guide",
    subtitle: "EU-Mercosur benefits, Czech community, and streamlined immigration",
    description: "The Czech Republic and Argentina maintain strong diplomatic relations. Czech citizens benefit from EU-Mercosur association agreements, making Argentina an accessible destination for Czech professionals, students, and retirees seeking new opportunities in South America.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Czech citizens enter visa-free with valid passport for up to 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Czech remote workers, freelancers, and digital entrepreneurs",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Full work authorization through Mercosur association - no local employer sponsorship required",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Czech Republic has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Czech citizens benefit from EU-Mercosur association agreements providing streamlined residency pathways and work authorization.",
      benefits: [
        "2-year Mercosur residency option",
        "Visa-free entry for 90 days",
        "Work authorization without sponsorship",
        "Path to citizenship after 2 years",
        "Recognition of professional qualifications",
        "Simplified bureaucratic procedures"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Výpis z rejstříku trestů with apostille from Czech Ministry of Justice"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina (rental contract or hotel booking)",
        "Proof of financial means (bank statements)",
        "Health insurance with Argentina coverage"
      ]
    },
    practicalInfo: {
      currencyExchange: "Czech koruna can be exchanged at Buenos Aires currency exchanges, though USD and EUR are preferred. Wise popular for international transfers.",
      banking: "Czech citizens can open Argentine bank accounts with residency documentation. Some Czech banks have correspondent relationships.",
      taxTreaty: true,
      taxTreatyDetails: "Czech Republic and Argentina have tax agreements. Consult a tax professional for cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000 (estimated)",
      mainLocations: [
        "Buenos Aires (Palermo, Recoleta)",
        "Mendoza"
      ],
      associations: [
        { name: "Czech Community Argentina" },
        { name: "Czech-Argentine Cultural Association" }
      ],
      facebookGroups: [
        "Czechs in Buenos Aires",
        "Češi v Argentině",
        "Czech Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year temporary residency)",
      timeline: "30-45 days processing. Eligible for citizenship after 2 years of residency.",
      steps: [
        "Enter Argentina with Czech passport (90 days visa-free)",
        "Gather required documents including apostilled criminal record",
        "Apply for Mercosur residency at Dirección Nacional de Migraciones",
        "Submit apostilled birth certificate and proof of address",
        "Receive precaria (temporary authorization) allowing legal stay",
        "Collect residency card within 30-45 days",
        "After 2 years, apply for citizenship if desired"
      ],
      tips: [
        "Get criminal record certificate apostilled before leaving Czech Republic",
        "Join Czech community Facebook groups for support",
        "Many Czech professionals work in IT, engineering, and business",
        "Start learning Spanish before arrival - essential for integration",
        "Mercosur visa provides full work rights immediately",
        "Consider healthcare options - public system available but private recommended"
      ]
    },
    faqs: [
      {
        question: "Do Czech citizens need a visa for Argentina?",
        answer: "No, Czech citizens can enter visa-free for 90 days. For longer stays, apply for Mercosur residency which provides 2 years of legal residence with work authorization."
      },
      {
        question: "Can Czechs work in Argentina?",
        answer: "Yes, the Mercosur visa gives Czech citizens full work rights without employer sponsorship. You can work for Argentine companies, freelance, or start your own business."
      },
      {
        question: "Is there a Czech community?",
        answer: "Yes, a small but active community of 3,000-5,000 Czechs in Argentina, mainly in Buenos Aires. Facebook groups provide networking and support."
      },
      {
        question: "How long to citizenship?",
        answer: "After 2 years of legal residency with the Mercosur visa, you can apply for Argentine citizenship. The Czech Republic allows dual citizenship."
      },
      {
        question: "Which documents need apostille?",
        answer: "Your criminal record certificate (výpis z rejstříku trestů) and birth certificate both need apostille from Czech authorities before traveling."
      },
      {
        question: "Is Spanish necessary?",
        answer: "While you can survive initially with English in tourist areas, Spanish is essential for daily life, work, and dealing with government offices. Start learning before arrival."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "EU citizen residency pathway"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning"
      }
    ],
    image: "/images/nationalities/czech-republic.webp"
  },

  {
    slug: "hungary",
    name: "Hungary",
    demonym: "Hungarian",
    flag: "🇭🇺",
    title: "Hungarian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "EU-Mercosur benefits, Hungarian community, and immigration opportunities",
    description: "Hungary and Argentina share friendly diplomatic relations. Hungarian citizens benefit from EU-Mercosur association agreements, offering streamlined residency and work pathways. A small Hungarian community in Buenos Aires provides cultural connections for new arrivals.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Hungarians enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Hungarian remote workers and digital professionals",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Work authorization available through Mercosur association",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Hungary has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Hungary benefits from EU-Mercosur association agreements providing simplified immigration pathways for Hungarian citizens.",
      benefits: [
        "2-year Mercosur residency available",
        "No visa required for 90-day entry",
        "Work authorization without employer sponsorship",
        "Path to citizenship after 2 years",
        "Recognition of EU professional qualifications"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Erkölcsi bizonyítvány with apostille from Hungarian authorities"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of financial means"
      ]
    },
    practicalInfo: {
      currencyExchange: "Hungarian forint can be exchanged at Buenos Aires currency exchanges. USD and EUR preferred for larger amounts.",
      banking: "Hungarians can open Argentine accounts with residency documentation. Fintech options like Ualá available immediately.",
      taxTreaty: true,
      taxTreatyDetails: "Hungary and Argentina have tax agreements to prevent double taxation. Consult an accountant for details.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000 (estimated)",
      mainLocations: [
        "Buenos Aires",
        "Córdoba"
      ],
      associations: [
        { name: "Hungarian Community Buenos Aires" },
        { name: "Magyar Közösség Argentínában" }
      ],
      facebookGroups: [
        "Hungarians in Buenos Aires",
        "Magyarok Argentínában",
        "Hungarian Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year residency)",
      timeline: "30-45 days processing. Citizenship eligibility after 2 years.",
      steps: [
        "Enter Argentina with Hungarian passport (90 days visa-free)",
        "Gather documents including apostilled criminal record",
        "Apply for Mercosur residency at migraciones within 90 days",
        "Submit birth certificate (apostilled) and proof of address",
        "Receive precaria (temporary authorization)",
        "Collect residency card within 30-45 days",
        "Apply for citizenship after 2 years of residency"
      ],
      tips: [
        "Get criminal record certificate apostilled before departure from Hungary",
        "Hungarian community offers support for new arrivals",
        "Many Hungarians work in IT, business, and education",
        "Learn Spanish before arrival - essential for daily life",
        "Mercosur visa provides immediate work authorization",
        "Consider private health insurance for better care"
      ]
    },
    faqs: [
      {
        question: "Do Hungarians need a visa for Argentina?",
        answer: "No, Hungarian citizens can enter visa-free for 90 days. For longer stays, apply for the Mercosur residency which provides 2 years of legal residence with full work rights."
      },
      {
        question: "Can Hungarians work in Argentina?",
        answer: "Yes, with the Mercosur visa you have full work authorization without needing employer sponsorship. You can work for Argentine companies or start your own business."
      },
      {
        question: "Is there a Hungarian community?",
        answer: "Yes, an estimated 3,000-5,000 Hungarians live in Argentina, primarily in Buenos Aires. Facebook groups and community associations provide support."
      },
      {
        question: "When can I apply for citizenship?",
        answer: "After 2 years of legal residency with the Mercosur visa, you can apply for Argentine citizenship. Hungary allows dual citizenship."
      },
      {
        question: "What documents need apostille?",
        answer: "Your criminal record certificate (erkölcsi bizonyítvány) and birth certificate both need apostille from Hungarian authorities. Get these before traveling."
      },
      {
        question: "Is Spanish required?",
        answer: "Spanish is essential for daily life, work, and dealing with immigration offices. While English works in some business settings, you'll need Spanish for integration."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "EU citizen pathway"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      }
    ],
    image: "/images/nationalities/hungary.webp"
  }
];
