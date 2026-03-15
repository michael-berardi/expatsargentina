import { applyFactOverridesBySlug } from "../source-of-truth-sync";
import { visaTypesFactOverrides } from "../../content-sync/generated/source-of-truth-fact-overrides";

// ============================================================================
// PSEO Data: Visa Types for Visa × Nationality Matrix
// ============================================================================

export interface VisaType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  whoIsItFor: string[];
  requirements: {
    income?: string;
    employment?: string;
    investment?: string;
    other?: string[];
  };
  processingTime: string;
  duration: string;
  renewability: string;
  pathToCitizenship: string;
  documents: string[];
  costs: {
    governmentFee: string;
    legalFees?: string;
    totalEstimate: string;
  };
  pros: string[];
  cons: string[];
  faqs: { q: string; a: string }[];
}

export const visaTypesBase: VisaType[] = [
  {
    slug: "digital-nomad",
    name: "Digital Nomad Visa (Visa Nómada Digital)",
    shortName: "Digital Nomad",
    description: "Argentina's Digital Nomad Visa is a transitory authorization for remote workers employed by foreign companies, allowing them to live in Argentina legally for up to 180 days while working remotely. It is not a standard residency permit — think of it as an official short-stay framework for remote work, not a full immigration pathway. Argentina ranks as the #3 most popular destination for digital nomads worldwide in 2026, with 72,000+ having moved here since 2022.",
    whoIsItFor: [
      "Remote workers employed by foreign companies",
      "Freelancers with international clients",
      "Digital entrepreneurs with online businesses",
      "Consultants working remotely",
      "Software developers, designers, marketers working remotely",
      "Content creators and online educators",
      "Anyone who works remotely and wants to test Argentina before committing to full residency"
    ],
    requirements: {
      income: "Proof of regular remote income (no fixed minimum published, but $1,500-2,500 USD/month recommended for strong applications)",
      employment: "Contract or proof of remote employment/freelance work with non-Argentine company or clients",
      other: [
        "Valid passport from a visa-free country (your nationality must qualify for visa-free tourist entry to Argentina)",
        "Health insurance with Argentina coverage for the full duration of stay",
        "Clean criminal record certificate (apostilled and translated to Spanish)",
        "Proof of accommodation in Argentina (rental contract, hotel booking, or hosted letter)",
        "Passport-style photos meeting Argentine specifications"
      ]
    },
    processingTime: "10-45 business days (varies by application channel and volume; some processed in under 2 weeks, others delayed)",
    duration: "180 days (6 months), renewable once for an additional 180 days (total maximum: 1 year)",
    renewability: "Renewable once for an additional 180 days. After that, you must leave or apply for a different residency category.",
    pathToCitizenship: "Does not directly count toward citizenship. The digital nomad authorization is a separate track from the standard temporary-residency-to-permanent-residency pipeline. To pursue citizenship, you would need to apply separately for temporary residency (work, rentista, or another qualifying category), hold that for 2 consecutive years (per Decreto 366/2025), then apply for citizenship through the courts.",
    documents: [
      "Valid passport (must support visa-free tourist entry to Argentina)",
      "Proof of remote employment or freelance contracts with foreign entities",
      "Bank statements (3-6 months) showing regular income deposits",
      "Health insurance policy covering Argentina for the full stay",
      "Criminal background check (apostilled; translated to Spanish by certified translator)",
      "Birth certificate (apostilled; some applications may require this)",
      "Passport-style photos (4x4cm, white background)",
      "Proof of address in Argentina (rental contract, hotel booking, or sworn letter from host)",
      "Completed application form via the current official portal"
    ],
    costs: {
      governmentFee: "$117 USD (application fee; subject to change)",
      legalFees: "$500-1,500 USD (optional — process is manageable without a lawyer for straightforward cases)",
      totalEstimate: "$600-2,000 USD (including apostilles, translations, insurance, and application fee)"
    },
    pros: [
      "Designed specifically for remote workers — cleaner compliance story than working on a tourist visa",
      "No need for local employer sponsorship",
      "Can work legally for foreign companies and clients",
      "Relatively fast processing (as quick as 10 business days)",
      "Good way to test Argentina for 6-12 months before committing to full residency",
      "Access to some banking and services (though limited compared to full residents)",
      "Can open fintech accounts (Ualá, MercadoPago) with passport"
    ],
    cons: [
      "Maximum 360 days total — not a long-term solution",
      "Only available to passport holders from visa-free countries",
      "Does not provide a DNI (national identity document) — limits access to some services, leases, and banking",
      "Cannot work for Argentine employers or Argentine clients",
      "Does not count toward permanent residency or citizenship timeline",
      "Health insurance must be maintained for the full stay",
      "Income requirements must be documented and ongoing"
    ],
    faqs: [
      {
        q: "Can I work for an Argentine company with this visa?",
        a: "No. The Digital Nomad Visa is exclusively for remote work for foreign companies and clients. If you want to work for an Argentine employer, you need a Work Visa with employer sponsorship. Working locally on a digital nomad authorization is a violation."
      },
      {
        q: "What happens if I lose my remote job while on this visa?",
        a: "You need to find new remote employment or switch to another visa category (tourist, student, or apply for temporary residency if you qualify). The digital nomad authorization is conditional on ongoing remote work for foreign income."
      },
      {
        q: "Can I bring my family?",
        a: "Family members would need their own visa applications. There is no automatic family reunification under the digital nomad track. Spouses and children can enter as tourists (90 days) or apply for their own digital nomad authorization if they qualify independently."
      },
      {
        q: "Do I get a DNI with this visa?",
        a: "No. The digital nomad authorization does not issue a DNI (Documento Nacional de Identidad). Without a DNI, you may have difficulty opening traditional bank accounts, signing long-term leases, or accessing certain services that require one. Workarounds include fintech apps (MercadoPago, Ualá), temporary rentals, and international payment tools."
      },
      {
        q: "Can I apply from inside Argentina?",
        a: "Follow the current official guidance. The cleanest path is to apply through the designated portal or consulate before arrival. Do not assume you can always enter as a tourist first and convert later without friction — the digital nomad track has its own handling separate from standard residency conversion."
      },
      {
        q: "What's the difference between this and just staying as a tourist?",
        a: "Tourists technically cannot work (even remotely) in Argentina. The digital nomad visa provides legal authorization for remote work, which matters for compliance, insurance claims, and avoiding potential issues at the border when re-entering. It also provides a cleaner paper trail for banks and landlords."
      },
      {
        q: "Is my nationality eligible?",
        a: "The digital nomad route is generally tied to nationals who qualify for visa-free tourist entry to Argentina. If your passport normally requires a tourist visa, this is likely not your route — look at work, student, or rentista residency categories instead."
      }
    ]
  },

  {
    slug: "rentista",
    name: "Rentista Visa (Residency for Passive Income)",
    shortName: "Rentista",
    description: "The Rentista Visa is for individuals with stable passive income from sources outside Argentina — rental income, dividends, pensions, investment returns, royalties, or other recurring revenue streams. Unlike the Digital Nomad Visa, the Rentista provides full temporary residency with a DNI, work authorization, and a direct path to permanent residency and citizenship. It's the most popular pathway for financially independent expats, early retirees, and anyone with reliable foreign income who wants to settle long-term.",
    whoIsItFor: [
      "Retirees with pension or social security income",
      "Property owners with rental income from abroad",
      "Investors receiving dividends, interest, or capital distributions",
      "People with trust fund or annuity income",
      "Royalty and licensing income recipients (authors, musicians, patent holders)",
      "Early retirees living on investment portfolios",
      "Anyone with stable, documented passive income from outside Argentina"
    ],
    requirements: {
      income: "Proof of minimum ~$2,000 USD monthly passive income (threshold can vary — stronger applications show $2,500+ consistently). Income must be from passive, non-employment sources.",
      other: [
        "Income must be demonstrably passive (not active employment)",
        "Income must be stable, recurring, and documented over at least 6-12 months",
        "Valid passport with 6+ months validity",
        "Clean criminal record (apostilled and translated to Spanish)",
        "Birth certificate (apostilled)",
        "Proof of address in Argentina",
        "Health insurance covering Argentina"
      ]
    },
    processingTime: "60-90 days for initial approval. Precaria (provisional residency and work authorization) issued earlier in the process. Full DNI: additional 1-3 months.",
    duration: "1 year temporary residency (renewable annually)",
    renewability: "Renewable annually as long as qualifying passive income continues. After 2-3 years of temporary residency, eligible to convert to permanent residency.",
    pathToCitizenship: "After 2 consecutive years of legal residency (per Decreto 366/2025), can apply for citizenship through the courts. The Rentista visa provides one of the cleanest paths from financial independence to Argentine citizenship.",
    documents: [
      "Valid passport",
      "Proof of passive income — bank statements (6-12 months) showing regular deposits",
      "Documentation of income source: property deeds, lease agreements, investment account statements, pension award letters, royalty contracts, dividend statements, trust distribution records",
      "Criminal background check (apostilled and translated to Spanish)",
      "Birth certificate (apostilled)",
      "Passport-style photos (4x4cm, white background)",
      "Proof of address in Argentina (rental contract, utility bill, or certificado de domicilio)",
      "Health insurance policy covering Argentina",
      "Completed application form"
    ],
    costs: {
      governmentFee: "$250 USD",
      legalFees: "$800-2,000 USD (recommended — income documentation requirements benefit from legal guidance)",
      totalEstimate: "$1,050-2,250 USD (plus apostille, translation, and insurance costs)"
    },
    pros: [
      "No employment or employer sponsorship needed",
      "Full residency with DNI — unlocks banking, leases, tax ID, all services",
      "Can work in Argentina if you choose — no employment restrictions",
      "Can start a business or freelance alongside passive income",
      "Direct path to permanent residency and citizenship",
      "Flexible — your income comes from abroad, you live in Argentina",
      "Excellent for early retirees and financially independent individuals",
      "2-year citizenship pathway once residency is established"
    ],
    cons: [
      "Must prove ongoing passive income at each renewal",
      "Income documentation requirements can be complex (especially for investment income)",
      "Income threshold (~$2,000 USD/month) higher than some other visa categories",
      "Active employment income does NOT qualify — must be genuinely passive",
      "Annual renewal required until permanent residency is granted",
      "Becoming tax resident in Argentina (after 12 months) means worldwide income is taxed at 9-35%"
    ],
    faqs: [
      {
        q: "Can I work in Argentina with a Rentista Visa?",
        a: "Yes. Unlike the Digital Nomad Visa, the Rentista provides full residency with a DNI and no employment restrictions. You can work for Argentine employers, start a business, freelance, or simply live on your passive income. The only requirement is that your qualifying income remains passive for visa renewal purposes."
      },
      {
        q: "What counts as passive income?",
        a: "Rental income from property, dividends from investments, interest from savings/bonds, pension and social security payments, royalties from intellectual property, licensing fees, trust distributions, annuity payments, and structured settlement payments. Employment salaries, freelance fees, and active business income do NOT qualify — though you can earn these in addition to your passive income once you have the visa."
      },
      {
        q: "How do I prove my income?",
        a: "Bank statements showing regular deposits over 6-12 months are the core evidence. Support these with source documentation: property deeds and rental agreements for rental income, brokerage statements for dividends, pension award letters for retirement income, etc. All documents should be apostilled and translated to Spanish. A good immigration lawyer can advise on the strongest way to present your specific income sources."
      },
      {
        q: "What are the tax implications?",
        a: "If you spend 12+ months in Argentina, you become a tax resident and are subject to Argentine income tax on worldwide income (rates from 9% to 35%). You may also be subject to a Personal Asset Tax (0.5-1.25% on worldwide assets). However, many countries have tax treaties with Argentina that prevent double taxation. Consult an Argentine accountant (contador) before your residency to understand your specific situation."
      },
      {
        q: "Can I combine multiple passive income sources?",
        a: "Yes. You can combine rental income + dividends + pension payments to meet the threshold. What matters is that the total is stable and documented. Immigration authorities want to see that you can support yourself without needing to work in Argentina."
      }
    ]
  },

  {
    slug: "pensionado",
    name: "Pensionado Visa (Retirement Visa)",
    shortName: "Pensionado",
    description: "The Pensionado Visa is specifically designed for retirees receiving pension income from their home country. It's a subset of the Rentista category optimized for retirees with lower income thresholds and simpler documentation. Argentina is one of the most attractive retirement destinations in South America — excellent healthcare at a fraction of US/European costs, a rich cultural life, and a comfortable lifestyle achievable on a modest pension.",
    whoIsItFor: [
      "Retirees receiving government pensions (Social Security, state pensions, etc.)",
      "Recipients of private company pension plans",
      "Military or government service retirees",
      "Those receiving structured retirement distributions (401k, RRIF, superannuation — if documented as regular pension payments)",
      "Early retirees with qualifying pension income",
      "Anyone with verifiable, ongoing pension income from abroad"
    ],
    requirements: {
      income: "Proof of minimum $1,000-1,500 USD monthly pension income (lower threshold than the general Rentista visa). Official pension documentation from the issuing authority is essential.",
      other: [
        "Official pension award letter or benefit statement from the issuing government/employer",
        "Pension must be ongoing and verifiable (not a lump-sum distribution)",
        "Valid passport with 6+ months validity",
        "Clean criminal record (apostilled and translated to Spanish)",
        "Birth certificate (apostilled)",
        "Proof of address in Argentina",
        "Health insurance valid in Argentina (critical for retirees — Argentine public healthcare exists but private coverage recommended)"
      ]
    },
    processingTime: "60-90 days for initial approval. Precaria issued earlier for provisional status. Full DNI processing: additional 1-3 months.",
    duration: "1 year temporary residency (renewable annually)",
    renewability: "Renewable annually with continued pension documentation. Convert to permanent residency after 2-3 years.",
    pathToCitizenship: "After 2 consecutive years of legal residency (per Decreto 366/2025), eligible for citizenship through the courts. The Pensionado pathway provides a clear, low-stress route to Argentine citizenship for retirees.",
    documents: [
      "Valid passport",
      "Official pension documentation (award letter, benefit statement) from issuing authority",
      "Bank statements (6 months) showing regular pension deposits",
      "Criminal background check (apostilled and translated to Spanish)",
      "Birth certificate (apostilled)",
      "Marriage certificate if applicable (apostilled — useful for spousal benefits and family reunification)",
      "Passport-style photos (4x4cm, white background)",
      "Proof of address in Argentina",
      "Health insurance policy covering Argentina",
      "Completed application form"
    ],
    costs: {
      governmentFee: "$250 USD",
      legalFees: "$800-2,000 USD (recommended for first-time applicants)",
      totalEstimate: "$1,050-2,250 USD (plus apostille, translation, and insurance costs)"
    },
    pros: [
      "Lower income threshold than general Rentista ($1,000-1,500 vs $2,000+)",
      "Designed specifically for retirees — straightforward documentation",
      "Full residency with DNI — banking, leases, healthcare access",
      "Can work part-time or start a business if desired — no employment restrictions",
      "Excellent healthcare access — prepaga plans from $50-300/month (a fraction of US costs)",
      "Argentine retiree benefits and cultural programs",
      "Path to permanent residency and citizenship",
      "Very comfortable lifestyle on $1,500-2,500/month pension",
      "Rich cultural life — theater, museums, dining — at affordable prices"
    ],
    cons: [
      "Must have verifiable, ongoing pension income (not just savings)",
      "Pension documentation must be official and apostilled",
      "Annual renewal required until permanent residency is granted",
      "Healthcare: emergency room access remains free for everyone, but Decreto 366/2025 may restrict routine public hospital access for non-permanent residents — private insurance (prepaga) strongly recommended",
      "Language barrier — fewer retiree-specific English-language services outside Buenos Aires",
      "Argentine bureaucracy can be frustrating (patience required)",
      "Tax residency kicks in after 12 months — worldwide income subject to 9-35% tax"
    ],
    faqs: [
      {
        q: "What if I have pension plus other income?",
        a: "If your pension alone meets the minimum threshold ($1,000-1,500 USD/month), you qualify under the Pensionado route. Additional income (Social Security + private pension, for example) strengthens your application. If pension alone doesn't meet the threshold, you can apply under the general Rentista visa and combine pension with other passive income sources."
      },
      {
        q: "Can I work part-time as a retiree?",
        a: "Yes. The Pensionado Visa provides full residency with no employment restrictions. You can work part-time, consult, teach English, start a small business, or do anything else — there are no limits on what you can do beyond your pension income."
      },
      {
        q: "Does my US Social Security qualify?",
        a: "Yes. US Social Security payments are one of the most common qualifying income sources for the Pensionado Visa. Provide your Social Security award letter (SSA-1099 or benefit verification letter) as documentation. The US and Argentina do not have a social security totalization agreement, so your benefit amounts are not affected by living in Argentina."
      },
      {
        q: "What about healthcare as a retiree?",
        a: "Private healthcare (prepaga) is strongly recommended. Plans from OSDE, Swiss Medical, or Galeno cost $100-300/month and cover doctor visits, specialists, hospitalization, and prescription drugs. Quality is high, especially in Buenos Aires. Public hospitals provide emergency care for everyone, but routine care may have restrictions for non-permanent residents under current policy. A decent prepaga plan costs less per month than many US Medicare supplement plans."
      },
      {
        q: "Where do most retirees live?",
        a: "Buenos Aires (Recoleta, Belgrano, Palermo) is most popular for the infrastructure, culture, and English-speaking medical care. Mendoza attracts wine lovers and outdoor enthusiasts. Córdoba offers lower costs with good healthcare. Bariloche appeals to nature lovers. Mar del Plata provides beach living. Many retirees spend their first year in Buenos Aires to get established, then explore provincial options."
      }
    ]
  },

  {
    slug: "work",
    name: "Work Visa (Visa de Trabajo)",
    shortName: "Work",
    description: "The standard Work Visa requires sponsorship from a registered Argentine employer. This is the traditional employment-based immigration pathway for professionals hired by Argentine companies, intra-company transfers, or skilled workers in high-demand fields. It provides full residency with a DNI and a direct path to citizenship.",
    whoIsItFor: [
      "Professionals with job offers from Argentine companies",
      "Intra-company transferees (multinational companies moving employees to Argentine offices)",
      "Skilled workers in high-demand fields (tech, engineering, healthcare, education)",
      "Teachers and educators at Argentine institutions",
      "Healthcare professionals (doctors, nurses, specialists)",
      "Executives and managers of Argentine subsidiaries",
      "Anyone with a confirmed Argentine employer willing to sponsor"
    ],
    requirements: {
      employment: "Valid job offer and formal sponsorship from a registered Argentine employer in good standing with ARCA (tax authority)",
      other: [
        "Signed employment contract (contrato de trabajo) with Argentine entity",
        "Employer must be registered with ARCA and in good standing",
        "The position must be legitimate and the employer must demonstrate why a foreign worker is needed",
        "Valid passport with 6+ months validity",
        "Clean criminal record (apostilled and translated to Spanish)",
        "Proof of qualifications/education (degrees, certificates — apostilled and translated)",
        "For regulated professions (medicine, law, engineering, architecture): credential recognition through the relevant Argentine professional body is required before starting work"
      ]
    },
    processingTime: "30-60 days for initial approval. Full DNI processing: additional 1-3 months. Precaria (provisional work authorization) issued shortly after filing.",
    duration: "1 year temporary residency (renewable annually for up to 3 years, then convert to permanent)",
    renewability: "Renewable annually with continued employment. After 2-3 years, eligible to convert to permanent residency.",
    pathToCitizenship: "After 2 consecutive years of legal residency (per Decreto 366/2025), can apply for citizenship through the courts. The work visa provides the most straightforward employment-to-citizenship pipeline.",
    documents: [
      "Valid passport",
      "Signed employment contract with Argentine employer",
      "Employer sponsorship letter and company registration documents",
      "Proof of qualifications (university degrees, professional certificates — apostilled and translated)",
      "Criminal background check (apostilled and translated to Spanish)",
      "Birth certificate (apostilled)",
      "Passport-style photos (4x4cm, white background)",
      "Proof of address in Argentina",
      "For regulated professions: credential recognition certificate from the relevant Argentine body",
      "Employer's tax registration (constancia de inscripción ARCA)"
    ],
    costs: {
      governmentFee: "$300 USD",
      legalFees: "$1,000-2,500 USD (often partially covered by employer)",
      totalEstimate: "$1,300-2,800 USD (many employers cover most or all costs)"
    },
    pros: [
      "Direct path to residency with full DNI — unlocks banking, leases, tax ID, all services",
      "Employer typically assists with paperwork and may cover legal fees",
      "Full work authorization from day one (precaria issued quickly)",
      "Can switch employers with a visa update (simpler than initial application)",
      "Clear, well-established legal framework",
      "Path to permanent residency and citizenship after 2 years",
      "Obra social (union healthcare) through employer — often better value than prepaga",
      "Access to Argentine labor protections (severance, vacation, bonuses)"
    ],
    cons: [
      "Requires employer sponsorship — cannot self-sponsor",
      "Initially tied to the sponsoring employer (switching requires paperwork)",
      "Job loss puts your visa status at risk — must find new sponsorship or switch visa type",
      "Employer must be formally registered and willing to navigate the bureaucracy",
      "Regulated professions (medicine, law, engineering) require credential recognition before you can practice",
      "Process can be slower than Mercosur or digital nomad routes",
      "Local salaries in pesos can be low compared to international earning potential"
    ],
    faqs: [
      {
        q: "Can I change employers?",
        a: "Yes. You need to update your residency with the new employer's sponsorship documentation. This is simpler than the initial application because your residency is already established. You don't lose your accumulated time toward permanent residency."
      },
      {
        q: "What if I lose my job?",
        a: "You typically have a reasonable period to find new employment and update your sponsorship. If you cannot find a new sponsor, you may need to switch to another visa category (rentista, student, digital nomad) or depart. Consult an immigration lawyer immediately — don't wait until your status lapses."
      },
      {
        q: "Does my employer pay for the visa?",
        a: "This varies by company. Many Argentine employers — especially larger companies and multinationals — cover all or most visa costs and provide legal assistance. Smaller companies may expect you to handle some costs. Negotiate this during the job offer stage."
      },
      {
        q: "What about regulated professions like medicine or law?",
        a: "If your profession is regulated in Argentina (medicine, nursing, law, engineering, architecture, accounting), you must get your foreign credentials recognized by the relevant Argentine professional body before you can practice. This process can take several months and may require additional exams or coursework. Start the credential recognition process as early as possible."
      },
      {
        q: "Can my spouse work too?",
        a: "Your spouse can apply for residency as a family member (reunificación familiar). Once they receive their own residency, they can work. Spouses of work visa holders don't need separate employer sponsorship — their residency derives from the family relationship."
      }
    ]
  },

  {
    slug: "student",
    name: "Student Visa (Visa de Estudiante)",
    shortName: "Student",
    description: "The Student Visa is for individuals enrolled in accredited Argentine educational institutions — universities, language schools, and technical programs. Argentina's public universities are tuition-free (even for international students, though Decreto 366/2025 may restrict free access for non-citizens at some institutions), and the country has excellent graduate programs, Spanish immersion schools, and research opportunities. The student visa provides residency, a DNI, and part-time work authorization.",
    whoIsItFor: [
      "University undergraduate and graduate students",
      "Spanish language school students enrolled in accredited programs",
      "Exchange students on bilateral university agreements",
      "Technical/vocational training students",
      "Graduate researchers and PhD candidates",
      "Medical residency candidates",
      "Anyone enrolled in a program at an accredited Argentine institution (minimum 3-6 months duration)"
    ],
    requirements: {
      other: [
        "Official acceptance letter (constancia de inscripción) from an accredited Argentine educational institution",
        "Proof of financial means to support yourself during studies (bank statements, scholarship letter, or sponsor letter)",
        "Valid passport with 6+ months validity",
        "Clean criminal record (apostilled and translated — requirements vary by age and home country)",
        "Health insurance valid in Argentina for duration of studies",
        "Proof of accommodation in Argentina",
        "Birth certificate (apostilled)"
      ]
    },
    processingTime: "20-40 business days. Precaria (provisional residency) issued shortly after filing, allowing you to work and study while the full card processes.",
    duration: "1 year (renewable annually for the duration of studies, provided enrollment is maintained)",
    renewability: "Renewable each year with proof of continued enrollment and academic progress. Can be maintained for the full duration of the degree program.",
    pathToCitizenship: "Student residency counts toward the 2-year continuous residency requirement for citizenship eligibility (Decreto 366/2025). After graduation, you can transition to a work visa, rentista visa, or other category. Time spent on student residency counts toward the total.",
    documents: [
      "Valid passport",
      "Acceptance letter or proof of enrollment from accredited institution",
      "Proof of financial means (bank statements showing ~$800-1,200 USD/month capacity, scholarship documentation, or financial sponsor letter)",
      "Health insurance policy covering Argentina",
      "Criminal background check (apostilled and translated to Spanish)",
      "Birth certificate (apostilled)",
      "Passport-style photos (4x4cm, white background)",
      "Proof of accommodation",
      "Academic transcripts from previous studies (if applying for university — may need apostille and translation)"
    ],
    costs: {
      governmentFee: "$150 USD",
      legalFees: "$500-1,500 USD (optional — the student visa process is relatively straightforward)",
      totalEstimate: "$650-1,650 USD (plus apostille, translation, and insurance costs)"
    },
    pros: [
      "Provides full residency with DNI — unlocks banking, leases, and services",
      "Can work part-time (typically 20 hours/week with authorization)",
      "Public universities are tuition-free for enrolled students (one of the few countries offering this to foreigners)",
      "Student residency time counts toward the 2-year citizenship requirement",
      "Excellent way to learn Spanish through immersion while maintaining legal status",
      "Strong student communities and support networks at major universities",
      "Can transition to work visa or other category after graduation",
      "Spanish language school enrollment qualifies (not just university degrees)"
    ],
    cons: [
      "Limited to 20 hours/week of work (not enough to live on for most people)",
      "Must maintain active enrollment — dropping out jeopardizes your visa",
      "Academic progress may be monitored at renewal",
      "Decreto 366/2025 introduced potential restrictions on free public university access for non-citizens/non-permanent-residents (evolving policy — check current status)",
      "Language barrier in Spanish-taught programs can be challenging initially",
      "Some prestigious programs require entrance exams (CBC at UBA, for example)"
    ],
    faqs: [
      {
        q: "Can I work while studying?",
        a: "Yes, with proper authorization you can work up to 20 hours per week. Many students supplement their income through English tutoring, freelance work, or part-time positions. The precaria document enables this work authorization."
      },
      {
        q: "What happens after graduation?",
        a: "You can transition to a work visa (if you find Argentine employer sponsorship), switch to a digital nomad visa (if working remotely), apply for rentista status (if you have passive income), or apply for permanent residency if you've accumulated 2+ years of legal residence. Your student residency time counts toward citizenship eligibility."
      },
      {
        q: "Is Argentine university really free?",
        a: "Public universities (UBA, UNC, UNCuyo, etc.) have traditionally been tuition-free for all students, including foreigners. However, Decreto 366/2025 under the current government has introduced potential restrictions on free access for non-citizens and non-permanent residents. Check the current policy for your specific institution before enrolling."
      },
      {
        q: "Can I study Spanish at a language school and get this visa?",
        a: "Yes, enrollment in an accredited Spanish language program qualifies for the student visa. The program should be officially registered and typically needs to be at least 3-6 months in duration. Popular options include Mente Argentina, Expanish, Vamos Academy, and university-affiliated programs."
      },
      {
        q: "What are the best universities for international students?",
        a: "UBA (Universidad de Buenos Aires) is the most prestigious and largest. UNC (Universidad Nacional de Córdoba) is the oldest in Argentina. Other excellent options include UNCuyo (Mendoza), Universidad Austral (private, business-focused), and Universidad Di Tella (private, strong in economics and social sciences). IES Abroad and CIEE offer structured study-abroad programs with housing."
      }
    ]
  },

  {
    slug: "investment",
    name: "Investment Visa (Inversionista)",
    shortName: "Investment",
    description: "The Investment Visa is for individuals making significant financial investments in Argentina's economy — business formation, real estate development, agriculture, technology, or other productive activities. In 2025, Argentina also launched a Citizenship by Investment (CBI) pathway under Decreto 524/2025, offering expedited citizenship for investments of $500,000+ USD in priority sectors like energy, agriculture, tech, and tourism.",
    whoIsItFor: [
      "Business investors and entrepreneurs",
      "Real estate developers and investors",
      "Tech startup founders",
      "Agricultural and energy project investors",
      "High-net-worth individuals seeking residency through investment",
      "Those interested in the new Citizenship by Investment (CBI) fast-track pathway",
      "Job creators bringing employment to Argentina"
    ],
    requirements: {
      investment: "Traditional: minimum $150,000 USD in productive economic activity. CBI pathway: $500,000 USD minimum in approved priority sectors (energy, agriculture, technology, tourism)",
      other: [
        "Business plan or investment proposal approved by authorities",
        "Proof of funds and lawful origin of investment capital",
        "Valid passport (6+ months validity)",
        "Clean criminal record (apostilled and translated)",
        "Proof of address in Argentina",
        "For CBI: investment must be in government-approved sectors"
      ]
    },
    processingTime: "Traditional: 60-90 days. CBI pathway: expedited processing (specifics still being finalized as of March 2026)",
    duration: "Traditional: 1 year (renewable annually). CBI: fast-track to citizenship",
    renewability: "Traditional: renewable annually with continued active investment. CBI: leads directly to citizenship.",
    pathToCitizenship: "Traditional route: after 2 consecutive years of temporary residency (per Decreto 366/2025), can apply for permanent residency, then citizenship. CBI route: Decreto 524/2025 creates a fast-track pathway — $500,000 USD investment in priority sectors leads to expedited citizenship. Note: the 2026 Labor Modernization Law separates CBI citizenship from automatic tax residency — CBI holders still need 12 months of physical presence in Argentina before worldwide income taxation applies.",
    documents: [
      "Valid passport",
      "Detailed investment documentation (contracts, company formation papers)",
      "Business plan with economic impact projections",
      "Proof of funds origin (bank statements, tax returns, asset statements)",
      "Criminal background check (apostilled and translated to Spanish)",
      "Birth certificate (apostilled)",
      "Passport-style photos",
      "Proof of address in Argentina",
      "For CBI: evidence of investment in approved priority sector",
      "Company registration documents (if forming an Argentine entity)"
    ],
    costs: {
      governmentFee: "Traditional: $500 USD. CBI: fee structure under Decreto 524/2025 (consult lawyer for current amounts)",
      legalFees: "$2,000-5,000 USD (traditional). $5,000-15,000 USD (CBI — more complex structuring)",
      totalEstimate: "Traditional: $2,500-5,500 USD plus investment capital. CBI: $505,000+ USD total including investment and fees"
    },
    pros: [
      "Direct residency pathway for investors",
      "Full work authorization — can work for own company or others",
      "CBI pathway offers fast-track to citizenship (new 2025)",
      "Family members can be included in the application",
      "Argentina actively courting foreign investment under current government",
      "CBI holders not automatically subject to worldwide taxation (requires 12 months physical presence)",
      "Growing opportunities in energy, tech, and agriculture sectors"
    ],
    cons: [
      "Requires significant capital commitment ($150,000+ traditional, $500,000+ CBI)",
      "Business plan must be approved by authorities",
      "Longer processing time than digital nomad or tourist routes",
      "Higher legal fees due to complexity",
      "Investment must be maintained and active",
      "CBI program still new — regulations evolving",
      "Due diligence on investment vehicle essential (real estate fraud exists)"
    ],
    faqs: [
      {
        q: "What types of investments qualify?",
        a: "Traditional: business formation, real estate development, agricultural projects, technology startups, manufacturing, and other productive economic activities that create jobs or economic value in Argentina. CBI (Decreto 524/2025): investments specifically in priority sectors — energy, agriculture, technology, and tourism. The CBI threshold is $500,000 USD minimum."
      },
      {
        q: "What is the difference between the traditional investment visa and the new CBI pathway?",
        a: "The traditional investment visa gives you temporary residency (renewable annually) with a path to citizenship after 2+ years. The CBI pathway (Decreto 524/2025) is a new fast-track route where a $500,000+ investment in approved sectors leads to expedited citizenship. The CBI also has a tax advantage: it doesn't automatically trigger worldwide income taxation until you've been physically present in Argentina for 12 months."
      },
      {
        q: "Can I invest in real estate?",
        a: "Yes, real estate is one of the qualifying investment categories. However, purely speculative purchases (buying an apartment to live in) may not qualify — the investment should have a productive or development component. Real estate development projects, rental portfolios, or tourism-related properties are stronger candidates."
      },
      {
        q: "Do I need to live in Argentina full-time?",
        a: "For the traditional investment visa, you should maintain your Argentine address and not be absent for extended periods. For the CBI pathway, the 2026 Labor Modernization Law specifically states that CBI citizenship does not automatically make you a tax resident — you need 12 months of physical presence for worldwide tax obligations to apply."
      },
      {
        q: "Can my family get residency too?",
        a: "Yes. Both the traditional investment visa and CBI pathway allow family members (spouse, dependent children) to be included in the application. They receive residency status alongside the primary investor."
      }
    ]
  },

  {
    slug: "mercosur",
    name: "Mercosur Residency",
    shortName: "Mercosur",
    description: "Mercosur Residency is the fastest and most affordable path to living in Argentina — available to citizens of Mercosur member and associate countries. Qualifying nationals get immediate work authorization, a 2-year temporary residency that converts to permanent status, and the simplest documentation requirements of any visa category. If you hold citizenship from a qualifying country, this should always be your first choice.",
    whoIsItFor: [
      "Citizens of Mercosur full members: Brazil, Paraguay, Uruguay, Bolivia, Venezuela",
      "Citizens of associate states: Chile, Peru, Colombia, Ecuador, Guyana, Suriname",
      "Dual citizens who hold any qualifying Mercosur nationality",
      "Anyone from a qualifying country regardless of profession, income, or employment status"
    ],
    requirements: {
      other: [
        "Citizenship of a qualifying Mercosur member or associate country (proven by valid passport or national ID)",
        "Valid passport or national ID card from qualifying country",
        "Apostilled criminal record certificate from country of origin (and from any country where you lived 1+ years in the last 5 years)",
        "Birth certificate (apostilled)",
        "Proof of address in Argentina (utility bill, rental contract, or certificado de domicilio from police)",
        "Passport-style photos (4x4cm, white background)",
        "Application must be made at an Argentine Consular Office or at Migraciones in Argentina"
      ]
    },
    processingTime: "7-20 business days for the precaria (work authorization). Full residency card (DNI): 1-6 months depending on document processing",
    duration: "2-year temporary residency, then convertible to permanent residency",
    renewability: "Converts to permanent residency after 2 years. No need to 'renew' — you apply for permanent status.",
    pathToCitizenship: "After 2 consecutive years of legal residency (per Decreto 366/2025, which tightened the requirement from previous rules), you can apply for Argentine citizenship through the courts (naturalización). Mercosur residents are among the fastest to reach citizenship eligibility.",
    documents: [
      "Valid passport or national ID from Mercosur member/associate country",
      "Apostilled criminal record certificate from country of origin",
      "Criminal record from any other country where you lived 1+ years in the last 5 years (apostilled)",
      "Birth certificate (apostilled)",
      "Proof of address in Argentina (certificado de domicilio, utility bill, or rental contract)",
      "Passport-style photos (4x4cm, white background)",
      "Completed application form",
      "Application fee payment receipt"
    ],
    costs: {
      governmentFee: "$100-150 USD (varies by whether applying at consulate or Migraciones)",
      legalFees: "$300-1,000 USD (optional — the Mercosur process is straightforward enough to do without a lawyer for most applicants)",
      totalEstimate: "$400-1,150 USD total (including apostilles and translations if needed)"
    },
    pros: [
      "Fastest processing time of any residency category (precaria in days)",
      "Lowest total cost",
      "Full work authorization from day one — can work for any Argentine employer, start a business, or freelance",
      "Simplified document requirements compared to other visa types",
      "2-year temporary residency converts directly to permanent residency",
      "Path to citizenship after 2 years of continuous legal residency",
      "No income requirements, no employer sponsorship, no investment needed",
      "Precaria (provisional certificate) issued quickly, allowing you to work and access services while the full card processes",
      "Can open bank accounts, sign leases, and register for tax ID (CUIT/CUIL) with precaria"
    ],
    cons: [
      "Only available to nationals of Mercosur member and associate states",
      "Must maintain citizenship of qualifying country",
      "Apostilled criminal records can be time-consuming to obtain in some countries",
      "Decreto 366/2025 now requires 2 consecutive years of residency for citizenship (previously more flexible for some cases)",
      "Frequent long absences from Argentina may jeopardize residency status"
    ],
    faqs: [
      {
        q: "Which countries qualify for Mercosur residency?",
        a: "Full members: Brazil, Paraguay, Uruguay, Bolivia, Venezuela. Associate states: Chile, Peru, Colombia, Ecuador, Guyana, Suriname. If you hold citizenship of any of these countries — even as a dual citizen — you qualify."
      },
      {
        q: "What's the difference between full and associate member benefits?",
        a: "Both full and associate members receive 2-year temporary residency that converts to permanent status. Full members may have slightly simpler documentation requirements. Both receive immediate work authorization upon receiving their precaria (provisional work certificate). The path to citizenship is the same for both."
      },
      {
        q: "Can I apply if I have dual citizenship with a Mercosur country?",
        a: "Yes. If you hold citizenship of a qualifying country, you can apply under Mercosur provisions regardless of what other passports you hold. For example, a US citizen who also holds Colombian citizenship can apply through the Mercosur route using their Colombian documents."
      },
      {
        q: "What is the precaria and when do I get it?",
        a: "The precaria is a provisional certificate issued when your application is submitted and accepted. It functions as proof of your legal status and authorizes you to work while your full residency card is processed. You typically receive it within days of filing, and it's valid until your DNI residency card arrives (1-6 months)."
      },
      {
        q: "Can I work immediately?",
        a: "Yes. Once you receive your precaria, you have full work authorization. You can be employed by any Argentine company, register as a freelancer (monotributo), or start a business. There are no restrictions on the type of work."
      },
      {
        q: "How has the citizenship timeline changed?",
        a: "Decreto 366/2025 (effective May 29, 2025) now requires 2 consecutive years of legal residency in Argentina before you can apply for citizenship — even if you're married to an Argentine citizen. Previously, marriage to a citizen could shorten the timeline. This applies to all residency categories including Mercosur."
      }
    ]
  }
];

export const visaTypes = applyFactOverridesBySlug(visaTypesBase, visaTypesFactOverrides);

// Helper functions
export function getVisaTypeBySlug(slug: string): VisaType | undefined {
  return visaTypes.find(visa => visa.slug === slug);
}

export function getAllVisaTypes(): VisaType[] {
  return visaTypes;
}

export function getVisaTypesForNationality(nationalitySlug: string): VisaType[] {
  // This would contain logic to filter visa types based on nationality
  // For now, return all - specific logic can be added
  return visaTypes;
}
