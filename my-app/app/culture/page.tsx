import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ClockIcon,
  UsersIcon,
  MessageCircleIcon,
  DollarSignIcon,
  ShieldIcon,
  UtensilsIcon,
  AlertCircleIcon,
  HeartIcon,
  ArrowRightIcon,
  SparklesIcon,
  LightbulbIcon,
  CheckCircleIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Argentine Culture & Social Norms - A Guide for Expats",
  description: "The unwritten rules of Argentine culture. Learn about mate etiquette, social customs, the kiss greeting, time schedules, and how to avoid looking like a tourist.",
  keywords: ["Argentine culture", "Argentina social norms", "mate etiquette", "Buenos Aires customs", "expat guide Argentina"],
  alternates: { canonical: "https://expatsargentina.com/culture" },
};

const timeAndSchedules = [
  {
    title: "The 'Argentine Hour'",
    content: "If someone says 'llego en 20 minutos' (I'll be there in 20 minutes), they mean 45 minutes. If they say 'ahora' (now), they mean sometime today. This isn't rudeness—it's just how time works here.",
    story: "I learned this the hard way when I showed up 'on time' for a party at 9 PM. The hosts were still in their pajamas. The actual party started around 11. I sat on their couch for two hours pretending I wasn't incredibly awkward.",
  },
  {
    title: "The 10 PM Dinner Reality",
    content: "Restaurants don't even get busy until 9:30 PM. Most Argentines eat dinner between 9 PM and 11 PM. If you're hungry at 6 PM, you're on your own—kitchens are often closed.",
    story: "My first week, I tried to get dinner at 7 PM. The waiter looked at me like I'd asked for breakfast at midnight. He politely explained they were 'between services.' I ate empanadas from a kiosk and went to bed hungry.",
  },
  {
    title: "Siesta Is Real",
    content: "From roughly 1 PM to 4 PM, many businesses close. Banks, government offices, and small shops shut down. Don't plan to get anything administrative done during these hours.",
    story: "I once stood outside a bank for 30 minutes at 2 PM, checking my watch and getting increasingly frustrated, before a kind old lady told me they were closed for siesta. I felt like the most obvious tourist in the city.",
  },
  {
    title: "Sunday Family Day",
    content: "Sundays are sacred family time. Many shops close or have limited hours. Parks fill up with multi-generational family gatherings. Asados (BBQs) happen religiously.",
    story: "I tried to buy a phone charger on a Sunday afternoon. After walking to three closed stores, I finally found a kiosk that charged me triple. Now I plan my Sundays around parks, cafes, and accepting that commerce has stopped.",
  },
];

const socialCustoms = [
  {
    title: "The Kiss on the Cheek",
    content: "One kiss on the right cheek is standard for greetings and goodbyes—regardless of gender. Men shake hands in very formal business settings, but among friends, everyone kisses.",
    story: "My first Argentine party, I stuck out my hand to shake. The woman looked confused, then laughed and kissed my cheek anyway. I spent the rest of the night overthinking every greeting. Now I default to the kiss—it's actually quite lovely once you get used to it.",
    tip: "When in doubt, follow their lead. If they lean in, you lean in."
  },
  {
    title: "Mate Etiquette",
    content: "Mate is a shared drink passed in a circle. The cebador (server) fills it, drinks the first one (it's always bitter), then refills and passes. You drink the full gourd, then pass it back—don't say 'gracias' unless you want to stop drinking.",
    story: "I said 'thank you' after my first sip because I'm polite. The group went quiet. Someone explained that 'gracias' means 'I'm done, don't give me more.' I had to awkwardly ask to rejoin the mate circle. The shame still haunts me.",
    tip: "Don't move the bombilla (metal straw). Don't stir it. Just drink and pass."
  },
  {
    title: "Asado Rules",
    content: "The asador (grill master) is in charge. You don't touch the meat, you don't flip the meat, you don't even suggest when it might be done. Bring wine or a side dish, but never try to help with the grill unless asked.",
    story: "At my first asado, I tried to 'help' by checking the meat. The host gently but firmly moved me away from the grill. Later, a friend explained that questioning the asador is like telling someone's grandmother her pasta sauce needs more salt. Just don't.",
    tip: "Compliment the asador profusely. It's expected and appreciated."
  },
  {
    title: "Personal Space (Or Lack Thereof)",
    content: "Argentines stand close when talking. They touch your arm or shoulder while speaking. They'll lean in. This isn't flirting or aggression—it's just cultural proximity.",
    story: "I kept backing away from people during conversations, unconsciously seeking my American personal bubble. They kept stepping closer. I thought I was being hit on repeatedly. Turns out, we just have different definitions of 'personal space.'",
    tip: "Embrace it. The warmth is genuine."
  },
  {
    title: "Greeting Everyone Individually",
    content: "When arriving at a gathering, you greet and kiss everyone individually. Same when leaving. You don't just wave at the room—you go around to each person.",
    story: "I used to try the American 'hey everyone!' wave when arriving at parties. People looked confused. Now I budget an extra 10 minutes for arrivals and departures just for the greeting circuit. It's actually really nice once you accept it.",
  },
];

