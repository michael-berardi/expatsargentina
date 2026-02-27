import { Metadata } from "next";
import Link from "next/link";
import { 
  Utensils, 
  Clock, 
  Coffee, 
  Flame, 
  MapPin, 
  DollarSign,
  ShoppingCart,
  ChefHat,
  AlertCircle,
  Heart,
  Leaf,
  Smartphone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Food Guide Buenos Aires | Expats Argentina",
  description: "The ultimate food guide to Buenos Aires - from asado culture to the best parrillas, empanadas, and cafe spots. Everything an expat needs to eat like a local.",
  alternates: {
    canonical: "https://expatsargentina.com/food",
  },
};

const parrillas = [
  {
    name: "Don Julio",
    address: "Guatemala 4691, Palermo",
    price: "$$$",
    description: "The most famous parrilla in BA. Book weeks ahead or arrive at 7pm sharp. Worth the hype for the bife de chorizo and legendary service.",
    mustTry: "Bife de chorizo, provoleta, papas fritas",
    tip: "Make reservations online 30+ days ahead. Walk-ins possible at opening (7pm)."
  },
  {
    name: "El Boliche de Dario",
    address: "Sánchez de Bustamante 352, Palermo",
    price: "$$",
    description: "Locals' favorite. No-frills, consistently excellent meat. The entraña here is legendary among porteños.",
    mustTry: "Entraña, vacío, chorizo",
    tip: "Cash only. Arrive early (8pm) or late (11pm) to avoid waits."
  },
  {
    name: "La Cabrera",
    address: "Cabrera 5099, Palermo",
    price: "$$$",
    description: "Upscale parrilla with generous portions and 20+ free side dishes. Touristy but genuinely good.",
    mustTry: "Ojo de bife, the free side dish parade",
    tip: "Happy hour (7-8pm) offers 40% off. Share one portion between two people."
  },
  {
    name: "Desnivel",
    address: "Defensa 855, San Telmo",
    price: "$",
    description: "Classic San Telmo institution. Unpretentious, huge portions, authentic neighborhood vibe.",
    mustTry: "Bife de lomo, milanesa napolitana",
    tip: "Perfect post-San Telmo market lunch. Expect to wait on weekends."
  },
  {
    name: "El Pobre Luis",
    address: "Arribeños 2393, Belgrano",
    price: "$$",
    description: "Belgrano neighborhood gem. Famous for their house-made chorizo and futbol memorabilia.",
    mustTry: "Chorizo Pobre Luis, morcilla",
    tip: "Reservations recommended. Great for watching football matches."
  }
];

const cheapEats = [
  {
    name: "Las Cuartetas",
    address: "Corrientes 838, Centro",
    price: "$",
    description: "Iconic pizza joint since 1932. Fugazzeta (onion and cheese) is the move here.",
    mustTry: "Fugazzeta, pizza con jamón y morrones"
  },
  {
    name: "El Cuartito",
    address: "Talcahuano 937, Centro",
    price: "$",
    description: "Football-themed pizzeria serving thick-crust Argentine pizza since 1934.",
    mustTry: "Napolitana, muzzarella"
  },
  {
    name: "El Sanjuanino",
    address: "Posadas 1515, Recoleta",
    price: "$",
    description: "Best empanadas salteñas in the city. Tiny place, always packed.",
    mustTry: "Empanadas de carne picante, humita, queso y cebolla"
  },
  {
    name: "La Americana",
    address: "Gascon 530, Almagro",
    price: "$",
    description: "24-hour empanada factory. Order by the dozen, any style.",
    mustTry: "Jamón y queso, carne suave, caprese"
  }
];

