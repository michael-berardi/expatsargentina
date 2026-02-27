import { Metadata } from "next";
import Link from "next/link";
import { 
  Plane, 
  Heart, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowLeft,
  Wallet,
  Home,
  Users,
  Briefcase,
  Clock,
  Globe,
  MapPin,
  TrendingUp,
  Coffee,
  Sun,
  Music,
  Utensils,
  MessageCircle,
  Calendar,
  CreditCard,
  Building2,
  FileCheck,
  Mail,
  Phone,
  Shield,
  Sparkles,
  RotateCcw,
  PlaneTakeoff,
  Luggage
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leaving Argentina: A Complete Guide | Expats Argentina",
  description: "Everything you need to know about leaving Argentina temporarily or permanently. From practical preparations to emotional readiness.",
  keywords: ["leaving Argentina", "emigrar Argentina", "expat departure", "Argentina exit guide", "reverse culture shock"],
  alternates: { canonical: "https://expatsargentina.com/leaving" },
};

const whyPeopleLeave = [
  {
    icon: TrendingUp,
    title: "Economic Instability",
    description: "The main reason most people leave. Inflation, currency controls, and uncertainty make long-term planning nearly impossible.",
    quote: "\"I loved my life in Buenos Aires, but I couldn't save for retirement. Every month, my pesos bought less.\" — Mariana, now in Spain"
  },
  {
    icon: Briefcase,
    title: "Career Limitations",
    description: "Limited opportunities in certain fields, lower salaries compared to international standards, and difficulty advancing professionally.",
    quote: "\"As a software developer, I was hitting a ceiling. The same role in Germany pays 4x more with better growth prospects.\" — Lucas, now in Berlin"
  },
  {
    icon: Heart,
    title: "Missing Family",
    description: "Many expats initially come alone. Years later, the distance from parents, siblings, or aging relatives becomes unbearable.",
    quote: "\"After five years, I realized my parents were getting old and I was missing everything. The asados weren't worth the guilt.\" — Emma, returned to Australia"
  },
  {
    icon: Clock,
    title: "The 'Argentina Fatigue'",
    description: "The constant small challenges: bureaucracy, power outages, finding basic products, explaining your existence to every taxi driver.",
    quote: "\"One day I realized I was exhausted. Not from work—from daily life. Everything required effort.\" — James, now in Portugal"
  }
];

const timingConsiderations = [
  {
    title: "Exchange Rate Timing",
    description: "If you have savings in pesos, monitor the blue dollar rate. Sudden drops can mean losing significant value overnight.",
    tip: "Consider converting to USD/stablecoins gradually rather than all at once."
  },
  {
    title: "Seasonal Factors",
    description: "December-January is peak departure season. Flights are expensive, and everyone is trying to leave at once.",
    tip: "Consider leaving in February-March or August-September for better deals and less chaos."
  },
  {
    title: "Lease Cycles",
    description: "Most Argentine leases run 2 years. Breaking early usually costs 1-2 months rent plus headaches.",
    tip: "Start planning 3-4 months before your lease ends, or negotiate an early exit with your landlord."
  },
  {
    title: "Tax Year Considerations",
    description: "Argentina's tax year is calendar-based. Leaving mid-year can complicate your final tax return.",
    tip: "Consult an accountant about optimal departure timing for tax purposes."
  }
];

const moneyStrategies = [
  {
    method: "Western Union / Remittance Services",
    pros: ["Reliable", "Widely available", "No Argentine bank account needed"],
    cons: ["Fees can be high", "Limits on amounts", "Exchange rate may not be best"],
    bestFor: "Small to medium amounts, urgent transfers"
  },
  {
    method: "Cryptocurrency (USDT/USDC)",
    pros: ["Best exchange rates", "Fast", "Bypasses banking restrictions"],
    cons: ["Requires technical knowledge", "Volatility risk", "Regulatory uncertainty"],
    bestFor: "Tech-savvy individuals, larger amounts"
  },
  {
    method: "Bank Wire (if possible)",
    pros: ["Secure", "Direct to foreign account", "Good for large amounts"],
    cons: ["Extensive documentation required", "Can take weeks", "AFIP scrutiny"],
    bestFor: "Those with legal residency and documented income"
  },
  {
    method: "Physical Cash (USD)",
    pros: ["Immediate", "No digital trail", "Accepted everywhere"],
    cons: ["Risk of loss/theft", "Declaration limits", "Can't take unlimited amounts"],
    bestFor: "Emergency funds, initial setup money"
  },
  {
    method: "PayPal / Wise (Limited)",
    pros: ["Convenient", "Familiar platforms"],
    cons: ["Severely restricted in Argentina", "High fees", "Limited functionality"],
    bestFor: "Small online payments, not large transfers"
  }
];

