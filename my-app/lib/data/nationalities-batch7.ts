// ============================================================================
// BATCH 7: Southeast Asia (Vietnam, Thailand, Indonesia, Malaysia, Singapore)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch7: Nationality[] = [
  {
    slug: "vietnam",
    name: "Vietnam",
    demonym: "Vietnamese",
    flag: "🇻🇳",
    title: "Vietnamese Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways and growing Vietnamese community in Argentina",
    description: "Vietnam and Argentina established diplomatic relations in 1973. Vietnamese citizens can pursue Argentine residency through student visas, employment sponsorship, business investment, and the digital nomad pathway.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Vietnamese need tourist visa before travel",
        reciprocityFee: true,
        feeAmount: "$200-300 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Vietnamese remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Vietnam is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but positive diplomatic relations"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Clearance Certificate from Vietnamese Ministry of Public Security"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Vietnamese dong limited exchange. USD preferred.",
      banking: "Can open accounts with residency.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Vietnamese Community Argentina" }
      ],
      facebookGroups: ["Vietnamese in Buenos Aires"]
    },
    residencyPath: {
      easiestRoute: "Student Visa or Work Sponsorship",
      timeline: "60-90 days",
      steps: [
        "Apply for tourist visa",
        "Enter Argentina",
        "Enroll in school or find employment",
        "Apply for residency",
        "Submit documents",
        "Receive precaria",
        "Collect card"
      ],
      tips: [
        "Get documents legalized in Vietnam",
        "Vietnamese food products available in Asian markets",
        "Join Vietnamese community for support"
      ]
    },
    faqs: [
      {
        question: "Do Vietnamese need a visa?",
        answer: "Yes, tourist visa required before travel."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa",
        url: "/visas/student",
        description: "For Vietnamese students"
      }
    ],
    image: "/images/nationalities/vietnam.webp"
  },

  {
    slug: "thailand",
    name: "Thailand",
    demonym: "Thai",
    flag: "🇹🇭",
    title: "Thai Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways and opportunities for Thai citizens",
    description: "Thailand and Argentina have enjoyed diplomatic ties since 1952. Thai citizens benefit from visa-free entry and can pursue longer-term residency through various visa categories.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Thai citizens can enter visa-free for 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Thai remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Thailand is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but friendly relations"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Criminal Record Certificate from Royal Thai Police"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Thai baht can be exchanged. USD preferred.",
      banking: "Can open accounts with residency.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000",
      mainLocations: ["Buenos Aires"],
      associations: [],
      facebookGroups: ["Thais in Buenos Aires"]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad or Temporary Residency",
      timeline: "60-90 days",
      steps: [
        "Enter visa-free (90 days)",
        "Apply for residency",
        "Submit documents",
        "Receive precaria",
        "Collect card"
      ],
      tips: [
        "Get criminal record before travel",
        "Thai cuisine appreciated in Argentina"
      ]
    },
    faqs: [
      {
        question: "Do Thais need a visa?",
        answer: "No, visa-free entry for 90 days."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      }
    ],
    image: "/images/nationalities/thailand.webp"
  },

  {
    slug: "indonesia",
    name: "Indonesia",
    demonym: "Indonesian",
    flag: "🇮🇩",
    title: "Indonesian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways for Indonesian citizens moving to Argentina",
    description: "Indonesia and Argentina established diplomatic relations in 1954. Indonesian citizens can access Argentine residency through student visas, employment permits, and the digital nomad program.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Indonesians need tourist visa before travel",
        reciprocityFee: true,
        feeAmount: "$200-300 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Indonesian remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Indonesia is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "SKCK (Surat Keterangan Catatan Kepolisian) from Indonesian National Police"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Indonesian rupiah limited exchange. USD preferred.",
      banking: "Can open accounts with residency.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires"],
      associations: [],
      facebookGroups: ["Indonesians in Argentina"]
    },
    residencyPath: {
      easiestRoute: "Student Visa or Digital Nomad",
      timeline: "60-90 days",
      steps: [
        "Apply for tourist visa",
        "Enter Argentina",
        "Choose residency pathway",
        "Submit documents",
        "Receive precaria",
        "Collect card"
      ],
      tips: [
        "Get SKCK before travel",
        "English proficiency helpful"
      ]
    },
    faqs: [
      {
        question: "Do Indonesians need a visa?",
        answer: "Yes, tourist visa required before travel."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa",
        url: "/visas/student",
        description: "For Indonesian students"
      }
    ],
    image: "/images/nationalities/indonesia.webp"
  },

  {
    slug: "malaysia",
    name: "Malaysia",
    demonym: "Malaysian",
    flag: "🇲🇾",
    title: "Malaysian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa-free entry and opportunities for Malaysians in Argentina",
    description: "Malaysia and Argentina have maintained diplomatic ties since 1967. Malaysian citizens enjoy visa-free entry and straightforward pathways for business investment and long-term residency.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Malaysians can enter visa-free for 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Malaysian remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Malaysia is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of Good Conduct from Royal Malaysia Police"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Malaysian ringgit can be exchanged. USD preferred.",
      banking: "Can open accounts with residency.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires"],
      associations: [],
      facebookGroups: ["Malaysians in Argentina"]
    },
    residencyPath: {
      easiestRoute: "Temporary Residency (after 90-day entry)",
      timeline: "60-90 days",
      steps: [
        "Enter visa-free (90 days)",
        "Apply for residency",
        "Submit documents",
        "Receive precaria",
        "Collect card"
      ],
      tips: [
        "Get criminal record before travel",
        "English widely spoken in business"
      ]
    },
    faqs: [
      {
        question: "Do Malaysians need a visa?",
        answer: "No, visa-free entry for 90 days."
      }
    ],
    relatedResources: [
      {
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency process"
      }
    ],
    image: "/images/nationalities/malaysia.webp"
  },

  {
    slug: "singapore",
    name: "Singapore",
    demonym: "Singaporean",
    flag: "🇸🇬",
    title: "Singaporean Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa-free entry and investment opportunities for Singaporeans",
    description: "Singapore and Argentina maintain strong trade relations. Singaporean citizens enjoy visa-free entry and find opportunities in investment and business sectors.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Singaporeans can enter visa-free for 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular for Singaporean remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Singapore is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of Clearance from Singapore Police Force"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Singapore dollar easily exchanged. USD widely accepted.",
      banking: "Can open accounts with residency. Strong banking sector.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "1,000-2,000",
      mainLocations: ["Buenos Aires"],
      associations: [],
      facebookGroups: []
    },
    residencyPath: {
      easiestRoute: "Investment Visa or Temporary Residency",
      timeline: "60-90 days",
      steps: [
        "Enter visa-free (90 days)",
        "Choose residency pathway",
        "Submit documents",
        "Receive precaria",
        "Collect card"
      ],
      tips: [
        "Investment visa popular for business investors",
        "Strong opportunities in agribusiness"
      ]
    },
    faqs: [
      {
        question: "Do Singaporeans need a visa?",
        answer: "No, visa-free entry for 90 days."
      }
    ],
    relatedResources: [
      {
        title: "Investment Visa",
        url: "/visas/investment",
        description: "For investors"
      }
    ],
    image: "/images/nationalities/singapore.webp"
  }
];
