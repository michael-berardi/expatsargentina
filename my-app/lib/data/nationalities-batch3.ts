// ============================================================================
// BATCH 3: Additional Nationalities 7-9 (Sweden, Norway, Denmark)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch3: Nationality[] = [
  {
    slug: "sweden",
    name: "Sweden",
    demonym: "Swedish",
    flag: "🇸🇪",
    title: "Swedish Citizens in Argentina: Immigration Guide",
    subtitle: "EU-Mercosur benefits, Swedish community, and visa pathways",
    description: "Sweden and Argentina maintain diplomatic and trade relations. Swedish citizens benefit from EU-Mercosur association agreements for streamlined immigration.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can be extended"
      },
      digitalNomad: {
        eligible: true,
        notes: "Good for Swedish remote workers",
        incomeRequirement: "SEK 15,000-20,000/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "Sweden has EU-Mercosur association"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Sweden benefits from EU-Mercosur agreements"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Utdrag ur belastningsregistret"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise recommended. SEK can be exchanged.",
      banking: "Swedish citizens can open accounts",
      taxTreaty: true,
      taxTreatyDetails: "Sweden-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Swedish Club Buenos Aires" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Swedish passport",
        "Apply for Mercosur residency",
        "Receive 2-year temporary residency"
      ],
      tips: [
        "Get criminal record extract before departure",
        "Swedish design aesthetic appreciated in BA"
      ]
    },
    faqs: [
      {
        question: "Do Swedes need a visa for Argentina?",
        answer: "No visa for 90 days. Mercosur visa available for longer stays."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "EU citizen pathway"
      }
    ],
    image: "/images/nationalities/sweden.webp"
  },
  {
    slug: "norway",
    name: "Norway",
    demonym: "Norwegian",
    flag: "🇳🇴",
    title: "Norwegian Citizens in Argentina: Immigration Guide",
    subtitle: "Visa pathways, Norwegian community, and immigration options",
    description: "Norway and Argentina share friendly bilateral ties. Norwegian citizens enjoy visa-free entry and straightforward pathways for residency and extended stays in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for Norwegian remote workers",
        incomeRequirement: "NOK 15,000-20,000/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "Norway is EEA member but not EU - similar benefits"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Politiets registerutskrift"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise recommended. NOK can be exchanged.",
      banking: "Norwegian citizens can open accounts",
      taxTreaty: true,
      taxTreatyDetails: "Norway-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "1,500-2,500",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Norwegian Seamen's Church" }
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa",
      timeline: "Varies by pathway",
      steps: [
        "Enter on tourist visa",
        "Apply for Digital Nomad or temporary residency",
        "Progress to permanent residency"
      ],
      tips: [
        "Get police certificate before departure",
        "Norwegian outdoor culture fits well with Argentine activities"
      ]
    },
    faqs: [
      {
        question: "Do Norwegians need a visa?",
        answer: "No visa for 90 days. Digital Nomad Visa for longer stays."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "Best option for Norwegians"
      }
    ],
    image: "/images/nationalities/norway.webp"
  },
  {
    slug: "denmark",
    name: "Denmark",
    demonym: "Danish",
    flag: "🇩🇰",
    title: "Danish Citizens in Argentina: Immigration Guide",
    subtitle: "EU-Mercosur benefits, Danish community, and visa pathways",
    description: "Denmark and Argentina maintain diplomatic and trade relations. Danish citizens benefit from EU-Mercosur agreements for easy immigration.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable"
      },
      digitalNomad: {
        eligible: true,
        notes: "Good for Danish remote workers",
        incomeRequirement: "DKK 10,000-13,000/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "Denmark has EU-Mercosur association"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Denmark benefits from EU-Mercosur agreements"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Straffeattest"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise recommended. DKK can be exchanged.",
      banking: "Danish citizens can open accounts",
      taxTreaty: true,
      taxTreatyDetails: "Denmark-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "1,500-2,500",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Danish Club Buenos Aires" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Danish passport",
        "Apply for Mercosur residency",
        "Receive 2-year temporary residency"
      ],
      tips: [
        "Get criminal record before departure",
        "Danish design and sustainability concepts valued"
      ]
    },
    faqs: [
      {
        question: "Do Danes need a visa?",
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
    image: "/images/nationalities/denmark.webp"
  }
];
