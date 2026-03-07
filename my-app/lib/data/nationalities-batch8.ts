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
    subtitle: "Historical ties, Greek community in Argentina, and visa pathways",
    description: "Greece and Argentina share historical ties through Greek immigration waves. Greek citizens enjoy visa-free entry and find a welcoming community with cultural connections.",
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
        notes: "Employer sponsorship required for local employment",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Greece is not a Mercosur member or associate state"
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
      easiestRoute: "Digital Nomad Visa or Temporary Residency",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with Greek passport (90 days visa-free)",
        "Apply for temporary residency (work, study, or rentista visa) within 90 days",
        "Receive temporary residency",
        "Apply for citizenship after 2 years of legal residency if desired"
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
        answer: "No visa required for 90 days. Apply for temporary residency for longer stays."
      },
      {
        question: "Is there a Greek community in Argentina?",
        answer: "Yes, a well-established community with strong historical presence, especially in Buenos Aires (Liniers) and Mar del Plata. Greek Orthodox churches and cultural centers available."
      }
    ],
    relatedResources: [
      {
        title: "Temporary Residency Information",
        url: "/visas/temporary",
        description: "Residency pathway for Greek citizens"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for Greeks"
      }
    ],
    image: "/images/nationalities/greece.webp"
  },
];
