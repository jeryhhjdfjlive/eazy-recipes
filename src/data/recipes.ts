
import { Recipe } from "@/components/RecipeCard";

// Helper function to create URL-friendly slugs from titles
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Trim any leading/trailing spaces or hyphens
};

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "classic-vanilla-cupcakes",
    title: "Classic Vanilla Cupcakes",
    description: "Light and fluffy vanilla cupcakes topped with creamy buttercream frosting and colorful sprinkles.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "45 mins",
    difficulty: "Easy",
    content: "These classic vanilla cupcakes are a staple in any baker's repertoire. The secret to their light and fluffy texture is to not overmix the batter and to use room temperature ingredients. The buttercream frosting is silky smooth with just the right amount of sweetness.",
    galleryImages: [
      "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "1 1/2 teaspoons baking powder",
      "1/4 teaspoon salt",
      "1/2 cup unsalted butter, room temperature",
      "1 cup granulated sugar",
      "2 large eggs, room temperature",
      "1 1/2 teaspoons vanilla extract",
      "1/2 cup whole milk"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Line a 12-cup muffin tin with paper liners.",
      "In a medium bowl, whisk together flour, baking powder, and salt.",
      "In a large bowl, beat butter and sugar until light and fluffy, about 3 minutes.",
      "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
      "Gradually add dry ingredients alternating with milk, beginning and ending with dry ingredients.",
      "Divide batter evenly among muffin cups, filling each about 2/3 full.",
      "Bake for 18-20 minutes, or until a toothpick inserted in center comes out clean.",
      "Cool completely before frosting with your favorite buttercream and decorating with sprinkles."
    ]
  },
  {
    id: 2,
    slug: "chocolate-chunk-cookies",
    title: "Chocolate Chunk Cookies",
    description: "Chewy on the inside, crispy on the edges – these chocolate chunk cookies are simply irresistible.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "30 mins",
    difficulty: "Easy",
    content: "The perfect chocolate chunk cookie should be crispy on the outside, chewy in the middle, and loaded with melty chocolate chunks. This recipe delivers exactly that! The secret is using brown sugar for chewiness, chilling the dough before baking, and using high-quality chocolate chunks instead of chips.",
    galleryImages: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1673551490160-3f2e712b9373?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670895802345-f46a6250749c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups chocolate chunks"
    ],
    instructions: [
      "In a medium bowl, whisk together flour, baking soda, and salt.",
      "In a large bowl, beat butter and both sugars until light and fluffy, about 3-4 minutes.",
      "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
      "Gradually add dry ingredients until just combined. Fold in chocolate chunks.",
      "Cover and refrigerate dough for at least 1 hour (or overnight for best results).",
      "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      "Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.",
      "Bake for 9-11 minutes until edges are golden but centers are still soft.",
      "Cool on baking sheets for 5 minutes, then transfer to wire racks to cool completely."
    ]
  },
  // For the remaining recipes, I'll just add the slug property based on their titles
  {
    id: 3,
    slug: "lemon-blueberry-scones",
    title: "Lemon Blueberry Scones",
    description: "Tender scones bursting with fresh blueberries and zesty lemon flavor, perfect for breakfast or brunch.",
    image: "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "35 mins",
    difficulty: "Medium",
    content: "These lemon blueberry scones are bright, buttery, and bursting with flavor. The secret to their perfect texture is keeping the butter cold and not overworking the dough. Fresh blueberries work best, but frozen will do in a pinch - just don't thaw them before using!",
    galleryImages: [
      "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "Zest of 2 lemons",
      "1/2 cup cold unsalted butter, cubed",
      "1/2 cup heavy cream",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1 cup fresh blueberries"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
      "In a large bowl, whisk together flour, sugar, baking powder, salt, and lemon zest.",
      "Cut in cold butter until mixture resembles coarse crumbs.",
      "In a small bowl, whisk together heavy cream, egg, and vanilla extract.",
      "Add wet ingredients to dry ingredients and mix just until dough comes together.",
      "Gently fold in blueberries.",
      "Transfer dough to a floured surface and shape into an 8-inch disc. Cut into 8 wedges.",
      "Place scones on prepared baking sheet, leaving about 2 inches between each.",
      "Brush tops with a little heavy cream and sprinkle with sugar.",
      "Bake for 20-25 minutes, until golden brown."
    ]
  },
  {
    id: 4,
    slug: "cinnamon-swirl-bread",
    title: "Cinnamon Swirl Bread",
    description: "Soft and fluffy homemade bread with a sweet cinnamon sugar swirl throughout.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "3 hours",
    difficulty: "Hard",
    content: "This cinnamon swirl bread fills your home with the most amazing aroma as it bakes. It's perfect toasted with a bit of butter for breakfast, or use it to make the most incredible French toast you've ever tasted. The bread itself is soft and tender, while the cinnamon sugar swirl adds sweetness and spice.",
    galleryImages: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1649308401368-a68b77116605?q=80&w=1000"
    ],
    ingredients: [
      "3 1/2 cups all-purpose flour",
      "1/4 cup granulated sugar, plus more for sprinkling",
      "2 1/4 teaspoons active dry yeast",
      "1 teaspoon salt",
      "1 cup whole milk, warmed",
      "1/4 cup unsalted butter, melted",
      "2 large eggs",
      "1/3 cup granulated sugar",
      "2 tablespoons ground cinnamon",
      "1/4 cup unsalted butter, softened"
    ],
    instructions: [
      "In a large mixing bowl, combine 2 cups of flour, sugar, yeast, and salt.",
      "Add warm milk, melted butter, and eggs. Beat until smooth.",
      "Gradually add remaining flour to form a soft dough.",
      "Knead on floured surface for 6-8 minutes until smooth and elastic.",
      "Place in greased bowl, cover, and let rise in warm place for 1 hour or until doubled.",
      "Punch down dough and roll into a rectangle (approximately 9x18 inches).",
      "Mix cinnamon and sugar. Spread softened butter over dough and sprinkle with cinnamon-sugar mixture.",
      "Starting from short end, roll up tightly. Pinch seams to seal and place in greased 9x5 inch loaf pan.",
      "Cover and let rise until puffy, about 2 hours.",
      "Brush again with egg wash, sprinkle with sliced almonds, and bake at 350°F (175°C) for 40-45 minutes until golden brown.",
      "Cool in pan for 10 minutes, then remove to wire rack to cool completely before slicing."
    ]
  },
  {
    id: 5,
    slug: "strawberry-shortcake",
    title: "Strawberry Shortcake",
    description: "Buttery biscuits layered with fresh strawberries and homemade whipped cream.",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "40 mins",
    difficulty: "Medium",
    content: "This classic strawberry shortcake features tender, flaky biscuits, juicy macerated strawberries, and clouds of freshly whipped cream. It's the perfect summer dessert and a wonderful way to showcase fresh, in-season berries. The key to perfect shortcakes is to handle the dough as little as possible to keep them light and tender.",
    galleryImages: [
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup granulated sugar, plus more for sprinkling",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "6 tablespoons cold unsalted butter, cubed",
      "2/3 cup cold heavy cream, plus more for brushing",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "4 cups fresh strawberries, hulled and sliced",
      "1/4 cup granulated sugar",
      "2 cups heavy cream",
      "1/4 cup powdered sugar",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.",
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "Cut in cold butter until mixture resembles coarse crumbs.",
      "Whisk together cream, egg, and vanilla, then add to dry ingredients, stirring just until moistened.",
      "Turn onto floured surface and knead gently 3-4 times. Pat into 3/4-inch thick rectangle.",
      "Cut into 8 biscuits with a 2 1/2-inch biscuit cutter, rerolling scraps as needed.",
      "Place biscuits on prepared baking sheet. Brush tops with cream and sprinkle with sugar.",
      "Bake for 12-15 minutes until golden brown. Cool on wire rack.",
      "In a bowl, combine sliced strawberries and sugar. Let stand for 30 minutes.",
      "In another bowl, beat heavy cream, powdered sugar, and vanilla until stiff peaks form.",
      "To serve, split biscuits in half. Top bottom halves with strawberries and whipped cream, then add top halves."
    ]
  },
  {
    id: 6,
    slug: "almond-croissants",
    title: "Almond Croissants",
    description: "Buttery, flaky croissants filled with rich almond cream and topped with sliced almonds.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "2 days",
    difficulty: "Expert",
    content: "These almond croissants are a labor of love but absolutely worth the effort. The combination of buttery, flaky layers with rich almond cream is utterly divine. While traditionally made with day-old croissants in French bakeries, this recipe allows you to create the entire experience from scratch. Patience is key to achieving those perfect layers!",
    galleryImages: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1649542181703-33cc4f373b28?q=80&w=1000",
      "https://plus.unsplash.com/premium_photo-1670333242822-40e564cc3100?q=80&w=1000"
    ],
    ingredients: [
      "4 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "2 teaspoons salt",
      "1 tablespoon active dry yeast",
      "1 1/4 cups cold milk",
      "2 cups unsalted European-style butter for laminating",
      "1 cup almond flour",
      "1/2 cup granulated sugar",
      "1/4 teaspoon salt",
      "6 tablespoons unsalted butter, softened",
      "2 large eggs",
      "1 teaspoon almond extract",
      "1 teaspoon vanilla extract",
      "Sliced almonds and powdered sugar for topping"
    ],
    instructions: [
      "Day 1: Make the dough by combining flour, sugar, salt, yeast, and milk. Knead until smooth.",
      "Shape into a rectangle, wrap in plastic, and refrigerate overnight.",
      "Day 2: Prepare butter block by pounding cold butter into a 7x10 inch rectangle between parchment paper.",
      "Roll dough into a rectangle twice the size of the butter block. Place butter in center and fold dough over it.",
      "Roll out and perform a series of three-folds with 30-minute refrigeration periods between each fold.",
      "After final fold, refrigerate overnight.",
      "Day 3: Prepare almond cream by mixing almond flour, sugar, salt, butter, eggs, and extracts until smooth.",
      "Roll dough to 1/8 inch thickness and cut into triangles. Cut small notch in the wide end of each triangle.",
      "Spread small amount of almond cream on each triangle before rolling from wide end to tip.",
      "Shape into crescents and place on parchment-lined baking sheets. Brush with egg wash.",
      "Let rise until puffy, about 2 hours.",
      "Brush again with egg wash, sprinkle with sliced almonds, and bake at 375°F (190°C) for 15-18 minutes until golden.",
      "Cool slightly, then dust with powdered sugar before serving."
    ]
  },
  {
    id: 7,
    slug: "chocolate-lava-cakes",
    title: "Chocolate Lava Cakes",
    description: "Decadent individual chocolate cakes with a molten chocolate center.",
    image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "30 mins",
    difficulty: "Medium",
    content: "Chocolate lava cakes are the perfect dessert for chocolate lovers and impressive enough for special occasions despite being surprisingly easy to make. The key is to not overbake them so they maintain that gorgeous molten center. Serve warm with a scoop of vanilla ice cream for the ultimate indulgence.",
    galleryImages: [
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    ingredients: [
      "6 ounces high-quality semi-sweet chocolate, chopped",
      "1/2 cup unsalted butter",
      "1/4 cup all-purpose flour",
      "1/2 cup powdered sugar",
      "1/8 teaspoon salt",
      "2 large eggs",
      "2 large egg yolks",
      "1 teaspoon vanilla extract",
      "Powdered sugar for dusting",
      "Fresh berries and vanilla ice cream, for serving"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Grease four 6-ounce ramekins and place on a baking sheet.",
      "In a microwave-safe bowl, combine chocolate and butter. Microwave in 30-second intervals, stirring between each, until melted and smooth.",
      "Whisk in flour, powdered sugar, and salt until combined.",
      "Add eggs, egg yolks, and vanilla extract. Whisk until smooth.",
      "Divide batter evenly among prepared ramekins.",
      "Bake for 12-14 minutes until sides are firm but centers are still soft.",
      "Let cool for 1 minute, then run a knife around the edges to loosen.",
      "Invert onto serving plates, dust with powdered sugar, and serve immediately with berries and ice cream."
    ]
  },
  {
    id: 8,
    slug: "apple-pie",
    title: "Apple Pie",
    description: "Classic American apple pie with a flaky buttery crust and spiced apple filling.",
    image: "https://images.unsplash.com/photo-1562007908-69cf18a6da04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "2 hours",
    difficulty: "Hard",
    content: "There's nothing more comforting than a slice of homemade apple pie! This recipe features a buttery, flaky crust and a perfectly spiced apple filling that's not too sweet. The secret is using a mix of tart and sweet apples for the best flavor and texture. Don't skip the step of chilling the dough - it's crucial for achieving that perfect flaky crust!",
    galleryImages: [
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1545396635-011a9a6a5650?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562007908-69cf18a6da04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1 teaspoon salt",
      "1 tablespoon sugar",
      "1 cup cold unsalted butter, cubed",
      "1/4 to 1/2 cup ice water",
      "8 cups mixed apples (like Granny Smith and Honeycrisp), peeled and sliced",
      "3/4 cup granulated sugar",
      "2 tablespoons all-purpose flour",
      "1 tablespoon lemon juice",
      "1 teaspoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
      "1/4 teaspoon salt",
      "1 egg beaten with 1 tablespoon water, for egg wash",
      "Coarse sugar for sprinkling"
    ],
    instructions: [
      "For the crust: In a food processor, pulse flour, salt, and sugar. Add cold butter and pulse until mixture resembles coarse meal.",
      "Add ice water 1 tablespoon at a time, pulsing until dough just comes together.",
      "Divide dough in half, shape into discs, wrap in plastic, and refrigerate for at least 1 hour.",
      "For the filling: In a large bowl, combine sliced apples, sugar, flour, lemon juice, cinnamon, nutmeg, and salt.",
      "Preheat oven to 425°F (220°C). Roll out one disc of dough on a floured surface into a 12-inch circle.",
      "Transfer to a 9-inch pie dish. Add filling, mounding slightly in center.",
      "Roll out second disc of dough and place over filling. Trim edges, leaving 1-inch overhang.",
      "Fold overhang under itself and crimp edges decoratively. Cut several slits in top crust for steam vents.",
      "Brush with egg wash and sprinkle with coarse sugar.",
      "Bake for 20 minutes, then reduce temperature to 375°F (190°C) and bake for 40-45 minutes more until crust is golden and filling is bubbling.",
      "Cool on wire rack for at least 2 hours before serving."
    ]
  },
  {
    id: 9,
    slug: "raspberry-macarons",
    title: "Raspberry Macarons",
    description: "Delicate French cookies with crisp shells, chewy centers, and raspberry buttercream filling.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    prepTime: "3 hours",
    difficulty: "Expert",
    content: "Macarons may seem intimidating, but with patience and precision, you can create these elegant French confections at home. These raspberry macarons feature light almond shells with a hint of pink coloring and a vibrant raspberry buttercream filling. The key to perfect macarons is in the macaronage (folding) technique and allowing the shells to develop a skin before baking.",
    galleryImages: [
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1739190088256-8880fbd93bd4?q=80&w=1000",
      "https://images.unsplash.com/photo-1736730673809-8b40a7ecfd13?q=80&w=1000"
    ],
    ingredients: [
      "1 3/4 cups powdered sugar",
      "1 cup almond flour, finely ground",
      "3 large egg whites, at room temperature",
      "1/4 cup granulated sugar",
      "Pink gel food coloring",
      "1/2 cup unsalted butter, softened",
      "1 1/2 cups powdered sugar",
      "2 tablespoons raspberry puree (strained)",
      "1/2 teaspoon vanilla extract",
      "Pinch of salt"
    ],
    instructions: [
      "Line baking sheets with parchment paper. Prepare a piping bag with a round tip.",
      "Sift powdered sugar and almond flour together twice, discarding any large pieces.",
      "In a clean bowl, beat egg whites until foamy. Gradually add granulated sugar and beat until stiff peaks form.",
      "Add a small amount of pink gel food coloring.",
      "Fold in the dry ingredients in three additions, using the macaronage technique until batter flows like lava.",
      "Transfer batter to piping bag and pipe 1.5-inch circles onto prepared baking sheets.",
      "Tap sheets firmly against counter to remove air bubbles.",
      "Let shells sit at room temperature for 30-60 minutes until they form a skin.",
      "Preheat oven to 300°F (150°C). Bake one sheet at a time for 17-18 minutes.",
      "Let cool completely before removing from parchment.",
      "For filling, beat butter until creamy. Add powdered sugar, raspberry puree, vanilla, and salt.",
      "Pipe filling onto half the shells and sandwich with remaining shells.",
      "Refrigerate in an airtight container for 24 hours before serving for best texture and flavor."
    ]
  },
  {
    id: 10,
    slug: "sourdough-bread",
    title: "Sourdough Bread",
    description: "Artisan sourdough bread with a crispy crust and chewy, tangy interior.",
    image: "https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=1000",
    prepTime: "24 hours",
    difficulty: "Expert",
    content: "Sourdough bread is as much art as it is science. This recipe uses a mature sourdough starter to create a loaf with exceptional flavor, a crackling crust, and that distinctive open, chewy crumb. While it takes time, most of it is hands-off as the dough slowly ferments. The process is deeply satisfying, and the result is a bread that's leagues beyond anything you can buy at a supermarket.",
    galleryImages: [
      "https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=1000",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540916329799-e95bee36635f?q=80&w=1000"
    ],
    ingredients: [
      "150g mature sourdough starter (100% hydration)",
      "300g water, at room temperature",
      "500g bread flour",
      "10g salt",
      "Rice flour for dusting"
    ],
    instructions: [
      "In a large bowl, combine starter and water, mixing until starter is dissolved.",
      "Add flour and mix until no dry flour remains. Cover and let rest for 30 minutes (autolyse).",
      "Add salt and incorporate by gently squeezing and folding the dough.",
      "Perform a series of stretch and folds every 30 minutes for the first 2-3 hours of bulk fermentation.",
      "Let dough continue to ferment at room temperature until it has increased in volume by about 50% and shows bubbles around the edges, typically 4-6 hours total.",
      "Turn dough onto a lightly floured surface and pre-shape into a round. Let rest for 20 minutes.",
      "Shape into a tight boule or batard, then place in a flour-dusted banneton basket (seam side up).",
      "Cover and refrigerate overnight (8-12 hours).",
      "The next day, preheat oven with a Dutch oven inside to 500°F (260°C) for 1 hour.",
      "Turn dough out onto parchment paper, score the top with a sharp knife or razor.",
      "Carefully place in preheated Dutch oven, cover, and bake for 20 minutes.",
      "Reduce temperature to 450°F (230°C), remove lid, and bake for another 20-25 minutes until deeply golden.",
      "Cool completely on a wire rack for at least 2 hours before slicing."
    ]
  }
];
