import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  BookOpen,
  GraduationCap,
  Users,
  Globe,
  AlertTriangle,
  MapPin,
  DollarSign,
  Clock,
  Heart,
  MessageCircle,
  Volume2,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Spanish in Buenos Aires 2026 | Complete Guide",
  description:
    "Rioplatense Spanish guide: 'll' and 'y' sound like 'sh', voseo verb forms (vos sos, vos tenés), Lunfardo slang, and language schools. Updated 2026.",
  keywords: [
    "learn Spanish Buenos Aires",
    "Rioplatense Spanish",
    "yeismo rehilado",
    "vos vs tu",
    "voseo conjugation",
    "lunfardo slang",
    "ll pronounced sh",
  ],
  alternates: { canonical: "https://expatsargentina.com/learn-spanish" },
};

const lunfardoTerms = [
  { term: "Bondi", meaning: "Bus/colectivo", example: "Tomo el bondi a Palermo" },
  { term: "Laburo", meaning: "Work/trabajo", example: "Tengo mucho laburo hoy" },
  { term: "Plata", meaning: "Money/dinero", example: "No tengo plata" },
  { term: "Che", meaning: "Hey/dude", example: "Che, ¿qué hacés?" },
  { term: "Mina", meaning: "Woman/chica", example: "Esa mina es re linda" },
  { term: "Tipo", meaning: "Guy/hombre", example: "Ese tipo es mi amigo" },
  { term: "Fiaca", meaning: "Laziness", example: "Tengo fiaca de salir" },
  { term: "Mufa", meaning: "Bad luck", example: "Qué mufa que tenés" },
  { term: "Chamuyar", meaning: "To flirt/chat up", example: "Está chamuyando a la mina" },
  { term: "Piola", meaning: "Cool/smart", example: "Ese tipo es re piola" },
  { term: "Groso", meaning: "Awesome/big shot", example: "Messi es un groso" },
  { term: "Quilombo", meaning: "Mess/problem", example: "Qué quilombo acá" },
  { term: "Birra", meaning: "Beer/cerveza", example: "Tomamos una birra?" },
  { term: "Chabón", meaning: "Dude/guy", example: "El chabón no vino" },
  { term: "Joda", meaning: "Party/fun", example: "Vamos a la joda?" },
  { term: "Bancar", meaning: "To support/put up with", example: "No te banco más" },
  { term: "Copado", meaning: "Cool/nice", example: "Tu amigo es muy copado" },
  { term: "Onda", meaning: "Vibe/style", example: "Tiene buena onda" },
  { term: "Facha", meaning: "Good looking", example: "Tiene buena facha" },
  { term: "Laburante", meaning: "Hard worker", example: "Es un laburante" },
  { term: "Quilombero", meaning: "Troublemaker", example: "Es un quilombero" },
  { term: "Guita", meaning: "Money (slang)", example: "Cuánta guita tenés?" },
  { term: "Mufa", meaning: "Bad luck/jinx", example: "No me toques, soy mufa" },
  { term: "Chamuyero", meaning: "Smooth talker", example: "Es un chamuyero" },
  { term: "Bancar", meaning: "To wait/endure", example: "Bancá un toque" },
  { term: "Guita", meaning: "Money", example: "Necesito más guita" },
  { term: "Mufa", meaning: "Bad luck", example: "Sos un mufa" },
  { term: "Mufa", meaning: "Bad luck", example: "Me tocó el mufa" },
  { term: "Mufa", meaning: "Bad luck", example: "Tengo mufa hoy" },
  { term: "Mufa", meaning: "Bad luck", example: "Qué mufa" },
];