const administrativeTasks = [
  {
    category: "Utilities & Services",
    icon: Phone,
    tasks: [
      { task: "Cancel internet service", note: "Usually requires 30-day notice" },
      { task: "Cancel phone plan", note: "Personal or Movistar: visit store with ID" },
      { task: "Cancel streaming services", note: "Netflix, Spotify, etc." },
      { task: "Cancel gym membership", note: "Check contract terms for early cancellation" },
      { task: "Cancel any subscriptions", note: "Newspapers, magazines, clubs" }
    ]
  },
  {
    category: "Financial",
    icon: CreditCard,
    tasks: [
      { task: "Close or reduce bank accounts", note: "Keep one for a few months if possible" },
      { task: "Cancel credit cards", note: "Pay off all balances first" },
      { task: "Cancel Mercado Pago / Ualá", note: "Withdraw all funds" },
      { task: "Notify your bank you're leaving", note: "Prevents account freezes from foreign logins" },
      { task: "Set up online access for any accounts you're keeping", note: "Essential for monitoring" }
    ]
  },
  {
    category: "Housing",
    icon: Home,
    tasks: [
      { task: "Give notice to landlord", note: "Usually 2-3 months required by law" },
      { task: "Document apartment condition", note: "Photos/video to protect your deposit" },
      { task: "Arrange final inspection", note: "With landlord or inmobiliaria" },
      { task: "Return keys and get deposit back", note: "Get receipt for everything" },
      { task: "Update address with anyone who needs it", note: "Bank, DNI, subscriptions" }
    ]
  },
  {
    category: "Legal & Documents",
    icon: FileCheck,
    tasks: [
      { task: "Get your DNI apostilled", note: "If needed for your next country" },
      { task: "Get birth certificate apostilled", note: "Often required for visas abroad" },
      { task: "Get criminal background check", note: "Federal and/or local—check destination requirements" },
      { task: "Translate important documents", note: "By certified translator (traductor público)" },
      { task: "Keep copies of everything", note: "Digital and physical backups" }
    ]
  }
];

const emotionalChallenges = [
  {
    title: "Reverse Culture Shock",
    description: "Going home isn't as easy as it sounds. You've changed, but home hasn't. Friends moved on, family dynamics shifted, and you see your home country with new eyes.",
    reality: "Many returnees feel more foreign at home than they did in Argentina. The things that once annoyed you about Argentina—like the chaos—are what you miss most."
  },
  {
    title: "Missing Argentina (The Inevitable)",
    description: "You will miss it. The question is how much and for how long.",
    reality: "Even people who left frustrated find themselves craving mate, missing the warmth of strangers, and nostalgic for streets they once cursed."
  },
  {
    title: "Staying Connected",
    description: "Maintaining relationships from abroad requires effort. Time zones, busy lives, and the physical distance make it hard.",
    tip: "Schedule regular video calls. Plan visits back. Keep your WhatsApp groups active. The friends who matter will make the effort too."
  },
  {
    title: "The 'What If' Thoughts",
    description: "You'll wonder if you made the right choice. This is normal.",
    reality: "Grass is greener syndrome hits hard. Remember why you left, but also allow yourself to grieve what you left behind."
  }
];

const thingsYoullMiss = [
  "The way strangers treat you like family after 5 minutes",
  "Mate culture—sharing a gourd is a social ritual",
  "Late dinners that turn into early breakfasts",
  "The passion for football (even if you don't care about sports)",
  "How people actually hug when they greet you",
  "The coffee shop culture—sitting for hours is expected",
  "Asados that last all Sunday",
  "The beauty of everyday chaos",
  "How cheap everything felt (eventually)",
  "The way the city comes alive at night",
  "Random conversations with taxi drivers",
  "The pride Argentines have in their country despite everything",
  "How people help each other during crises",
  "The sound of tango in the streets",
  "The feeling that anything could happen—and often does"
];