const communicationStyle = [
  {
    title: "'Yes' Means 'Maybe'",
    content: "If an Argentine says 'sí, sí, vamos a hacer eso' (yes, yes, let's do that), they might mean 'possibly, if everything works out, but don't count on it.' Direct refusals are considered rude.",
    story: "A contractor told me 'sí, sí' to every request during a renovation. I thought everything was confirmed. Two weeks later, half the things hadn't happened. I learned to ask '¿Cuándo exactamente?' (When exactly?) and get specific dates.",
  },
  {
    title: "'Maybe' Means 'No'",
    content: "If someone says 'capaz' (maybe), 'veremos' (we'll see), or 'a ver' (let's see), they're almost certainly saying no in a polite way. Don't push—it won't change the answer.",
    story: "I spent weeks following up on a 'maybe' business partnership. Every email got a 'we're considering it' response. Eventually, a friend told me I'd been rejected weeks ago. I just hadn't understood the code.",
  },
  {
    title: "The Porteño Attitude",
    content: "Porteños (Buenos Aires locals) have a reputation for being a bit arrogant, sarcastic, and intellectually competitive. They'll debate anything, love wordplay, and take pride in their quick wit.",
    story: "I got into a 'debate' about pizza at a dinner party. It started friendly, then got surprisingly intense. People were citing philosophers about cheese distribution. I realized this was sport, not argument. Now I enjoy the intellectual sparring.",
  },
  {
    title: "Sarcasm and Humor",
    content: "Argentine humor is dry, self-deprecating, and often dark. They joke about their economic crises, their politicians, their own failures. If you're not sure if they're joking, they probably are.",
    story: "Someone made a joke about inflation that I thought was a genuine complaint. I started offering sympathetic advice about dollar savings. The whole table laughed at me. 'No, no, we're laughing at ourselves,' they explained. 'We have to laugh or we'd cry.'",
  },
];

const moneyAndTipping = [
  {
    title: "Tipping Culture",
    content: "10% at restaurants is standard. It's not required everywhere—coffee shops, bars, and casual places often don't expect it. Some places include 'cubiertos' (cover charge) instead.",
    story: "I overtipped 20% at a cafe my first month, thinking I was being generous. The waiter looked confused and tried to give me change back. Now I keep it simple: 10% at restaurants, round up at cafes, nothing if there's a service charge.",
  },
  {
    title: "Propina vs Service Charge",
    content: "Check your bill. 'Servicio' or 'cubiertos' means a service charge is already included. 'Propina' is the voluntary tip. Don't double-tip unless the service was exceptional.",
    story: "I tipped on top of a service charge for months before someone pointed it out. I was basically paying 30% extra every meal. Check your bill carefully—it's usually itemized at the bottom.",
  },
  {
    title: "Cash Is King",
    content: "Despite being a modern city, Buenos Aires runs on cash—specifically US dollars. Many landlords prefer cash rent. Some restaurants offer discounts for cash. Credit cards often get you the official rate, which is worse.",
    story: "I paid my first month's rent with a bank transfer because it seemed safer. My landlord was confused and slightly annoyed. Now I pay in crisp hundred-dollar bills like everyone else. It feels weirdly illicit but it's totally normal.",
  },
  {
    title: "The 'Vuelto' Issue",
    content: "Small bills and coins are precious. Shops often round or give candy instead of small change. Breaking large bills can be challenging. Always carry small denominations.",
    story: "I tried to pay for a 500-peso item with a 10,000-peso bill. The cashier looked at me like I'd insulted her mother. 'No tengo vuelto' (I don't have change). Now I hoard small bills like a dragon with gold. I have a special wallet just for coins.",
  },
];