const survivalPhrases = [
  { phrase: "¿Me das una mano?", meaning: "Can you help me?" },
  { phrase: "¿Cuánto sale?", meaning: "How much is it?" },
  { phrase: "¿A qué hora cierra?", meaning: "What time do you close?" },
  { phrase: "¿Me podés pasar...?", meaning: "Can you pass me...?" },
  { phrase: "No entiendo", meaning: "I don't understand" },
  { phrase: "¿Podés repetir?", meaning: "Can you repeat?" },
  { phrase: "Más despacio, por favor", meaning: "Slower, please" },
  { phrase: "¿Dónde queda...?", meaning: "Where is...?" },
  { phrase: "¿Hay bondi para...?", meaning: "Is there a bus to...?" },
  { phrase: "¿Me tomás la SUBE?", meaning: "Do you take SUBE card?" },
  { phrase: "¿Tenés cambio?", meaning: "Do you have change?" },
  { phrase: "¿Me podés guardar el lugar?", meaning: "Can you save my spot?" },
  { phrase: "Estoy buscando departamento", meaning: "I'm looking for an apartment" },
  { phrase: "¿Incluye expensas?", meaning: "Does it include building fees?" },
  { phrase: "¿Cuánto es el depósito?", meaning: "How much is the deposit?" },
];

const schools = [
  {
    name: "Vamos Academy",
    location: "Palermo",
    price: "$15-25 USD/hour (group), $30-45 USD/hour (private)",
    pros: ["Flexible scheduling", "Good for beginners", "Social activities"],
    cons: ["Can feel touristy", "Variable teacher quality"],
    bestFor: "Short-term visitors, beginners",
    honestReview:
      "Solid choice for getting your feet wet. The social events are genuinely useful for meeting people. Some teachers are excellent, others are just going through the motions. Ask for recommendations.",
  },
  {
    name: "Expanish",
    location: "Recoleta",
    price: "$20-35 USD/hour (group), $40-60 USD/hour (private)",
    pros: ["Professional atmosphere", "Good facilities", "Structured curriculum"],
    cons: ["More expensive", "Corporate feel", "Less flexible"],
    bestFor: "Serious learners, professionals",
    honestReview:
      "The most 'professional' option. Good if you want structure and don't mind paying for it. Can feel a bit sterile compared to local experiences. Best for people who need to learn Spanish for work.",
  },
  {
    name: "Íbero",
    location: "Multiple locations",
    price: "$12-20 USD/hour (group), $25-35 USD/hour (private)",
    pros: ["Affordable", "Local feel", "Good value"],
    cons: ["Older facilities", "Less organized", "Mixed levels in groups"],
    bestFor: "Budget-conscious learners, long-term residents",
    honestReview:
      "The budget option that doesn't feel cheap. You'll get a more authentic Argentine experience here. Facilities aren't fancy, but the teaching is solid. Great for people staying 3+ months.",
  },
];

const meetups = [
  {
    name: "Mate Club",
    location: "Various bars in Palermo",
    schedule: "Tuesdays and Thursdays, 7 PM",
    description:
      "The most popular language exchange. Can get crowded and tourist-heavy, but it's a good starting point. Arrive early to get a seat.",
    tip: "Don't just talk to other foreigners. Force yourself to find Argentines.",
  },
  {
    name: "Mundo Lingo",
    location: "Changes weekly",
    schedule: "Wednesdays, 8 PM",
    description:
      "More structured than Mate Club. They use flag stickers to indicate languages. Better for serious practice.",
    tip: "The sticker system actually works. Wear your flags proudly.",
  },
  {
    name: "Conversation Club BA",
    location: "San Telmo cafes",
    schedule: "Sundays, 5 PM",
    description:
      "Smaller, more intimate setting. Better for actual conversation practice. Less of a party vibe.",
    tip: "Perfect if you're shy about speaking. The smaller groups are less intimidating.",
  },
];

const youtubeChannels = [
  { name: "Argentine Spanish with Juan", focus: "Argentine-specific lessons", level: "Beginner-Intermediate" },
  { name: "Butterfly Spanish", focus: "General Spanish with Argentine sections", level: "All levels" },
  { name: "Spanishland School", focus: "Grammar explanations", level: "Intermediate-Advanced" },
  { name: "Linguriosa", focus: "Argentine culture and language", level: "Intermediate", note: "In Spanish" },
];

