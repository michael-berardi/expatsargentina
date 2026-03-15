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
    subtitle: "Visa pathways, community connections, and opportunities for Vietnamese in Argentina",
    description: "Vietnam and Argentina established diplomatic relations in 1973 and share growing trade ties, particularly in agriculture and manufacturing. Vietnamese citizens need a tourist visa before travel but find a surprisingly welcoming environment — Argentina's large Asian community in Belgrano (Barrio Chino) provides familiar food, cultural connections, and community support. Student visas and employer sponsorship are the most practical long-stay pathways.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Vietnamese citizens need a tourist visa before travel. Apply at the Argentine embassy in Hanoi or consulate in Ho Chi Minh City. Processing takes 15-30 business days. Invitation letters from Argentine institutions strengthen applications.",
        reciprocityFee: true,
        feeAmount: "$200-300 USD"
      },
      digitalNomad: {
        eligible: false,
        notes: "Argentina's digital nomad authorization primarily targets visa-free nationalities. Vietnamese remote workers usually need another residence pathway (student, work, or family-based) for long-term stays.",
        incomeRequirement: "Not directly available for Vietnamese passport holders"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones is the clearest work-based route. Manufacturing, food service, IT, and trade-related roles are common for Vietnamese professionals in Argentina.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Vietnam is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement. Standard consular visa and residency rules apply. Vietnam and Argentina cooperate in multilateral forums and have growing agricultural trade (Argentina exports soybeans and beef to Vietnam).",
      benefits: [
        "Growing trade relationship between Vietnam and Argentina",
        "Active Asian community in Buenos Aires' Barrio Chino (Belgrano)",
        "Vietnamese food products available at Asian markets",
        "Argentine public universities offer affordable/free education",
        "Student and work pathways available"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Lý lịch tư pháp (Judicial Record Certificate) from Vietnamese Ministry of Justice, authenticated and apostilled through MOFA. Allow 2-4 weeks."
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
        "Travel/health insurance",
        "Two passport-sized photographs"
      ]
    },
    practicalInfo: {
      currencyExchange: "Vietnamese dong (VND) has very limited direct exchange in Buenos Aires — convert to USD before traveling. Wise is reliable for international transfers. Western Union offices available throughout Buenos Aires for VND-origin remittances.",
      banking: "Vietnamese citizens can open Argentine bank accounts with residency documentation. Start with fintech apps (Ualá, Mercado Pago) using a passport. Vietnamese banks (Vietcombank, BIDV) do not have direct correspondent relationships with Argentine banks — use Wise or similar intermediaries.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty between Vietnam and Argentina. Argentine-source income is subject to local taxes. Consult a tax professional for cross-border situations.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "5,000-8,000 (growing, particularly students and small business owners)",
      mainLocations: [
        "Buenos Aires (Belgrano/Barrio Chino, Flores, Once)",
        "La Plata (university students)",
        "Córdoba"
      ],
      associations: [
        { name: "Vietnamese Community Argentina" },
        { name: "Asian-Argentine Cultural Association" },
        { name: "Embassy of Vietnam in Buenos Aires" }
      ],
      facebookGroups: [
        "Vietnamese in Buenos Aires",
        "Người Việt tại Argentina",
        "Vietnamese Students in Argentina",
        "Asian Community Argentina"
      ]
    },
    residencyPath: {
      easiestRoute: "Student Visa (most accessible) or Employer-Sponsored Work Visa",
      timeline: "Budget 3-6 months total: 1-2 months for document preparation in Vietnam, 2-4 weeks for consular visa processing, then 60-90 days for Argentine residency card.",
      steps: [
        "Gather required documents in Vietnam (Judicial Record Certificate, birth certificate, bank statements)",
        "Get documents apostilled through Ministry of Foreign Affairs (MOFA)",
        "Apply for Argentine tourist visa at embassy in Hanoi or consulate in HCMC (15-30 business days)",
        "Secure qualifying basis: university admission letter, employer sponsorship, or other eligible category",
        "Travel to Argentina with all original apostilled documents",
        "Arrange certified Spanish translations (traductor público)",
        "Submit residency application at Migraciones within 90 days of entry",
        "Receive precaria (temporary authorization to stay and work)",
        "Collect residency card (DNI extranjero) within 60-90 days"
      ],
      tips: [
        "Get Judicial Record Certificate apostilled before departure — very difficult to obtain remotely",
        "Barrio Chino in Belgrano has Vietnamese restaurants, Asian supermarkets, and community connections",
        "Vietnamese food products (fish sauce, rice noodles, spices) available at Asian markets in Belgrano",
        "Public universities (UBA, UNC) are tuition-free — check Decreto 366/2025 for current foreign student policies",
        "Many Vietnamese in Argentina run small businesses (restaurants, food shops, import/export)",
        "Start learning Spanish before arrival — the Vietnamese community can help but daily life requires Spanish",
        "Budget $1,200-2,000 USD monthly for comfortable living in Buenos Aires"
      ]
    },
    faqs: [
      {
        question: "Do Vietnamese citizens need a visa for Argentina?",
        answer: "Yes, Vietnamese citizens need a tourist visa before travel. Apply at the Argentine embassy in Hanoi or consulate in Ho Chi Minh City. Processing takes 15-30 business days. You'll need a passport, bank statements, accommodation proof, and return tickets."
      },
      {
        question: "Is there a Vietnamese community in Argentina?",
        answer: "Yes, an estimated 5,000-8,000 Vietnamese live in Argentina, primarily in Buenos Aires. The Barrio Chino (Chinatown) in Belgrano has Vietnamese restaurants, Asian supermarkets with Vietnamese products, and community gathering points. A broader Asian community provides cultural support."
      },
      {
        question: "Is Vietnamese food available?",
        answer: "Yes, though limited compared to countries with larger Vietnamese diasporas. Buenos Aires has Vietnamese restaurants and pho shops, particularly in Belgrano. Asian supermarkets carry Vietnamese ingredients (fish sauce, rice noodles, herbs, spices). Many Vietnamese residents cook at home and share tips through community groups."
      },
      {
        question: "Can Vietnamese citizens work in Argentina?",
        answer: "Yes, with employer sponsorship or student visa (part-time). Vietnamese professionals in IT, manufacturing, food service, and trade find opportunities. With temporary residency, you have full work authorization. English and/or Spanish proficiency significantly expands options."
      },
      {
        question: "Will I lose Vietnamese citizenship if I naturalize?",
        answer: "Vietnam does not generally allow dual citizenship. If you naturalize as Argentine, you would need to renounce Vietnamese citizenship. Many Vietnamese residents in Argentina maintain permanent residency without naturalizing to keep their Vietnamese passport. Consult Vietnamese consular authorities for your specific situation."
      },
      {
        question: "Can I study for free in Argentina?",
        answer: "Argentine public universities (UBA, UNC, UNR) have historically been tuition-free for all nationalities. Decreto 366/2025 introduced possible fees for non-resident foreign students at some institutions. Check with your target university. Even with potential fees, Argentine education is very affordable compared to most countries."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa Guide",
        url: "/visas/student",
        description: "Most accessible pathway for Vietnamese"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored options"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget planning"
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
    subtitle: "Visa-free entry, community life, and opportunities for Thai citizens in Argentina",
    description: "Thailand and Argentina have enjoyed diplomatic ties since 1952, with growing bilateral trade and cultural exchange. Thai citizens benefit from visa-free entry for 90 days, making Argentina one of the most accessible Latin American destinations. Buenos Aires' cosmopolitan food scene increasingly embraces Thai cuisine, and a small but growing Thai community provides support for newcomers.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Thai citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The stay can be extended once for an additional 90 days at any Migraciones office ($50 USD fee).",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Thai remote workers and freelancers. Thailand is visa-free, so the digital nomad authorization is directly accessible. Allows 180 days (renewable). No Argentine income tax on foreign earnings during the DN period.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones required for local employment. Thai professionals in hospitality, cuisine, wellness, and international trade find opportunities.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Thailand is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement. Standard third-country residency rules apply. Thailand and Argentina cooperate in multilateral forums and have growing trade in food products and agriculture.",
      benefits: [
        "Visa-free entry for 90 days — no advance paperwork",
        "Digital Nomad Visa directly accessible",
        "2-year path to citizenship",
        "Thai cuisine increasingly popular in Buenos Aires",
        "Growing Asian community in Belgrano provides support"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Criminal Record Certificate (หนังสือรับรองความประพฤติ) from Royal Thai Police, authenticated by Thai Ministry of Foreign Affairs and apostilled. Allow 2-3 weeks."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of financial means (bank statements or income documentation)",
        "Health insurance valid in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Thai baht (THB) can be exchanged at Buenos Aires currency exchanges, though USD gets better rates. Wise is reliable for THB-to-ARS transfers. Bangkok Bank and other Thai banks have limited correspondent relationships — plan transfers in advance.",
      banking: "Thai citizens can open Argentine bank accounts with residency documentation. Start with fintech apps (Ualá, Mercado Pago) using a passport and Argentine phone number. For ongoing transfers, Wise offers competitive THB-ARS rates.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty between Thailand and Argentina. Digital Nomad Visa holders are exempt from Argentine income tax on foreign earnings. Other visa holders become tax residents after 183+ days.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000 (growing, particularly in hospitality and food sectors)",
      mainLocations: [
        "Buenos Aires (Belgrano/Barrio Chino, Palermo, Recoleta)",
        "Mendoza",
        "Córdoba"
      ],
      associations: [
        { name: "Thai Community Buenos Aires" },
        { name: "Royal Thai Embassy in Buenos Aires" },
        { name: "Asian-Argentine Cultural Association" }
      ],
      facebookGroups: [
        "Thais in Buenos Aires",
        "คนไทยในอาร์เจนตินา (Thais in Argentina)",
        "Thai Community Argentina",
        "Asian Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa (for remote workers) or Temporary Residency (after visa-free entry)",
      timeline: "Enter visa-free immediately. Digital Nomad Visa allows 180 days + 180 renewal. Residency card issued 60-90 days after application. Citizenship after 2 years.",
      steps: [
        "Enter Argentina visa-free with Thai passport (90 days)",
        "Within 90 days, choose residency pathway: Digital Nomad, Rentista (passive income), Work (employer-sponsored), or Student",
        "Submit apostilled documents at Migraciones (book turno online at migraciones.gov.ar)",
        "Provide certified Spanish translations of all Thai-language documents (traductor público)",
        "Pay processing fee ($200-400 USD)",
        "Receive precaria (temporary authorization)",
        "Collect residency card (DNI extranjero) within 60-90 days",
        "After 2 years of continuous legal residence, apply for citizenship if desired"
      ],
      tips: [
        "Get Criminal Record Certificate from Royal Thai Police and apostille it before leaving Thailand",
        "Thai cuisine is increasingly popular in Buenos Aires — Thai chefs and restaurateurs find opportunities",
        "Barrio Chino in Belgrano has Asian supermarkets with Thai ingredients (fish sauce, curry paste, coconut milk, rice)",
        "Buenos Aires' growing wellness scene welcomes Thai massage practitioners",
        "The Digital Nomad Visa is the easiest pathway for Thai remote workers — directly accessible since Thailand is visa-free",
        "Learn Spanish before arrival — basic ability makes everything easier",
        "Budget $1,200-2,000 USD monthly for comfortable living in Buenos Aires"
      ]
    },
    faqs: [
      {
        question: "Do Thai citizens need a visa for Argentina?",
        answer: "No! Thai citizens enter Argentina visa-free for 90 days. No reciprocity fee. This makes Argentina very accessible for Thais wanting to explore before committing to a move."
      },
      {
        question: "Is Thai food available in Argentina?",
        answer: "Increasingly yes. Buenos Aires has several Thai restaurants, particularly in Palermo and Belgrano. Asian supermarkets in Barrio Chino carry Thai ingredients (curry paste, fish sauce, coconut milk, rice noodles, Thai basil). The growing Asian food scene means Thai cuisine is well-received and Thai chefs find work."
      },
      {
        question: "Can Thai citizens use the Digital Nomad Visa?",
        answer: "Yes! Thailand is visa-free for Argentina, so the Digital Nomad Visa is directly accessible. It allows 180 days (renewable for another 180) and exempts you from Argentine income tax on foreign earnings. You need to show $1,500+/month income."
      },
      {
        question: "Is there a Thai community?",
        answer: "Yes, an estimated 3,000-5,000 Thai citizens in Argentina. The community is concentrated in Buenos Aires, particularly around Belgrano (near Barrio Chino). Facebook groups and the Royal Thai Embassy provide support. The broader Asian community in Belgrano offers cultural familiarity."
      },
      {
        question: "How long to get citizenship?",
        answer: "2 years of continuous legal residency, then apply through the courts. Thailand allows dual citizenship (there is no formal law against it), so most Thais keep their Thai passport while acquiring Argentine citizenship."
      },
      {
        question: "What job opportunities exist?",
        answer: "Thai professionals find opportunities in hospitality, cuisine (Thai restaurants and catering), wellness (massage, spa services), international trade, and education. English-speaking Thais have an advantage in Buenos Aires' business sector. Remote work for Thai or international companies is increasingly popular."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Best pathway for Thai remote workers"
      },
      {
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Standard residency process"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget comparison for Thais"
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
    description: "Indonesia and Argentina established diplomatic relations in 1954 and share growing trade ties, particularly in palm oil, agriculture, and mining. Indonesians can still relocate successfully, but most long-stay cases rely on student residence, employer sponsorship, family ties, or another standard residency category rather than a shortcut program. Buenos Aires has a small but supportive Indonesian community, primarily concentrated around universities and the embassy.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Indonesian passport holders generally need a tourist visa before travel through the Argentine consular network. Apply at the Argentine embassy in Jakarta. Processing takes 15-30 business days. Some Indonesian travelers report variable processing times — apply well in advance.",
        reciprocityFee: false
      },
      digitalNomad: {
        eligible: false,
        notes: "Argentina's digital nomad authorization is aimed at nationals who already enter visa-free as tourists, so Indonesians usually need another residence pathway. Student visa, work sponsorship, or family reunification are the practical alternatives for long-term stays.",
        incomeRequirement: "Not available on an Indonesian passport that requires prior tourist authorization"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship is the clearest work-based route. University, hospitality, trade, and company-transfer cases are more realistic than purely freelance relocation. Mining and palm oil trade companies occasionally facilitate transfers.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Indonesia is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "There is no Mercosur or bilateral immigration shortcut for Indonesian passport holders. Standard tourist-visa and residence rules apply, so careful document preparation is essential. Indonesia and Argentina cooperate through G20 and bilateral trade (palm oil exports, mining cooperation).",
      benefits: [
        "Standard student, work, and family-based residence categories are open",
        "Embassy and student-community support available in Buenos Aires",
        "Strong English skills can help during first months while Spanish improves",
        "Argentine public universities offer affordable/free education",
        "Growing trade relationship provides business connections"
      ]
    },
    documents: {
      passportValidity: "6 months beyond stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "SKCK (Surat Keterangan Catatan Kepolisian) from Indonesian National Police, authenticated by Ministry of Law and Human Rights and apostilled. Allow 2-3 weeks for processing in Indonesia."
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
        "Travel/health insurance",
        "University admission letter or employer sponsorship (if applicable)",
        "Two passport-sized photographs"
      ]
    },
    practicalInfo: {
      currencyExchange: "Indonesian rupiah (IDR) has very limited direct exchange in Buenos Aires — convert to USD before traveling. Wise is the most practical option for IDR-to-ARS transfers. Western Union offices available throughout Buenos Aires.",
      banking: "Indonesian citizens can open Argentine bank accounts with residency documentation. Start with fintech apps (Ualá, Mercado Pago) using a passport. Indonesian banks (BCA, BRI, Mandiri) do not have direct correspondent relationships with Argentine banks — use Wise or similar intermediaries for transfers.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty between Indonesia and Argentina. Argentine-source income is subject to local taxes. Foreign-source income becomes taxable after 12 months of Argentine tax residency. Consult a tax advisor for cross-border situations.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000 (primarily students and professionals)",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "La Plata (university students)",
        "Córdoba"
      ],
      associations: [
        { name: "Embassy of Indonesia in Buenos Aires", url: "https://kemlu.go.id/buenosaires" },
        { name: "Indonesian Students Association in Argentina (PPI Argentina)" },
        { name: "Asian-Argentine Cultural Association" }
      ],
      facebookGroups: [
        "Indonesians in Argentina",
        "PPI Argentina",
        "Warga Indonesia di Argentina",
        "Asian Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Student residence, employer-sponsored residence, or family reunification",
      timeline: "Plan for several months between consular visa processing, apostilles, translations, and the Argentine residence review. Budget 4-6 months total from initial document gathering to receiving DNI.",
      steps: [
        "Apply for the correct tourist or entry visa through the Argentine consular channel before departure (embassy in Jakarta)",
        "Collect your passport, birth certificate, and SKCK with the required apostilles or legalizations in Indonesia",
        "Secure the residence basis that fits your case: university enrollment, a sponsoring employer, or a family tie",
        "Travel to Argentina and arrange certified Spanish translations for foreign-language documents (traductor público)",
        "Submit the residence file to Migraciones once your qualifying category is complete",
        "Receive your precaria (temporary authorization) while the file is being reviewed",
        "Complete biometric data collection at designated Migraciones office",
        "Finish DNI issuance after the residence approval is granted"
      ],
      tips: [
        "Get SKCK before travel — processing in Indonesia takes 1-2 weeks and requires a police visit",
        "Confirm legalization and translation rules with the Argentine consular post — requirements can change by document type",
        "If moving for study, ask your university whether it helps foreign students with Migraciones paperwork (UBA and UNC often do)",
        "Join Indonesian community groups (PPI Argentina) early for local help with housing and logistics",
        "Budget extra time for Spanish translations and local appointments after landing",
        "Barrio Chino in Belgrano has Asian supermarkets with Indonesian ingredients (sambal, kecap manis, tempeh)",
        "Indonesian food is not widely available in restaurants — most Indonesians cook at home",
        "Budget $1,200-2,000 USD monthly for comfortable student/professional living"
      ]
    },
    faqs: [
      {
        question: "Do Indonesians need a visa for Argentina?",
        answer: "Yes. Indonesian passport holders generally need a tourist visa before departure. Apply at the Argentine embassy in Jakarta. Do not assume you can board first and fix paperwork later — airlines may deny boarding without a valid visa."
      },
      {
        question: "Can Indonesians use Argentina's digital nomad visa?",
        answer: "Usually no. Argentina's current digital nomad authorization is designed for travelers who already qualify for visa-free tourist entry, so Indonesians normally need another long-stay category (student, work, or family-based residence)."
      },
      {
        question: "What is the most practical path for long-term stay?",
        answer: "Student residence (through university enrollment), employer sponsorship, and family-based residence are the most realistic pathways. Which one is best depends on whether you already have a university admission, employer, or family tie in Argentina."
      },
      {
        question: "Is there an Indonesian community in Argentina?",
        answer: "Yes, though small (2,000-3,000). The Indonesian embassy in Buenos Aires and PPI Argentina (student association) are the best first points of contact. The broader Asian community in Belgrano provides cultural familiarity and grocery access."
      },
      {
        question: "Is Indonesian food available?",
        answer: "Limited restaurant options, but Asian supermarkets in Belgrano's Barrio Chino carry key ingredients (sambal, kecap manis, tempeh, rice, noodles, coconut products). Most Indonesians cook at home. The PPI community shares tips on sourcing ingredients."
      },
      {
        question: "Can Indonesians keep dual citizenship?",
        answer: "Indonesia does not generally permit dual citizenship for adults. Naturalizing as Argentine would require renouncing Indonesian citizenship. Many Indonesian residents maintain permanent residency without naturalizing. Consult Indonesian consular authorities before making citizenship decisions."
      }
    ],
    relatedResources: [
      {
        title: "Student Visa Guide",
        url: "/visas/student",
        description: "Most accessible pathway for Indonesians"
      },
      {
        title: "Work Visa Guide",
        url: "/visas/work",
        description: "Employer-sponsored options"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
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
    subtitle: "Visa-free entry, halal food access, and opportunities for Malaysians in Argentina",
    description: "Malaysia and Argentina have maintained diplomatic ties since 1967 and share growing trade in palm oil, electronics, and agriculture. Malaysian citizens enjoy visa-free entry for 90 days, making Argentina highly accessible. With a strong halal food infrastructure (Argentina is a major halal meat exporter), mosques, and an established Asian community, Malaysians find a surprisingly comfortable environment for relocation.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Malaysian citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The stay can be extended once for an additional 90 days at any Migraciones office.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Malaysian remote workers and freelancers. Malaysia is visa-free, so the digital nomad authorization is directly accessible. Allows 180 days (renewable). No Argentine income tax on foreign earnings during the DN period.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones required for local employment. Malaysian professionals in engineering, IT, trade, and halal food industry find opportunities.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Malaysia is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement. Standard third-country residency rules apply. Malaysia and Argentina cooperate in palm oil trade, agriculture, and G77 forums.",
      benefits: [
        "Visa-free entry for 90 days",
        "Digital Nomad Visa directly accessible",
        "2-year path to citizenship",
        "Halal food widely available (Argentina is a major halal meat exporter)",
        "Mosques and Islamic centers in Buenos Aires",
        "Established Asian community in Belgrano"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of Good Conduct from Royal Malaysia Police (PDRM), authenticated by Ministry of Foreign Affairs and apostilled."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina",
        "Proof of financial means (bank statements)",
        "Health insurance valid in Argentina"
      ]
    },
    practicalInfo: {
      currencyExchange: "Malaysian ringgit (MYR) can be exchanged at Buenos Aires currency exchanges, though USD gets significantly better rates. Wise is reliable for MYR-to-ARS transfers. Maybank and CIMB do not have direct correspondent relationships with Argentine banks.",
      banking: "Malaysian citizens can open Argentine bank accounts with residency documentation. Start with fintech apps (Ualá, Mercado Pago) using a passport and Argentine phone number. For ongoing transfers, Wise offers the best MYR-ARS conversion rates.",
      taxTreaty: false,
      taxTreatyDetails: "No tax treaty between Malaysia and Argentina. Digital Nomad Visa holders are exempt from Argentine income tax on foreign earnings. Other visa holders become tax residents after 183+ days.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "2,000-3,000 (growing, particularly students and professionals)",
      mainLocations: [
        "Buenos Aires (Belgrano, Palermo)",
        "La Plata (university students)",
        "Córdoba"
      ],
      associations: [
        { name: "Malaysian Community Argentina" },
        { name: "Embassy of Malaysia in Buenos Aires" },
        { name: "Asian-Argentine Cultural Association" }
      ],
      facebookGroups: [
        "Malaysians in Argentina",
        "Rakyat Malaysia di Argentina",
        "Malaysian Students in Argentina",
        "Asian Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa (for remote workers) or Temporary Residency (after visa-free entry)",
      timeline: "Enter visa-free immediately. Digital Nomad allows 180+180 days. Residency card issued 60-90 days after application. Citizenship eligibility after 2 years.",
      steps: [
        "Enter Argentina visa-free with Malaysian passport (90 days)",
        "Within 90 days, choose residency pathway: Digital Nomad, Rentista, Work, or Student",
        "Submit apostilled documents at Migraciones (book turno online)",
        "Provide certified Spanish translations (traductor público)",
        "Pay processing fee ($200-400 USD)",
        "Receive precaria (temporary authorization)",
        "Collect residency card (DNI extranjero) within 60-90 days",
        "After 2 years of continuous legal residence, apply for citizenship if desired"
      ],
      tips: [
        "Get Certificate of Good Conduct from PDRM and apostille before leaving Malaysia",
        "Halal food is readily available — Argentina exports halal beef globally and Buenos Aires has halal butchers",
        "The King Fahd Islamic Cultural Center in Palermo serves the Muslim community with Friday prayers",
        "Barrio Chino in Belgrano has Asian supermarkets with Malaysian ingredients",
        "IMPORTANT: Malaysia does NOT allow dual citizenship. Acquiring Argentine citizenship requires renouncing Malaysian citizenship. Many Malaysians maintain permanent residency without naturalizing.",
        "Budget $1,200-2,000 USD monthly for comfortable living in Buenos Aires",
        "Learn Spanish before arrival — it accelerates integration significantly"
      ]
    },
    faqs: [
      {
        question: "Do Malaysian citizens need a visa for Argentina?",
        answer: "No! Malaysian citizens enter visa-free for 90 days with a valid passport. No reciprocity fee. This makes Argentina very accessible for Malaysians."
      },
      {
        question: "Is halal food available?",
        answer: "Yes, extensively. Argentina is one of the world's largest halal meat exporters — certified halal beef is widely available. Buenos Aires has halal butchers, Middle Eastern restaurants, and the King Fahd Islamic Cultural Center. Asian supermarkets in Belgrano carry Malaysian ingredients."
      },
      {
        question: "Can Malaysians use the Digital Nomad Visa?",
        answer: "Yes! Malaysia is visa-free, so the Digital Nomad Visa is directly accessible. It allows 180 days (renewable for another 180) with no Argentine income tax on foreign earnings. Show $1,500+/month income from a foreign employer or clients."
      },
      {
        question: "Are there mosques in Argentina?",
        answer: "Yes. The King Fahd Islamic Cultural Center in Palermo is one of the largest mosques in Latin America. The Centro Islámico de la República Argentina and smaller prayer rooms serve the Muslim community. Friday prayers are well-attended."
      },
      {
        question: "Can I get Argentine citizenship?",
        answer: "Technically yes, after 2 years of legal residency. However, Malaysia does NOT allow dual citizenship. Acquiring Argentine citizenship requires renouncing your Malaysian passport. Most Malaysians maintain permanent residency instead, which provides full rights to live and work without affecting citizenship."
      },
      {
        question: "What is the cost of living compared to Malaysia?",
        answer: "Buenos Aires is comparable to or slightly higher than Kuala Lumpur for rent, but significantly cheaper for healthcare, education, and some services. Budget RM 5,000-9,000 ($1,200-2,000 USD) monthly for comfortable living. The exchange rate makes dollar/ringgit earnings go far in Argentina."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Best pathway for Malaysian remote workers"
      },
      {
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Standard residency process"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget comparison for Malaysians"
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
    subtitle: "Visa-free entry, investment opportunities, and lifestyle diversification for Singaporeans",
    description: "Singapore and Argentina maintain strong trade relations, with Singapore serving as a gateway for Argentine agricultural exports to Southeast Asia. Singaporean citizens enjoy visa-free entry and find Argentina attractive for investment diversification, lifestyle change, and the fast citizenship pathway. With one of the world's strongest passports, Singaporeans navigating immigration is straightforward — the main decision is which residency category fits best.",
    region: "asia",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Singaporean citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The stay can be extended once for an additional 90 days at any Migraciones office.",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Available for Singaporean remote workers and digital entrepreneurs. Singapore is visa-free, so the digital nomad authorization is directly accessible. Useful for those managing Singapore businesses remotely.",
        incomeRequirement: "$1,500+ USD/month"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship required for local employment. Most Singaporeans in Argentina are entrepreneurs, investors, or remote workers rather than locally employed.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Singapore is not a Mercosur member or associate state"
      }
    },
    specialAgreements: {
      hasAgreement: false,
      type: "None",
      description: "No special bilateral immigration agreement. Standard residency rules apply. Singapore and Argentina cooperate in trade, agriculture, and fintech. Singapore's strong passport (visa-free access to 190+ countries) makes Argentine residency a complement rather than a necessity for global mobility.",
      benefits: [
        "Visa-free entry for 90 days",
        "Digital Nomad Visa directly accessible",
        "Investment Visa pathway (Decreto 524/2025, $500K minimum)",
        "2-year path to citizenship (among the world's fastest)",
        "Argentine passport provides South American mobility",
        "Low cost of living relative to Singapore"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Certificate of Clearance from Singapore Police Force, apostilled by the Singapore Academy of Law."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina (rental contract or property deed)",
        "Proof of financial means (bank statements, investment portfolio, or income documentation)",
        "Health insurance valid in Argentina",
        "Investment documentation (for Investment Visa applicants)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Singapore dollar (SGD) is easily exchanged in Buenos Aires due to its strength and stability. USD is preferred and SGD converts readily at most cambios. Wise is excellent for SGD-to-ARS transfers with competitive rates. DBS and OCBC have correspondent relationships with international banks operating in Argentina.",
      banking: "Singaporean citizens can open Argentine bank accounts with temporary residency. Major international banks present in both countries (HSBC, Standard Chartered) may facilitate cross-border banking. Start with Ualá or Mercado Pago immediately. For investment-level transfers, use SWIFT through major banks. April 2026 crypto banking regulations provide additional options.",
      taxTreaty: false,
      taxTreatyDetails: "No formal tax treaty between Singapore and Argentina. Singapore has no capital gains tax and low income tax, making the transition planning important. Digital Nomad Visa holders are exempt from Argentine income tax on foreign earnings. Consult a cross-border tax advisor experienced with Singapore-LATAM structures.",
      dualCitizenshipAllowed: false
    },
    communityInfo: {
      populationInArgentina: "1,000-2,000 (small but well-connected)",
      mainLocations: [
        "Buenos Aires (Puerto Madero, Palermo, Recoleta)",
        "Mendoza (wine investment)",
        "Patagonia (tourism/lifestyle)"
      ],
      associations: [
        { name: "Singapore Business Federation (international chapters)" },
        { name: "Asian-Argentine Cultural Association" },
        { name: "Southeast Asian Community Buenos Aires" }
      ],
      facebookGroups: [
        "Singaporeans in Argentina",
        "Singapore Expats South America",
        "Asian Community Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Investment Visa (for investors), Rentista Visa (for passive income), or Digital Nomad Visa (for remote workers)",
      timeline: "Enter visa-free immediately. Investment Visa gets expedited processing (30-60 days). Standard residency takes 60-90 days. Citizenship eligibility after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina visa-free with Singapore passport (90 days)",
        "Explore opportunities and consult local advisors (real estate, wine, agriculture, tech)",
        "Choose residency pathway: Investment ($500K+ for expedited processing), Rentista (passive income $2,000+/month), Digital Nomad, or other",
        "Engage a registered immigration attorney (abogado de migraciones) if pursuing investment route",
        "Submit apostilled documents at Migraciones (book turno online)",
        "Provide certified Spanish translations (traductor público)",
        "Receive precaria (temporary authorization)",
        "Collect residency card (DNI extranjero)",
        "After 2 years, evaluate citizenship if desired (note: Singapore does not allow dual citizenship)"
      ],
      tips: [
        "Get Certificate of Clearance from SPF and apostille through SAL before traveling",
        "CRITICAL: Singapore does NOT allow dual citizenship. Acquiring Argentine citizenship requires renouncing Singapore citizenship and your Singapore passport. Most Singaporeans maintain permanent residency without naturalizing.",
        "Argentine permanent residency provides full rights (live, work, own property, access healthcare) without affecting citizenship",
        "Wine industry investment in Mendoza is popular among Asian investors — vineyards from $500K",
        "Buenos Aires real estate offers good value: premium apartments in Puerto Madero from $150,000-500,000",
        "The cost-of-living differential is dramatic — a $3,000/month lifestyle in Buenos Aires would cost $8,000+ in Singapore",
        "Argentine beef, wine, and food culture is a major lifestyle draw",
        "Learn Spanish — it transforms the experience from tourist to resident"
      ]
    },
    faqs: [
      {
        question: "Do Singaporean citizens need a visa for Argentina?",
        answer: "No, Singaporeans enter visa-free for 90 days. With one of the world's strongest passports, Argentine immigration is frictionless. No reciprocity fee, no advance paperwork."
      },
      {
        question: "What investment opportunities exist?",
        answer: "Argentina offers attractive opportunities: Buenos Aires real estate (premium apartments from $150K-500K, significant value compared to Singapore), Mendoza vineyards and wine production, agricultural land (soybean, cattle), tech startups, and lithium mining. The Investment Visa (Decreto 524/2025) requires $500K minimum in energy, agriculture, tech, or tourism."
      },
      {
        question: "Can I get Argentine citizenship?",
        answer: "Technically yes, after 2 years. However, Singapore strictly prohibits dual citizenship — you would need to renounce your Singapore passport. For most Singaporeans, permanent residency (without citizenship) is the better choice, providing full rights to live, work, and invest without affecting your Singapore status."
      },
      {
        question: "How does the cost of living compare to Singapore?",
        answer: "Dramatically lower. A premium Buenos Aires lifestyle costs $3,000-5,000 USD/month, compared to $8,000-15,000+ for equivalent quality in Singapore. Rent is 50-70% cheaper, dining out 60-70% less, and private healthcare costs a fraction. This makes Argentina attractive for lifestyle optimization and savings."
      },
      {
        question: "Can I manage my Singapore business remotely?",
        answer: "Yes. The Digital Nomad Visa specifically allows this — work remotely for a foreign company while living in Argentina. Time zone difference (Singapore is GMT+8, Argentina is GMT-3) means an 11-hour offset. Many manage this with morning/evening overlap hours. Reliable internet (50-300 Mbps in Buenos Aires) supports remote work."
      },
      {
        question: "Are there Asian restaurants and groceries?",
        answer: "Yes, Buenos Aires' Barrio Chino (Chinatown) in Belgrano has Asian supermarkets, Chinese/Japanese/Korean restaurants, and select Southeast Asian ingredients. Thai and Vietnamese restaurants are growing. For specific Singaporean ingredients, online specialty stores and the Asian community help source harder-to-find items."
      }
    ],
    relatedResources: [
      {
        title: "Investment Visa Guide",
        url: "/visas/investment",
        description: "CBI pathway for Singaporean investors"
      },
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "For remote work management"
      },
      {
        title: "Rentista Visa Guide",
        url: "/visas/rentista",
        description: "For passive income from investments"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Detailed cost comparison with Singapore"
      },
      {
        title: "Best Neighborhoods Buenos Aires",
        url: "/blog/best-neighborhoods-expats-buenos-aires",
        description: "Where premium expats live"
      }
    ],
    image: "/images/nationalities/singapore.webp"
  }
];
