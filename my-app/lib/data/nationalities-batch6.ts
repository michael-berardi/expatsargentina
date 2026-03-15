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
    description: "Argentina's Nigerian community is small but growing, particularly in business, education, and tech sectors. While Nigerians need a tourist visa before travel, the student visa, employer-sponsored work visa, and emerging digital nomad pathways offer viable routes. Buenos Aires has a growing African community with Nigerian professionals finding opportunities in IT, commerce, and academia.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Nigerian citizens need a tourist visa before travel. Apply at the Argentine embassy in Abuja or consulate in Lagos. Processing takes 10-20 business days. An invitation letter from an Argentine contact can strengthen the application.",
        reciprocityFee: true,
        feeAmount: "$200-300 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available in principle for Nigerian remote workers and freelancers, but because the digital nomad authorization targets visa-free nationalities, Nigerians may need to first obtain tourist entry and then apply for residency through another category. Confirm current eligibility with the consulate before planning.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones is the clearest long-stay pathway. IT, engineering, and business roles are the most common openings for Nigerian professionals.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Nigeria is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement between Nigeria and Argentina. Standard consular visa and residency rules apply. However, diplomatic relations are positive and growing, with increasing trade cooperation particularly in agriculture and energy sectors.",
      benefits: [
        "Growing business ties between Nigeria and Argentina in agriculture and energy",
        "English proficiency highly valued in Argentine business and education",
        "Nigerian professionals in IT and commerce finding opportunities",
        "Cultural exchange programs through embassies",
        "Growing African community providing peer support in Buenos Aires"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Police Character Certificate from Nigerian Police Force (NPF), authenticated by the Ministry of Foreign Affairs and apostilled. Allow 2-4 weeks for processing in Nigeria."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Completed visa application form (stamped and signed)",
        "Proof of accommodation in Argentina (hotel reservation or host letter)",
        "Return or onward flight tickets",
        "Bank statements (last 6 months showing sufficient funds)",
        "Yellow fever vaccination certificate (International Certificate of Vaccination)",
        "Travel/health insurance valid in Argentina",
        "Two recent passport-sized photographs"
      ]
    },
    practicalInfo: {
      currencyExchange: "Nigerian naira has limited direct exchange in Buenos Aires — convert to USD before traveling. Wise, Remitly, and Western Union are popular for international transfers. The unofficial 'blue dollar' rate offers better value than the official bank rate, though the gap has narrowed significantly since mid-2025 (within 5-10% as of early 2026).",
      banking: "Nigerian citizens can open Argentine bank accounts with temporary or permanent residency. Start with fintech apps (Ualá, Mercado Pago) which require only a passport and Argentine phone number. Traditional banks (Santander, BBVA, Galicia) require a DNI. Many Nigerians maintain dual banking between Argentina and Nigeria for remittances.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty exists between Nigeria and Argentina. Income earned in Argentina is subject to Argentine taxes. Foreign-source income may be taxable after 12 months of tax residency (183+ days). Consult a tax professional familiar with cross-border situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000 (growing, particularly since 2020)",
      mainLocations: [
        "Buenos Aires (Constitución, Once, Flores, Belgrano)",
        "La Plata (university students)",
        "Córdoba (tech sector)"
      ],
      associations: [
        { name: "Nigerian Community Argentina" },
        { name: "African Diaspora Organization Buenos Aires" },
        { name: "Embassy of Nigeria in Buenos Aires" }
      ],
      facebookGroups: [
        "Nigerians in Buenos Aires",
        "Nigerian Community Argentina",
        "Africans in Argentina",
        "Nigerian Students in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Student Visa (most accessible) or Employer-Sponsored Work Visa",
      timeline: "60-90 days for residency card after submission. Budget 3-6 months total including document preparation in Nigeria, consular visa processing, travel, and Argentine residency application.",
      steps: [
        "Gather all required documents in Nigeria (Police Character Certificate, birth certificate, bank statements)",
        "Get documents apostilled by the Federal High Court and authenticated by Ministry of Foreign Affairs",
        "Apply for Argentine tourist visa at the embassy in Abuja or consulate in Lagos (10-20 business days)",
        "Secure your qualifying basis: university admission letter, employer sponsorship letter, or other eligible category",
        "Travel to Argentina with all original apostilled documents",
        "Arrange certified Spanish translations of all foreign-language documents (traductor público)",
        "Submit residency application at Dirección Nacional de Migraciones within 90 days of entry",
        "Receive precaria (temporary authorization to stay and work while processing)",
        "Complete biometric data and pay processing fees",
        "Collect residency card (DNI extranjero) within 60-90 days of submission"
      ],
      tips: [
        "Get Police Character Certificate and birth certificate apostilled in Nigeria before departure — this is the hardest step to do remotely",
        "Yellow fever vaccination is mandatory — carry your International Certificate of Vaccination",
        "English proficiency is a major advantage in Buenos Aires' business and education sectors",
        "Nigerian IT professionals have strong job prospects, especially in Buenos Aires' startup ecosystem",
        "Join the African community networks early for housing help and job leads",
        "Start learning Spanish before arrival — even basic conversational ability helps enormously",
        "Budget $1,500-2,500 USD monthly for comfortable living in Buenos Aires",
        "Consider enrolling in a Spanish language program first — this qualifies you for a student visa"
      ]
    },
    faqs: [
      {
        question: "Do Nigerian citizens need a visa for Argentina?",
        answer: "Yes, Nigerian citizens need a tourist visa before travel. Apply at the Argentine embassy in Abuja or consulate in Lagos. You'll need a valid passport, bank statements, accommodation proof, return tickets, and yellow fever vaccination certificate. Processing takes 10-20 business days."
      },
      {
        question: "Is there a Nigerian community in Argentina?",
        answer: "Yes, a growing community of 3,000-5,000 Nigerians, concentrated in Buenos Aires. The community is particularly strong in business, education, and tech. Active Facebook groups and community organizations provide support for newcomers. The African Diaspora Organization hosts regular events."
      },
      {
        question: "Can Nigerians work in Argentina?",
        answer: "Yes, with the right visa. Employer-sponsored work visas are the most straightforward path. Student visa holders can work part-time (20 hours/week). Nigerian IT professionals, engineers, and business professionals find the most opportunities. Temporary residency permits full work authorization."
      },
      {
        question: "What is the cost of living compared to Nigeria?",
        answer: "Buenos Aires is more expensive than Nigerian cities for rent and dining out, but groceries and public transport are affordable. Budget $1,500-2,500 USD monthly for a comfortable single lifestyle. If earning in dollars or euros, the exchange rate makes it manageable. Shared apartments in neighborhoods like Constitución or Flores are more budget-friendly."
      },
      {
        question: "Is Nigeria's yellow fever certificate required?",
        answer: "Yes, Argentina requires proof of yellow fever vaccination (International Certificate of Vaccination) for travelers from Nigeria and other yellow-fever-endemic countries. Get vaccinated at least 10 days before travel. The certificate is valid for life under current WHO guidelines."
      },
      {
        question: "Can I study for free at Argentine universities?",
        answer: "Yes, Argentina's public universities (UBA, UNC, UNR, etc.) have historically been tuition-free for all nationalities. However, Decreto 366/2025 introduced the possibility of fees for non-resident foreign students at some institutions. Check current policy with your target university before enrolling. Private universities charge $3,000-15,000 USD per year."
      },
      {
        question: "How do I transfer money between Nigeria and Argentina?",
        answer: "Direct bank transfers between Nigeria and Argentina are limited. Popular options: Wise (best rates, 1-3 days), Western Union (fast but higher fees), crypto transfers (USDT is widely used in Argentina), or carrying USD cash and exchanging locally. Many Nigerians maintain Nigerian bank accounts and transfer as needed."
      },
      {
        question: "Do I need to speak Spanish?",
        answer: "Absolutely. While English works in some business and tech settings, daily life, immigration offices, banks, and most services operate only in Spanish. Enroll in Spanish classes immediately upon arrival — many language schools offer intensive programs for $200-400 USD/month."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa Guide",
        url: "/visas/student",
        description: "Most accessible pathway for Nigerian citizens"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored work options"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote tech workers"
      },
      {
        title: "Cost of Living Buenos Aires",
        url: "/cost-of-living",
        description: "Budget planning for Nigerians"
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
    subtitle: "Visa pathways, community connections, and opportunities for Kenyans in Argentina",
    description: "Kenya and Argentina established diplomatic ties in the 1970s and share growing trade relationships, particularly in agriculture and sports. Kenyan citizens need a tourist visa before travel but can pursue multiple immigration pathways including student visas, employer sponsorship, and the digital nomad program. A small but supportive East African community in Buenos Aires helps newcomers navigate the transition.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Kenyan citizens need a tourist visa before travel. Apply at the nearest Argentine embassy or consulate. No Argentine embassy in Nairobi — apply through the embassy in Pretoria (South Africa) or the consulate handling East Africa. Processing takes 15-30 business days.",
        reciprocityFee: true,
        feeAmount: "$150-250 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available in principle for Kenyan remote workers, but because the digital nomad authorization targets visa-free nationalities, Kenyans may need to obtain tourist entry first and then apply through another residency category. Confirm eligibility with the consulate.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones is the clearest work path. Education, IT, and international organizations in Argentina occasionally hire Kenyan professionals.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Kenya is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement between Kenya and Argentina. Standard consular visa and residency rules apply. Kenya and Argentina cooperate in multilateral forums (G77, UN) and have growing agricultural trade.",
      benefits: [
        "English proficiency highly valued in Argentine education and business",
        "Growing East African community in Buenos Aires provides support",
        "Strong Kenyan athletic reputation opens doors in sports communities",
        "Argentine public universities offer tuition-free education opportunities",
        "Cultural exchange programs available through embassies"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of Good Conduct from Kenya Police Service (DCI), authenticated by the Ministry of Foreign Affairs and apostilled. Allow 2-3 weeks for processing."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Completed visa application form",
        "Proof of accommodation in Argentina",
        "Return or onward flight tickets",
        "Bank statements (last 6 months)",
        "Yellow fever vaccination certificate",
        "Travel/health insurance",
        "Two recent passport-sized photographs"
      ]
    },
    practicalInfo: {
      currencyExchange: "Kenyan shilling has limited direct exchange in Buenos Aires — convert to USD before traveling. Wise and M-Pesa international transfers work for sending money. The Argentine peso has stabilized since mid-2025 with the blue dollar gap narrowing to 5-10%.",
      banking: "Kenyan citizens can open Argentine bank accounts with residency documentation. Start with fintech apps (Ualá, Mercado Pago) using just a passport. Wise is reliable for KES to ARS transfers. M-Pesa has limited direct integration with Argentina but works via intermediaries.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty between Kenya and Argentina. Argentine-source income is subject to Argentine taxes. Consult a tax professional for cross-border situations, especially if maintaining Kenyan business interests.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "1,000-2,000 (growing, particularly students and professionals)",
      mainLocations: [
        "Buenos Aires (Constitución, Belgrano, Palermo)",
        "La Plata (university students)",
        "Córdoba"
      ],
      associations: [
        { name: "East African Community Buenos Aires" },
        { name: "African Diaspora Organization Argentina" },
        { name: "Kenyan Students Association in Argentina" }
      ],
      facebookGroups: [
        "Kenyans in Argentina",
        "East Africans in Buenos Aires",
        "Africans in Argentina",
        "Kenyan Students Abroad - Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Student Visa (most accessible) or Employer-Sponsored Work Visa",
      timeline: "Budget 3-6 months total: 1-2 months for document preparation in Kenya, 2-4 weeks for consular visa processing, then 60-90 days for Argentine residency card after submission.",
      steps: [
        "Gather required documents in Kenya (Certificate of Good Conduct, birth certificate, bank statements)",
        "Get documents apostilled by the High Court and authenticated by Ministry of Foreign Affairs",
        "Apply for Argentine tourist visa at the embassy in Pretoria or designated consulate (15-30 business days)",
        "Secure qualifying basis: university admission letter, employer sponsorship, or other eligible category",
        "Travel to Argentina with all original apostilled documents",
        "Arrange certified Spanish translations (traductor público) for all foreign-language documents",
        "Submit residency application at Migraciones within 90 days of entry",
        "Receive precaria (temporary authorization to stay and work)",
        "Collect residency card (DNI extranjero) within 60-90 days"
      ],
      tips: [
        "No Argentine embassy in Nairobi — apply through Pretoria or another designated embassy. Budget extra time for this step.",
        "Get Certificate of Good Conduct from DCI and apostille it before departure — difficult to do remotely",
        "Yellow fever vaccination is mandatory for entry from Kenya",
        "English proficiency is a significant advantage in BA's education and business sectors",
        "Connect with the East African community in Buenos Aires early for housing and orientation help",
        "Public universities (UBA, UNC, UNR) are tuition-free — an excellent pathway for young Kenyans",
        "Budget $1,200-2,000 USD monthly for comfortable student living in Buenos Aires",
        "Start learning Spanish before arrival — it accelerates everything from housing to residency processing"
      ]
    },
    faqs: [
      {
        question: "Do Kenyan citizens need a visa for Argentina?",
        answer: "Yes, Kenyan citizens need a tourist visa before travel. Apply at the Argentine embassy in Pretoria (South Africa) or another designated consulate, as there is no Argentine embassy in Nairobi. Processing takes 15-30 business days. You'll need a valid passport, financial proof, accommodation booking, return tickets, and yellow fever certificate."
      },
      {
        question: "Is there a Kenyan or East African community in Argentina?",
        answer: "Yes, a small but supportive community of about 1,000-2,000 Kenyans, plus a broader East African diaspora. The community is concentrated in Buenos Aires, particularly among university students and young professionals. Facebook groups and the African Diaspora Organization provide peer support."
      },
      {
        question: "Can I study for free at Argentine universities?",
        answer: "Argentina's public universities (UBA, UNC, UNR) have historically been tuition-free for all nationalities, though Decreto 366/2025 introduced the possibility of fees for non-resident foreign students at some institutions. Check with your target university. This remains one of the most accessible higher education systems in the world for international students."
      },
      {
        question: "What jobs do Kenyans typically find in Argentina?",
        answer: "Kenyans in Argentina work in education (English teaching), IT, international organizations, NGOs, and business. English proficiency is a major advantage — private English teaching pays $15-30 USD/hour. Athletes, particularly runners, also find support in Argentina's athletic community."
      },
      {
        question: "How do I transfer money between Kenya and Argentina?",
        answer: "Direct KES-ARS transfers are limited. Best options: Wise (KES to USD, then withdraw in ARS), Western Union, or carrying USD cash and exchanging locally. M-Pesa works via intermediary services. Many Kenyans maintain their Kenyan bank accounts and transfer periodically."
      },
      {
        question: "Is Argentine citizenship available?",
        answer: "Yes. After 2 years of continuous legal residency, you can apply for Argentine citizenship through the courts. Kenya allows dual citizenship (since the 2010 constitution), so you can maintain your Kenyan passport while becoming Argentine."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa Guide",
        url: "/visas/student",
        description: "Best pathway for Kenyan students"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored options"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget planning for Kenyans"
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
    subtitle: "Visa pathways, Egyptian community, and opportunities in Argentina",
    description: "Egypt and Argentina have maintained diplomatic relations since 1947, with growing ties in agriculture, energy, and education. Argentine society has a significant Arab cultural influence — the country's Arab-descended population (primarily Syrian and Lebanese) is one of the largest outside the Middle East. Egyptian citizens need a tourist visa before travel but find a welcoming environment with halal food availability, mosques, and a growing Egyptian professional community.",
    region: "africa",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Egyptian citizens need a tourist visa before travel. Apply at the Argentine embassy in Cairo. Processing takes 15-25 business days. Invitation letters from Argentine contacts or institutions strengthen applications.",
        reciprocityFee: true,
        feeAmount: "$150-250 USD"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available in principle for Egyptian remote workers, though the digital nomad authorization primarily targets visa-free nationalities. Egyptians may need to enter on a tourist visa first and then apply through another residency category.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones is the clearest path. Engineering, IT, business, and Arabic translation/interpretation are common fields for Egyptian professionals.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Egypt is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement, but cultural and economic ties are strong. Argentina's large Arab-descended population (estimated 1.3-3.5 million of Syrian and Lebanese origin) creates a culturally familiar environment for Egyptian arrivals.",
      benefits: [
        "Strong Arab cultural presence in Argentine society",
        "Halal food and mosques available in Buenos Aires",
        "Growing trade cooperation in agriculture and energy",
        "Arabic language skills valued for business and translation",
        "Cultural familiarity through shared Arab heritage in Argentina"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Criminal Status Certificate (شهادة حالة جنائية) from Egyptian Ministry of Interior, authenticated by Ministry of Foreign Affairs and apostilled. Allow 2-4 weeks for processing."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Completed visa application form",
        "Proof of accommodation in Argentina",
        "Return or onward flight tickets",
        "Bank statements (last 6 months)",
        "Travel/health insurance valid in Argentina",
        "Two recent passport-sized photographs",
        "University enrollment letter or employer sponsorship (if applicable)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Egyptian pound has limited direct exchange in Buenos Aires — convert to USD before traveling. Wise is reliable for transfers. Western Union offices available throughout Buenos Aires. The blue dollar rate has converged with the official rate (within 5-10% as of 2026), simplifying exchanges.",
      banking: "Egyptian citizens can open Argentine bank accounts with residency documentation. Start with fintech apps (Ualá, Mercado Pago) using a passport and Argentine phone number. Bank Masr and other Egyptian banks do not have direct correspondent relationships, so use Wise or similar services for transfers.",
      taxTreaty: false,
      taxTreatyDetails: "No formal tax treaty between Egypt and Argentina. Argentine-source income is subject to local taxes. Foreign-source income becomes taxable after 12 months of Argentine tax residency. Consult a binational tax advisor.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000 Egyptian citizens (plus millions of broader Arab descent)",
      mainLocations: [
        "Buenos Aires (Flores, San Cristóbal, Once)",
        "Tucumán (strong Arab community)",
        "Mendoza",
        "Córdoba"
      ],
      associations: [
        { name: "Egyptian Community Argentina" },
        { name: "Centro Islámico de la República Argentina (CIRA)" },
        { name: "Arab-Argentine Chamber of Commerce", url: "https://www.ccaa.com.ar" },
        { name: "Embassy of Egypt in Buenos Aires" }
      ],
      facebookGroups: [
        "Egyptians in Buenos Aires",
        "المصريين في الأرجنتين (Egyptians in Argentina)",
        "Arabs in Argentina",
        "Egyptian Students in Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Student Visa (for university enrollment) or Employer-Sponsored Work Visa",
      timeline: "Budget 3-6 months total: 1-2 months for document preparation in Egypt, 2-4 weeks for consular visa processing, then 60-90 days for Argentine residency card.",
      steps: [
        "Gather required documents in Egypt (Criminal Status Certificate, birth certificate, bank statements)",
        "Get documents apostilled through Ministry of Foreign Affairs",
        "Apply for Argentine tourist visa at embassy in Cairo (15-25 business days)",
        "Secure qualifying basis: university admission, employer sponsorship, or other eligible category",
        "Travel to Argentina with all original apostilled documents",
        "Arrange certified Spanish translations (traductor público) for all Arabic-language documents",
        "Submit residency application at Migraciones within 90 days of entry",
        "Receive precaria (temporary authorization to stay and work while processing)",
        "Collect residency card (DNI extranjero) within 60-90 days"
      ],
      tips: [
        "Get Criminal Status Certificate and apostille before departure — this takes time in Egypt",
        "Arabic speakers find translation and interpretation work in Buenos Aires' business community",
        "Argentina's Arab cultural heritage means halal food, mosques, and cultural familiarity are readily available",
        "Tucumán province has the strongest Arab cultural presence outside Buenos Aires",
        "Engineering and IT professionals find the most job opportunities",
        "Public universities are tuition-free — an excellent pathway (check Decreto 366/2025 for current foreign student policies)",
        "Join the Arab-Argentine business community for networking and career opportunities",
        "Budget $1,500-2,500 USD monthly for comfortable living in Buenos Aires"
      ]
    },
    faqs: [
      {
        question: "Do Egyptian citizens need a visa for Argentina?",
        answer: "Yes, Egyptian citizens need a tourist visa before travel. Apply at the Argentine embassy in Cairo. You'll need a valid passport, bank statements, accommodation proof, return tickets, and health insurance. Processing takes 15-25 business days."
      },
      {
        question: "Is there an Egyptian or Arab community in Argentina?",
        answer: "Yes, both. There are 5,000-8,000 Egyptian citizens, plus Argentina has one of the largest Arab-descended populations outside the Middle East (estimated 1.3-3.5 million, primarily of Syrian and Lebanese origin). The Centro Islámico and Arab-Argentine Chamber of Commerce are key community institutions. Halal food, mosques, and Arabic cultural events are readily available."
      },
      {
        question: "Is halal food available in Argentina?",
        answer: "Yes, halal food is available in Buenos Aires, particularly in the Flores and San Cristóbal neighborhoods. Several halal butchers, Middle Eastern restaurants, and grocery stores operate in the city. The Centro Islámico can direct you to halal resources. Argentina is also a major halal meat exporter, so certified products are accessible."
      },
      {
        question: "Can Egyptians work in Argentina?",
        answer: "Yes, with the right visa. Employer-sponsored work visas are the clearest path. Arabic language skills are valuable for translation, business, and diplomacy. Engineering, IT, and international trade offer the best prospects. Student visa holders can work part-time (20 hours/week)."
      },
      {
        question: "Are there mosques in Argentina?",
        answer: "Yes. Buenos Aires has several mosques, including the King Fahd Islamic Cultural Center (one of the largest in Latin America, located in Palermo), the Centro Islámico de la República Argentina, and smaller prayer rooms. Friday prayers are well-attended and the Muslim community is welcoming."
      },
      {
        question: "Can I get Argentine citizenship?",
        answer: "Yes, after 2 years of continuous legal residency, you can apply for Argentine citizenship through the courts. Egypt allows dual citizenship, so you can maintain your Egyptian passport while becoming Argentine."
      },
      {
        question: "What is the cost of living compared to Egypt?",
        answer: "Buenos Aires is more expensive than Cairo for rent and dining, but public transport, healthcare, and education are affordable. Budget $1,500-2,500 USD monthly for comfortable single living. The exchange rate makes dollar/euro earnings go far. Neighborhoods like Flores and Constitución are more budget-friendly."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa Guide",
        url: "/visas/student",
        description: "University enrollment pathway"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored options"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote workers"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget planning for Egyptians"
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
    subtitle: "Visa-free entry, growing Turkish community, business opportunities, and immigration pathways",
    description: "Turkey and Argentina maintain strong diplomatic and trade relations, with bilateral trade exceeding $2 billion annually. Turkish citizens enjoy visa-free entry for 90 days, making Argentina one of the most accessible Latin American destinations. A well-established Turkish community of 8,000-12,000 people supports newcomers, and the shared cultural values around hospitality, family, and food create natural connections. Argentina's Citizenship by Investment pathway (Decreto 524/2025) and its fast 2-year citizenship timeline make it especially attractive for Turkish investors and entrepreneurs.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Turkish citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The 90-day stay can be extended once for an additional 90 days at any Migraciones office ($50 USD fee). For longer stays, apply for temporary residency within the initial period.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent option for Turkish remote workers, freelancers, and digital entrepreneurs. Turkey is visa-free, so the digital nomad authorization is directly accessible. Allows 180 days (renewable once for another 180 days). No local income tax on foreign earnings during the DN period.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones is required for local employment. Turkish companies with Argentine operations can facilitate transfers. Business, import/export, manufacturing, and construction are common sectors.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Turkey is not a Mercosur member or associate state. Standard third-country residency rules apply."
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement, but strong diplomatic, trade, and cultural ties. Turkey is an observer member of several regional organizations where Argentina participates. The Turkish-Argentine Chamber of Commerce actively supports business migration.",
      benefits: [
        "Visa-free entry for 90 days — no advance paperwork needed",
        "2-year path to citizenship (one of the world's fastest)",
        "Citizenship by Investment option available (Decreto 524/2025, $500K minimum)",
        "Growing Turkish business community with import/export networks",
        "Turkish restaurants, cultural centers, and mosques in Buenos Aires",
        "Shared cultural values around family, food, and hospitality"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Adli Sicil Kaydı (Criminal Record Certificate) from Turkish Ministry of Justice (e-Devlet portal), apostilled by the relevant government office. Allow 1-2 weeks for apostille processing."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina (rental contract, utility bill, or notarized letter from host)",
        "Proof of financial means (bank statements, employment contract, or income documentation)",
        "Health insurance valid in Argentina (private prepaga recommended: $50-300 USD/month)",
        "Passport-quality photographs",
        "Turkish marriage certificate with apostille (if applicable)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Turkish lira (TRY) can be exchanged at Buenos Aires currency exchanges (cuevas and cambios), though USD and EUR get better rates. Wise is excellent for TRY-to-USD-to-ARS transfers. Many Turkish expats carry USD and exchange locally. The blue dollar rate has converged with official rate (within 5-10% as of 2026). Crypto (USDT) is popular among Turkish expats for larger transfers.",
      banking: "Turkish citizens can open Argentine bank accounts with temporary residency (DNI extranjero). Immediately upon arrival, use fintech apps (Ualá, Mercado Pago, Brubank) which require only a passport and Argentine phone number. Isbank, Garanti BBVA, and other Turkish banks do not have direct branches but have correspondent relationships. Western Union works for direct TRY-ARS transfers. April 2026 crypto banking regulations now allow licensed exchanges (Lemon Cash, Buenbit) to offer bank-like services.",
      taxTreaty: true,
      taxTreatyDetails: "Turkey and Argentina have bilateral tax cooperation agreements. Digital Nomad Visa holders are exempt from Argentine income tax on foreign earnings. Tax residency triggers after 183+ days in Argentina on other visa types — consult an Argentine-Turkish tax advisor for planning.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "8,000-12,000 (growing, with significant recent arrivals since 2020)",
      mainLocations: [
        "Buenos Aires (Flores, Balvanera, Once, Palermo)",
        "Córdoba (business community)",
        "Mendoza (agriculture and wine investment)",
        "Rosario (manufacturing)"
      ],
      associations: [
        { name: "Turkish-Argentine Chamber of Commerce", url: "https://www.ccta.com.ar" },
        { name: "Turkish Community Buenos Aires" },
        { name: "Centro Islámico de la República Argentina (CIRA)" },
        { name: "Embassy of Turkey in Buenos Aires" },
        { name: "Turkish Cultural Foundation Argentina" }
      ],
      facebookGroups: [
        "Turks in Buenos Aires",
        "Türkler Arjantin'de",
        "Turkish Community Argentina",
        "Turkish Business Network Argentina",
        "Arjantin'deki Türkler"
      ]
    },
    residencyPath: {
      easiestRoute: "Temporary Residency (after visa-free entry) or Digital Nomad Visa",
      timeline: "Enter visa-free immediately. Residency card (DNI extranjero) typically issued 60-90 days after application. Citizenship eligibility after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina visa-free with Turkish passport (90 days, extendable to 180)",
        "Within 90 days, choose and apply for residency: Rentista (passive income), Digital Nomad, Work (employer-sponsored), Student, or Investment",
        "Submit apostilled documents at Dirección Nacional de Migraciones (book turno online at migraciones.gov.ar)",
        "Provide certified Spanish translations of all Turkish-language documents (traductor público)",
        "Pay the processing fee ($200-400 USD depending on category)",
        "Receive precaria (temporary authorization — allows legal stay and work while processing)",
        "Complete biometric data collection at designated Migraciones office",
        "Collect residency card (DNI extranjero) within 60-90 days",
        "After 2 years of continuous legal residence, apply for Argentine citizenship through the courts (juzgado federal)"
      ],
      tips: [
        "Get Adli Sicil Kaydı from e-Devlet and apostille it before leaving Turkey — fastest done in person",
        "The Turkish-Argentine Chamber of Commerce is an excellent first point of contact for business migrants",
        "Import/export businesses between Turkey and Argentina are a proven model — textiles, food, construction materials",
        "Flores and Balvanera neighborhoods have Turkish restaurants, kebab shops, and community gathering points",
        "Turkish currency instability makes Argentina's dollar-denominated opportunities attractive",
        "Mendoza's wine and agriculture sectors welcome Turkish investment",
        "The Investment Visa (Decreto 524/2025, $500K in eligible sectors) provides the fastest residency processing",
        "Learn Spanish before arrival — basic conversational ability transforms your experience",
        "Argentine and Turkish cultures share values: family gatherings, late dinners, passionate sports fans, strong tea/coffee culture"
      ]
    },
    faqs: [
      {
        question: "Do Turkish citizens need a visa for Argentina?",
        answer: "No! Turkish citizens enter visa-free for 90 days with a valid passport. No reciprocity fee, no advance paperwork. This makes Argentina one of the easiest Latin American countries for Turks to visit and explore before committing to a move."
      },
      {
        question: "How long does it take to get Argentine citizenship?",
        answer: "Argentina offers one of the world's fastest citizenship timelines: just 2 years of continuous legal residency (per Decreto 366/2025). Turkey allows dual citizenship, so you keep your Turkish passport. The process involves a federal court application (juzgado federal) and typically takes 6-12 months to process after the 2-year residency requirement is met."
      },
      {
        question: "Is there a Turkish community in Argentina?",
        answer: "Yes, a well-established community of 8,000-12,000 Turkish citizens. Strong presence in Buenos Aires (Flores, Balvanera), with Turkish restaurants, cultural centers, and business networks. The Turkish-Argentine Chamber of Commerce supports business migrants. Community Telegram and WhatsApp groups are active."
      },
      {
        question: "Can Turkish businesses operate in Argentina?",
        answer: "Yes, and many do successfully. Import/export between Turkey and Argentina is a proven model — textiles, construction materials, food products, and manufactured goods. The Turkish-Argentine Chamber of Commerce facilitates business connections. Registering a SAS (Sociedad por Acciones Simplificada) takes 24-48 hours online."
      },
      {
        question: "What about the Investment Visa?",
        answer: "Argentina's Citizenship by Investment pathway (Decreto 524/2025) requires a $500,000 USD minimum investment in eligible sectors (energy, agriculture, tech, tourism). It provides expedited residency processing and a direct path to citizenship after 2 years. Tax residency is separate from immigration status under the 2026 Labor Modernization Law — consult a specialist."
      },
      {
        question: "Is halal food available?",
        answer: "Yes. Buenos Aires has halal butchers, Turkish and Middle Eastern restaurants, and the Centro Islámico. Argentina is one of the world's largest halal meat exporters, so certified products are accessible. Turkish restaurants include authentic kebab and pide shops, particularly in Flores and Balvanera."
      },
      {
        question: "How do I transfer money from Turkey?",
        answer: "Turkish lira can be exchanged but USD gets better rates. Options: Wise (TRY to USD to ARS, best rates), crypto transfers (USDT popular in both Turkey and Argentina), Western Union (fast but higher fees), carrying USD cash (declare amounts over $10,000). Many Turkish expats use crypto as a bridge currency due to TRY volatility."
      },
      {
        question: "Is Spanish difficult for Turkish speakers?",
        answer: "Spanish has some phonetic similarities with Turkish (similar vowel sounds) that make pronunciation easier than English. Grammar structure differs but many Turks report learning basic Spanish within 3-6 months of immersion. Buenos Aires has language schools with intensive programs ($200-400 USD/month). Daily life accelerates learning."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For Turkish remote workers and freelancers"
      },
      {
        title: "Investment Visa Guide",
        url: "/visas/investment",
        description: "CBI pathway for Turkish investors"
      },
      {
        title: "Rentista Visa Guide",
        url: "/visas/rentista",
        description: "For those with passive income"
      },
      {
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Standard residency process"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget comparison for Turkish expats"
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
    subtitle: "Visa-free entry, investment opportunities, and lifestyle options for Emiratis in Argentina",
    description: "The UAE and Argentina maintain strong diplomatic and investment relations, with bilateral trade growing steadily. Emirati citizens enjoy visa-free entry and find Argentina an attractive destination for real estate investment, agribusiness, wine tourism, and lifestyle diversification. Argentina's fast 2-year citizenship timeline, low cost of living relative to the Gulf, and Citizenship by Investment pathway (Decreto 524/2025) make it particularly appealing for Emiratis seeking a second passport or global diversification.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Emirati citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The stay can be extended once for an additional 90 days at any Migraciones office. For longer stays, apply for temporary residency within the initial period.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Emirati remote workers and digital entrepreneurs. UAE is visa-free, so the digital nomad authorization is directly accessible. Useful for those managing UAE businesses remotely while exploring Argentine opportunities.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones required for local employment. Most Emiratis in Argentina are self-employed, investors, or managing international businesses rather than seeking local employment.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "UAE is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement, but robust diplomatic and investment ties. The UAE-Argentina Investment Promotion and Protection Agreement facilitates cross-border investment. Argentine beef, wine, and agricultural products are significant exports to the UAE.",
      benefits: [
        "Visa-free entry for 90 days — no advance paperwork",
        "Investment Visa pathway (Decreto 524/2025, $500K minimum in eligible sectors)",
        "2-year fast-track to citizenship (one of the world's shortest timelines)",
        "Strong investment protection agreements between UAE and Argentina",
        "Argentine agriculture, real estate, and wine sectors attract Gulf capital",
        "Halal food widely available — Argentina is a major global halal meat exporter",
        "Growing Gulf-Argentine business community"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Good Conduct Certificate (شهادة حسن السيرة والسلوك) from Dubai Police, Abu Dhabi Police, or the relevant emirate's police force. Must be attested by UAE Ministry of Foreign Affairs and apostilled."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina (property deed or rental contract)",
        "Proof of financial means (bank statements showing investment capacity or ongoing income)",
        "Health insurance valid in Argentina (private prepaga recommended: $100-500 USD/month for comprehensive coverage)",
        "Investment documentation (for Investment Visa applicants)",
        "Company registration documents (if establishing Argentine business)",
        "Marriage certificate with apostille and attestation (if applicable)"
      ]
    },
    practicalInfo: {
      currencyExchange: "UAE dirham (AED) is easily exchanged at Buenos Aires currency exchanges and banks due to its USD peg (1 AED ≈ 3.67 USD). USD is the preferred foreign currency in Argentina and gets excellent rates. Wise works well for AED-to-ARS transfers. The blue dollar rate has converged with the official rate (within 5-10% as of 2026). For large investment transfers, use SWIFT through major banks (HSBC, Santander have UAE correspondent relationships).",
      banking: "Emirati citizens can open Argentine bank accounts with temporary residency (DNI extranjero). Major banks (HSBC Argentina, Santander, BBVA) handle high-net-worth international clients. For immediate needs, fintech apps (Ualá, Mercado Pago) work with just a passport. April 2026 crypto banking regulations allow licensed exchanges to offer regulated services. Emirates NBD and First Abu Dhabi Bank have correspondent relationships with Argentine institutions.",
      taxTreaty: true,
      taxTreatyDetails: "UAE and Argentina have bilateral tax cooperation frameworks. The UAE has no personal income tax, making the transition simpler. In Argentina, Digital Nomad Visa holders are exempt from local income tax on foreign earnings. Investment income and capital gains in Argentina may be taxable — consult an international tax advisor experienced with Gulf-LATAM structures.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000 Emirati citizens (plus broader Gulf and Arab community of 10,000+)",
      mainLocations: [
        "Buenos Aires (Puerto Madero, Palermo, Recoleta — premium neighborhoods)",
        "Mendoza (wine region investment)",
        "Patagonia (tourism and real estate)",
        "Salta (agriculture investment)"
      ],
      associations: [
        { name: "UAE-Argentina Business Council" },
        { name: "Arab-Argentine Chamber of Commerce", url: "https://www.ccaa.com.ar" },
        { name: "Centro Islámico de la República Argentina (CIRA)" },
        { name: "Embassy of UAE in Buenos Aires" }
      ],
      facebookGroups: [
        "UAE Investors in Argentina",
        "Gulf Community Buenos Aires",
        "Arabs in Argentina",
        "Argentine Real Estate for Gulf Investors"
      ]
    },
    residencyPath: {
      easiestRoute: "Investment Visa (for investors) or Rentista Visa (for passive income receivers)",
      timeline: "Enter visa-free immediately. Investment Visa receives expedited processing (30-60 days). Standard residency takes 60-90 days. Citizenship after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina visa-free with UAE passport (90 days)",
        "Explore investment opportunities and consult with local advisors (real estate, agriculture, tech)",
        "Choose residency pathway: Investment Visa ($500K+ in eligible sectors), Rentista (passive income of $2,000+/month), or Digital Nomad",
        "Engage a registered immigration attorney (abogado de migraciones) for document preparation",
        "Submit apostilled documents at Dirección Nacional de Migraciones (book turno online)",
        "Provide certified Spanish translations of all Arabic/English documents (traductor público)",
        "Pay processing fees ($200-500 USD depending on category)",
        "Receive precaria (temporary authorization while processing)",
        "Collect residency card (DNI extranjero)",
        "After 2 years of continuous legal residence, apply for Argentine citizenship through the courts"
      ],
      tips: [
        "Get Good Conduct Certificate from your emirate's police force and have it attested by UAE MOFA before traveling",
        "Argentina's Investment Visa (Decreto 524/2025) offers the fastest processing for $500K+ in energy, agriculture, tech, or tourism",
        "Mendoza's wine industry and Patagonian real estate attract significant Gulf investment",
        "Argentine beef is world-class and halal-certified options are widely available — Argentina exports halal beef globally",
        "The King Fahd Islamic Cultural Center in Palermo is one of the largest mosques in Latin America",
        "Puerto Madero is the preferred neighborhood for Gulf investors — waterfront luxury apartments from $200,000",
        "Argentine residency provides visa-free access to most of South America and is increasingly valued as a global mobility asset",
        "IMPORTANT: UAE generally does not permit dual citizenship. Acquiring Argentine citizenship may affect your Emirati status. Consult UAE authorities and legal counsel before naturalizing. Many Gulf residents maintain permanent residency without taking citizenship.",
        "Consider engaging a registered SAS (simplified corporation) for business operations — registration takes 24-48 hours online"
      ]
    },
    faqs: [
      {
        question: "Do UAE citizens need a visa for Argentina?",
        answer: "No, Emirati citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. This makes Argentina one of the easiest global destinations for Emiratis to visit and explore investment opportunities."
      },
      {
        question: "What investment opportunities exist for Emiratis?",
        answer: "Argentina offers attractive opportunities in real estate (Buenos Aires luxury apartments from $100,000-500,000, Patagonian estates), wine industry (Mendoza vineyards), agriculture (soybean, cattle, lithium), and tech startups. The Investment Visa (Decreto 524/2025) requires $500,000 minimum in energy, agriculture, tech, or tourism sectors. Many Gulf investors diversify through Argentine agricultural land and Buenos Aires commercial real estate."
      },
      {
        question: "Is halal food available in Argentina?",
        answer: "Yes, extensively. Argentina is one of the world's largest halal meat exporters — certified halal beef, lamb, and poultry are widely available. Buenos Aires has halal butchers, Middle Eastern restaurants, and the King Fahd Islamic Cultural Center. Hotel restaurants in major cities increasingly offer halal options for Gulf visitors."
      },
      {
        question: "How fast can I get Argentine citizenship?",
        answer: "Argentina offers a 2-year path to citizenship — one of the world's fastest (Decreto 366/2025). However, UAE generally does not permit dual citizenship. Many Emiratis choose to maintain permanent residency without naturalizing, which still provides the DNI (national ID) needed for banking, property ownership, and business operations. Consult UAE legal counsel before making citizenship decisions."
      },
      {
        question: "Where do Gulf investors typically live in Buenos Aires?",
        answer: "Puerto Madero (waterfront luxury, $2,500-8,000/month rent), Palermo (trendy, international, $1,500-4,000/month), and Recoleta (classic elegance, $1,500-3,500/month) are the most popular neighborhoods. Many investors also purchase vacation properties in Mendoza wine country or Patagonian lake districts."
      },
      {
        question: "How do I transfer large sums from the UAE?",
        answer: "For investment-level transfers ($100K+): Use SWIFT wire through major banks (HSBC, Santander Argentina have UAE correspondent relationships). Emirates NBD and FAB can facilitate. Wise works for smaller regular transfers. For property purchases, Argentine notarios (escribanos) handle escrow. All incoming foreign currency must be declared to the Argentine central bank (BCRA) for amounts exceeding $10,000."
      },
      {
        question: "Are there mosques and Islamic services?",
        answer: "Yes. The King Fahd Islamic Cultural Center in Palermo (one of Latin America's largest mosques, built with Saudi support) hosts Friday prayers and Islamic events. The Centro Islámico de la República Argentina serves the broader Muslim community. Halal products, Islamic schools, and community services are available in Buenos Aires."
      },
      {
        question: "What is the cost of living compared to the UAE?",
        answer: "Significantly lower. A luxury lifestyle in Buenos Aires costs a fraction of Dubai or Abu Dhabi. Expect $3,000-6,000 USD/month for a premium lifestyle including upscale apartment, dining, private healthcare, and entertainment — compared to $8,000-15,000+ for equivalent quality in the UAE. Staff, private drivers, and household help are also significantly more affordable."
      }
    ],
    relatedResources: [
      {
        title: "Investment Visa Guide",
        url: "/visas/investment",
        description: "CBI pathway for Emirati investors"
      },
      {
        title: "Rentista Visa Guide",
        url: "/visas/rentista",
        description: "For passive income from UAE assets"
      },
      {
        title: "Digital Nomad Visa",
        url: "/visas/digital-nomad",
        description: "For remote business management"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Detailed cost comparison"
      },
      {
        title: "Best Neighborhoods Buenos Aires",
        url: "/blog/best-neighborhoods-expats-buenos-aires",
        description: "Where premium investors live"
      }
    ],
    image: "/images/nationalities/uae.webp"
  }
];