const tvShows = [
  { name: "El Marginal", genre: "Crime drama", difficulty: "Hard", whyWatch: "Authentic prison slang, intense drama" },
  { name: "Okupas", genre: "Drama", difficulty: "Medium", whyWatch: "Classic Argentine series, youth culture" },
  { name: "La Casa de Papel" , genre: "Heist", difficulty: "Medium", note: "Not Argentine but popular here", whyWatch: "Good for general Spanish" },
  { name: "Argentina, Tierra de Amor y Venganza", genre: "Telenovela", difficulty: "Easy", whyWatch: "Over-the-top, easy to follow" },
  { name: "El Reino", genre: "Political thriller", difficulty: "Hard", whyWatch: "Modern Argentine politics and speech" },
];

const falseFriends = [
  { spanish: "Actual", means: "Current/present", not: "Actual (real)" },
  { spanish: "Asistir", means: "To attend", not: "To assist (ayudar)" },
  { spanish: "Carpeta", means: "Folder/file", not: "Carpet (alfombra)" },
  { spanish: "Constipado", means: "Congested (nose)", not: "Constipated (estreñido)" },
  { spanish: "Embarazada", means: "Pregnant", not: "Embarrassed (avergonzada)" },
  { spanish: "Éxito", means: "Success", not: "Exit (salida)" },
  { spanish: "Fábrica", means: "Factory", not: "Fabric (tela)" },
  { spanish: "Lectura", means: "Reading", not: "Lecture (conferencia)" },
  { spanish: "Molestar", means: "To bother", not: "To molest (abusar)" },
  { spanish: "Nudo", means: "Knot", not: "Nude (desnudo)" },
  { spanish: "Pretender", means: "To try/attempt", not: "To pretend (fingir)" },
  { spanish: "Realizar", means: "To do/carry out", not: "To realize (darse cuenta)" },
  { spanish: "Recordar", means: "To remember", not: "To record (grabar)" },
  { spanish: "Sensible", means: "Sensitive", not: "Sensible (sensato)" },
  { spanish: "Suceso", means: "Event/incident", not: "Success (éxito)" },
];

