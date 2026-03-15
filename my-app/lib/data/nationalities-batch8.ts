// ============================================================================
// BATCH 8: Additional European Countries (Greece)
// ============================================================================

import { Nationality } from "./nationalities";

export const nationalitiesBatch8: Nationality[] = [
  {
    slug: "greece",
    name: "Greece",
    demonym: "Greek",
    flag: "🇬🇷",
    title: "Greek Citizens in Argentina: Complete Immigration Guide",
    subtitle: "Deep historical ties, established Greek community, and immigration pathways",
    description: "Greece and Argentina share one of the strongest bilateral relationships among Mediterranean-South American connections. Argentina's Greek community dates back to the mid-19th century, with significant immigration waves that established neighborhoods, churches, schools, and cultural institutions. Today, an estimated 30,000-50,000 people of Greek descent live in Argentina. Greek citizens enjoy visa-free entry and find a welcoming environment with Greek restaurants, Orthodox churches, and an active cultural community.",
    region: "europe",
    visaRequirements: {
      tourist: {
        duration: "90 days",
        notes: "Greek citizens enter Argentina visa-free for 90 days with a valid passport. No reciprocity fee. The stay can be extended once for an additional 90 days at any Migraciones office ($50 USD fee).",
        reciprocityFee: false,
        feeAmount: "$0"
      },
      digitalNomad: {
        eligible: true,
        notes: "Excellent option for Greek remote workers, freelancers, and digital professionals. Greece is visa-free, so the digital nomad authorization is directly accessible. Allows 180 days (renewable). No Argentine income tax on foreign earnings during the DN period.",
        incomeRequirement: "$1,500+ USD/month (approximately €1,400+)"
      },
      work: {
        eligible: true,
        notes: "Employer sponsorship through Migraciones required for local employment. Greek professionals in shipping, maritime, hospitality, food industry, and business find opportunities through community networks.",
        sponsorshipRequired: true
      },
      mercosur: {
        eligible: false,
        notes: "Greece is not a Mercosur member or associate state. Standard third-country residency rules apply."
      }
    },
    specialAgreements: {
      hasAgreement: false,
      description: "No special bilateral immigration agreement. Standard third-country residency process applies. However, Greece and Argentina have strong diplomatic, cultural, and economic ties. The established Greek community provides significant institutional support for newcomers.",
      benefits: [
        "Visa-free entry for 90 days — no advance paperwork",
        "Digital Nomad Visa directly accessible",
        "2-year path to citizenship (Decreto 366/2025)",
        "Large established Greek community with churches, schools, and cultural centers",
        "Greek restaurants and businesses throughout Buenos Aires",
        "Shared Mediterranean cultural values — family, food, hospitality"
      ]
    },
    documents: {
      passportValidity: "6 months beyond intended stay",
      criminalRecord: {
        required: true,
        apostille: true,
        notes: "Ποινικό Μητρώο (Penal Record Certificate) from Greek Ministry of Justice, apostilled by the Hague Apostille authority in Athens. Can be requested at the local court (Πρωτοδικείο) or through gov.gr."
      },
      birthCertificate: {
        required: true,
        apostille: true
      },
      additionalDocs: [
        "Proof of address in Argentina (rental contract or accommodation booking)",
        "Proof of financial means (bank statements or income documentation)",
        "Health insurance valid in Argentina (private prepaga recommended: $50-300 USD/month)",
        "Marriage certificate with apostille (if applicable)"
      ]
    },
    practicalInfo: {
      currencyExchange: "Euros (EUR) are easily exchanged in Buenos Aires at favorable rates. Wise and Revolut are popular for EUR-to-ARS transfers. Greek banks (National Bank of Greece, Alpha Bank, Eurobank) can initiate SEPA transfers to Wise for conversion. The blue dollar rate has converged with the official rate (within 5-10% as of 2026).",
      banking: "Greek citizens can open Argentine bank accounts with temporary residency (DNI extranjero). Start with fintech apps (Ualá, Mercado Pago) immediately using a passport. For ongoing EUR-ARS transfers, Wise offers the best rates. HSBC and Santander operate in both Greece and Argentina.",
      taxTreaty: true,
      taxTreatyDetails: "Greece and Argentina have bilateral tax cooperation agreements. Digital Nomad Visa holders are exempt from Argentine income tax on foreign earnings. Greek tax obligations may continue depending on your residency status in Greece — consult a Greek λογιστής familiar with international situations.",
      dualCitizenshipAllowed: true
    },
    communityInfo: {
      populationInArgentina: "10,000-15,000 Greek citizens (plus 30,000-50,000+ of Greek descent)",
      mainLocations: [
        "Buenos Aires (Liniers, Caballito, Flores, Palermo, Belgrano)",
        "Mar del Plata (significant Greek fishing community)",
        "Rosario",
        "Bahía Blanca",
        "Córdoba"
      ],
      associations: [
        { name: "Hellenic Society of Buenos Aires (Sociedad Helénica)" },
        { name: "Greek Orthodox Church of Buenos Aires" },
        { name: "Greek-Argentine Chamber of Commerce" },
        { name: "Hellenic Cultural Foundation" },
        { name: "Greek Community of Mar del Plata" }
      ],
      facebookGroups: [
        "Greeks in Buenos Aires",
        "Έλληνες στην Αργεντινή (Greeks in Argentina)",
        "Greek Community Argentina",
        "Hellenic Society Buenos Aires",
        "Greek-Argentine Cultural Exchange"
      ]
    },
    residencyPath: {
      easiestRoute: "Digital Nomad Visa (for remote workers) or Temporary Residency (after visa-free entry)",
      timeline: "Enter visa-free immediately. Digital Nomad Visa allows 180+180 days. Residency card issued 60-90 days after application. Citizenship eligibility after 2 years of continuous legal residence.",
      steps: [
        "Enter Argentina visa-free with Greek passport (90 days, extendable to 180)",
        "Within 90 days, choose residency pathway: Digital Nomad, Rentista, Work (employer-sponsored), or Student",
        "Submit apostilled documents at Dirección Nacional de Migraciones (book turno online at migraciones.gov.ar)",
        "Provide certified Spanish translations of all Greek-language documents (traductor público)",
        "Pay processing fee ($200-400 USD depending on category)",
        "Receive precaria (temporary authorization — allows legal stay and work while processing)",
        "Collect residency card (DNI extranjero) within 60-90 days",
        "After 2 years of continuous legal residence, apply for Argentine citizenship through the courts (juzgado federal)"
      ],
      tips: [
        "Get Ποινικό Μητρώο before leaving Greece — available through gov.gr or at the local Πρωτοδικείο",
        "The Greek community in Buenos Aires is very welcoming — contact the Hellenic Society immediately upon arrival",
        "Greek restaurants in Liniers and Caballito serve authentic cuisine (souvlaki, moussaka, baklava)",
        "Greek Orthodox churches hold regular services and community events — Catedral Ortodoxa Griega in BA",
        "Mar del Plata has a significant Greek fishing community — if maritime work interests you, this is the city",
        "Shared Mediterranean values (family-centered, food culture, late dinners, passionate conversation) mean Greeks integrate quickly",
        "Argentine wine and asado culture pairs naturally with Greek culinary appreciation",
        "Greek pension (σύνταξη) can be received in Argentina and qualifies for the Pensionado visa",
        "Learn Spanish before arrival — Greek and Spanish share some Latin-root vocabulary that helps"
      ]
    },
    faqs: [
      {
        question: "Do Greek citizens need a visa for Argentina?",
        answer: "No, Greek citizens enter visa-free for 90 days with a valid passport. No reciprocity fee. This makes Argentina very accessible for Greeks wanting to explore before committing to a move."
      },
      {
        question: "Is there a Greek community in Argentina?",
        answer: "Yes, one of the most established European communities in Argentina. An estimated 10,000-15,000 Greek citizens plus 30,000-50,000+ of Greek descent. The community has deep roots dating to the 19th century, with Greek churches, schools, restaurants, and the Hellenic Society. The Liniers neighborhood in Buenos Aires and Mar del Plata have the strongest concentrations."
      },
      {
        question: "Are there Greek Orthodox churches?",
        answer: "Yes, multiple Greek Orthodox churches in Buenos Aires, including the Catedral Ortodoxa Griega de la Santísima Trinidad. Services in Greek are held regularly. Mar del Plata, Rosario, and other cities also have Orthodox communities. Easter (Πάσχα) is celebrated communally with traditional services and lamb feasts."
      },
      {
        question: "Is Greek food available?",
        answer: "Yes, Buenos Aires has Greek restaurants and bakeries, particularly in Liniers and Caballito. Souvlaki, moussaka, spanakopita, and baklava are available. Olive oil, feta, and Mediterranean ingredients are accessible at specialty stores. Many Greeks also find Argentine food culture naturally compatible — grilled meats, shared meals, and good wine."
      },
      {
        question: "Can I receive my Greek pension in Argentina?",
        answer: "Yes, Greek pension (σύνταξη from ΕΦΚΑ/EFKA) can be transferred to Argentina. This qualifies you for the Pensionado visa. Given the favorable exchange rate, a Greek pension of €800-1,500/month provides a comfortable lifestyle in Buenos Aires. Healthcare through a private prepaga ($50-300/month) supplements the pension."
      },
      {
        question: "How long to get Argentine citizenship?",
        answer: "2 years of continuous legal residency (Decreto 366/2025). Greece allows dual citizenship, so you keep your Greek passport and EU citizenship while becoming Argentine. This combination provides global mobility — EU access through Greece plus South American access through Argentina."
      },
      {
        question: "What is the cost of living compared to Greece?",
        answer: "Comparable to or slightly lower than Athens. Buenos Aires costs roughly $1,500-2,500 USD/month (€1,400-2,300) for a comfortable lifestyle. Rent is similar to Athens but dining out and entertainment are often cheaper. Healthcare quality is excellent at lower prices. Wine and beef are world-class and affordable."
      },
      {
        question: "Do Greeks integrate well in Argentina?",
        answer: "Exceptionally well. Argentine and Greek cultures share core values: family centrality, food as social bonding, late dinners (Argentines eat at 9-10pm), passionate conversation, and warmth toward guests. Many Greeks report feeling culturally at home in Argentina faster than in Northern European countries. The existing community provides immediate social integration."
      }
    ],
    relatedResources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Best pathway for Greek remote workers"
      },
      {
        title: "Pensionado Visa Guide",
        url: "/visas/pensionado",
        description: "For Greek retirees with pension income"
      },
      {
        title: "Temporary Residency Guide",
        url: "/visas/temporary",
        description: "Standard residency process"
      },
      {
        title: "Cost of Living Guide",
        url: "/cost-of-living",
        description: "Budget comparison with Greece"
      },
      {
        title: "Best Neighborhoods Buenos Aires",
        url: "/blog/best-neighborhoods-expats-buenos-aires",
        description: "Where Greek expats live"
      }
    ],
    image: "/images/nationalities/greece.webp"
  },
];
