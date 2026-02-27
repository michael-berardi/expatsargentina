import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  HeartIcon,
  UsersIcon,
  MessageCircleIcon,
  ClockIcon,
  MapPinIcon,
  SmartphoneIcon,
  MusicIcon,
  WineIcon,
  UserIcon,
  AlertCircleIcon,
  LightbulbIcon,
  ArrowRightIcon,
  SparklesIcon,
  MoonIcon,
  CoffeeIcon,
  GiftIcon
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Dating & Social Life in Buenos Aires - A Guide for Expats",
  description: "Navigate dating, making friends, and nightlife in Buenos Aires. Real talk on dating apps, Argentine dating culture, meeting people, and surviving the boliche scene.",
  keywords: ["Buenos Aires dating", "Argentina dating culture", "expat friends Buenos Aires", "BA nightlife", "boliche", "language exchange BA"],
  alternates: { canonical: "https://expatsargentina.com/social-life" },
};

const datingApps = [
  {
    name: "Tinder",
    description: "The most popular app in Argentina. Huge user base across all demographics. Expect lots of matches but also lots of ghosting.",
    strategy: "Be upfront about what you're looking for. Many Argentines use it for both dating and hookups. Photos with friends (especially at asados) perform well.",
    warning: "The 'passport bro' crowd has made some locals skeptical of foreigners. Don't lead with being a digital nomad."
  },
  {
    name: "Bumble",
    description: "Growing popularity, especially among professionals and people in their late 20s-30s. Women message first.",
    strategy: "Better for serious dating than Tinder. The 'looking for relationship' crowd gravitates here. Good for expats seeking something more substantial.",
    warning: "Smaller user base than Tinder. You might run out of people in your area if you're too selective."
  },
  {
    name: "Hinge",
    description: "The 'designed to be deleted' marketing worked. Popular with educated, cosmopolitan porteños.",
    strategy: "Prompts matter here. Avoid generic answers. Being funny in Spanish (or attempting to) goes a long way.",
    warning: "Smaller pool but higher quality. Don't get discouraged by fewer matches—the conversations tend to be better."
  },
  {
    name: "Happn",
    description: "Shows you people you've crossed paths with. Very popular in dense neighborhoods like Palermo.",
    strategy: "Great for meeting people in your neighborhood. If you keep seeing the same person at your coffee shop, this might be your in.",
    warning: "Can feel a bit stalker-ish if you're not used to it. Also shows people who just drove by on the bus."
  }
];

const datingCulture = [
  {
    title: "The 'Coffee Date' Doesn't Exist",
    content: "Argentines don't do casual coffee first dates. A first date is dinner, drinks, or an activity—and it happens late. Expect to meet at 9 PM minimum, often 10 PM or later.",
    story: "I suggested coffee for a first date. She looked confused and said '¿Y después?' (And after?). We went to dinner at 10:30 PM instead. The date lasted until 2 AM. I was exhausted but also... that was way more fun than coffee.",
    tip: "Plan for a late night. Don't schedule early meetings the next day."
  },
  {
    title: "Meeting the Family Happens Fast",
    content: "Argentines are close with their families. Don't be shocked if you're invited to a family asado within weeks of dating. This is normal and actually a good sign.",
    story: "Three weeks into dating, she invited me to her parents' house for Sunday asado. I panicked—back home, meeting parents was a 'we're getting married' moment. Here, it just meant I was someone she wanted them to meet. Her mom asked when we were having kids. I nearly choked on my chorizo.",
    tip: "Bring wine or dessert. Compliment the mom's cooking. Brace for personal questions—nothing is off-limits."
  },
  {
    title: "The 'We're Not Exclusive' Talk",
    content: "In Argentina, you're exclusive by default once you're dating regularly. The 'what are we' conversation happens early, and it's usually assumed you're not seeing other people.",
    story: "I was casually seeing two people, thinking that was normal dating behavior. One found out and was genuinely hurt. 'But we never said we were exclusive,' I protested. 'We didn't need to,' she said. Lesson learned: exclusivity is the default, not the exception."
  },
  {
    title: "Language Barriers in Relationships",
    content: "Dating with limited Spanish is challenging but doable. Many educated porteños speak some English, but emotional conversations require Spanish fluency.",
    story: "I dated someone for three months with my terrible Spanish. We got by, but I couldn't express complex feelings or understand her jokes fully. When we finally had our first argument, I realized how much nuance I was missing. We broke up shortly after—not because of language, but because I couldn't communicate properly.",
    tip: "Start learning Spanish before you start dating seriously. It matters more than you think."
  },
  {
    title: "Long-Term vs Casual Culture",
    content: "While hookup culture exists, Argentines generally date with intention. Even casual dating often has a 'let's see where this goes' vibe rather than pure no-strings-attached.",
    story: "I tried to keep things casual with someone who seemed on the same page. She kept asking about my 'intentions' and 'what I wanted long-term.' I thought she was pushing for commitment too fast. Turns out, she just wanted to know we were on the same wavelength. Casual here still involves feelings and communication."
  }
];