export default function LearnSpanishPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          <BookOpen className="w-3 h-3 mr-1" />
          Language Guide
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learning Spanish in Buenos Aires
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A practical, no-BS guide to learning Argentine Spanish. From language schools 
          to survival phrases, here's everything you need to know.
        </p>
      </div>

      {/* Reality Check */}
      <Alert className="mb-8 border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800 dark:text-amber-200">The Hard Truth</AlertTitle>
        <AlertDescription className="text-amber-700 dark:text-amber-300">
          Spanish is hard. Argentine Spanish is harder. The accent is thick, the slang is endless, 
          and porteños speak fast. You'll feel stupid for months. But then, suddenly, it clicks. 
          Six months of real effort gets you conversational. A year gets you fluent. It's worth every 
          frustrating moment.
        </AlertDescription>
      </Alert>

      {/* Section 1: Argentine Spanish is Different */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Volume2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Argentine Spanish is Different</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">Vos</span>
                vs
                <span className="text-2xl text-muted-foreground">Tú</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Forget everything you learned about "tú." In Argentina, everyone uses "vos" 
                for informal situations. The conjugations are different, and yes, you need to learn them.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p className="text-sm text-muted-foreground">Standard Spanish → Argentine Spanish</p>
                <p><strong>Tú eres</strong> → <strong>Vos sos</strong> (You are)</p>
                <p><strong>Tú tienes</strong> → <strong>Vos tenés</strong> (You have)</p>
                <p><strong>Tú hablas</strong> → <strong>Vos hablás</strong> (You speak)</p>
                <p><strong>Tú vienes</strong> → <strong>Vos venís</strong> (You come)</p>
              </div>
              <p className="text-sm text-muted-foreground">
                The stress moves to the last syllable. It's actually more regular than standard Spanish, 
                but it feels wrong at first.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The "Sh" Sound</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The most distinctive feature of Argentine Spanish: "ll" and "y" are pronounced 
                like "sh" in "sheep." This is called "yeísmo rehilado."
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>Calle</strong> (street) → <em>CA-sheh</em></p>
                <p><strong>Lluvia</strong> (rain) → <em>SHU-via</em></p>
                <p><strong>Yo</strong> (I) → <em>SHO</em></p>
                <p><strong>Playa</strong> (beach) → <em>PLA-sha</em></p>
              </div>
              <p className="text-sm text-muted-foreground">
                In other Spanish-speaking countries, these sound like "y" in "yes." 
                In Argentina, it's all "sh." You'll get weird looks if you don't do it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Porteño Accent Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Porteños (Buenos Aires locals) speak fast, drop syllables, and have their own 
                rhythm. Here's what makes it hard:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Speed:</strong> They talk fast. Really fast.</li>
                <li>• <strong>Italian influence:</strong> The intonation sounds almost Italian</li>
                <li>• <strong>Syllable dropping:</strong> "Para" becomes "pa," "para el" becomes "pal"</li>
                <li>• <strong>"Que" becomes "ke":</strong> But that's standard Spanish</li>
                <li>• <strong>S at the end of words:</strong> Often barely pronounced or dropped</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Don't expect to understand group conversations for at least 3-6 months. 
                One-on-one is much easier.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rioplatense Pronunciation Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Rioplatense Spanish (spoken in Buenos Aires and Montevideo) has unique pronunciation 
                that confuses even fluent Spanish speakers from other countries.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <div className="flex justify-between">
                  <span><strong>Aquí</strong> (here)</span>
                  <span className="text-muted-foreground">→ "a-SHEE" (not "a-KEE")</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Llama</strong> (flame/call)</span>
                  <span className="text-muted-foreground">→ "SHA-ma" (not "YA-ma")</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Lluvia</strong> (rain)</span>
                  <span className="text-muted-foreground">→ "SHU-via" (not "YU-via")</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Yo</strong> (I)</span>
                  <span className="text-muted-foreground">→ "SHO" (not "YO")</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Playa</strong> (beach)</span>
                  <span className="text-muted-foreground">→ "PLA-sha" (not "PLA-ya")</span>
                </div>
              </div>
              <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200">
                <AlertTitle className="text-blue-800 dark:text-blue-200">The &quot;SH&quot; Rule</AlertTitle>
                <AlertDescription className="text-sm text-blue-700 dark:text-blue-300">
                  In Argentina, &quot;ll&quot; and &quot;y&quot; are pronounced like &quot;sh&quot; in &quot;sheep.&quot; 
                  This is called &quot;yeísmo rehilado.&quot; Using the standard &quot;y&quot; sound marks you as a foreigner immediately.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Words That Are Different</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Argentines use different words for everyday things. Using standard Spanish 
                words marks you as a foreigner immediately.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <div className="flex justify-between">
                  <span><strong>Bondi</strong> = Bus</span>
                  <span className="text-muted-foreground">(not autobús)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Laburo</strong> = Work</span>
                  <span className="text-muted-foreground">(not trabajo)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Plata</strong> = Money</span>
                  <span className="text-muted-foreground">(not dinero)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Che</strong> = Hey/dude</span>
                  <span className="text-muted-foreground">(very Argentine)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Birra</strong> = Beer</span>
                  <span className="text-muted-foreground">(not cerveza)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Mina</strong> = Woman</span>
                  <span className="text-muted-foreground">(informal)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lunfardo Slang */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Lunfardo Slang Dictionary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Lunfardo originated in Buenos Aires' working-class neighborhoods and prisons. 
              You'll hear these words constantly. Don't use them until you understand the context.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {lunfardoTerms.slice(0, 24).map((item, index) => (
                <div key={index} className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">{item.term}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.meaning}</p>
                  <p className="text-xs italic mt-1">&quot;{item.example}&quot;</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Section 2: Language Schools */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Language Schools (Honest Reviews)</h2>
        </div>

        <div className="grid gap-6">
          {schools.map((school) => (
            <Card key={school.name}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>{school.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {school.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span>{school.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2 text-green-700 dark:text-green-400">Pros</p>
                    <ul className="text-sm space-y-1">
                      {school.pros.map((pro, i) => (
                        <li key={i}>✓ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-red-700 dark:text-red-400">Cons</p>
                    <ul className="text-sm space-y-1">
                      {school.cons.map((con, i) => (
                        <li key={i}>✗ {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium mb-1">Best for:</p>
                  <p className="text-sm text-muted-foreground">{school.bestFor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Honest Review:</p>
                  <p className="text-sm text-muted-foreground">{school.honestReview}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Private Tutors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Often the best value. You get personalized attention and can focus on 
                Argentine Spanish specifically.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Where to find them:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Superprof:</strong> Filter by Argentine Spanish specialists</li>
                  <li>• <strong>Preply:</strong> Online tutors, many Argentines available</li>
                  <li>• <strong>iTalki:</strong> Good for conversation practice</li>
                  <li>• <strong>Facebook groups:</strong> &quot;Expats in Buenos Aires&quot; often has tutor postings</li>
                  <li>• <strong>University bulletin boards:</strong> UBA students often tutor</li>
                </ul>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  <strong>Price range:</strong> $10-25 USD/hour for experienced tutors. 
                  University students charge less ($8-15 USD/hour).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>University Programs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                UBA (Universidad de Buenos Aires) and other universities offer Spanish 
                programs for foreigners. More academic, less hand-holding.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Options:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>UBA:</strong> Most prestigious, rigorous, affordable (~$200-400 USD/semester)</li>
                  <li>• <strong>Universidad de Belgrano:</strong> Good for international students</li>
                  <li>• <strong>Universidad de Palermo:</strong> Modern facilities, more expensive</li>
                </ul>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  <strong>Best for:</strong> Students who want academic credit or a 
                  structured, intensive program. Not great for casual learners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Section 3: Free/Cheap Ways */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Free & Cheap Ways to Learn</h2>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Language Exchange Meetups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {meetups.map((meetup) => (
                  <div key={meetup.name} className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{meetup.name}</h4>
                    <div className="text-sm space-y-1 text-muted-foreground">
                      <p><strong>Where:</strong> {meetup.location}</p>
                      <p><strong>When:</strong> {meetup.schedule}</p>
                    </div>
                    <p className="text-sm mt-2">{meetup.description}</p>
                    <p className="text-xs mt-2 italic text-primary">{meetup.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tandem Partners</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Find an Argentine who wants to learn English. You meet for coffee, 
                  speak 30 minutes in each language. It's free and you make friends.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Where to find them:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Tandem app:</strong> Specifically for language exchanges</li>
                    <li>• <strong>HelloTalk:</strong> Chat with locals before meeting</li>
                    <li>• <strong>Meetup.com:</strong> Search &quot;intercambio&quot;</li>
                    <li>• <strong>Language exchange events:</strong> Exchange contact info</li>
                  </ul>
                </div>
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle>Pro Tip</AlertTitle>
                  <AlertDescription className="text-sm">
                    Set a timer and stick to it. 30 minutes Spanish, 30 minutes English. 
                    Otherwise, you'll end up speaking English the whole time because it's easier.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Apps That Work (and Don't)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-green-700 dark:text-green-400 mb-2">Actually Useful</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Duolingo:</strong> Good for basics, gamified, free</li>
                    <li>• <strong>Anki:</strong> Flashcards with spaced repetition (essential)</li>
                    <li>• <strong>SpanishDict:</strong> Best dictionary, includes Argentine usage</li>
                    <li>• <strong>ConjuGato:</strong> Specifically for verb conjugations</li>
                    <li>• <strong>HelloTalk/Tandem:</strong> For finding conversation partners</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 dark:text-red-400 mb-2">Skip These</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Babbel:</strong> Expensive, not better than free options</li>
                    <li>• <strong>Rosetta Stone:</strong> Outdated method, overpriced</li>
                    <li>• <strong>Any app claiming fluency in 30 days:</strong> Lies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>YouTube Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {youtubeChannels.map((channel) => (
                    <div key={channel.name} className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{channel.name}</p>
                        <p className="text-sm text-muted-foreground">{channel.focus}</p>
                      </div>
                      <Badge variant="outline">{channel.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Netflix Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Netflix is your best friend for learning. Here&apos;s the progression:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Month 1-2:</strong> English audio, Spanish subtitles</p>
                  <p><strong>Month 3-4:</strong> Spanish audio, English subtitles</p>
                  <p><strong>Month 5-6:</strong> Spanish audio, Spanish subtitles</p>
                  <p><strong>Month 7+:</strong> Spanish audio, no subtitles</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Start with shows you already know. Rewatching Breaking Bad in Spanish 
                  is easier because you know the plot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Section 4: Immersion */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Learning Through Immersion</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>The &quot;No English&quot; Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Pick one day a week where you speak zero English. Not to your expat friends, 
                not at the cafe, nowhere. It&apos;s painful but effective.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">How to do it:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Tell your friends in advance</li>
                  <li>• Prepare phrases on your phone</li>
                  <li>• Accept that you'll sound stupid</li>
                  <li>• Use Google Translate when stuck</li>
                  <li>• Celebrate small wins</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Start with half-days if full days are too hard. The goal is discomfort. 
                That&apos;s where learning happens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Dating Locals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Let&apos;s be real: dating a local is the fastest way to learn. You&apos;ll be 
                motivated, you&apos;ll hear natural speech, and you&apos;ll learn all the slang.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium mb-2">The reality:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• First dates are awkward when you don&apos;t understand</li>
                  <li>• You&apos;ll learn romantic vocabulary fast</li>
                  <li>• Meeting their family = immersion bootcamp</li>
                  <li>• Breakups teach you emotional vocabulary</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Don&apos;t date someone just to learn Spanish. But if you&apos;re dating anyway, 
                prioritize locals over expats.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Working in Spanish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you can work in a Spanish-speaking environment, do it. Even part-time 
                at a local cafe or co-working space helps immensely.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Options:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Remote work:</strong> Switch your company to Spanish-speaking clients</li>
                  <li>• <strong>Local jobs:</strong> Hospitality, teaching English, startups</li>
                  <li>• <strong>Volunteering:</strong> NGOs always need help, great for practice</li>
                  <li>• <strong>Coworking:</strong> Work from a Spanish-speaking space</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional Spanish is different from casual Spanish. You&apos;ll learn 
                formal structures and business vocabulary.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Making Argentine Friends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                This is harder than it sounds. Porteños are friendly but have established 
                friend groups. You need to be persistent.
              </p>
              <div className="space-y-2">
                <p className="font-medium">How to break in:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Join a sports team (fútbol, paddle, running groups)</li>
                  <li>• Take classes (cooking, dance, art)</li>
                  <li>• Go to the same cafe/bar regularly</li>
                  <li>• Accept every invitation for the first 6 months</li>
                  <li>• Learn to love mate - it&apos;s a social ritual</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Argentines are warm once you&apos;re in. The hard part is getting in. 
                Don&apos;t give up if it takes time.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>TV Shows to Watch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tvShows.map((show) => (
                <div key={show.name} className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{show.name}</h4>
                    <Badge variant={show.difficulty === "Easy" ? "default" : show.difficulty === "Medium" ? "secondary" : "destructive"}>
                      {show.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{show.genre}</p>
                  <p className="text-sm">{show.whyWatch}</p>
                  {show.note && (
                    <p className="text-xs text-muted-foreground mt-2 italic">{show.note}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Section 5: Survival Spanish */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Survival Spanish for Expats</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential Phrases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Not tourist Spanish - real phrases you need for daily life in Buenos Aires.
              </p>
              <div className="space-y-2">
                {survivalPhrases.slice(0, 8).map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span className="font-medium">{item.phrase}</span>
                    <span className="text-sm text-muted-foreground">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Apartment Hunting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Vocabulary you&apos;ll need when looking for a place to live.
              </p>
              <div className="space-y-2">
                {survivalPhrases.slice(8, 15).map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span className="font-medium">{item.phrase}</span>
                    <span className="text-sm text-muted-foreground">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Dealing with Bureaucracy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                You&apos;ll spend hours in government offices. These phrases help:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <p><strong>&quot;¿Qué número estamos?&quot;</strong> - What number are we on?</p>
                <p><strong>&quot;¿Dónde hago la cola?&quot;</strong> - Where do I line up?</p>
                <p><strong>&quot;¿Me falta algún papel?&quot;</strong> - Am I missing any paperwork?</p>
                <p><strong>&quot;¿Cuánto tarda?&quot;</strong> - How long does it take?</p>
                <p><strong>&quot;¿Podés sellarme esto?&quot;</strong> - Can you stamp this?</p>
                <p><strong>&quot;¿Hay que sacar turno?&quot;</strong> - Do I need an appointment?</p>
              </div>
              <Alert>
                <AlertTitle>Reality Check</AlertTitle>
                <AlertDescription className="text-sm">
                  Argentine bureaucracy is legendary. Bring a book, be patient, and 
                  always bring copies of everything. Always.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Phrases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Hopefully you never need these, but memorize them just in case:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <p><strong>&quot;¡Ayuda!&quot;</strong> - Help!</p>
                <p><strong>&quot;Llámame una ambulancia&quot;</strong> - Call me an ambulance</p>
                <p><strong>&quot;Llámame la policía&quot;</strong> - Call the police</p>
                <p><strong>&quot;Me robaron&quot;</strong> - I was robbed</p>
                <p><strong>&quot;Necesito un médico&quot;</strong> - I need a doctor</p>
                <p><strong>&quot;¿Dónde está el hospital más cercano?&quot;</strong> - Where&apos;s the nearest hospital?</p>
                <p><strong>&quot;Soy alérgico/a a...&quot;</strong> - I&apos;m allergic to...</p>
                <p><strong>&quot;No puedo respirar&quot;</strong> - I can&apos;t breathe</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Section 6: Common Mistakes */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Common Mistakes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>False Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Words that look like English but mean something completely different:
              </p>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {falseFriends.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-0 text-sm">
                    <div>
                      <span className="font-medium">{item.spanish}</span>
                      <span className="text-muted-foreground"> = {item.means}</span>
                    </div>
                    <span className="text-red-500 text-xs">Not: {item.not}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Formal vs Informal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                When to use &quot;vos&quot; vs &quot;usted&quot; (formal you):
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Use &quot;vos&quot; (informal) with:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Friends and peers</li>
                    <li>• People your age or younger</li>
                    <li>• Casual settings (bars, cafes, parties)</li>
                    <li>• Anyone who uses &quot;vos&quot; with you first</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Use &quot;usted&quot; (formal) with:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Elderly people</li>
                    <li>• Government officials</li>
                    <li>• Doctors, lawyers, professionals</li>
                    <li>• First meeting in business context</li>
                  </ul>
                </div>
              </div>
              <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200">
                <AlertTitle className="text-blue-800 dark:text-blue-200">Argentine Exception</AlertTitle>
                <AlertDescription className="text-sm text-blue-700 dark:text-blue-300">
                  Argentines are more informal than other Spanish speakers. When in doubt, 
                  use &quot;vos.&quot; Being too formal can seem cold or distant.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pronunciation Pitfalls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Rolling your R&apos;s</p>
                  <p className="text-sm text-muted-foreground">
                    The double R (rr) and R at the start of words are rolled. 
                    Practice with &quot;perro&quot; (dog) vs &quot;pero&quot; (but). If you can&apos;t roll your R&apos;s, 
                    don&apos;t stress - you&apos;ll be understood.
                  </p>
                </div>
                <div>
                  <p className="font-medium">The J sound</p>
                  <p className="text-sm text-muted-foreground">
                    Spanish J is like a strong H. &quot;Jorge&quot; sounds like &quot;HOR-heh,&quot; not like English J.
                  </p>
                </div>
                <div>
                  <p className="font-medium">V vs B</p>
                  <p className="text-sm text-muted-foreground">
                    In Spanish, V and B sound almost the same - like a soft B. 
                    &quot;Vino&quot; and &quot;bino&quot; sound identical.
                  </p>
                </div>
                <div>
                  <p className="font-medium">H is always silent</p>
                  <p className="text-sm text-muted-foreground">
                    &quot;Hola&quot; is pronounced &quot;OH-la,&quot; not &quot;HO-la.&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Context Mistakes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="font-medium">&quot;Te amo&quot; vs &quot;Te quiero&quot;</p>
                  <p className="text-sm text-muted-foreground">
                    &quot;Te amo&quot; is serious - reserved for romantic love or family. 
                    &quot;Te quiero&quot; is for friends, casual relationships, and early dating. 
                    Don&apos;t scare people off with &quot;te amo&quot; too soon.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Personal space</p>
                  <p className="text-sm text-muted-foreground">
                    Argentines kiss on the cheek (one cheek) when greeting. 
                    Even men greet women this way. Don&apos;t go for the handshake - it&apos;s cold.
                  </p>
                </div>
                <div>
                  <p className="font-medium">&quot;No&quot; doesn&apos;t always mean no</p>
                  <p className="text-sm text-muted-foreground">
                    Argentines are indirect. &quot;Maybe&quot; often means no. &quot;We&apos;ll see&quot; means probably not. 
                    Learn to read between the lines.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Time is flexible</p>
                  <p className="text-sm text-muted-foreground">
                    If someone says &quot;I&apos;ll be there at 9,&quot; they mean 9:30 or 10. 
                    Don&apos;t take it personally. It&apos;s just how things work here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Realistic Timelines */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Realistic Timelines</h2>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1M</span>
                </div>
                <h4 className="font-semibold mb-2">Survival Mode</h4>
                <p className="text-sm text-muted-foreground">
                  Basic greetings, ordering food, asking for directions. 
                  You feel lost most of the time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3M</span>
                </div>
                <h4 className="font-semibold mb-2">Functional</h4>
                <p className="text-sm text-muted-foreground">
                  Simple conversations, handling daily tasks. Still struggle with 
                  fast speech and group conversations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">6M</span>
                </div>
                <h4 className="font-semibold mb-2">Conversational</h4>
                <p className="text-sm text-muted-foreground">
                  Can hold real conversations, understand most of what you hear. 
                  Still make mistakes but you&apos;re understood.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1Y</span>
                </div>
                <h4 className="font-semibold mb-2">Fluent</h4>
                <p className="text-sm text-muted-foreground">
                  Comfortable in almost any situation. You dream in Spanish. 
                  Locals forget you&apos;re a foreigner.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="mt-6">
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            These timelines assume <strong>daily practice</strong> - classes, conversation, 
            immersion. If you&apos;re only studying 1-2 hours a week, multiply these by 3-4x. 
            Consistency beats intensity.
          </AlertDescription>
        </Alert>
      </section>

      {/* Final Encouragement */}
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">It&apos;s Worth It</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Learning Spanish in Buenos Aires is frustrating, humbling, and occasionally embarrassing. 
          You&apos;ll have days where you want to give up. But when you have your first real conversation, 
          when you make a local friend, when you understand a joke - it&apos;s the best feeling in the world. 
          Keep going.
        </p>
        <p className="text-sm text-muted-foreground">
          ¡Vos podés! (You can do it!)
        </p>
      </section>
    </div>
  );
}
