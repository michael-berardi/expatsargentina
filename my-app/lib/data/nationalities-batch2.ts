// ============================================================================
// BATCH 2: Additional Nationalities (Austria)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch2: Nationality[] = [
  {
    slug: "austria",
    name: "Austria",
    demonym: "Austrian",
    flag: "🇦🇹",
    title: "Austrian Citizens in Argentina: Immigration Guide",
    subtitle: "Visa-free entry, cultural connections, and immigration pathways for Austrians",
    description: "Austria and Argentina share deep cultural connections — particularly in music, arts, and Alpine sports. The Austrian community in Argentina dates back to the 19th century, and Buenos Aires hosts several Austrian cultural institutions. Austrian citizens enjoy visa-free entry for 90 days and find straightforward pathways to residency and citizenship. Argentina's Patagonian ski towns and Buenos Aires' classical music scene provide familiar cultural touchpoints.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Austrian citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The stay can be extended once for an additional 90 days at any Migraciones office ($50 USD fee).",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent option for Austrian remote workers, freelancers, and digital professionals. Austria is visa-free, so the digital nomad authorization is directly accessible. Allows 180 days (renewable for another 180). No Argentine income tax on foreign earnings during the DN period.",
        incomeRequirement: "$1,500+ USD/month (approximately €1,400+)"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones required for local employment. Austrian professionals in engineering, tourism, hospitality, and music/arts find opportunities.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Austria is not a Mercosur member or associate state. Standard third-country residency rules apply."
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special bilateral immigration agreement. Standard third-country residency process applies. Austria and Argentina maintain strong diplomatic, cultural, and economic relations. Austrian investment in Argentine industry and agriculture has historical roots.",
      benefits: [
        "Visa-free entry for 90 days — no advance paperwork",
        "Digital Nomad Visa directly accessible",
        "2-year path to citizenship (Decreto 366/2025)",
        "Strong cultural connections through classical music, Alpine sports, and culinary traditions",
        "Historical Austrian community and cultural institutions in Buenos Aires"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Strafregisterbescheinigung (Criminal Record Certificate) from Austrian Ministry of Justice, apostilled by the relevant Austrian authority. Can be requested online through oesterreich.gv.at."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina (rental contract or hotel booking)",
        "Proof of financial means (bank statements or income documentation)",
        "Health insurance valid in Argentina (private prepaga recommended: $50-300 USD/month)",
        "Marriage certificate with apostille (if applicable)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros (EUR) are easily exchanged in Buenos Aires at favorable rates. Wise and Revolut are popular among European expats for EUR-to-ARS transfers with competitive rates. The blue dollar rate has converged with the official rate (within 5-10% as of 2026). Austrian bank transfers via SEPA to Wise, then conversion to ARS, is the most efficient method.",
      banking: "Austrian citizens can open Argentine bank accounts with temporary residency (DNI extranjero). Start with fintech apps (Ualá, Mercado Pago, Brubank) immediately using passport. Erste Bank and Raiffeisen have correspondent relationships with some Argentine banks. HSBC and Santander operate in both countries.",
      taxTreaty: true,
      taxTreatyDetails: "Austria and Argentina have a bilateral tax treaty to prevent double taxation. Digital Nomad Visa holders are exempt from Argentine income tax on foreign earnings. Austrian tax obligations may continue depending on your residency status — consult an Austrian Steuerberater familiar with LATAM situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "3,000-5,000 Austrian citizens (plus descendants of historical Austrian immigration)",
      mainLocations: [
        "Buenos Aires (Palermo, Belgrano, Recoleta)",
        "Bariloche and Patagonian ski towns",
        "Mendoza (wine industry)",
        "Córdoba"
      ],
      associations: [
        { name: "Austrian-Argentine Association (Asociación Austro-Argentina)" },
        { name: "Austrian Embassy in Buenos Aires" },
        { name: "Goethe-Institut Buenos Aires (German-language cultural programs)" }
      ],
      facebookGroups: [
        "Austrians in Buenos Aires",
        "Österreicher in Argentinien",
        "German-Speaking Expats Argentina",
        "European Expats Buenos Aires"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa (for remote workers) or Temporary Residency (after visa-free entry)",
      timeline: "Enter visa-free immediately. Digital Nomad Visa allows 180+180 days. Residency card (DNI extranjero) issued 60-90 days after application. Citizenship eligibility after 2 years of continuous legal residence (Decreto 366/2025).",
      steps: [
        "Enter Argentina visa-free with Austrian passport (90 days, extendable to 180)",
        "Within 90 days, choose residency pathway: Digital Nomad, Rentista, Work (employer-sponsored), or Student",
        "Submit apostilled documents at Dirección Nacional de Migraciones (book turno online at migraciones.gov.ar)",
        "Provide certified Spanish translations of all German-language documents (traductor público)",
        "Pay processing fee ($200-400 USD depending on category)",
        "Receive precaria (temporary authorization — allows legal stay and work while processing)",
        "Collect residency card (DNI extranjero) within 60-90 days",
        "After 2 years of continuous legal residence, apply for Argentine citizenship through the courts (juzgado federal)"
      ],
      tips: [
        "Get Strafregisterbescheinigung before leaving Austria — can be requested online through oesterreich.gv.at",
        "Austrian classical music connections are valued in Buenos Aires — one of the world's great opera and concert cities (Teatro Colón)",
        "Bariloche, San Martín de los Andes, and other Patagonian towns feel remarkably Alpine — skiing, hiking, chocolate, and architecture reminiscent of Austria",
        "Argentine wine culture in Mendoza pairs naturally with Austrian culinary appreciation",
        "The German-speaking expat community provides social connections — join Stammtisch gatherings",
        "Buenos Aires has excellent healthcare — private prepaga plans from $50-300 USD/month provide premium access",
        "Austrian pension (Pension) can be received in Argentina and qualifies you for the Pensionado visa",
        "Learn Spanish before arrival — while German/English work in some circles, daily life requires Spanish"
      ]
    },
    faqs: [
      {
        question: "Do Austrian citizens need a visa for Argentina?",
        answer: "No, Austrian citizens enter visa-free for 90 days. No reciprocity fee, no advance paperwork. The stay can be extended for an additional 90 days at any Migraciones office."
      },
      {
        question: "Can I use the Digital Nomad Visa?",
        answer: "Yes! Austria is visa-free, so the Digital Nomad Visa is directly accessible. It allows 180 days (renewable) with no Argentine income tax on foreign earnings. Show $1,500+/month (€1,400+) income from a foreign employer or clients."
      },
      {
        question: "How long to get Argentine citizenship?",
        answer: "2 years of continuous legal residency (Decreto 366/2025). Austria permits dual citizenship in certain cases — consult Austrian authorities about your specific situation, as Austrian law has restrictions on acquiring foreign citizenship. Many Austrians maintain permanent residency without naturalizing."
      },
      {
        question: "Is there an Austrian community in Argentina?",
        answer: "Yes, a community of 3,000-5,000 plus historical descendants. The Austrian-Argentine Association organizes cultural events. Bariloche and Patagonian ski towns have particularly strong Austrian/Germanic cultural presence with Alpine architecture, chocolate shops, and ski culture."
      },
      {
        question: "Can I receive my Austrian pension in Argentina?",
        answer: "Yes, Austrian pension (Pension) can be transferred to Argentina. This qualifies you for the Pensionado visa. The favorable exchange rate means Austrian pensions provide a very comfortable lifestyle — a €1,500/month pension offers premium living in Buenos Aires."
      },
      {
        question: "What is the cost of living compared to Austria?",
        answer: "Significantly lower. Buenos Aires costs roughly 40-60% less than Vienna. A comfortable lifestyle runs $1,500-2,500 USD/month (€1,400-2,300) — covering a nice apartment, dining out, private healthcare, and entertainment. Patagonian towns are slightly cheaper. Wine, beef, and dining are exceptional quality at much lower prices than Austria."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Best pathway for Austrian remote workers"
      },
      {
        title: "Pensionado Visa Guide",
        url: "/visas/pensionado",
        description: "For Austrian retirees with pension income"
      },
      {
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Standard residency process"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget comparison with Austria"
      }
    ],
    image: "/images/nationalities/austria.webp"
  }
];
