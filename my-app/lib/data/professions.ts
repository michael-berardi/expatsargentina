// ============================================================================
// PSEO Data: Professions for Expats
// Career-specific immigration guidance for various professional backgrounds
// ============================================================================

export interface Profession {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  category: "tech" | "creative" | "business" | "education" | "healthcare" | "other";
  overview: string;
  visaOptions: {
    name: string;
    description: string;
    difficulty: "Easy" | "Moderate" | "Complex";
    timeline: string;
  }[];
  workPermitRequirements: string[];
  incomeRequirements: {
    description: string;
    amount: string;
    notes?: string;
  };
  remoteWork: {
    feasible: boolean;
    description: string;
    considerations: string[];
  };
  localJobMarket: {
    demand: "High" | "Medium" | "Low";
    averageSalary: string;
    keyCities: string[];
    industries: string[];
  };
  professionalAssociations: {
    name: string;
    url?: string;
    description: string;
  }[];
  credentialRecognition: {
    required: boolean;
    description: string;
    process?: string;
  };
  taxConsiderations: string[];
  networkingTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProfessions: string[];
  resources: {
    title: string;
    url: string;
    description: string;
  }[];
  image: string;
}

export const professions: Profession[] = [
  {
    slug: "software-developer",
    name: "Software Developer",
    title: "Software Developer Immigration Guide for Argentina",
    subtitle: "Visa pathways, remote work options, and tech community connections for developers",
    description: "Argentina's growing tech ecosystem offers excellent opportunities for software developers. From Buenos Aires' startup scene to provincial tech hubs, discover your pathway to living and working as a developer in Argentina.",
    icon: "Code",
    category: "tech",
    overview: "Argentina has emerged as Latin America's leading tech hub, with Buenos Aires ranking among the top startup ecosystems globally. Software developers are in high demand, with companies actively recruiting international talent. The country offers excellent infrastructure for remote workers, a thriving tech community, and competitive salaries when earning in foreign currency. Whether you want to work remotely for a US/EU company, join a local startup, or freelance, Argentina provides an ideal base for tech professionals.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Perfect for remote developers working for foreign companies. No local employment restrictions.",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa (Sponsorship)",
        description: "For developers hired by Argentine companies. Requires employer sponsorship.",
        difficulty: "Moderate",
        timeline: "1-3 months"
      },
      {
        name: "Freelancer/Mercosur Visa",
        description: "For independent developers with international clients. Available to Mercosur citizens.",
        difficulty: "Moderate",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Valid passport with 6+ months remaining",
      "Proof of employment or client contracts",
      "Minimum income documentation ($1,500-$2,000/month)",
      "Health insurance valid in Argentina",
      "Criminal background check",
      "No professional licensing required for most dev roles"
    ],
    incomeRequirements: {
      description: "Remote developers should demonstrate stable monthly income",
      amount: "$1,500 - $3,000+ USD/month",
      notes: "Higher income recommended for Digital Nomad Visa approval"
    },
    remoteWork: {
      feasible: true,
      description: "Excellent infrastructure for remote developers. Buenos Aires has numerous coworking spaces, reliable internet (50-300 Mbps), and a large digital nomad community.",
      considerations: [
        "Time zone alignment with US East Coast (1-2 hours ahead)",
        "Growing number of tech companies with distributed teams",
        "Argentina's economic situation makes USD/EUR earnings very favorable",
        "Many expat developers live comfortably on $1,500-2,500/month",
        "Tax implications vary based on visa type and income source"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,000,000-4,000,000/month ($1,500-3,000 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba", "Mendoza", "Rosario"],
      industries: ["Fintech", "SaaS", "E-commerce", "Gaming", "Blockchain", "AI/ML"]
    },
    professionalAssociations: [
      {
        name: "Argentine Software Industry Chamber (CESSI)",
        url: "https://cessi.org.ar",
        description: "National software industry association with networking events"
      },
      {
        name: "BA Tech Community",
        description: "Informal network of developers through Meetup.com events"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Software development doesn't require credential recognition in Argentina. Your portfolio and experience speak louder than formal degrees."
    },
    taxConsiderations: [
      "Digital Nomad Visa holders typically don't pay Argentine income tax on foreign earnings",
      "Local employment requires registration with AFIP (tax authority)",
      "Freelancers may need to register as monotributo (simplified tax regime)",
      "Consult an accountant for long-term stays (183+ days)",
      "Double taxation treaties with many countries"
    ],
    networkingTips: [
      "Join 'Argentina Tech' and 'Digital Nomads Argentina' Facebook groups",
      "Attend BA Tech Meetup events",
      "Visit coworking spaces like AreaTres, La Maquinita, or WeWork",
      "Participate in local hackathons and startup weekends",
      "Engage with the community on Twitter/X using #BuenosAiresTech"
    ],
    faqs: [
      {
        question: "Do I need to speak Spanish to work as a developer in Argentina?",
        answer: "Not necessarily. Many tech companies operate in English, especially startups with international teams. However, learning Spanish will significantly expand your opportunities and improve daily life."
      },
      {
        question: "What's the internet speed like for remote work?",
        answer: "Buenos Aires offers fiber internet up to 300 Mbps in most neighborhoods. Coworking spaces provide reliable connections, and 4G/5G is widely available as backup."
      },
      {
        question: "Can I freelance for US clients while living in Argentina?",
        answer: "Yes, the Digital Nomad Visa specifically allows this. Many developers live in Argentina while contracting with US/EU companies, taking advantage of the favorable exchange rate."
      },
      {
        question: "Are there local developer communities?",
        answer: "Absolutely. Buenos Aires has a vibrant tech scene with regular meetups, conferences (like NodeConf, RubyConf), and active Slack communities. Palermo and Palermo Hollywood are the main tech neighborhoods."
      }
    ],
    relatedProfessions: ["ux-designer", "product-manager", "data-analyst"],
    resources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Complete guide to the Digital Nomad Visa for remote workers"
      },
      {
        title: "Best Neighborhoods for Tech Workers",
        url: "/blog/best-neighborhoods-expats-buenos-aires",
        description: "Where to live in Buenos Aires as a tech professional"
      },
      {
        title: "Cost of Living Calculator",
        url: "/cost-of-living",
        description: "Estimate your monthly expenses as a developer in Argentina"
      }
    ],
    image: "/images/professions/software-developer.webp"
  },
  {
    slug: "ux-designer",
    name: "UX/UI Designer",
    title: "UX/UI Designer Guide for Argentina",
    subtitle: "Design community, freelance opportunities, and visa pathways for designers",
    description: "Argentina's design scene is thriving, with strong demand for UX/UI talent in the growing tech sector. Discover how to build your design career in one of Latin America's most creative cities.",
    icon: "Palette",
    category: "creative",
    overview: "Buenos Aires has a rich design heritage and a rapidly growing UX/UI community. Argentine designers are known for their creativity and technical skills, making the country an attractive destination for design professionals. The startup ecosystem values good design, creating opportunities both in-house and freelance. The city hosts design events, has active design communities, and offers inspiration from its European-influenced architecture and vibrant street art scene.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Ideal for designers working remotely with international clients",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Freelancer Visa",
        description: "For independent designers building a local client base",
        difficulty: "Moderate",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Portfolio demonstrating UX/UI work",
      "Client contracts or employment proof",
      "Minimum income documentation",
      "Health insurance",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "Freelance designers should show consistent monthly income",
      amount: "$1,500 - $2,500 USD/month",
      notes: "Rates vary significantly between local and international clients"
    },
    remoteWork: {
      feasible: true,
      description: "Design work translates perfectly to remote arrangements. Many Argentine designers work for US/EU companies while living in Buenos Aires.",
      considerations: [
        "Design tools (Figma, Adobe CC) work seamlessly",
        "Time zone overlap with US clients",
        "Lower cost of living allows competitive rates",
        "Strong local design community for networking",
        "Growing number of design-focused coworking spaces"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $1,800,000-3,500,000/month ($1,400-2,600 USD)",
      keyCities: ["Buenos Aires", "Cordoba", "Rosario"],
      industries: ["Tech Startups", "Agencies", "E-commerce", "Fintech"]
    },
    professionalAssociations: [
      {
        name: "UXPA Argentina",
        description: "User Experience Professionals Association local chapter"
      },
      {
        name: " Buenos Aires Design Community",
        description: "Meetup group with regular design events"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Portfolio matters more than formal credentials in design. International degrees are respected but not required."
    },
    taxConsiderations: [
      "Remote work for foreign clients typically not taxed locally",
      "Local freelance work requires monotributo registration",
      "Keep detailed records for tax purposes",
      "Consider hiring an accountant for compliance"
    ],
    networkingTips: [
      "Attend UX Buenos Aires meetups",
      "Join design communities on Slack and Discord",
      "Visit design-focused coworking spaces",
      "Participate in design sprints and workshops",
      "Connect with local design schools (UBA, UADE)"
    ],
    faqs: [
      {
        question: "Is there a strong design community in Buenos Aires?",
        answer: "Yes, BA has a vibrant design community with regular meetups, conferences like Interaction Latin America, and active online communities. The city has a rich artistic heritage that influences contemporary design."
      },
      {
        question: "Can I find local clients as a foreign designer?",
        answer: "Absolutely. Many startups value international perspective. Spanish proficiency helps, but many tech companies work in English. Start with coworking spaces and networking events."
      }
    ],
    relatedProfessions: ["software-developer", "product-manager", "content-creator"],
    resources: [
      {
        title: "Creative Professionals Guide",
        url: "/resources",
        description: "Resources for creative industry expats"
      }
    ],
    image: "/images/professions/ux-designer.webp"
  },
  {
    slug: "product-manager",
    name: "Product Manager",
    title: "Product Manager Immigration Guide",
    subtitle: "Navigate Argentina's startup ecosystem as a product leader",
    description: "Argentina's booming startup scene needs experienced product managers. Learn about visa options, salary expectations, and the local product community.",
    icon: "Briefcase",
    category: "tech",
    overview: "The product management role is rapidly growing in Argentina's tech ecosystem. With successful companies like MercadoLibre, Globant, and numerous startups, there's strong demand for experienced PMs who can bridge technical and business needs. International experience is highly valued, especially in fintech, SaaS, and marketplace companies.",
    visaOptions: [
      {
        name: "Work Visa (Sponsorship)",
        description: "Most common route through Argentine tech companies",
        difficulty: "Moderate",
        timeline: "1-3 months"
      },
      {
        name: "Digital Nomad Visa",
        description: "For PMs working remotely for foreign companies",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      }
    ],
    workPermitRequirements: [
      "Demonstrated product management experience",
      "Employment contract or client agreements",
      "Minimum income proof ($2,000+/month)",
      "Health insurance",
      "Background check"
    ],
    incomeRequirements: {
      description: "Senior PMs can command competitive salaries",
      amount: "$2,500 - $5,000+ USD/month",
      notes: "Foreign companies often pay significantly more than local ones"
    },
    remoteWork: {
      feasible: true,
      description: "Product management can be done remotely, though some companies prefer hybrid arrangements for team collaboration.",
      considerations: [
        "Many US companies hire Argentine PMs for LATAM markets",
        "Time zone alignment is crucial for this role",
        "Local startups often require in-person presence",
        "Strong demand for bilingual PMs (English/Spanish)"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,500,000-5,000,000/month ($2,000-4,000 USD)",
      keyCities: ["Buenos Aires", "Cordoba"],
      industries: ["Fintech", "SaaS", "Marketplaces", "E-commerce"]
    },
    professionalAssociations: [
      {
        name: "ProductTank Buenos Aires",
        description: "Local chapter of the global PM community"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Experience and track record matter more than formal credentials in product management."
    },
    taxConsiderations: [
      "Local employment requires full tax registration",
      "Remote work for foreign companies varies by arrangement",
      "Stock options may have tax implications"
    ],
    networkingTips: [
      "Attend ProductTank BA events",
      "Join startup community meetups",
      "Connect with venture capital firms",
      "Engage with local accelerator programs"
    ],
    faqs: [
      {
        question: "Are there senior PM roles available?",
        answer: "Yes, especially in established startups and scale-ups. Companies like MercadoLibre, Naranja X, and Globant regularly hire senior product leaders."
      }
    ],
    relatedProfessions: ["software-developer", "ux-designer", "data-analyst"],
    resources: [
      {
        title: "Startup Ecosystem Guide",
        url: "/resources",
        description: "Overview of Argentina's startup scene"
      }
    ],
    image: "/images/professions/product-manager.webp"
  },
  {
    slug: "english-teacher",
    name: "English Teacher",
    title: "Teaching English in Argentina: Complete Guide",
    subtitle: "TEFL opportunities, visa pathways, and living as an educator in Argentina",
    description: "Argentina has strong demand for English teachers in schools, language institutes, and corporate settings. Learn how to build your teaching career in this education-focused country.",
    icon: "GraduationCap",
    category: "education",
    overview: "English teaching is one of the most accessible ways for foreigners to live in Argentina. There's consistent demand across private language institutes, international schools, corporate training, and private tutoring. While salaries at local institutes are modest, many teachers supplement income with private classes or online teaching. The work-life balance is excellent, with plenty of time to explore the country.",
    visaOptions: [
      {
        name: "Work Visa (Sponsorship)",
        description: "Language schools can sponsor work visas, though not all offer this",
        difficulty: "Moderate",
        timeline: "2-4 months"
      },
      {
        name: "Student Visa",
        description: "Take Spanish classes part-time while teaching",
        difficulty: "Easy",
        timeline: "1-2 months"
      },
      {
        name: "Digital Nomad + Online Teaching",
        description: "Teach online for platforms like VIPKid, iTalki while living in Argentina",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      }
    ],
    workPermitRequirements: [
      "TEFL/TESOL certification (preferred but not always required)",
      "University degree (for better positions)",
      "Native or near-native English proficiency",
      "Criminal background check",
      "Some institutes require teaching experience"
    ],
    incomeRequirements: {
      description: "Teaching salaries vary widely by institution type",
      amount: "$800 - $2,000 USD/month",
      notes: "Supplement with private classes ($15-40/hour) for better income"
    },
    remoteWork: {
      feasible: true,
      description: "Online English teaching is extremely popular. Platforms like Preply, iTalki, and Cambly allow teachers to earn USD while living in Argentina.",
      considerations: [
        "Time zone differences may require early morning or late evening hours",
        "Reliable internet is essential",
        "Popular platforms: Preply, iTalki, Cambly, VIPKid",
        "Rates typically $10-30/hour depending on experience",
        "Build a student base for consistent income"
      ]
    },
    localJobMarket: {
      demand: "Medium",
      averageSalary: "ARS $800,000-1,500,000/month ($600-1,200 USD) at institutes",
      keyCities: ["Buenos Aires", "Cordoba", "Mendoza", "Rosario"],
      industries: ["Language Institutes", "International Schools", "Corporate Training", "Private Tutoring"]
    },
    professionalAssociations: [
      {
        name: "Argentine Association of English Teachers (APIBA)",
        description: "Professional association for English teachers"
      }
    ],
    credentialRecognition: {
      required: true,
      description: "TEFL/TESOL certification is highly recommended. International schools require teaching credentials.",
      process: "CELTA and TEFL certificates from accredited programs are recognized. Local institutes may have their own training programs."
    },
    taxConsiderations: [
      "Local employment requires tax registration",
      "Private tutoring income often goes unreported (common but not legal)",
      "Online teaching platforms may handle tax withholding",
      "Consider monotributo for freelance teaching"
    ],
    networkingTips: [
      "Join expat teacher Facebook groups",
      "Connect with institutes directly (walk-ins work)",
      "Offer conversation classes through Meetup",
      "Network at international schools",
      "Build a private student base through referrals"
    ],
    faqs: [
      {
        question: "Do I need to speak Spanish to teach English?",
        answer: "Not for the classroom (immersion method is preferred), but Spanish helps enormously for daily life and administrative tasks."
      },
      {
        question: "Can I survive on just an English teacher salary?",
        answer: "It's possible but tight. Most teachers combine institute work with private classes or online teaching. With the blue dollar rate, $1,500/month provides a comfortable lifestyle."
      },
      {
        question: "When is the best time to apply for teaching jobs?",
        answer: "February-March (start of school year) and July-August (mid-year intake). However, language institutes hire year-round."
      }
    ],
    relatedProfessions: ["content-creator", "translator"],
    resources: [
      {
        title: "Cost of Living Guide",
        url: "/blog/cost-living-buenos-aires-2025",
        description: "Budget planning for teachers in Argentina"
      }
    ],
    image: "/images/professions/english-teacher.webp"
  },
  {
    slug: "content-creator",
    name: "Content Creator / Writer",
    title: "Content Creator Guide for Argentina",
    subtitle: "Build your creator career from Argentina's inspiring landscapes",
    description: "Argentina offers endless content opportunities—from Buenos Aires' vibrant culture to Patagonia's dramatic landscapes. Learn how to thrive as a creator.",
    icon: "Pen",
    category: "creative",
    overview: "Argentina is a content creator's dream. The country offers diverse backdrops (cosmopolitan cities, wine country, mountains, glaciers), affordable living, and a growing digital infrastructure. Whether you're a writer, YouTuber, photographer, or social media creator, Argentina provides both inspiration and affordability.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Perfect for creators with international income streams",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      }
    ],
    workPermitRequirements: [
      "Proof of income from content creation",
      "Social media following or publication credits",
      "Health insurance",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "Variable based on audience size and monetization",
      amount: "$1,000+ USD/month",
      notes: "Many creators start with savings and build income locally"
    },
    remoteWork: {
      feasible: true,
      description: "Content creation is inherently location-independent. Argentina's visual diversity makes it especially appealing.",
      considerations: [
        "Lower costs allow more time to build audience",
        "Unique content angles from living in Argentina",
        "Growing expat creator community",
        "Internet infrastructure supports content uploads",
        "Time zone challenges for live content with US audiences"
      ]
    },
    localJobMarket: {
      demand: "Medium",
      averageSalary: "Highly variable",
      keyCities: ["Buenos Aires", "Mendoza", "Bariloche"],
      industries: ["Travel", "Lifestyle", "Food", "Culture"]
    },
    professionalAssociations: [
      {
        name: "Argentina Travel Creators",
        description: "Community of travel-focused content creators"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Your content portfolio is your credential."
    },
    taxConsiderations: [
      "Income from foreign platforms (YouTube, Patreon) typically not taxed locally",
      "Local brand deals may require tax registration",
      "Keep detailed records for home country tax obligations"
    ],
    networkingTips: [
      "Connect with other expat creators",
      "Collaborate with local businesses for content",
      "Attend creator meetups in Palermo",
      "Join Buenos Aires Creative Community"
    ],
    faqs: [
      {
        question: "Is Argentina good for travel creators?",
        answer: "Excellent. From Buenos Aires' urban energy to Patagonia's wilderness, the variety of content opportunities is unmatched. Plus, your travel budget goes further."
      }
    ],
    relatedProfessions: ["ux-designer", "english-teacher"],
    resources: [
      {
        title: "Remote Work Guide",
        url: "/remote-work",
        description: "Setting up your creator workspace"
      }
    ],
    image: "/images/professions/content-creator.webp"
  },
  {
    slug: "data-analyst",
    name: "Data Analyst / Scientist",
    title: "Data Professional Guide for Argentina",
    subtitle: "Leverage your analytical skills in Argentina's data-driven economy",
    description: "Argentina's growing fintech and e-commerce sectors need data professionals. Discover visa pathways, salary expectations, and the local data community.",
    icon: "BarChart",
    category: "tech",
    overview: "Data roles are among the fastest-growing in Argentina's tech sector. Fintech companies, e-commerce platforms, and multinational corporations all need data analysts and scientists. The skillset translates well internationally, making it ideal for remote work arrangements.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "For remote data work with international companies",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa",
        description: "Through Argentine companies hiring data talent",
        difficulty: "Moderate",
        timeline: "1-3 months"
      }
    ],
    workPermitRequirements: [
      "Degree or demonstrated experience in data/analytics",
      "Portfolio or case studies",
      "Employment proof or client contracts",
      "Minimum income documentation",
      "Health insurance"
    ],
    incomeRequirements: {
      description: "Data roles command competitive salaries",
      amount: "$2,000 - $4,000+ USD/month",
      notes: "Remote work for US companies pays significantly more"
    },
    remoteWork: {
      feasible: true,
      description: "Data work is highly remote-friendly. Cloud-based tools make collaboration seamless across borders.",
      considerations: [
        "Strong demand for bilingual data professionals",
        "US companies value LATAM timezone overlap",
        "Local companies increasingly hire remote data talent",
        "Competitive advantage with Spanish language skills"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,000,000-4,000,000/month ($1,500-3,000 USD)",
      keyCities: ["Buenos Aires", "Cordoba"],
      industries: ["Fintech", "E-commerce", "Consulting", "SaaS"]
    },
    professionalAssociations: [
      {
        name: "Data Science Argentina",
        description: "Community of data professionals"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Skills and portfolio matter more than specific credentials."
    },
    taxConsiderations: [
      "Remote work income typically not taxed locally",
      "Local employment requires full tax compliance"
    ],
    networkingTips: [
      "Attend data science meetups",
      "Join Kaggle competitions with local teams",
      "Connect through Buenos Aires Tech community"
    ],
    faqs: [
      {
        question: "Is there demand for data professionals?",
        answer: "Yes, particularly in fintech and e-commerce. Companies like MercadoLibre, Nubank, and Globant hire data talent actively."
      }
    ],
    relatedProfessions: ["software-developer", "product-manager"],
    resources: [
      {
        title: "Tech Community Guide",
        url: "/resources",
        description: "Connect with Argentina's data community"
      }
    ],
    image: "/images/professions/data-analyst.webp"
  },
  {
    slug: "entrepreneur",
    name: "Entrepreneur / Founder",
    title: "Entrepreneur's Guide to Argentina",
    subtitle: "Start and scale your business in Argentina's emerging market",
    description: "Argentina presents unique opportunities for entrepreneurs despite economic challenges. Learn about business formation, visa options, and navigating the local ecosystem.",
    icon: "Rocket",
    category: "business",
    overview: "Argentina's entrepreneurial ecosystem has produced unicorns like MercadoLibre, OLX, and Globant. While economic volatility presents challenges, it also creates opportunities for innovative solutions. The country offers a large, educated market, competitive operating costs, and a culture that celebrates entrepreneurship.",
    visaOptions: [
      {
        name: "Investment Visa",
        description: "For entrepreneurs investing significantly in Argentine business",
        difficulty: "Complex",
        timeline: "3-6 months"
      },
      {
        name: "Digital Nomad Visa",
        description: "For bootstrapped founders with existing income",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Mercosur Visa",
        description: "Available to citizens of Mercosur countries for business activities",
        difficulty: "Easy",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Business plan (for investment visa)",
      "Proof of funds for business operations",
      "Company registration with AFIP",
      "Health insurance",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "Investment visa requires significant capital",
      amount: "$50,000+ USD investment for visa pathway",
      notes: "Digital Nomad Visa only requires $1,500/month income"
    },
    remoteWork: {
      feasible: true,
      description: "Many entrepreneurs start remotely while building their Argentine operations.",
      considerations: [
        "Complex regulatory environment requires local expertise",
        "High inflation requires careful financial planning",
        "Strong talent pool at competitive salaries",
        "Multiple currency environment creates complexity",
        "Growing venture capital presence"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "N/A - Variable by business success",
      keyCities: ["Buenos Aires", "Cordoba", "Mendoza"],
      industries: ["Fintech", "Agtech", "Marketplaces", "SaaS"]
    },
    professionalAssociations: [
      {
        name: "ASEA (Argentine Entrepreneurs Association)",
        description: "Support network for entrepreneurs"
      },
      {
        name: "Endeavor Argentina",
        description: "High-impact entrepreneurship network"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Business experience matters more than formal credentials."
    },
    taxConsiderations: [
      "Complex tax regime requires professional accounting",
      "Multiple exchange rates affect business planning",
      "High employer taxes (approximately 50% on top of salaries)",
      "Export businesses have tax advantages",
      "Consider hiring a gestor (administrative helper)"
    ],
    networkingTips: [
      "Attend BA Tech Week events",
      "Join Endeavor or ASEA networks",
      "Connect with accelerators like NXTP Labs",
      "Engage with venture capital community",
      "Participate in Startup Weekend events"
    ],
    faqs: [
      {
        question: "Is Argentina a good place to start a business?",
        answer: "It depends on your sector. Tech and export-oriented businesses can thrive due to talent quality and costs. Domestic market businesses face inflation and regulatory challenges but access a large, educated consumer base."
      },
      {
        question: "How much does it cost to incorporate?",
        answer: "Company formation costs approximately $1,000-3,000 USD depending on structure. Ongoing compliance costs require budgeting for accounting and legal support."
      }
    ],
    relatedProfessions: ["software-developer", "product-manager"],
    resources: [
      {
        title: "Investment Guide",
        url: "/investments",
        description: "Investment opportunities and business climate"
      },
      {
        title: "Banking Guide",
        url: "/banking",
        description: "Business banking setup"
      }
    ],
    image: "/images/professions/entrepreneur.webp"
  },
  {
    slug: "translator",
    name: "Translator / Interpreter",
    title: "Translation Professional Guide for Argentina",
    subtitle: "Build your language career in a bilingual business hub",
    description: "Argentina's international business connections create steady demand for translation and interpretation services. Learn how to establish yourself as a language professional.",
    icon: "Languages",
    category: "creative",
    overview: "Buenos Aires serves as a business hub for Latin America, creating consistent demand for English-Spanish translation and interpretation. Legal, medical, technical, and business translation are all viable specializations. The work can be done remotely for international clients or locally for businesses operating in Argentina.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "For translators with international client base",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Freelancer Visa",
        description: "For establishing local translation practice",
        difficulty: "Moderate",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Translation credentials or demonstrated experience",
      "Portfolio of translation work",
      "Client contracts or employment proof",
      "Health insurance",
      "Background check"
    ],
    incomeRequirements: {
      description: "Income varies by specialization and client type",
      amount: "$1,200 - $2,500 USD/month",
      notes: "Technical and legal translation commands higher rates"
    },
    remoteWork: {
      feasible: true,
      description: "Translation is highly location-independent. Many translators work for agencies worldwide while living in Argentina.",
      considerations: [
        "Time zones affect interpretation work more than translation",
        "Specialized knowledge increases rates significantly",
        "CAT tools work the same regardless of location",
        "Consider certification for legal/medical translation"
      ]
    },
    localJobMarket: {
      demand: "Medium",
      averageSalary: "ARS $1,000,000-2,000,000/month ($800-1,500 USD) locally",
      keyCities: ["Buenos Aires"],
      industries: ["Legal", "Medical", "Technical", "Business"]
    },
    professionalAssociations: [
      {
        name: "CTPCBA (Colegio de Traductores)",
        description: "Professional translators association for public translation certification"
      }
    ],
    credentialRecognition: {
      required: true,
      description: "Certification is required for legal (sworn) translation. Other fields value credentials but experience matters most.",
      process: "Public Translator certification requires examination through the CTPCBA for legal documents."
    },
    taxConsiderations: [
      "Freelance translation typically registered under monotributo",
      "International payments require proper documentation",
      "Keep detailed records of all translations for tax purposes"
    ],
    networkingTips: [
      "Join translator associations",
      "Connect with law firms and medical practices",
      "Register with translation agencies",
      "Build direct client relationships"
    ],
    faqs: [
      {
        question: "Do I need certification to translate?",
        answer: "Only for legal (sworn) translation. For other fields, demonstrated skill and specialization matter more."
      }
    ],
    relatedProfessions: ["english-teacher", "content-creator"],
    resources: [
      {
        title: "Working in Argentina Guide",
        url: "/resources",
        description: "General employment resources"
      }
    ],
    image: "/images/professions/translator.webp"
  },
  {
    slug: "digital-marketing-manager",
    name: "Digital Marketing Manager",
    title: "Digital Marketing Manager Guide for Argentina",
    subtitle: "Lead marketing initiatives from Argentina's creative hub",
    description: "Argentina's digital marketing scene is booming with fintech, e-commerce, and SaaS companies seeking experienced marketing leaders. Discover visa pathways and salary expectations.",
    icon: "BarChart",
    category: "creative",
    overview: "Digital marketing managers are in high demand across Argentina's thriving tech ecosystem. From Buenos Aires' startup scene to multinational agencies, companies need experienced marketers who understand both global best practices and local market nuances. The role translates exceptionally well to remote work, with many Argentine-based marketers leading campaigns for US and EU companies while enjoying the country's favorable cost of living.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Perfect for remote marketing managers with international clients",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa (Sponsorship)",
        description: "Through Argentine tech companies and marketing agencies",
        difficulty: "Moderate",
        timeline: "1-3 months"
      },
      {
        name: "Freelancer Visa",
        description: "For independent consultants with multiple clients",
        difficulty: "Moderate",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Demonstrated marketing experience (3+ years preferred)",
      "Portfolio of successful campaigns or client results",
      "Proof of employment or client contracts",
      "Minimum income documentation ($2,000+/month)",
      "Health insurance valid in Argentina",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "Marketing managers should demonstrate stable monthly income",
      amount: "$2,000 - $4,500+ USD/month",
      notes: "Remote US roles pay significantly more than local positions"
    },
    remoteWork: {
      feasible: true,
      description: "Digital marketing is highly remote-friendly. Campaign management, analytics, and strategy work seamlessly across time zones.",
      considerations: [
        "Strong demand for bilingual marketers (English/Spanish)",
        "US time zone overlap enables real-time collaboration",
        "Many US companies hire LATAM marketers for regional campaigns",
        "Local agencies increasingly offer remote positions",
        "Freelance consulting offers highest earning potential"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $1,800,000-3,500,000/month ($1,400-2,700 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba", "Rosario"],
      industries: ["Fintech", "E-commerce", "SaaS", "Agencies", "Media"]
    },
    professionalAssociations: [
      {
        name: " Argentine Marketing Association (AAM)",
        description: "Professional marketing association with networking events"
      },
      {
        name: "Buenos Aires Digital Marketing Community",
        description: "Meetup group for digital marketers"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Marketing is portfolio and results-driven. Certifications (Google, HubSpot, Meta) are valued but not required."
    },
    taxConsiderations: [
      "Remote work for foreign companies typically not taxed locally",
      "Local employment requires AFIP registration",
      "Freelancers should register under monotributo",
      "Keep detailed records of client payments",
      "Consult accountant for multi-country tax obligations"
    ],
    networkingTips: [
      "Join 'Marketing Argentina' Facebook groups",
      "Attend BA Tech Week marketing events",
      "Connect with agencies in Palermo Hollywood",
      "Engage with fintech marketing community",
      "Participate in LinkedIn marketing discussions"
    ],
    faqs: [
      {
        question: "Is there demand for English-speaking marketers?",
        answer: "Yes, especially in tech and multinational companies. Many Argentine startups operate in English and value marketers who can create content for global audiences."
      },
      {
        question: "What marketing skills are most in demand?",
        answer: "Performance marketing (Meta Ads, Google Ads), marketing automation, SEO/SEM, content marketing, and growth marketing are highly sought after."
      },
      {
        question: "Can I freelance for US clients from Argentina?",
        answer: "Absolutely. The Digital Nomad Visa specifically allows this. Many marketing managers build consulting practices serving US clients while living in Argentina."
      },
      {
        question: "What's the best neighborhood for marketing professionals?",
        answer: "Palermo Hollywood and Palermo Soho are the creative hubs, with many agencies and coworking spaces. Recoleta offers a more professional, established environment."
      }
    ],
    relatedProfessions: ["seo-specialist", "content-writer", "product-manager"],
    resources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Complete visa requirements for remote marketers"
      },
      {
        title: "Cost of Living Calculator",
        url: "/cost-of-living",
        description: "Estimate expenses as a marketing professional"
      }
    ],
    image: "/images/professions/digital-marketing-manager.webp"
  },
  {
    slug: "seo-specialist",
    name: "SEO Specialist",
    title: "SEO Specialist Guide for Argentina",
    subtitle: "Optimize your career from Latin America's growing SEO hub",
    description: "Argentina's SEO community is rapidly expanding. Learn how to leverage your search marketing skills while enjoying Argentina's lifestyle and cost advantages.",
    icon: "BarChart",
    category: "creative",
    overview: "SEO specialists are increasingly in demand as Argentine companies expand internationally and US companies target LATAM markets. The work is perfectly suited to remote arrangements, allowing SEO professionals to earn USD while benefiting from Argentina's lower cost of living. The local SEO community is active and growing, with regular meetups and knowledge sharing.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Ideal for SEOs working with international clients",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Freelancer Visa",
        description: "For independent SEO consultants",
        difficulty: "Moderate",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Demonstrated SEO experience with case studies",
      "Portfolio showing ranking improvements",
      "Client contracts or employment proof",
      "Minimum income documentation ($1,500+/month)",
      "Health insurance",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "SEO specialists can earn well remotely",
      amount: "$1,500 - $4,000+ USD/month",
      notes: "Freelance SEO consultants often earn more than salaried positions"
    },
    remoteWork: {
      feasible: true,
      description: "SEO work is entirely location-independent. Keyword research, audits, content optimization, and reporting can be done from anywhere.",
      considerations: [
        "Strong demand for Spanish-language SEO expertise",
        "US companies value bilingual SEOs for LATAM markets",
        "Tools (Ahrefs, SEMrush, GA) work seamlessly remotely",
        "Time zone alignment with US clients",
        "Growing local SEO agency ecosystem"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $1,500,000-3,000,000/month ($1,200-2,300 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba"],
      industries: ["E-commerce", "SaaS", "Agencies", "Media", "Fintech"]
    },
    professionalAssociations: [
      {
        name: "SEO Buenos Aires",
        description: "Local SEO professional community"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "SEO is results-driven. Certifications help but demonstrated success matters most."
    },
    taxConsiderations: [
      "Remote client income typically not taxed locally",
      "Freelancers should register under monotributo",
      "Keep records of all client payments"
    ],
    networkingTips: [
      "Join SEO communities on Slack and Discord",
      "Attend digital marketing meetups",
      "Connect with agency owners",
      "Participate in online SEO forums"
    ],
    faqs: [
      {
        question: "Is Argentina good for SEO professionals?",
        answer: "Yes. The growing tech ecosystem creates demand, and the favorable exchange rate makes USD earnings go very far. Plus, the work is perfectly remote-friendly."
      }
    ],
    relatedProfessions: ["digital-marketing-manager", "content-writer"],
    resources: [
      {
        title: "Remote Work Guide",
        url: "/remote-work",
        description: "Setting up for remote SEO work"
      }
    ],
    image: "/images/professions/seo-specialist.webp"
  },
  {
    slug: "content-writer",
    name: "Content Writer",
    title: "Content Writer Guide for Argentina",
    subtitle: "Build your writing career in an inspiring environment",
    description: "Argentina's rich culture and affordable living make it ideal for content writers. Learn about visa options, client acquisition, and building your portfolio.",
    icon: "Pen",
    category: "creative",
    overview: "Content writing is one of the most flexible professions for expats in Argentina. Whether writing for tech blogs, travel publications, marketing agencies, or corporate clients, writers can work entirely remotely. Argentina's inspiring environment—from Buenos Aires' cafe culture to Patagonia's landscapes—provides endless creative fuel.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Perfect for writers with international clients",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      }
    ],
    workPermitRequirements: [
      "Writing portfolio demonstrating your skills",
      "Client contracts or publication credits",
      "Minimum income documentation ($1,000+/month)",
      "Health insurance",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "Content writing income varies by niche and experience",
      amount: "$1,000 - $3,000+ USD/month",
      notes: "Technical and marketing writers earn more than general content writers"
    },
    remoteWork: {
      feasible: true,
      description: "Writing is inherently location-independent. All you need is a laptop and internet connection.",
      considerations: [
        "Lower living costs allow time to build client base",
        "Unique perspective from living in Argentina",
        "Growing demand for English content globally",
        "Many US publications hire remote writers",
        "Coworking spaces provide productive environment"
      ]
    },
    localJobMarket: {
      demand: "Medium",
      averageSalary: "ARS $800,000-1,800,000/month ($600-1,400 USD locally)",
      keyCities: ["Buenos Aires", "Cordoba", "Mendoza"],
      industries: ["Media", "Marketing", "Tech", "Travel"]
    },
    professionalAssociations: [
      {
        name: "Buenos Aires Writers Group",
        description: "Community for English-speaking writers"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Your portfolio is your credential. Writing samples matter more than degrees."
    },
    taxConsiderations: [
      "Remote writing income typically not taxed locally",
      "Freelancers should register under monotributo",
      "Keep detailed records of all publications and payments"
    ],
    networkingTips: [
      "Join writer communities on Facebook and Reddit",
      "Attend Buenos Aires literary events",
      "Connect with content agencies",
      "Build relationships with editors"
    ],
    faqs: [
      {
        question: "Can I find writing work in Argentina?",
        answer: "Most writers work remotely for US/EU clients. Local English-language opportunities exist but are limited. The Digital Nomad Visa is designed for this type of work."
      }
    ],
    relatedProfessions: ["content-creator", "seo-specialist"],
    resources: [
      {
        title: "Remote Work Guide",
        url: "/remote-work",
        description: "Resources for remote writers"
      }
    ],
    image: "/images/professions/content-writer.webp"
  },
  {
    slug: "virtual-assistant",
    name: "Virtual Assistant",
    title: "Virtual Assistant Guide for Argentina",
    subtitle: "Build your VA business while enjoying Argentina's lifestyle and cost advantages",
    description: "Argentina's growing pool of bilingual virtual assistants makes it an ideal base for VA professionals. Learn about visa pathways, client acquisition, and thriving as a remote assistant.",
    icon: "Briefcase",
    category: "business",
    overview: "Virtual assistance is one of the most accessible and flexible careers for expats in Argentina. With over 2,000 Argentine VAs already working remotely on platforms like ProsMarketplace, the ecosystem is well-established. The country's strong English proficiency (#1 in Latin America), favorable time zone overlap with the US, and significantly lower cost of living make it an ideal base for VA professionals. Whether you specialize in executive assistance, customer service, social media management, or specialized admin support, Argentina offers the infrastructure and lifestyle to build a successful remote VA business.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Perfect for VAs with international clients. No local employment restrictions.",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Freelancer Visa",
        description: "For independent VAs building a client portfolio in Argentina",
        difficulty: "Moderate",
        timeline: "1-2 months"
      }
    ],
    workPermitRequirements: [
      "Demonstrated VA experience or admin background",
      "Client contracts or platform profiles (Upwork, Fiverr, etc.)",
      "Proof of minimum income ($1,000+/month)",
      "Health insurance valid in Argentina",
      "Criminal background check",
      "Professional references preferred"
    ],
    incomeRequirements: {
      description: "VAs need to demonstrate stable monthly income from clients",
      amount: "$1,000 - $3,000+ USD/month",
      notes: "Experienced VAs with US clients can earn $20-40/hour"
    },
    remoteWork: {
      feasible: true,
      description: "Virtual assistance is inherently remote. All tasks—email management, scheduling, customer service, data entry—can be performed from anywhere with reliable internet.",
      considerations: [
        "Strong demand for bilingual VAs (English/Spanish)",
        "1-2 hour time zone difference with US East Coast enables real-time support",
        "Lower living costs make competitive rates sustainable",
        "Growing community of Argentine VAs for networking",
        "Many VAs serve US real estate, legal, and e-commerce sectors"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $1,000,000-2,500,000/month ($800-2,000 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba", "Mendoza"],
      industries: ["Remote Services", "Real Estate", "Legal", "E-commerce", "Consulting"]
    },
    professionalAssociations: [
      {
        name: "Virtual Latinos",
        description: "Platform connecting LATAM VAs with US clients"
      },
      {
        name: "ProsMarketplace",
        description: "Major platform with 2,000+ Argentine VA profiles"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "VA work is skills-based. Experience, reliability, and client testimonials matter more than formal credentials."
    },
    taxConsiderations: [
      "Remote work for foreign clients typically not taxed locally",
      "Freelancers should register under monotributo for local compliance",
      "Keep detailed records of all client payments",
      "Consider hiring an accountant if you have multiple income streams",
      "Platform payments (Upwork, Fiverr) often handle tax withholding"
    ],
    networkingTips: [
      "Join 'Virtual Assistants Argentina' Facebook groups",
      "Create profiles on Upwork, Fiverr, and Freelancer",
      "Connect with Argentine VA communities on LinkedIn",
      "Attend Buenos Aires coworking space events",
      "Build relationships with US-based VA agencies"
    ],
    faqs: [
      {
        question: "What services can I offer as a VA from Argentina?",
        answer: "Common services include executive assistance, email/calendar management, customer service, social media management, data entry, bookkeeping, travel planning, and specialized support for real estate or legal professionals. Bilingual VAs can also offer translation and interpretation services."
      },
      {
        question: "How do I find VA clients while living in Argentina?",
        answer: "Most VAs find clients through platforms like Upwork, Fiverr, Virtual Latinos, and ProsMarketplace. Building a strong profile with portfolio examples is crucial. Many successful VAs also get clients through referrals and by specializing in niches like real estate or legal support."
      },
      {
        question: "Do I need to speak Spanish to be a VA in Argentina?",
        answer: "Not necessarily for the work itself—many VA clients are US-based and prefer English. However, Spanish helps enormously for daily life in Argentina. Bilingual VAs have a competitive advantage and can command higher rates."
      },
      {
        question: "What's the best neighborhood for VAs in Buenos Aires?",
        answer: "Palermo Hollywood and Palermo Soho are popular with remote workers due to their coworking spaces and cafes. Belgrano offers a quieter, more residential feel. All have reliable internet and are close to the city's business districts."
      },
      {
        question: "How much can I earn as a VA in Argentina?",
        answer: "Entry-level VAs typically earn $800-1,500/month working with international clients. Experienced VAs with specialized skills can earn $2,000-4,000+/month. The favorable exchange rate means your USD earnings go much further in Argentina than in the US."
      }
    ],
    relatedProfessions: ["executive-assistant", "customer-service", "social-media-manager"],
    resources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Complete requirements for remote workers"
      },
      {
        title: "Cost of Living Calculator",
        url: "/cost-of-living",
        description: "Estimate your monthly expenses"
      },
      {
        title: "Best Neighborhoods for Remote Workers",
        url: "/blog/best-neighborhoods-expats-buenos-aires",
        description: "Where to live in Buenos Aires"
      }
    ],
    image: "/images/professions/virtual-assistant.webp"
  },
  {
    slug: "business-consultant",
    name: "Business Consultant",
    title: "Business Consultant Guide for Argentina",
    subtitle: "Navigate Argentina's complex business landscape as an independent advisor",
    description: "Argentina's unique economic environment creates high demand for experienced business consultants. Learn about visa pathways, client acquisition, and building your consulting practice.",
    icon: "Briefcase",
    category: "business",
    overview: "Business consulting in Argentina presents both unique challenges and significant opportunities. The country's complex regulatory environment, currency controls, and high inflation rate create demand for experienced advisors who can help companies navigate these challenges. Foreign consultants bring valuable international perspective, particularly in areas like digital transformation, operational efficiency, and international expansion. Whether serving multinational corporations entering the Argentine market, local companies seeking to expand abroad, or international clients remotely, consultants can build lucrative practices while enjoying Argentina's exceptional lifestyle and lower cost of living.",
    visaOptions: [
      {
        name: "Investment Visa",
        description: "For consultants making significant investment in Argentine operations (company formation, office setup)",
        difficulty: "Complex",
        timeline: "3-6 months"
      },
      {
        name: "Digital Nomad Visa",
        description: "For consultants serving international clients remotely. Most common pathway.",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa (Company Sponsorship)",
        description: "If hired by Argentine consulting firm or multinational",
        difficulty: "Moderate",
        timeline: "1-3 months"
      }
    ],
    workPermitRequirements: [
      "Demonstrated consulting experience (5+ years preferred)",
      "Professional credentials or MBA (valued but not required)",
      "Client contracts or letters of intent",
      "Proof of minimum income ($2,500+/month for Digital Nomad Visa)",
      "Health insurance valid in Argentina",
      "Criminal background check",
      "Business plan (for Investment Visa)"
    ],
    incomeRequirements: {
      description: "Consultants need higher income to demonstrate financial stability",
      amount: "$2,500 - $8,000+ USD/month",
      notes: "International consulting rates are significantly higher than local Argentine rates"
    },
    remoteWork: {
      feasible: true,
      description: "Business consulting adapts well to remote delivery, especially strategy and advisory work. Implementation projects may require periodic travel to client sites.",
      considerations: [
        "Time zone alignment with US enables real-time client meetings",
        "Lower overhead costs allow competitive pricing vs US consultants",
        "International experience is valued by Argentine companies",
        "Currency arbitrage means USD earnings go much further",
        "Some projects require local presence for credibility"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,500,000-6,000,000/month ($2,000-4,500 USD at blue rate) for local consulting",
      keyCities: ["Buenos Aires", "Cordoba", "Rosario"],
      industries: ["Management Consulting", "Strategy", "Operations", "Digital Transformation", "International Trade"]
    },
    professionalAssociations: [
      {
        name: "Argentine Association of Business Consultants (AACC)",
        description: "Professional association for management consultants"
      },
      {
        name: "Endeavor Argentina",
        description: "High-impact entrepreneurship network with consulting opportunities"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Consulting is credentials-agnostic. Track record and client results matter more than formal degrees. MBA or industry certifications (PMP, Six Sigma) add credibility."
    },
    taxConsiderations: [
      "Remote consulting for foreign clients typically not taxed locally under Digital Nomad Visa",
      "Local consulting requires AFIP registration and tax compliance",
      "Monotributo registration may be suitable for smaller operations",
      "Investment Visa holders must comply with business tax obligations",
      "Professional accounting support strongly recommended for local work",
      "Double taxation treaties with many countries"
    ],
    networkingTips: [
      "Join Endeavor Argentina and AACC for high-level networking",
      "Attend Buenos Aires Tech Week and business forums",
      "Connect with Argentine-American Chamber of Commerce",
      "Engage with industry-specific associations",
      "Build relationships with venture capital firms",
      "Leverage LinkedIn for international client acquisition"
    ],
    faqs: [
      {
        question: "What consulting services are most in demand in Argentina?",
        answer: "Digital transformation, e-commerce strategy, operational efficiency, international expansion (especially to US/EU markets), financial restructuring, and supply chain optimization are highly sought after. Consultants with fintech or agtech expertise are particularly valued."
      },
      {
        question: "Can I consult for US clients while living in Argentina?",
        answer: "Absolutely. The Digital Nomad Visa is designed for this. Many consultants maintain US client bases while enjoying Argentina's lifestyle. Time zone overlap with the US East Coast (1-2 hours ahead) makes real-time collaboration feasible."
      },
      {
        question: "Do I need to speak Spanish to consult in Argentina?",
        answer: "For local Argentine clients, Spanish is essential. However, many multinational companies and startups in Buenos Aires operate in English. If serving international clients remotely, Spanish isn't required for the work itself, though it greatly enriches your experience living in Argentina."
      },
      {
        question: "How do Argentine businesses typically hire consultants?",
        answer: "Local companies often prefer face-to-face relationships initially. Networking through chambers of commerce, industry associations, and referrals is crucial. Contracts may be less formal than in US/EU markets. Payment terms can be challenging due to currency controls—many consultants prefer USD payment or payment outside Argentina."
      },
      {
        question: "What's unique about consulting in Argentina?",
        answer: "Argentina's economic volatility (inflation, currency controls) creates both challenges and opportunities. Consultants who can help businesses navigate these complexities are highly valued. Building trust is paramount—Argentine business culture prioritizes relationships. Patience with bureaucratic processes is essential."
      }
    ],
    relatedProfessions: ["entrepreneur", "financial-advisor", "product-manager"],
    resources: [
      {
        title: "Investment Visa Guide",
        url: "/visas/investment",
        description: "Requirements for business investment visa"
      },
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Visa for remote consultants"
      },
      {
        title: "Business Culture Guide",
        url: "/culture",
        description: "Understanding Argentine business practices"
      }
    ],
    image: "/images/professions/business-consultant.webp"
  },
  {
    slug: "financial-advisor",
    name: "Financial Advisor",
    title: "Financial Advisor Guide for Argentina",
    subtitle: "Navigate Argentina's complex financial landscape as an independent advisor",
    description: "Argentina's unique economic environment creates demand for experienced financial advisors. Learn about regulatory requirements, visa pathways, and building your advisory practice.",
    icon: "BarChart",
    category: "business",
    overview: "Financial advisory in Argentina operates within one of the world's most complex economic environments. With inflation rates that have historically challenged savings, currency controls that limit capital movement, and a sophisticated wealthy class seeking to protect and grow assets, the demand for skilled financial advisors is substantial. Foreign advisors bring valuable perspective on international diversification, offshore structuring, and navigating multi-jurisdictional wealth management. The key opportunities include advising high-net-worth Argentines on international diversification, helping expats navigate Argentina's financial system, and serving international clients remotely. Success requires understanding Argentina's unique financial culture—where wealth preservation often takes precedence over growth, and where relationships and trust are paramount.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "For advisors serving international clients remotely. Cannot advise Argentine residents without local licensing.",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Investment Visa",
        description: "For advisors establishing a formal advisory practice in Argentina with significant capital investment",
        difficulty: "Complex",
        timeline: "3-6 months"
      },
      {
        name: "Work Visa (Sponsorship)",
        description: "If hired by Argentine bank, wealth management firm, or multinational financial institution",
        difficulty: "Moderate",
        timeline: "1-3 months"
      }
    ],
    workPermitRequirements: [
      "Demonstrated financial advisory experience (5+ years)",
      "Professional certifications (CFP, CFA, or equivalent) strongly preferred",
      "Clean regulatory record in home jurisdiction",
      "Proof of professional liability insurance",
      "Minimum income documentation ($2,500+/month)",
      "Health insurance valid in Argentina",
      "Criminal background check",
      "Note: Advising Argentine residents requires compliance with CNV (National Securities Commission) regulations"
    ],
    incomeRequirements: {
      description: "Financial advisors need to demonstrate substantial stable income",
      amount: "$3,000 - $10,000+ USD/month",
      notes: "Fee-based advisory models work better than commission-based in Argentina's regulatory environment"
    },
    remoteWork: {
      feasible: true,
      description: "Remote financial advisory is feasible for international clients, though relationship-heavy nature of the work benefits from occasional face-to-face meetings. Time zone alignment with US enables real-time client consultations.",
      considerations: [
        "Serving US clients from Argentina requires compliance with SEC regulations",
        "Advising Argentine residents requires local licensing (CNV registration)",
        "Cross-border tax advice requires expertise in both jurisdictions",
        "Currency considerations affect fee structures and client billing",
        "Building trust remotely requires exceptional communication and track record"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $3,000,000-8,000,000/month ($2,400-6,000 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba", "Rosario"],
      industries: ["Wealth Management", "Private Banking", "Family Offices", "Investment Advisory", "Tax Planning"]
    },
    professionalAssociations: [
      {
        name: "Argentine Financial Planning Association",
        description: "Professional association for financial planners"
      },
      {
        name: "CFP Board (International)",
        description: "CFP certification recognized internationally"
      }
    ],
    credentialRecognition: {
      required: true,
      description: "Advising Argentine residents requires compliance with CNV (Comisión Nacional de Valores) regulations. International certifications (CFP, CFA) are valued but may not provide automatic authorization to advise local clients.",
      process: "Contact CNV for specific licensing requirements. Many foreign advisors serve international clients only, avoiding local regulatory complexity."
    },
    taxConsiderations: [
      "Remote work for foreign clients typically not taxed locally under Digital Nomad Visa",
      "Advising local clients requires full tax registration with AFIP",
      "Personal Asset Tax (PAT) applies to worldwide assets for Argentine residents",
      "Wealth tax ranges from 0.5% to 1.5% on assets above threshold",
      "Professional accounting support essential for local compliance",
      "Double taxation treaties with many countries may apply"
    ],
    networkingTips: [
      "Connect with private banks and wealth managers in Buenos Aires",
      "Join Argentine-American Chamber of Commerce events",
      "Attend wealth management conferences in LATAM",
      "Build relationships with family office associations",
      "Engage with international tax and estate planning communities",
      "Develop referral relationships with international law firms"
    ],
    faqs: [
      {
        question: "Can I advise Argentine residents as a foreign financial advisor?",
        answer: "Advising Argentine residents on securities and investments requires compliance with CNV (National Securities Commission) regulations and proper licensing. Many foreign advisors instead focus on international clients or partner with locally licensed professionals for Argentine clients."
      },
      {
        question: "What's unique about financial advising in Argentina?",
        answer: "Argentina's history of economic volatility has shaped a unique financial culture. Wealth preservation, currency diversification, and offshore asset protection are often higher priorities than growth. Inflation protection is a constant consideration. Trust and long-term relationships are paramount."
      },
      {
        question: "Can I serve US clients from Argentina?",
        answer: "Yes, but you must maintain compliance with SEC regulations. This typically requires maintaining your US licensing, complying with state-specific requirements, and potentially structuring your practice through a US-registered entity. Many advisors on Digital Nomad Visas serve US clients remotely."
      },
      {
        question: "How do currency controls affect financial advising?",
        answer: "Argentina's currency controls (cep) limit the movement of capital and create multiple exchange rates (official vs. blue dollar). This significantly impacts wealth management strategies, estate planning, and international diversification. Advisors must understand these complexities to serve Argentine clients effectively."
      },
      {
        question: "What are the biggest opportunities for financial advisors in Argentina?",
        answer: "Key opportunities include: (1) Helping wealthy Argentines diversify internationally, (2) Advising expats on navigating Argentina's financial system, (3) Cross-border estate planning for international families, (4) Tax-efficient structuring for global assets, and (5) Retirement planning for those considering Argentina as a retirement destination."
      }
    ],
    relatedProfessions: ["business-consultant", "entrepreneur", "accountant"],
    resources: [
      {
        title: "CNV - National Securities Commission",
        url: "https://www.cnv.gov.ar",
        description: "Regulatory requirements for financial advisors"
      },
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Visa requirements for remote advisors"
      },
      {
        title: "Investment Visa Guide",
        url: "/visas/investment",
        description: "Requirements for establishing local practice"
      }
    ],
    image: "/images/professions/financial-advisor.webp"
  },
  {
    slug: "devops-engineer",
    name: "DevOps Engineer",
    title: "DevOps Engineer Guide for Argentina",
    subtitle: "Build and scale infrastructure from Latin America's emerging tech hub",
    description: "Argentina's cloud infrastructure market is growing rapidly. Learn how DevOps engineers can thrive in Argentina's tech ecosystem with remote opportunities and local demand.",
    icon: "Code",
    category: "tech",
    overview: "DevOps engineering has emerged as one of the most in-demand tech specialties in Argentina. As local companies accelerate their cloud migrations and international firms seek cost-effective DevOps talent, the opportunities for skilled engineers have expanded dramatically. Argentine DevOps professionals are increasingly working with cutting-edge technologies—Kubernetes, Terraform, AWS/GCP/Azure, CI/CD pipelines—while enjoying the country's exceptional lifestyle and favorable cost of living. The role is perfectly suited to remote work, with many Argentine DevOps engineers managing infrastructure for US and EU companies from Buenos Aires coworking spaces.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Ideal for DevOps engineers working with international companies remotely",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa (Sponsorship)",
        description: "For DevOps roles at Argentine tech companies or multinationals",
        difficulty: "Moderate",
        timeline: "1-3 months"
      }
    ],
    workPermitRequirements: [
      "Demonstrated DevOps experience (3+ years)",
      "Cloud platform certifications (AWS, GCP, or Azure) preferred",
      "Portfolio of infrastructure projects or GitHub contributions",
      "Employment contract or client agreements",
      "Minimum income documentation ($2,000+/month)",
      "Health insurance valid in Argentina",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "DevOps engineers command premium salaries in the remote market",
      amount: "$2,500 - $6,000+ USD/month",
      notes: "Senior DevOps engineers with cloud certifications can earn top rates"
    },
    remoteWork: {
      feasible: true,
      description: "DevOps is inherently remote-friendly. Infrastructure management, deployments, and monitoring can be performed from anywhere with reliable internet and VPN access.",
      considerations: [
        "24/7 on-call rotation may require adjustment for US time zones",
        "Strong demand for bilingual DevOps engineers in LATAM markets",
        "US companies value Argentine DevOps talent for timezone overlap",
        "Cloud infrastructure costs vary—factor into remote work setup",
        "Many teams use async communication tools (Slack, PagerDuty) effectively"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,500,000-5,000,000/month ($2,000-4,000 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba", "Mendoza"],
      industries: ["Fintech", "SaaS", "E-commerce", "Cloud Services", "Gaming"]
    },
    professionalAssociations: [
      {
        name: "DevOps Buenos Aires",
        description: "Local DevOps community with regular meetups"
      },
      {
        name: "Cloud Native Argentina",
        description: "Community for Kubernetes and cloud-native technologies"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "DevOps is skills-based. Certifications (AWS, CKA, etc.) help but demonstrated experience and infrastructure projects matter most."
    },
    taxConsiderations: [
      "Remote work for foreign companies typically not taxed locally",
      "Local employment requires AFIP registration",
      "Freelancers should register under monotributo",
      "Stock options may have complex tax implications",
      "Consult accountant for multi-country situations"
    ],
    networkingTips: [
      "Join DevOps BA and Cloud Native meetups",
      "Attend Kubernetes Community Days Buenos Aires",
      "Participate in BA Tech Week infrastructure tracks",
      "Connect with DevOps professionals on LinkedIn",
      "Contribute to open-source projects to build reputation"
    ],
    faqs: [
      {
        question: "Is there demand for DevOps engineers in Argentina?",
        answer: "Yes, extremely high demand. Both local companies (MercadoLibre, Globant, Nubank) and international firms actively recruit Argentine DevOps talent. The combination of strong technical skills, English proficiency, and timezone alignment makes Argentine DevOps engineers highly sought after."
      },
      {
        question: "What cloud platforms are most used in Argentina?",
        answer: "AWS dominates the market, followed by Google Cloud Platform and Microsoft Azure. Many companies run hybrid or multi-cloud setups. Knowledge of Kubernetes, Docker, Terraform, and CI/CD tools (Jenkins, GitLab CI, GitHub Actions) is highly valued."
      },
      {
        question: "Can I work on-call shifts from Argentina for US companies?",
        answer: "Yes, though timezone differences need consideration. Many teams distribute on-call across time zones, with Argentine engineers covering LATAM hours or sharing rotation with US colleagues. Clear escalation procedures and documentation help make this work smoothly."
      }
    ],
    relatedProfessions: ["software-developer", "cloud-architect", "site-reliability-engineer"],
    resources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Visa requirements for remote DevOps work"
      },
      {
        title: "Tech Community Guide",
        url: "/resources",
        description: "Connect with Argentina's DevOps community"
      }
    ],
    image: "/images/professions/devops-engineer.webp"
  },
  {
    slug: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    title: "Cybersecurity Analyst Guide for Argentina",
    subtitle: "Protect digital assets from Latin America's growing security hub",
    description: "Argentina's cybersecurity sector is expanding rapidly. Learn how security professionals can build their careers while enjoying Argentina's lifestyle advantages.",
    icon: "Code",
    category: "tech",
    overview: "Cybersecurity has become a critical priority for Argentine businesses as digital transformation accelerates and cyber threats grow more sophisticated. The country's strong technical education system, combined with high English proficiency, has produced a growing pool of skilled security professionals. From security operations centers (SOCs) to penetration testing and compliance consulting, cybersecurity roles offer excellent remote work opportunities. Argentine security professionals are increasingly serving international clients while benefiting from the country's lower cost of living. The field offers strong job security, continuous learning opportunities, and the satisfaction of protecting organizations from evolving threats.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "For security analysts working remotely with international firms",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa (Sponsorship)",
        description: "For roles at Argentine companies, banks, or security firms",
        difficulty: "Moderate",
        timeline: "1-3 months"
      }
    ],
    workPermitRequirements: [
      "Cybersecurity experience or relevant IT background",
      "Security certifications (CISSP, CEH, CompTIA Security+, etc.) valued",
      "Portfolio of security projects or documented experience",
      "Employment contract or client agreements",
      "Minimum income documentation ($2,000+/month)",
      "Health insurance valid in Argentina",
      "Criminal background check (essential for security roles)"
    ],
    incomeRequirements: {
      description: "Cybersecurity roles command premium compensation",
      amount: "$2,500 - $6,500+ USD/month",
      notes: "Senior security engineers and consultants earn top market rates"
    },
    remoteWork: {
      feasible: true,
      description: "Security operations, threat monitoring, vulnerability assessments, and compliance consulting can all be performed remotely. Many security teams operate 24/7 SOC models that accommodate distributed workforces.",
      considerations: [
        "SOC roles often require shift coverage including nights/weekends",
        "Incident response may require on-call availability",
        "Security clearance requirements may limit some opportunities",
        "Continuous learning essential as threats evolve rapidly",
        "Strong demand for bilingual security professionals"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,500,000-5,500,000/month ($2,000-4,200 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba", "Rosario"],
      industries: ["Banking", "Fintech", "Government", "Consulting", "Enterprise"]
    },
    professionalAssociations: [
      {
        name: "Argentine Information Security Association",
        description: "Professional security community"
      },
      {
        name: "OWASP Buenos Aires",
        description: "Web application security community chapter"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Certifications (CISSP, CEH, OSCP) add credibility but hands-on skills and security mindset matter most. Continuous learning is essential in this rapidly evolving field."
    },
    taxConsiderations: [
      "Remote security work for foreign clients typically not taxed locally",
      "Local employment requires AFIP registration",
      "Freelance security consulting may require monotributo",
      "Keep detailed records for security contract work"
    ],
    networkingTips: [
      "Join OWASP Buenos Aires chapter",
      "Attend BSides Buenos Aires security conference",
      "Participate in CTF competitions with local teams",
      "Connect with security professionals on LinkedIn",
      "Engage with Argentine bug bounty community"
    ],
    faqs: [
      {
        question: "Is cybersecurity a good career choice in Argentina?",
        answer: "Absolutely. With the growing digital economy and increasing cyber threats, demand for security professionals far outstrips supply. Both local companies and international firms actively recruit Argentine security talent. The field offers excellent job security and growth potential."
      },
      {
        question: "What cybersecurity specializations are most in demand?",
        answer: "SOC analysts, penetration testers, cloud security specialists, compliance consultants (ISO 27001, SOC 2), and incident responders are all highly sought after. Application security and DevSecOps skills are increasingly valued as companies shift left on security."
      }
    ],
    relatedProfessions: ["software-developer", "devops-engineer", "it-support"],
    resources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Visa requirements for remote security work"
      }
    ],
    image: "/images/professions/cybersecurity-analyst.webp"
  },
  {
    slug: "data-scientist",
    name: "Data Scientist",
    title: "Data Scientist Guide for Argentina",
    subtitle: "Turn data into insights from Latin America's data science hub",
    description: "Argentina's data science community is thriving. Learn how data scientists can leverage their skills while enjoying Argentina's exceptional lifestyle.",
    icon: "BarChart",
    category: "tech",
    overview: "Data science has emerged as one of Argentina's most dynamic tech fields, with strong demand across fintech, e-commerce, agriculture (agtech), and healthcare sectors. The country's solid mathematical and statistical education tradition has produced a deep talent pool, while international companies increasingly recognize the value of Argentine data scientists. The work translates perfectly to remote arrangements, with many data scientists serving US and EU companies from Buenos Aires. The field offers intellectual challenge, competitive compensation, and the satisfaction of driving data-informed decisions. Argentina's lower cost of living means data scientists can enjoy an excellent quality of life while building their careers.",
    visaOptions: [
      {
        name: "Digital Nomad Visa",
        description: "Perfect for data scientists working remotely with international teams",
        difficulty: "Easy",
        timeline: "2-4 weeks"
      },
      {
        name: "Work Visa (Sponsorship)",
        description: "For data science roles at Argentine companies or multinationals",
        difficulty: "Moderate",
        timeline: "1-3 months"
      }
    ],
    workPermitRequirements: [
      "Degree or demonstrated experience in data science, statistics, or related field",
      "Portfolio of data science projects (Kaggle, GitHub, etc.)",
      "Proficiency in Python, R, SQL, and ML frameworks",
      "Employment contract or client agreements",
      "Minimum income documentation ($2,000+/month)",
      "Health insurance valid in Argentina",
      "Criminal background check"
    ],
    incomeRequirements: {
      description: "Data scientists command strong salaries in the remote market",
      amount: "$2,500 - $6,000+ USD/month",
      notes: "ML engineers and senior data scientists earn premium rates"
    },
    remoteWork: {
      feasible: true,
      description: "Data science work is highly remote-friendly. Analysis, modeling, experimentation, and reporting can all be performed from anywhere with cloud access to data and compute resources.",
      considerations: [
        "Data access and security requirements may affect remote arrangements",
        "Collaboration with stakeholders benefits from timezone overlap",
        "Cloud computing (AWS SageMaker, Google AI Platform) enables remote ML",
        "Strong demand for bilingual data scientists for LATAM markets",
        "Kaggle competitions and open datasets support skill building"
      ]
    },
    localJobMarket: {
      demand: "High",
      averageSalary: "ARS $2,500,000-5,000,000/month ($2,000-4,000 USD at blue rate)",
      keyCities: ["Buenos Aires", "Cordoba"],
      industries: ["Fintech", "E-commerce", "Agtech", "Healthcare", "Consulting"]
    },
    professionalAssociations: [
      {
        name: "Data Science Argentina",
        description: "Community of data science professionals"
      },
      {
        name: "Python Argentina (PyAr)",
        description: "Python community with data science focus"
      }
    ],
    credentialRecognition: {
      required: false,
      description: "Data science is portfolio-driven. Degrees in math, stats, CS, or related fields help, but demonstrated skills and project portfolios matter most."
    },
    taxConsiderations: [
      "Remote data science work for foreign clients typically not taxed locally",
      "Local employment requires AFIP registration",
      "Freelance consulting may require monotributo",
      "Keep records of all client contracts and payments"
    ],
    networkingTips: [
      "Join Data Science Argentina meetups",
      "Participate in Kaggle competitions",
      "Attend BA Tech Week data tracks",
      "Connect with local AI/ML communities",
      "Engage with fintech data science teams"
    ],
    faqs: [
      {
        question: "Is there strong demand for data scientists in Argentina?",
        answer: "Yes, demand is very strong. Companies like MercadoLibre, Nubank, and numerous startups actively recruit data talent. International companies also hire Argentine data scientists for remote roles. The combination of strong analytical skills, English proficiency, and cost advantages makes Argentine data scientists attractive hires."
      },
      {
        question: "What industries hire data scientists in Argentina?",
        answer: "Fintech is the largest employer, followed by e-commerce, agriculture technology (precision agriculture, commodity forecasting), healthcare analytics, and consulting. The growing startup ecosystem creates opportunities across many verticals."
      }
    ],
    relatedProfessions: ["software-developer", "data-engineer", "machine-learning-engineer"],
    resources: [
      {
        title: "Digital Nomad Visa Guide",
        url: "/visas/digital-nomad",
        description: "Visa for remote data science work"
      }
    ],
    image: "/images/professions/data-scientist.webp"
  }
];

// Helper functions
export function getProfessionBySlug(slug: string): Profession | undefined {
  return professions.find(prof => prof.slug === slug);
}

export function getProfessionsByCategory(category: Profession["category"]): Profession[] {
  return professions.filter(prof => prof.category === category);
}

export function getAllCategories(): { slug: string; name: string; count: number }[] {
  const categories: Record<string, string> = {
    "tech": "Technology",
    "creative": "Creative",
    "business": "Business",
    "education": "Education",
    "healthcare": "Healthcare",
    "other": "Other"
  };

  return Object.entries(categories).map(([slug, name]) => ({
    slug,
    name,
    count: professions.filter(p => p.category === slug).length
  })).filter(cat => cat.count > 0);
}

export function getRelatedProfessions(slug: string): Profession[] {
  const profession = getProfessionBySlug(slug);
  if (!profession?.relatedProfessions) return [];
  
  return professions.filter(p => profession.relatedProfessions?.includes(p.slug));
}