const safetyTips = [
  {
    title: "Phone in Pocket Rule",
    content: "Don't walk around with your phone in your hand. Don't check it on the street. Don't even have it visible in your back pocket. Phone snatching is the most common crime against tourists.",
    story: "I got my phone stolen in Palermo while texting. One second it was in my hand, the next a guy on a motorcycle had it. I wasn't even being careless—I was just visible. Now my phone stays in my front pocket until I'm inside.",
  },
  {
    title: "No Flashy Jewelry",
    content: "Leave the Rolex at home. Don't wear expensive-looking watches, flashy rings, or obvious designer items. Blend in. Argentines dress well but generally understated.",
    story: "I wore a nice watch my first week. Three different people warned me about it. 'Te van a robar' (They're going to rob you). I bought a cheap Casio and stopped looking like a walking target.",
  },
  {
    title: "No Dar Papaya",
    content: "This is the golden rule: don't give papaya (don't make yourself an easy target). It means being aware, not showing off valuables, and not putting yourself in obviously risky situations.",
    story: "A local friend explained this phrase after I left my laptop bag unattended at a cafe. 'No dar papaya,' he said, shaking his head. It applies to everything—don't flash cash, don't wander drunk at 3 AM with your phone out, don't make it easy.",
  },
  {
    title: "Neighborhood Awareness",
    content: "Palermo, Recoleta, Belgrano, and Puerto Madero are generally safe day and night. San Telmo and La Boca require more caution, especially after dark. Always check with locals about current conditions.",
    story: "I walked through San Telmo alone at night once because 'it's a tourist area, how bad can it be?' Pretty bad, apparently. A group of kids followed me for blocks until I ducked into a restaurant. Now I take Ubers after dark in borderline areas.",
  },
  {
    title: "Common Scams",
    content: "Mustard/pigeon poop scams (distracting you while someone robs you), fake taxi overcharges, and the 'dropped money' trick are common. Stay alert in tourist areas.",
    story: "Someone 'accidentally' squirted mustard on my shoulder in San Telmo. A 'helpful' stranger rushed over to help clean it. I instinctively grabbed my bag and walked away. Later I learned this is a classic distraction technique. Trust your gut.",
  },
];

const foodCulture = [
  {
    title: "The Meat Obsession",
    content: "Argentina consumes more beef per capita than almost any country. Asados are social events. Vegetarians exist but are often met with confusion and concern for their health.",
    story: "I'm vegetarian. When I tell Argentines this, they look at me with genuine worry. 'But... why? Are you sick?' At asados, hosts panic and grill me an entire zucchini. I've learned to just say 'I eat everything' and quietly avoid the meat.",
  },
  {
    title: "Vegetarian Struggles",
    content: "Vegetarianism is growing but still niche. Many 'vegetarian' dishes contain meat products. Empanadas will have meat in them unless specified. Always ask.",
    story: "I ordered 'vegetable empanadas' at a restaurant. Took a bite. Definitely had ham in it. 'Oh, that's just for flavor,' the waiter said when I asked. Now I specify 'sin carne, sin jamón, sin pollo' (no meat, no ham, no chicken) every time.",
  },
  {
    title: "Coffee Culture",
    content: "There is no drip coffee. Your options are espresso, cortado (espresso with a splash of milk), or café con leche (coffee with lots of milk). Starbucks exists but locals prefer traditional cafes.",
    story: "I asked for 'just a regular coffee' at a cafe. The waiter stared at me. '¿Cortado? ¿Con leche?' I didn't know the options. Now I'm a cortado person. It's better than drip anyway. I sit for hours with one cup and nobody rushes me.",
  },
  {
    title: "Bakeries (Panaderías)",
    content: "Facturas (pastries) and medialunas (croissants, but sweeter) are breakfast staples. Bakeries are everywhere, cheap, and delicious. Try the dulce de leche-filled ones.",
    story: "I became a regular at my corner bakery within a week. Now they know my order (two medialunas, one con dulce de leche) and have it ready when they see me coming. It's my favorite part of the morning routine.",
  },
  {
    title: "Delivery Apps",
    content: "Rappi and PedidosYa dominate food delivery. You can get almost anything delivered—food, groceries, pharmacy items, even cash in some cases. Delivery is cheap and fast.",
    story: "I was sick with a fever and realized I had no food. Ordered soup, medicine, and tissues through Rappi. It arrived in 25 minutes. The delivery guy wished me 'que te mejores' (get well). I don't know how I lived without this before.",
  },
];

