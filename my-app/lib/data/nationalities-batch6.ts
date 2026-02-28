// ============================================================================
// BATCH 6: Africa & Middle East (Nigeria, Kenya, Egypt, Turkey, UAE)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch6: Nationality[] = [
  {
    slug: "nigeria",
    name: "Nigeria",
    demonym: "Nigerian",
    flag: "🇳🇬",
    title: "Nigerian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways, emerging community, and opportunities in Argentina",
    description: "Argentina's Nigerian community is small but growing, particularly in business and education sectors. While no special agreements exist, the Digital Nomad Visa and student pathways offer viable routes for Nigerians seeking to live in Argentina.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Nigerians need a tourist visa before travel. Apply at Argentine embassy.",
        reciprocityFee: true,
        feeAmount: "$200-300 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Option for Nigerian remote workers and freelancers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Nigeria is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special immigration agreements, but diplomatic relations are positive"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Character Certificate from Nigerian Police Force, legalized"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Visa application form",
        "Proof of accommodation",
        "Return tickets",
        "Bank statements",
        "Yellow fever vaccination certificate"
      ]
    },
    practicalInfo: {
      currencyExchange: "Nigerian naira limited exchange. USD preferred for transfers.",
      banking: "Nigerians can open Argentine accounts with residency documentation.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty. Consult tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000 (growing)",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Nigerian Community Argentina" }
      ],
      facebookGroups: [
        "Nigerians in Buenos Aires",
        "Nigerian Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Student Visa or Digital Nomad (for remote workers)",
      timeline: "60-90 days for residency. Citizenship in 2 years.",
      steps: [
        "Apply for tourist visa at Argentine embassy in Abuja",
        "Enter Argentina",
        "For students: Enroll in accredited institution",
        "For remote workers: Apply for Digital Nomad Visa",
        "Submit residency application with documents",
        "Receive precaria",
        "Pick up residency card"
      ],
      tips: [
        "Get Police Character Certificate before travel",
        "English proficiency is an advantage",
        "Nigerian professionals in IT and business do well",
        "Join African community networks for support",
        "Yellow fever vaccination required for entry"
      ]
    },
    faqs: [
      {
        question: "Do Nigerians need a visa for Argentina?",
        answer: "Yes, Nigerian citizens need a tourist visa before travel. Apply at the Argentine embassy in Abuja."
      },
      {
        question: "Is there a Nigerian community?",
        answer: "Yes, a small but growing community in Buenos Aires, primarily in business and education sectors."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Student Visa Guide",
        url: "/visas/student",
        description: "For Nigerian students"
      }
    ],
    image: "/images/nationalities/nigeria.webp"
  },

  {
    slug: "kenya",
    name: "Kenya",
    demonym: "Kenyan",
    flag: "🇰🇪",
    title: "Kenyan Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways and opportunities for Kenyans in Argentina",
    description: "Kenya and Argentina established diplomatic ties in the 1970s. Kenyan citizens can pursue multiple immigration pathways to Argentina, including student visas, employment sponsorship, and the digital nomad visa.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Kenyans need a tourist visa before travel",
        reciprocityFee: true,
        feeAmount: "$150-200 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Kenyan remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Kenya is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of Good Conduct from Kenya Police"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Kenyan shilling can be exchanged. USD preferred.",
      banking: "Can open accounts with residency.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "1,000-2,000",
      mainLocations: ["Buenos Aires"],
      associations: [],
      facebookGroups: ["Kenyans in Argentina"]
    },
    residencyPath: {
      easiestRoute: "Student Visa or Digital Nomad",
      timeline: "60-90 days",
      steps: [
        "Apply for tourist visa",
        "Enter Argentina",
        "Apply for residency pathway",
        "Submit documents",
        "Receive precaria",
        "Collect residency card"
      ],
      tips: [
        "Get Police Certificate before travel",
        "English widely spoken in business",
        "Connect with East African community"
      ]
    },
    faqs: [
      {
        question: "Do Kenyans need a visa?",
        answer: "Yes, tourist visa required before travel."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa",
        url: "/visas/student",
        description: "For Kenyan students"
      }
    ],
    image: "/images/nationalities/kenya.webp"
  },

  {
    slug: "egypt",
    name: "Egypt",
    demonym: "Egyptian",
    flag: "🇪🇬",
    title: "Egyptian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways and growing Egyptian community in Argentina",
    description: "Egypt and Argentina have maintained diplomatic relations since 1947. Egyptian citizens can access various Argentine immigration pathways including student visas, work permits, and the digital nomad program.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Egyptians need tourist visa before travel",
        reciprocityFee: true,
        feeAmount: "$150-200 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Egyptian remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Egypt is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but good diplomatic relations"
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Criminal status certificate from Egyptian Ministry of Interior"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Egyptian pound can be exchanged. USD preferred.",
      banking: "Can open accounts with residency.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000",
      mainLocations: ["Buenos Aires"],
      associations: [
        { name: "Egyptian Community Argentina" }
      ],
      facebookGroups: ["Egyptians in Buenos Aires"]
    },
    residencyPath: {
      easiestRoute: "Student or Digital Nomad Visa",
      timeline: "60-90 days",
      steps: [
        "Apply for tourist visa",
        "Enter Argentina",
        "Choose residency pathway",
        "Submit documents with apostille",
        "Receive precaria",
        "Collect residency card"
      ],
      tips: [
        "Get criminal record apostilled in Egypt",
        "Arabic speakers can find translation work",
        "Growing Egyptian business community"
      ]
    },
    faqs: [
      {
        question: "Do Egyptians need a visa?",
        answer: "Yes, tourist visa required before travel to Argentina."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      }
    ],
    image: "/images/nationalities/egypt.webp"
  },

  {
    slug: "turkey",
    name: "Turkey",
    demonym: "Turkish",
    flag: "🇹🇷",
    title: "Turkish Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Growing Turkish community and immigration pathways",
    description: "Turkey and Argentina maintain strong diplomatic and trade relations. Turkish citizens benefit from streamlined processes and a growing business community in Argentina.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Turkish citizens can enter visa-free for 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular option for Turkish remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Turkey is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but strong bilateral relations",
      benefits: [
        "Visa-free entry for 90 days",
        "Growing business ties",
        "Turkish business community support"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Adli Sicil Kaydı from Turkish Ministry of Justice"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "Turkish lira can be exchanged. USD and EUR widely accepted.",
      banking: "Turkish banks (Isbank, Garanti) have correspondent relationships. Can open accounts with residency.",
      taxTreaty: true,
      taxTreatyDetails: "Turkey-Argentina have tax agreements. Consult accountant.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "8,000-12,000",
      mainLocations: [
        "Buenos Aires (Flores, Balvanera)",
        "Córdoba"
      ],
      associations: [
        { name: "Turkish-Argentine Chamber of Commerce" },
        { name: "Turkish Community Buenos Aires" }
      ],
      facebookGroups: [
        "Turks in Buenos Aires",
        "Turkish Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Temporary Residency (after 90-day entry) or Digital Nomad",
      timeline: "60-90 days for residency. Citizenship in 2 years.",
      steps: [
        "Enter Argentina visa-free (90 days)",
        "Apply for residency within 90 days",
        "Submit apostilled criminal record and birth certificate",
        "Receive precaria",
        "Pick up residency card within 60-90 days",
        "Apply for citizenship after 2 years if desired"
      ],
      tips: [
        "Get criminal record apostilled in Turkey before traveling",
        "Turkish business community is very active in import/export",
        "Turkish restaurants and shops in Flores neighborhood",
        "Strong Turkish business networks available",
        "Consider learning Spanish before arrival"
      ]
    },
    faqs: [
      {
        question: "Do Turkish citizens need a visa for Argentina?",
        answer: "No! Turkish citizens can enter Argentina visa-free for 90 days. No reciprocity fees."
      },
      {
        question: "Is there a Turkish community?",
        answer: "Yes, a well-established community of 8,000-12,000 Turks in Argentina, with strong business presence in Buenos Aires and Córdoba."
      },
      {
        question: "Can Turkish businesses operate in Argentina?",
        answer: "Yes, many Turkish companies operate in Argentina. The Turkish-Argentine Chamber of Commerce supports business relations."
      }
    ],
    relatedResources: [
      {
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency process for Turkish citizens"
      },
      {
        title: "Business Opportunities",
        url: "/business",
        description: "Starting a business in Argentina"
      }
    ],
    image: "/images/nationalities/turkey.webp"
  },

  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    demonym: "Emirati",
    flag: "🇦🇪",
    title: "UAE Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa-free entry and investment opportunities for Emiratis",
    description: "The UAE and Argentina maintain strong diplomatic and investment relations. Emirati citizens enjoy visa-free entry and find Argentina an attractive destination for investment and lifestyle.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Emirati citizens can enter visa-free for 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Emirati remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "UAE is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but strong investment ties",
      benefits: [
        "Visa-free entry for 90 days",
        "Strong investment climate",
        "Growing trade relations"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Good Conduct Certificate from Dubai Police or Abu Dhabi Police"
      },
      birthCertificate: {
        required: true,
        apostille: true
      }
    },
    practicalInfo: {
      currencyExchange: "UAE dirham easily exchanged. USD widely accepted.",
      banking: "Emiratis can open accounts with residency. Strong correspondent banking.",
      taxTreaty: true,
      taxTreatyDetails: "UAE-Argentina discussions on tax cooperation. Consult advisor.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000",
      mainLocations: ["Buenos Aires", "Mendoza"],
      associations: [
        { name: "UAE-Argentina Business Council" }
      ],
      facebookGroups: []
    },
    residencyPath: {
      easiestRoute: "Investment Visa or Temporary Residency",
      timeline: "60-90 days",
      steps: [
        "Enter Argentina visa-free (90 days)",
        "Choose residency pathway",
        "Submit documents",
        "Receive precaria",
        "Collect residency card"
      ],
      tips: [
        "Investment visa popular for Emirati investors",
        "Strong opportunities in real estate and agriculture",
        "Mendoza popular for wine region investments"
      ]
    },
    faqs: [
      {
        question: "Do Emiratis need a visa?",
        answer: "No, visa-free entry for 90 days."
      }
    ],
    relatedResources: [
      {
        title: "Investment Visa",
        url: "/visas/investment",
        description: "For Emirati investors"
      }
    ],
    image: "/images/nationalities/uae.webp"
  }
];
