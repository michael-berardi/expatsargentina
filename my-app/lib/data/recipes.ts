export interface Recipe {
  slug: string;
  name: string;
  spanishName: string;
  description: string;
  seoKeywords: string[];
  category: "main" | "appetizer" | "sauce" | "dessert" | "stew";
  region: string;
  difficulty: "easy" | "medium" | "hard";
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  image: string;
  ingredients: {
    section?: string;
    items: string[];
  }[];
  instructions: string[];
  tips: string[];
  winePairing?: string;
  history?: string;
  whereToFind?: string[];
  storageInstructions?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

export const recipes: Recipe[] = [
  {
    slug: "empanadas",
    name: "Argentine Empanadas",
    spanishName: "Empanadas Salteñas",
    description: "The iconic Argentine hand pie, baked to golden perfection with a savory beef filling spiced with cumin, paprika, and green olives. The Salteñas style from northern Argentina is the most beloved variation nationwide.",
    seoKeywords: ["argentine empanadas recipe", "empanadas salteñas", "authentic empanadas", "beef empanadas", "how to make empanadas"],
    category: "appetizer",
    region: "Salta (Northern Argentina)",
    difficulty: "medium",
    prepTime: "45 min",
    cookTime: "25 min",
    totalTime: "1 hr 10 min",
    servings: 12,
    image: "/images/recipes/empanadas.webp",
    calories: 280,
    protein: 12,
    carbs: 32,
    fat: 14,
    history: "Empanadas arrived in Argentina with Spanish colonists but evolved into a distinctly Argentine tradition. The Salteñas variety, named after the city of Salta, are known for their distinctive crimped edge (repulgue) and slightly spicy meat filling. Each Argentine province claims its own style—Tucumanas are juicier, Cordobesas are sweeter with raisins, and Salteñas strike the perfect balance.",
    whereToFind: [
      "El Sanjuanino (Posadas 1515, Recoleta) - Best empanadas in Buenos Aires",
      "La Americana (Gascon 530, Almagro) - Open 24 hours",
      "Feria de Mataderos - Traditional Sunday market empanadas"
    ],
    storageInstructions: "Refrigerate cooked empanadas for up to 3 days. Freeze unbaked empanadas for up to 3 months—bake from frozen, adding 5-7 minutes. Reheat baked empanadas in a 350°F (180°C) oven for 10 minutes to restore crispness.",
    winePairing: "Torrontés from Salta or a young Malbec",
    ingredients: [
      {
        section: "For the dough",
        items: [
          "3 cups (450g) all-purpose flour",
          "1/2 cup (120ml) warm water",
          "1/4 cup (60ml) melted beef fat or lard",
          "1 tsp salt",
          "1 egg (for dough)",
          "1 egg (for egg wash)"
        ]
      },
      {
        section: "For the filling (picadillo)",
        items: [
          "500g (1 lb) ground beef (20% fat)",
          "2 medium onions, finely diced",
          "2 cloves garlic, minced",
          "1 red bell pepper, diced",
          "2 hard-boiled eggs, chopped",
          "1/2 cup green olives, chopped",
          "2 tbsp raisins (optional)",
          "2 tsp ground cumin",
          "2 tsp sweet paprika (pimentón dulce)",
          "1/2 tsp red pepper flakes (ají molido)",
          "Salt and black pepper to taste",
          "3 tbsp beef fat or oil for cooking"
        ]
      }
    ],
    instructions: [
      "Make the dough: Mix flour and salt in a large bowl. Create a well and add egg, melted fat, and warm water. Mix until a shaggy dough forms, then knead for 8-10 minutes until smooth and elastic. Wrap in plastic and rest at room temperature for 30 minutes.",
      "Prepare the filling: Heat beef fat in a large skillet over medium heat. Add onions and cook until soft and translucent (8-10 minutes). Add garlic and red pepper, cook 2 more minutes.",
      "Add ground beef, breaking it up with a spoon. Cook until browned but not fully cooked through—about 5 minutes. The beef will finish cooking in the oven.",
      "Season with cumin, paprika, red pepper flakes, salt, and black pepper. The filling should taste slightly overseasoned. Remove from heat and let cool completely.",
      "Once cooled, fold in chopped hard-boiled eggs, green olives, and raisins (if using). The filling must be cold before assembling to prevent soggy dough.",
      "Preheat oven to 400°F (200°C). Divide dough into 12 equal pieces and roll into balls. Cover with a damp cloth.",
      "Roll each ball into a 6-inch (15cm) circle about 1/8-inch thick. Use a small plate as a template for perfect circles if needed.",
      "Place 2-3 tablespoons of filling in the center of each circle. Resist overfilling—it will tear the dough.",
      "Fold dough in half over filling to create a half-moon. Press edges firmly to seal.",
      "Create the repulgue (traditional crimp): Starting at one end, fold the edge over itself in small sections, creating a rope-like pattern. This seals the empanada and looks beautiful.",
      "Place empanadas on a parchment-lined baking sheet. Brush with egg wash for a golden finish.",
      "Bake for 20-25 minutes until deep golden brown. Serve hot with chimichurri on the side."
    ],
    tips: [
      "The secret to great empanadas is the fat in the dough—traditional recipes use beef fat (grasa), but lard or butter work too. Don't use oil.",
      "Empanada dough is different from pie crust—it needs to be elastic to fold without cracking. Don't skip the kneading.",
      "In Argentina, empanadas are identified by their repulgue pattern: carne (meat) has the rope crimp, jamón y queso has a fork-pressed edge.",
      "For spicy empanadas (carne picante), add more red pepper flakes or a diced fresh chili.",
      "The filling should be room temperature or cold when assembling. Hot filling will make the dough soggy and difficult to seal.",
      "Buy pre-made tapas de empanada (empanada discs) at Argentine supermarkets if you're short on time—they're surprisingly good."
    ]
  },
  {
    slug: "chimichurri",
    name: "Traditional Chimichurri",
    spanishName: "Chimichurri",
    description: "The essential Argentine sauce for asado. A bright, herby condiment made with parsley, oregano, garlic, vinegar, and oil that transforms any grilled meat into a feast.",
    seoKeywords: ["authentic chimichurri recipe", "argentine chimichurri", "chimichurri sauce", "best chimichurri", "how to make chimichurri"],
    category: "sauce",
    region: "Nationwide",
    difficulty: "easy",
    prepTime: "10 min",
    cookTime: "0 min",
    totalTime: "10 min",
    servings: 8,
    image: "/images/recipes/chimichurri.webp",
    calories: 120,
    protein: 0,
    carbs: 2,
    fat: 13,
    history: "Every Argentine asador (grill master) has their own chimichurri recipe, passed down through generations. The sauce's origins are debated—some say it came with Basque immigrants, others claim it's from the gauchos of the Pampas. What everyone agrees on: no two families make it exactly the same way. The name may come from 'Jimmy McCurry,' an Irishman who supposedly invented it, or from Basque 'tximitxurri' meaning 'a mixture of several things in no particular order.'",
    whereToFind: [
      "Every parrilla in Argentina serves chimichurri",
      "Coto and Carrefour supermarkets sell good bottled versions",
      "Best fresh chimichurri: Don Julio parrilla (Palermo)"
    ],
    storageInstructions: "Store in a sealed jar in the refrigerator for up to 2 weeks. The flavor improves after 24 hours as ingredients meld. Bring to room temperature before serving—cold chimichurri loses its aroma.",
    winePairing: "Any Argentine red, especially Malbec",
    ingredients: [
      {
        items: [
          "1 cup (30g) fresh flat-leaf parsley, finely chopped (no stems)",
          "3 tbsp fresh oregano leaves, finely chopped",
          "4 cloves garlic, minced",
          "1 shallot, finely minced",
          "1 tsp red pepper flakes (ají molido)",
          "1/2 tsp smoked paprika (optional)",
          "2 tbsp red wine vinegar",
          "1 tbsp lemon juice",
          "1/2 cup (120ml) extra virgin olive oil",
          "1/2 cup (120ml) neutral oil (sunflower or grapeseed)",
          "1 tsp salt",
          "1/2 tsp black pepper",
          "1 bay leaf (optional, for jar storage)"
        ]
      }
    ],
    instructions: [
      "Finely chop parsley and oregano by hand—don't use a food processor or you'll bruise the herbs and lose the bright green color.",
      "In a bowl, combine chopped herbs, minced garlic, shallot, red pepper flakes, salt, and pepper.",
      "Add red wine vinegar and lemon juice. Stir to combine.",
      "Slowly drizzle in both oils while stirring constantly. The sauce should be loose but not watery.",
      "Taste and adjust seasoning—chimichurri should be bright, acidic, and slightly spicy.",
      "Let sit at room temperature for at least 30 minutes before serving. For best flavor, make 24 hours ahead.",
      "Serve alongside grilled meats, or use as a marinade for chicken or beef."
    ],
    tips: [
      "The ratio is key: 2 parts oil to 1 part acid (vinegar + lemon). Adjust to your taste.",
      "Some Argentines add a pinch of sugar to balance the acidity—try it if your vinegar is very sharp.",
      "For a thicker chimichurri (salsa verde style), use less oil and serve immediately.",
      "Never heat chimichurri—it destroys the fresh herb flavor.",
      "If storing long-term, top the jar with a thin layer of oil to preserve the green color.",
      "Experiment with additions: some add grated carrot, bell pepper, or cilantro."
    ]
  },
  {
    slug: "asado",
    name: "Argentine Asado",
    spanishName: "Asado a la Parrilla",
    description: "The sacred ritual of Argentine grilling. A social event as much as a meal, asado involves slow-cooking various cuts of beef over wood coals for hours, resulting in meltingly tender meat infused with smoke.",
    seoKeywords: ["argentine asado recipe", "how to make asado", "authentic asado", "argentine barbecue", "parrilla argentina"],
    category: "main",
    region: "Pampas (Nationwide)",
    difficulty: "hard",
    prepTime: "1 hr",
    cookTime: "3-4 hrs",
    totalTime: "4-5 hrs",
    servings: 8,
    image: "/images/recipes/asado.webp",
    calories: 650,
    protein: 48,
    carbs: 2,
    fat: 52,
    history: "Asado is Argentina's national dish and cultural institution. It originated with the gauchos (cowboys) of the Pampas plains, who would gather around open fires to cook fresh beef. Today, Sunday asado is a weekly ritual for Argentine families—a multi-hour affair of slow cooking, conversation, and wine. The asador (grill master) commands respect and typically doesn't pay for the meat, as their skill is considered payment enough.",
    whereToFind: [
      "Every neighborhood parrilla serves asado cuts",
      "Feria de Mataderos (Sundays) - Most authentic asado experience",
      "Parrilla Don Julio (Palermo) - The world's best steakhouse"
    ],
    storageInstructions: "Leftover asado keeps 3-4 days refrigerated. Reheat gently in foil at 300°F (150°C) with a splash of beef broth. Do not microwave—it toughens the meat.",
    winePairing: "Full-bodied Malbec or Cabernet Sauvignon",
    ingredients: [
      {
        section: "The cuts (choose 3-4 varieties)",
        items: [
          "Vacio (flank steak) - 1kg, the most prized cut",
          "Asado de tira (short ribs) - 1kg, bone-in",
          "Entraña (skirt steak) - 500g, very flavorful",
          "Bife de chorizo (sirloin) - 1kg, classic steak",
          "Morcilla (blood sausage) - 4 links",
          "Chorizo - 4-6 links",
          "Provoleta - 4 thick slices of provolone cheese"
        ]
      },
      {
        section: "For the fire",
        items: [
          "Hardwood charcoal (carbón) or wood embers - 5kg",
          "Newspaper and kindling for starting"
        ]
      },
      {
        section: "Seasoning",
        items: [
          "Coarse sea salt (sal gruesa) - essential",
          "Freshly ground black pepper",
          "Lemon (for morcilla and provoleta)",
          "Oregano and olive oil (for provoleta)"
        ]
      }
    ],
    instructions: [
      "Start your fire 45-60 minutes before cooking. Use hardwood charcoal or wood. You want a bed of glowing embers, not flames.",
      "Remove meat from refrigerator 1 hour before cooking—room temperature meat cooks more evenly.",
      "Season meat generously with coarse salt 30 minutes before grilling. No marinades needed for quality Argentine beef.",
      "Set up your grill (parrilla) with two zones: hot for searing, medium for slow cooking. The traditional Argentine grill is a simple grate over embers.",
      "Start with the slowest-cooking cuts: asado de tira (short ribs) and vacio (flank). Place on medium heat, bone-side down.",
      "The key technique: cook slowly over indirect heat. Argentine asado is about patience—never rush with high heat.",
      "Turn meat every 15-20 minutes. Total cooking time: 3-4 hours for large cuts. The meat is done when it springs back when pressed.",
      "After 2 hours, add sausages (chorizo and morcilla) to the grill. These cook faster—about 45 minutes total.",
      "For the final 30 minutes, sear any thick steaks (bife de chorizo) over high heat—4-5 minutes per side for medium-rare.",
      "Provoleta comes last: place slices in a small cast-iron dish or directly on grill, sprinkle with oregano, drizzle with oil. Cook until bubbling and slightly browned—about 10 minutes.",
      "Rest all meat for 10 minutes before slicing. Slice against the grain.",
      "Serve family-style with chimichurri, fresh bread, and a simple salad. The meat is the star—no heavy sides needed."
    ],
    tips: [
      "Quality of meat matters more than technique. In Argentina, grass-fed beef is standard. Source the best beef you can find.",
      "Never use lighter fluid—it imparts a chemical taste. Use a chimney starter or natural fire starters.",
      "The asador never leaves the grill. This is a social role—you cook while talking, drinking, and managing the fire.",
      "Argentines don't sauce their meat with BBQ sauce. Salt, fire, and chimichurri on the side—that's it.",
      "Medium-rare is as cooked as most Argentines go. Well-done is considered sacrilege.",
      "If you can't find Argentine cuts, substitute: vacio = flank steak, asado de tira = English-cut short ribs, entraña = skirt steak."
    ]
  },
  {
    slug: "milanesa",
    name: "Milanesa Napolitana",
    spanishName: "Milanesa a la Napolitana",
    description: "Argentina's ultimate comfort food—a breaded beef cutlet topped with ham, tomato sauce, and melted mozzarella. A perfect hybrid of Italian and Argentine cuisine that appears on every neighborhood menu.",
    seoKeywords: ["milanesa napolitana recipe", "argentine milanesa", "authentic milanesa", "breaded beef cutlet", "milanesa argentina"],
    category: "main",
    region: "Nationwide (Italian-Argentine)",
    difficulty: "medium",
    prepTime: "20 min",
    cookTime: "15 min",
    totalTime: "35 min",
    servings: 4,
    image: "/images/recipes/milanesa.webp",
    calories: 580,
    protein: 42,
    carbs: 35,
    fat: 34,
    history: "Milanesa arrived with Italian immigrants in the late 19th century, evolving from the Italian cotoletta alla milanese. The 'napolitana' variation—topped with tomato sauce, ham, and cheese—is distinctly Argentine and has no equivalent in Naples. It became popular in Buenos Aires' Italian neighborhoods and spread nationwide. Today, every Argentine family has their milanesa recipe, and it's the unofficial national comfort food.",
    whereToFind: [
      "Desnivel (Defensa 855, San Telmo) - Classic neighborhood milanesa",
      "Any Argentine 'restorán' or 'comedor' will serve it",
      "Best value: menú del día at neighborhood restaurants"
    ],
    storageInstructions: "Refrigerate cooked milanesas for up to 2 days. Reheat in a 375°F (190°C) oven for 10 minutes—not the microwave, which makes them soggy. Uncooked, breaded milanesas freeze well for 1 month—fry from frozen, adding 2 minutes.",
    winePairing: "Light Malbec or Bonarda",
    ingredients: [
      {
        section: "For the milanesa",
        items: [
          "4 thin beef cutlets (top round or sirloin), pounded to 1/4 inch thick",
          "1 cup all-purpose flour",
          "2 eggs, beaten",
          "2 cups breadcrumbs (panko for extra crispy, or fine Argentine miga de pan)",
          "1 tsp garlic powder",
          "1 tsp dried oregano",
          "Salt and black pepper",
          "Vegetable oil for frying (enough for 1/2 inch in pan)"
        ]
      },
      {
        section: "For the Napolitana topping",
        items: [
          "1 cup tomato sauce (salsa de tomate)",
          "4 slices cooked ham",
          "8 slices mozzarella cheese",
          "1 tsp dried oregano",
          "Grated Parmesan cheese (optional)"
        ]
      }
    ],
    instructions: [
      "Pound the beef cutlets between plastic wrap until uniformly thin (1/4 inch). Season both sides with salt, pepper, and garlic powder.",
      "Set up your breading station: flour on one plate, beaten eggs in a shallow bowl, breadcrumbs mixed with oregano on another plate.",
      "Dredge each cutlet in flour, shaking off excess. Dip in egg, letting excess drip off. Press into breadcrumbs, coating both sides firmly.",
      "Place breaded cutlets on a wire rack and refrigerate for 15 minutes. This helps the coating stick during frying.",
      "Heat oil in a large skillet over medium-high heat until shimmering (350°F/175°C).",
      "Fry milanesas one or two at a time—don't crowd the pan. Cook 2-3 minutes per side until golden brown and crispy.",
      "Transfer to a paper towel-lined plate to drain excess oil.",
      "Preheat broiler. Place fried milanesas on a baking sheet.",
      "Top each milanesa with a layer of tomato sauce, a slice of ham, and two slices of mozzarella.",
      "Sprinkle with oregano and Parmesan if using.",
      "Broil for 2-3 minutes until cheese is melted and bubbling with golden spots.",
      "Serve immediately with French fries (papas fritas) and a simple salad—this is the traditional Argentine way."
    ],
    tips: [
      "The beef must be thin—ask your butcher to pound it, or do it yourself between plastic wrap with a meat mallet or rolling pin.",
      "Don't skip the refrigeration step after breading—it makes a huge difference in keeping the coating attached.",
      "For milanesa a caballo (on horseback), top with a fried egg along with the napolitana toppings.",
      "Make sure your oil is hot enough—if it's too cool, the breading will absorb oil and get greasy.",
      "The tomato sauce should be simple—just good canned tomatoes, garlic, and salt. Don't use heavy marinara.",
      "Some Argentines add a slice of roasted red pepper under the cheese—delicious variation."
    ]
  },
  {
    slug: "locro",
    name: "Traditional Locro",
    spanishName: "Locro Argentino",
    description: "A hearty indigenous stew of corn, beans, pumpkin, and meats that's Argentina's national patriotic dish. Traditionally eaten on May 25th (Revolution Day) and July 9th (Independence Day), but beloved year-round.",
    seoKeywords: ["locro recipe", "argentine locro", "traditional locro", "corn stew recipe", "locro argentino"],
    category: "stew",
    region: "Northwest Argentina (Cuyo)",
    difficulty: "medium",
    prepTime: "30 min",
    cookTime: "3 hrs",
    totalTime: "3.5 hrs",
    servings: 8,
    image: "/images/recipes/locro.webp",
    calories: 420,
    protein: 22,
    carbs: 48,
    fat: 18,
    history: "Locro predates the Spanish conquest, originating with indigenous peoples of the Andes who cultivated corn, beans, and squash—the 'three sisters' of agriculture. The Spanish added pork and beef, creating the hybrid dish known today. It's the official food of Argentine national holidays, with families gathering for massive pots that simmer all morning. The stew represents Argentina's indigenous and European heritage combined.",
    whereToFind: [
      "Feria de Mataderos (Sundays) - Authentic homemade locro",
      "El Sanjuanino (Recoleta) - Excellent locro in BA",
      "Northwestern provinces (Salta, Jujuy, Tucumán) - Best regional versions"
    ],
    storageInstructions: "Locro improves with age. Refrigerate for up to 5 days, or freeze for 3 months. The flavors meld and deepen over time—day 2 locro is often better than fresh.",
    winePairing: "High-altitude Torrontés from Salta or Malbec",
    ingredients: [
      {
        section: "Base ingredients",
        items: [
          "500g (1 lb) dried white hominy corn (maíz blanco pisado), soaked overnight",
          "200g (7 oz) dried white beans (porotos), soaked overnight",
          "300g (10 oz) butternut squash or pumpkin, cubed",
          "2 chorizo sausages, sliced",
          "200g (7 oz) pork belly or pancetta, cubed",
          "200g (7 oz) beef chuck, cubed",
          "1 beef rib bone (for flavor, optional)",
          "200g (7 oz) tripe (mondongo), cleaned and cubed (optional but traditional)"
        ]
      },
      {
        section: "Vegetables and seasoning",
        items: [
          "2 large onions, diced",
          "2 leeks, white part only, sliced",
          "2 cloves garlic, minced",
          "1 red bell pepper, diced",
          "2 tsp smoked paprika",
          "1 tsp ground cumin",
          "1/2 tsp red pepper flakes",
          "1 bay leaf",
          "Salt and black pepper to taste",
          "Water or beef stock - about 3 liters"
        ]
      },
      {
        section: "For the quiquirimichi (spicy oil)",
        items: [
          "1/2 cup olive oil",
          "2 tbsp sweet paprika",
          "1 tsp red pepper flakes",
          "2 cloves garlic, minced",
          "1 tbsp dried oregano"
        ]
      }
    ],
    instructions: [
      "The night before: Soak dried corn and beans in separate bowls of cold water, refrigerated.",
      "Drain and rinse corn and beans. In a large heavy pot (olla), combine corn, beans, beef rib bone, and water/stock. Bring to a boil, then reduce to a simmer.",
      "In a separate pan, render the pork belly until crisp. Remove pork and set aside, keeping the fat in the pan.",
      "Sauté onions, leeks, and red pepper in the pork fat until soft (8-10 minutes). Add garlic, paprika, cumin, and red pepper flakes. Cook 2 minutes.",
      "Add the sautéed vegetables to the pot with the corn and beans. Add beef chuck.",
      "Simmer uncovered for 2 hours, stirring occasionally and adding more liquid if needed. The corn will start to break down and thicken the stew.",
      "Add chorizo, pumpkin, and tripe (if using). Continue simmering for 45 minutes.",
      "Remove rib bone. Add the crispy pork belly back to the pot. Season with salt and pepper.",
      "Make the quiquirimichi: Heat olive oil in a small pan. Add paprika, pepper flakes, garlic, and oregano. Cook 30 seconds until fragrant. Remove from heat.",
      "The locro is ready when the corn is tender and the stew is thick and creamy. Total cooking time: about 3 hours.",
      "Serve hot in bowls, drizzled with quiquirimichi on top. Each person adds their own amount of spicy oil."
    ],
    tips: [
      "Finding dried hominy can be difficult outside Argentina. Substitute with canned hominy (drained, reduce cooking time) or even frozen corn (not traditional but works).",
      "The key to locro is long, slow cooking. Don't rush it—this is weekend cooking.",
      "Quiquirimichi (also spelled quiquirimichi) is essential—don't skip this spicy paprika oil.",
      "Traditional locro includes tripe (mondongo), but many modern versions omit it. Include it for authenticity.",
      "The stew should be thick but not dry—add hot water or stock as needed during cooking.",
      "Make a double batch and freeze portions—locro reheats beautifully."
    ]
  },
 {
    slug: "provoleta",
    name: "Provoleta",
    spanishName: "Provoleta a la Parrilla",
    description: "Grilled provolone cheese with oregano and olive oil—the ultimate asado starter. Gooey, crispy, and absolutely addictive.",
    seoKeywords: ["provoleta recipe", "grilled provolone", "argentine provoleta", "provoleta cheese", "how to make provoleta"],
    category: "appetizer",
    region: "Nationwide",
    difficulty: "easy",
    prepTime: "5 min",
    cookTime: "10 min",
    totalTime: "15 min",
    servings: 4,
    image: "/images/recipes/provoleta.webp",
    calories: 320,
    protein: 22,
    carbs: 2,
    fat: 26,
    history: "Provoleta was invented in the 1940s by Italian immigrant Natalio Alba in Buenos Aires. He developed a special provolone cheese that wouldn't melt and drip through the grill grates when heated. It quickly became the standard starter for any asado. Today, provoleta is so popular that Argentine dairies produce specific rounds designed just for grilling.",
    whereToFind: [
      "Every parrilla in Argentina serves provoleta",
      "Coto and Carrefour sell pre-sliced provoleta ready for grilling",
      "Best restaurant version: Don Julio (comes bubbling in a cast iron dish)"
    ],
    storageInstructions: "Best eaten immediately. Refrigerate leftovers (though rare) for up to 2 days. Reheat in oven—not microwave.",
    winePairing: "Sparkling wine or light red like Pinot Noir",
    ingredients: [
      {
        items: [
          "4 thick slices provolone cheese (1-inch thick), about 200g each",
          "2 tbsp dried oregano",
          "1/4 cup extra virgin olive oil",
          "2 cloves garlic, thinly sliced (optional)",
          "Red pepper flakes (optional)",
          "Fresh crusty bread for serving"
        ]
      }
    ],
    instructions: [
      "The cheese matters: You need thick-cut provolone, not the thin sandwich slices. Look for 'provolone para pizza' or 'provolone da tavola' in Italian markets.",
      "If grilling directly: Brush grill grates with oil. Provolone should be thick enough not to fall through.",
      "If using a cast-iron skillet or provoleta dish (better method): Preheat over medium-high heat.",
      "Place cheese slices in the pan or on the grill. They should sizzle immediately.",
      "Sprinkle generously with oregano. Drizzle olive oil over each slice.",
      "Add garlic slices and red pepper flakes if using.",
      "Cook without moving for 3-4 minutes until the bottom is golden and crispy.",
      "If grilling directly, carefully flip with a spatula. If in a dish, place under the broiler for 2-3 minutes until bubbling and browned on top.",
      "The provoleta is ready when it's bubbling vigorously, golden on bottom, and slightly browned on top.",
      "Serve immediately in the hot dish or transfer to plates—it's molten lava inside.",
      "Eat with crusty bread, dragging it through the melted cheese and oil."
    ],
    tips: [
      "Don't use aged provolone—it won't melt properly. You want young, semi-hard provolone.",
      "The cast-iron dish method is foolproof and what most Argentine restaurants use.",
      "Add a splash of chimichurri on top for extra flavor.",
      "Some Argentinians add sliced tomatoes under the cheese—delicious variation.",
      "Provoleta should be served bubbling hot. It firms up quickly as it cools.",
      "If you can't find thick provolone, use a small wheel of Camembert or Brie as a substitute (not traditional but works)."
    ]
  },
  {
    slug: "alfajores",
    name: "Argentine Alfajores",
    spanishName: "Alfajores de Maicena",
    description: "Delicate cornstarch sandwich cookies filled with thick dulce de leche and rolled in coconut. The ultimate Argentine sweet treat.",
    seoKeywords: ["alfajores recipe", "argentine alfajores", "dulce de leche cookies", "cornstarch alfajores", "authentic alfajores"],
    category: "dessert",
    region: "Nationwide",
    difficulty: "medium",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "1.5 hrs",
    servings: 24,
    image: "/images/recipes/alfajores.webp",
    calories: 180,
    protein: 2,
    carbs: 26,
    fat: 8,
    history: "Alfajores descended from the Arab al-qaq, brought to Spain during the Moorish occupation. Spanish colonists brought them to the Americas, where they evolved into the cornstarch-based version we know today. The Argentine alfajor de maicena is distinctively soft and crumbly, filled with dulce de leche (itself an Argentine invention). Today, alfajores are a national obsession, with brands like Havanna and Cachafaz achieving cult status.",
    whereToFind: [
      "Havanna cafes (multiple locations) - The gold standard",
      "Cachafaz (supermarkets) - Premium supermarket brand",
      "Guolis (supermarkets) - Budget-friendly favorite",
      "Any kiosco (corner store) sells alfajores"
    ],
    storageInstructions: "Store in airtight container at room temperature for 5 days, or refrigerated for 2 weeks. Bring to room temperature before serving. Unfilled cookies freeze well for 3 months.",
    winePairing: "Malbec or coffee",
    ingredients: [
      {
        section: "For the cookies",
        items: [
          "2 cups (250g) cornstarch (maicena)",
          "1 cup (125g) all-purpose flour",
          "1 tsp baking powder",
          "1/2 tsp baking soda",
          "200g (7 oz) unsalted butter, softened",
          "3/4 cup (150g) sugar",
          "3 egg yolks",
          "1 tsp vanilla extract",
          "Zest of 1 lemon (optional but traditional)",
          "1-2 tbsp milk (if needed)"
        ]
      },
      {
        section: "For assembly",
        items: [
          "400g (14 oz) dulce de leche (Havanna or Cachafaz recommended)",
          "1 cup shredded unsweetened coconut",
          "Powdered sugar for dusting (optional)"
        ]
      }
    ],
    instructions: [
      "Sift together cornstarch, flour, baking powder, and baking soda. Set aside.",
      "In a large bowl, cream softened butter and sugar until light and fluffy—about 3 minutes with electric mixer.",
      "Add egg yolks one at a time, beating well after each. Mix in vanilla and lemon zest.",
      "Gradually add dry ingredients to butter mixture. Mix until a soft dough forms. It will be delicate—don't overmix.",
      "If dough seems too crumbly, add 1-2 tbsp milk. It should hold together when pressed.",
      "Divide dough in half, flatten into disks, wrap in plastic, and refrigerate for 30 minutes.",
      "Preheat oven to 350°F (175°C). Line baking sheets with parchment.",
      "Roll out dough on a lightly floured surface to 1/4 inch thickness. The dough is fragile—work gently.",
      "Cut into 2-inch rounds using a cookie cutter or glass. Re-roll scraps once.",
      "Place cookies 1 inch apart on prepared sheets. They spread very little.",
      "Bake for 10-12 minutes until set but not browned. The bottoms should be just golden.",
      "Cool on sheets for 5 minutes, then transfer to wire racks to cool completely.",
      "Match cookies into pairs by size. Spread a generous layer of dulce de leche on one cookie of each pair.",
      "Sandwich with matching cookie, pressing gently so dulce de leche spreads to edges.",
      "Roll edges in shredded coconut to coat the exposed dulce de leche.",
      "Dust tops with powdered sugar if desired.",
      "Let rest for at least 1 hour before serving—this allows the cookies to soften from the dulce de leche."
    ],
    tips: [
      "The cornstarch is essential—don't substitute with more flour. It creates the signature melt-in-your-mouth texture.",
      "Use high-quality dulce de leche. In Argentina, Havanna and Cachafaz are the premium brands. Outside Argentina, look for 'dulce de leche repostero' (thicker pastry version).",
      "Don't skip the chilling step—warm dough is impossible to work with.",
      "These cookies are extremely fragile when warm. Handle with care.",
      "For chocolate alfajores, dip half of each sandwich in melted chocolate and let set.",
      "The cookies improve after a day as the dulce de leche softens them—if you can wait that long."
    ]
  },
  {
    slug: "humita",
    name: "Humitas en Chala",
    spanishName: "Humitas",
    description: "Fresh corn tamales wrapped in corn husks—a traditional dish from the Northwest. Sweet, savory, and deeply comforting.",
    seoKeywords: ["humitas recipe", "argentine humitas", "corn tamales", "humitas en chala", "authentic humitas"],
    category: "main",
    region: "Northwest Argentina (Salta, Jujuy, Tucumán)",
    difficulty: "medium",
    prepTime: "45 min",
    cookTime: "1 hr",
    totalTime: "1.75 hrs",
    servings: 8,
    image: "/images/recipes/humita.webp",
    calories: 240,
    protein: 8,
    carbs: 38,
    fat: 10,
    history: "Humitas are an ancient Andean dish predating the Inca Empire. Indigenous peoples wrapped ground corn in corn husks and cooked them in clay pots. The name comes from the Quechua 'humint'a.' Each northwestern province has its variation: Salteñas are savory with onion and spices, Tucumanas add cheese, and some versions include pumpkin. They're traditionally eaten in summer when fresh corn is abundant.",
    whereToFind: [
      "Feria de Mataderos (Sundays) - Fresh humitas sold by abuelas",
      "Northwestern provinces - Best authentic versions",
      "Empanada shops often sell humitas as alternative"
    ],
    storageInstructions: "Refrigerate cooked humitas for up to 3 days. Reheat by steaming for 10 minutes. Freeze cooked humitas for 1 month—steam from frozen for 15 minutes.",
    winePairing: "Torrontés from Salta",
    ingredients: [
      {
        section: "For the humitas",
        items: [
          "8 ears fresh corn (or 4 cups frozen corn, thawed)",
          "1 large onion, finely chopped",
          "2 cloves garlic, minced",
          "1/2 cup milk",
          "1/4 cup cornmeal (polenta)",
          "2 tbsp butter",
          "1 tsp sugar",
          "1 tsp salt",
          "1/2 tsp white pepper",
          "1/2 tsp paprika",
          "1 cup fresh basil leaves, chopped",
          "200g (7 oz) fresh cheese (queso fresco), cubed (optional)"
        ]
      },
      {
        section: "For wrapping",
        items: [
          "Corn husks from the corn (soaked in hot water 30 minutes)",
          "Kitchen twine or strips of corn husk for tying"
        ]
      }
    ],
    instructions: [
      "Prepare corn husks: Carefully remove husks from corn, keeping them as intact as possible. Soak in hot water for 30 minutes to soften.",
      "Cut kernels from corn cobs. If using frozen corn, thaw completely.",
      "Process half the corn kernels in a food processor until smooth. Leave the other half whole for texture.",
      "In a large skillet, melt butter over medium heat. Sauté onion until soft (5 minutes). Add garlic and cook 1 minute.",
      "Add processed corn, whole corn kernels, milk, cornmeal, sugar, salt, pepper, and paprika.",
      "Cook over medium heat, stirring constantly, until mixture thickens—about 10 minutes. It should be thick but spreadable.",
      "Remove from heat and stir in chopped basil. Let cool slightly.",
      "To assemble: Lay two corn husks overlapping to create a wider surface. Place about 1/2 cup of corn mixture in center.",
      "If using cheese, press a few cubes into the center of the corn mixture.",
      "Fold sides of husks over filling, then fold bottom up and top down to create a package.",
      "Tie securely with kitchen twine or strips of corn husk.",
      "Repeat with remaining corn mixture and husks.",
      "Place humitas in a large pot with a steamer basket. Add water to just below the basket.",
      "Steam covered for 45-60 minutes until firm and set.",
      "Serve hot, still wrapped in husks. Guests unwrap at the table."
    ],
    tips: [
      "Fresh corn is essential when in season. If using frozen, add 1 extra tbsp cornmeal as frozen corn has more moisture.",
      "Don't overfill the husks—they need room to expand slightly.",
      "The traditional cheese is queso fresco, but mozzarella or farmer's cheese work well.",
      "Humitas can also be baked: place wrapped humitas in a baking dish with a little water, cover with foil, and bake at 350°F for 45 minutes.",
      "Some regions add diced red pepper or pumpkin to the filling—feel free to experiment.",
      "Save corn cobs after removing kernels—they make excellent vegetable stock."
    ]
  },
  {
    slug: "tortilla-papa",
    name: "Spanish Tortilla de Papas",
    spanishName: "Tortilla de Papas",
    description: "A thick potato and egg omelet that's a staple of Argentine home cooking. Served at room temperature, it's perfect for picnics, lunch, or a light dinner.",
    seoKeywords: ["tortilla de papas recipe", "spanish tortilla", "potato omelet", "tortilla española", "argentine tortilla"],
    category: "main",
    region: "Spanish-Argentine",
    difficulty: "medium",
    prepTime: "15 min",
    cookTime: "30 min",
    totalTime: "45 min",
    servings: 6,
    image: "/images/recipes/tortilla-papa.webp",
    calories: 280,
    protein: 10,
    carbs: 24,
    fat: 16,
    history: "Brought to Argentina by Spanish immigrants, particularly Galicians and Basques, the tortilla de papas became a home-cooking staple. Unlike the more famous empanadas and asado, tortilla is everyday food—what Argentine mothers make for a quick lunch or pack for picnics. It's valued for being inexpensive, filling, and delicious at any temperature. Every family has their preferred ratio of potato to egg and their technique for the perfect flip.",
    whereToFind: [
      "Home kitchens—this is home cooking, not restaurant food",
      "Some tapas bars in Buenos Aires serve it",
      "Picnics and asados often include tortilla"
    ],
    storageInstructions: "Refrigerate for up to 4 days. Serve cold, room temperature, or lightly warmed—never hot. Do not freeze.",
    winePairing: "Young red or crisp white",
    ingredients: [
      {
        items: [
          "4 medium potatoes (about 600g), peeled and thinly sliced",
          "1 large onion, thinly sliced",
          "6 large eggs",
          "1/2 cup olive oil (for frying)",
          "Salt and pepper to taste"
        ]
      }
    ],
    instructions: [
      "Heat olive oil in a 10-inch non-stick skillet over medium heat.",
      "Add potato slices in batches, frying until tender but not brown—about 10 minutes. Remove with slotted spoon and drain on paper towels.",
      "In the same oil, sauté onion slices until soft and translucent—about 8 minutes. Remove and drain.",
      "Pour off most of the oil, leaving about 2 tablespoons in the pan.",
      "In a large bowl, beat eggs with salt and pepper.",
      "Add fried potatoes and onions to eggs. Mix gently to coat. Let sit for 5 minutes.",
      "Heat the remaining oil in the skillet over medium heat.",
      "Pour egg-potato mixture into the pan, spreading evenly. Cook without stirring for 5 minutes until edges are set.",
      "The flip: Place a large plate over the skillet. In one quick motion, flip the pan so tortilla lands on the plate (cooked side up).",
      "Slide the tortilla back into the pan, uncooked side down.",
      "Cook 3-4 more minutes until set but still slightly jiggly in center.",
      "Slide onto a plate and let cool to room temperature before slicing.",
      "Cut into wedges or squares and serve."
    ],
    tips: [
      "The secret to great tortilla: low and slow. Never brown the potatoes—you want them tender and creamy.",
      "A non-stick pan is essential for the flip. If you're nervous, practice with an empty pan first.",
      "The tortilla should be slightly runny in the center when done—it continues cooking as it cools.",
      "Some Argentines add diced red pepper or ham—traditional additions but not required.",
      "If the flip goes wrong, don't panic. Just scrape it back together and press into shape—it will taste the same.",
      "Tortilla is best at room temperature. Making it ahead actually improves the flavor."
    ]
  },
  {
    slug: "choripan",
    name: "Choripán",
    spanishName: "Choripán",
    description: "Argentina's iconic street food — a grilled chorizo sausage split and served in crusty bread with chimichurri. Found at every asado, football match, and street corner. Simple, messy, and absolutely essential.",
    seoKeywords: ["choripan recipe", "argentine street food", "chorizo sandwich", "choripan chimichurri", "argentine chorizo bread"],
    category: "main",
    region: "National (especially Buenos Aires)",
    difficulty: "easy",
    prepTime: "5 min",
    cookTime: "15 min",
    totalTime: "20 min",
    servings: 4,
    image: "/images/recipes/choripan.webp",
    calories: 450,
    protein: 22,
    carbs: 35,
    fat: 28,
    history: "Choripán is a portmanteau of 'chorizo' and 'pan' (bread). It originated as gaucho food on the pampas, where ranch workers would grill chorizos over open fires and eat them in bread. Today it's Argentina's most beloved street food, sold at every event from Boca Juniors matches to protests in Plaza de Mayo. The choripán vendor (choripanero) is a cultural institution.",
    whereToFind: [
      "Costanera Sur vendors (Buenos Aires) — legendary street carts",
      "Any asado gathering — always the first thing served",
      "Football stadium vendors — the authentic experience",
      "Feria de Mataderos — Sunday market tradition"
    ],
    storageInstructions: "Best served immediately. Leftover chorizos can be refrigerated for 2 days and reheated on the grill or in a pan.",
    winePairing: "Malbec from Mendoza or a cold Quilmes lager",
    ingredients: [
      {
        section: "Main",
        items: [
          "4 fresh Argentine chorizos (pork and beef blend)",
          "4 crusty bread rolls (pan francés) or a baguette cut into portions",
          "Chimichurri sauce (see our chimichurri recipe)"
        ]
      },
      {
        section: "Optional toppings",
        items: [
          "Salsa criolla (diced tomato, onion, bell pepper in vinegar)",
          "Mayonnaise",
          "Mustard"
        ]
      }
    ],
    instructions: [
      "Heat your grill to medium-high heat. If using charcoal, wait until coals are ashed over.",
      "Butterfly each chorizo by slicing lengthwise almost through, keeping one side connected.",
      "Place chorizos on the grill, cut side down first, for 5-7 minutes.",
      "Flip and grill another 5-7 minutes until cooked through and nicely charred.",
      "While chorizos grill, place bread rolls on the cooler side of the grill to toast lightly.",
      "Place the grilled chorizo in the toasted bread.",
      "Spoon generous chimichurri over the chorizo.",
      "Eat immediately, over a plate — it will drip. That's correct."
    ],
    tips: [
      "Never prick the chorizo before grilling — you want to keep all the juices inside.",
      "Butterflying the chorizo ensures even cooking and creates more surface area for chimichurri.",
      "The bread should be crusty on the outside, soft inside. Don't over-toast it.",
      "Make chimichurri at least 30 minutes ahead so flavors develop.",
      "At an asado, choripán is always served first as an appetizer while the main meats cook."
    ]
  },
  {
    slug: "dulce-de-leche",
    name: "Dulce de Leche",
    spanishName: "Dulce de Leche Casero",
    description: "Argentina's national confection — slow-cooked caramelized milk that's used in everything from alfajores to ice cream to eating straight from the jar with a spoon. Making it from scratch takes patience but the result is incomparably better than store-bought.",
    seoKeywords: ["dulce de leche recipe", "homemade dulce de leche", "argentine caramel", "how to make dulce de leche", "dulce de leche from scratch"],
    category: "dessert",
    region: "National",
    difficulty: "easy",
    prepTime: "5 min",
    cookTime: "3 hours",
    totalTime: "3 hours 5 min",
    servings: 16,
    image: "/images/recipes/dulce-de-leche.webp",
    calories: 120,
    protein: 3,
    carbs: 20,
    fat: 3,
    history: "Dulce de leche's origin is disputed between Argentina and Uruguay, but both countries claim it as their own. The most popular origin story involves a maid who accidentally left a pot of milk and sugar on the fire in 1829 while making lechada for General Rosas. When she returned, the mixture had caramelized into dulce de leche. Argentines consume over 3 kg per person per year — it's in alfajores, pancakes, ice cream, cakes, and eaten by the spoonful.",
    whereToFind: [
      "Every supermarket in Argentina — La Serenísima and SanCor are the top brands",
      "Havanna stores — premium quality, great gift boxes",
      "Any heladería — dulce de leche is always the #1 ice cream flavor"
    ],
    storageInstructions: "Store in sealed glass jars in the refrigerator for up to 3 weeks. Can also be frozen for up to 3 months. Bring to room temperature before using for easier spreading.",
    ingredients: [
      {
        section: "Stovetop method",
        items: [
          "1 liter (4 cups) whole milk",
          "300g (1.5 cups) white sugar",
          "1 tsp vanilla extract",
          "1/2 tsp baking soda dissolved in 1 tbsp water",
          "Pinch of salt"
        ]
      }
    ],
    instructions: [
      "Combine milk, sugar, and salt in a large, heavy-bottomed pot over medium heat.",
      "Stir constantly until the sugar dissolves completely.",
      "When the mixture begins to simmer, add the baking soda mixture — it will foam up, this is normal.",
      "Reduce heat to low. The mixture should barely simmer — tiny bubbles, not a rolling boil.",
      "Stir every 10-15 minutes, scraping the bottom and sides to prevent sticking.",
      "After about 1.5 hours, the mixture will start to thicken and turn golden. Stir more frequently now.",
      "Continue cooking for another 1-1.5 hours, stirring constantly in the final 30 minutes.",
      "The dulce de leche is ready when it's thick, deeply caramel-colored, and coats the back of a spoon.",
      "Add vanilla extract and stir well.",
      "Remove from heat and let cool. It will thicken further as it cools.",
      "Transfer to clean glass jars."
    ],
    tips: [
      "Low and slow is the absolute key. High heat will burn the bottom and give a bitter taste.",
      "The baking soda helps with color development and prevents the milk proteins from curdling.",
      "Test doneness by dropping a small amount on a cold plate — it should hold its shape without spreading.",
      "If you want a shortcut, you can simmer an unopened can of condensed milk in water for 3 hours — but homemade is noticeably better.",
      "Stir with a wooden spoon — metal can react with the milk acids.",
      "The color should be deep amber, not dark brown. If it gets too dark, it will be bitter."
    ]
  },
  {
    slug: "medialunas",
    name: "Medialunas",
    spanishName: "Medialunas de Manteca",
    description: "Argentina's beloved breakfast pastry — a buttery, slightly sweet crescent that's smaller and sweeter than a French croissant. Enjoyed with café con leche at every corner cafe in Buenos Aires.",
    seoKeywords: ["medialunas recipe", "argentine croissant", "medialunas de manteca", "buenos aires breakfast", "argentine pastry recipe"],
    category: "dessert",
    region: "National (especially Buenos Aires)",
    difficulty: "hard",
    prepTime: "2 hours",
    cookTime: "20 min",
    totalTime: "6 hours (including rising)",
    servings: 24,
    image: "/images/recipes/medialunas.webp",
    calories: 180,
    protein: 4,
    carbs: 22,
    fat: 9,
    history: "Medialunas (literally 'half moons') arrived in Argentina with Italian and French immigrants in the late 19th century. They evolved into something distinctly Argentine — smaller, sweeter, and glossier than French croissants, with a signature sugar syrup glaze. There are two types: 'de manteca' (butter, the premium version) and 'de grasa' (lard, more traditional). Every corner panadería makes them fresh daily, and no Argentine breakfast is complete without them alongside café con leche.",
    whereToFind: [
      "Any panadería (bakery) in Argentina — they're everywhere",
      "Café Tortoni (Buenos Aires) — classic experience",
      "Le Pain Quotidien (Buenos Aires) — upscale version",
      "La Giralda (Buenos Aires) — famous for their chocolate con churros and medialunas"
    ],
    storageInstructions: "Best eaten the day they're made. Freeze unbaked medialunas for up to 1 month — thaw overnight and bake fresh. Day-old medialunas can be refreshed in a 350°F oven for 5 minutes.",
    ingredients: [
      {
        section: "Dough",
        items: [
          "500g (4 cups) all-purpose flour",
          "60g (1/4 cup) sugar",
          "10g (1.5 tsp) salt",
          "15g (2 packets) active dry yeast",
          "200ml (3/4 cup + 2 tbsp) warm milk",
          "2 eggs",
          "50g (3.5 tbsp) softened butter"
        ]
      },
      {
        section: "Butter block",
        items: [
          "250g (1 cup + 2 tbsp) cold butter, shaped into a flat rectangle"
        ]
      },
      {
        section: "Syrup glaze",
        items: [
          "200g (1 cup) sugar",
          "100ml (1/3 cup + 1 tbsp) water",
          "1 tsp vanilla extract"
        ]
      }
    ],
    instructions: [
      "Dissolve yeast in warm milk with a pinch of sugar. Let sit 10 minutes until foamy.",
      "In a large bowl, combine flour, sugar, and salt. Add yeast mixture, eggs, and softened butter.",
      "Knead for 10 minutes until smooth and elastic. The dough should be slightly tacky.",
      "Cover and refrigerate for 1 hour.",
      "Roll the cold dough into a large rectangle. Place the butter block in the center.",
      "Fold the dough over the butter (like a letter), enclosing it completely.",
      "Roll out and fold in thirds. Wrap and refrigerate 30 minutes. Repeat this 2 more times.",
      "After the final fold and rest, roll the dough to 5mm (1/4 inch) thickness.",
      "Cut into triangles (base about 10cm/4 inches wide).",
      "Roll each triangle from base to tip, curving the ends into a crescent shape.",
      "Place on lined baking sheets, cover, and let rise 1-2 hours until doubled.",
      "Brush with egg wash (1 egg beaten with 1 tbsp milk).",
      "Bake at 200°C (400°F) for 15-18 minutes until deep golden.",
      "While baking, make the syrup: boil sugar and water until slightly thickened, add vanilla.",
      "Brush hot medialunas generously with the sugar syrup immediately after baking.",
      "Let cool slightly before serving — they're best warm."
    ],
    tips: [
      "Keep the butter cold during lamination — if it softens, put everything back in the fridge.",
      "The sugar syrup glaze is what makes medialunas different from croissants — don't skip it.",
      "The dough should be less buttery than French croissant dough — medialunas are a bit more bread-like.",
      "Real panaderías use a mix of butter and lard ('de grasa') for a more traditional flavor.",
      "Don't over-proof — they should be puffy but not fragile, or they'll collapse in the oven.",
      "Eat with café con leche for the authentic Argentine breakfast experience."
    ]
  },
  {
    slug: "flan-casero",
    name: "Flan Casero with Dulce de Leche",
    spanishName: "Flan Casero con Dulce de Leche",
    description: "Argentina's most popular dessert — a silky, caramel-topped custard served with a generous spoonful of dulce de leche and whipped cream. Found on every restaurant menu in the country.",
    seoKeywords: ["flan casero recipe", "argentine flan", "flan con dulce de leche", "flan recipe easy", "argentine dessert"],
    category: "dessert",
    region: "National",
    difficulty: "medium",
    prepTime: "15 min",
    cookTime: "1 hour",
    totalTime: "5 hours (including chilling)",
    servings: 8,
    image: "/images/recipes/flan-casero.webp",
    calories: 280,
    protein: 8,
    carbs: 38,
    fat: 11,
    history: "Flan came to Argentina from Spain, but Argentines elevated it by pairing it with their beloved dulce de leche. In restaurants, you'll always be asked the critical question: '¿Mixto?' — meaning 'do you want it with both dulce de leche AND whipped cream?' The correct answer is always yes. Flan casero (homemade) is a point of pride for Argentine home cooks, and every family claims their recipe is the best.",
    whereToFind: [
      "Literally every parrilla and restaurant in Argentina",
      "El Desnivel (San Telmo) — classic flan after a steak",
      "El Obrero (La Boca) — legendary old-school restaurant",
      "Any 'bodegón' (casual neighborhood restaurant)"
    ],
    storageInstructions: "Refrigerate for up to 3 days in the mold. Unmold only when ready to serve. Once unmolded, serve within a few hours.",
    winePairing: "Late harvest Torrontés or a Muscatel from Mendoza",
    ingredients: [
      {
        section: "Caramel",
        items: [
          "200g (1 cup) white sugar",
          "3 tbsp water",
          "1 tsp lemon juice"
        ]
      },
      {
        section: "Custard",
        items: [
          "6 large eggs",
          "1 liter (4 cups) whole milk",
          "200g (1 cup) sugar",
          "2 tsp vanilla extract",
          "Zest of 1 lemon (optional)"
        ]
      },
      {
        section: "Serving",
        items: [
          "Dulce de leche (generous amount)",
          "Whipped cream"
        ]
      }
    ],
    instructions: [
      "Make the caramel: Combine sugar, water, and lemon juice in a saucepan over medium heat.",
      "Swirl the pan (don't stir) until the sugar turns deep amber, about 5-7 minutes.",
      "Immediately pour the caramel into a flan mold or individual ramekins, tilting to coat the bottom evenly.",
      "Let caramel harden while you prepare the custard.",
      "Heat milk in a saucepan until warm (not boiling). Remove from heat.",
      "In a large bowl, whisk eggs and sugar together until well combined — don't over-whisk or create foam.",
      "Slowly pour the warm milk into the egg mixture, stirring constantly.",
      "Add vanilla and lemon zest. Strain through a fine sieve to remove any lumps.",
      "Pour the custard into the caramel-lined mold.",
      "Place the mold in a larger baking dish. Fill the outer dish with hot water to reach halfway up the flan mold (baño María).",
      "Bake at 160°C (325°F) for 50-60 minutes until set but slightly jiggly in the center.",
      "Remove from water bath, cool to room temperature, then refrigerate at least 4 hours.",
      "To unmold: Run a knife around the edge, place a plate on top, and flip. The caramel will cascade over the flan.",
      "Serve with a generous spoon of dulce de leche and a dollop of whipped cream."
    ],
    tips: [
      "Don't stir the caramel — swirl the pan gently. Stirring causes crystallization.",
      "Strain the custard to catch any bits of egg that didn't fully incorporate — this is key for silky texture.",
      "The water bath (baño María) is essential — it prevents the edges from overcooking.",
      "The flan should wobble like jello when done. If it's firm throughout, it's overcooked.",
      "When ordering in a restaurant, always say 'mixto' — you want dulce de leche AND crema.",
      "Chill thoroughly before unmolding — at least 4 hours, ideally overnight."
    ]
  },
  {
    slug: "matambre-arrollado",
    name: "Matambre Arrollado",
    spanishName: "Matambre Arrollado",
    description: "A spectacular Argentine party dish — thin flank steak rolled around a colorful filling of hard-boiled eggs, roasted peppers, olives, and herbs, then braised until tender. Served cold in beautiful pinwheel slices.",
    seoKeywords: ["matambre arrollado recipe", "argentine rolled flank steak", "matambre recipe", "argentine party food", "cold meat roll argentina"],
    category: "main",
    region: "Pampas (Buenos Aires Province)",
    difficulty: "hard",
    prepTime: "45 min",
    cookTime: "2 hours",
    totalTime: "6 hours (including chilling)",
    servings: 10,
    image: "/images/recipes/matambre-arrollado.webp",
    calories: 320,
    protein: 28,
    carbs: 5,
    fat: 22,
    history: "Matambre literally means 'mata hambre' — 'hunger killer.' It's the thin cut of meat between the hide and the ribs of the cow. In Argentina, matambre arrollado is a traditional cold appetizer served at celebrations, holidays, and family gatherings. The dish showcases the Argentine tradition of turning simple ingredients into something spectacular through patience and skill. Every family has their own filling combination.",
    whereToFind: [
      "Most rotiserías (deli/takeaway shops) sell it ready-made",
      "Traditional parrillas serve it as a cold appetizer",
      "Homemade at family celebrations and holidays"
    ],
    storageInstructions: "Refrigerate wrapped in plastic for up to 4 days. Slice cold just before serving. Do not freeze — the texture suffers.",
    winePairing: "Bonarda from San Juan or a light Pinot Noir",
    ingredients: [
      {
        section: "Main",
        items: [
          "1 matambre (thin flank steak), about 1.5 kg, pounded to even thickness",
          "3 hard-boiled eggs, halved lengthwise",
          "2 roasted red bell peppers, cut into strips",
          "1 large carrot, blanched and cut into strips",
          "1/2 cup green olives, pitted",
          "4 cloves garlic, minced",
          "1/4 cup fresh parsley, chopped",
          "1 tbsp dried oregano",
          "Salt and pepper to taste",
          "1/4 cup red wine vinegar"
        ]
      },
      {
        section: "Braising liquid",
        items: [
          "1 cup beef broth",
          "1 cup white wine",
          "1 onion, quartered",
          "2 bay leaves",
          "Salt and peppercorns"
        ]
      }
    ],
    instructions: [
      "Lay the matambre flat on a clean surface. Season with salt, pepper, garlic, oregano, and vinegar.",
      "Let marinate for 30 minutes at room temperature.",
      "Arrange the filling in rows along the length of the meat: egg halves, pepper strips, carrot strips, olives.",
      "Sprinkle parsley over the entire surface.",
      "Roll the matambre tightly from the long side, tucking the filling as you go.",
      "Tie securely with kitchen twine at 2-inch intervals. Wrap tightly in cheesecloth or muslin.",
      "Place in a large pot with the braising liquid ingredients. The liquid should cover the roll.",
      "Bring to a simmer over medium heat. Reduce to low and cook gently for 1.5-2 hours.",
      "Remove from liquid and let cool for 30 minutes.",
      "While still warm, place a heavy weight on top (a cutting board with cans works) to compress the roll.",
      "Refrigerate under the weight for at least 4 hours, ideally overnight.",
      "Remove twine and cheesecloth. Slice into 1cm rounds to reveal the beautiful pinwheel pattern.",
      "Arrange on a platter and serve at room temperature with chimichurri on the side."
    ],
    tips: [
      "Ask your butcher for matambre — if they don't have it, flank steak pounded thin works.",
      "The rolling is the hardest part — don't worry if some filling falls out, just tuck it back in.",
      "The weight during chilling is essential — it compresses the roll so slices hold together.",
      "Slice with a very sharp knife for clean, beautiful rounds.",
      "This is a make-ahead dish — it actually tastes better the next day.",
      "Serve with chimichurri and crusty bread as a starter."
    ]
  },
  {
    slug: "carbonada",
    name: "Carbonada Criolla",
    spanishName: "Carbonada Criolla",
    description: "A hearty Argentine stew of beef, corn, squash, potatoes, and dried fruits — traditionally served in a hollowed-out pumpkin. A warming dish from the interior provinces that's perfect for winter.",
    seoKeywords: ["carbonada recipe", "argentine stew", "carbonada criolla", "beef stew argentina", "pumpkin stew argentine"],
    category: "stew",
    region: "Interior (Northwest, Cuyo)",
    difficulty: "medium",
    prepTime: "30 min",
    cookTime: "1.5 hours",
    totalTime: "2 hours",
    servings: 6,
    image: "/images/recipes/carbonada.webp",
    calories: 420,
    protein: 25,
    carbs: 48,
    fat: 16,
    history: "Carbonada is a criollo dish that dates back to colonial Argentina, blending Indigenous and Spanish cooking traditions. The combination of savory meat with sweet fruits (peaches, dried apricots) reflects the Moorish influence that came through Spain. It's traditionally served in a hollowed-out zapallo (pumpkin), which acts as both cooking vessel and serving bowl. The pumpkin flesh is scooped out and eaten with the stew.",
    whereToFind: [
      "Restaurants in the Northwest provinces (Salta, Tucumán)",
      "Traditional bodegones in Buenos Aires during winter",
      "Homemade — this is primarily a home-cooking tradition"
    ],
    storageInstructions: "Refrigerate for up to 3 days. The flavor improves the next day. Freeze for up to 2 months.",
    winePairing: "Malbec from Mendoza or Cabernet Sauvignon from San Juan",
    ingredients: [
      {
        section: "Main",
        items: [
          "600g (1.3 lbs) beef chuck, cut into 2cm cubes",
          "2 tbsp vegetable oil",
          "1 large onion, diced",
          "2 cloves garlic, minced",
          "2 ripe tomatoes, diced",
          "2 medium potatoes, peeled and cubed",
          "1 sweet potato, peeled and cubed",
          "300g butternut squash, cubed",
          "2 ears corn, cut into rounds",
          "1/2 cup dried peaches or apricots, halved",
          "1 cup beef broth",
          "1 tsp ground cumin",
          "1 tsp smoked paprika",
          "1 tsp dried oregano",
          "Salt and pepper to taste",
          "Fresh parsley for garnish"
        ]
      }
    ],
    instructions: [
      "Heat oil in a large, heavy-bottomed pot over medium-high heat.",
      "Season beef cubes with salt, pepper, and cumin. Brown in batches, setting aside.",
      "In the same pot, sauté onion until softened, about 5 minutes. Add garlic and cook 1 minute.",
      "Add tomatoes and cook until they break down, about 5 minutes.",
      "Return beef to the pot. Add paprika and oregano, stir to combine.",
      "Pour in beef broth and bring to a simmer.",
      "Add potatoes, sweet potato, and squash. Cover and simmer 30 minutes.",
      "Add corn rounds and dried fruit. Continue simmering uncovered for 30-40 minutes.",
      "The stew is ready when the beef is tender and the vegetables have partially broken down to thicken the broth.",
      "Season to taste with salt and pepper. Garnish with fresh parsley.",
      "For presentation, serve inside a hollowed-out roasted pumpkin if desired."
    ],
    tips: [
      "The dried fruit is not optional — the sweet-savory contrast is what defines carbonada.",
      "Don't cut the vegetables too small — they should hold their shape and provide texture.",
      "If you can find a large zapallo (Argentine pumpkin), hollow it out, roast at 180°C for 30 minutes, then pour the stew inside to serve.",
      "This stew is better the next day — make it ahead for dinner parties.",
      "You can substitute fresh peaches (in season) for dried — add them in the last 15 minutes."
    ]
  },
  {
    slug: "milanesa-napolitana",
    name: "Milanesa a la Napolitana",
    spanishName: "Milanesa a la Napolitana",
    description: "Argentina's answer to chicken parm — a breaded cutlet topped with tomato sauce, ham, and melted mozzarella. Despite the name, it has nothing to do with Naples. Pure Argentine comfort food.",
    seoKeywords: ["milanesa napolitana recipe", "argentine breaded cutlet", "milanesa a la napolitana", "milanesa con queso", "argentine comfort food"],
    category: "main",
    region: "National (invented in Buenos Aires)",
    difficulty: "medium",
    prepTime: "20 min",
    cookTime: "25 min",
    totalTime: "45 min",
    servings: 4,
    image: "/images/recipes/milanesa-napolitana.webp",
    calories: 580,
    protein: 38,
    carbs: 35,
    fat: 32,
    history: "Despite the Italian-sounding name, milanesa a la napolitana was invented in Buenos Aires in the 1940s by chef José Napoli at the restaurant Nápoli on Avenida Corrientes. He topped a breaded cutlet with ham, cheese, and tomato sauce — and a porteño classic was born. The name honors the restaurant, not the Italian city. It remains one of the most ordered dishes in Argentine restaurants today.",
    whereToFind: [
      "El Cuartito (Talcahuano 937, BA) — legendary since 1934",
      "Every bodegón and parrilla in Buenos Aires",
      "Any restaurant with 'minutas' on the menu"
    ],
    storageInstructions: "Best eaten fresh. Leftover breaded cutlets (without topping) can be frozen for up to 2 months. Reheat in a 200°C oven.",
    winePairing: "Young Malbec or Bonarda",
    ingredients: [
      {
        section: "Milanesas",
        items: [
          "4 thin beef or chicken cutlets (about 200g each), pounded thin",
          "2 eggs, beaten",
          "2 cups breadcrumbs",
          "Salt, pepper, garlic powder to taste",
          "Oil for frying"
        ]
      },
      {
        section: "Napolitana topping",
        items: [
          "1 cup tomato sauce (salsa de tomate)",
          "4 slices cooked ham (jamón cocido)",
          "200g mozzarella cheese, sliced",
          "1 tsp dried oregano",
          "Olives and roasted peppers for garnish (optional)"
        ]
      }
    ],
    instructions: [
      "Season the cutlets with salt, pepper, and garlic powder.",
      "Dip each cutlet in beaten egg, then press firmly into breadcrumbs on both sides.",
      "Heat oil in a large skillet over medium-high heat (about 1cm deep).",
      "Fry each milanesa for 2-3 minutes per side until golden and crispy. Drain on paper towels.",
      "Place fried milanesas on a baking sheet.",
      "Spoon tomato sauce over each milanesa.",
      "Top with a slice of ham, then mozzarella slices.",
      "Sprinkle with oregano.",
      "Broil in the oven at 200°C (400°F) for 5-7 minutes until cheese is melted and bubbly.",
      "Serve immediately with french fries (papas fritas) — the mandatory accompaniment."
    ],
    tips: [
      "Pound the cutlets thin and even — they should be about 5mm thick.",
      "Double-dip for extra crunch: egg → breadcrumbs → egg → breadcrumbs.",
      "Fry first, THEN add toppings and bake. Never skip the frying step.",
      "The tomato sauce should be simple — not chunky marinara. Argentine salsa de tomate is smooth.",
      "French fries are non-negotiable. A napolitana without papas fritas is incomplete.",
      "Some restaurants offer 'a caballo' — topped with a fried egg. Highly recommended."
    ]
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipeSlugs(): string[] {
  return recipes.map((recipe) => recipe.slug);
}

export function getRecipesByCategory(category: Recipe["category"]): Recipe[] {
  return recipes.filter((recipe) => recipe.category === category);
}

export function getRecipesByDifficulty(difficulty: Recipe["difficulty"]): Recipe[] {
  return recipes.filter((recipe) => recipe.difficulty === difficulty);
}