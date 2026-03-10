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
    description: "Indonesia and Argentina established diplomatic relations in 1954. Indonesians can still relocate successfully, but most long-stay cases rely on student residence, employer sponsorship, family ties, or another standard residency category rather than a shortcut program.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Indonesian passport holders generally need a tourist visa before travel through the Argentine consular network.",
        reciprocityFee: false
      },
      digitalNomad: {
        eligible: false,
        notes: "Argentina's digital nomad authorization is aimed at nationals who already enter visa-free as tourists, so Indonesians usually need another residence pathway.",
        incomeRequirement: "Not available on an Indonesian passport that requires prior tourist authorization"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship is the clearest work-based route. University, hospitality, trade, and company-transfer cases are more realistic than purely freelance relocation.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Indonesia is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "There is no Mercosur or bilateral immigration shortcut for Indonesian passport holders. Standard tourist-visa and residence rules apply, so careful document preparation is essential.",
      benefits: [
        "Standard student, work, and family-based residence categories are open",
        "Embassy and student-community support is available in Buenos Aires",
        "Strong English skills can help during the first months while Spanish improves"
      ]
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
      mainLocations: ["Buenos Aires", "La Plata", "Córdoba"],
      associations: [
        { name: "Embassy of Indonesia in Buenos Aires", url: "https://kemlu.go.id/buenosaires" },
        { name: "Indonesian Students Association in Argentina (PPI Argentina)" }
      ],
      facebookGroups: ["Indonesians in Argentina", "PPI Argentina"]
    },
    residencyPath: {
      easiestRoute: "Student residence, employer-sponsored residence, or family reunification",
      timeline: "Plan for several months between consular visa processing, apostilles, translations, and the Argentine residence review.",
      steps: [
        "Apply for the correct tourist or entry visa through the Argentine consular channel before departure",
        "Collect your passport, birth certificate, and SKCK with the required apostilles or legalizations",
        "Secure the residence basis that fits your case, such as university enrollment, a sponsoring employer, or a family tie",
        "Travel to Argentina and arrange certified Spanish translations for foreign-language documents",
        "Submit the residence file to Migraciones once your qualifying category is complete",
        "Receive your precaria while the file is being reviewed",
        "Finish DNI issuance after the residence approval is granted"
      ],
      tips: [
        "Get SKCK before travel",
        "Confirm legalization and translation rules with the Argentine consular post because requirements can change by document type",
        "If you are moving for study, ask your university whether it already helps foreign students with Migraciones paperwork",
        "Join Indonesian community groups early so you have local help for housing and first-week logistics",
        "Budget extra time for Spanish translations and local appointments after you land"
      ]
    },
    faqs: [
      {
        question: "Do Indonesians need a visa?",
        answer: "Yes. Indonesian passport holders generally need a tourist visa before departure, so you should not assume you can board first and fix the paperwork later."
      },
      {
        question: "Can Indonesians use Argentina's digital nomad visa?",
        answer: "Usually no. Argentina's current digital nomad authorization is designed for travelers who already qualify for visa-free tourist entry, so Indonesians normally need another long-stay category."
      },
      {
        question: "What is the most practical path for long-term stay?",
        answer: "Student residence, employer sponsorship, and family-based residence are typically the most realistic pathways. Which one is best depends on whether you already have an employer, university admission, or family tie in Argentina."
      },
      {
        question: "Is there an Indonesian community in Argentina?",
        answer: "Yes, though it is small. The largest concentration is in Greater Buenos Aires, with students and professionals also appearing around La Plata and Córdoba. Embassy and student-community channels are useful first points of contact."
      },
      {
        question: "Do I need Spanish before moving?",
        answer: "You do not need perfect Spanish to start, but it matters quickly. Residency appointments, rentals, banking, and day-to-day problem-solving all become easier once you can handle basic administrative Spanish."
      },
      {
        question: "Can Indonesians keep dual citizenship after naturalizing?",
        answer: "Indonesia does not generally permit dual citizenship for adults, so naturalization questions require careful legal advice before you make any irreversible moves."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa",
        url: "/visas/student",
        description: "For Indonesian students"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored options"
      },
      {
        title: "Cost of Living",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning before the move"
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
