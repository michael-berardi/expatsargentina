import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Wifi, Zap, Clock, Coffee, Briefcase, DollarSign, Users, Home, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Remote Work & Digital Nomad Guide | Buenos Aires",
  description: "The real deal on working remotely from Buenos Aires. Internet speeds, coworking spaces, money management, and community for digital nomads.",
  keywords: "remote work Buenos Aires, digital nomad Argentina, coworking BA, internet speed Palermo, nomad community",
  alternates: { canonical: "https://expatsargentina.com/remote-work" },
};

const faqs = [
  {
    question: "What is the internet speed like in Buenos Aires for remote work?",
    answer: "Internet speeds in Buenos Aires vary by neighborhood and building age. Newer buildings in Palermo and Puerto Madero can get 100-500 Mbps with fiber (Fibertel). Older buildings in San Telmo might only get 15-40 Mbps. Always ask for a speed test screenshot before booking an Airbnb, and note that upload speeds are typically 10-20% of download speeds.",
  },
  {
    question: "Are there good coworking spaces in Buenos Aires?",
    answer: "Yes, Buenos Aires has excellent coworking options. WeWork has locations in Palermo and Puerto Madero ($150-250/month for hot desk). La Maquinita in Colegiales offers a local vibe with community events ($80-150/month). Area Tres in Palermo is popular with startups ($100-180/month). Most spaces offer day passes so you can try before committing.",
  },
  {
    question: "Do I need to pay taxes in Argentina as a remote worker?",
    answer: "If you're staying as a tourist (6 months or less), you generally have no Argentine tax obligation and should continue paying taxes in your home country. If you stay longer than 12 months, you may become a tax resident, and Argentina taxes worldwide income for residents. The Digital Nomad Visa has specific tax implications. Consult a local accountant (contador) familiar with expat situations for personalized advice.",
  },
  {
    question: "What time zone challenges should I expect working from Buenos Aires?",
    answer: "Buenos Aires is GMT-3, which is EST+2 hours. This gives you about 4 hours of overlap with US East Coast teams (11am-3pm BA time) but only 1-2 hours with West Coast. Most nomads either work split shifts (morning + evening) or start early at 8-9 AM BA time. For European teams, you get 3-4 hours of morning overlap.",
  },
  {
    question: "Does Argentina have a Digital Nomad Visa?",
    answer: "Yes, Argentina offers a Digital Nomad Visa (Visa de Nómada Digital) that allows remote workers to stay for up to 6 months, renewable for another 6 months. You need to prove remote employment or freelance income from outside Argentina. The application is done online through migraciones.gov.ar. It does not grant tax residency, which is an advantage for short-term stays.",
  },
  {
    question: "What are the best neighborhoods in Buenos Aires for remote workers?",
    answer: "Palermo (Hollywood/Soho) is the top choice with the best internet, most coworking spaces, and a walkable lifestyle. Recoleta offers quiet streets, reliable power, and good cafes. Puerto Madero has the most modern infrastructure but is expensive. Belgrano is great for families and less touristy. Avoid San Telmo for reliable internet and power.",
  },
  {
    question: "How much does it cost to live as a digital nomad in Buenos Aires?",
    answer: "Budget nomads can get by on $800-1,200/month (shared apartment, home cooking, no coworking). A comfortable lifestyle runs $1,500-2,500/month (nice 1-bedroom, mix of cooking and restaurants, coworking membership, weekend trips). Premium living costs $3,000-5,000+ per month. These assume you're using the blue dollar rate for currency exchange.",
  },
];