const meetingPeople = [
  {
    title: "Language Exchange Meetups",
    content: "Mate Club, Mundo Lingo, and Spanglish are popular weekly events. You get a flag sticker for your languages and rotate conversations every 15 minutes.",
    story: "My first Mate Club event, I was terrified. But within an hour, I'd met three other expats and two locals who wanted to practice English. One of those locals became my best friend here. Another became... more than a friend for a while. These events work.",
    venues: [
      { name: "Mate Club", location: "Various bars, check their Instagram", note: "Tuesdays, very popular" },
      { name: "Mundo Lingo", location: "The Temple Bar, Palermo", note: "Wednesdays, huge crowd" },
      { name: "Spanglish", location: "Various locations", note: "More structured, less party vibe" }
    ]
  },
  {
    title: "Expat Facebook Groups",
    content: "Expats in Buenos Aires, Buenos Aires Digital Nomads, and niche groups (Women in BA, LGBTQ+ Expats) are active and welcoming.",
    story: "I posted in Expats in BA saying I was looking for climbing partners. Got 20 responses. Met my current friend group through that one post. Yes, Facebook is old, but expat groups here are genuinely useful.",
    tip: "Search for groups specific to your interests—yoga, hiking, book clubs, etc."
  },
  {
    title: "Sports Groups",
    content: "Futbol, rugby, running clubs, climbing gyms, and yoga studios are social hubs. Argentines bond through shared physical suffering.",
    story: "I joined a running group that meets Saturdays in Palermo parks. I hate running, but I kept going because the post-run coffee and facturas became my favorite ritual. Made three close friends who still mock me for my running form.",
    venues: [
      { name: "Palermo Runners", location: "Parque Tres de Febrero", note: "Saturdays 9 AM" },
      { name: "Urban Running", location: "Various", note: "Structured training, social after" },
      { name: "Club de Escalada", location: "Campo Base, Palermo", note: "Climbing gym with strong community" }
    ]
  },
  {
    title: "Coworking Spaces",
    content: "WeWork, La Maquinita, and smaller spaces host events, happy hours, and foster community. Even if you work from home, consider a hot desk membership.",
    story: "I worked from home for three months and was going insane with loneliness. Got a WeWork membership for the social aspect alone. Met other remote workers, started going to lunch with the same group every day, and suddenly had a social life again.",
    tip: "Ask about community events when touring spaces. Some are purely transactional; others are genuinely social."
  }
];

