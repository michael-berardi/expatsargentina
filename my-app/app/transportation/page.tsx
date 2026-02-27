import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bus,
  Train,
  Car,
  Bike,
  Plane,
  MapPin,
  CreditCard,
  AlertTriangle,
  Clock,
  Smartphone,
  Shield,
  Wallet,
  Navigation,
  Footprints,
  ExternalLink,
  Info,
  CheckCircle,
  XCircle,
  Moon,
  Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Getting Around Buenos Aires | Transportation Guide",
  description:
    "Complete transportation guide for Buenos Aires. SUBE card, subway, buses, taxis, Uber, biking, and airport transfers. Updated 2026 prices and practical tips.",
  alternates: { canonical: "https://expatsargentina.com/transportation" },
};

const appLinks = {
  baMiMovil: {
    ios: "https://apps.apple.com/ar/app/ba-mi-movil/id1519912364",
    android: "https://play.google.com/store/apps/details?id=ar.gob.buenosaires.mimovil",
  },
  ecobici: {
    ios: "https://apps.apple.com/ar/app/ba-ecobici-by-tembici/id1524864773",
    android: "https://play.google.com/store/apps/details?id=com.tembici.bikebrasilia",
  },
  moovit: {
    ios: "https://apps.apple.com/ar/app/moovit-transporte-p%C3%BAblico/id498477945",
    android: "https://play.google.com/store/apps/details?id=com.tranzmate",
  },
  cuandoLlega: {
    ios: "https://apps.apple.com/ar/app/cu%C3%A1ndo-llega/id1482776588",
    android: "https://play.google.com/store/apps/details?id=org.nssa_sube.android",
  },
  cabify: {
    ios: "https://apps.apple.com/ar/app/cabify/id476087442",
    android: "https://play.google.com/store/apps/details?id=com.cabify.rider",
  },
  uber: {
    ios: "https://apps.apple.com/ar/app/uber/id368677368",
    android: "https://play.google.com/store/apps/details?id=com.ubercab",
  },
  didi: {
    ios: "https://apps.apple.com/ar/app/didi-rider/id1466425287",
    android: "https://play.google.com/store/apps/details?id=com.didiglobal.passenger",
  },
};

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-yellow-500 text-blue-900 hover:bg-yellow-400 font-semibold">
            Updated 2026
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Getting Around Buenos Aires
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your complete guide to navigating Argentina&apos;s capital like a local.
            From the essential SUBE card to airport transfers—everything you need to
            know.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Quick Reference Card */}
        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-yellow-600" />
              Quick Reference: Current Prices (2026)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase">
                  SUBE Fares
                </h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Subway (trips 1-20)</span>
                    <span className="font-semibold">$1,157 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Subway (trips 21-30)</span>
                    <span className="font-semibold">$926 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bus (registered SUBE)</span>
                    <span className="font-semibold">$569 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bus (unregistered)</span>
                    <span className="font-semibold">$1,323 ARS</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase">
                  Taxi Estimates
                </h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Base fare</span>
                    <span className="font-semibold">$2,304 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per km</span>
                    <span className="font-semibold">$1,152 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Short trip (2-3km)</span>
                    <span className="font-semibold">~$5,500 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cross-city (8-10km)</span>
                    <span className="font-semibold">~$11,000 ARS</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase">
                  Airport to City
                </h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Taxi/Remis</span>
                    <span className="font-semibold">$40-50 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Manuel Tienda León</span>
                    <span className="font-semibold">~$15-20 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Public Bus 8</span>
                    <span className="font-semibold">~$600 ARS</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Uber/Cabify</span>
                    <span className="font-semibold">$25-35 USD</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 1. SUBE Card */}
        <section id="sube">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">The SUBE Card</h2>
              <p className="text-muted-foreground">Your golden ticket to BA transport</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How to Get One</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The SUBE card is essential. You cannot pay cash on buses or subway.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Subway stations:</strong> Any ticket counter. Cost: ~$880 ARS
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Kioscos:</strong> Look for the SUBE sticker in convenience stores
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Airports:</strong> Available at EZE and AEP tourist desks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Centros de SUBE:</strong> Dedicated offices (Google &quot;Centro SUBE
                      near me&quot;)
                    </span>
                  </li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                  <strong>What you need:</strong> Just your passport. No DNI required for tourists.
                  Fill out a short form with your name and passport number.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How to Charge It</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Kioscos:</strong> Most convenience stores with SUBE sticker. Tell
                      them &quot;carga SUBE&quot; and amount. Cash only.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Subway stations:</strong> Self-service machines (accept cards)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Online:</strong> Through BA Mi Movil app (Argentine card needed)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Supermarkets:</strong> Carrefour, Coto, Día often have SUBE loading
                    </span>
                  </li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                  <strong>Pro tip:</strong> Always keep at least $3,000 ARS loaded. Running out
                  mid-journey means finding a kiosco before you can continue.
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                BA Mi Movil App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The official Buenos Aires transit app. Essential for managing your SUBE card.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Check your balance in real-time</li>
                    <li>• View transaction history</li>
                    <li>• Load credit (Argentine cards only)</li>
                    <li>• Register your SUBE for discounts</li>
                    <li>• Find nearby charging points</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a
                      href={appLinks.baMiMovil.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Download for iOS
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a
                      href={appLinks.baMiMovil.android}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Download for Android
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5" />
              Important: Register Your SUBE
            </h4>
            <p className="text-sm text-red-700">
              Unregistered SUBE cards pay <strong>2x the fare</strong>. Registration is free and
              instant through the BA Mi Movil app. You&apos;ll need a local phone number for SMS
              verification, or ask your Airbnb host to help.
            </p>
          </div>
        </section>

        {/* 2. Subway */}
        <section id="subte">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-lg">
              <Train className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Subway (Subte)</h2>
              <p className="text-muted-foreground">Fast but crowded</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Line Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { line: "A", color: "bg-blue-500", route: "Plaza de Mayo ↔ San Pedrito", notes: "Historic line, oldest in Latin America" },
                  { line: "B", color: "bg-red-500", route: "Leandro N. Alem ↔ Juan Manuel de Rosas", notes: "Connects Retiro to Villa Urquiza" },
                  { line: "C", color: "bg-blue-700", route: "Retiro ↔ Constitución", notes: "Main north-south connector" },
                  { line: "D", color: "bg-green-500", route: "Catedral ↔ Congreso de Tucumán", notes: "Palermo to downtown, very busy" },
                  { line: "E", color: "bg-purple-500", route: "Retiro ↔ Plaza de los Virreyes", notes: "West side, connects to Flores" },
                  { line: "H", color: "bg-yellow-500", route: "Facultad de Derecho ↔ Hospitales", notes: "Newest line, east-west connector" },
                ].map((l) => (
                  <div key={l.line} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className={`w-8 h-8 ${l.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {l.line}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{l.route}</p>
                      <p className="text-xs text-muted-foreground">{l.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Rush Hour Reality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Sun className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">Morning:</span> 7:30 - 9:30 AM
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Moon className="h-4 w-4 text-indigo-500" />
                  <span className="font-medium">Evening:</span> 6:00 - 8:30 PM
                </div>
                <p className="text-sm text-muted-foreground">
                  During rush hour, expect to wait for 2-3 trains before you can board. People
                  pack in tightly—keep bags in front of you and hold on tight.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm">
                  <strong>Personal experience:</strong> I once got on a Line B train at 8 AM and
                  couldn&apos;t reach my pocket. Avoid if you can—walk, bike, or take a taxi
                  during these hours.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Safety & Late Night
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Generally safe during the day with normal precautions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Watch your pockets on crowded platforms (especially Line A)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>Late night service: Limited after 10 PM, ends around 11 PM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span>Some stations become sketchy after dark—use taxis instead</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Last trains vary by line. Check the Metrovías app or station signs for exact
                  times.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. Buses */}
        <section id="buses">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Bus className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Buses (Colectivos)</h2>
              <p className="text-muted-foreground">The real way locals get around</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reading Bus Stops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Buenos Aires has 150+ bus lines. Each stop has a sign showing all lines that
                  stop there.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>The sign shows:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Line number (e.g., 152, 59, 12)</li>
                    <li>• Final destination (&quot;Hasta&quot;)</li>
                    <li>• Intermediate streets the bus passes</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
                  <strong>Pro tip:</strong> Buses stop on demand. Stand at the stop and make eye
                  contact with the driver, or raise your hand clearly. They won&apos;t stop if
                  you&apos;re just standing there.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Essential Apps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Cuándo Llega</h4>
                    <p className="text-sm text-muted-foreground">
                      Official BA bus tracking. Real-time arrival predictions.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={appLinks.cuandoLlega.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          iOS
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={appLinks.cuandoLlega.android}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Android
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Moovit</h4>
                    <p className="text-sm text-muted-foreground">
                      Best for route planning. Shows subway + bus combinations.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button asChild variant="outline" size="sm">
                        <a href={appLinks.moovit.ios} target="_blank" rel="noopener noreferrer">
                          iOS
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={appLinks.moovit.android}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Android
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Bus Etiquette & Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Board at the front,</strong> exit at the back (when possible)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Tap your SUBE</strong> on the machine near the driver
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Give up your seat</strong> for elderly, pregnant women, or people
                      with disabilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Hold on tight—</strong> drivers accelerate and brake hard
                    </span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm">
                    <strong>Night buses:</strong> Less frequent after 10 PM. Some lines stop
                    running entirely. Check the app before heading out.
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                    <strong>Watch your stuff:</strong> Keep bags in front of you, especially when
                    standing. Phone snatching from bus windows happens—don&apos;t text near open
                    windows.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. Taxis */}
        <section id="taxis">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500 rounded-lg">
              <Car className="h-6 w-6 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Taxis</h2>
              <p className="text-muted-foreground">Black and yellow, everywhere</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Official Taxis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Buenos Aires taxis are black with yellow roofs. They&apos;re everywhere and
                  generally safe.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Hailing:</strong> Stand on the curb and raise your arm. If the
                      &quot;Libre&quot; sign is lit, they&apos;re available.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Payment:</strong> Cash (pesos) preferred. Some accept cards but
                      always confirm first.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Tipping:</strong> Round up to the nearest 100 pesos. Not mandatory
                      but appreciated.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estimated Fares by Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between py-1 border-b">
                    <span>Microcentro to Palermo</span>
                    <span className="font-semibold">$4,500 - $6,500</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span>Recoleta to San Telmo</span>
                    <span className="font-semibold">$3,500 - $5,000</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span>Retiro to Puerto Madero</span>
                    <span className="font-semibold">$2,500 - $3,500</span>
                  </li>
                  <li className="flex justify-between py-1 border-b">
                    <span>Palermo to Belgrano</span>
                    <span className="font-semibold">$3,000 - $4,500</span>
                  </li>
                  <li className="flex justify-between py-1 text-muted-foreground text-xs">
                    <span>Night surcharge (10 PM - 6 AM): +20%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Radio Taxis (Call Ahead)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For scheduled pickups or when you want a guaranteed ride. Slightly more expensive
                but reliable.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 border rounded-lg">
                  <p className="font-semibold">Radio Taxi Premium</p>
                  <p className="text-muted-foreground">+54 11 5238-0000</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-semibold">Radio Taxi Ciudad</p>
                  <p className="text-muted-foreground">+54 11 4923-0000</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-semibold">Radio Taxi Argentina</p>
                  <p className="text-muted-foreground">+54 11 4856-0000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. Uber/Cabify */}
        <section id="rideshare">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Smartphone className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Uber, Cabify & Beat</h2>
              <p className="text-muted-foreground">The legal gray area</p>
            </div>
          </div>

          <Card className="mb-6 border-l-4 border-l-amber-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                The Legal Situation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Ride-sharing exists in a gray zone in Argentina. Uber operates but faces
                restrictions. Here&apos;s what you need to know:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>
                    <strong>Uber:</strong> Works but drivers may ask you to sit in front (to look
                    like friends). Some use rental cars.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>
                    <strong>Cabify:</strong> More established, often preferred by locals. Better
                    for airport pickups.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>
                    <strong>DiDi:</strong> Available but less popular than Cabify.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Cabify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Most reliable for tourists. Professional drivers, upfront pricing.
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={appLinks.cabify.ios} target="_blank" rel="noopener noreferrer">
                      iOS
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={appLinks.cabify.android} target="_blank" rel="noopener noreferrer">
                      Android
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Uber</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Works fine in BA. May have fewer drivers than Cabify. Sit in front.
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={appLinks.uber.ios} target="_blank" rel="noopener noreferrer">
                      iOS
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={appLinks.uber.android} target="_blank" rel="noopener noreferrer">
                      Android
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">DiDi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Growing presence. Often cheaper than competitors. Good backup option.
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={appLinks.didi.ios} target="_blank" rel="noopener noreferrer">
                      iOS
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={appLinks.didi.android} target="_blank" rel="noopener noreferrer">
                      Android
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Using Ride-Shares Safely</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Airport pickups:</strong> Cabify is best. Meet at departures level
                      to avoid taxi conflicts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Verify the plate:</strong> Always check license plate matches the
                      app before getting in.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Share your trip:</strong> Use the app&apos;s share feature with
                      someone you trust.
                    </span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                    <strong>Price comparison:</strong> Cabify ≈ Uber &gt; Taxi (slightly). For
                    short trips, taxis are often cheaper. For long trips or airport rides, apps
                    are more predictable.
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
                    <strong>Driver etiquette:</strong> Greet your driver with &quot;Hola, ¿cómo
                    estás?&quot; Small talk is normal. Tipping not required but rounding up is
                    appreciated.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 6. Walking */}
        <section id="walking">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-lg">
              <Footprints className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Walking</h2>
              <p className="text-muted-foreground">The best way to discover BA</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Walkable Neighborhoods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong className="text-green-700">Recoleta:</strong> Wide sidewalks, tree-lined
                    streets, very walkable. Perfect for strolling.
                  </li>
                  <li>
                    <strong className="text-green-700">Palermo Soho/Hollywood:</strong> Compact,
                    full of shops and cafes. Ideal for walking.
                  </li>
                  <li>
                    <strong className="text-green-700">San Telmo:</strong> Cobblestone streets,
                    historic charm. Watch your step on the stones.
                  </li>
                  <li>
                    <strong className="text-green-700">Puerto Madero:</strong> Modern, wide
                    promenades. Great for evening walks.
                  </li>
                  <li>
                    <strong className="text-amber-700">Microcentro:</strong> Very walkable but
                    crowded during business hours.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sidewalk Conditions & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                  <strong>Watch your step!</strong> BA sidewalks are notorious for uneven tiles,
                  missing chunks, and dog poop. Look down while walking.
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Jaywalking:</strong> Very common. Locals cross whenever they can.
                      But be careful—drivers don&apos;t always stop.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Walking at night:</strong> Stick to main streets. Avoid poorly lit
                      areas. Puerto Madero and Recoleta are safest at night.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Phone safety:</strong> Don&apos;t walk and text. Phone snatching is
                      the most common crime.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 7. Biking */}
        <section id="biking">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Bike className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Biking</h2>
              <p className="text-muted-foreground">Ecobici and bike lanes</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bike className="h-5 w-5" />
                Ecobici (Free Bike Share)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Buenos Aires has a free bike share system with stations throughout the city.
                    Great for short trips.
                  </p>
                  <h4 className="font-medium text-sm">How to Register:</h4>
                  <ol className="space-y-1 text-sm ml-4 list-decimal">
                    <li>Download the BA Ecobici app</li>
                    <li>Create an account (passport number works)</li>
                    <li>Add a credit card (only charged for damages/loss)</li>
                    <li>Find a station and unlock a bike</li>
                    <li>First hour is free, then small fees apply</li>
                  </ol>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={appLinks.ecobici.ios} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        iOS App
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a
                        href={appLinks.ecobici.android}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Android App
                      </a>
                    </Button>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm">
                    <strong>Availability:</strong> Stations are concentrated in Palermo,
                    Recoleta, Puerto Madero, and Microcentro. Limited in outer neighborhoods.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bike Lanes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  BA has been expanding bike lanes (ciclovías). Main routes include:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Puerto Madero (excellent, wide lanes)</li>
                  <li>• Avenida Dorrego (Palermo to Belgrano)</li>
                  <li>• Avenida Córdoba (Microcentro to Palermo)</li>
                  <li>• Parque Tres de Febrero loop</li>
                  <li>• Costanera Norte (riverside path)</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
                  <strong>Reality check:</strong> Many bike lanes are shared with parked cars or
                  pedestrians. Stay alert and ride defensively.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bike Safety & Rentals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Wear a helmet:</strong> Ecobici bikes have adjustable helmets, but
                      bringing your own is more hygienic.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Lock up properly:</strong> If using your own bike, use a U-lock.
                      Bike theft is common.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>
                      <strong>Rental shops:</strong> Many in Palermo (around Plaza Serrano) rent
                      bikes by the hour or day (~$5,000-8,000 ARS/day).
                    </span>
                  </li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                  <strong>Avoid:</strong> Riding during rush hour (8-10 AM, 6-8 PM). Traffic is
                  aggressive and bike lanes get crowded.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 8. Trains */}
        <section id="trains">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <Train className="h-6 w-6 text-slate-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Trains</h2>
              <p className="text-muted-foreground">Trenes Argentinos & day trips</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Trenes Argentinos Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The suburban train network connects Buenos Aires to the provinces. Useful for day
                trips and reaching outer neighborhoods.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Main Lines from Retiro:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 border rounded">
                      <strong>Mitre</strong> — To Tigre (delta trips)
                      <p className="text-xs text-muted-foreground">
                        The tourist favorite. Trains every 10-20 min. Journey: ~50 min.
                      </p>
                    </li>
                    <li className="p-2 border rounded">
                      <strong>San Martín</strong> — To San Martín/Villa Ballester
                      <p className="text-xs text-muted-foreground">Western suburbs</p>
                    </li>
                    <li className="p-2 border rounded">
                      <strong>Bélgrano Norte</strong> — To Villa Rosa
                      <p className="text-xs text-muted-foreground">Northwest suburbs</p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">From Constitución:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 border rounded">
                      <strong>Roca</strong> — South suburbs, La Plata
                      <p className="text-xs text-muted-foreground">Connects to La Plata city</p>
                    </li>
                  </ul>
                  <h4 className="font-medium">From Once:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 border rounded">
                      <strong>Sarmiento</strong> — West to Moreno
                      <p className="text-xs text-muted-foreground">Western suburbs</p>
                    </li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                    <strong>Tigre day trip:</strong> Take the Mitre line to Tigre. Explore the
                    delta, Puerto de Frutos market, and riverside restaurants. SUBE card works on
                    trains.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 9. Long Distance */}
        <section id="longdistance">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Navigation className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Long Distance Travel</h2>
              <p className="text-muted-foreground">Buses, flights, and getting out of BA</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Long-Distance Buses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Argentina has an excellent long-distance bus network. Often more comfortable
                  than flying for medium distances.
                </p>
                <h4 className="font-medium text-sm">Top Bus Companies:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Chevallier</strong> — Premium service, reliable
                  </li>
                  <li>
                    <strong>El Rápido Argentino</strong> — Good value
                  </li>
                  <li>
                    <strong>Andesmar</strong> — Routes throughout Argentina
                  </li>
                  <li>
                    <strong>Vía Bariloche</strong> — Patagonia specialist
                  </li>
                  <li>
                    <strong>Flecha Bus</strong> — Comfortable cama seats
                  </li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
                  <strong>Retiro Bus Station:</strong> Massive terminal with three levels. Arrive
                  30 min early. Book tickets online at plataforma10.com or at the station.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Domestic Flights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">Aeroparque (AEP)</h4>
                    <p className="text-sm text-muted-foreground">
                      Downtown airport in Palermo. For flights to major cities (Córdoba,
                      Mendoza, Bariloche, Iguazú). 15 min to city center.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Ezeiza (EZE)</h4>
                    <p className="text-sm text-muted-foreground">
                      International airport. Some domestic flights. 45-60 min to city center.
                    </p>
                  </div>
                </div>
                <h4 className="font-medium text-sm">Main Airlines:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Aerolíneas Argentinas</strong> — Most routes, reliable
                  </li>
                  <li>
                    <strong>Flybondi</strong> — Budget airline, good prices
                  </li>
                  <li>
                    <strong>JetSmart</strong> — Low-cost, growing network
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 10. Airport Transportation */}
        <section id="airport">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-sky-100 rounded-lg">
              <Plane className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Airport Transportation</h2>
              <p className="text-muted-foreground">EZE and AEP to the city</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Ezeiza (EZE) to City Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Taxi / Remis</h4>
                      <Badge>Recommended</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fixed price to your destination. No surprises.
                    </p>
                    <p className="text-sm font-semibold mt-2">$40-50 USD (fixed)</p>
                    <p className="text-xs text-muted-foreground">Time: 45-60 min</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Manuel Tienda León</h4>
                      <Badge variant="secondary">Good Value</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Shuttle bus to downtown terminal, then taxi to final destination.
                    </p>
                    <p className="text-sm font-semibold mt-2">~$15-20 USD</p>
                    <p className="text-xs text-muted-foreground">Time: 60-90 min</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Uber / Cabify</h4>
                      <Badge variant="outline">Variable</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Meet at departures level. Drivers may cancel if traffic is bad.
                    </p>
                    <p className="text-sm font-semibold mt-2">$25-35 USD</p>
                    <p className="text-xs text-muted-foreground">Time: 45-75 min</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Public Bus 8</h4>
                      <Badge variant="outline">Budget</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Cheapest option but slow. Goes to Plaza de Mayo.
                    </p>
                    <p className="text-sm font-semibold mt-2">~$600 ARS</p>
                    <p className="text-xs text-muted-foreground">Time: 90-120 min</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Aeroparque (AEP) to City Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Taxi</h4>
                  <p className="text-sm text-muted-foreground">Quick and easy</p>
                  <p className="text-sm font-semibold mt-2">$5,000-8,000 ARS</p>
                  <p className="text-xs text-muted-foreground">Time: 15-30 min</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Bus 33 or 45</h4>
                  <p className="text-sm text-muted-foreground">Cheap option</p>
                  <p className="text-sm font-semibold mt-2">$569 ARS (with SUBE)</p>
                  <p className="text-xs text-muted-foreground">Time: 30-45 min</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium">Uber/Cabify</h4>
                  <p className="text-sm text-muted-foreground">Reliable</p>
                  <p className="text-sm font-semibold mt-2">$3,500-5,500 ARS</p>
                  <p className="text-xs text-muted-foreground">Time: 15-25 min</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                My Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm">
                  <strong>First time in BA / Arriving late:</strong> Book a remis (private car)
                  through your accommodation or use Manuel Tienda León. The fixed price and
                  reliability are worth it after a long flight.
                </p>
                <p className="text-sm">
                  <strong>Daytime arrival, budget conscious:</strong> Cabify works well from both
                  airports. From AEP, the bus is totally viable if you don&apos;t have much
                  luggage.
                </p>
                <p className="text-sm">
                  <strong>Avoid:</strong> Regular taxis that approach you inside the airport
                  (they often overcharge). Stick to official taxi stands or pre-booked services.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Tips */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Final Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Keep your SUBE card separate from your wallet</li>
                  <li>• Don&apos;t flash expensive phones on public transport</li>
                  <li>• Sit near the driver on buses at night</li>
                  <li>• Use radio taxis or apps late at night</li>
                  <li>• Trust your instincts—if something feels off, get out</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Money-Saving Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Always register your SUBE for 50% discount</li>
                  <li>• Walk when possible—BA is great for exploring on foot</li>
                  <li>• Use Ecobici for short trips (first hour free)</li>
                  <li>• Avoid taxis during rush hour—subway is faster</li>
                  <li>• Book long-distance buses in advance for better prices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>Last updated: 2026</p>
          <p className="mt-1">
            Prices and information are subject to change. Always verify current rates with
            official sources.
          </p>
        </div>
      </div>
    </div>
  );
}
