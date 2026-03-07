// ============================================================================
// BATCH 2: Additional Nationalities 4-6 (Portugal, Switzerland, Austria)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch2: Nationality[] = [
  {
    slug: "austria",
    name: "Austria",
    demonym: "Austrian",
    flag: "🇦🇹",
    title: "Austrian Citizens in Argentina: Immigration Guide",
    subtitle: "EU benefits, Austrian community, and immigration pathways",
    description: "Austria and Argentina share cultural connections, particularly in music and arts. Austrian citizens enjoy visa-free entry and multiple residency pathways.",
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
        eligible: false,
        notes: "Austria is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special bilateral immigration agreement. Standard third-country residency process applies."
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
      easiestRoute: "Digital Nomad Visa or Temporary Residency",
      timeline: "2 years to citizenship",
      steps: [
        "Enter with Austrian passport (90 days visa-free)",
        "Apply for temporary residency (work, study, or rentista visa)",
        "Receive temporary residency"
      ],
      tips: [
        "Get criminal record before departure",
        "Austrian classical music connections in BA"
      ]
    },
    faqs: [
      {
        question: "Do Austrians need a visa?",
        answer: "No visa for 90 days. Apply for temporary residency for longer stays."
      }
    ],
    relatedResources: [
      {
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency pathway for Austrian citizens"
      }
    ],
    image: "/images/nationalities/austria.webp"
  }
];