const vegetarianSpots = [
  {
    name: "Sacrifice",
    address: "Costa Rica 4934, Palermo",
    price: "$$",
    description: "Upscale vegetarian with creative dishes that even meat-lovers enjoy. Beautiful space.",
    mustTry: "Cauliflower steak, homemade pastas"
  },
  {
    name: "Artemisia",
    address: "Costa Rica 5893, Palermo",
    price: "$$",
    description: "Cozy garden restaurant with seasonal vegetarian menu. Weekend brunch is excellent.",
    mustTry: "Tarta de verduras, brunch menu"
  },
  {
    name: "Vegan Fox",
    address: "Thames 1730, Palermo",
    price: "$",
    description: "100% vegan fast-casual. Burgers, bowls, and comfort food.",
    mustTry: "Fox burger, loaded fries"
  },
  {
    name: "Bio Solo Organico",
    address: "Humboldt 2192, Palermo",
    price: "$$",
    description: "Organic vegetarian restaurant with market attached. Great for healthy lunches.",
    mustTry: "Daily menu, fresh juices"
  }
];

const cafes = [
  {
    name: "Café Registrado",
    address: "Godoy Cruz 1729, Palermo",
    price: "$$",
    description: "Third-wave coffee in a work-friendly space. Good WiFi, plenty of outlets, serious baristas.",
    mustTry: "Flat white, avocado toast",
    workFriendly: true
  },
  {
    name: "Felix Felicis & Co",
    address: "Gurruchaga 1701, Palermo",
    price: "$$",
    description: "Australian-style cafe with excellent coffee and brunch. Laptop-friendly weekdays.",
    mustTry: "Cold brew, eggs Benedict",
    workFriendly: true
  },
  {
    name: "Café Tortoni",
    address: "Av. de Mayo 825, Centro",
    price: "$$",
    description: "Historic 1858 cafe, touristy but beautiful. Come for the atmosphere, not the coffee.",
    mustTry: "Chocolate con churros",
    workFriendly: false
  },
  {
    name: "LAB Tostadores de Café",
    address: "Humboldt 1542, Palermo",
    price: "$",
    description: "Serious coffee roasters. Minimal space, not great for working, but best beans in town.",
    mustTry: "Pour over, espresso",
    workFriendly: false
  }
];

const international = [
  {
    name: "Sarkis",
    address: "Thames 1101, Palermo",
    price: "$",
    description: "Armenian restaurant with legendary status. Massive portions, come hungry. No reservations.",
    cuisine: "Armenian/Middle Eastern",
    mustTry: "Kebbe, falafel, tabbouleh, hummus"
  },
  {
    name: "Gran Dabbang",
    address: "Scalabrini Ortiz 1543, Palermo",
    price: "$$",
    description: "Indian-Argentine fusion. Creative, flavorful, always packed. Book ahead.",
    cuisine: "Indian Fusion",
    mustTry: "Curry del día, naan, kofta"
  },
  {
    name: "Sushi Pop",
    address: "Various locations",
    price: "$$",
    description: "Reliable sushi chain with fresh fish and creative rolls. Multiple locations.",
    cuisine: "Japanese",
    mustTry: "Sashimi, specialty rolls"
  },
  {
    name: "Thai Street",
    address: "Gorriti 5870, Palermo",
    price: "$$",
    description: "Authentic Thai in a casual setting. Spicy, fragrant, properly Thai-level heat.",
    cuisine: "Thai",
    mustTry: "Pad thai, green curry, tom yum"
  }
];

const ferias = [
  {
    name: "Feria de Mataderos",
    location: "Mataderos (Sundays)",
    description: "The most authentic feria. Live folklore music, traditional foods, crafts. A must-visit.",
    bestFor: "Empanadas, locro, crafts, atmosphere"
  },
  {
    name: "Feria de San Telmo",
    location: "Defensa Street (Sundays)",
    description: "Touristy but fun. Antiques, street performers, food stalls.",
    bestFor: "Antiques, souvenirs, street food"
  },
  {
    name: "Mercado de Belgrano",
    location: "Juramento 2527, Belgrano",
    description: "Covered market with excellent butchers, produce, and small restaurants.",
    bestFor: "Fresh meat, vegetables, daily shopping"
  },
  {
    name: "Mercado de San Telmo",
    location: "Carlos Calvo 418, San Telmo",
    description: "Beautiful historic market. Mix of tourist shops and serious food vendors.",
    bestFor: "Antiques, specialty foods, atmosphere"
  }
];

