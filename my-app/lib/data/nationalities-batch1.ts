// ============================================================================
// BATCH 1: Additional Nationalities 1-3 (France, Netherlands, Belgium)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch1: Nationality[] = [
  {
    slug: "france",
    name: "France",
    demonym: "French",
    flag: "🇫🇷",
    title: "French Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways, EU-Mercosur agreements, and French community connections",
    description: "Argentina has strong historical ties with France, including one of the largest French communities in Latin America. French citizens benefit from EU-Mercosur agreements and enjoy a streamlined immigration process.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can be extended for additional 90 days"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent for remote workers employed by French companies",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "France has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "As an EU member, France benefits from Mercosur association agreements",
      benefits: [
        "2-year Mercosur residency option",
        "No visa required for entry",
        "Work authorization with Mercosur visa",
        "Path to citizenship after 2 years"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Bulletin n°3 (casier judiciaire) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise and Revolut popular among French. EUR can be exchanged.",
      banking: "French citizens can open accounts with residency documentation",
      taxTreaty: true,
      taxTreatyDetails: "France-Argentina tax treaty prevents double taxation",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "6,000-8,000 citizens (200,000+ of French descent)",
      mainLocations: ["Buenos Aires", "Mendoza wine region", "Bariloche"],
      associations: [
        { name: "Alliance Française Buenos Aires", url: "https://www.alianzafrancesa.org.ar" },
        { name: "French-Argentine Chamber of Commerce" }
      ],
      facebookGroups: ["Français à Buenos Aires", "French Community Argentina"]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year residency) or Digital Nomad",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with valid French passport (90 days visa-free)",
        "Apply for Mercosur residency within 90 days",
        "Receive 2-year temporary residency",
        "Apply for citizenship after 2 years if desired"
      ],
      tips: [
        "Mercosur visa is the easiest pathway",
        "Get Bulletin n°3 before leaving France",
        "Alliance Française offers excellent cultural integration",
        "French wine expertise valued in Mendoza"
      ]
    },
    faqs: [
      {
        question: "Do French citizens need a visa for Argentina?",
        answer: "No, French citizens can enter visa-free for 90 days. For longer stays, apply for the Mercosur visa (2-year residency) or Digital Nomad Visa."
      },
      {
        question: "Is there a French community in Argentina?",
        answer: "Yes, one of the largest in Latin America. Alliance Française has multiple locations and the French school (Lycée Franco-Argentin) is well-established."
      },
      {
        question: "Can I use my French health insurance in Argentina?",
        answer: "French social security (Sécurité Sociale) doesn't cover Argentina. You'll need private Argentine health insurance (prepaga) or international coverage."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Visa Information",
        url: "/visas/temporary",
        description: "Details on Mercosur residency for EU citizens"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for French expats"
      }
    ],
    image: "/images/nationalities/france.webp"
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    demonym: "Dutch",
    flag: "🇳🇱",
    title: "Dutch Citizens in Argentina: Immigration Guide",
    subtitle: "EU-Mercosur benefits, visa pathways, and Dutch community connections",
    description: "The Netherlands and Argentina have strong economic and cultural ties. Dutch citizens enjoy EU-Mercosur benefits, making immigration straightforward. The Dutch community in Argentina is active and well-connected.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Can be extended once for additional 90 days"
      },
      digitalNomad: {
        eligible: true,
        notes: "Ideal for Dutch remote workers and freelancers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "Netherlands has EU-Mercosur association benefits"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Netherlands benefits from EU's association with Mercosur"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Verklaring Omtrent het Gedrag (VOG) with apostille"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise popular among Dutch. EUR accepted at exchanges.",
      banking: "Dutch citizens can open accounts with proper documentation",
      taxTreaty: true,
      taxTreatyDetails: "Netherlands-Argentina double taxation treaty in place",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000",
      mainLocations: ["Buenos Aires", "Chaco (agricultural areas)"],
      associations: [
        { name: "Dutch-Argentine Chamber of Commerce" },
        { name: "Holland Club Buenos Aires" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year residency)",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with Dutch passport (90 days visa-free)",
        "Apply for Mercosur residency within 90 days",
        "Receive 2-year temporary residency with work rights",
        "Progress to permanent residency and citizenship"
      ],
      tips: [
        "Get VOG certificate before leaving Netherlands",
        "Dutch agricultural expertise valued in rural areas",
        "Strong business connections between NL and Argentina"
      ]
    },
    faqs: [
      {
        question: "Do Dutch citizens need a visa for Argentina?",
        answer: "No, entry is visa-free for 90 days. For longer stays, the Mercosur visa provides 2-year residency with work authorization."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "Best option for remote workers"
      }
    ],
    image: "/images/nationalities/netherlands.webp"
  },
  {
    slug: "belgium",
    name: "Belgium",
    demonym: "Belgian",
    flag: "🇧🇪",
    title: "Belgian Citizens in Argentina: Immigration Guide",
    subtitle: "EU-Mercosur benefits, visa options, and Belgian community",
    description: "Belgium and Argentina share economic ties, particularly in agriculture and pharmaceuticals. Belgian citizens enjoy streamlined immigration through EU-Mercosur agreements.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Extendable for additional 90 days"
      },
      digitalNomad: {
        eligible: true,
        notes: "Good for Belgian remote workers",
        incomeRequirement: "€1,400-1,800/month"
      },
      work: {
        eligible: true,
        notes: "Sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: true,
        notes: "Belgium has EU-Mercosur association status"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "EU-Mercosur Association",
      description: "Belgium benefits from EU-Mercosur agreements"
    },
    documents: {
      passportValidity: "6 months",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of good conduct (bewijs van goed gedrag)"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Wise recommended. EUR accepted.",
      banking: "Belgian citizens can open accounts with residency",
      taxTreaty: true,
      taxTreatyDetails: "Belgium-Argentina tax treaty",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Belgian-Argentine Chamber of Commerce" }
      ]
    },
    residencyPath: {
      easiestRoute: "Mercosur Visa (2-year residency)",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Belgian passport (90 days visa-free)",
        "Apply for Mercosur residency",
        "Receive 2-year temporary residency"
      ],
      tips: [
        "Get police certificate before departure",
        "Belgian beer culture appreciated in BA craft scene"
      ]
    },
    faqs: [
      {
        question: "Do Belgians need a visa for Argentina?",
        answer: "No visa needed for 90 days. Mercosur visa available for longer stays."
      }
    ],
    relatedResources: [
      {
        title: "Mercosur Residency",
        url: "/visas/temporary",
        description: "EU citizen residency pathway"
      }
    ],
    image: "/images/nationalities/belgium.webp"
  }
];