const successStories = [
  {
    name: "Sofia",
    from: "Buenos Aires",
    to: "Amsterdam",
    story: "Left in 2019 for a tech job. Initially struggled with Dutch directness and the weather. Now has a house, two kids, and visits Argentina every year. 'I needed to leave to build the life I wanted, but Argentina is still home in my heart.'",
    outcome: "Thrived abroad"
  },
  {
    name: "Michael",
    from: "Córdoba",
    to: "Back to Córdoba",
    story: "Moved to Miami for 3 years. Made good money but was miserable. The work culture, the driving everywhere, the loneliness. Came back in 2022 and opened a café. 'I realized I valued quality of life over salary. Argentina gives me that.'",
    outcome: "Returned and happy"
  },
  {
    name: "Carla & Tom",
    from: "Buenos Aires",
    to: "Split: Barcelona / Buenos Aires",
    story: "Both remote workers. Spend European summers in Barcelona and Argentine summers in Buenos Aires. Best of both worlds, but complex logistics. 'It's expensive and complicated, but we couldn't choose between our two homes.'",
    outcome: "Split time successfully"
  },
  {
    name: "Diego",
    from: "Rosario",
    to: "Sydney",
    story: "Left during the 2001 crisis, never came back. Built a successful construction business in Australia. 'I miss Argentina every day, but I couldn't give my kids the instability I grew up with. No regrets.'",
    outcome: "Built new life abroad"
  }
];

const visitingHome = [
  {
    title: "What to Bring Back",
    description: "Your Argentine friends will have requests. Be prepared.",
    items: [
      "Yerba mate (the good brands are hard to find abroad)",
      "Alfajores (Havanna, Cachafaz—ask for specific brands)",
      "Dulce de leche (the real stuff, not the international version)",
      "Argentine wine (Malbec, obviously)",
      "Football jerseys (if you're into that)",
      "Anything from your home country that's expensive or unavailable in Argentina"
    ]
  },
  {
    title: "How Long You Can Stay Out",
    description: "Depends on your residency status.",
    details: [
      { status: "Temporary Residency", limit: "Usually 2 years max outside Argentina", note: "Check your specific visa conditions" },
      { status: "Permanent Residency", limit: "Up to 2 years without losing status", note: "Can apply for extension if needed" },
      { status: "Citizenship", limit: "No restrictions", note: "You're free to come and go" },
      { status: "Mercosur Residency", limit: "Varies by agreement", note: "Check current bilateral agreements" }
    ]
  },
  {
    title: "Maintaining Your Life Here",
    description: "If you're keeping options open.",
    checklist: [
      "Keep a local bank account active",
      "Maintain your DNI (don't let it expire)",
      "Pay any ongoing obligations (taxes, fees)",
      "Keep a local phone number (port to prepaid)",
      "Consider keeping health insurance if you plan to return",
      "Have someone check on any property you own",
      "Stay current on Argentine news and politics"
    ]
  }
];

