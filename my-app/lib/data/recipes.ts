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
    history: "Flan came to Argentina from Spain, but Argentines made it their own by pairing it with their beloved dulce de leche. In restaurants, you'll always be asked the critical question: '¿Mixto?' — meaning 'do you want it with both dulce de leche AND whipped cream?' The correct answer is always yes. Flan casero (homemade) is a point of pride for Argentine home cooks, and every family claims their recipe is the best.",
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
  },
  {
    slug: "fugazzeta",
    name: "Fugazzeta",
    spanishName: "Fugazzeta",
    description: "A thick double-crust Argentine pizza stuffed with oozing mozzarella cheese and topped with sweet caramelized onions. Born in the pizzerías of Buenos Aires, fugazzeta is the ultimate expression of Italian-Argentine pizza culture.",
    seoKeywords: ["fugazzeta recipe", "argentine pizza", "stuffed onion pizza", "fugazzeta argentina", "buenos aires pizza"],
    category: "main",
    region: "Buenos Aires",
    difficulty: "medium",
    prepTime: "30 min",
    cookTime: "25 min",
    totalTime: "2 hrs (including rising)",
    servings: 6,
    image: "/images/recipes/fugazzeta.webp",
    calories: 480,
    protein: 22,
    carbs: 52,
    fat: 22,
    history: "Fugazzeta evolved from the Italian fugazza (focaccia with onions), brought to Buenos Aires by Genovese immigrants in the late 1800s. Porteño pizzerias added a second layer of dough and stuffed it with mozzarella, creating something entirely new. The iconic Pizzería Güerrín on Corrientes Avenue has served fugazzeta since 1932 and remains one of the best places to try it.",
    whereToFind: [
      "Pizzería Güerrín (Av. Corrientes 1368, BA) — legendary since 1932",
      "El Cuartito (Talcahuano 937, BA) — classic porteño pizzería",
      "Banchero (Av. Corrientes 1300, BA) — claims to have invented fugazzeta"
    ],
    storageInstructions: "Refrigerate leftover slices for up to 2 days. Reheat in a 400°F (200°C) oven for 8-10 minutes until cheese is melted again. Do not microwave — the crust will go soggy.",
    winePairing: "Young Bonarda or a cold Quilmes lager",
    ingredients: [
      {
        section: "For the dough",
        items: [
          "500g (4 cups) bread flour",
          "325ml (1⅓ cups) warm water",
          "10g (1 packet) active dry yeast",
          "2 tbsp olive oil",
          "1 tsp sugar",
          "1½ tsp salt"
        ]
      },
      {
        section: "For the filling and topping",
        items: [
          "400g (14 oz) low-moisture mozzarella, shredded",
          "4 large white onions, thinly sliced into rings",
          "3 tbsp olive oil (for caramelizing onions)",
          "1 tsp dried oregano",
          "Coarse salt for finishing"
        ]
      }
    ],
    instructions: [
      "Dissolve yeast and sugar in warm water. Let stand 10 minutes until foamy. Add olive oil.",
      "Combine flour and salt in a large bowl. Add the yeast mixture and stir until a shaggy dough forms. Knead on a floured surface for 10 minutes until smooth and elastic.",
      "Place dough in an oiled bowl, cover with a damp towel, and let rise in a warm spot for 1 hour until doubled.",
      "While dough rises, caramelize the onions: heat olive oil in a large skillet over medium-low heat. Add sliced onions with a pinch of salt and cook slowly for 25-30 minutes, stirring occasionally, until deep golden and sweet. Set aside.",
      "Punch down the dough and divide into two pieces — one slightly larger than the other. Roll the larger piece into a circle and press into an oiled 14-inch round baking pan, pushing dough up the sides.",
      "Spread all the shredded mozzarella evenly over the bottom crust.",
      "Roll out the second piece of dough and lay it over the cheese. Press the edges together firmly to seal, crimping all around.",
      "Spread the caramelized onions generously over the top crust. Drizzle with olive oil and sprinkle with oregano and coarse salt.",
      "Bake at 450°F (230°C) on the lowest oven rack for 20-25 minutes until the crust is golden and the cheese is visibly melted and bubbling at the edges.",
      "Let rest 5 minutes before slicing into squares (porteño style, not triangles)."
    ],
    tips: [
      "The dough should be wetter and softer than Italian pizza dough — this gives it the characteristic thick, bready texture of Buenos Aires pizza.",
      "Caramelizing the onions properly is non-negotiable. Low heat and patience turn them from harsh to sweet and jammy.",
      "Seal the edges well or the melted cheese will escape during baking."
    ]
  },
  {
    slug: "faina",
    name: "Fainá",
    spanishName: "Fainá",
    description: "A thin, crispy chickpea flour flatbread that's the classic companion to Buenos Aires pizza. Served as a slab placed directly on top of a pizza slice — a combination that every porteño knows and loves.",
    seoKeywords: ["faina recipe", "argentine faina", "chickpea flatbread", "faina buenos aires", "faina pizza"],
    category: "appetizer",
    region: "Buenos Aires",
    difficulty: "easy",
    prepTime: "10 min",
    cookTime: "20 min",
    totalTime: "1 hr 30 min (including resting)",
    servings: 6,
    image: "/images/recipes/faina.webp",
    calories: 190,
    protein: 7,
    carbs: 22,
    fat: 9,
    history: "Fainá comes from the Genovese farinata, a chickpea flatbread that Italian immigrants brought to Argentina in the late 1800s. In Genoa it was poor people's food; in Buenos Aires it became a beloved companion to pizza. The tradition of placing a slice of fainá on top of a slice of pizza is uniquely Argentine — you'll see it in every pizzería in the city. It's always ordered by the slice, standing at the counter.",
    whereToFind: [
      "Every pizzería in Buenos Aires sells fainá by the slice",
      "Pizzería Güerrín (Av. Corrientes 1368) — eat standing at the counter",
      "El Cuartito (Talcahuano 937) — classic pairing with muzzarella pizza"
    ],
    storageInstructions: "Best eaten fresh and hot. Leftovers can be reheated in a very hot oven for 5 minutes but will lose some crispness. Does not freeze well.",
    winePairing: "Cold beer or house wine (vino de la casa)",
    ingredients: [
      {
        items: [
          "2 cups (200g) chickpea flour (harina de garbanzos)",
          "2 cups (475ml) water",
          "3 tbsp olive oil (plus more for the pan)",
          "1 tsp salt",
          "1/2 tsp black pepper"
        ]
      }
    ],
    instructions: [
      "Whisk chickpea flour and water together in a bowl until completely smooth with no lumps. Stir in olive oil, salt, and pepper.",
      "Cover the batter and let it rest at room temperature for at least 1 hour. This hydrates the chickpea flour and improves texture. Skim off any foam that forms on top.",
      "Preheat oven to 475°F (245°C). Place a 14-inch round baking pan or cast-iron skillet in the oven to heat for 10 minutes.",
      "Carefully remove the hot pan and coat generously with olive oil.",
      "Pour the batter into the hot, oiled pan — it should sizzle. The batter should be about 1/4 inch thick.",
      "Bake on the top rack for 15-20 minutes until the surface is golden and slightly crackled, with darker spots around the edges.",
      "Remove and let cool for 2 minutes. Cut into slices and serve immediately.",
      "To eat like a true porteño, place a slice of fainá directly on top of a slice of muzzarella pizza."
    ],
    tips: [
      "The resting time is essential — skipping it results in a gritty texture. One hour minimum, two hours is even better.",
      "The pan must be screaming hot when you pour in the batter — this is what creates the crispy bottom.",
      "Fainá should be thin (under 1/4 inch). If it's thick, it becomes cakey instead of crispy."
    ]
  },
  {
    slug: "chocotorta",
    name: "Chocotorta",
    spanishName: "Chocotorta",
    description: "Argentina's most popular no-bake cake — layers of chocolate cookies soaked in coffee and sandwiched with a rich dulce de leche and cream cheese filling. Every Argentine has made this at least once, and it requires zero baking skills.",
    seoKeywords: ["chocotorta recipe", "argentine chocolate cake", "no bake cake argentina", "chocotorta argentina", "chocolinas cake"],
    category: "dessert",
    region: "Buenos Aires",
    difficulty: "easy",
    prepTime: "20 min",
    cookTime: "0 min",
    totalTime: "4 hrs 20 min (including chilling)",
    servings: 8,
    image: "/images/recipes/chocotorta.webp",
    calories: 420,
    protein: 8,
    carbs: 52,
    fat: 22,
    history: "Chocotorta was invented in the 1982 by a creative team at an Argentine ad agency as a recipe to promote Chocolinas brand cookies. The recipe appeared on the back of the Chocolinas box and spread like wildfire through Argentine households. It became so iconic that Chocolinas cookies are now sold primarily for making chocotorta. It's the default birthday cake for anyone who can't (or won't) bake.",
    whereToFind: [
      "Homemade at every Argentine birthday party and gathering",
      "Some bakeries sell individual portions",
      "Rapanui chocolate shops offer premium versions"
    ],
    storageInstructions: "Refrigerate for up to 5 days. The cake actually improves after a day as the cookies fully soften. Can be frozen for up to 1 month — thaw in the fridge overnight.",
    winePairing: "Coffee, or a late-harvest Malbec",
    ingredients: [
      {
        items: [
          "3 packages Chocolinas cookies (or any plain chocolate cookies, about 500g total)",
          "400g (14 oz) dulce de leche",
          "300g (10.5 oz) cream cheese, softened",
          "1 cup (240ml) strong coffee or espresso, cooled",
          "Cocoa powder or chocolate shavings for topping"
        ]
      }
    ],
    instructions: [
      "Brew a cup of strong coffee or espresso and let it cool to room temperature.",
      "In a large bowl, mix the cream cheese and dulce de leche together until completely smooth and well combined. This is your filling.",
      "Briefly dip each chocolate cookie into the coffee — just a quick dunk, about 1-2 seconds per side. Don't soak them or they'll fall apart.",
      "Arrange a layer of coffee-dipped cookies in the bottom of a rectangular dish or springform pan, breaking cookies to fill gaps.",
      "Spread a generous layer of the dulce de leche and cream cheese filling over the cookies.",
      "Repeat layers — dipped cookies, then filling — until you have 3-4 layers, ending with a filling layer on top.",
      "Smooth the top layer and dust generously with cocoa powder or top with chocolate shavings.",
      "Cover with plastic wrap and refrigerate for at least 4 hours, preferably overnight. The cookies need time to soften and meld with the filling."
    ],
    tips: [
      "The coffee dip is quick — one Mississippi per side. Over-soaked cookies make a mushy cake.",
      "If you can't find Chocolinas, any plain chocolate cookie or chocolate graham cracker works. Oreos without the filling are a popular substitute outside Argentina.",
      "Make it the night before — chocotorta always tastes better the next day when everything has melded together."
    ]
  },
  {
    slug: "budin-de-pan",
    name: "Budín de Pan",
    spanishName: "Budín de Pan",
    description: "Argentina's beloved bread pudding — a custardy, caramel-topped dessert that transforms stale bread into pure comfort. Every Argentine grandmother has her own version, and it's the ultimate waste-nothing recipe.",
    seoKeywords: ["budin de pan recipe", "argentine bread pudding", "budin de pan argentino", "caramel bread pudding", "dulce de leche bread pudding"],
    category: "dessert",
    region: "Nationwide",
    difficulty: "easy",
    prepTime: "20 min",
    cookTime: "50 min",
    totalTime: "5 hrs (including chilling)",
    servings: 8,
    image: "/images/recipes/budin-de-pan.webp",
    calories: 340,
    protein: 10,
    carbs: 48,
    fat: 13,
    history: "Budín de pan is the quintessential Argentine thrift dessert, born from the tradition of never wasting food. Every household accumulated stale bread, and resourceful cooks turned it into this rich custard dessert. Italian and Spanish immigrants both had similar traditions, and the Argentine version merged them, adding the ever-present dulce de leche as a topping. It remains a staple of Sunday family lunches and neighborhood bakeries.",
    whereToFind: [
      "Every panadería (bakery) and rotisería in Argentina",
      "Traditional bodegones and neighborhood restaurants",
      "Homemade — this is classic grandmother cooking"
    ],
    storageInstructions: "Refrigerate covered for up to 4 days. Serve cold or at room temperature. Can be frozen for up to 2 months — thaw in the refrigerator overnight.",
    winePairing: "Late-harvest Torrontés or a glass of sweet Moscatel",
    ingredients: [
      {
        section: "Caramel",
        items: [
          "150g (3/4 cup) sugar",
          "2 tbsp water"
        ]
      },
      {
        section: "Pudding",
        items: [
          "300g (about 6 cups) stale bread, torn into pieces (French bread or white bread)",
          "750ml (3 cups) whole milk",
          "4 large eggs",
          "150g (3/4 cup) sugar",
          "1 tsp vanilla extract",
          "Zest of 1 lemon",
          "3 tbsp dulce de leche (for serving)"
        ]
      }
    ],
    instructions: [
      "Tear the stale bread into small pieces and place in a large bowl. Pour warm milk over the bread and let it soak for 30 minutes until completely soft.",
      "Meanwhile, make the caramel: heat sugar and water in a saucepan over medium heat, swirling (don't stir) until it turns deep amber. Pour into a loaf pan or bundt mold, tilting to coat the bottom and sides. Let harden.",
      "Preheat oven to 350°F (180°C).",
      "Mash the soaked bread and milk together with a fork until you have a smooth, porridge-like consistency.",
      "In a separate bowl, whisk eggs with sugar, vanilla, and lemon zest.",
      "Combine the egg mixture with the bread mixture, stirring well until fully incorporated.",
      "Pour into the caramel-lined mold. Place the mold in a larger baking dish and fill the outer dish with hot water halfway up the sides (baño María).",
      "Bake for 45-50 minutes until set and a knife inserted in the center comes out clean.",
      "Let cool completely, then refrigerate for at least 4 hours or overnight.",
      "To unmold, run a knife around the edges and invert onto a plate. The caramel will flow over the pudding.",
      "Serve slices drizzled with dulce de leche."
    ],
    tips: [
      "The bread must be truly stale — fresh bread has too much moisture and makes a gummy pudding. Leave bread out uncovered for a day or two.",
      "The water bath (baño María) is essential for even, gentle cooking. Without it, the edges will overcook while the center stays raw.",
      "Some families add raisins soaked in rum — a delicious addition if you like dried fruit."
    ]
  },
  {
    slug: "tamales-nortenos",
    name: "Tamales Norteños",
    spanishName: "Tamales Norteños",
    description: "Northern Argentine tamales made with corn dough stuffed with spiced beef, wrapped in dried corn husks and steamed. A labor-intensive dish traditionally made in large batches by the whole family.",
    seoKeywords: ["tamales nortenos recipe", "argentine tamales", "tamales argentinos", "tamales salteños", "northern argentine tamales"],
    category: "main",
    region: "Northwest (Salta, Jujuy)",
    difficulty: "hard",
    prepTime: "1 hr 30 min",
    cookTime: "2 hrs",
    totalTime: "3.5 hrs",
    servings: 12,
    image: "/images/recipes/tamales-nortenos.webp",
    calories: 380,
    protein: 18,
    carbs: 42,
    fat: 16,
    history: "Tamales have been made in the Argentine northwest for centuries, predating Spanish colonization. The Diaguita and other indigenous peoples wrapped corn paste around wild game and cooked it in embers. Spanish colonists added beef and pork, and the tamaleada — a communal tamal-making gathering — became a social tradition. In Salta and Jujuy, families still make hundreds of tamales in a single session, with everyone assigned a role: mixing, filling, wrapping, or tying.",
    whereToFind: [
      "Markets in Salta and Jujuy — sold by the dozen",
      "Feria de Mataderos in Buenos Aires (Sundays)",
      "Northwestern food festivals (especially during Carnival)"
    ],
    storageInstructions: "Refrigerate cooked tamales for up to 4 days. Freeze for up to 3 months. Reheat by steaming for 15-20 minutes from frozen.",
    winePairing: "Torrontés from the Calchaquí Valley",
    ingredients: [
      {
        section: "For the dough (masa)",
        items: [
          "500g (3½ cups) fine cornmeal (harina de maíz) or masa harina",
          "200ml (3/4 cup + 2 tbsp) beef broth, warm",
          "100g (7 tbsp) beef fat (grasa de pella) or lard, melted",
          "1 tsp salt",
          "1 tsp smoked paprika",
          "1/2 tsp ground cumin"
        ]
      },
      {
        section: "For the filling",
        items: [
          "500g (1 lb) beef chuck, cut into small cubes",
          "1 large onion, finely diced",
          "2 green onions (cebolla de verdeo), chopped",
          "2 tsp ground cumin",
          "2 tsp sweet paprika",
          "1 tsp red pepper flakes (ají molido)",
          "Salt and pepper to taste",
          "2 tbsp beef fat or oil for cooking"
        ]
      },
      {
        section: "For wrapping",
        items: [
          "24 large dried corn husks, soaked in hot water for 1 hour",
          "Kitchen twine or strips of corn husk for tying"
        ]
      }
    ],
    instructions: [
      "Prepare the filling first: heat beef fat in a skillet over medium heat. Brown the beef cubes in batches, then remove and set aside.",
      "In the same pan, sauté onion until soft. Add green onions, cumin, paprika, and red pepper flakes. Cook 2 minutes until fragrant.",
      "Return the beef to the pan, season with salt and pepper, add a splash of water, and simmer covered for 15 minutes. The beef should be tender but not falling apart. Let cool.",
      "Make the dough: combine cornmeal, salt, paprika, and cumin. Add melted beef fat and warm broth gradually, mixing with your hands until you have a soft, pliable dough that holds together. It should be the consistency of thick hummus.",
      "Drain the corn husks and pat dry. Lay two husks overlapping to form a wider surface.",
      "Spread about 3 tablespoons of dough onto the center of the husks, forming a rectangle about 4x3 inches.",
      "Place 2 tablespoons of the beef filling in the center of the dough.",
      "Fold one side of the husk over the filling, then the other side. Fold the bottom up and the top down to form a packet. Tie securely with twine or a strip of corn husk.",
      "Repeat with remaining dough and filling — you should get about 12 tamales.",
      "Stand the tamales upright in a large steamer pot (open end up). Steam over simmering water for 1.5-2 hours.",
      "The tamales are done when the dough pulls away cleanly from the husk when you peel one open.",
      "Let rest 10 minutes before serving. Unwrap at the table."
    ],
    tips: [
      "The fat in the dough is essential — it keeps the masa moist and prevents it from drying out during steaming. Don't reduce it.",
      "Make tamales as a group activity — it's the traditional way and much more efficient (and fun) with extra hands.",
      "If the dough feels dry, add more broth a tablespoon at a time. If too wet, add more cornmeal."
    ]
  },
  {
    slug: "submarino",
    name: "Submarino",
    spanishName: "Submarino",
    description: "Argentina's charming take on hot chocolate — a bar of dark chocolate 'submarined' into a cup of steaming hot milk, where it slowly melts as you stir. A café ritual loved by kids and adults alike.",
    seoKeywords: ["submarino recipe", "argentine hot chocolate", "submarino argentina", "chocolate con leche", "buenos aires cafe drink"],
    category: "dessert",
    region: "Nationwide",
    difficulty: "easy",
    prepTime: "2 min",
    cookTime: "5 min",
    totalTime: "7 min",
    servings: 1,
    image: "/images/recipes/submarino.webp",
    calories: 320,
    protein: 10,
    carbs: 32,
    fat: 18,
    history: "The submarino (literally 'submarine') is a beloved Argentine café tradition. Rather than pre-mixing cocoa powder into milk, cafés serve a cup of steaming hot milk with a bar of chocolate on the side. You plunge the chocolate into the milk — like a submarine diving — and stir as it melts. The ritual of watching the chocolate dissolve is half the pleasure. It's a winter staple in every confitería (café) in Argentina, and a rite of childhood.",
    whereToFind: [
      "Every confitería and café in Argentina",
      "Café Tortoni (Buenos Aires) — iconic setting",
      "Richmond Café (Florida street) — classic porteño experience"
    ],
    storageInstructions: "Must be consumed immediately — this is a made-to-order drink.",
    winePairing: "Pairs with medialunas (croissants) for a classic merienda",
    ingredients: [
      {
        items: [
          "250ml (1 cup) whole milk",
          "1 bar (40-50g) dark or milk chocolate (Águila brand is traditional)",
          "Sugar to taste (optional)"
        ]
      }
    ],
    instructions: [
      "Heat the milk in a small saucepan over medium heat until steaming hot but not boiling. Small bubbles should form around the edges.",
      "Pour the hot milk into a wide cup or mug.",
      "Place the chocolate bar on a small plate or saucer beside the cup.",
      "To drink, plunge the chocolate bar into the hot milk — the 'submarine' — and let it sit for 30 seconds.",
      "Stir gently with a spoon, watching the chocolate melt and swirl into the milk.",
      "Continue stirring until the chocolate is fully dissolved or enjoy it in stages, alternating between milky sips and chocolatey ones."
    ],
    tips: [
      "The quality of the chocolate bar makes all the difference. In Argentina, Águila chocolate bars are the classic choice. Use any good-quality chocolate with at least 50% cacao.",
      "Don't boil the milk — it needs to be hot enough to melt the chocolate but not scalded, which changes the taste.",
      "This is a ritual, not a recipe. The pleasure is in the slow melting and stirring. Don't rush it."
    ]
  },
  {
    slug: "fernet-con-coca",
    name: "Fernet con Coca",
    spanishName: "Fernet con Coca",
    description: "Argentina's unofficial national cocktail — bitter Fernet Branca mixed with Coca-Cola, served in a large glass and often shared among friends. An acquired taste that becomes an obsession.",
    seoKeywords: ["fernet con coca recipe", "argentine cocktail", "fernet branca coca cola", "fernet argentina", "cordoba drink"],
    category: "appetizer",
    region: "Córdoba (origin), Nationwide",
    difficulty: "easy",
    prepTime: "2 min",
    cookTime: "0 min",
    totalTime: "2 min",
    servings: 1,
    image: "/images/recipes/fernet-con-coca.webp",
    calories: 210,
    protein: 0,
    carbs: 28,
    fat: 0,
    history: "Fernet Branca is an Italian herbal bitter, but Argentina consumes more of it than Italy and the rest of the world combined. The tradition of mixing it with Coca-Cola started in Córdoba in the 1980s and spread nationwide. Today, Argentina consumes over 25 million liters of Fernet annually. In Córdoba, it's served in large shared glasses at parties (previas), and the person who mixes it holds a position of social responsibility — the ratio must be perfect.",
    whereToFind: [
      "Everywhere in Argentina — bars, clubs, house parties",
      "Córdoba is the spiritual home of fernet con coca",
      "Any kiosco sells the ingredients"
    ],
    storageInstructions: "Must be consumed immediately. Fernet Branca keeps indefinitely in the bottle.",
    winePairing: "This IS the drink — serve alongside asado, pizza, or during a previa (pre-party)",
    ingredients: [
      {
        items: [
          "60ml (2 oz) Fernet Branca",
          "200ml (7 oz) Coca-Cola (must be very cold, preferably from a glass bottle)",
          "Ice cubes",
          "Tall glass (a large cup or tumbler — traditionally shared)"
        ]
      }
    ],
    instructions: [
      "Fill a tall glass about one-third full with ice cubes.",
      "Pour the Fernet Branca over the ice. The traditional ratio is about 30% Fernet to 70% Coca-Cola, but this varies by preference.",
      "Slowly pour the cold Coca-Cola down the side of the glass to preserve carbonation. Don't dump it in — you'll lose the fizz.",
      "Stir gently once or twice with a spoon or straw. Don't over-stir.",
      "Serve immediately. In a social setting, pass the glass around — it's a communal drink.",
      "Take your first sip. If you're new to Fernet, start with less Fernet and more Coca-Cola."
    ],
    tips: [
      "The Coca-Cola MUST be ice cold and freshly opened — warm or flat Coca-Cola ruins the drink. Glass bottles are preferred over plastic for better carbonation.",
      "Your first fernet con coca will taste like mouthwash. By your third, you'll be hooked. Give it a chance.",
      "In Córdoba, the mixer is a position of honor at parties. Getting the ratio right is taken very seriously."
    ]
  },
  {
    slug: "pizza-argentina",
    name: "Pizza Argentina",
    spanishName: "Pizza de Muzzarella",
    description: "Buenos Aires-style pizza is nothing like its Italian ancestor — thick, bready crust piled high with an obscene amount of mozzarella cheese, with tomato sauce drizzled on top. Eaten standing at the counter with a slice of fainá on top.",
    seoKeywords: ["pizza argentina recipe", "buenos aires pizza", "argentine pizza", "pizza de muzzarella", "porteño pizza"],
    category: "main",
    region: "Buenos Aires",
    difficulty: "medium",
    prepTime: "30 min",
    cookTime: "25 min",
    totalTime: "2 hrs (including rising)",
    servings: 6,
    image: "/images/recipes/pizza-argentina.webp",
    calories: 520,
    protein: 24,
    carbs: 54,
    fat: 24,
    history: "Argentine pizza descended from the Neapolitan style brought by Italian immigrants, but evolved into something unrecognizable to Italians. The crust grew thicker and breadier, the cheese was piled on in massive quantities (always muzzarella, the Argentine spelling), and — heresy in Italy — the tomato sauce was often spooned on top of the cheese. The first porteño pizzerias opened in La Boca in the early 1900s, and the style quickly defined Buenos Aires street food culture.",
    whereToFind: [
      "Pizzería Güerrín (Av. Corrientes 1368, BA) — the cathedral of porteño pizza",
      "Banchero (Av. Corrientes 1300, BA) — since 1932",
      "El Cuartito (Talcahuano 937, BA) — open since 1934, walls covered in sports memorabilia"
    ],
    storageInstructions: "Refrigerate leftover slices for up to 2 days. Reheat in a hot oven (425°F/220°C) for 8-10 minutes. Porteño pizza actually reheats well due to its thick crust.",
    winePairing: "House red wine (vino tinto de la casa) or a cold beer",
    ingredients: [
      {
        section: "For the dough",
        items: [
          "500g (4 cups) bread flour",
          "325ml (1⅓ cups) warm water",
          "10g (1 packet) active dry yeast",
          "2 tbsp olive oil",
          "1 tsp sugar",
          "1½ tsp salt"
        ]
      },
      {
        section: "For the topping",
        items: [
          "500g (1 lb) low-moisture mozzarella, thickly sliced (not shredded)",
          "1 cup tomato sauce (smooth, not chunky)",
          "2 tbsp olive oil",
          "1 tsp dried oregano",
          "Green olives, halved (optional but traditional)"
        ]
      }
    ],
    instructions: [
      "Dissolve yeast and sugar in warm water. Let stand 10 minutes until foamy.",
      "Combine flour and salt in a large bowl. Add yeast mixture and olive oil. Mix until a dough forms, then knead for 10 minutes until smooth and elastic.",
      "Place in an oiled bowl, cover, and let rise 1 hour until doubled.",
      "Punch down and press the dough into an oiled 14-inch round baking pan, pushing it up the sides slightly. The dough should be about 1/2 inch thick — this is NOT thin crust pizza.",
      "Let the dough rest in the pan for 20 minutes for a second short rise.",
      "Layer thick slices of mozzarella over the entire surface, edge to edge. Argentine pizza is defined by its excessive cheese — don't be shy.",
      "Spoon tomato sauce in stripes or dollops on top of the cheese (yes, sauce goes ON TOP of the cheese — this is the Argentine way).",
      "Drizzle with olive oil, scatter green olives if using, and sprinkle with oregano.",
      "Bake at 450°F (230°C) on the lowest rack for 20-25 minutes until the crust is golden and the cheese is bubbling with golden spots.",
      "Let rest 5 minutes, then cut into squares — not triangles."
    ],
    tips: [
      "Argentine pizza is cut into squares (a la piedra), not triangles. Use kitchen scissors for clean cuts.",
      "The cheese should be sliced thick, not shredded — this creates the characteristic stretchy, gooey pull.",
      "Don't skimp on the cheese. If you think you've added enough, add more. This is Buenos Aires pizza, not a diet."
    ]
  },
  {
    slug: "bondiola",
    name: "Bondiola al Pan",
    spanishName: "Bondiola al Pan",
    description: "A slow-roasted pork shoulder sandwich that's one of Buenos Aires' best street foods. The bondiola is roasted for hours until falling-apart tender, then piled into crusty bread with chimichurri and salsa criolla.",
    seoKeywords: ["bondiola recipe", "argentine pork sandwich", "bondiola al pan", "street food buenos aires", "slow roast pork shoulder"],
    category: "main",
    region: "Buenos Aires",
    difficulty: "medium",
    prepTime: "20 min",
    cookTime: "3 hrs",
    totalTime: "3 hrs 20 min",
    servings: 8,
    image: "/images/recipes/bondiola.webp",
    calories: 520,
    protein: 32,
    carbs: 38,
    fat: 26,
    history: "Bondiola (pork shoulder or neck) became a street food star in Buenos Aires in the 2000s, as food truck and market culture grew. Vendors would slow-roast whole bondiolas over charcoal for hours, then carve them to order into crusty rolls. The trend exploded at events like Buenos Aires Market and Masticar food festival. Today, bondiola al pan stands are fixtures at outdoor markets, festivals, and the Costanera Sur waterfront.",
    whereToFind: [
      "Street food markets and festivals in Buenos Aires",
      "Costanera Sur food vendors",
      "Buenos Aires Market (rotating locations)",
      "Feria de Mataderos (Sundays)"
    ],
    storageInstructions: "Refrigerate cooked bondiola for up to 4 days. Reheat gently in a 300°F (150°C) oven wrapped in foil with a splash of broth. Shred and assemble sandwiches fresh.",
    winePairing: "Malbec from Mendoza or a cold craft beer",
    ingredients: [
      {
        section: "For the bondiola",
        items: [
          "1.5 kg (3.3 lbs) boneless pork shoulder (bondiola/coppa)",
          "4 cloves garlic, minced",
          "2 tbsp smoked paprika",
          "1 tbsp ground cumin",
          "1 tbsp dried oregano",
          "2 tbsp olive oil",
          "1 cup beef or chicken broth",
          "Salt and black pepper"
        ]
      },
      {
        section: "For serving",
        items: [
          "8 crusty bread rolls (pan francés)",
          "Chimichurri sauce",
          "Salsa criolla (diced onion, tomato, bell pepper in vinegar and oil)"
        ]
      }
    ],
    instructions: [
      "Score the surface of the pork shoulder in a crosshatch pattern, about 1/2 inch deep.",
      "Mix garlic, paprika, cumin, oregano, olive oil, salt, and pepper into a paste. Rub thoroughly all over the pork, pressing into the scores.",
      "Let the pork marinate at room temperature for 30 minutes (or overnight in the fridge for best results).",
      "Preheat oven to 325°F (160°C). Place the pork in a roasting pan and pour the broth around it.",
      "Cover tightly with foil and roast for 2 hours.",
      "Remove the foil, increase heat to 400°F (200°C), and roast another 45-60 minutes until the exterior is deeply caramelized and the internal temperature reaches 190°F (88°C).",
      "Rest the meat for 15 minutes, then shred or slice thickly against the grain.",
      "Toast the bread rolls lightly on the grill or in the oven.",
      "Pile shredded bondiola onto the bread, spoon chimichurri over the meat, and top with salsa criolla."
    ],
    tips: [
      "Low and slow is the key — rushing the cook at high heat will result in tough, dry pork. The long roast at low temperature renders the fat and collagen.",
      "Scoring the meat allows the spice rub to penetrate deeper and creates more crispy surface area.",
      "The bread matters — it needs to be crusty enough to hold up to the juicy meat without falling apart."
    ]
  },
  {
    slug: "matambre-a-la-pizza",
    name: "Matambre a la Pizza",
    spanishName: "Matambre a la Pizza",
    description: "A thin beef flank topped with tomato sauce, melted mozzarella, and olives — essentially pizza made on a steak instead of dough. A uniquely Argentine creation that's a staple of every parrilla.",
    seoKeywords: ["matambre a la pizza recipe", "argentine pizza steak", "matambre pizza", "grilled beef with cheese", "parrilla recipe"],
    category: "main",
    region: "Buenos Aires / Nationwide",
    difficulty: "medium",
    prepTime: "10 min",
    cookTime: "20 min",
    totalTime: "30 min",
    servings: 4,
    image: "/images/recipes/matambre-a-la-pizza.webp",
    calories: 480,
    protein: 38,
    carbs: 8,
    fat: 34,
    history: "Matambre a la pizza combines two Argentine obsessions: beef and pizza. The dish likely originated in the parrillas of Buenos Aires in the mid-20th century, where creative grill masters began topping the thin matambre cut with pizza ingredients. The name 'matambre' means 'hunger killer' (mata-hambre), referring to the thin layer of meat between the cow's hide and ribs. Topping it 'a la pizza' turned a simple cut into a restaurant favorite.",
    whereToFind: [
      "Every parrilla in Argentina has it on the menu",
      "Don Julio (Palermo) — premium version",
      "La Cabrera (Palermo) — another top-tier parrilla"
    ],
    storageInstructions: "Best eaten immediately off the grill. Leftovers can be refrigerated for 1-2 days and reheated in a hot oven.",
    winePairing: "Medium-bodied Malbec",
    ingredients: [
      {
        items: [
          "1 matambre (thin flank steak), about 800g, pounded to even thickness",
          "1 cup tomato sauce (smooth)",
          "250g (9 oz) mozzarella cheese, sliced",
          "1 tsp dried oregano",
          "Green olives, halved",
          "1 roasted red pepper, sliced (optional)",
          "Salt and pepper",
          "Olive oil"
        ]
      }
    ],
    instructions: [
      "Remove the matambre from the fridge 30 minutes before cooking. Season both sides with salt and pepper.",
      "Preheat your grill to high heat. If using an oven, preheat to 450°F (230°C).",
      "Grill the matambre for 4-5 minutes on the first side until nicely charred.",
      "Flip the steak. Immediately spoon tomato sauce over the cooked side.",
      "Layer mozzarella slices over the sauce. Add olive halves and roasted pepper if using.",
      "Sprinkle with oregano and drizzle with a touch of olive oil.",
      "Close the grill lid (or transfer to the oven) and cook for 5-7 minutes until the cheese is melted and bubbling and the meat is cooked through.",
      "Transfer to a cutting board. Let rest 3 minutes, then slice into strips and serve."
    ],
    tips: [
      "The matambre should be thin and even — ask your butcher to butterfly and pound it if needed. Uneven thickness means uneven cooking.",
      "Don't overcook the meat trying to melt the cheese — closing the grill lid or using the oven's broiler will melt the cheese without toughening the beef.",
      "This works on a home grill, cast-iron skillet (start stovetop, finish under broiler), or directly on a parrilla."
    ]
  },
  {
    slug: "revuelto-gramajo",
    name: "Revuelto Gramajo",
    spanishName: "Revuelto Gramajo",
    description: "Argentina's classic late-night scramble — thin shoestring fries, diced ham, and peas tossed with scrambled eggs. A beloved bar and restaurant dish that's the Argentine answer to 2 AM hunger.",
    seoKeywords: ["revuelto gramajo recipe", "argentine egg scramble", "gramajo recipe", "ham and egg dish argentina", "late night argentine food"],
    category: "main",
    region: "Buenos Aires",
    difficulty: "easy",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: "25 min",
    servings: 4,
    image: "/images/recipes/revuelto-gramajo.webp",
    calories: 420,
    protein: 18,
    carbs: 32,
    fat: 26,
    history: "Revuelto Gramajo is named after Colonel Artemio Gramajo, an aide-de-camp to President Julio Roca in the 1880s. Legend says Gramajo invented the dish at a Buenos Aires social club when he asked the kitchen to scramble whatever they had on hand — potatoes, ham, and eggs. Whether the story is true or not, the dish became a fixture of Argentine restaurant culture, particularly as a late-night dish after theater or nightlife.",
    whereToFind: [
      "Classic Buenos Aires restaurants and bodegones",
      "Available on most parrilla menus",
      "Traditional late-night dining spots along Av. Corrientes"
    ],
    storageInstructions: "Best eaten immediately. Does not store or reheat well — the potatoes lose their crispness.",
    winePairing: "A cold Quilmes lager or crisp white wine",
    ingredients: [
      {
        items: [
          "4 medium potatoes, peeled and cut into thin shoestring fries (or use frozen shoestring fries)",
          "200g (7 oz) cooked ham (jamón cocido), diced into small cubes",
          "6 large eggs",
          "1/2 cup green peas (fresh or frozen, blanched)",
          "2 tbsp butter",
          "Oil for frying potatoes",
          "Salt and pepper to taste"
        ]
      }
    ],
    instructions: [
      "Cut potatoes into thin shoestring strips (about matchstick size). Pat dry thoroughly with paper towels.",
      "Heat oil in a deep pan to 350°F (175°C). Fry the potato strips in batches until golden and crispy, about 3-4 minutes per batch. Drain on paper towels and season with salt.",
      "In a large skillet, melt butter over medium heat. Add diced ham and cook for 2 minutes until lightly golden.",
      "Add the green peas and stir for 1 minute.",
      "Beat the eggs lightly with salt and pepper. Pour into the skillet with the ham and peas.",
      "Stir gently with a spatula, cooking the eggs until they're just set but still soft and creamy — about 2 minutes. Do not overcook.",
      "Add the crispy shoestring fries and toss everything together quickly. The fries should stay mostly crispy.",
      "Serve immediately on warm plates."
    ],
    tips: [
      "The potatoes must be thin shoestring fries — thick-cut fries are wrong for this dish. They need to be crispy enough to hold up when tossed with the wet eggs.",
      "The eggs should be barely set — soft and creamy, not rubbery. Remove from heat while they still look slightly underdone; carry-over heat will finish them.",
      "Frozen shoestring fries (papas pay) are a perfectly acceptable shortcut and what many Argentine restaurants actually use."
    ]
  },
  {
    slug: "pastelitos",
    name: "Pastelitos Criollos",
    spanishName: "Pastelitos",
    description: "Flaky fried pastries filled with quince paste (membrillo) or sweet potato paste (batata), traditionally eaten on May 25th and other national holidays. Crunchy, sweet, and deeply nostalgic.",
    seoKeywords: ["pastelitos recipe", "argentine pastries", "pastelitos criollos", "fried pastries argentina", "membrillo pastries"],
    category: "dessert",
    region: "Nationwide",
    difficulty: "medium",
    prepTime: "30 min",
    cookTime: "20 min",
    totalTime: "50 min",
    servings: 12,
    image: "/images/recipes/pastelitos.webp",
    calories: 260,
    protein: 3,
    carbs: 34,
    fat: 13,
    history: "Pastelitos are one of Argentina's most traditional sweets, dating back to the colonial era. They've been sold in the streets since the May Revolution of 1810 — legend says vendors sold them in the Plaza de Mayo during the revolution itself. Today, eating pastelitos on May 25th (Revolution Day) is as important as eating locro. Vendors fry them fresh on street corners during national holidays, and the smell of hot oil and sugar syrup is synonymous with Argentine patriotism.",
    whereToFind: [
      "Street vendors during national holidays (May 25th, July 9th)",
      "Panaderías and confiterías throughout Argentina",
      "Feria de Mataderos (Sundays)"
    ],
    storageInstructions: "Best eaten within hours of frying. They lose crispness quickly. Store at room temperature in a paper bag for up to 1 day — do not refrigerate or they'll go soggy.",
    winePairing: "Mate cocido (sweet tea) or café con leche",
    ingredients: [
      {
        section: "For the pastry",
        items: [
          "2 sheets puff pastry (store-bought is fine), thawed",
          "Oil for deep frying (enough for 2 inches in pot)",
          "1 egg white, lightly beaten (for sealing)"
        ]
      },
      {
        section: "For the filling",
        items: [
          "200g (7 oz) dulce de membrillo (quince paste), cut into small rectangles",
          "200g (7 oz) dulce de batata (sweet potato paste), cut into small rectangles"
        ]
      },
      {
        section: "For the syrup glaze",
        items: [
          "1 cup sugar",
          "1/2 cup water",
          "1 tbsp lemon juice"
        ]
      }
    ],
    instructions: [
      "Make the syrup: boil sugar, water, and lemon juice until slightly thickened (about 5 minutes). Keep warm.",
      "Cut puff pastry sheets into 4-inch squares. You should get about 12 squares.",
      "Place a small rectangle of membrillo or batata in the center of each square.",
      "Brush the edges with egg white. Fold the pastry diagonally to form a triangle, pressing edges firmly to seal. Use a fork to crimp the edges.",
      "For the traditional shape, use a sharp knife to make a small decorative slit or pattern on top.",
      "Heat oil in a deep pot to 350°F (175°C). The oil should be at least 2 inches deep.",
      "Fry pastelitos 2-3 at a time, turning once, until puffed and deeply golden — about 2-3 minutes per side.",
      "Remove with a slotted spoon and immediately dip in the warm sugar syrup, coating all sides.",
      "Place on a wire rack to drain. Let cool slightly before eating — the filling is molten hot inside."
    ],
    tips: [
      "The oil temperature is critical — too cool and they absorb oil and become greasy, too hot and they brown before the inside cooks. Use a thermometer.",
      "Seal the edges very well or the filling will leak out during frying. The fork crimp is both decorative and functional.",
      "Make both membrillo and batata versions — guests will have a strong preference for one or the other. In Argentina, this is a passionate debate."
    ]
  },
  {
    slug: "tarta-de-jamon-y-queso",
    name: "Tarta de Jamón y Queso",
    spanishName: "Tarta de Jamón y Queso",
    description: "Argentina's go-to savory pie — two layers of flaky pastry filled with ham, cheese, and a creamy egg custard. Found in every bakery, eaten at every picnic, and baked in every home kitchen. The ultimate everyday Argentine food.",
    seoKeywords: ["tarta de jamon y queso recipe", "argentine ham cheese pie", "tarta argentina", "savory pie argentina", "tarta recipe"],
    category: "main",
    region: "Nationwide",
    difficulty: "easy",
    prepTime: "15 min",
    cookTime: "35 min",
    totalTime: "50 min",
    servings: 6,
    image: "/images/recipes/tarta-de-jamon-y-queso.webp",
    calories: 380,
    protein: 18,
    carbs: 28,
    fat: 24,
    history: "The tarta (savory pie) is one of Argentina's most practical and beloved everyday foods. It descends from European quiches and savory pies brought by French, Italian, and Spanish immigrants. Argentine home cooks simplified the concept into an easy, forgiving recipe that uses pre-made tapas (pastry rounds) — available in every supermarket. Ham and cheese (jamón y queso) is the most classic filling, but variations with spinach, corn, tuna, or roasted vegetables are equally popular.",
    whereToFind: [
      "Every panadería and rotisería in Argentina",
      "Home kitchens — this is everyday cooking",
      "Bakeries sell individual portions and whole tartas"
    ],
    storageInstructions: "Refrigerate for up to 3 days. Serve cold, at room temperature, or reheated in a 350°F oven for 10 minutes. Freezes well unbaked for up to 2 months.",
    winePairing: "Light Chardonnay from Mendoza or a young Malbec rosé",
    ingredients: [
      {
        items: [
          "2 sheets tapa para tarta (savory pie pastry) or shortcrust pastry rolled thin",
          "200g (7 oz) cooked ham (jamón cocido), diced or sliced",
          "200g (7 oz) mozzarella cheese, sliced or shredded",
          "3 large eggs",
          "200ml (3/4 cup + 2 tbsp) heavy cream or whole milk",
          "1 tsp dried oregano",
          "Salt and pepper to taste",
          "1 tomato, sliced (for topping, optional)"
        ]
      }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Line a 10-inch tart pan or pie dish with one sheet of pastry, pressing into the corners and up the sides. Prick the bottom with a fork in several places.",
      "Layer the ham evenly over the bottom pastry.",
      "Distribute the cheese over the ham.",
      "In a bowl, whisk together eggs, cream, oregano, salt, and pepper until well combined.",
      "Pour the egg mixture over the ham and cheese.",
      "If using a top crust, lay the second pastry sheet over the filling. Press and crimp the edges to seal. Cut 3-4 small slits in the top to allow steam to escape. If going open-faced, arrange tomato slices on top instead.",
      "Bake for 30-35 minutes until the pastry is golden and the filling is set.",
      "Let cool for 10 minutes before slicing — this allows the filling to set fully."
    ],
    tips: [
      "Pre-made tapas para tarta (pie pastry rounds) are available in every Argentine supermarket and are perfectly acceptable — even preferred by most home cooks.",
      "Don't overfill with the egg mixture — it puffs up during baking and can overflow. Fill to about 3/4 of the pastry edge.",
      "For a golden, shiny top crust, brush with beaten egg before baking."
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