const faqs = [
  {
    question: "What are the biggest culture shocks for expats in Argentina?",
    answer: "The biggest shocks are the late schedule (dinner at 10pm, parties starting at midnight), the flexible relationship with time (people are chronically late by 30-60 minutes), the physical closeness during conversations, the kiss-on-the-cheek greeting for everyone, and the siesta hours when businesses close from 1-4pm. The indirect communication style also surprises many—'maybe' usually means 'no' and 'yes' often means 'maybe.'",
  },
  {
    question: "How does tipping work in Argentina?",
    answer: "Tip 10% at sit-down restaurants—leave it in cash even if paying by card, as waiters receive cash tips directly. Check your bill for 'cubierto' (cover charge) or 'servicio' (service charge), which is separate from the tip. At cafes, round up or leave small change. Delivery drivers get a small tip. Tipping is not expected at bars unless you're at a table with service.",
  },
  {
    question: "What time do Argentines eat dinner?",
    answer: "Argentines typically eat dinner between 9pm and 11pm. Restaurants don't get busy until 9:30pm, and trying to dine at 7pm will likely mean an empty restaurant or a closed kitchen. The daily eating schedule is: light breakfast (8-9am), main lunch (1-2pm), merienda afternoon snack with coffee and pastries (5-7pm), and then late dinner.",
  },
  {
    question: "What is mate etiquette in Argentina?",
    answer: "Mate is a shared drink passed in a circle. The cebador (server) prepares and fills it, drinks the first bitter sip, then refills and passes to the next person. Drink the entire gourd, then pass it back to the cebador—not to the next person. Never move or stir the bombilla (metal straw). Say 'gracias' only when you want to stop drinking, as it signals you're done. Refusing mate when offered can be seen as rude.",
  },
  {
    question: "How do Argentines feel about personal space?",
    answer: "Argentines have a much smaller personal space bubble than North Americans or Northern Europeans. They stand close during conversations, touch your arm or shoulder while talking, and lean in. This is not flirting or aggression—it's cultural warmth. The cheek kiss greeting applies to everyone regardless of gender, and at gatherings you must greet and say goodbye to each person individually.",
  },
  {
    question: "What's the work-life balance like in Argentina?",
    answer: "Argentines prioritize relationships and leisure over work. Sunday is sacred family time with mandatory asados. Social gatherings go very late because people value connection. Businesses close for siesta. The concept of 'living to work' is foreign here—Argentines work to live. Expect a slower pace, longer lunches, and less urgency around deadlines compared to the US or Northern Europe.",
  },
];

