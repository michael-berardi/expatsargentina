// ============================================================================
// PSEO Data: Investment Opportunities in Argentina
// Comprehensive data for programmatic SEO pages on investment sectors
// ============================================================================

export interface InvestmentSector {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  marketSize: string;
  growthRate: string;
  minInvestment: string;
  riskLevel: "Low" | "Moderate" | "High" | "Variable";
  timeToReturn: string;
  keyOpportunities: string[];
  topRegions: { name: string; slug: string; highlight: string }[];
  legalConsiderations: string[];
  taxIncentives: string[];
  recentDevelopments: string[];
  faqs: { question: string; answer: string }[];
  relatedSectors: string[];
  image: string;
}

export const investmentSectors: InvestmentSector[] = [
  {
    slug: "real-estate",
    name: "Real Estate Investment",
    shortName: "Real Estate",
    description: "From Buenos Aires luxury apartments to Mendoza vineyards and Patagonia eco-lodges — Argentine real estate offers dollar-denominated opportunities at fractions of comparable global markets.",
    longDescription: "Argentina's real estate market presents a unique value proposition for foreign investors. Following years of currency devaluation and economic uncertainty, property prices in dollar terms have fallen significantly compared to regional peers. The Buenos Aires luxury market offers Parisian-style architecture at a fraction of Paris or Madrid prices. Mendoza's wine country provides lifestyle investment opportunities with rental income potential. Patagonia's tourism corridor — from Bariloche to El Calafate — is seeing increased demand for eco-lodges and adventure tourism infrastructure. The December 2023 repeal of foreign land ownership restrictions has removed a major barrier to entry. Investors are increasingly targeting the 'blue dollar' arbitrage — purchasing property at the unofficial exchange rate, which can offer immediate paper gains when calculated at official rates.",
    marketSize: "$12+ billion annual transactions",
    growthRate: "Variable by segment (8-15% in tourism real estate)",
    minInvestment: "$80,000 USD (residential); $200,000+ (commercial)",
    riskLevel: "Moderate",
    timeToReturn: "5-10 years for capital appreciation; immediate rental yields",
    keyOpportunities: [
      "Buenos Aires historic renovation projects in San Telmo and Palermo",
      "Mendoza vineyard estates with tourism accommodation potential",
      "Patagonia eco-lodge developments near national parks",
      "Córdoba student housing near universities",
      "Rosario riverfront properties as the city gentrifies",
      "Agricultural land in the Pampas (now open to foreign buyers)"
    ],
    topRegions: [
      { name: "Buenos Aires (CABA)", slug: "buenos-aires-city", highlight: "Luxury apartments, historic buildings, short-term rental potential" },
      { name: "Mendoza", slug: "mendoza", highlight: "Wine country estates, tourism properties, agricultural land" },
      { name: "Río Negro", slug: "rio-negro", highlight: "Bariloche tourism real estate, Lake District properties" },
      { name: "Córdoba", slug: "cordoba", highlight: "Student housing, tech corridor commercial space" },
      { name: "Santa Fe", slug: "santa-fe", highlight: "Rosario waterfront development, affordable urban properties" }
    ],
    legalConsiderations: [
      "Foreigners can now own rural land (restriction lifted December 2023)",
      "Property transactions typically conducted in USD cash or USD-denominated wire transfers",
      "Escrow services available but less regulated than US/EU markets",
      "Title insurance not standard practice — due diligence essential",
      "Property taxes (ABL) are low but vary significantly by municipality",
      "Rental contracts often indexed to inflation — hedges currency risk"
    ],
    taxIncentives: [
      "No capital gains tax on primary residence if held 2+ years",
      "Rental income taxed at progressive rates (5-35%)",
      "Property depreciation deductible for commercial investments",
      "Municipal tax breaks for historic building renovations in BA"
    ],
    recentDevelopments: [
      "December 2023: Foreign land ownership restrictions revoked by Milei decree",
      "2024: Increased foreign buyer interest in Buenos Aires luxury segment",
      "2024: Mendoza vineyard prices up 20% year-over-year",
      "2025: Short-term rental regulations tightening in Buenos Aires"
    ],
    faqs: [
      {
        question: "Can foreigners buy property in Argentina?",
        answer: "Yes. In December 2023, President Milei's government revoked the law that restricted foreign ownership of rural land and border-zone properties. Foreigners can now purchase residential, commercial, and agricultural land with the same rights as Argentine citizens."
      },
      {
        question: "Is it safe to buy real estate in Argentina given the economic instability?",
        answer: "Real estate has historically been a store of value during Argentina's inflationary cycles. Property in prime locations (Buenos Aires, Mendoza, Patagonia) has maintained dollar-equivalent values better than peso savings. However, liquidity can be limited during economic downturns, and due diligence is essential."
      },
      {
        question: "What is the 'blue dollar' and how does it affect real estate?",
        answer: "The 'blue dollar' is the unofficial exchange rate for USD in Argentina, typically 10-20% higher than the official rate. Many property transactions are conducted at blue dollar rates, meaning foreign buyers bringing USD cash or wire transfers can effectively purchase properties at a discount when calculated in official rate terms."
      },
      {
        question: "What are typical rental yields in Argentina?",
        answer: "Buenos Aires apartments typically yield 4-6% gross annually. Tourism properties in Mendoza and Patagonia can yield 6-10% seasonally. Student housing in university cities (Córdoba, Rosario) offers stable 5-7% yields with consistent demand."
      }
    ],
    relatedSectors: ["tourism", "agriculture", "energy"],
    image: "/images/investments/real-estate.webp"
  },
  {
    slug: "agriculture",
    name: "Agriculture & Agtech Investment",
    shortName: "Agriculture",
    description: "Argentina is the world's 3rd largest soybean exporter, 2nd largest corn exporter, and a major beef producer — with agtech innovation creating new investment verticals in precision farming and sustainable agriculture.",
    longDescription: "Argentina's Pampas region is one of the world's most productive agricultural zones, with fertile soil, adequate rainfall, and established infrastructure for grain and livestock production. The country ranks among the top global exporters of soybeans, corn, wheat, and beef. Beyond traditional farming, Argentina is emerging as a Latin American agtech hub — startups are developing precision agriculture tools, drone-based crop monitoring, and sustainable farming technologies. The combination of vast existing farmland, technical expertise from generations of farming families, and a new openness to foreign investment creates multiple entry points: direct land ownership (now permitted for foreigners), farm operation partnerships, agtech venture investment, and commodity trading operations. The depreciation of the peso has made Argentine agricultural assets increasingly competitive globally.",
    marketSize: "$40+ billion annual exports",
    growthRate: "3-5% steady; agtech segment 15-20%",
    minInvestment: "$150,000 USD (land lease); $500,000+ (farm operations)",
    riskLevel: "Variable",
    timeToReturn: "3-7 years for land appreciation; annual income from operations",
    keyOpportunities: [
      "Direct farmland ownership in Buenos Aires, Córdoba, and Santa Fe provinces",
      "Sustainable beef production for premium export markets",
      "Agtech startups focusing on precision agriculture and crop monitoring",
      "Vertical integration: farming + processing + export",
      "Organic farming conversion for European market access",
      "Silos and grain storage infrastructure"
    ],
    topRegions: [
      { name: "Buenos Aires Province", slug: "buenos-aires-province", highlight: "Soy, corn, wheat production; established infrastructure" },
      { name: "Córdoba", slug: "cordoba", highlight: "Diverse crops, agtech innovation hub, dairy" },
      { name: "Santa Fe", slug: "santa-fe", highlight: "Grain belt heartland, soy crushing facilities" },
      { name: "Entre Ríos", slug: "entre-rios", highlight: "Rice production, citrus, yerba mate" },
      { name: "La Pampa", slug: "la-pampa", highlight: "Cattle ranching, wheat, emerging organic sector" }
    ],
    legalConsiderations: [
      "Foreign land ownership now permitted (Decree 70/2023)",
      "Rural land purchases require registration with provincial authorities",
      "Agricultural exports subject to variable export taxes (retenciones)",
      "Water rights may be separate from land ownership",
      "GMO crops widely permitted; organic certification available",
      "Labor laws highly protective of rural workers"
    ],
    taxIncentives: [
      "RIGI program offers 25% corporate tax rate for large ag investments",
      "Accelerated depreciation for agricultural machinery",
      "Export tax credits for value-added agricultural products",
      "Provincial tax incentives for organic farming conversion"
    ],
    recentDevelopments: [
      "2024: Record soybean and corn harvests despite drought challenges",
      "2024: Foreign investment interest in Pampas farmland increasing",
      "2025: New agtech incubator launched in Córdoba",
      "Ongoing: Export tax fluctuations affecting profit margins"
    ],
    faqs: [
      {
        question: "Can foreigners own farmland in Argentina?",
        answer: "Yes. The Milei government revoked the 2011 land ownership restrictions in December 2023. Foreign individuals and companies can now purchase rural land without the previous limitations on proximity to water or border zones."
      },
      {
        question: "What are the main crops grown in Argentina?",
        answer: "Soybeans are the dominant crop, followed by corn, wheat, and barley. Argentina is the world's 3rd largest soybean exporter and 2nd largest corn exporter. The Pampas region produces most grains, while northern provinces grow sugar, citrus, and tobacco."
      },
      {
        question: "What is the export tax situation?",
        answer: "Argentina applies variable export taxes (retenciones) on agricultural commodities, particularly soybeans (currently around 33%). These taxes fluctuate with government policy and global prices. Processed products generally face lower export taxes than raw commodities."
      },
      {
        question: "How can I invest in agriculture without managing a farm?",
        answer: "Options include: (1) Land ownership with lease to Argentine operators, (2) Private equity funds focused on Argentine agriculture, (3) Agtech startup investment, (4) Grain trading and logistics companies, (5) Silo and storage infrastructure."
      }
    ],
    relatedSectors: ["real-estate", "energy", "technology"],
    image: "/images/investments/agriculture.webp"
  },
  {
    slug: "mining",
    name: "Mining & Critical Minerals",
    shortName: "Mining",
    description: "Argentina holds the world's 3rd largest lithium reserves, significant copper deposits, and untapped gold and silver resources — making it a strategic destination for critical minerals investment.",
    longDescription: "Argentina is experiencing a mining renaissance driven by global demand for critical minerals essential to the energy transition. The country holds the world's 3rd largest lithium reserves, primarily in the lithium triangle region where Argentina, Chile, and Bolivia converge. Australian, Canadian, and Chinese companies are actively developing lithium brine projects in Jujuy, Salta, and Catamarca provinces. Beyond lithium, Argentina has significant copper deposits (similar geology to Chile), gold and silver mines, and emerging rare earth element discoveries. The Milei government has signaled strong support for mining investment, with RIGI incentives applying to large-scale mining projects. While environmental concerns exist, particularly around water usage in lithium extraction, Argentina's mining-friendly provinces offer established regulatory frameworks and growing infrastructure.",
    marketSize: "$6+ billion (rapidly expanding)",
    growthRate: "15-25% annually (lithium-driven)",
    minInvestment: "$5+ million (exploration); $200+ million (production)",
    riskLevel: "High",
    timeToReturn: "7-12 years (mine development cycle)",
    keyOpportunities: [
      "Lithium brine extraction in Jujuy and Salta provinces",
      "Copper porphyry deposits in San Juan and Mendoza",
      "Gold and silver projects in Patagonia",
      "Rare earth element exploration in northwest provinces",
      "Mining equipment and services supply",
      "Processing infrastructure for battery materials"
    ],
    topRegions: [
      { name: "Jujuy", slug: "jujuy", highlight: "Cauchari-Olaroz lithium project, expanding production" },
      { name: "Salta", slug: "salta", highlight: "Centenario-Ratones lithium, copper exploration" },
      { name: "San Juan", slug: "san-juan", highlight: "Veladero gold, Los Azules copper, established mining province" },
      { name: "Catamarca", slug: "catamarca", highlight: "Fiambalá lithium, Tres Quebradas project" },
      { name: "Santa Cruz", slug: "santa-cruz", highlight: "Cerro Negro gold, Cerro Moro silver-gold" }
    ],
    legalConsiderations: [
      "Mining concessions granted by provincial governments",
      "Federal mining investment law provides 30-year stability",
      "Environmental impact assessments required for all projects",
      "Community consultation increasingly important in indigenous areas",
      "Water rights critical for lithium extraction projects",
      "Export duties apply to processed minerals, not raw concentrates"
    ],
    taxIncentives: [
      "RIGI: 25% corporate tax rate for 30 years on large projects",
      "Accelerated depreciation for mining equipment",
      "VAT refunds on capital goods imports",
      "Provincial royalty rates competitive with regional peers (1-3%)"
    ],
    recentDevelopments: [
      "2024: Multiple lithium projects reached production milestones",
      "2024: Rio Tinto acquired Arcadium Lithium (major Argentine assets)",
      "2025: New copper discoveries announced in San Juan",
      "2025: Government streamlining mining permitting process"
    ],
    faqs: [
      {
        question: "Why is Argentina important for lithium?",
        answer: "Argentina holds the world's 3rd largest lithium reserves, with high-quality brine deposits in the Puna region. Unlike hard rock mining, lithium brine extraction can be lower cost and more environmentally manageable. Argentina's lithium triangle (with Chile and Bolivia) contains 60%+ of global lithium resources."
      },
      {
        question: "What is the environmental impact of mining in Argentina?",
        answer: "Environmental concerns focus on water usage in lithium extraction (brine requires evaporation ponds) and potential groundwater impacts. The government requires environmental impact studies, and major projects face scrutiny from local communities. Some operations now use direct lithium extraction (DLE) technology to reduce water consumption."
      },
      {
        question: "How does RIGI apply to mining investments?",
        answer: "Mining projects investing $200+ million can qualify for RIGI benefits: 25% corporate tax rate (vs. 35%), tax stability for 30 years, accelerated depreciation, and streamlined customs procedures. This makes Argentina increasingly competitive with Chile and Peru."
      },
      {
        question: "Can small investors participate in mining?",
        answer: "Direct mine investment requires substantial capital. Small investors can consider: (1) Publicly traded mining companies with Argentine assets, (2) Mining-focused private equity funds, (3) Service companies supplying the mining sector, (4) Exploration junior stocks on Canadian/Australian exchanges."
      }
    ],
    relatedSectors: ["energy", "technology", "agriculture"],
    image: "/images/investments/mining.webp"
  },
  {
    slug: "energy",
    name: "Energy Sector Investment",
    shortName: "Energy",
    description: "From Vaca Muerta — the world's second-largest shale formation — to world-class wind resources in Patagonia, Argentina's energy sector is undergoing transformation with major investment opportunities.",
    longDescription: "Argentina's energy sector offers diverse investment opportunities spanning conventional and renewable resources. Vaca Muerta in Neuquén province is the world's second-largest shale gas and fourth-largest shale oil formation — a resource base comparable to the US Permian Basin but largely undeveloped. The Milei government has prioritized Vaca Muerta development, with production growing rapidly and LNG export projects planned. Simultaneously, Argentina has exceptional renewable energy potential: Patagonia has world-class wind resources, the northwest has concentrated solar potential, and the country has significant hydroelectric capacity. The energy transition is creating opportunities in solar, wind, green hydrogen, and battery storage. The government's RIGI program specifically targets energy investments, offering substantial tax incentives for large projects.",
    marketSize: "$15+ billion annually",
    growthRate: "8-12% (Vaca Muerta); 20%+ (renewables)",
    minInvestment: "$50,000 (small solar); $500+ million (upstream oil & gas)",
    riskLevel: "Variable",
    timeToReturn: "5-10 years (infrastructure); 2-5 years (renewables)",
    keyOpportunities: [
      "Vaca Muerta shale oil and gas development",
      "LNG export terminal projects",
      "Patagonia wind farms (world-class wind resources)",
      "Distributed solar generation (residential/commercial)",
      "Green hydrogen production using Patagonia wind",
      "Power transmission infrastructure",
      "Oilfield services and equipment supply"
    ],
    topRegions: [
      { name: "Neuquén", slug: "neuquen", highlight: "Vaca Muerta shale, oil & gas production, services hub" },
      { name: "Chubut", slug: "chubut", highlight: "Offshore exploration, wind potential" },
      { name: "Santa Cruz", slug: "santa-cruz", highlight: "Wind farms, offshore oil potential" },
      { name: "Salta", slug: "salta", highlight: "Solar projects, lithium-energy integration" },
      { name: "Buenos Aires Province", slug: "buenos-aires-province", highlight: "LNG terminals, refining, distribution" }
    ],
    legalConsiderations: [
      "Upstream oil & gas regulated by federal and provincial governments",
      "Renewable energy market deregulated with open grid access",
      "Environmental approvals required for all projects",
      "Indigenous land consultation for Patagonia projects",
      "Power purchase agreements (PPAs) available via auction or bilateral",
      "Natural gas prices partially regulated for domestic market"
    ],
    taxIncentives: [
      "RIGI: 25% corporate tax rate for 30 years on qualifying projects",
      "Renewable energy projects: accelerated depreciation",
      "Import duty exemptions for oilfield equipment",
      "VAT refunds on capital goods for energy projects",
      "Carbon credit potential for renewable projects"
    ],
    recentDevelopments: [
      "2024: Vaca Muerta production exceeded 300,000 barrels/day oil",
      "2024: Major LNG export project approved for Buenos Aires coast",
      "2025: New renewable energy auctions announced",
      "2025: Green hydrogen pilot projects launched in Patagonia"
    ],
    faqs: [
      {
        question: "What is Vaca Muerta?",
        answer: "Vaca Muerta (Dead Cow) is a massive shale formation in Neuquén province, containing the world's 2nd largest shale gas and 4th largest shale oil reserves. It's comparable to the US Permian Basin in resource scale but is less developed, offering significant growth potential for oil & gas investment."
      },
      {
        question: "Can small investors participate in energy projects?",
        answer: "Yes. Distributed generation (rooftop solar) allows investments from $10,000+. Small-scale wind and solar projects can be structured as private investments. Publicly traded energy companies (YPF, Pampa Energía) offer stock market exposure. Renewable energy funds provide diversified access."
      },
      {
        question: "What is the renewable energy market like?",
        answer: "Argentina has exceptional renewable resources — world-class wind in Patagonia, excellent solar in the northwest, and significant hydro. The government runs renewable energy auctions, and the private market for corporate PPAs is growing. Grid access is improving but can be a bottleneck in remote areas."
      },
      {
        question: "Are there environmental concerns with Vaca Muerta?",
        answer: "Shale development involves hydraulic fracturing (fracking), which raises water usage and potential groundwater contamination concerns. However, Vaca Muerta operations are primarily in arid regions with deep aquifers, reducing some risks compared to populated agricultural areas. Environmental regulations apply but are less stringent than in Europe."
      }
    ],
    relatedSectors: ["mining", "technology", "real-estate"],
    image: "/images/investments/energy.webp"
  },
  {
    slug: "technology",
    name: "Technology & Startups",
    shortName: "Technology",
    description: "Buenos Aires is Latin America's 3rd largest startup ecosystem, with strengths in fintech, SaaS, and AI — offering venture capital and angel investment opportunities at valuations below US/EU markets.",
    longDescription: "Argentina has developed a remarkably robust technology sector despite economic challenges. Buenos Aires ranks as Latin America's 3rd largest startup ecosystem (after São Paulo and Mexico City), with over 500 active startups and a deep talent pool from prestigious universities. The sector's strengths include fintech (Mercado Libre, Ualá, Nubank have Argentine roots), enterprise SaaS, edtech, and emerging AI applications. The Milei government's deregulation agenda, including easier business formation and reduced capital controls, is improving conditions for tech investment. Argentine startups typically raise at valuations 30-50% lower than comparable US companies, creating potential upside for early investors. The country also has strong software export capabilities, with Argentine developers commanding premium rates internationally while living locally.",
    marketSize: "$2+ billion annual VC investment",
    growthRate: "20-30% annually",
    minInvestment: "$10,000 (angel); $100,000+ (seed/VC)",
    riskLevel: "High",
    timeToReturn: "5-10 years (typical VC cycle)",
    keyOpportunities: [
      "Fintech startups (payments, lending, crypto)",
      "B2B SaaS for Latin American markets",
      "Edtech leveraging Argentina's education reputation",
      "AI/ML applications with Argentine engineering talent",
      "Gaming and mobile app development studios",
      "Software outsourcing and nearshore services"
    ],
    topRegions: [
      { name: "Buenos Aires (CABA)", slug: "buenos-aires-city", highlight: "Primary startup ecosystem, VC presence, coworking hubs" },
      { name: "Córdoba", slug: "cordoba", highlight: "Growing tech hub, university talent, lower costs" },
      { name: "Mendoza", slug: "mendoza", highlight: "Emerging remote work hub, lifestyle appeal" },
      { name: "Rosario", slug: "rosario", highlight: "University city, software development focus" },
      { name: "La Plata", slug: "buenos-aires-province", highlight: "UNLP engineering graduates, growing scene" }
    ],
    legalConsiderations: [
      "Simple LLC (SRL) formation available for startups",
      "Foreign investors can own 100% of technology companies",
      "Software exports exempt from most export taxes",
      "Intellectual property protection through INPI",
      "Employee stock options legally complex but feasible",
      "Currency controls relaxed for technology exports"
    ],
    taxIncentives: [
      "Software Law (Ley de Software) provides tax benefits for qualifying companies",
      "Export tax exemptions for software services",
      "R&D tax credits for technology development",
      "RIGI may apply to large technology infrastructure projects"
    ],
    recentDevelopments: [
      "2024: Record year for Argentine startup funding",
      "2024: Multiple unicorns (Ualá, Nubank) with Argentine founders",
      "2025: New VC funds launched focusing on Argentina",
      "2025: Government proposing tech zone incentives in Buenos Aires"
    ],
    faqs: [
      {
        question: "Why invest in Argentine startups vs. US or European startups?",
        answer: "Argentine startups typically raise at 30-50% lower valuations than comparable US companies, creating potential upside. The ecosystem is deep (500+ startups) with proven exits (Mercado Libre, Globant). Argentine entrepreneurs are known for resilience and capital efficiency developed during economic crises."
      },
      {
        question: "What sectors are strongest in Argentina?",
        answer: "Fintech is the standout sector — Argentina has produced multiple billion-dollar fintech companies. B2B SaaS, edtech, and healthtech are also strong. Gaming and mobile apps have success stories. AI/ML is emerging with significant Argentine talent at major tech companies globally."
      },
      {
        question: "How can foreign investors participate?",
        answer: "Options include: (1) Direct angel investment in startups, (2) Investment in Argentina-focused VC funds, (3) Acquisition of established profitable software companies, (4) Partnership with local accelerators/incubators, (5) Corporate venture arms investing in strategic startups."
      },
      {
        question: "What about talent retention with currency devaluation?",
        answer: "Currency devaluation creates challenges but also opportunities. Top talent increasingly works remotely for international companies while living in Argentina. Startups can offer competitive dollar-equivalent salaries at lower cost. Many Argentine entrepreneurs who emigrated are returning as remote work enables geographic flexibility."
      }
    ],
    relatedSectors: ["agriculture", "energy", "tourism"],
    image: "/images/investments/technology.webp"
  },
  {
    slug: "tourism",
    name: "Tourism & Hospitality Investment",
    shortName: "Tourism",
    description: "From wine tourism in Mendoza to eco-lodges in Patagonia and urban experiences in Buenos Aires — Argentina's tourism sector offers lifestyle investments with income potential in a post-pandemic recovery.",
    longDescription: "Argentina's tourism sector is recovering strongly from pandemic impacts, with international arrivals growing and domestic tourism booming due to favorable exchange rates for locals. The country offers diverse tourism verticals: wine tourism in Mendoza (5+ million annual visitors), adventure tourism in Patagonia (trekking, skiing, glacier experiences), cultural tourism in Buenos Aires (tango, gastronomy, architecture), and emerging eco-tourism in the Northwest and Northeast. The depreciation of the peso has made Argentina exceptionally affordable for foreign tourists while creating opportunities for investors with dollar/euro income to acquire tourism assets at attractive valuations. The sector shows particular strength in experiential and sustainable tourism — boutique hotels, eco-lodges, culinary experiences, and adventure tourism infrastructure.",
    marketSize: "$8+ billion annually",
    growthRate: "12-18% post-pandemic recovery",
    minInvestment: "$100,000 (small B&B); $500,000+ (boutique hotel)",
    riskLevel: "Moderate",
    timeToReturn: "5-8 years for established operations",
    keyOpportunities: [
      "Boutique hotels in Buenos Aires (Palermo, San Telmo)",
      "Wine lodges and tasting experiences in Mendoza",
      "Eco-lodges near Bariloche and El Calafate",
      "Adventure tourism infrastructure (guides, equipment, transport)",
      "Culinary tourism (cooking classes, food tours, farm-to-table)",
      "Wellness retreats leveraging Patagonia nature"
    ],
    topRegions: [
      { name: "Buenos Aires (CABA)", slug: "buenos-aires-city", highlight: "Urban tourism, tango, gastronomy, boutique hotels" },
      { name: "Mendoza", slug: "mendoza", highlight: "Wine tourism, culinary experiences, luxury lodges" },
      { name: "Río Negro", slug: "rio-negro", highlight: "Bariloche adventure tourism, skiing, lakes" },
      { name: "Santa Cruz", slug: "santa-cruz", highlight: "El Calafate glacier tourism, El Chaltén trekking" },
      { name: "Salta", slug: "salta", highlight: "Cultural tourism, Quebrada de Humahuaca, emerging wine" },
      { name: "Misiones", slug: "misiones", highlight: "Iguazú Falls, eco-tourism, Jesuit heritage" }
    ],
    legalConsiderations: [
      "Tourism businesses require municipal and provincial registrations",
      "Hotel and lodging subject to specific safety regulations",
      "Guides and tour operators require licensing in most provinces",
      "Short-term rentals (Airbnb) facing regulation in Buenos Aires",
      "Food service requires health permits and inspections",
      "Alcohol service requires specific licenses"
    ],
    taxIncentives: [
      "Hotel construction may qualify for provincial incentives",
      "Tourism promotion agencies offer marketing support",
      "Rural tourism may qualify for agricultural tax treatment",
      "RIGI may apply to large tourism infrastructure projects"
    ],
    recentDevelopments: [
      "2024: International tourism arrivals approaching pre-pandemic levels",
      "2024: Mendoza wine tourism seeing 25% growth",
      "2025: New luxury hotel openings in Buenos Aires and Patagonia",
      "2025: Government launching tourism promotion campaign"
    ],
    faqs: [
      {
        question: "Is now a good time to invest in Argentine tourism?",
        answer: "Tourism is recovering strongly post-pandemic, with Argentina offering exceptional value for international visitors due to currency dynamics. Asset prices remain attractive in dollar terms, and operating costs (staff, food, utilities) are low. However, seasonality in Patagonia and economic volatility require careful planning."
      },
      {
        question: "What types of tourism businesses perform best?",
        answer: "Experiential tourism is outperforming traditional hotels — cooking classes, wine experiences, guided adventures, boutique accommodations with unique character. Sustainable/eco-tourism commands premium pricing. Adventure tourism in Patagonia has consistent demand despite seasonality."
      },
      {
        question: "How seasonal is tourism in Argentina?",
        answer: "Buenos Aires and Mendoza have year-round appeal. Patagonia is highly seasonal — peak summer (December-February) and ski season (June-September) with shoulder seasons. Northwest (Salta, Jujuy) has year-round potential. Iguazú is year-round but hotter in summer."
      },
      {
        question: "Can foreigners own tourism businesses?",
        answer: "Yes, foreigners can own 100% of tourism businesses, including hotels, restaurants, tour operators, and travel agencies. The process involves standard business registration plus tourism-specific permits. Rural tourism properties can include land ownership (restrictions lifted in 2023)."
      }
    ],
    relatedSectors: ["real-estate", "agriculture", "technology"],
    image: "/images/investments/tourism.webp"
  }
];

// ============================================================================
// Helper Functions
// ============================================================================

export function getAllSectors(): InvestmentSector[] {
  return investmentSectors;
}

export function getSectorBySlug(slug: string): InvestmentSector | undefined {
  return investmentSectors.find((sector) => sector.slug === slug);
}

export function getSectorsByRegion(regionSlug: string): InvestmentSector[] {
  return investmentSectors.filter((sector) =>
    sector.topRegions.some((region) => region.slug === regionSlug)
  );
}

export function getRelatedSectors(slug: string): InvestmentSector[] {
  const sector = getSectorBySlug(slug);
  if (!sector) return [];
  return investmentSectors.filter(
    (s) => sector.relatedSectors.includes(s.slug) && s.slug !== slug
  );
}