export default function FoodGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/guides/food-bg.webp')" }} />
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Utensils className="w-8 h-8" />
            </div>
            <span className="text-orange-100 font-medium">Expats Argentina Guide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Complete Food Guide to<br />
            <span className="text-orange-200">Buenos Aires</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            From sizzling asados to medialunas at dawn. Everything you need to eat like a local in the Paris of South America.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Argentine Food Culture */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Flame className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Argentine Food Culture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-600" />
                The Meat Obsession
              </h3>
              <p className="text-gray-600 mb-4">
                Argentines consume 55kg of beef per person annually (double the US average). 
                Asado isn't just barbecue—it's a ritual. Sunday asados with family are sacred, 
                lasting 4+ hours of slow-cooking over wood coals.
              </p>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-sm text-orange-800">
                  <strong>The cuts:</strong> Vacío (flank steak, juicy), entraña (skirt steak, 
                  flavorful), bife de chorizo (sirloin, the classic), ojo de bife (ribeye), 
                  asado de tira (short ribs). Don't ask for well-done—medium is as far as locals go.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                Meal Times
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-orange-600 min-w-[80px]">Breakfast</span>
                  <span>Light—coffee and medialunas (croissants). Most cafes open 8am.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-orange-600 min-w-[80px]">Lunch</span>
                  <span>1-2pm, the main meal. Many restaurants offer menú del día (set lunch).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-orange-600 min-w-[80px]">Merienda</span>
                  <span>5-7pm afternoon snack. Coffee with facturas (pastries) or toast with dulce de leche.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-orange-600 min-w-[80px]">Dinner</span>
                  <span>9-11pm. Restaurants empty before 9pm. Reservations for 9:30pm are early.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-orange-600" />
                Coffee Culture
              </h3>
              <p className="text-gray-600 mb-4">
                Forget drip coffee—it barely exists here. Argentines drink espresso-based drinks, 
                usually small and strong.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-900">Cortado</span>
                  <p className="text-gray-600">Espresso with a splash of milk</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-900">Café con leche</span>
                  <p className="text-gray-600">Half espresso, half milk</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-900">Lagrima</span>
                  <p className="text-gray-600">Mostly milk, drop of coffee</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="font-semibold text-gray-900">Americano</span>
                  <p className="text-gray-600">Espresso with hot water</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-orange-600" />
                Vegetarian Survival
              </h3>
              <p className="text-gray-600 mb-4">
                Traditional Argentine cuisine is meat-heavy, but Palermo and other neighborhoods 
                now have excellent vegetarian options. The struggle is real in traditional parrillas 
                and small towns.
              </p>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-green-800">
                  <strong>Survival tips:</strong> Look for "vegetariano" or "vegano" signs. 
                  Empanadas come in cheese/onion and corn (humita) varieties. Most restaurants 
                  now offer at least one vegetarian main. Dietéticas (health food stores) sell 
                  tofu, seitan, and plant-based milks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Must-Try Foods */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Must-Try Foods</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Asado",
                icon: <Flame className="w-5 h-5" />,
                description: "The national dish. Various cuts of beef slow-cooked over wood coals. A social event as much as a meal.",
                proTip: "Go to a parrilla on Sunday afternoon for the full experience."
              },
              {
                title: "Empanadas",
                icon: <Utensils className="w-5 h-5" />,
                description: "Handheld pastries filled with meat, cheese, corn, or ham. Each region has its style—Salteñas are spicy, Tucumanas are juicy.",
                proTip: "Order 'carne picante' for spicy meat, 'humita' for corn."
              },
              {
                title: "Milanesa",
                icon: <Utensils className="w-5 h-5" />,
                description: "Breaded and fried meat cutlet. The Argentine schnitzel/wiener schnitzel. Often served napolitana style with ham, cheese, and tomato sauce.",
                proTip: "Milanesa napolitana with fries is the ultimate comfort food."
              },
              {
                title: "Pastel de Papa/Choclo",
                icon: <Utensils className="w-5 h-5" />,
                description: "Shepherd's pie variations. Pastel de papa is meat with mashed potato topping. Pastel de choclo is meat with corn puree topping.",
                proTip: "Homier restaurants (comedores) make the best versions."
              },
              {
                title: "Facturas",
                icon: <Utensils className="w-5 h-5" />,
                description: "Sweet pastries for breakfast or merienda. Medialunas (croissants) are the classic—'de manteca' (butter) are sweet, 'de grasa' (lard) are savory.",
                proTip: "Vigilantes are long glazed pastries, perfect with coffee."
              },
              {
                title: "Dulce de Leche",
                icon: <Heart className="w-5 h-5" />,
                description: "Caramelized milk spread. On toast, in alfajores, on ice cream, straight from the jar. Argentina's gift to the world.",
                proTip: "Havanna and Cachafaz make the best alfajores (cookie sandwiches)."
              },
              {
                title: "Mate",
                icon: <Utensils className="w-5 h-5" />,
                description: "Herbal tea made from yerba mate leaves. Shared from a gourd with a metal straw (bombilla).",
                proTip: "Never move the bombilla once placed. Say 'gracias' when done (means you don't want more)."
              },
              {
                title: "Helado",
                icon: <Utensils className="w-5 h-5" />,
                description: "Argentine ice cream is Italian-style gelato and it's incredible. Dulce de leche and sambayón (egg custard) are must-tries.",
                proTip: "Freddo, Persicco, and Un Altra Volta are the top chains."
              },
              {
                title: "Provoleta",
                icon: <Utensils className="w-5 h-5" />,
                description: "Grilled provolone cheese, often with oregano and olive oil. The ultimate asado starter.",
                proTip: "Order it 'a la provenzal' with garlic and parsley."
              }
            ].map((food, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {food.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{food.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{food.description}</p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-xs text-orange-800">
                    <strong>Pro tip:</strong> {food.proTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Parrillas */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-red-100 rounded-lg">
              <Flame className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Best Parrillas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {parrillas.map((spot, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {spot.address}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    spot.price === '$' ? 'bg-green-100 text-green-700' :
                    spot.price === '$$' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {spot.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{spot.description}</p>
                <div className="bg-red-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-red-800">
                    <strong>Must try:</strong> {spot.mustTry}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Tip:</strong> {spot.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cheap Eats */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Cheap Eats</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cheapEats.map((spot, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {spot.address}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    {spot.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{spot.description}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800">
                    <strong>Must try:</strong> {spot.mustTry}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-green-600" />
              The "Menú del Día" Hack
            </h3>
            <p className="text-gray-700">
              Most restaurants offer a set lunch menu (menú del día or menú ejecutivo) weekdays 12-4pm. 
              For $8-15 USD you get: starter (soup/salad), main course, drink, and sometimes dessert/coffee. 
              It's the best value in the city. Look for chalkboards outside restaurants advertising "Menú $X.XXX".
            </p>
          </div>
        </section>

        {/* Vegetarian */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Vegetarian & Vegan</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vegetarianSpots.map((spot, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {spot.address}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    spot.price === '$' ? 'bg-green-100 text-green-700' :
                    spot.price === '$$' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {spot.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{spot.description}</p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-sm text-emerald-800">
                    <strong>Must try:</strong> {spot.mustTry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Utensils className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">International Cuisine</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {international.map((spot, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {spot.address}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    {spot.cuisine}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{spot.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Must try:</strong> {spot.mustTry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cafes */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Coffee className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Café Culture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cafes.map((spot, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4" />
                      {spot.address}
                    </div>
                  </div>
                  {spot.workFriendly && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
                      💻 Work-friendly
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{spot.description}</p>
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-sm text-amber-800">
                    <strong>Must try:</strong> {spot.mustTry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Apps */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Delivery Apps</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rappi</h3>
              <p className="text-gray-600 mb-4">
                The biggest delivery app in Argentina. Restaurants, groceries, pharmacy, 
                and even cash delivery (yes, really). Essential app for expats.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Rappi Prime subscription gives free delivery</li>
                <li>• Cash or card payment options</li>
                <li>• English interface available</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">PedidosYa</h3>
              <p className="text-gray-600 mb-4">
                The main competitor to Rappi. Sometimes has different restaurant options 
                and better promotions. Worth having both.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Often cheaper delivery fees</li>
                <li>• Good grocery delivery (Disco, Carrefour)</li>
                <li>• Ya+ subscription for free delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Grocery Shopping */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-cyan-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Grocery Shopping</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cyan-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supermarket Chains</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-cyan-600 min-w-[100px]">Carrefour</span>
                  <span className="text-gray-600">Largest selection, mid-to-high prices. Good imported goods section.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-cyan-600 min-w-[100px]">Coto</span>
                  <span className="text-gray-600">Best prices, chaotic experience. Worth it for the savings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-cyan-600 min-w-[100px]">Día</span>
                  <span className="text-gray-600">Discount chain, basic selection, cheapest option.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-cyan-600 min-w-[100px]">Disco</span>
                  <span className="text-gray-600">Premium chain, excellent quality, higher prices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-cyan-600 min-w-[100px]">Jumbo</span>
                  <span className="text-gray-600">Chilean-owned, good quality, moderate prices.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-cyan-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ferias (Farmers Markets)</h3>
              <div className="space-y-4">
                {ferias.map((feria, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-gray-900">{feria.name}</h4>
                    <p className="text-sm text-cyan-600">{feria.location}</p>
                    <p className="text-sm text-gray-600">{feria.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What to Bring From Home</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• <strong>Spices:</strong> Curry powder, specific Asian spices, quality vanilla</li>
                <li>• <strong>Sauces:</strong> Hot sauce (Cholula, Sriracha), soy sauce, fish sauce</li>
                <li>• <strong>Baking:</strong> Baking powder, chocolate chips, brown sugar</li>
              </ul>
              <ul className="space-y-2">
                <li>• <strong>Snacks:</strong> Peanut butter, specific chips/candy</li>
                <li>• <strong>Specialty:</strong> Maple syrup, quality olive oil</li>
                <li>• <strong>Note:</strong> Most things are available but expensive (imported)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cooking at Home */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-rose-100 rounded-lg">
              <ChefHat className="w-6 h-6 text-rose-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Cooking at Home</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Where to Buy Meat</h3>
              <p className="text-gray-600 mb-4">
                Skip the supermarket meat section. Go to a carnicería (butcher shop) for 
                quality and better prices. Neighborhood butchers know their regulars and 
                will give you the best cuts.
              </p>
              <div className="bg-rose-50 rounded-lg p-4">
                <p className="text-sm text-rose-800">
                  <strong>What to ask for:</strong> "Un kilo de vacío" (flank steak), 
                  "medio kilo de entraña" (skirt steak), "bife de chorizo" (sirloin). 
                  Specify "para la parrilla" (for grilling) or "para la plancha" (for pan).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Asado at Home</h3>
              <p className="text-gray-600 mb-4">
                If you have a balcony, you can have a parrilla (grill). Buy a small 
                brasero (charcoal grill) at any hardware store. Weekend asados are 
                the best way to make Argentine friends.
              </p>
              <div className="bg-rose-50 rounded-lg p-4">
                <p className="text-sm text-rose-800">
                  <strong>Basics:</strong> Carbon (charcoal) from the supermarket, 
                  starter cubes, chimichurri (make your own or buy), coarse salt. 
                  Cook slow over indirect heat. Expect 2-3 hours for the full experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-rose-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Argentine Recipes to Learn</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Chimichurri</h4>
                <p className="text-sm text-gray-600">
                  Parsley, oregano, garlic, vinegar, oil, red pepper flakes. 
                  The essential asado sauce. Make a big jar—it keeps for weeks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tortilla de Papas</h4>
                <p className="text-sm text-gray-600">
                  Spanish-style potato omelet. Slice potatoes thin, fry gently, 
                  mix with eggs, cook until set. Perfect any time of day.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Milanesa</h4>
                <p className="text-sm text-gray-600">
                  Pound meat thin, dip in egg, coat in breadcrumbs, fry until golden. 
                  Serve with lemon. Comfort food at its finest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Etiquette */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Utensils className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Dining Etiquette</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tipping & Bills</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>10% is standard</strong>—leave cash even if paying by card</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Service charge (cubierto)</strong>—usually $2-5 USD, not a tip</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Splitting bills</strong>—not common; one person usually pays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Card vs cash</strong>—cash preferred for tips; cards accepted most places</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Reservations & Dress</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Reservations</strong>—essential for popular parrillas (book weeks ahead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Dress code</strong>—mostly casual; Palermo is trendy casual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Arriving late</strong>—15-30 minutes is socially acceptable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span><strong>Lingering</strong>—expected; meals are social events</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recipes & Restaurants CTAs */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <ChefHat className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Learn to Cook</h3>
              </div>
              <p className="text-orange-100 mb-6">
                Master authentic Argentine dishes at home. Our tested recipes include 
                empanadas, chimichurri, asado, and more—with ingredient sourcing tips 
                and cultural context.
              </p>
              <Button asChild variant="secondary" className="gap-2">
                <Link href="/food/recipes">
                  Browse Recipes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Restaurant Guides</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our curated guides to Buenos Aires dining—from Don Julio (world's #1 steakhouse) 
                to hidden local gems. Complete with what to order and how to book.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="sm">
                  <Link href="/food/restaurants/buenos-aires">
                    Top 40 Restaurants
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-700">
                  <Link href="/food/restaurants/best-parrillas">
                    Best Parrillas
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Tips */}
        <section className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-orange-100">Personal Favorites</h3>
              <ul className="space-y-2 text-orange-50">
                <li>• <strong>Best overall experience:</strong> Don Julio (book ahead!)</li>
                <li>• <strong>Best value parrilla:</strong> El Boliche de Dario</li>
                <li>• <strong>Best empanadas:</strong> El Sanjuanino</li>
                <li>• <strong>Best coffee:</strong> Café Registrado (work) or LAB (quality)</li>
                <li>• <strong>Best ice cream:</strong> Freddo dulce de leche granizado</li>
                <li>• <strong>Best cheap eat:</strong> Las Cuartetas fugazzeta</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-orange-100">Honest Warnings</h3>
              <ul className="space-y-2 text-orange-50">
                <li>• Not every parrilla is amazing—tourist traps exist</li>
                <li>• Pizza is different (thick crust, lots of cheese)—embrace it</li>
                <li>• Spicy food is rare; ask for "picante" if you want heat</li>
                <li>• Vegetarians: plan ahead, but it's totally doable now</li>
                <li>• Coffee is small and strong—embrace the cortado life</li>
                <li>• Dinner at 9pm is early; locals eat at 10pm or later</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-lg text-orange-100">
              Buenos Aires is a food lover's paradise. The combination of Italian immigration, 
              gaucho traditions, and modern creativity makes for one of the world's most 
              underrated food scenes. Come hungry, eat late, and don't skip the helado.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
