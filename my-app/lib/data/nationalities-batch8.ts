// ============================================================================
// BATCH 8: Additional European Countries (Greece, Portugal, Ireland, Sweden, Norway)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch8: Nationality[] = [
  {
    slug: "greece",
    name: "Greece",
    demonym: "Greek",
    flag: "🇬🇷",
    title: "Greek Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Historical ties, EU-Mercosur benefits, and Greek community in Argentina",
    description: "Greece and Argentina share historical ties through Greek immigration waves. Greek citizens benefit from EU-Mercosur association agreements and find a welcoming community with cultural connections.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Greek citizens enter visa-free with valid passport",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for Greek remote workers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Work authorization through EU-Mercosur association",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Greece has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Greece benefits from EU-Mercosur association agreements for streamlined immigration.",
      benefits: [
        "2-year Mercosur residency option",
        "No visa required for entry",
        "Work authorization available",
        "Path to citizenship after 2 years"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Ποινικό Μητρώο (Penal Record) from Greek Ministry of Justice"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged in Buenos Aires. Wise popular for transfers.",
      banking: "Greek citizens can open Argentine accounts with residency. EU banking connections.",
      taxTreaty: true,
      taxTreatyDetails: "Greece-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "10,000-15,000 (strong historical presence)",
      mainLocations: [
        "Buenos Aires (Liniers, Caballito)",
        "Mar del Plata",
        "Rosario"
      ],
      associations: [
        { name: "Greek-Argentine Community" },
        { name: "Hellenic Society of Buenos Aires" }
      ],
      facebookGroups: [
        "Greeks in Buenos Aires",
        "Greek Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year residency)",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with Greek passport (90 days visa-free)",
        "Apply for Mercosur residency within 90 days",
        "Receive 2-year temporary residency",
        "Apply for citizenship after 2 years if desired"
      ],
      tips: [
        "Get criminal record certificate apostilled before leaving Greece",
        "Strong Greek community in Liniers neighborhood",
        "Greek restaurants and Orthodox churches available",
        "Greek professionals in shipping and business do well",
        "Consider learning Spanish before arrival"
      ]
    },
    faqs: [
      {
        question: "Do Greek citizens need a visa for Argentina?",
        answer: "No visa required for 90 days. Apply for Mercosur residency for longer stays with full work rights."
      },
      {
        question: "Is there a Greek community in Argentina?",
        answer: "Yes, a well-established community with strong historical presence, especially in Buenos Aires (Liniers) and Mar del Plata. Greek Orthodox churches and cultural centers available."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Visa Information",
        url: "/visas/temporary",
        description: "EU citizen residency pathway"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for Greeks"
      }
    ],
    image: "/images/nationalities/greece.webp"
  },

  {
    slug: "ireland",
    name: "Ireland",
    demonym: "Irish",
    flag: "🇮🇪",
    title: "Irish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Historical ties, EU-Mercosur benefits, and Irish-Argentine connections",
    description: "Ireland and Argentina share deep historical connections through significant Irish immigration. Irish citizens benefit from EU-Mercosur association agreements and find cultural familiarity in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Irish citizens enter visa-free",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular for Irish remote workers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Work authorization available",
        sponsorshipRequired: false
      },
      mercosur: {
        eligible: true,
        notes: "Ireland has EU-Mercosur association"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Ireland benefits from EU-Mercosur agreements"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Certificate from Garda Síochána"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Euros easily exchanged. Wise popular.",
      banking: "Can open accounts with residency.",
      taxTreaty: true,
      taxTreatyDetails: "Ireland-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "15,000-25,000 (strong historical ties)",
      mainLocations: [
        "Buenos Aires",
        "Luján (Irish shrine)"
      ],
      associations: [
        { name: "Irish-Argentine Society" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Irish passport",
        "Apply for Mercosur residency",
        "Receive 2-year temporary residency"
      ],
      tips: [
        "Strong Irish historical influence in Argentina",
        "Irish pubs and cultural connections",
        "Get police certificate before departure"
      ]
    },
    faqs: [
      {
        question: "Do Irish need a visa?",
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
    image: "/images/nationalities/ireland.webp"
  }
];