const nightlife = [
  {
    title: "The Timeline Reality",
    content: "Pre-gaming starts at 11 PM. Bars get busy at midnight. Clubs (boliches) don't fill up until 2 AM. The night ends at 6 AM or later.",
    story: "My first weekend, I went to a club at 11 PM. It was empty. I thought I'd picked a bad night. Left at 12:30, disappointed. Found out later that the party started at 2 AM. Now I nap before going out like a proper Argentine."
  },
  {
    title: "Bar Neighborhoods",
    content: "Palermo (Hollywood and Soho) has the highest concentration of bars. San Telmo is grungier, more alternative. Recoleta is upscale and older.",
    venues: [
      { name: "Palermo Hollywood", vibe: "Trendy, young, see-and-be-seen", bestFor: "First dates, groups" },
      { name: "Palermo Soho", vibe: "Hipster, craft cocktails, intimate", bestFor: "Date nights, conversations" },
      { name: "San Telmo", vibe: "Alternative, live music, artsy", bestFor: "Meeting interesting people" },
      { name: "Las Cañitas", vibe: "Preppy, rugby crowd, upscale", bestFor: "If you're into that scene" }
    ]
  },
  {
    title: "The Boliche Experience",
    content: "Argentine clubs are different. Table service (hacer lista) is common. Dress codes are real. The music is reggaeton, cumbia, and electronic.",
    story: "I showed up to a boliche in jeans and sneakers. The bouncer looked at me like I'd insulted his mother. Had to go home and change. Now I know: dress pants, nice shoes, button-down minimum. It's not Europe—people dress up here.",
    tip: "Get on the list (lista) through someone who knows someone. Cover charges are lower or waived if you're on a list."
  },
  {
    title: "Cover Charges and Drinks",
    content: "Expect to pay 5,000-15,000 pesos cover (varies wildly with exchange rates). Drinks are expensive inside. Pre-game heavily.",
    story: "I spent my entire weekly entertainment budget on one night out because I didn't pre-game and bought rounds at club prices. Now I drink at home until 1 AM, then nurse one drink at the club until 5 AM. Financial survival strategy."
  },
  {
    title: "Safety at Night",
    content: "Take Ubers after 2 AM, even for short distances. Don't walk alone with your phone out. Stick with groups.",
    story: "A friend got her phone snatched walking from the club to her apartment at 4 AM. It was three blocks. She was tipsy and not paying attention. The thieves work the club areas knowing people are drunk and distracted. Take the Uber."
  }
];

const socialCustoms = [
  {
    title: "Personal Space (Or Lack Thereof)",
    content: "Argentines stand close when talking. They touch your arm or shoulder. They lean in. This isn't flirting (usually)—it's just cultural proximity.",
    story: "I kept backing away from people during conversations, seeking my American personal bubble. They kept stepping closer. I thought I was being hit on by everyone. Turns out, we just have different space definitions. Now I embrace it—the warmth is genuine."
  },
  {
    title: "The Kiss Greeting",
    content: "One kiss on the right cheek for everyone—regardless of gender. Men shake hands only in very formal business settings.",
    story: "At my first Argentine party, I stuck out my hand to a woman. She looked confused, then laughed and kissed my cheek anyway. I spent the night overthinking every greeting. Now I default to the kiss. It's actually quite lovely once you get used to it.",
    tip: "When in doubt, follow their lead. If they lean in, you lean in."
  },
  {
    title: "Group Dynamics",
    content: "Argentines hang out in groups. Solo activities are less common. Friends groups are tight and can be hard to penetrate.",
    story: "I tried to make friends one-on-one and found it surprisingly difficult. People kept inviting me to group things instead. Eventually, I realized that being adopted into a friend group is the goal here. Individual friendships develop within the group context."
  },
  {
    title: "Invitation Etiquette",
    content: "If you're invited to someone's home, bring something. Wine, dessert, or flowers for the host. Never arrive empty-handed.",
    story: "I showed up to my first asado with just myself. The host was too polite to say anything, but I noticed everyone else brought wine or sides. Felt like a jerk. Now I always bring Malbec or a dessert from a good bakery."
  },
  {
    title: "Gift Giving",
    content: "Small gifts are common when visiting homes. For birthdays, dinners out are more common than gifts. Don't overthink it.",
    story: "I brought an expensive gift to a birthday dinner, thinking that was normal. The recipient was embarrassed and didn't open it. Later, a friend explained that making a fuss over gifts is awkward here. A nice bottle of wine or covering their dinner is preferred."
  }
];