export default function CulturePage() {
  return (
    <div className="flex flex-col min-h-screen">
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
                "name": "Culture",
                "item": "https://expatsargentina.com/culture"
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
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Culture & Customs</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <HeartIcon size="sm" className="mr-1" />
              Cultural Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Unwritten Rules of Argentine Life
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The cultural quirks, social norms, and daily realities that nobody tells you about. 
              Learn from my embarrassing mistakes so you don't have to make them.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline"><ClockIcon size="sm" className="mr-1" />Time & Schedules</Badge>
              <Badge variant="outline"><UsersIcon size="sm" className="mr-1" />Social Customs</Badge>
              <Badge variant="outline"><MessageCircleIcon size="sm" className="mr-1" />Communication</Badge>
              <Badge variant="outline"><DollarSignIcon size="sm" className="mr-1" />Money</Badge>
              <Badge variant="outline"><ShieldIcon size="sm" className="mr-1" />Safety</Badge>
              <Badge variant="outline"><UtensilsIcon size="sm" className="mr-1" />Food</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Time & Schedules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <ClockIcon size="lg" className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Time & Schedules</h2>
                <p className="text-muted-foreground">Why nothing starts on time (and why that's okay)</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {timeAndSchedules.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-l-4 border-amber-400">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">I learned this the hard way:</span> {item.story}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Customs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <UsersIcon size="lg" className="text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Social Customs</h2>
                <p className="text-muted-foreground">How to not accidentally offend everyone</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {socialCustoms.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg border-l-4 border-rose-400 mb-4">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">I learned this the hard way:</span> {item.story}
                      </p>
                    </div>
                    {item.tip && (
                      <div className="flex items-start gap-2 text-sm">
                        <LightbulbIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground"><strong>Pro tip:</strong> {item.tip}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Style */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <MessageCircleIcon size="lg" className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Communication Style</h2>
                <p className="text-muted-foreground">Decoding what people actually mean</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {communicationStyle.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">I learned this the hard way:</span> {item.story}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Money & Tipping */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <DollarSignIcon size="lg" className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Money & Tipping</h2>
                <p className="text-muted-foreground">How to handle cash, tips, and awkward money moments</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {moneyAndTipping.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border-l-4 border-green-400">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">I learned this the hard way:</span> {item.story}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Street Smarts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <ShieldIcon size="lg" className="text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Safety & Street Smarts</h2>
                <p className="text-muted-foreground">Staying safe without being paranoid</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {safetyTips.map((item, index) => (
                <Card key={index} className={index === 0 ? "border-red-200 dark:border-red-900/30" : ""}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-2">
                      {index === 0 && <AlertCircleIcon size="md" className="text-red-500 flex-shrink-0" />}
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-400">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">I learned this the hard way:</span> {item.story}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food Culture */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <UtensilsIcon size="lg" className="text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Food Culture</h2>
                <p className="text-muted-foreground">Eating, drinking, and surviving as a vegetarian</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {foodCulture.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">I learned this the hard way:</span> {item.story}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <SparklesIcon size="lg" className="text-primary" />
              <h2 className="text-3xl font-bold">Quick Reference: Don't Look Like a Tourist</h2>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircleIcon size="sm" className="text-green-500" />
                      Do This
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Kiss on the cheek when greeting</li>
                      <li>• Carry small bills and coins</li>
                      <li>• Keep your phone in your front pocket</li>
                      <li>• Say 'buen día' to shopkeepers</li>
                      <li>• Accept mate when offered (don't say gracias)</li>
                      <li>• Eat dinner after 9 PM</li>
                      <li>• Tip 10% at restaurants</li>
                      <li>• Compliment the asador at BBQs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertCircleIcon size="sm" className="text-red-500" />
                      Don't Do This
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Walk with your phone visible</li>
                      <li>• Wear flashy jewelry or watches</li>
                      <li>• Expect places to open during siesta</li>
                      <li>• Stir the mate straw (bombilla)</li>
                      <li>• Touch the meat at an asado</li>
                      <li>• Ask for drip coffee (it doesn't exist)</li>
                      <li>• Take 'yes' at face value</li>
                      <li>• Rush through greetings at gatherings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-16 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HeartIcon size="xl" className="mx-auto mb-6 text-rose-500" />
            <h2 className="text-3xl font-bold mb-6">The Real Secret</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Here's the thing: you're going to make mistakes. You'll say 'gracias' at the wrong time, 
                show up early to a party, try to pay with a large bill at a small shop. It's fine. 
                Argentines are incredibly forgiving, especially if you show genuine interest in their culture.
              </p>
              <p className="mb-4">
                The mistakes are part of the experience. The awkward moments become the stories you laugh 
                about later. And once you start getting it right—when you naturally lean in for the cheek 
                kiss, when you pass the mate without thinking, when you sit down to dinner at 10 PM like 
                it's normal—you'll feel like you actually belong here.
              </p>
              <p>
                That's the magic of Buenos Aires. It challenges you, confuses you, and eventually adopts you. 
                Embrace the chaos. It's worth it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready for More Practical Guides?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Now that you understand the culture, learn about visas, housing, and the practical side of moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas/digital-nomad">
                  Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/housing">
                  Housing Guide
                  <ArrowRightIcon size="sm" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
