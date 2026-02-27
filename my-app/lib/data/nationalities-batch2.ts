// ============================================================================
// BATCH 2: Additional Nationalities 4-6 (Portugal, Switzerland, Austria)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch2: Nationality[] = [
  {
    slug: "portugal",
    name: "Portugal",
    demonym: "Portuguese",
    flag: "🇵🇹",
    title: "Portuguese Citizens in Argentina: Immigration Guide",
    subtitle: "EU-Mercosur benefits, language advantages, and Portuguese community",
    description: "Portugal and Argentina share deep historical ties, with Portuguese being one of the most spoken languages in neighboring Brazil. Portuguese citizens enjoy easy immigration pathways and cultural familiarity.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can be extended"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for remote workers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "Portugal has EU-Mercosur association"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Portugal benefits from EU-Mercosur agreements",
      benefits: [
        "2-year Mercosur residency",
        "Language similarity with Argentine Spanish",
        "Cultural connections"
      ]
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificado do Registo Criminal"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise works well. EUR accepted.",
      banking: "Portuguese citizens can open accounts",
      taxTreaty: true,
      taxTreatyDetails: "Portugal-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "4,000-6,000",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Portuguese Center Buenos Aires" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Portuguese passport",
        "Apply for Mercosur residency",
        "Receive 2-year temporary residency"
      ],
      tips: [
        "Portuguese language helps with Portuñol",
        "Get criminal record certificate before departure"
      ]
    },
    faqs: [
      {
        question: "Do Portuguese citizens need a visa?",
        answer: "No, 90 days visa-free. Mercosur visa for longer stays."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Visa",
        url: "/visas/temporary",
        description: "EU citizen residency"
      }
    ],
    image: "/images/nationalities/portugal.webp"
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    demonym: "Swiss",
    flag: "🇨🇭",
    title: "Swiss Citizens in Argentina: Immigration Guide",
    subtitle: "Visa options, Swiss community, and immigration pathways",
    description: "Switzerland and Argentina maintain strong diplomatic and economic relations. Swiss citizens have access to various visa pathways and enjoy a high quality of life in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Perfect for Swiss remote workers",
        incomeRequirement: "CHF 1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "Switzerland is not EU but has bilateral agreements"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Führungszeugnis / Extrait du casier judiciaire"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Swiss francs can be exchanged. Wise recommended.",
      banking: "Swiss citizens can open Argentine accounts",
      taxTreaty: true,
      taxTreatyDetails: "Switzerland-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000",
      mainLocations: ["Buenos Aires", "Bariloche"],
      associations: [
        { name: "Swiss-Argentine Chamber of Commerce" }
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa",
      timeline: "Varies by pathway",
      steps: [
        "Enter on tourist visa (90 days)",
        "Apply for Digital Nomad or temporary residency",
        "Progress to permanent residency"
      ],
      tips: [
        "Get background check before leaving Switzerland",
        "Bariloche has Swiss alpine similarities"
      ]
    },
    faqs: [
      {
        question: "Do Swiss citizens need a visa?",
        answer: "No visa for 90 days. Digital Nomad Visa recommended for longer stays."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "Best option for Swiss citizens"
      }
    ],
    image: "/images/nationalities/switzerland.webp"
  },
  {
    slug: "austria",
    name: "Austria",
    demonym: "Austrian",
    flag: "🇦🇹",
    title: "Austrian Citizens in Argentina: Immigration Guide",
    subtitle: "EU benefits, Austrian community, and immigration pathways",
    description: "Austria and Argentina share cultural connections, particularly in music and arts. Austrian citizens enjoy EU-Mercosur benefits for streamlined immigration.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Good for Austrian remote workers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "Austria has EU-Mercosur association"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Austria benefits from EU-Mercosur agreements"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Strafregisterbescheinigung"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise recommended. EUR accepted.",
      banking: "Austrian citizens can open accounts",
      taxTreaty: true,
      taxTreatyDetails: "Austria-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Austrian-Argentine Association" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Austrian passport",
        "Apply for Mercosur residency",
        "Receive 2-year temporary residency"
      ],
      tips: [
        "Get criminal record before departure",
        "Austrian classical music connections in BA"
      ]
    },
    faqs: [
      {
        question: "Do Austrians need a visa?",
        answer: "No visa for 90 days. Mercosur visa available."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "EU citizen pathway"
      }
    ],
    image: "/images/nationalities/austria.webp"
  }
];