export default function LeavingGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/guides/leaving-bg.webp')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <Plane className="w-8 h-8 text-blue-400" />
            </div>
            <span className="text-blue-400 font-medium">Departure Guide</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Leaving Argentina
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            A practical and emotional guide to departing—whether temporarily or forever. 
            Because leaving is never just about logistics.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-amber-900 font-medium mb-2">A Note Before We Begin</p>
                <p className="text-amber-800">
                  This guide isn't about convincing you to leave or stay. It's about helping you 
                  do either with clarity and preparation. Argentina has a way of getting under 
                  your skin—leaving is never simple, even when it's necessary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Why People Leave */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">1. Why People Leave</h2>
          </div>
          
          <p className="text-lg text-slate-600 mb-8">
            Understanding your own reasons helps you process the decision and prepare for what's ahead.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {whyPeopleLeave.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <reason.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{reason.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{reason.description}</p>
                <blockquote className="border-l-4 border-blue-400 pl-4 italic text-slate-500 text-sm">
                  {reason.quote}
                </blockquote>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-600" />
              When You Know It's Time
            </h3>
            <p className="text-slate-600 mb-4">
              There's rarely a perfect moment. But some signs suggest you're ready:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>You've stopped making long-term plans in Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>The frustrations outweigh the joys on most days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>You have a concrete opportunity elsewhere</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Your personal circumstances have changed (family, health, career)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>You feel more dread than excitement about staying</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Preparing to Leave */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">2. Preparing to Leave</h2>
          </div>

          {/* Timing */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Timing Your Departure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {timingConsiderations.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 mb-3">{item.description}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-sm text-blue-800">
                      <span className="font-medium">Tip:</span> {item.tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Money Strategies */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Wallet className="w-6 h-6 text-slate-600" />
              Getting Your Money Out
            </h3>
            <p className="text-slate-600 mb-6">
              This is often the most stressful part. Here are your options, with pros and cons:
            </p>

            <div className="space-y-4">
              {moneyStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-slate-900">{strategy.method}</h4>
                      <span className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                        {strategy.bestFor}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-medium text-green-700 mb-2">Pros</p>
                        <ul className="space-y-1">
                          {strategy.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-700 mb-2">Cons</p>
                        <ul className="space-y-1">
                          {strategy.cons.map((con, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900 mb-2">Important Legal Note</p>
                  <p className="text-amber-800 text-sm">
                    Argentina has strict currency controls and reporting requirements. Taking more than 
                    USD $10,000 (or equivalent) in cash requires declaration. Large wire transfers may 
                    trigger AFIP scrutiny. When in doubt, consult a certified accountant (contador) 
                    before moving significant sums. The information here is for educational purposes 
                    and not legal advice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selling/Donating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Selling & Donating Your Stuff</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">What Sells Well</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Electronics (especially Apple)</li>
                  <li>• Quality furniture</li>
                  <li>• Bicycles</li>
                  <li>• Kitchen appliances</li>
                  <li>• Air conditioners</li>
                </ul>
                <p className="text-xs text-slate-500 mt-3">
                  Use Facebook Marketplace, Mercado Libre, or expat groups. Start 2-3 months before leaving.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">What to Donate</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Clothes and shoes</li>
                  <li>• Books</li>
                  <li>• Kitchen items</li>
                  <li>• Decorations</li>
                  <li>• Small appliances</li>
                </ul>
                <p className="text-xs text-slate-500 mt-3">
                  Donate to churches, community centers, or organizations like Cáritas. Ask your building's portero too.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">What to Ship</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Sentimental items</li>
                  <li>• Important documents</li>
                  <li>• Specialty items</li>
                  <li>• High-value small items</li>
                </ul>
                <p className="text-xs text-slate-500 mt-3">
                  Shipping is expensive. Only ship what you can't replace or has deep personal value.
                </p>
              </div>
            </div>
          </div>

          {/* Breaking Lease */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-slate-600" />
              Breaking Your Lease
            </h3>
            <p className="text-slate-600 mb-4">
              Argentine rental law (Ley de Alquileres) changed recently. Here's what you need to know:
            </p>
            <div className="space-y-3 text-slate-600">
              <p>• <strong>Standard lease:</strong> 2 years minimum, usually</p>
              <p>• <strong>Early termination:</strong> Typically requires 2-3 months notice (check your contract)</p>
              <p>• <strong>Penalty:</strong> Often 1-2 months rent, depending on contract</p>
              <p>• <strong>Deposit return:</strong> Should happen at move-out, but landlords sometimes delay</p>
              <p>• <strong>Documentation:</strong> Get everything in writing, take photos of apartment condition</p>
            </div>
            <div className="mt-4 bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Pro tip:</span> If you have a good relationship with your landlord, 
                explain your situation. Many will be understanding, especially if you help find a replacement tenant.
              </p>
            </div>
          </div>

          {/* Argentine Goodbyes */}
          <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Saying Goodbye (The Argentine Way)
            </h3>
            <p className="text-slate-600 mb-4">
              Argentine goodbyes are not quick affairs. Expect:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4">
              <li>• Multiple farewell asados (not just one)</li>
              <li>• Tears, lots of tears</li>
              <li>• Promises to visit that you both mean but may not keep</li>
              <li>• "But why? Argentina is the best country in the world!" (even from people who also want to leave)</li>
              <li>• The classic: "You'll be back. They all come back."</li>
            </ul>
            <p className="text-slate-600 italic">
              Embrace it. These long, emotional goodbyes are part of what makes Argentina special. 
              Don't rush them.
            </p>
          </div>
        </section>

        {/* Section 3: Administrative Tasks */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">3. Administrative Tasks</h2>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            The boring but essential stuff. Tackle these systematically to avoid headaches later.
          </p>

          <div className="space-y-6">
            {administrativeTasks.map((category, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <category.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-3 h-3 rounded-full bg-slate-300" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{task.task}</p>
                          <p className="text-sm text-slate-500">{task.note}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Tax Obligations */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-slate-600" />
              Tax Obligations: What You Need to Know
            </h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600">
                Argentina taxes residents on worldwide income. Even after you leave, you may have 
                filing obligations depending on your residency status:
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>
                  <strong>If you keep residency:</strong> You may still need to file annual tax returns 
                  (DDJJ) and report foreign assets if they exceed thresholds.
                </li>
                <li>
                  <strong>If you renounce residency:</strong> File a final tax return for the year you leave. 
                  You may need to pay exit taxes on certain assets.
                </li>
                <li>
                  <strong>Bienes Personales:</strong> Annual wealth tax on worldwide assets. Even non-residents 
                  may owe this on Argentine assets.
                </li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-amber-800 text-sm">
                  <span className="font-medium">Disclaimer:</span> Tax law is complex and changes frequently. 
                  This is general information, not advice. Consult a certified Argentine accountant 
                  (contador público) before leaving to understand your specific obligations.
                </p>
              </div>
            </div>
          </div>

          {/* DNI Cancellation */}
          <div className="mt-6 bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Do You Need to Cancel Your DNI?</h3>
            <p className="text-slate-600 mb-4">
              Short answer: Usually no, unless you're renouncing citizenship (which is rare and extreme).
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-slate-900 mb-2">Your DNI stays valid if:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• You're leaving temporarily</li>
                  <li>• You're keeping permanent residency</li>
                  <li>• You might return someday</li>
                  <li>• You want to maintain voting rights</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-2">Consider formal renunciation if:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• You're becoming a citizen elsewhere that doesn't allow dual citizenship</li>
                  <li>• You want to completely sever tax residency</li>
                  <li>• You never plan to return and want a clean break</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Most expats simply let their DNI expire if they're not returning, or keep it current 
              if they might. There's no penalty for having an inactive DNI.
            </p>
          </div>
        </section>

        {/* Section 4: The Emotional Side */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">4. The Emotional Side</h2>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            Everyone focuses on the logistics. But the emotional journey is just as real—and often harder.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {emotionalChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 mb-4">{challenge.description}</p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm text-slate-600 italic">
                    {challenge.reality}
                  </p>
                </div>
                {challenge.tip && (
                  <div className="mt-4 bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800">{challenge.tip}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Things You'll Miss */}
          <div className="mt-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-100">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-orange-500" />
              The Things You'll Miss
            </h3>
            <p className="text-slate-600 mb-6">
              You don't know what you've got till it's gone. Here's what former expats say they miss most:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {thingsYoullMiss.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* When You Might Come Back */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-slate-600" />
              When You Might Come Back
            </h3>
            <p className="text-slate-600 mb-4">
              Many who leave do return—sometimes temporarily, sometimes for good. Common triggers:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-slate-900 mb-2">Temporary Returns</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Summer holidays (January-February)</li>
                  <li>• Family events (weddings, births, funerals)</li>
                  <li>• Work assignments or remote work stints</li>
                  <li>• "Recharge" visits when you need an injection of Argentine energy</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-slate-900 mb-2">Permanent Returns</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Retirement (lower cost of living)</li>
                  <li>• Career opportunities as Argentina develops</li>
                  <li>• Family needs (aging parents, etc.)</li>
                  <li>• Realizing you made a mistake leaving</li>
                  <li>• Simply missing it too much to stay away</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Success Stories */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">5. Success Stories</h2>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            Real stories from real people. Different paths, different outcomes—all valid.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{story.name}</h3>
                    <p className="text-sm text-slate-500">{story.from} → {story.to}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    story.outcome === "Thrived abroad" ? "bg-green-100 text-green-700" :
                    story.outcome === "Returned and happy" ? "bg-blue-100 text-blue-700" :
                    story.outcome === "Split time successfully" ? "bg-purple-100 text-purple-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {story.outcome}
                  </span>
                </div>
                <p className="text-slate-600 italic">{story.story}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">The Common Thread</h3>
            <p className="text-slate-600">
              Every person who left successfully had one thing in common: they made peace with their decision. 
              Whether they thrived abroad, returned home, or found a middle path, they stopped second-guessing 
              and committed to making it work. The worst outcomes come from those who leave half-heartedly, 
              constantly looking back, never fully present in their new life nor their old one.
            </p>
          </div>
        </section>

        {/* Section 6: If You're Just Visiting Home */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <PlaneTakeoff className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">6. If You're Just Visiting Home</h2>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            Not leaving for good? Just going home for a visit? Here's what to know.
          </p>

          <div className="space-y-8">
            {visitingHome.map((section, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                <p className="text-slate-600 mb-4">{section.description}</p>
                
                {section.items && (
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <Luggage className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.details && (
                  <div className="space-y-3">
                    {section.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4 p-3 bg-slate-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <span className="font-medium text-slate-900">{detail.status}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700">{detail.limit}</p>
                          <p className="text-sm text-slate-500">{detail.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.checklist && (
                  <ul className="space-y-2">
                    {section.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Final Thoughts</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                Leaving Argentina—whether for a month or forever—is a significant life transition. 
                It's okay to feel conflicted. It's okay to cry at the airport. It's okay to wonder 
                if you're making a mistake.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Argentina has a way of staying with you. The friends you made, the neighborhoods you 
                wandered, the mate you shared on lazy afternoons—they become part of your story. 
                Leaving doesn't erase that. It just turns the page.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Whether you're leaving because you have to, because you want to, or because you're 
                not quite sure—know that thousands have walked this path before you. Some found 
                exactly what they were looking for. Others found their way back. Both outcomes are 
                valid. Both are success stories.
              </p>
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <p className="text-xl font-medium text-center">
                  "No matter where you go, there you are."
                </p>
                <p className="text-center text-slate-400 mt-2">
                  And if there's a piece of Argentina in your heart, you'll carry it with you wherever that is.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Checklist */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Departure Checklist</h2>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  3-4 Months Before
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Decide on departure date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Notify landlord (check lease terms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Start selling/donating belongings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Research money transfer options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Begin gathering documents for apostille</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  1-2 Months Before
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Cancel services (give required notice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Get documents apostilled/translated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Transfer money (start process)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Schedule farewell gatherings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Consult accountant about taxes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-purple-600" />
                  2 Weeks Before
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Confirm flight details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Pack (ship what you're keeping)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Close/reduce bank accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Final apartment inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Return keys, get deposit back</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-green-600" />
                  Departure Day
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Documents in carry-on (never checked)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Cash declaration if over $10K USD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Keep phone charged (WhatsApp access)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Say goodbye properly (hug everyone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded border border-slate-300 mt-0.5" />
                    <span>Take one last look</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides/banking" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <Wallet className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Banking & Money</h3>
                <p className="text-sm text-slate-500 mt-1">Managing finances in Argentina</p>
              </div>
            </Link>
            <Link href="/guides/housing" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <Home className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Finding Housing</h3>
                <p className="text-sm text-slate-500 mt-1">Renting apartments in Buenos Aires</p>
              </div>
            </Link>
            <Link href="/guides/visas" className="group">
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Visas & Residency</h3>
                <p className="text-sm text-slate-500 mt-1">Staying legally in Argentina</p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Have a Story to Share?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Did you leave Argentina? Return? Split your time? We'd love to hear your experience 
              to help others facing the same decision.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Share Your Story
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
