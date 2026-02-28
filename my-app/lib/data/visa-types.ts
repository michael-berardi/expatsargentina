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

export const visaTypes: VisaType[] = [
  {
    slug: "digital-nomad",
    name: "Digital Nomad Visa (Visa Nómada Digital)",
    shortName: "Digital Nomad",
    description: "Argentina's Digital Nomad Visa allows remote workers employed by foreign companies to live in Argentina legally while working remotely. This is one of the most popular visa options for location-independent professionals.",
    whoIsItFor: [
      "Remote workers employed by foreign companies",
      "Freelancers with international clients",
      "Digital entrepreneurs with online businesses",
      "Consultants working remotely",
      "Software developers, designers, marketers working remotely"
    ],
    requirements: {
      income: "Proof of minimum monthly income (typically $1,000-1,500 USD equivalent)",
      employment: "Contract or proof of remote employment with foreign company",
      other: [
        "Valid passport (6+ months)",
        "Health insurance with Argentina coverage",
        "Clean criminal record (apostilled)",
        "Proof of accommodation in Argentina"
      ]
    },
    processingTime: "30-45 days",
    duration: "6 months to 2 years (varies by issuance)",
    renewability: "Renewable for similar period",
    pathToCitizenship: "Can transition to temporary residency → permanent residency → citizenship after 2 years",
    documents: [
      "Valid passport",
      "Proof of remote employment/income",
      "Bank statements showing regular income",
      "Health insurance policy",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
      "Passport photos",
      "Proof of address in Argentina"
    ],
    costs: {
      governmentFee: "$200-400 USD",
      legalFees: "$500-1,500 USD (if using lawyer)",
      totalEstimate: "$700-2,000 USD"
    },
    pros: [
      "Designed specifically for remote workers",
      "No need for local employer sponsorship",
      "Can work legally for foreign companies",
      "Relatively fast processing",
      "Path to permanent residency",
      "Access to banking and services"
    ],
    cons: [
      "Income requirements must be maintained",
      "Cannot work for Argentine employers",
      "Health insurance required",
      "Must show ongoing remote employment"
    ],
    faqs: [
      {
        q: "Can I work for an Argentine company with this visa?",
        a: "No, the Digital Nomad Visa is specifically for remote work for foreign companies. To work for an Argentine employer, you would need a different visa type."
      },
      {
        q: "What happens if I lose my remote job while on this visa?",
        a: "You would need to either find new remote employment quickly or switch to another visa type. It's important to maintain the conditions of your visa."
      },
      {
        q: "Can I bring my family?",
        a: "Family reunification is possible but requires separate applications for spouse and children."
      }
    ]
  },

  {
    slug: "rentista",
    name: "Rentista Visa (Residency for Passive Income)",
    shortName: "Rentista",
    description: "The Rentista Visa is for individuals with stable passive income from sources outside Argentina. This includes rental income, dividends, pension income, investment returns, or other passive revenue streams.",
    whoIsItFor: [
      "Retirees with pension income",
      "Property owners with rental income",
      "Investors with dividend/interest income",
      "People with trust fund income",
      "Those with royalties or licensing income",
      "Anyone with stable passive income from abroad"
    ],
    requirements: {
      income: "Proof of minimum $1,500-2,000 USD monthly passive income",
      other: [
        "Income must be from passive sources (not employment)",
        "Income must be stable and documented",
        "Valid passport (6+ months)",
        "Clean criminal record (apostilled)",
        "Proof of address in Argentina"
      ]
    },
    processingTime: "60-90 days",
    duration: "1 year (renewable)",
    renewability: "Renewable annually as long as income continues",
    pathToCitizenship: "After 2 years of temporary residency, can apply for permanent residency → citizenship",
    documents: [
      "Valid passport",
      "Proof of passive income (bank statements, contracts, etc.)",
      "Documentation of income source (property deeds, investment statements, pension letters)",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
      "Passport photos",
      "Proof of address in Argentina"
    ],
    costs: {
      governmentFee: "$300-500 USD",
      legalFees: "$800-2,000 USD",
      totalEstimate: "$1,100-2,500 USD"
    },
    pros: [
      "No need for employment",
      "Designed for financially independent individuals",
      "Can lead to permanent residency",
      "Flexible - no work restrictions in Argentina",
      "Good for retirees and investors"
    ],
    cons: [
      "Must prove ongoing passive income",
      "Higher income requirements than some other visas",
      "Income must be from passive sources only",
      "Annual renewal required initially"
    ],
    faqs: [
      {
        q: "Can I work in Argentina with a Rentista Visa?",
        a: "Yes, unlike the Digital Nomad Visa, the Rentista Visa allows you to work for Argentine employers or start a business if you choose."
      },
      {
        q: "What counts as passive income?",
        a: "Rental income, dividends, interest, pension income, royalties, licensing fees, and trust distributions. Employment income does NOT qualify."
      },
      {
        q: "How do I prove my income?",
        a: "Bank statements showing regular deposits, contracts, property deeds, pension letters, investment statements - all showing consistent income of at least $1,500-2,000 USD monthly."
      }
    ]
  },

  {
    slug: "pensionado",
    name: "Pensionado Visa (Retirement Visa)",
    shortName: "Pensionado",
    description: "The Pensionado Visa is specifically designed for retirees receiving pension income from their home country. This is a subset of the Rentista category but specifically optimized for retirees.",
    whoIsItFor: [
      "Retirees receiving government or private pensions",
      "People with social security income",
      "Those with company pension plans",
      "Individuals with 401k/RRIF distributions (if structured as pension)",
      "Anyone with verifiable pension income"
    ],
    requirements: {
      income: "Proof of minimum $1,000-1,500 USD monthly pension income",
      other: [
        "Official pension documentation",
        "Pension must be stable and ongoing",
        "Valid passport",
        "Clean criminal record (apostilled)",
        "Proof of address in Argentina"
      ]
    },
    processingTime: "60-90 days",
    duration: "1 year (renewable)",
    renewability: "Renewable annually",
    pathToCitizenship: "After 2 years, eligible for permanent residency → citizenship",
    documents: [
      "Valid passport",
      "Official pension documentation",
      "Bank statements showing pension deposits",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
      "Passport photos",
      "Proof of address in Argentina"
    ],
    costs: {
      governmentFee: "$300-500 USD",
      legalFees: "$800-2,000 USD",
      totalEstimate: "$1,100-2,500 USD"
    },
    pros: [
      "Lower income threshold than general Rentista",
      "Designed specifically for retirees",
      "Can work if desired",
      "Access to retiree benefits in Argentina",
      "Path to permanent residency and citizenship"
    ],
    cons: [
      "Must have verifiable pension income",
      "Pension documentation must be official",
      "Annual renewal required"
    ],
    faqs: [
      {
        q: "What if I have pension plus other income?",
        a: "If your pension meets the minimum threshold, you qualify. Additional income is fine. If pension alone doesn't meet threshold, consider the general Rentista visa."
      },
      {
        q: "Can I work part-time as a retiree?",
        a: "Yes, the Pensionado Visa doesn't restrict employment, so you can work if you choose."
      }
    ]
  },

  {
    slug: "work",
    name: "Work Visa (Visa de Trabajo)",
    shortName: "Work",
    description: "The standard Work Visa requires sponsorship from an Argentine employer. This is the traditional employment-based immigration pathway for those seeking to work for Argentine companies.",
    whoIsItFor: [
      "Professionals with job offers from Argentine companies",
      "Intra-company transfers",
      "Skilled workers in demand fields",
      "Teachers and educators",
      "Healthcare professionals",
      "Anyone with Argentine employer sponsorship"
    ],
    requirements: {
      employment: "Valid job offer and sponsorship from registered Argentine employer",
      other: [
        "Employment contract",
        "Employer must be registered and in good standing",
        "Position must be legitimate",
        "Valid passport",
        "Clean criminal record (apostilled)",
        "Proof of qualifications/education"
      ]
    },
    processingTime: "60-90 days",
    duration: "1-2 years (linked to employment contract)",
    renewability: "Renewable with continued employment",
    pathToCitizenship: "After 2 years, can apply for permanent residency → citizenship",
    documents: [
      "Valid passport",
      "Employment contract",
      "Employer sponsorship documentation",
      "Proof of qualifications (degrees, certificates - apostilled)",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
      "Passport photos",
      "Proof of address"
    ],
    costs: {
      governmentFee: "$300-500 USD",
      legalFees: "$1,000-2,500 USD",
      totalEstimate: "$1,300-3,000 USD"
    },
    pros: [
      "Direct path to residency through employment",
      "Employer assists with process",
      "Clear requirements",
      "Can switch employers with visa update",
      "Full work authorization"
    ],
    cons: [
      "Requires employer sponsorship",
      "Tied to specific employer initially",
      "Job loss affects visa status",
      "Employer must be registered",
      "Process can be slower"
    ],
    faqs: [
      {
        q: "Can I change employers?",
        a: "Yes, but you need to update your visa with the new employer's sponsorship. The process is simpler than initial application."
      },
      {
        q: "What if I lose my job?",
        a: "You typically have a grace period to find new sponsorship or switch visa types. Consult an immigration lawyer immediately."
      }
    ]
  },

  {
    slug: "student",
    name: "Student Visa (Visa de Estudiante)",
    shortName: "Student",
    description: "The Student Visa is for individuals enrolled in accredited Argentine educational institutions, including universities, language schools, and technical programs.",
    whoIsItFor: [
      "University students",
      "Language school students",
      "Exchange students",
      "Technical/vocational students",
      "Graduate students and researchers"
    ],
    requirements: {
      other: [
        "Acceptance letter from accredited institution",
        "Proof of financial means to support yourself",
        "Valid passport",
        "Clean criminal record (may be required)",
        "Health insurance",
        "Proof of accommodation"
      ]
    },
    processingTime: "30-60 days",
    duration: "Duration of study program (typically 1-4 years)",
    renewability: "Renewable for continued study",
    pathToCitizenship: "Can transition to work visa after graduation, then to permanent residency",
    documents: [
      "Valid passport",
      "Acceptance letter from educational institution",
      "Proof of financial means",
      "Health insurance",
      "Criminal background check (apostilled, if required)",
      "Birth certificate (apostilled)",
      "Passport photos",
      "Proof of accommodation"
    ],
    costs: {
      governmentFee: "$150-300 USD",
      legalFees: "$500-1,500 USD",
      totalEstimate: "$650-1,800 USD"
    },
    pros: [
      "Pathway to experience Argentina",
      "Can work part-time (typically 20 hours/week)",
      "Affordable tuition at public universities",
      "Can transition to work visa after graduation",
      "Student community and support"
    ],
    cons: [
      "Limited work hours",
      "Tied to educational program",
      "Must maintain enrollment",
      "Doesn't directly lead to permanent residency"
    ],
    faqs: [
      {
        q: "Can I work while studying?",
        a: "Yes, typically up to 20 hours per week with proper authorization."
      },
      {
        q: "What happens after graduation?",
        a: "You can apply for a work visa if you find employer sponsorship, or switch to another visa type if you qualify."
      }
    ]
  },

  {
    slug: "investment",
    name: "Investment Visa (Inversionista)",
    shortName: "Investment",
    description: "The Investment Visa is for individuals making significant investments in Argentina, such as business formation, real estate, or other economic activities that benefit the country.",
    whoIsItFor: [
      "Business investors",
      "Real estate investors",
      "Entrepreneurs starting businesses",
      "Those creating jobs in Argentina",
      "Investors in Argentine projects"
    ],
    requirements: {
      investment: "Minimum investment (amount varies by project type, typically $50,000-150,000 USD)",
      other: [
        "Business plan or investment proposal",
        "Proof of funds origin",
        "Valid passport",
        "Clean criminal record (apostilled)",
        "Proof of address in Argentina"
      ]
    },
    processingTime: "90-120 days",
    duration: "1-2 years (renewable)",
    renewability: "Renewable with continued investment",
    pathToCitizenship: "After 2 years, eligible for permanent residency → citizenship",
    documents: [
      "Valid passport",
      "Investment documentation",
      "Business plan",
      "Proof of funds and origin",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
      "Passport photos",
      "Proof of address"
    ],
    costs: {
      governmentFee: "$500-1,000 USD",
      legalFees: "$2,000-5,000 USD",
      totalEstimate: "$2,500-6,000 USD plus investment amount"
    },
    pros: [
      "Direct path for investors",
      "Full work authorization",
      "Can lead to permanent residency",
      "Business-friendly environment",
      "Family can be included"
    ],
    cons: [
      "Requires significant capital investment",
      "Business plan must be approved",
      "Longer processing time",
      "Higher legal fees",
      "Investment must be maintained"
    ],
    faqs: [
      {
        q: "What types of investments qualify?",
        a: "Business formation, real estate development, agricultural projects, technology startups, and other economic activities that benefit Argentina."
      },
      {
        q: "Is there a minimum investment amount?",
        a: "Typically $50,000-150,000 USD, but varies based on project type and economic impact. Consult an immigration lawyer for specific guidance."
      }
    ]
  },

  {
    slug: "mercosur",
    name: "Mercosur Residency",
    shortName: "Mercosur",
    description: "Mercosur Residency is available to citizens of Mercosur member and associate countries. This is the most advantageous residency option for qualifying nationals, offering streamlined processing and full work rights.",
    whoIsItFor: [
      "Citizens of Mercosur full members (Argentina, Brazil, Paraguay, Uruguay, Bolivia)",
      "Citizens of associate members (Chile, Peru, Colombia, Ecuador, Guyana, Suriname)",
      "EU citizens (through EU-Mercosur association)",
      "Nationals of countries with Mercosur agreements"
    ],
    requirements: {
      other: [
        "Citizenship of qualifying country",
        "Valid passport or national ID",
        "Clean criminal record (requirements vary by nationality)",
        "Proof of address in Argentina",
        "Proof of means of support (flexible requirements)"
      ]
    },
    processingTime: "30-60 days",
    duration: "2 years for associates, permanent for full members",
    renewability: "Renewable, leads to permanent residency",
    pathToCitizenship: "After 2 years, can apply for citizenship",
    documents: [
      "Valid passport or national ID",
      "Criminal record check (if required for your nationality)",
      "Birth certificate",
      "Proof of address in Argentina",
      "Passport photos"
    ],
    costs: {
      governmentFee: "$100-300 USD",
      legalFees: "$300-1,000 USD (optional, process is straightforward)",
      totalEstimate: "$400-1,300 USD"
    },
    pros: [
      "Fastest processing time",
      "Lowest cost",
      "Full work authorization immediately",
      "Simplified requirements",
      "Full members get immediate permanent residency",
      "Path to citizenship in 2 years"
    ],
    cons: [
      "Only available to qualifying nationalities",
      "Must maintain Mercosur country citizenship"
    ],
    faqs: [
      {
        q: "What's the difference between full and associate member benefits?",
        a: "Full members get immediate permanent residency. Associate members get 2-year temporary residency that can become permanent. Both have work authorization."
      },
      {
        q: "Can I apply if I have dual citizenship with a Mercosur country?",
        a: "Yes, if you hold citizenship of a qualifying Mercosur country, you can apply under those provisions."
      }
    ]
  }
];

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