const soloExpat = [
  {
    title: "Combating Loneliness",
    content: "The first month is the hardest. You don't know anyone, your Spanish sucks, and everything feels overwhelming. This is normal.",
    story: "Week three, I cried in a cafe because I couldn't figure out how to order what I wanted and felt so isolated. A kind barista helped me, and we ended up chatting for an hour. That small connection saved me. The loneliness passes, but you have to push through it."
  },
  {
    title: "Finding Your People",
    content: "It takes 3-6 months to build a real social circle. Be patient. Say yes to everything at first, even if it's awkward.",
    story: "I went to a board game night where I knew no one and barely spoke Spanish. It was awkward as hell. But I met one person there who invited me to another thing, where I met more people. Six months later, that awkward board game night was the origin of my entire friend group."
  },
  {
    title: "Therapy Culture",
    content: "Therapy is extremely common in Buenos Aires. Many porteños have been in therapy for years. There's no stigma—it's seen as self-improvement.",
    story: "On a second date, she casually mentioned her therapist's opinion about something. I was surprised by the openness. 'Don't you go to therapy?' she asked, genuinely confused. When I said no, she looked concerned for my mental health. Now I have a therapist here too. It's actually great.",
    tip: "Many therapists work on a sliding scale. Spanish fluency helps, but some speak English."
  },
  {
    title: "When to Visit Home",
    content: "Most successful expats go home every 3-4 months at first. It prevents the 'trapped' feeling and reminds you why you left.",
    story: "I tried to be a hero and stay for six months straight. By month five, I was miserable and questioning everything. Went home for a week, saw family, ate familiar food, and came back refreshed. Now I schedule visits quarterly. It's not failure—it's maintenance."
  }
];

const faqs = [
  {
    question: "How do I make friends as an expat in Buenos Aires?",
    answer: "Start with language exchange meetups like Mate Club (Tuesdays), Mundo Lingo (Wednesdays), and Spanglish. Join expat Facebook groups like 'Expats in Buenos Aires' and post about your interests. Get a coworking membership for daily social interaction. Join sports groups, fitness classes, or hobby-based meetups. Expect it to take 3-6 months to build a real social circle. Say yes to everything at first, even if it's awkward.",
  },
  {
    question: "What is Argentine dating culture like?",
    answer: "Argentine dating is more intense than casual Western dating. First dates are dinner or drinks at 9-10pm, never coffee. Meeting the family can happen within weeks and is a good sign, not a commitment signal. Exclusivity is assumed by default once you're dating regularly—you don't need 'the talk.' Argentines date with intention, even in casual relationships. Learning Spanish is important for emotional connection.",
  },
  {
    question: "What are the best meetup groups for expats in Buenos Aires?",
    answer: "Language exchanges are the top social events: Mate Club (various bars, Tuesdays), Mundo Lingo (The Temple Bar, Wednesdays), and Spanglish (various locations). Facebook groups like 'Expats in Buenos Aires' and 'Buenos Aires Digital Nomads' are very active. Sports groups like Palermo Runners (Saturdays, Parque Tres de Febrero) and climbing gyms like Campo Base have strong communities. Coworking spaces like La Maquinita and AreaTres host regular social events.",
  },
  {
    question: "Is Buenos Aires good for older expats or is it just for young people?",
    answer: "Buenos Aires welcomes all ages. The city has a rich cultural scene with theater, opera, tango, and museums that skews older. Neighborhoods like Recoleta and Belgrano have a more mature vibe. Many retirees choose Buenos Aires for its affordable healthcare, walkable lifestyle, and active social scene. That said, the late-night culture (dinner at 10pm, clubs at 2am) can be challenging if you're not a night owl.",
  },
  {
    question: "What is the nightlife like in Buenos Aires?",
    answer: "Buenos Aires nightlife runs extremely late. Pre-gaming starts at 11pm, bars fill up at midnight, clubs (boliches) don't open until 2am, and nights end at 6am or later. Palermo Hollywood is trendy and young, Palermo Soho has hipster cocktail bars, San Telmo is alternative with live music. Dress codes at boliches are real—no sneakers or jeans. Pre-game at home because club drink prices are steep.",
  },
  {
    question: "What activities and hobbies can I do in Buenos Aires?",
    answer: "Buenos Aires offers incredible variety: tango classes (from beginner to milonga), cooking classes, football leagues, running groups, CrossFit, yoga studios, rock climbing, sailing on the Rio de la Plata, language exchange events, wine tasting, art galleries, live music, theater, and polo lessons. The city has one of the highest ratios of cultural venues per capita in the world. Most activities are affordable compared to US or European prices.",
  },
];

