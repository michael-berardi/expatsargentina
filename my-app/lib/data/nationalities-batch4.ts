// ============================================================================
// BATCH 4: Critical Priority Nationalities (India, Russia, Israel, South Africa, Philippines)
// Large expat populations, growing markets, high search volume potential
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch4: Nationality[] = [
  {
    slug: "india",
    name: "India",
    demonym: "Indian",
    flag: "🇮🇳",
    title: "Indian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways, growing Indian community, and business opportunities in Argentina",
    description: "Argentina's Indian community is growing rapidly, driven by IT professionals, business owners, and students. While no special agreements exist, the Digital Nomad Visa and temporary residency pathways offer viable routes for Indians seeking to live in Argentina.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Indians need a tourist visa (e-Visa available). Apply online before travel.",
        reciprocityFee: true,
        feeAmount: "$200-300 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent option for Indian IT professionals and remote workers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required. Growing demand in IT sector.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "India is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "India does not have special immigration agreements with Argentina, but diplomatic relations are strong and growing",
      benefits: [
        "Strong business ties between India and Argentina",
        "Growing Indian IT presence in Buenos Aires",
        "Cultural exchanges through embassy programs"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Clearance Certificate (PCC) from Regional Passport Office with apostille from Ministry of External Affairs"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Visa application form (stamped and signed)",
        "Proof of accommodation in Argentina",
        "Return flight tickets",
        "Bank statements (last 6 months)",
        "Travel insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "Indian rupees can be exchanged at Buenos Aires currency exchanges. Wise and Remitly popular for transfers from India.",
      banking: "Indian citizens can open Argentine accounts with residency documentation. Some Indian banks have correspondent relationships.",
      taxTreaty: true,
      taxTreatyDetails: "India-Argentina have a Double Taxation Avoidance Agreement (DTAA). Consult a tax professional for cross-border situations.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "15,000-25,000 estimated (rapidly growing)",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "Córdoba (tech sector)",
        "Rosario"
      ],
      associations: [
        { name: "Indian Association of Argentina", url: "" },
        { name: "Cultural Center of India Buenos Aires" }
      ],
      facebookGroups: [
        "Indians in Buenos Aires",
        "Indian Community Argentina",
        "IT Professionals India-Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa (for remote workers) or Work Visa (sponsored)",
      timeline: "90 days for Digital Nomad. Work visa varies by employer.",
      steps: [
        "Apply for tourist visa (e-Visa) online",
        "Enter Argentina and establish accommodation",
        "For remote workers: Apply for Digital Nomad Visa with proof of $1,000+ monthly income",
        "For employees: Secure job offer and employer sponsorship",
        "Submit residency application at migraciones with apostilled documents",
        "Receive precaria (temporary authorization)",
        "Pick up residency card within 60-90 days"
      ],
      tips: [
        "Get Police Clearance Certificate apostilled before leaving India",
        "IT professionals have strong job prospects in Buenos Aires",
        "English is valued in business but Spanish essential for daily life",
        "Join Indian community groups for support and networking",
        "Indian spices available at Barrio Chino (Belgrano) and specialty stores",
        "Consider learning Spanish before arrival - it will help significantly"
      ]
    },
    faqs: [
      {
        question: "Do Indians need a visa for Argentina?",
        answer: "Yes, Indian citizens need a tourist visa before travel. Apply for an e-Visa online or at the Argentine embassy. The visa is valid for 90 days. For longer stays, apply for Digital Nomad Visa or work-sponsored residency."
      },
      {
        question: "Is there an Indian community in Argentina?",
        answer: "Yes, a growing community of 15,000-25,000 Indians, concentrated in Buenos Aires. Strong presence in IT, business, and academia. Active cultural associations and festivals (Diwali, Holi) celebrated."
      },
      {
        question: "Can I work in Argentina as an Indian citizen?",
        answer: "Yes, but you need employer sponsorship for a work visa. The IT sector actively hires Indian professionals. Alternatively, if you work remotely for an Indian/international company, the Digital Nomad Visa allows legal residence."
      },
      {
        question: "What is the cost of living compared to India?",
        answer: "Buenos Aires is significantly more expensive than Indian cities. Rent can be 5-10x higher than in Delhi or Mumbai. However, if earning in dollars or Euros, the exchange rate makes it manageable. Budget $1,500-2,500 USD monthly."
      },
      {
        question: "Can I get Indian food in Argentina?",
        answer: "Yes, but limited compared to Indian diaspora countries. Buenos Aires has a few Indian restaurants (Shiva, Sher E Punjab, Namaste). Indian spices available at Barrio Chino and Mercado Central. Many Indians cook at home."
      },
      {
        question: "Do I need to learn Spanish?",
        answer: "Absolutely. While English works in business and tech, daily life requires Spanish. Immigration offices, banks, and most services operate only in Spanish. Consider learning before arrival."
      },
      {
        question: "Can I bring my family?",
        answer: "Yes, once you obtain residency, you can apply for family reunification for spouse and children. They'll need their own visa applications and documentation."
      },
      {
        question: "Will I lose my Indian citizenship if I become Argentine?",
        answer: "India does not allow dual citizenship. If you naturalize as Argentine, you must surrender your Indian passport. However, you can apply for OCI (Overseas Citizen of India) status afterward."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Best option for remote workers from India"
      },
      {
        title: "Cost of Living Buenos Aires",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget comparison for Indians"
      },
      {
        title: "Work Opportunities",
        url: "/profession",
        description: "IT and professional career guides"
      }
    ],
    image: "/images/nationalities/india.webp"
  },

  {
    slug: "russia",
    name: "Russia",
    demonym: "Russian",
    flag: "🇷🇺",
    title: "Russian Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways, Russian community, and opportunities amidst current geopolitical situation",
    description: "Argentina has become a significant destination for Russian citizens seeking relocation options. With no visa requirements for 90 days and a streamlined residency process, Argentina offers an accessible pathway for Russians looking to establish residency abroad.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Russians can enter Argentina visa-free for 90 days. No reciprocity fee.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular option for Russian remote workers and IT professionals",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Russia is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but visa-free entry and growing diplomatic cooperation",
      benefits: [
        "90-day visa-free entry",
        "No reciprocity fees",
        "Streamlined residency process",
        "Growing Russian-speaking community"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Справка о несудимости (Certificate of No Criminal Record) from Ministry of Internal Affairs, apostilled"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support (bank statements or employment)",
        "Health insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "Russian rubles can be exchanged in Buenos Aires, though USD is preferred. Many Russians use crypto or peer-to-peer transfers due to banking restrictions.",
      banking: "Opening accounts can be challenging due to sanctions. Some Russians use fintech (Ualá, Mercado Pago) or maintain accounts in third countries.",
      taxTreaty: true,
      taxTreatyDetails: "Russia-Argentina have a tax treaty. Consult a tax professional familiar with cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "30,000-50,000 estimated (rapidly increasing)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano, Puerto Madero)",
        "Córdoba",
        "Mendoza"
      ],
      associations: [
        { name: "Russian Cultural Center Buenos Aires" },
        { name: "Russian Community Argentina" }
      ],
      facebookGroups: [
        "Русские в Аргентине (Russians in Argentina)",
        "Русскоязычные в Буэнос-Айресе",
        "ArgenRussia Community"
      ]
    },
    residencyPath: {
      easiestRoute: "Temporary Residency (after 90-day visa-free entry)",
      timeline: "60-90 days for residency card. Citizenship eligibility in 2 years.",
      steps: [
        "Enter Argentina visa-free (90 days)",
        "Within 90 days, apply for temporary residency at migraciones",
        "Submit apostilled criminal record and birth certificate",
        "Receive precaria (temporary authorization) - can stay legally",
        "Pick up residency card (DNI extranjero) within 60-90 days",
        "After 2 years, eligible for citizenship"
      ],
      tips: [
        "Get criminal record certificate apostilled in Russia before traveling",
        "Bring birth certificate with apostille",
        "Russian community is very supportive - join Telegram and Facebook groups",
        "Consider Spanish lessons before arrival",
        "Rentista visa popular for those with passive income",
        "Opening bank accounts can be challenging - research fintech options",
        "Argentine government generally welcoming to Russian immigrants"
      ]
    },
    faqs: [
      {
        question: "Do Russians need a visa for Argentina?",
        answer: "No! Russian citizens can enter Argentina visa-free for 90 days. No reciprocity fees. This makes Argentina one of the most accessible countries for Russians seeking relocation."
      },
      {
        question: "How big is the Russian community?",
        answer: "Growing rapidly - currently 30,000-50,000 Russians in Argentina, with significant recent arrivals. Strong communities in Palermo, Belgrano, and Puerto Madero. Active Russian-speaking social networks."
      },
      {
        question: "Can I work in Argentina?",
        answer: "Yes, with temporary residency you can work. Many Russians work remotely for international companies (using Digital Nomad Visa) or start businesses locally. Employer-sponsored work visas also available."
      },
      {
        question: "Is it difficult to open a bank account?",
        answer: "It can be challenging due to sanctions. Some banks refuse Russian clients. Solutions include: fintech apps (Ualá, Mercado Pago), maintaining accounts in third countries, or working with smaller Argentine banks."
      },
      {
        question: "Can I transfer money from Russia?",
        answer: "Traditional bank transfers are restricted. Russians use: cryptocurrency (USDT popular), peer-to-peer exchanges, carrying cash (declare amounts over $10,000), or transferring through third countries."
      },
      {
        question: "Will my Russian accent be understood?",
        answer: "Spanish and Russian are very different, but many Argentines are patient with language learners. Buenos Aires has Russian language schools and tutors. English works in some professional settings."
      },
      {
        question: "Can I get citizenship?",
        answer: "Yes. After 2 years of legal residency, you can apply for Argentine citizenship. Russia allows dual citizenship, so you can keep your Russian passport."
      },
      {
        question: "Are there Russian businesses and services?",
        answer: "Yes. Russian restaurants (Troika, Dacha), grocery stores with Russian products, Russian-speaking lawyers and accountants, and community services are available in Buenos Aires."
      }
    ],
    relatedResources: [
      {
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Residency process for non-Mercosur nationals"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers employed abroad"
      },
      {
        title: "Rentista Visa",
        url: "/visas/rentista",
        description: "For those with passive income"
      }
    ],
    image: "/images/nationalities/russia.webp"
  },

  {
    slug: "israel",
    name: "Israel",
    demonym: "Israeli",
    flag: "🇮🇱",
    title: "Israeli Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Strong historical ties, vibrant Jewish community, and immigration pathways",
    description: "Argentina has the largest Jewish community in Latin America and strong historical ties with Israel. Israeli citizens enjoy visa-free entry and find familiar cultural connections, kosher food availability, and an established support network.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Israelis enter visa-free. Passport stamped on arrival.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular for Israeli tech workers and freelancers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required. Tech sector opportunities.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Israel is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No formal agreements, but strong diplomatic and cultural ties",
      benefits: [
        "Visa-free entry for 90 days",
        "Large established Jewish community",
        "Kosher food widely available",
        "Hebrew spoken in many neighborhoods",
        "Israeli cultural events and synagogues"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "תעודת יושר (Certificate of Good Conduct) from Israel Police, apostilled"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support",
        "Health insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "Israeli shekels can be exchanged in Buenos Aires. Wise popular for transfers. Israeli banks have correspondent relationships.",
      banking: "Israelis can open Argentine accounts with residency. Some maintain dual banking.",
      taxTreaty: true,
      taxTreatyDetails: "Israel-Argentina have a tax treaty. Consult an accountant familiar with cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "200,000+ Jewish community, 15,000-25,000 Israeli citizens",
      mainLocations: [
        "Buenos Aires (Once, Abasto, Belgrano, Palermo)",
        "Córdoba",
        "Rosario"
      ],
      associations: [
        { name: "AMIA (Jewish Community Center)", url: "https://www.amia.org.ar" },
        { name: "Israeli Embassy Buenos Aires" },
        { name: "Hebrew Society of Argentina" }
      ],
      facebookGroups: [
        "Israelis in Buenos Aires",
        "ישראלים בבואנוס איירס",
        "Israeli Tech Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Temporary Residency (after 90-day entry) or Digital Nomad",
      timeline: "60-90 days for residency card. Citizenship in 2 years.",
      steps: [
        "Enter Argentina visa-free (90 days)",
        "Apply for residency within 90 days",
        "Submit apostilled criminal record and birth certificate",
        "Receive precaria (temporary authorization)",
        "Pick up residency card within 60-90 days",
        "Apply for citizenship after 2 years if desired"
      ],
      tips: [
        "Get certificate of good conduct apostilled before leaving Israel",
        "Jewish community very welcoming - connect through AMIA",
        "Kosher restaurants abundant in Once and Abasto",
        "Hebrew-speaking services available",
        "Tech sector actively recruits Israeli talent",
        "Synagogues in every major neighborhood",
        "Israeli products available at kosher markets"
      ]
    },
    faqs: [
      {
        question: "Do Israelis need a visa for Argentina?",
        answer: "No, Israeli citizens can enter visa-free for 90 days. No reciprocity fees. Your passport will be stamped on arrival."
      },
      {
        question: "Is there a Jewish community?",
        answer: "Yes, Argentina has the largest Jewish community in Latin America (200,000+). Once and Abasto neighborhoods have kosher restaurants, synagogues, Hebrew schools, and Jewish cultural centers. AMIA is the central community organization."
      },
      {
        question: "Is kosher food available?",
        answer: "Yes, widely available. Buenos Aires has over 50 kosher restaurants, especially in Once and Abasto. Kosher butchers, bakeries, and supermarkets throughout the city. Most major food brands have kosher certification options."
      },
      {
        question: "Can I work in Argentina?",
        answer: "Yes, with temporary residency you can work. Many Israelis work in tech, business, or start their own companies. Digital Nomad Visa popular for remote workers employed by Israeli companies."
      },
      {
        question: "Will I find Hebrew speakers?",
        answer: "Yes, Hebrew is spoken in Jewish community centers, some neighborhoods, and Israeli-owned businesses. Many Argentines in the Jewish community speak Hebrew. You'll find Hebrew language schools and tutors."
      },
      {
        question: "Are there synagogues?",
        answer: "Yes, over 50 synagogues in Buenos Aires alone, representing Orthodox, Conservative, and Reform traditions. Major synagogues include Gran Templo Paso, Congregación Israelita, and community centers."
      },
      {
        question: "Can I get citizenship?",
        answer: "Yes, after 2 years of legal residency. Israel allows dual citizenship, so you can maintain your Israeli passport while becoming Argentine."
      },
      {
        question: "Is Argentina safe for Jews?",
        answer: "Generally yes, though anti-Semitic incidents occur. The Jewish community has security measures in place. AMIA and DAIA provide community security. Most Israelis live comfortably in Buenos Aires."
      }
    ],
    relatedResources: [
      {
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency process for Israelis"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Cost of Living",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning"
      }
    ],
    image: "/images/nationalities/israel.webp"
  },

  {
    slug: "south-africa",
    name: "South Africa",
    demonym: "South African",
    flag: "🇿🇦",
    title: "South African Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways, growing South African community, and opportunities in Argentina",
    description: "Argentina has become an increasingly popular destination for South Africans seeking new opportunities and lifestyle changes. With visa-free entry and a streamlined residency process, South Africans find Argentina accessible and welcoming.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "South Africans enter visa-free for 90 days",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Popular option for South African remote workers",
        incomeRequirement: "R18,000-27,000/month (or $1,000-1,500 USD)"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "South Africa is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but diplomatic relations are positive and growing",
      benefits: [
        "90-day visa-free entry",
        "Streamlined residency process",
        "Growing South African community",
        "Similar time zone to South Africa (2-hour difference)"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Clearance Certificate from South African Police Service (SAPS), apostilled by DIRCO"
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of means of support",
        "Health insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "South African rand can be exchanged in Buenos Aires, though USD preferred. Wise popular for transfers.",
      banking: "South Africans can open Argentine accounts with residency documentation.",
      taxTreaty: true,
      taxTreatyDetails: "South Africa-Argentina have a tax treaty. Consult a tax professional for cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "8,000-12,000 estimated (growing)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano)",
        "Córdoba",
        "Mendoza"
      ],
      associations: [
        { name: "South African Community Argentina" },
        { name: "Saffas in Buenos Aires" }
      ],
      facebookGroups: [
        "South Africans in Buenos Aires",
        "Saffas in Argentina",
        "South African Expats Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Temporary Residency (after 90-day entry) or Digital Nomad",
      timeline: "60-90 days for residency card. Citizenship in 2 years.",
      steps: [
        "Enter Argentina visa-free (90 days)",
        "Apply for residency within 90 days at migraciones",
        "Submit apostilled police clearance and birth certificate",
        "Receive precaria (temporary authorization)",
        "Pick up residency card within 60-90 days",
        "After 2 years, eligible for citizenship"
      ],
      tips: [
        "Get Police Clearance Certificate apostilled by DIRCO before leaving SA",
        "South African community growing - join Facebook groups",
        "English widely understood in business, but Spanish essential",
        "Consider Spanish lessons before arrival",
        "Rentista visa good for those with passive income",
        "South African wines appreciated in Argentina - possible business angle",
        "Time zone only 2 hours behind SA - good for remote work"
      ]
    },
    faqs: [
      {
        question: "Do South Africans need a visa for Argentina?",
        answer: "No! South African citizens can enter Argentina visa-free for 90 days. No reciprocity fees. Just present your valid passport at immigration."
      },
      {
        question: "How big is the South African community?",
        answer: "Growing steadily - currently 8,000-12,000 South Africans in Argentina, concentrated in Buenos Aires. Active Facebook communities provide support and networking."
      },
      {
        question: "Can I work remotely for a South African company?",
        answer: "Yes, the Digital Nomad Visa allows exactly this. You can live in Argentina legally while working remotely for your South African employer. Requires proof of $1,000+ monthly income."
      },
      {
        question: "Is English spoken?",
        answer: "English is understood in business and tourist areas, but daily life requires Spanish. Most South Africans find learning Spanish manageable with immersion."
      },
      {
        question: "What is the cost of living compared to South Africa?",
        answer: "Buenos Aires is generally more expensive than Johannesburg or Cape Town for rent and dining, but comparable for groceries and services. If earning in dollars, the exchange rate makes Argentina very affordable."
      },
      {
        question: "Can I bring my family?",
        answer: "Yes, once you have residency, you can apply for family reunification. Spouse and children can join you with their own residency applications."
      },
      {
        question: "Will I lose my South African citizenship?",
        answer: "No, South Africa allows dual citizenship. You can become Argentine while keeping your South African passport. Just ensure you have permission before acquiring foreign citizenship."
      },
      {
        question: "Is the wine industry a good opportunity?",
        answer: "Potentially! South African wine expertise is valued in Mendoza (Argentina's wine capital). Some South Africans have started wine import/export businesses or work in the tourism sector."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Temporary Residency",
        url: "/visas/temporary",
        description: "Residency process"
      },
      {
        title: "Cost of Living",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget comparison"
      }
    ],
    image: "/images/nationalities/south-africa.webp"
  },

  {
    slug: "philippines",
    name: "Philippines",
    demonym: "Filipino",
    flag: "🇵🇭",
    title: "Filipino Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Visa pathways, growing Filipino community, and opportunities in Argentina",
    description: "The Filipino community in Argentina is small but growing, particularly in healthcare, services, and domestic work. Filipinos are valued for their English proficiency, strong work ethic, and cultural adaptability.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Filipinos need a tourist visa before travel. Apply at Argentine embassy.",
        reciprocityFee: true,
        feeAmount: "$150-200 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Good option for Filipino remote workers and freelancers",
        incomeRequirement: "$1,000-1,500 USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required. Opportunities in healthcare and services.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Philippines is not a Mercosur member"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special agreements, but diplomatic relations are positive",
      benefits: [
        "English proficiency valued in Argentina",
        "Growing demand for healthcare workers",
        "Filipino work ethic highly regarded",
        "Cultural adaptability"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "NBI Clearance (National Bureau of Investigation) with apostille from DFA"
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
        "Travel insurance"
      ]
    },
    practicalInfo: {
      currencyExchange: "Philippine pesos can be exchanged in Buenos Aires. Wise and Remitly popular for sending money home.",
      banking: "Filipinos can open Argentine accounts with residency. Many send remittances to Philippines regularly.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty exists. Consult tax professional for cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000 estimated (growing)",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "Córdoba"
      ],
      associations: [
        { name: "Filipino Community Argentina" },
        { name: "Philippine Embassy Buenos Aires" }
      ],
      facebookGroups: [
        "Filipinos in Buenos Aires",
        "Filipino Community Argentina",
        "OFWs in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Work-sponsored visa or Digital Nomad (for remote workers)",
      timeline: "90 days for Digital Nomad. Work visa varies.",
      steps: [
        "Apply for tourist visa at Argentine embassy in Manila",
        "Enter Argentina",
        "For remote workers: Apply for Digital Nomad Visa",
        "For employment: Secure job offer and employer sponsorship",
        "Submit residency application with apostilled documents",
        "Receive precaria",
        "Pick up residency card within 60-90 days"
      ],
      tips: [
        "Get NBI Clearance apostilled by DFA before travel",
        "Healthcare sector actively hires Filipino nurses and caregivers",
        "English is a major advantage - many Argentine families seek English-speaking caregivers",
        "Join Filipino community groups for support",
        "Filipino food products available at specialty stores in Belgrano",
        "Consider caregiving or nursing credentials recognition process",
        "Spanish essential for daily life - start learning early"
      ]
    },
    faqs: [
      {
        question: "Do Filipinos need a visa for Argentina?",
        answer: "Yes, Filipino citizens need a tourist visa before travel. Apply at the Argentine embassy in Manila. The visa allows 90 days stay. For longer stays, apply for residency after arrival."
      },
      {
        question: "Is there a Filipino community?",
        answer: "Yes, small but growing - 5,000-8,000 Filipinos in Argentina, mainly in Buenos Aires. Concentrated in healthcare, domestic work, and services. Active Facebook groups provide community support."
      },
      {
        question: "What jobs do Filipinos do?",
        answer: "Many work as nurses, caregivers, domestic helpers, and in services. English-speaking Filipinos are in high demand for childcare and eldercare. Some work in hospitality and offices."
      },
      {
        question: "Is English enough to get by?",
        answer: "English helps for some jobs (caregiving, childcare), but Spanish is essential for daily life and residency processes. Most Filipinos learn Spanish within 6-12 months of arrival."
      },
      {
        question: "Can I send money home?",
        answer: "Yes, many Filipinos send remittances. Wise, Remitly, and Western Union popular. Some maintain Philippine bank accounts and transfer regularly."
      },
      {
        question: "Can I bring my family?",
        answer: "Yes, once you obtain residency, you can apply for family reunification for spouse and children. Process takes several months."
      },
      {
        question: "Will I lose my Philippine citizenship?",
        answer: "No, Philippines allows dual citizenship. You can become Argentine while keeping your Philippine passport. Many Filipinos maintain both."
      },
      {
        question: "Is Filipino food available?",
        answer: "Limited but available. Some Asian supermarkets in Belgrano carry Filipino ingredients. Filipino restaurants exist but are few. Most Filipinos cook at home."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored options"
      },
      {
        title: "Cost of Living",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning"
      }
    ],
    image: "/images/nationalities/philippines.webp"
  }
];
