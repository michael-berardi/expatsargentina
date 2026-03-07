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
    subtitle: "Visa pathways, Working Holiday agreement, and French community connections",
    description: "Argentina has strong historical ties with France, including one of the largest French communities in Latin America. French citizens enjoy visa-free entry and multiple residency pathways including a bilateral Working Holiday agreement.",
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
        eligible: false,
        notes: "France is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: true,
      type: "Working Holiday Agreement",
      description: "France and Argentina have a bilateral Working Holiday Visa agreement for citizens aged 18-35.",
      benefits: [
        "12-month Working Holiday Visa for ages 18-35",
        "No visa required for tourist entry",
        "Path to temporary residency through work or study visas",
        "Path to citizenship after 2 years of legal residency"
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
      easiestRoute: "Working Holiday Visa (ages 18-35) or Digital Nomad Visa",
      timeline: "2 years to citizenship eligibility",
      steps: [
        "Enter Argentina with valid French passport (90 days visa-free)",
        "Apply for temporary residency (work, study, or rentista visa) within 90 days",
        "Receive temporary residency",
        "Apply for citizenship after 2 years of legal residency if desired"
      ],
      tips: [
        "Working Holiday Visa is available for ages 18-35",
        "Get Bulletin n°3 before leaving France",
        "Alliance Française offers excellent cultural integration",
        "French wine expertise valued in Mendoza"
      ]
    },
    faqs: [
      {
        question: "Do French citizens need a visa for Argentina?",
        answer: "No, French citizens can enter visa-free for 90 days. For longer stays, apply for the Working Holiday Visa (ages 18-35), Digital Nomad Visa, or a temporary residency visa."
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
        title: "Temporary Residency Information",
        url: "/visas/temporary",
        description: "Details on residency pathways for French citizens"
      },
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for French expats"
      }
    ],
    image: "/images/nationalities/france.webp"
  },
];
