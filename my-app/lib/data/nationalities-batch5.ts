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
      description: "Argentina has implemented special humanitarian visa programs for Ukrainian citizens, including expedited processing, temporary protection status, and simplified residency pathways.",
      benefits: [
        "Expedited residency processing",
        "Humanitarian visa provisions",
        "Work authorization during application",
        "Access to education; emergency healthcare free for all, routine public healthcare requires permanent residency or private insurance (Decreto 366/2025)",
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
      timeline: "30-60 days for humanitarian cases. Citizenship planning usually starts after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina (90 days visa-free)",
        "Apply for humanitarian visa or temporary residency",
        "Submit required documents (apostilled if available)",
        "Receive precaria (work authorization during processing)",
        "Complete biometric data collection",
        "Receive residency card",
        "After 2 years of continuous legal residence, evaluate the judicial citizenship route if you want to naturalize"
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
        answer: "After 2 years of continuous legal residence, you can generally evaluate Argentine citizenship through the courts. Because Ukrainian nationality rules can be complex, confirm the dual-nationality consequences with qualified counsel before filing."
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
    slug: "romania",
    name: "Romania",
    demonym: "Romanian",
    flag: "🇷🇴",
    title: "Romanian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Romanian community, visa pathways, and immigration options",
    description: "Romania and Argentina maintain positive diplomatic relations dating back decades. Romanian citizens enjoy visa-free entry, making Argentina an accessible destination for work, study, and residence. A growing Romanian community in Buenos Aires provides support for new arrivals.",
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
        notes: "Employer sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Romania is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special bilateral immigration agreement. Standard third-country residency process applies.",
      benefits: [
        "No visa required for 90-day entry",
        "Multiple temporary residency pathways available",
        "Path to citizenship after 2 years of legal residency"
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
      easiestRoute: "Digital Nomad Visa or Temporary Residency",
      timeline: "30-45 days processing. Citizenship planning usually starts after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina with Romanian passport (90 days visa-free)",
        "Gather required documents including apostilled criminal record",
        "Apply for temporary residency at Dirección Nacional de Migraciones within 90 days",
        "Submit birth certificate (apostilled) and proof of address",
        "Receive precaria (temporary authorization) while processing",
        "Collect residency card (DNI extranjero) within 30-45 days",
        "After 2 years of continuous legal residence, evaluate the judicial citizenship route if you want to naturalize"
      ],
      tips: [
        "Get criminal record certificate apostilled in Romania before departure",
        "Romanian community in Buenos Aires offers support and networking",
        "Many Romanian IT professionals find work in Argentine tech sector",
        "Consider Spanish lessons before arrival - essential for daily life",
        "Work visa requires employer sponsorship; Digital Nomad Visa for remote workers",
        "Document translation services available in Buenos Aires if needed"
      ]
    },
    faqs: [
      {
        question: "Do Romanians need a visa for Argentina?",
        answer: "No, Romanian citizens can enter Argentina visa-free for 90 days. For longer stays, apply for temporary residency (work, study, or rentista visa)."
      },
      {
        question: "Can Romanians work in Argentina?",
        answer: "Yes, with a work visa (requires employer sponsorship) or by obtaining temporary residency. The Digital Nomad Visa allows remote work for foreign employers."
      },
      {
        question: "Is there a Romanian community in Argentina?",
        answer: "Yes, an estimated 5,000-8,000 Romanians live in Argentina, primarily in Buenos Aires. Active Facebook groups and community associations provide support for new arrivals."
      },
      {
        question: "How long until I can get citizenship?",
        answer: "After 2 years of continuous legal residence, you can generally evaluate Argentine citizenship through the courts. Romania allows dual citizenship, but you should still confirm your personal situation before filing."
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
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Complete guide to residency pathways for Romanian citizens"
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
    subtitle: "Czech community, visa pathways, and immigration options",
    description: "The Czech Republic and Argentina maintain strong diplomatic relations. Czech citizens enjoy visa-free entry, making Argentina an accessible destination for Czech professionals, students, and retirees seeking new opportunities in South America.",
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
        notes: "Employer sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Czech Republic is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special bilateral immigration agreement. Standard third-country residency process applies.",
      benefits: [
        "Visa-free entry for 90 days",
        "Multiple temporary residency pathways available",
        "Path to citizenship after 2 years of legal residency"
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
      easiestRoute: "Digital Nomad Visa or Temporary Residency",
      timeline: "30-45 days processing. Citizenship planning usually starts after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina with Czech passport (90 days visa-free)",
        "Gather required documents including apostilled criminal record",
        "Apply for temporary residency at Dirección Nacional de Migraciones",
        "Submit apostilled birth certificate and proof of address",
        "Receive precaria (temporary authorization) allowing legal stay",
        "Collect residency card within 30-45 days",
        "After 2 years of continuous legal residence, evaluate the judicial citizenship route if desired"
      ],
      tips: [
        "Get criminal record certificate apostilled before leaving Czech Republic",
        "Join Czech community Facebook groups for support",
        "Many Czech professionals work in IT, engineering, and business",
        "Start learning Spanish before arrival - essential for integration",
        "Work visa requires employer sponsorship; Digital Nomad Visa for remote workers",
        "Consider healthcare options - public system available but private recommended"
      ]
    },
    faqs: [
      {
        question: "Do Czech citizens need a visa for Argentina?",
        answer: "No, Czech citizens can enter visa-free for 90 days. For longer stays, apply for temporary residency (work, study, or rentista visa)."
      },
      {
        question: "Can Czechs work in Argentina?",
        answer: "Yes, with a work visa (requires employer sponsorship) or by obtaining temporary residency. The Digital Nomad Visa allows remote work for foreign employers."
      },
      {
        question: "Is there a Czech community?",
        answer: "Yes, a small but active community of 3,000-5,000 Czechs in Argentina, mainly in Buenos Aires. Facebook groups provide networking and support."
      },
      {
        question: "How long to citizenship?",
        answer: "After 2 years of legal residency, you can apply for Argentine citizenship. The Czech Republic allows dual citizenship."
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
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency pathway for Czech citizens"
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
    subtitle: "Hungarian community, visa pathways, and immigration opportunities",
    description: "Hungary and Argentina share friendly diplomatic relations. Hungarian citizens enjoy visa-free entry and multiple residency pathways. A small Hungarian community in Buenos Aires provides cultural connections for new arrivals.",
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
        notes: "Employer sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Hungary is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special bilateral immigration agreement. Standard third-country residency process applies.",
      benefits: [
        "No visa required for 90-day entry",
        "Multiple temporary residency pathways available",
        "Path to citizenship after 2 years of legal residency"
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
      easiestRoute: "Digital Nomad Visa or Temporary Residency",
      timeline: "30-45 days processing. Citizenship planning usually starts after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina with Hungarian passport (90 days visa-free)",
        "Gather documents including apostilled criminal record",
        "Apply for temporary residency at migraciones within 90 days",
        "Submit birth certificate (apostilled) and proof of address",
        "Receive precaria (temporary authorization)",
        "Collect residency card within 30-45 days",
        "After 2 years of continuous legal residence, evaluate the judicial citizenship route if you want to naturalize"
      ],
      tips: [
        "Get criminal record certificate apostilled before departure from Hungary",
        "Hungarian community offers support for new arrivals",
        "Many Hungarians work in IT, business, and education",
        "Learn Spanish before arrival - essential for daily life",
        "Work visa requires employer sponsorship; Digital Nomad Visa for remote workers",
        "Consider private health insurance for better care"
      ]
    },
    faqs: [
      {
        question: "Do Hungarians need a visa for Argentina?",
        answer: "No, Hungarian citizens can enter visa-free for 90 days. For longer stays, apply for temporary residency (work, study, or rentista visa)."
      },
      {
        question: "Can Hungarians work in Argentina?",
        answer: "Yes, with a work visa (requires employer sponsorship) or by obtaining temporary residency. The Digital Nomad Visa allows remote work for foreign employers."
      },
      {
        question: "Is there a Hungarian community?",
        answer: "Yes, an estimated 3,000-5,000 Hungarians live in Argentina, primarily in Buenos Aires. Facebook groups and community associations provide support."
      },
      {
        question: "When can I apply for citizenship?",
        answer: "After 2 years of continuous legal residence, you can generally evaluate Argentine citizenship through the courts. Hungary allows dual citizenship, but you should still confirm your personal situation before filing."
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
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency pathway for Hungarian citizens"
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