export default function RemoteWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://expatsargentina.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Remote Work",
                "item": "https://expatsargentina.com/remote-work"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Working Remotely from Buenos Aires
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            The unfiltered guide to being a digital nomad in BA. Real internet speeds, 
            actual coworking reviews, and how to make the time zone work for you.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* The Reality */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Wifi className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">The Reality of Remote Work in BA</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">
              Let's cut through the Instagram滤镜. Working remotely from Buenos Aires is amazing, 
              but it's not all cafés with perfect WiFi and sunset laptop sessions. Here's what 
              you actually need to know.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-green-600" />
                Internet Speeds (Real Numbers)
              </h3>
              <p className="text-gray-600 mb-4">
                Speeds vary wildly by neighborhood and building. Fiber (Fibertel) is expanding 
                but not universal. Here's what to expect:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Palermo (newer buildings)</span>
                  <span className="text-green-600 font-semibold">100-300 Mbps</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Palermo (older buildings)</span>
                  <span className="text-yellow-600 font-semibold">20-50 Mbps</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Recoleta</span>
                  <span className="text-green-600 font-semibold">50-200 Mbps</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">San Telmo</span>
                  <span className="text-yellow-600 font-semibold">15-40 Mbps</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Puerto Madero</span>
                  <span className="text-green-600 font-semibold">100-500 Mbps</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <strong>Pro tip:</strong> Always ask for a speed test screenshot before booking 
                an Airbnb. Upload speeds are often 10-20% of download.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Power Outages (Cortes de Luz)
              </h3>
              <p className="text-gray-600 mb-4">
                They happen. More in summer (everyone's AC is blasting), more in older neighborhoods. 
                Here's the reality:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span><strong>Summer frequency:</strong> 1-3 times per month, 1-4 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Winter frequency:</strong> Rare, maybe once every 2 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>Worst neighborhoods:</strong> San Telmo, parts of Belgrano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Best neighborhoods:</strong> Puerto Madero, newer Palermo</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-sm text-yellow-800">
                <strong>Backup plan:</strong> Get a power bank for your phone, know your nearest 
                coworking space, and have mobile data as backup.
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              The Time Zone Challenge
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Buenos Aires is EST +2 hours (or +1 during US daylight saving time mismatch). 
                  This means:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-white rounded">
                    <span>9:00 AM New York</span>
                    <span className="font-semibold">11:00 AM BA</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded">
                    <span>5:00 PM New York</span>
                    <span className="font-semibold">7:00 PM BA</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-2"><strong>Overlap with US teams:</strong></p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• East Coast: 4 hours (11am-3pm BA time)</li>
                  <li>• West Coast: 1-2 hours (if they start early)</li>
                  <li>• Europe: 3-4 hours morning overlap</li>
                </ul>
                <p className="text-gray-700 mt-4 mb-2"><strong>What this means:</strong></p>
                <p className="text-sm text-gray-600">
                  You'll either work split shifts (morning + evening) or become a morning person. 
                  Most nomads adapt to start around 8-9 AM BA time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              The "I'm in Argentina" Meeting Script
            </h3>
            <p className="text-gray-700 mb-4">
              You'll need to explain your situation. Here's what works:
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-gray-800 italic">
                "I'm working remotely from Buenos Aires for [time period]. I'm on EST+2, so I'm 
                available for meetings 11 AM - 3 PM your time. I have backup internet and power 
                solutions, and I've been doing this for [X months] without issues. My output 
                remains the same."
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Don't apologize. Don't over-explain. Treat it like a normal working arrangement 
              because it is.
            </p>
          </div>
        </section>

        {/* Coworking Spaces */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-purple-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Coworking Spaces (Real Reviews)</h2>
          </div>

          <div className="space-y-8">
            {/* WeWork */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">WeWork</h3>
                  <p className="text-gray-600">Palermo & Puerto Madero locations</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-700">$150-250/month</p>
                  <p className="text-sm text-gray-500">Hot desk</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800 text-sm mb-1">The Good</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Reliable, fast internet</li>
                    <li>• Global network access</li>
                    <li>• Professional environment</li>
                    <li>• Meeting rooms included</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800 text-sm mb-1">The Bad</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Expensive for Argentina</li>
                    <li>• Can feel corporate/sterile</li>
                    <li>• Limited local networking</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 text-sm mb-1">Best For</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Client calls</li>
                    <li>• Video meetings</li>
                    <li>• When you need reliability</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                <strong>Palermo:</strong> Torre Bellini, Carranza 1905. <strong>Puerto Madero:</strong> 
                Juana Manso 1180. Both have parking (expensive), bike storage, and are near subte.
              </p>
            </div>

            {/* La Maquinita */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">La Maquinita</h3>
                  <p className="text-gray-600">Multiple locations (Colegiales, Palermo, Villa Crespo)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-700">$80-150/month</p>
                  <p className="text-sm text-gray-500">Hot desk</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800 text-sm mb-1">The Good</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Local Argentine vibe</li>
                    <li>• Great community events</li>
                    <li>• Multiple locations</li>
                    <li>• Good value</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800 text-sm mb-1">The Bad</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Internet can be spotty</li>
                    <li>• Not all locations equal</li>
                    <li>• Can get crowded</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 text-sm mb-1">Best For</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Meeting locals</li>
                    <li>• Networking</li>
                    <li>• Spanish practice</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                <strong>Colegiales</strong> is the flagship location. They host regular events, 
                have a café on-site, and the community is genuinely welcoming to foreigners.
              </p>
            </div>

            {/* Area Tres */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Area Tres</h3>
                  <p className="text-gray-600">El Salvador 5218, Palermo</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-700">$100-180/month</p>
                  <p className="text-sm text-gray-500">Hot desk</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800 text-sm mb-1">The Good</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Beautiful space</li>
                    <li>• Strong entrepreneur community</li>
                    <li>• Good event programming</li>
                    <li>• Café on-site</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800 text-sm mb-1">The Bad</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Pricey day passes</li>
                    <li>• Can be noisy</li>
                    <li>• Parking is tough</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 text-sm mb-1">Best For</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Startup people</li>
                    <li>• Events</li>
                    <li>• Instagram-worthy space</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cespedes */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Cespedes</h3>
                  <p className="text-gray-600">Céspedes 3030, Palermo</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-700">$60-100/month</p>
                  <p className="text-sm text-gray-500">Hot desk</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800 text-sm mb-1">The Good</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Budget-friendly</li>
                    <li>• Quiet, focused environment</li>
                    <li>• Good internet</li>
                    <li>• Friendly staff</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800 text-sm mb-1">The Bad</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Smaller space</li>
                    <li>• Fewer networking events</li>
                    <li>• Basic amenities</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 text-sm mb-1">Best For</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Budget nomads</li>
                    <li>• Deep work</li>
                    <li>• Long-term stays</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cafe Working */}
          <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-600" />
              Cafe Working Culture
            </h3>
            <p className="text-gray-700 mb-4">
              Argentines are cafe people, but working from cafes is a gray area. Here's how to do it right:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cafes That Welcome Laptops</h4>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 bg-white rounded">
                    <strong>Lab Tostadores</strong> (Palermo) - Specialty coffee, laptop-friendly
                  </li>
                  <li className="p-2 bg-white rounded">
                    <strong>Cuervo Café</strong> (Multiple) - Explicitly nomad-friendly
                  </li>
                  <li className="p-2 bg-white rounded">
                    <strong>Full City Coffee</strong> (Palermo) - Good WiFi, power outlets
                  </li>
                  <li className="p-2 bg-white rounded">
                    <strong>The Shelter</strong> (Palermo) - Australian-owned, nomad hub
                  </li>
                  <li className="p-2 bg-white rounded">
                    <strong>Birkin</strong> (Palermo) - Always has laptop people
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cafe Etiquette</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Order every 2-3 hours minimum</li>
                  <li>• Don't camp at peak times (11am-1pm, 5-7pm)</li>
                  <li>• Tip well (10% is standard, 15% if you're there all day)</li>
                  <li>• Ask about WiFi password (usually on receipt)</li>
                  <li>• Don't take calls without headphones</li>
                </ul>
                <div className="mt-4 p-3 bg-red-100 rounded-lg text-sm text-red-800">
                  <strong>Avoid:</strong> Traditional cafes (like Café Tortoni) - they're for 
                  socializing, not working. You'll get side-eye.
                </div>
              </div>
            </div>
          </div>

          {/* Home Office Setup */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-gray-600" />
              Home Office Setup: Where to Buy
            </h3>
            <p className="text-gray-600 mb-4">
              Don't expect furnished apartments to have good desk setups. Here's where to get equipment:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Desk & Chair</p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Easy</strong> (easy.com.ar) - IKEA-style, delivers fast
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Mercado Libre</strong> - Everything, check seller ratings
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Electronics</p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Garbarino</strong> or <strong>Frávega</strong> - Local chains
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Apple:</strong> Bring your own or pay 2x import taxes
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Monitor/Peripherals</p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Bring from home</strong> if possible - much cheaper
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Compumundo</strong> for local options (limited selection)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Finding Remote Jobs */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Finding Remote Jobs from Argentina</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Boards That Work</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">RemoteOK</p>
                  <p className="text-sm text-gray-600">Best for tech jobs, filter by timezone</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">We Work Remotely</p>
                  <p className="text-sm text-gray-600">Quality listings, good for experienced devs</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">AngelList / Wellfound</p>
                  <p className="text-sm text-gray-600">Startups, often timezone-flexible</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-600">Set location to "Remote" and "Argentina"</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">FlexJobs</p>
                  <p className="text-sm text-gray-600">Paid but vetted, good for non-tech</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Argentine Companies Hiring Foreigners</h3>
              <p className="text-gray-600 mb-4">
                Some local companies actively seek international talent (usually for US/EU clients):
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Globant</p>
                  <p className="text-sm text-gray-600">Tech consulting, hires globally</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Mercado Libre</p>
                  <p className="text-sm text-gray-600">Latin America's Amazon, remote roles</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Auth0</p>
                  <p className="text-sm text-gray-600">Remote-first, founded by Argentines</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Various Startups</p>
                  <p className="text-sm text-gray-600">Check BA Startup Jobs Facebook group</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Freelancing from Argentina</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Platforms</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Upwork:</strong> Competitive but possible</li>
                  <li>• <strong>Toptal:</strong> High rates, tough screening</li>
                  <li>• <strong>Contra:</strong> Newer, lower fees</li>
                  <li>• <strong>Fiverr:</strong> Good for specific skills</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Advantages</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cost of living arbitrage</li>
                  <li>• Can undercut US rates slightly</li>
                  <li>• Same timezone as US clients</li>
                  <li>• Strong tech talent reputation</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Challenges</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Payment processing fees</li>
                  <li>• Currency exchange complexity</li>
                  <li>• Building reputation takes time</li>
                  <li>• Platform competition</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Networking for Remote Work</h3>
            <p className="text-gray-600 mb-4">
              Most remote jobs come from connections, not applications. Build your network:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span><strong>Coworking communities:</strong> La Maquinita and Area Tres have active Slack groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span><strong>Meetup.com:</strong> Search "digital nomad Buenos Aires" and "remote work"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span><strong>Facebook groups:</strong> "Digital Nomads Buenos Aires", "Expats in Argentina"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span><strong>LinkedIn:</strong> Connect with other nomads, join relevant groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span><strong>Language exchanges:</strong> Often attended by remote workers</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Money Management */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-yellow-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Money Management for Remote Workers</h2>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Paid: The Options</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-yellow-200">
                    <th className="text-left py-2 px-3">Method</th>
                    <th className="text-left py-2 px-3">Fees</th>
                    <th className="text-left py-2 px-3">Speed</th>
                    <th className="text-left py-2 px-3">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-yellow-100">
                    <td className="py-3 px-3 font-medium">Wise (TransferWise)</td>
                    <td className="py-3 px-3">~0.5-1%</td>
                    <td className="py-3 px-3">1-2 days</td>
                    <td className="py-3 px-3">Regular salary, best rates</td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="py-3 px-3 font-medium">PayPal</td>
                    <td className="py-3 px-3">~4-5%</td>
                    <td className="py-3 px-3">Instant</td>
                    <td className="py-3 px-3">Client convenience</td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="py-3 px-3 font-medium">Western Union</td>
                    <td className="py-3 px-3">Variable</td>
                    <td className="py-3 px-3">Minutes</td>
                    <td className="py-3 px-3">Cash pickup, blue rate</td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="py-3 px-3 font-medium">Crypto (USDC/USDT)</td>
                    <td className="py-3 px-3">Network fees</td>
                    <td className="py-3 px-3">Minutes</td>
                    <td className="py-3 px-3">Tech-savvy, privacy</td>
                  </tr>
                  <tr className="border-b border-yellow-100">
                    <td className="py-3 px-3 font-medium">Wire Transfer</td>
                    <td className="py-3 px-3">$15-50</td>
                    <td className="py-3 px-3">3-5 days</td>
                    <td className="py-3 px-3">Large amounts, formal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">Payoneer</td>
                    <td className="py-3 px-3">1-3%</td>
                    <td className="py-3 px-3">1-2 days</td>
                    <td className="py-3 px-3">Freelancers, marketplaces</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Western Union Lifestyle</h3>
              <p className="text-gray-600 mb-4">
                Many nomads use Western Union to access the "blue dollar" rate (informal exchange rate), 
                which can be 30-50% better than the official rate.
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">How it works:</p>
                  <p className="text-green-700">
                    Send yourself money from your home country, pick up pesos at WU location. 
                    You get the blue rate effectively.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-semibold text-yellow-800">Limits:</p>
                  <p className="text-yellow-700">
                    Usually $1,000-3,000 per transaction depending on location. Bring passport.
                  </p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-800">Risks:</p>
                  <p className="text-red-700">
                    Lines can be long. Some locations run out of cash. Bring a book.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Banking for Nomads</h3>
              <p className="text-gray-600 mb-4">
                You probably can't get an Argentine bank account as a tourist. Here's what works:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Keep Home Account</p>
                  <p className="text-sm text-gray-600">
                    Use your home country bank + Wise/PayPal for everything
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Wise Account</p>
                  <p className="text-sm text-gray-600">
                    Multi-currency account, debit card works in Argentina
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Crypto Wallet</p>
                  <p className="text-sm text-gray-600">
                    For backup and emergencies. Exchange to cash via local groups.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Cash is King</p>
                  <p className="text-sm text-gray-600">
                    Many places don't take cards. Always have peso cash.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Considerations (Simplified)</h3>
            <p className="text-gray-700 mb-4">
              <strong>Disclaimer:</strong> Not tax advice. Consult a professional. But here's the general situation:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">If You're a Tourist (6 months or less)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Usually no Argentine tax obligation</li>
                  <li>• Continue paying taxes in home country</li>
                  <li>• Keep records of your stay duration</li>
                  <li>• Don't establish "tax residency"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">If You're Long-Term</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• May become tax resident after 12 months</li>
                  <li>• Argentina taxes worldwide income for residents</li>
                  <li>• Many nomads use Digital Nomad Visa</li>
                  <li>• Get an accountant (contador)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg text-sm text-yellow-800">
              <strong>Recommendation:</strong> Talk to a contador familiar with expat situations. 
              Many offer consultations in English. Expect to pay $50-100 for initial advice.
            </div>
          </div>
        </section>

        {/* Productivity & Lifestyle */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calendar className="w-6 h-6 text-indigo-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Productivity & Lifestyle</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Neighborhoods for Remote Work</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">Palermo (Hollywood/Soho)</p>
                  <p className="text-green-700">Best internet, most coworking, walkable</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">Recoleta</p>
                  <p className="text-blue-700">Quiet, reliable power, good cafes</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-800">Belgrano</p>
                  <p className="text-purple-700">Family-friendly, less touristy</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-semibold text-yellow-800">Puerto Madero</p>
                  <p className="text-yellow-700">Modern, reliable, expensive</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Daily Routines That Work</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <p className="font-semibold">The Early Bird (US overlap)</p>
                  <p>8 AM - 12 PM: Deep work</p>
                  <p>12 PM - 2 PM: Lunch/Spanish class</p>
                  <p>2 PM - 6 PM: Calls with US team</p>
                  <p>Evening: Free for BA life</p>
                </div>
                <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                  <p className="font-semibold">The Split Shift</p>
                  <p>8 AM - 12 PM: Work block 1</p>
                  <p>12 PM - 5 PM: Explore BA</p>
                  <p>5 PM - 9 PM: Work block 2 (US morning)</p>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <p className="font-semibold">The EU Worker</p>
                  <p>7 AM - 3 PM: Full day (EU hours)</p>
                  <p>Evenings: Completely free</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Avoiding Isolation</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Working alone in a foreign city can be lonely. Combat it:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Cowork 2-3 days/week minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Join language exchange (Spanglish, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Take group classes (tango, cooking)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Attend nomad meetups weekly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Find a gym/routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Schedule video calls with home friends</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Budgets for Different Lifestyles</h3>
            <p className="text-gray-600 mb-6">
              Based on 2024-2025 prices. Assumes you're using the blue rate effectively.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border-2 border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-2">The Budget Nomad</h4>
                <p className="text-3xl font-bold text-green-700 mb-4">$800-1,200</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Shared apartment or room</li>
                  <li>• Home cooking + cheap eats</li>
                  <li>• Public transport</li>
                  <li>• Free/cheap entertainment</li>
                  <li>• No coworking membership</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">Possible but tight. Good for short stays.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border-2 border-blue-200">
                <h4 className="text-lg font-bold text-blue-800 mb-2">The Comfortable Nomad</h4>
                <p className="text-3xl font-bold text-blue-700 mb-4">$1,500-2,500</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Nice 1-bedroom apartment</li>
                  <li>• Mix of cooking and restaurants</li>
                  <li>• Uber + some taxis</li>
                  <li>• Coworking membership</li>
                  <li>• Weekend trips</li>
                  <li>• Social life</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">Sweet spot for most nomads.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border-2 border-purple-200">
                <h4 className="text-lg font-bold text-purple-800 mb-2">The Ballin' Nomad</h4>
                <p className="text-3xl font-bold text-purple-700 mb-4">$3,000-5,000+</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Luxury apartment or WeWork living</li>
                  <li>• Premium restaurants</li>
                  <li>• Private car/Uber everywhere</li>
                  <li>• Premium coworking</li>
                  <li>• Frequent travel</li>
                  <li>• No compromises</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">Live like a king/queen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Users className="w-6 h-6 text-pink-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Community & Networking</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Nomad Meetups</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Nomad Mondays</p>
                  <p className="text-sm text-gray-600">Weekly meetup, rotating locations</p>
                  <p className="text-sm text-gray-500">Check Meetup.com or Facebook groups</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Coworking Socials</p>
                  <p className="text-sm text-gray-600">La Maquinita and Area Tres host regular events</p>
                  <p className="text-sm text-gray-500">Usually free, sometimes with drinks/food</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Language Exchanges</p>
                  <p className="text-sm text-gray-600">Spanglish, Mundo Lingo - great for meeting people</p>
                  <p className="text-sm text-gray-500">Multiple locations, usually weekdays</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Communities</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Facebook Groups</p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital Nomads Buenos Aires</li>
                    <li>• Expats in Buenos Aires</li>
                    <li>• Buenos Aires Startups</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Slack/Discord</p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Coworking space Slacks (ask when you visit)</li>
                    <li>• Nomad List community</li>
                    <li>• Various tech group Discords</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900">Nomad List</p>
                  <p className="text-sm text-gray-600">Active BA community, good for real-time questions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expat Entrepreneur Groups</h3>
            <p className="text-gray-600 mb-4">
              If you're building something while here, these groups are gold:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-900">BA Startup Community</p>
                <p className="text-sm text-blue-700 mt-1">
                  Mix of locals and expats building companies
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-900">Indie Hackers BA</p>
                <p className="text-sm text-green-700 mt-1">
                  For bootstrappers and solopreneurs
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="font-semibold text-purple-900">Tech Meetups</p>
                <p className="text-sm text-purple-700 mt-1">
                  Python BA, React BA, etc. - check Meetup.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Networking Events Calendar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Regular Events</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Mondays:</strong> Nomad meetups (varies)</li>
                  <li>• <strong>Tuesdays:</strong> Spanglish Palermo</li>
                  <li>• <strong>Wednesdays:</strong> Mundo Lingo</li>
                  <li>• <strong>Thursdays:</strong> Various tech meetups</li>
                  <li>• <strong>Fridays:</strong> Coworking happy hours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Where to Find Events</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Meetup.com (search "Buenos Aires")</li>
                  <li>• Facebook Events</li>
                  <li>• Coworking space newsletters</li>
                  <li>• Nomad List community board</li>
                  <li>• Word of mouth (seriously, ask around)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Final Tips from Someone Who's Been There</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Before You Come</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Test your company's VPN from abroad first</li>
                  <li>• Set up Wise/PayPal before you leave</li>
                  <li>• Bring a good power bank</li>
                  <li>• Download offline maps</li>
                  <li>• Get travel insurance that covers remote work</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">After You Arrive</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Find your coworking space in week 1</li>
                  <li>• Join at least 2 online communities</li>
                  <li>• Set a routine immediately (before jet lag fades)</li>
                  <li>• Learn basic Spanish - it changes everything</li>
                  <li>• Embrace the chaos, don't fight it</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Buenos Aires is one of the best nomad cities in the world - if you come prepared. 
                The internet is good enough, the cost of living is low, the community is welcoming, 
                and the steak is incredible. Just don't expect everything to work like it does back home. 
                That's part of the charm.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50 -mx-4 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Exploring</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/visas/digital-nomad" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-blue-400">
                <CardContent className="p-4">
                  <p className="font-semibold group-hover:text-blue-700 transition-colors">Digital Nomad Visa</p>
                  <p className="text-sm text-gray-500">Requirements, process, and how to apply</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/banking" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-blue-400">
                <CardContent className="p-4">
                  <p className="font-semibold group-hover:text-blue-700 transition-colors">Banking & Money</p>
                  <p className="text-sm text-gray-500">Blue dollar, transfers, and managing finances</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/cost-of-living" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-blue-400">
                <CardContent className="p-4">
                  <p className="font-semibold group-hover:text-blue-700 transition-colors">Cost of Living</p>
                  <p className="text-sm text-gray-500">Real budget breakdowns for Buenos Aires</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/housing" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-blue-400">
                <CardContent className="p-4">
                  <p className="font-semibold group-hover:text-blue-700 transition-colors">Housing Guide</p>
                  <p className="text-sm text-gray-500">Find your apartment in Argentina</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
