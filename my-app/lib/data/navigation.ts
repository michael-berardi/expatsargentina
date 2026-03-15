export type NavItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

// Consolidated from 7 menus to 5
export const mainNav: NavSection[] = [
  {
    label: "Destinations",
    items: [
      { label: "All 24 Provinces", href: "/provinces", description: "Explore every region of Argentina" },
      { label: "Buenos Aires (CABA)", href: "/provinces/buenos-aires-city", description: "The capital and largest city" },
      { label: "Cordoba", href: "/provinces/cordoba", description: "Argentina's second-largest province" },
      { label: "Mendoza", href: "/provinces/mendoza", description: "Wine country at the foot of the Andes" },
      { label: "Salta", href: "/provinces/salta", description: "Colonial charm in the northwest" },
      { label: "Patagonia (Rio Negro)", href: "/provinces/rio-negro", description: "Lakes, mountains, and adventure" },
      { label: "All Cities", href: "/cities", description: "15+ detailed city guides" },
      { label: "Buenos Aires", href: "/cities/buenos-aires", description: "The capital city" },
      { label: "Mendoza", href: "/cities/mendoza", description: "Wine, sun, and outdoor living" },
      { label: "Bariloche", href: "/cities/bariloche", description: "Patagonian lakeside paradise" },
    ],
  },
  {
    label: "Visas & Legal",
    items: [
      { label: "Digital Nomad Visa", href: "/visas/digital-nomad", description: "Work remotely for up to 180 days" },
      { label: "Work Visa", href: "/visas/work", description: "Employment-based residency options" },
      { label: "Retirement Visa", href: "/visas/retirement", description: "Pension-based residency" },
      { label: "Student Visa", href: "/visas/student", description: "Study at Argentine universities" },
      { label: "Investment Visa", href: "/visas/investment", description: "Business and investment pathways" },
      { label: "Citizenship", href: "/visas/citizenship", description: "Path to Argentine citizenship" },
      { label: "Compare Visas", href: "/visas/compare", description: "Side-by-side visa comparison" },
      { label: "Visa Quiz", href: "/visas/quiz", description: "Find your best visa option" },
    ],
  },
  {
    label: "Living Guides",
    items: [
      { label: "Cost of Living", href: "/cost-of-living", description: "Detailed monthly expense breakdown" },
      { label: "Neighborhoods", href: "/neighborhoods", description: "Best areas to live in Buenos Aires" },
      { label: "Healthcare", href: "/healthcare", description: "Insurance and medical care" },
      { label: "Banking", href: "/banking", description: "Accounts and money transfers" },
      { label: "Housing", href: "/housing", description: "Renting and buying property" },
      { label: "Safety", href: "/safety", description: "Staying safe and avoiding scams" },
      { label: "Learn Spanish", href: "/learn-spanish", description: "Language learning resources" },
      { label: "Food Guide", href: "/food", description: "Argentine food culture" },
      { label: "Wine Guide", href: "/wine", description: "Wine regions and tastings" },
      { label: "Transportation", href: "/transportation", description: "Getting around Argentina" },
      { label: "Education & Schools", href: "/education", description: "Schools and university for expat families" },
      { label: "Internet & Phone", href: "/internet-phone", description: "ISPs, mobile carriers, and utilities" },
      { label: "Taxes", href: "/taxes", description: "Income tax, wealth tax, and filing" },
      { label: "First 30 Days", href: "/first-30-days", description: "What to do when you arrive" },
      { label: "All Guides", href: "/guides", description: "Step-by-step relocation guides" },
    ],
  },
  {
    label: "Invest",
    items: [
      { label: "Investment Overview", href: "/investments", description: "Complete guide to investing in Argentina" },
      { label: "Real Estate", href: "/investments/real-estate", description: "Property and development" },
      { label: "Agriculture", href: "/investments/agriculture", description: "Farmland and agtech" },
      { label: "Mining", href: "/investments/mining", description: "Lithium and critical minerals" },
      { label: "Energy", href: "/investments/energy", description: "Vaca Muerta and renewables" },
      { label: "Technology", href: "/investments/technology", description: "Startups and tech sector" },
      { label: "Tourism", href: "/investments/tourism", description: "Hospitality and experiences" },
    ],
  },
];

export const topNav: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Professions", href: "/profession" },
  { label: "Nationalities", href: "/nationality" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  provinces: [
    { label: "All Provinces", href: "/provinces" },
    { label: "Buenos Aires", href: "/provinces/buenos-aires-city" },
    { label: "Cordoba", href: "/provinces/cordoba" },
    { label: "Mendoza", href: "/provinces/mendoza" },
    { label: "Salta", href: "/provinces/salta" },
    { label: "Rio Negro", href: "/provinces/rio-negro" },
    { label: "Tierra del Fuego", href: "/provinces/tierra-del-fuego" },
  ],
  cities: [
    { label: "All Cities", href: "/cities" },
    { label: "Buenos Aires", href: "/cities/buenos-aires" },
    { label: "Mendoza", href: "/cities/mendoza" },
    { label: "Cordoba", href: "/cities/cordoba" },
    { label: "Bariloche", href: "/cities/bariloche" },
    { label: "Salta", href: "/cities/salta" },
    { label: "Rosario", href: "/cities/rosario" },
  ],
  guides: [
    { label: "Cost of Living", href: "/cost-of-living" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Banking", href: "/banking" },
    { label: "Housing", href: "/housing" },
    { label: "Safety", href: "/safety" },
    { label: "Education", href: "/education" },
    { label: "Taxes", href: "/taxes" },
    { label: "Internet & Phone", href: "/internet-phone" },
    { label: "Transportation", href: "/transportation" },
    { label: "All Guides", href: "/guides" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Expat Stories", href: "/stories" },
    { label: "Remote Work", href: "/remote-work" },
    { label: "Professions", href: "/profession" },
    { label: "Nationalities", href: "/nationality" },
    { label: "Guides", href: "/guides" },
    { label: "Wine Guide", href: "/wine" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Site Map", href: "/site-map" },
  ],
  sisterSites: [
    { label: "Buenos Aires Expats", href: "https://buenosairesexpats.com", external: true },
    { label: "Argentina Visa Law", href: "https://argentinavisalaw.com", external: true },
  ],
};
