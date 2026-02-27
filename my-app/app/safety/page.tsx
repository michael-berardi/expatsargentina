import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Guide for Buenos Aires 2026 | Honest, Practical Advice",
  description:
    "2026 safety reality: Palermo, Recoleta & Belgrano are very safe. Petty theft (phone snatching) is the main risk—not violent crime. No fear-mongering, just practical advice.",
  keywords: [
    "Buenos Aires safety 2026",
    "is Buenos Aires safe",
    "Palermo Recoleta safety",
    "Argentina scams",
    "BA safety tips",
  ],
  openGraph: {
    title: "Safety Guide for Buenos Aires 2026 | Honest, Practical Advice",
    description:
      "2026 safety reality: Palermo, Recoleta & Belgrano are very safe. Petty theft is the main risk—not violent crime. Practical, honest advice.",
    type: "article",
  },
};

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>Safety</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Safety in Buenos Aires (2026)
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            The honest truth: Palermo, Recoleta & Belgrano are very safe. Petty theft (phone snatching) 
            is the main risk—not violent crime. No fear-mongering, just practical advice.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The Real Safety Situation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            The Real Safety Situation (Not Fear-Mongering)
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              How Safe Is BA Really?
            </h3>
            <p>
              Let&apos;s cut through the noise. Buenos Aires is safer than most major US cities. 
              Full stop. The homicide rate in BA is around 4-5 per 100,000 residents. Compare 
              that to Chicago (18), Philadelphia (30), or New Orleans (70+). You&apos;re statistically 
              safer walking around Palermo at 2am than you are in many American downtown areas.
            </p>
            <p>
              The difference? In the US, you worry about violent crime. In BA, you worry about 
              petty theft. It&apos;s annoying, not life-threatening.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Crime Statistics vs. Perception
            </h3>
            <p>
              Argentina has a peculiar relationship with crime reporting. The media sensationalizes 
              everything. A phone snatching becomes &quot;INSEGURIDAD EN AUMENTO&quot; on the evening news. 
              This creates a perception that the city is more dangerous than it actually is.
            </p>
            <p>
              Here&apos;s what the numbers actually show: violent crime against tourists is rare. 
              Most incidents are opportunistic theft—someone sees an easy target and takes a chance. 
              It&apos;s not personal, it&apos;s business.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              What Actually Happens
            </h3>
            <p>Let me break down the reality:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Phone snatching:</strong> The most common issue. Someone on a motorcycle 
                grabs your phone while you&apos;re texting at a traffic light. Happens in every neighborhood.
              </li>
              <li>
                <strong>Pickpocketing:</strong> Classic distraction techniques in crowded areas. 
                Subte during rush hour, busy sidewalks, tourist spots.
              </li>
              <li>
                <strong>Bag snatching:</strong> Leaving your bag on the back of a chair at a café 
                is an invitation. Someone walks by, grabs it, gone in seconds.
              </li>
              <li>
                <strong>Violent crime:</strong> Extremely rare for tourists. Armed robbery happens 
                but usually targets locals in specific situations (leaving banks, jewelry stores, etc.).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Why the &quot;Dangerous&quot; Reputation Is Overblown
            </h3>
            <p>
              Buenos Aires suffers from Argentina&apos;s economic narrative. When the economy tanks, 
              crime stories dominate the news. Visitors read these reports and assume the city 
              is dangerous. Then they arrive and find people drinking wine in parks at midnight, 
              kids playing football in the streets, and a general vibe of normal urban life.
            </p>
            <p>
              The other factor: Latin American cities get lumped together. People hear &quot;Latin America&quot; 
              and think of cartel violence or political instability. BA is not Medellín in the 90s. 
              It&apos;s not Caracas. It&apos;s a European-style city with Latin American chaos, not danger.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Personal Stories: Unsafe vs. Safe
            </h3>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-6">
              <h4 className="font-semibold text-amber-900 mb-2">Times I Felt Unsafe</h4>
              <ul className="list-disc pl-6 space-y-2 text-amber-900">
                <li>
                  Walking through Retiro bus station at 11pm. Empty, poorly lit, sketchy characters 
                  hanging around. I took an Uber the rest of the way.
                </li>
                <li>
                  Got followed for two blocks in San Telmo late at night. Crossed the street, 
                  entered a busy restaurant, problem solved.
                </li>
                <li>
                  Accidentally wandered into a villa (shantytown) near La Boca. Realized immediately, 
                  turned around, walked out. Nothing happened, but I shouldn&apos;t have been there.
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
              <h4 className="font-semibold text-green-900 mb-2">Times I Felt Completely Safe</h4>
              <ul className="list-disc pl-6 space-y-2 text-green-900">
                <li>
                  Walking home alone at 2am in Palermo Soho after dinner. Streets were busy with 
                  people, restaurants still open, felt totally fine.
                </li>
                <li>
                  Leaving my laptop at a café to use the bathroom. Came back, laptop still there. 
                  (Don&apos;t do this, but I&apos;ve done it dozens of times.)
                </li>
                <li>
                  Taking the Subte at midnight. Full of normal people going home from work or 
                  going out. Never had an issue.
                </li>
                <li>
                  Every single day walking around Recoleta, Puerto Madero, or Palermo during daylight. 
                  These neighborhoods are as safe as any European city.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Scams */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Common Scams (Detailed)
          </h2>

          <div className="space-y-8">
            {/* Mustard Scam */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                The &quot;Mustard Scam&quot; (or Bird Poop Scam)
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Someone &quot;accidentally&quot; spills mustard, ketchup, or fake bird poop on your 
                    shoulder or bag. They &quot;helpfully&quot; offer to clean it off. While you&apos;re distracted, 
                    an accomplice grabs your bag or picks your pocket.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    If someone suddenly points out a stain on you, be immediately suspicious. 
                    Real stains don&apos;t appear out of nowhere with a helper ready to assist.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    Keep walking. Say &quot;no gracias&quot; firmly. Don&apos;t let anyone touch you or your belongings. 
                    If they persist, make a scene. Go into the nearest shop to clean yourself.
                  </p>
                </div>
                <div className="bg-amber-100 rounded p-4 text-amber-900 text-sm">
                  <strong>Real story:</strong> This happened to a friend in Recoleta. She felt something 
                  wet hit her shoulder, a woman immediately offered to help clean it. My friend 
                  instinctively grabbed her bag tighter, said &quot;NO&quot; loudly, and walked into a pharmacy. 
                  The woman and her accomplice disappeared.
                </div>
              </div>
            </div>

            {/* Taxi Overcharging */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Taxi Overcharging (Especially from the Airport)
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Taxi drivers at Ezeiza airport target tired, confused tourists. They&apos;ll quote 
                    an inflated flat rate (often $50-80 USD when it should be $30-40), claim the 
                    meter is &quot;broken,&quot; or take the long route. Some have rigged meters that run fast.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    The driver approaches you inside the terminal (legitimate drivers wait outside 
                    at official stands). They quote a price before you get in. The meter is 
                    &quot;conveniently&quot; not working.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    <strong>Best option:</strong> Book a remis (private car service) in advance—Tienda 
                    León or Manuel Tienda León are reputable. Fixed price, no hassle. <strong>Second 
                    best:</strong> Use Uber or Cabify. <strong>If taking a taxi:</strong> Go to the 
                    official taxi stand outside customs. Insist on the meter. A ride to Palermo/Recoleta 
                    should cost 25,000-35,000 pesos (as of 2024, check current rates).
                  </p>
                </div>
              </div>
            </div>

            {/* Fake Police */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Fake Police Officers
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Someone approaches claiming to be police, flashes a badge, and asks to see 
                    your passport/wallet to &quot;check for counterfeit money&quot; or verify your identity. 
                    They either steal your documents and demand a &quot;fine&quot; to return them, or they 
                    simply take your money and run.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    Real police in Argentina rarely approach tourists randomly. They won&apos;t ask to 
                    see your wallet or money. Plainclothes officers should show official ID with 
                    photo. The &quot;check for counterfeit bills&quot; is a dead giveaway—it&apos;s not a thing.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    Never hand over your wallet or passport. Say you&apos;ll go to the nearest police 
                    station or your embassy. Walk away. If they&apos;re persistent, yell &quot;¡Policía!&quot; 
                    loudly. Real police won&apos;t mind you verifying; scammers will leave quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Friendship Bracelet */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                The Friendship Bracelet Scam
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Someone (often in San Telmo or La Boca) approaches and quickly ties a 
                    &quot;friendship bracelet&quot; around your wrist before you can react. Then they 
                    demand payment—often aggressively. If you refuse, they may cause a scene 
                    or have accomplices pressure you.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    Anyone approaching with string, bracelets, or anything to put on your body. 
                    They&apos;re fast—you might not even see it coming until it&apos;s on your wrist.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    Keep your hands in your pockets when walking through tourist areas. If someone 
                    manages to tie something on you, refuse to pay, remove it immediately, and walk 
                    away. They&apos;re relying on embarrassment and politeness—don&apos;t give them either. 
                    If they get aggressive, walk into the nearest shop.
                  </p>
                </div>
              </div>
            </div>

            {/* Restaurant Bill Padding */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Restaurant Bill Padding
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Touristy restaurants (especially in La Boca, San Telmo, and Puerto Madero) 
                    may add extra items to your bill, charge for bread or water you didn&apos;t order, 
                    or apply a &quot;tourist tax&quot; service charge without telling you.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    The bill is much higher than expected. Items you didn&apos;t order appear. The 
                    math doesn&apos;t add up. &quot;Cubiertos&quot; (cover charge) is inflated.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    Always check your bill carefully. Ask about any charges you don&apos;t understand. 
                    Keep a rough mental tally of what you ordered. If something&apos;s wrong, dispute 
                    it politely but firmly. Take a photo of the bill if they refuse to correct it. 
                    Avoid restaurants with aggressive touts outside—they&apos;re the worst offenders.
                  </p>
                </div>
              </div>
            </div>

            {/* Apartment Rental Scams */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Apartment Rental Scams
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Fake listings on Facebook groups, Craigslist-style sites, or Airbnb. The 
                    &quot;owner&quot; asks for a deposit before you see the place, or the apartment doesn&apos;t 
                    exist, or it&apos;s already rented and they keep your money. Another version: 
                    legitimate-looking Airbnb that turns out to be a scam.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    Prices too good to be true. Pressure to wire money or pay deposit before 
                    seeing the place. Owner is &quot;out of the country&quot; or has a convoluted story. 
                    No video tour available. The listing photos look like stock images.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    Never send money before seeing a place in person. Use established platforms 
                    (Airbnb with verified reviews, Booking.com) for short-term stays. For long-term, 
                    visit in person, meet the owner/agent, sign a contract, and pay through 
                    traceable methods. If it feels off, walk away.
                  </p>
                </div>
              </div>
            </div>

            {/* Currency Exchange Scams */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Currency Exchange Scams
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">How it works:</span>
                  <p className="mt-1">
                    Street changers (&quot;arbolitos&quot;) who short-change you, give counterfeit bills, 
                    or simply run off with your money. Some use slight-of-hand to swap real bills 
                    for fake ones during the count. Others quote one rate then &quot;recalculate&quot; 
                    after you&apos;ve handed over cash.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">How to spot it:</span>
                  <p className="mt-1">
                    The rate is significantly better than the official rate (suspicious). They 
                    rush you or distract you during the count. They want to count the money in 
                    a way you can&apos;t see clearly. The location is isolated or &quot;just around the corner.&quot;
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">What to do:</span>
                  <p className="mt-1">
                    Use reputable exchange houses (&quot;cuevas&quot;) with fixed locations and good reviews. 
                    Count your money carefully, twice. Don&apos;t let them rush you. Learn to recognize 
                    real Argentine bills—check for watermarks and security features. Better yet, 
                    use Western Union or similar services for large amounts. Never exchange on 
                    the street with someone who approaches you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Safety */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Neighborhood Safety Reality Check
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Palermo</h3>
              <p className="text-green-800 mb-2">
                <strong>Safety level:</strong> Very safe
              </p>
              <p className="text-slate-700">
                Palermo is the safest large neighborhood in BA. It&apos;s where most expats live, 
                where the wealthy porteños hang out, and where you&apos;ll feel most comfortable 
                walking at night. That said, phone snatching happens here too—especially in 
                Palermo Soho around Plaza Serrano. Don&apos;t get complacent just because it feels 
                like Europe. Keep your phone in your front pocket, especially when crossing 
                streets (motos love to grab phones from people texting while walking).
              </p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Recoleta</h3>
              <p className="text-green-800 mb-2">
                <strong>Safety level:</strong> Safest
              </p>
              <p className="text-slate-700">
                Recoleta is the most &quot;European&quot; neighborhood—wide avenues, fancy buildings, 
                embassies everywhere. It&apos;s arguably the safest area in the city. You can walk 
                around at any hour and feel fine. The only issue is the occasional scam artist 
                targeting tourists near the cemetery or the parks. But violent crime? Almost 
                unheard of here.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">San Telmo</h3>
              <p className="text-yellow-800 mb-2">
                <strong>Safety level:</strong> Fine during day, careful at night
              </p>
              <p className="text-slate-700">
                San Telmo is tourist central during the day and edgy-cool at night. The main 
                streets (Defensa, Estados Unidos) are fine, but the side streets can get sketchy 
                after dark. Plaza Dorrego and the surrounding area are safe enough, but don&apos;t 
                wander too far east toward the highway at night. The Sunday market is totally 
                safe—just watch for pickpockets in crowds.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2">La Boca</h3>
              <p className="text-red-800 mb-2">
                <strong>Safety level:</strong> Tourist area only, don&apos;t wander
              </p>
              <p className="text-slate-700">
                La Boca is complicated. Caminito—the colorful tourist street—is heavily policed 
                and safe. But step one block in any direction and you&apos;re in a different world. 
                The neighborhood has real poverty and real crime. Go see Caminito, take your photos, 
                eat at a tourist restaurant if you must, then leave. Don&apos;t explore. Don&apos;t think 
                you&apos;re going to find the &quot;real&quot; BA by wandering the side streets. You&apos;ll find 
                trouble instead.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-2">Retiro</h3>
              <p className="text-red-800 mb-2">
                <strong>Safety level:</strong> Avoid at night (near bus station)
              </p>
              <p className="text-slate-700">
                Retiro is a tale of two neighborhoods. The area around Plaza San Martín and the 
                luxury hotels is fine—business district, well policed. But the area around the 
                Retiro bus station is sketchy, especially at night. This is where many of the 
                city&apos;s homeless congregate, where drug deals happen openly, and where tourists 
                get targeted. If you&apos;re taking a night bus, take an Uber directly to the station, 
                don&apos;t arrive early and hang around.
              </p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Villa Crespo</h3>
              <p className="text-green-800 mb-2">
                <strong>Safety level:</strong> Up-and-coming, generally safe
              </p>
              <p className="text-slate-700">
                Villa Crespo is what Palermo was 15 years ago—trendy, full of young people, 
                great food and nightlife, but still a bit rough around the edges. It&apos;s generally 
                safe, especially around the main avenues (Corrientes, Scalabrini Ortiz). The 
                further west you go, the more careful you should be at night. But overall, this 
                is a solid, safe neighborhood where locals actually live.
              </p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Puerto Madero</h3>
              <p className="text-green-800 mb-2">
                <strong>Safety level:</strong> Very safe, sterile
              </p>
              <p className="text-slate-700">
                Puerto Madero is BA&apos;s newest neighborhood—all glass towers, fancy restaurants, 
                and corporate offices. It&apos;s extremely safe, heavily policed, and feels completely 
                artificial. The downside: it&apos;s boring. No street life, no character, overpriced 
                everything. Safe to walk around at 3am, but you probably won&apos;t want to because 
                there&apos;s nothing happening.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Safety Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Practical Safety Tips
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              The Phone in Front Pocket Rule
            </h3>
            <p>
              This is the single most important safety habit in BA. Your phone goes in your 
              front pocket, never your back pocket, never in your hand while walking, never 
              on the table at a café. Motos (motorcycles) are everywhere, and phone snatching 
              is their specialty. They&apos;ll ride by, grab the phone from your hand, and be gone 
              before you process what happened.
            </p>
            <p>
              If you need to check your phone, step into a shop or against a wall where no one 
              can ride up behind you. Yes, it&apos;s annoying. Yes, you&apos;ll get used to it.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Don&apos;t Wear Flashy Jewelry or Watches
            </h3>
            <p>
              Leave the Rolex at home. Don&apos;t wear expensive-looking jewelry. This isn&apos;t about 
              being robbed at gunpoint—it&apos;s about not making yourself a target for opportunistic 
              theft. A nice watch signals &quot;I have money&quot; to everyone around you, including people 
              you don&apos;t want noticing you.
            </p>
            <p>
              That said, you don&apos;t need to dress like a pauper. Normal clothes are fine. Just 
              avoid obvious displays of wealth.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              The &quot;No Dar Papaya&quot; Philosophy
            </h3>
            <p>
              Colombians have a saying: &quot;No dar papaya&quot;—don&apos;t give papaya. It means don&apos;t make 
              yourself an easy target. Don&apos;t flash your phone. Don&apos;t leave your bag unattended. 
              Don&apos;t walk around with your wallet hanging out of your pocket. Don&apos;t get so drunk 
              you can&apos;t walk straight. Don&apos;t wander into obviously dangerous areas.
            </p>
            <p>
              Most crime in BA is opportunistic. The thief isn&apos;t targeting you specifically—they&apos;re 
              looking for the easiest mark. Don&apos;t be the easiest mark. This isn&apos;t victim-blaming; 
              it&apos;s practical reality. You can&apos;t control crime, but you can control whether you 
              look like a soft target.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Walking at Night Guidelines
            </h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Stick to busy streets:</strong> Thieves prefer empty streets. If a street 
                feels too quiet, take a different route.
              </li>
              <li>
                <strong>Walk with purpose:</strong> Looking lost or confused makes you a target. 
                Even if you&apos;re lost, walk confidently until you can check your phone in a safe spot.
              </li>
              <li>
                <strong>Avoid headphones:</strong> You need to hear what&apos;s happening around you. 
                If you must listen to music, keep one earbud out.
              </li>
              <li>
                <strong>Don&apos;t walk and text:</strong> See the phone rule above. This is when 
                you&apos;re most vulnerable.
              </li>
              <li>
                <strong>Trust your gut:</strong> If a street or situation feels wrong, it probably 
                is. Cross the street, enter a shop, call an Uber. Don&apos;t worry about looking paranoid.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Using ATMs Safely
            </h3>
            <p>
              ATMs are prime spots for crime. Here&apos;s how to use them safely:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Use ATMs inside banks or shopping malls, not standalone machines on the street.
              </li>
              <li>
                Check for skimming devices—wiggle the card slot, look for anything unusual.
              </li>
              <li>
                Cover the keypad when entering your PIN.
              </li>
              <li>
                Don&apos;t count your money at the machine. Put it away and count later.
              </li>
              <li>
                Be aware of who&apos;s around you. If someone is hovering nearby, cancel and find 
                another machine.
              </li>
              <li>
                Avoid ATMs at night if possible. If you must, use one in a well-lit, busy area.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Uber vs. Taxis vs. Public Transport
            </h3>
            <p>
              <strong>Uber/Cabify:</strong> Generally the safest option. Tracked, licensed drivers, 
              no haggling. The downside: sometimes drivers will ask you to sit in front to avoid 
              taxi union conflicts. This is normal and safe.
            </p>
            <p>
              <strong>Taxis:</strong> Safe enough, but make sure the meter is running or agree on 
              a price beforehand. Radio taxis (called by phone or app) are safer than street hail 
              taxis. Avoid taxis waiting outside tourist spots—they&apos;re the ones most likely to 
              overcharge.
            </p>
            <p>
              <strong>Public transport:</strong> The Subte is safe, even at night, though it can 
              get crowded (prime pickpocket territory). Buses are also generally safe but slower. 
              Avoid rush hour if you can—it&apos;s unpleasant and higher risk for theft.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              What to Do If You&apos;re Robbed
            </h3>
            <p>
              First: your life is worth more than your stuff. If someone threatens you with a 
              weapon, give them what they want. Argentina is not the place to be a hero.
            </p>
            <p>
              If you&apos;re robbed:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>
                <strong>Stay calm.</strong> Adrenaline will be pumping. Take a breath.
              </li>
              <li>
                <strong>Get to safety.</strong> Move to a populated area, a shop, a hotel lobby.
              </li>
              <li>
                <strong>Don&apos;t chase them.</strong> You won&apos;t catch them, and you might get hurt.
              </li>
              <li>
                <strong>Cancel your cards immediately.</strong> Call your bank&apos;s emergency number. 
                Most banks have 24/7 international lines.
              </li>
              <li>
                <strong>File a police report if needed for insurance.</strong> See below for the 
                reality of this process.
              </li>
              <li>
                <strong>Contact your embassy if your passport was stolen.</strong> They can issue 
                an emergency travel document.
              </li>
            </ol>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Emergency Information
          </h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-900 mb-4">Emergency Numbers</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-red-700 w-32">911</span>
                <span className="text-slate-700">General emergency (works from any phone)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-red-700 w-32">101</span>
                <span className="text-slate-700">Police</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-red-700 w-32">107</span>
                <span className="text-slate-700">Medical emergency (SAME)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-red-700 w-32">100</span>
                <span className="text-slate-700">Fire department</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-red-700 w-32">0800-999-5000</span>
                <span className="text-slate-700">Tourist police (English spoken)</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Embassy Contacts
            </h3>
            <p>
              Keep your embassy&apos;s contact info saved in your phone. They can help with lost/stolen 
              passports, emergency travel documents, and contacting family if needed. Most embassies 
              also have emergency hotlines for after-hours situations.
            </p>
            <p>
              <strong>US Embassy:</strong> +54-11-5777-4533 (emergency after hours)
              <br />
              <strong>UK Embassy:</strong> +54-11-4808-2200
              <br />
              <strong>Canadian Embassy:</strong> +54-11-4808-1000
              <br />
              <strong>Australian Embassy:</strong> +54-11-4779-4100
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              How to Report a Crime (And Why You Might Not Want To)
            </h3>
            <p>
              Here&apos;s the reality: reporting a crime in Argentina is often more trouble than it&apos;s 
              worth for minor incidents. The police are underpaid, undertrained, and often 
              unhelpful. You could spend hours at a police station filling out paperwork in Spanish, 
              only to be told there&apos;s nothing they can do.
            </p>
            <p>
              For minor theft (phone, wallet), many locals don&apos;t even bother reporting it. The 
              police report (&quot;denuncia&quot;) is mainly useful for insurance claims. If you don&apos;t need 
              it for insurance, consider whether it&apos;s worth your time.
            </p>
            <p>
              That said, if you were the victim of a violent crime, definitely report it. And if 
              you need that police report for insurance, here&apos;s how:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>
                Go to the nearest police station (&quot;comisaría&quot;). Tourist police stations are 
                better for foreigners—they often have English speakers.
              </li>
              <li>
                Bring your passport and any documentation of what was stolen.
              </li>
              <li>
                Be patient. The process is slow and bureaucratic.
              </li>
              <li>
                Get multiple copies of the report. You&apos;ll need them for insurance.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Getting a Police Report for Insurance
            </h3>
            <p>
              Most travel insurance requires a police report to process theft claims. Here&apos;s 
              what you need to know:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Report the theft within 24-48 hours if possible. Insurance companies get 
                suspicious of delayed reports.
              </li>
              <li>
                Be specific about what was stolen, when, and where. Include serial numbers 
                if you have them.
              </li>
              <li>
                Get the report in Spanish (original) and ask if they can provide an English 
                translation. If not, you may need to get it translated for your insurance.
              </li>
              <li>
                Take photos of the report. Keep the original safe.
              </li>
              <li>
                Some insurance companies accept online reports filed through the police website. 
                Check if this is an option—it&apos;s much easier than going to the station.
              </li>
            </ul>
          </div>
        </section>

        {/* Health Emergencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Health Emergencies
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Guardia vs. Emergency Room
            </h3>
            <p>
              In Argentina, &quot;guardia&quot; is the emergency room/urgent care. Every hospital has one. 
              They&apos;re required by law to treat emergencies regardless of ability to pay or insurance 
              status. However, the quality varies dramatically between public and private hospitals.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              When to Call SAME (107)
            </h3>
            <p>
              SAME (Sistema de Atención Médica de Emergencias) is Buenos Aires&apos; emergency medical 
              service. Call 107 for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Serious injuries</li>
              <li>Chest pain or difficulty breathing</li>
              <li>Severe allergic reactions</li>
              <li>Unconsciousness</li>
              <li>Any life-threatening situation</li>
            </ul>
            <p>
              They&apos;ll dispatch an ambulance. Response times vary but are generally reasonable in 
              the central neighborhoods.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Private vs. Public Emergency Care
            </h3>
            <p>
              <strong>Public hospitals (hospitales públicos):</strong> Free for everyone, including 
              foreigners. The quality is hit-or-miss. Some are excellent (Hospital de Clínicas, 
              Hospital Fernández). Others are overcrowded and underfunded. Expect long waits for 
              non-emergencies.
            </p>
            <p>
              <strong>Private hospitals/clinics:</strong> Much better experience if you can pay or 
              have insurance. Swiss Medical, Hospital Alemán, Hospital Italiano, and Sanatorio 
              Güemes are all excellent. You&apos;ll get faster service, better facilities, and often 
              English-speaking staff. But you&apos;ll need to pay upfront or show insurance.
            </p>
            <p>
              For anything serious, go private if you can. The difference in care quality is significant.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Travel Insurance That Actually Works
            </h3>
            <p>
              Not all travel insurance is created equal. Here&apos;s what to look for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Direct billing:</strong> The best policies have agreements with local 
                hospitals so you don&apos;t have to pay upfront and wait for reimbursement.
              </li>
              <li>
                <strong>24/7 hotline:</strong> You want to be able to call and get pre-authorization 
                for treatment at any hour.
              </li>
              <li>
                <strong>Medical evacuation coverage:</strong> If something serious happens, you 
                want the option to be evacuated to your home country.
              </li>
              <li>
                <strong>No &quot;adventure sports&quot; exclusions:</strong> If you&apos;re planning to do anything 
                active, make sure it&apos;s covered.
              </li>
            </ul>
            <p>
              Recommended providers with good Argentina coverage: World Nomads, SafetyWing, 
              IMG Global. Read the fine print before you buy.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h4 className="font-semibold text-blue-900 mb-2">Recommended Private Hospitals</h4>
              <ul className="list-disc pl-6 space-y-1 text-blue-900">
                <li>
                  <strong>Hospital Alemán</strong> — Recoleta, excellent reputation, English-speaking staff
                </li>
                <li>
                  <strong>Hospital Italiano</strong> — Almagro, top-tier care, many English speakers
                </li>
                <li>
                  <strong>Swiss Medical Center</strong> — Multiple locations, premium care
                </li>
                <li>
                  <strong>Sanatorio Güemes</strong> — Recoleta, high quality, foreigner-friendly
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="bg-slate-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Buenos Aires is not a dangerous city. It&apos;s a big city, with big city problems. 
            Petty theft exists. Scams exist. But violent crime against tourists is rare, and 
            most people visit without any issues at all.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The key is awareness, not fear. Don&apos;t let safety concerns ruin your trip. Don&apos;t 
            stay in your apartment because you&apos;re worried about going out. Use common sense, 
            follow the tips above, and you&apos;ll be fine.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I&apos;ve lived here for years. I&apos;ve walked home alone at 3am dozens of times. I&apos;ve 
            taken the Subte at midnight. I&apos;ve left my laptop in cafés (don&apos;t do this). And 
            I&apos;ve never been robbed, never been assaulted, never had anything worse than an 
            attempted scam that I saw through immediately.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            BA is a wonderful city. Don&apos;t let fear keep you from experiencing it.
          </p>
        </section>
      </article>
    </main>
  );
}