export default function SocialLifePage() {
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
                "name": "Social Life",
                "item": "https://expatsargentina.com/social-life"
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
            <span className="text-foreground">Dating & Social Life</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <HeartIcon size="sm" className="mr-1" />
              Social Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dating & Social Life in Buenos Aires
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The real talk on dating apps, making friends, surviving the nightlife, 
              and not dying of loneliness. Learn from my romantic disasters and social victories.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline"><SmartphoneIcon size="sm" className="mr-1" />Dating Apps</Badge>
              <Badge variant="outline"><UsersIcon size="sm" className="mr-1" />Making Friends</Badge>
              <Badge variant="outline"><MoonIcon size="sm" className="mr-1" />Nightlife</Badge>
              <Badge variant="outline"><MessageCircleIcon size="sm" className="mr-1" />Social Customs</Badge>
              <Badge variant="outline"><UserIcon size="sm" className="mr-1" />Solo Expats</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Dating Apps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <SmartphoneIcon size="lg" className="text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Dating Apps That Work</h2>
                <p className="text-muted-foreground">The local app landscape and strategies</p>
              </div>
            </div>

            <div className="space-y-6">
              {datingApps.map((app, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{app.name}</h3>
                    <p className="text-muted-foreground mb-4">{app.description}</p>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-3">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Strategy:</strong> {app.strategy}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <AlertCircleIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{app.warning}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <LightbulbIcon size="sm" className="text-amber-500" />
                  App Strategy That Works
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Lead with Spanish</strong>—even if it's basic. Shows effort.</li>
                  <li>• <strong>Photos matter:</strong> Include one with friends (shows you're social), one doing an activity, no solo bathroom selfies.</li>
                  <li>• <strong>Don't lead with being a digital nomad</strong>—some locals are tired of transient foreigners.</li>
                  <li>• <strong>Be specific in your bio:</strong> "Looking for someone to explore BA's wine bars with" beats "Just seeing what's out there."</li>
                  <li>• <strong>Move to WhatsApp quickly</strong>—it's the universal messaging app here.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dating Culture Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <HeartIcon size="lg" className="text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Argentine Dating Culture</h2>
                <p className="text-muted-foreground">What to expect (and what not to)</p>
              </div>
            </div>

            <div className="space-y-6">
              {datingCulture.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg border-l-4 border-pink-400 mb-4">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">Personal story:</span> {item.story}
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

      {/* Making Friends Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <UsersIcon size="lg" className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Making Friends as an Expat</h2>
                <p className="text-muted-foreground">Why it's harder than you think (and how to do it anyway)</p>
              </div>
            </div>

            <Card className="mb-8 border-amber-200 dark:border-amber-900/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircleIcon size="md" className="text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">The Hard Truth</h3>
                    <p className="text-muted-foreground text-sm">
                      Argentines are warm and friendly, but they have established friend groups 
                      from childhood. Breaking into these circles takes time. Your best bet is 
                      meeting other expats first, then slowly integrating into local circles 
                      through them.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {meetingPeople.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">Personal story:</span> {item.story}
                      </p>
                    </div>
                    {item.venues && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold">Where to go:</p>
                        {item.venues.map((venue, vIndex) => (
                          <div key={vIndex} className="text-sm pl-4 border-l-2 border-muted">
                            <span className="font-medium">{venue.name}</span>
                            <span className="text-muted-foreground"> — {venue.location}</span>
                            <span className="text-xs text-muted-foreground block">{venue.note}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.tip && (
                      <div className="flex items-start gap-2 text-sm mt-4">
                        <LightbulbIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item.tip}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Argentine Friends vs Expat Friends</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-blue-600">Expat Friends</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Easier to make initially</li>
                      <li>• Share your experience of being foreign</li>
                      <li>• Often leave after 6-12 months</li>
                      <li>• May lack local knowledge</li>
                      <li>• Good for emotional support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-green-600">Argentine Friends</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Harder to make, but more permanent</li>
                      <li>• Show you the 'real' Buenos Aires</li>
                      <li>• Improve your Spanish rapidly</li>
                      <li>• Include you in family events</li>
                      <li>• Essential for true integration</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>The sweet spot:</strong> Build a base of expat friends for immediate support, 
                  then gradually develop Argentine friendships through shared activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nightlife Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <MoonIcon size="lg" className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Nightlife</h2>
                <p className="text-muted-foreground">How to survive the BA party scene</p>
              </div>
            </div>

            <div className="space-y-6">
              {nightlife.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    {item.story && (
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                        <p className="text-sm italic">
                          <span className="font-semibold not-italic">Personal story:</span> {item.story}
                        </p>
                      </div>
                    )}
                    {item.venues && (
                      <div className="space-y-2">
                        {item.venues.map((venue, vIndex) => (
                          <div key={vIndex} className="text-sm p-3 bg-muted/50 rounded-lg">
                            <div className="flex justify-between items-start">
                              <span className="font-medium">{venue.name}</span>
                              <Badge variant="outline" className="text-xs">{venue.vibe}</Badge>
                            </div>
                            <p className="text-muted-foreground mt-1">Best for: {venue.bestFor}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.tip && (
                      <div className="flex items-start gap-2 text-sm mt-4">
                        <LightbulbIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item.tip}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MusicIcon size="sm" className="text-purple-500" />
                  Specific Venue Recommendations
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <span className="font-medium">Verne Cocktail Club</span> — Palermo
                    <p className="text-muted-foreground">Speakeasy vibes, excellent cocktails, good for dates</p>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <span className="font-medium">Frank's Bar</span> — Palermo
                    <p className="text-muted-foreground">Password-entry speakeasy, very popular with expats</p>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <span className="font-medium">The Temple Bar</span> — Palermo
                    <p className="text-muted-foreground">Irish pub, expat hangout, language exchange spot</p>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <span className="font-medium">Crobar</span> — Costanera
                    <p className="text-muted-foreground">Huge electronic music venue, international DJs</p>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <span className="font-medium">Jet</span> — Various
                    <p className="text-muted-foreground">Popular boliche chain, reggaeton and commercial</p>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <span className="font-medium">Terrazas del Este</span> — Costanera
                    <p className="text-muted-foreground">Rooftop club with river views, summer only</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Customs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <MessageCircleIcon size="lg" className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Social Customs</h2>
                <p className="text-muted-foreground">The unwritten rules of Argentine social life</p>
              </div>
            </div>

            <div className="space-y-6">
              {socialCustoms.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border-l-4 border-amber-400 mb-4">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">Personal story:</span> {item.story}
                      </p>
                    </div>
                    {item.tip && (
                      <div className="flex items-start gap-2 text-sm">
                        <LightbulbIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item.tip}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solo Expats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <UserIcon size="lg" className="text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">For Solo Expats</h2>
                <p className="text-muted-foreground">Surviving and thriving on your own</p>
              </div>
            </div>

            <div className="space-y-6">
              {soloExpat.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.content}</p>
                    <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border-l-4 border-teal-400 mb-4">
                      <p className="text-sm italic">
                        <span className="font-semibold not-italic">Personal story:</span> {item.story}
                      </p>
                    </div>
                    {item.tip && (
                      <div className="flex items-start gap-2 text-sm">
                        <LightbulbIcon size="sm" className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item.tip}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <SparklesIcon size="sm" className="text-teal-500" />
                  The Solo Expat Survival Checklist
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Join at least two expat Facebook groups before you arrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Sign up for a language exchange event in your first week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Find a coworking space or regular cafe to work from</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Join one sports/fitness activity (even if you're not sporty)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Schedule your first home visit for the 3-month mark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Get a therapist's contact (even if you don't think you need one)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500">✓</span>
                    <span>Download WhatsApp and learn to use voice messages (everyone uses them)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Tips Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <SparklesIcon size="lg" className="text-primary" />
              <h2 className="text-3xl font-bold">Quick Reference: Social Survival</h2>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <HeartIcon size="sm" className="text-rose-500" />
                      Dating Do's
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Plan dates for 9 PM or later</li>
                      <li>• Expect to meet the family eventually</li>
                      <li>• Learn Spanish for emotional conversations</li>
                      <li>• Assume exclusivity unless discussed otherwise</li>
                      <li>• Bring wine or dessert to family events</li>
                      <li>• Move to WhatsApp quickly</li>
                      <li>• Be patient with language barriers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <UsersIcon size="sm" className="text-blue-500" />
                      Making Friends
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Say yes to everything at first</li>
                      <li>• Go to language exchanges weekly</li>
                      <li>• Join a sports group or gym class</li>
                      <li>• Work from coworking spaces</li>
                      <li>• Post in expat groups for your interests</li>
                      <li>• Be patient—it takes 3-6 months</li>
                      <li>• Build expat base, integrate locals slowly</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MoonIcon size="sm" className="text-purple-500" />
                      Nightlife
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pre-game at home (drinks are expensive)</li>
                      <li>• Don't arrive at clubs before 1 AM</li>
                      <li>• Dress up—no sneakers at boliches</li>
                      <li>• Get on 'the list' to avoid cover</li>
                      <li>• Take Ubers home after 2 AM</li>
                      <li>• Nap before going out</li>
                      <li>• Expect to get home at sunrise</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MessageCircleIcon size="sm" className="text-amber-500" />
                      Social Etiquette
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Kiss on the cheek (one, right side)</li>
                      <li>• Greet everyone individually at gatherings</li>
                      <li>• Don't say 'gracias' when passing mate</li>
                      <li>• Bring something when visiting homes</li>
                      <li>• Expect less personal space</li>
                      <li>• Group hangouts {'>'} one-on-one initially</li>
                      <li>• Compliment the asador at BBQs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HeartIcon size="xl" className="mx-auto mb-6 text-rose-500" />
            <h2 className="text-3xl font-bold mb-6">The Real Secret</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Here's the thing: your first few months will be lonely. You'll have awkward dates 
                where you can't express yourself. You'll stand at parties not understanding the jokes. 
                You'll go home at 2 AM while everyone else is just getting started. This is normal. 
                This is the process.
              </p>
              <p className="mb-4">
                But then, slowly, it clicks. You make that first friend. You have a date that goes 
                well. You stay out until 5 AM and actually enjoy it. You kiss someone on the cheek 
                without thinking. You get invited to an asado. You feel like you belong.
              </p>
              <p className="mb-4">
                Buenos Aires rewards patience. The friendships you make here run deep. The romances 
                are passionate. The nights are unforgettable. But you have to push through the awkward 
                beginning to get there.
              </p>
              <p>
                So download the apps. Go to the language exchange. Say yes to the late dinner. 
                Embrace the chaos. Your people are here—you just haven't met them yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Continue Exploring</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/culture" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Culture & Customs</p>
                    <p className="text-sm text-muted-foreground">The unwritten rules of Argentine life</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/food" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Food & Dining</p>
                    <p className="text-sm text-muted-foreground">Asados, empanadas, and where to eat</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/neighborhoods" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Neighborhoods</p>
                    <p className="text-sm text-muted-foreground">Find the barrio that fits your lifestyle</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/safety" className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="p-4">
                    <p className="font-semibold group-hover:text-primary transition-colors">Safety Guide</p>
                    <p className="text-sm text-muted-foreground">Street smarts and staying safe in BA</p>
                  </CardContent>
                </Card>
              </Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready for More Guides?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Now that you know how to socialize, learn about finding housing, navigating the culture, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/culture">
                  Culture Guide
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
