
type RecipeImage = {
  src: string
  alt: string
  creditText?: string
  sourceUrl?: string
}

type Ingredient = {
  name: string,
  quantity: string
}

export type Recipe = {
  id: string | number
  title: string
  description: string
  difficulty: string
  prepTime: number
  cookTime: number
  servings: number
  mealType: string
  cuisine: string
  image: RecipeImage
  tags: string[]
  ingredients: Ingredient[]
  steps: string[]
}

export type RecipePreview = Pick<
  Recipe,
  'id' | 'title' | 'mealType' | 'cuisine' | 'prepTime' | 'cookTime' | 'image'
>


export const mockRecipes: Recipe[] = [
  {
    id: 2,
    title: "Chickpea and Spinach Curry",
    description: "A simple tomato-based curry with chickpeas, spinach and warming spices.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Indian",
    image: {
      src: "../../images/chickpea-spinach-curry.jpg",
      alt: "Close-up of chana masala",
      creditText: "Photo by Muhammad Khawar Nazir on Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-of-chana-masala-9287032/"
    },
    tags: ["high protein", "one pot", "spicy"],
    ingredients: [
      { name: "chickpeas", quantity: "2 tins" },
      { name: "spinach", quantity: "150g" },
      { name: "chopped tomatoes", quantity: "1 tin" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "3 cloves" },
      { name: "curry powder", quantity: "2 tbsp" },
      { name: "coconut milk", quantity: "200ml" }
    ],
    steps: [
      "Fry the onion until softened.",
      "Add garlic and curry powder, then cook for one minute.",
      "Add chopped tomatoes, chickpeas and coconut milk.",
      "Simmer for 20 minutes.",
      "Stir in spinach until wilted."
    ]
  },
  {
    id: 3,
    title: "Smoky Tofu Tacos",
    description: "Crispy smoky tofu served in tortillas with salsa, avocado and lime.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    mealType: "Dinner",
    cuisine: "Mexican",
    image: {
      src: "../../images/smoky-tofu-tacos.jpg",
      alt: "Colourful vegan tacos with coriander, lime and radish",
      creditText: "Photo by Bris N on Pexels",
      sourceUrl: "https://www.pexels.com/photo/vegan-tacos-on-plate-in-close-up-view-8404792/"
    },
    tags: ["high protein", "fresh", "spicy"],
    ingredients: [
      { name: "firm tofu", quantity: "280g" },
      { name: "tortillas", quantity: "6 small" },
      { name: "smoked paprika", quantity: "2 tsp" },
      { name: "cumin", quantity: "1 tsp" },
      { name: "avocado", quantity: "1" },
      { name: "tomatoes", quantity: "2" },
      { name: "lime", quantity: "1" }
    ],
    steps: [
      "Press and crumble the tofu.",
      "Fry the tofu with smoked paprika, cumin and salt.",
      "Dice the tomatoes and mix with lime juice.",
      "Warm the tortillas.",
      "Serve the tofu in tortillas with salsa and avocado."
    ]
  },
  {
    id: 4,
    title: "Lentil Bolognese",
    description: "A hearty lentil-based version of classic bolognese.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Italian",
    image: {
      src: "../../images/lentil-bolognese.jpg",
      alt: "Spaghetti with tomato sauce and basil",
      creditText: "Photo by Nadin Sh on Pexels",
      sourceUrl: "https://www.pexels.com/photo/spaghetti-with-tomato-sauce-sprinkled-with-parmesan-and-topped-with-a-basil-leaves-18411462/"
    },
    tags: ["high protein", "batch cook", "comfort food"],
    ingredients: [
      { name: "red lentils", quantity: "200g" },
      { name: "spaghetti", quantity: "300g" },
      { name: "chopped tomatoes", quantity: "2 tins" },
      { name: "carrot", quantity: "1" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "3 cloves" },
      { name: "mixed herbs", quantity: "2 tsp" }
    ],
    steps: [
      "Fry the onion, carrot and garlic until softened.",
      "Add lentils, chopped tomatoes and herbs.",
      "Simmer until the lentils are tender.",
      "Cook the spaghetti separately.",
      "Serve the sauce over the spaghetti."
    ]
  },
  {
    id: 5,
    title: "Peanut Noodle Bowl",
    description: "Noodles tossed in a creamy peanut sauce with crunchy vegetables.",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    mealType: "Lunch",
    cuisine: "Thai",
    image: {
      src: "../../images/peanut-noodle-bowl.jpg",
      alt: "Asian noodle salad with vegetables in bowls",
      creditText: "Photo by Snapwire on Pexels",
      sourceUrl: "https://www.pexels.com/photo/appetizer-bowl-chili-close-up-286283/"
    },
    tags: ["quick", "creamy", "fresh"],
    ingredients: [
      { name: "noodles", quantity: "200g" },
      { name: "peanut butter", quantity: "3 tbsp" },
      { name: "soy sauce", quantity: "2 tbsp" },
      { name: "lime juice", quantity: "1 tbsp" },
      { name: "carrot", quantity: "1" },
      { name: "red pepper", quantity: "1" },
      { name: "spring onions", quantity: "2" }
    ],
    steps: [
      "Cook the noodles according to packet instructions.",
      "Mix peanut butter, soy sauce and lime juice into a sauce.",
      "Slice the vegetables thinly.",
      "Toss the noodles with the sauce and vegetables.",
      "Top with spring onions."
    ]
  },
  {
    id: 6,
    title: "Black Bean Chilli",
    description: "A smoky chilli with black beans, peppers and tomatoes.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Mexican",
    image: {
      src: "../../images/black-bean-chilli.jpg",
      alt: "Vegan black bean chilli with rice",
      creditText: "Photo by Nic Wood on Pexels",
      sourceUrl: "https://www.pexels.com/photo/vegan-black-bean-chilli-28286173/"
    },
    tags: ["one pot", "high protein", "batch cook"],
    ingredients: [
      { name: "black beans", quantity: "2 tins" },
      { name: "chopped tomatoes", quantity: "2 tins" },
      { name: "red pepper", quantity: "1" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "3 cloves" },
      { name: "chilli powder", quantity: "2 tsp" },
      { name: "smoked paprika", quantity: "2 tsp" }
    ],
    steps: [
      "Fry the onion and pepper until softened.",
      "Add garlic, chilli powder and smoked paprika.",
      "Add black beans and chopped tomatoes.",
      "Simmer for 25 minutes.",
      "Serve with rice, tortillas or baked potatoes."
    ]
  },
  {
    id: 7,
    title: "Avocado Chickpea Sandwich",
    description: "A quick mashed chickpea sandwich filling with avocado, lemon and herbs.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    mealType: "Lunch",
    cuisine: "British",
    image: {
      src: "../../images/avocado-chickpea-sandwich.jpg",
      alt: "Falafel sandwich with fresh vegetables",
      creditText: "Photo by Alesia Kozik on Pexels",
      sourceUrl: "https://www.pexels.com/photo/bread-food-sandwich-healthy-6546029/"
    },
    tags: ["no cook", "quick", "high protein"],
    ingredients: [
      { name: "chickpeas", quantity: "1 tin" },
      { name: "avocado", quantity: "1" },
      { name: "lemon juice", quantity: "1 tbsp" },
      { name: "spring onions", quantity: "2" },
      { name: "bread", quantity: "4 slices" },
      { name: "parsley", quantity: "1 handful" }
    ],
    steps: [
      "Mash the chickpeas and avocado together.",
      "Stir in lemon juice, spring onions and parsley.",
      "Season with salt and pepper.",
      "Spoon the filling into bread.",
      "Serve immediately."
    ]
  },
  {
    id: 8,
    title: "Sweet Potato and Lentil Soup",
    description: "A thick, warming soup with sweet potato, lentils and cumin.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    mealType: "Lunch",
    cuisine: "Middle Eastern",
    image: {
      src: "../../images/sweet-potato-lentil-soup.jpg",
      alt: "Creamy vegetable soup viewed from above",
      creditText: "Photo by Kübra Doğu on Pexels",
      sourceUrl: "https://www.pexels.com/photo/vegetable-cream-soup-11519066/"
    },
    tags: ["healthy", "one pot", "batch cook"],
    ingredients: [
      { name: "sweet potatoes", quantity: "2 large" },
      { name: "red lentils", quantity: "150g" },
      { name: "carrot", quantity: "1" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "2 cloves" },
      { name: "cumin", quantity: "2 tsp" },
      { name: "vegetable stock", quantity: "1 litre" }
    ],
    steps: [
      "Fry the onion, carrot and garlic until softened.",
      "Add cumin and cook for one minute.",
      "Add sweet potato, lentils and vegetable stock.",
      "Simmer until everything is soft.",
      "Blend until smooth or leave chunky."
    ]
  },
  {
    id: 9,
    title: "Vegan Breakfast Burrito",
    description: "A filling breakfast wrap with scrambled tofu, beans and fried potatoes.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    mealType: "Breakfast",
    cuisine: "Mexican",
    image: {
      src: "../../images/breakfast-burrito.jpg",
      alt: "Vegan burritos filled with rice, corn and salsa",
      creditText: "Photo by Jayce on Pexels",
      sourceUrl: "https://www.pexels.com/photo/rice-and-beans-burrito-27590340/"
    },
    tags: ["high protein", "brunch", "filling"],
    ingredients: [
      { name: "firm tofu", quantity: "200g" },
      { name: "black beans", quantity: "1 tin" },
      { name: "potatoes", quantity: "2 small" },
      { name: "tortillas", quantity: "2 large" },
      { name: "turmeric", quantity: "1 tsp" },
      { name: "smoked paprika", quantity: "1 tsp" },
      { name: "spinach", quantity: "1 handful" }
    ],
    steps: [
      "Dice and fry the potatoes until golden.",
      "Crumble the tofu into a pan with turmeric and smoked paprika.",
      "Add black beans and spinach.",
      "Warm the tortillas.",
      "Fill the tortillas with tofu, beans and potatoes, then wrap."
    ]
  },
  {
    id: 10,
    title: "Aubergine and Pea Traybake",
    description: "Roasted aubergine, garden peas and tomatoes with garlic and herbs.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 40,
    servings: 3,
    mealType: "Dinner",
    cuisine: "Mediterranean",
    image: {
      src: "../../images/aubergine-chickpea-traybake.jpg",
      alt: "Baked aubergine in a takeaway box",
      creditText: "Photo by She Eats on Pexels",
      sourceUrl: "https://www.pexels.com/photo/baked-eggplant-in-a-box-13788769/"
    },
    tags: ["oven baked", "healthy", "simple"],
    ingredients: [
      { name: "aubergine", quantity: "2" },
      { name: "garden peas", quantity: "100g" },
      { name: "cherry tomatoes", quantity: "250g" },
      { name: "red onion", quantity: "1" },
      { name: "garlic", quantity: "4 cloves" },
      { name: "olive oil", quantity: "2 tbsp" },
      { name: "mixed herbs", quantity: "2 tsp" }
    ],
    steps: [
      "Preheat the oven to 200°C.",
      "Chop the aubergine and red onion.",
      "Add everything to a baking tray with olive oil and herbs.",
      "Roast for 35 to 40 minutes.",
      "Serve with couscous, rice or flatbread."
    ]
  },
  {
    id: 11,
    title: "Harissa Roasted Cauliflower Couscous",
    description: "Spiced roasted cauliflower served over fluffy couscous with chickpeas, herbs and lemon.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 3,
    mealType: "Dinner",
    cuisine: "North African",
    image: {
      src: "../../images/harissa-roasted-cauliflower-couscous.jpg",
      alt: "Close-up of roasted cauliflower and chickpeas in a pita with green sauce",
      creditText: "Photo by Alesia Kozik on Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-of-roasted-cauliflower-and-chickpeas-pita-6543757/"
    },
    tags: ["spicy", "healthy", "oven baked"],
    ingredients: [
      { name: "cauliflower", quantity: "1 large head" },
      { name: "couscous", quantity: "200g" },
      { name: "chickpeas", quantity: "1 tin" },
      { name: "harissa paste", quantity: "2 tbsp" },
      { name: "lemon", quantity: "1" },
      { name: "parsley", quantity: "1 handful" },
      { name: "olive oil", quantity: "2 tbsp" }
    ],
    steps: [
      "Preheat the oven to 200°C.",
      "Chop the cauliflower and toss with harissa paste and olive oil.",
      "Roast for 25 to 30 minutes until browned.",
      "Prepare the couscous according to packet instructions.",
      "Mix couscous with chickpeas, lemon juice and parsley, then top with cauliflower."
    ]
  },
  {
    id: 12,
    title: "Miso Glazed Aubergine Rice Bowl",
    description: "Soft roasted aubergine glazed with miso, soy and maple syrup, served with rice and greens.",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 35,
    servings: 2,
    mealType: "Dinner",
    cuisine: "Japanese",
    image: {
      src: "../../images/miso-glazed-aubergine-rice-bowl.jpg",
      alt: "Aubergine and rice served on a decorative plate with tomato and almonds",
      creditText: "Photo by Ranya Obeidallah on Pexels",
      sourceUrl: "https://www.pexels.com/photo/food-plate-healthy-restaurant-16565209/"
    },
    tags: ["umami", "healthy", "rice bowl"],
    ingredients: [
      { name: "aubergine", quantity: "2" },
      { name: "rice", quantity: "180g" },
      { name: "miso paste", quantity: "2 tbsp" },
      { name: "soy sauce", quantity: "1 tbsp" },
      { name: "maple syrup", quantity: "1 tbsp" },
      { name: "sesame oil", quantity: "1 tbsp" },
      { name: "spring onions", quantity: "2" }
    ],
    steps: [
      "Cook the rice according to packet instructions.",
      "Halve the aubergines and score the flesh.",
      "Mix miso paste, soy sauce, maple syrup and sesame oil.",
      "Brush the glaze over the aubergines and roast until soft.",
      "Serve over rice with spring onions."
    ]
  },
  {
    id: 13,
    title: "Creamy Red Pepper Gnocchi",
    description: "Soft gnocchi tossed in a smooth roasted red pepper and cashew sauce.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    mealType: "Dinner",
    cuisine: "Italian",
    image: {
      src: "../../images/creamy-red-pepper-gnocchi.jpg",
      alt: "Rigatoni pasta topped with creamy tomato sauce and fresh herbs",
      creditText: "Photo by Shameel mukkath on Pexels",
      sourceUrl: "https://www.pexels.com/photo/a-plate-of-pasta-with-sauce-and-cheese-14930715/"
    },
    tags: ["creamy", "comfort food", "quick"],
    ingredients: [
      { name: "gnocchi", quantity: "500g" },
      { name: "roasted red peppers", quantity: "2" },
      { name: "cashews", quantity: "80g" },
      { name: "garlic", quantity: "2 cloves" },
      { name: "nutritional yeast", quantity: "2 tbsp" },
      { name: "lemon juice", quantity: "1 tbsp" },
      { name: "basil", quantity: "1 handful" }
    ],
    steps: [
      "Soak the cashews in hot water for 10 minutes.",
      "Blend cashews, roasted peppers, garlic, nutritional yeast and lemon juice.",
      "Cook the gnocchi according to packet instructions.",
      "Warm the sauce in a pan.",
      "Toss the gnocchi through the sauce and top with basil."
    ]
  },
  {
    id: 14,
    title: "Thai Green Vegetable Curry",
    description: "A fragrant coconut curry packed with green vegetables, tofu and fresh lime.",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Thai",
    image: {
      src: "../../images/thai-green-vegetable-curry.jpg",
      alt: "Thai green curry with vegetables and herbs in a black bowl",
      creditText: "Photo by Sai Kuen Leung on Pexels",
      sourceUrl: "https://www.pexels.com/photo/delicious-thai-green-curry-with-vegetables-31029754/"
    },
    tags: ["spicy", "one pot", "high protein"],
    ingredients: [
      { name: "firm tofu", quantity: "280g" },
      { name: "coconut milk", quantity: "1 tin" },
      { name: "green curry paste", quantity: "2 tbsp" },
      { name: "broccoli", quantity: "200g" },
      { name: "green beans", quantity: "150g" },
      { name: "courgette", quantity: "1" },
      { name: "lime", quantity: "1" }
    ],
    steps: [
      "Fry the curry paste for one minute.",
      "Add coconut milk and bring to a simmer.",
      "Add tofu and vegetables.",
      "Simmer until the vegetables are tender.",
      "Finish with lime juice and serve with rice."
    ]
  },
  {
    id: 15,
    title: "Cajun Bean Jambalaya",
    description: "A smoky rice dish with kidney beans, peppers, celery and Cajun spices.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Cajun",
    image: {
      src: "../../images/cajun-bean-jambalaya.jpg",
      alt: "Colourful vegetable fried rice served in a cast iron pan",
      creditText: "Photo by Nadja M on Pexels",
      sourceUrl: "https://www.pexels.com/photo/a-dish-with-rice-and-vegetables-17910326/"
    },
    tags: ["one pot", "spicy", "batch cook"],
    ingredients: [
      { name: "rice", quantity: "250g" },
      { name: "kidney beans", quantity: "1 tin" },
      { name: "chopped tomatoes", quantity: "1 tin" },
      { name: "red pepper", quantity: "1" },
      { name: "celery sticks", quantity: "2" },
      { name: "onion", quantity: "1" },
      { name: "cajun seasoning", quantity: "2 tbsp" }
    ],
    steps: [
      "Fry the onion, celery and pepper until softened.",
      "Add Cajun seasoning and rice.",
      "Stir in chopped tomatoes, kidney beans and water.",
      "Simmer until the rice is cooked.",
      "Season and serve hot."
    ]
  },
  {
    id: 16,
    title: "Vegan Breakfast Hash",
    description: "A breakfast hash with potatoes, mushrooms avocado.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    mealType: "Breakfast",
    cuisine: "British",
    image: {
      src: "../../images/breakfast-hash.jpg",
      alt: "English breakfast plate with hash and avocado",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/healthy-dish-with-sliced-avocados-6529694/"
    },
    tags: ["brunch", "filling", "high protein"],
    ingredients: [
      { name: "potatoes", quantity: "3 medium" },
      { name: "firm tofu", quantity: "200g" },
      { name: "baked beans", quantity: "1 tin" },
      { name: "mushrooms", quantity: "150g" },
      { name: "cherry tomatoes", quantity: "150g" },
      { name: "smoked paprika", quantity: "1 tsp" },
      { name: "spinach", quantity: "1 handful" }
    ],
    steps: [
      "Dice and parboil the potatoes.",
      "Fry the potatoes until golden.",
      "Crumble the tofu into the pan with smoked paprika.",
      "Add mushrooms and tomatoes, then cook until softened.",
      "Serve with warm baked beans and spinach."
    ]
  },
  {
    id: 17,
    title: "Lemon Herb Butter Bean Salad",
    description: "A fresh no-cook salad with butter beans, cucumber, tomatoes, herbs and lemon dressing.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    mealType: "Lunch",
    cuisine: "Mediterranean",
    image: {
      src: "../../images/lemon-herb-butter-bean-salad.jpg",
      alt: "Bean salad in a glass bowl",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/fresh-vegetable-and-bean-salad-in-glass-bowl-30615722/"
    },
    tags: ["no cook", "fresh", "high protein"],
    ingredients: [
      { name: "butter beans", quantity: "1 tin" },
      { name: "cucumber", quantity: "1/2" },
      { name: "cherry tomatoes", quantity: "200g" },
      { name: "red onion", quantity: "1/2" },
      { name: "lemon juice", quantity: "2 tbsp" },
      { name: "olive oil", quantity: "1 tbsp" },
      { name: "parsley", quantity: "1 handful" }
    ],
    steps: [
      "Drain and rinse the butter beans.",
      "Chop the cucumber, tomatoes and red onion.",
      "Mix lemon juice, olive oil, salt and pepper.",
      "Combine everything in a bowl.",
      "Top with parsley and serve."
    ]
  },
  {
    id: 18,
    title: "Falafel Pitta Plates",
    description: "Crispy falafel served with pittas, salad, pickles and tahini sauce.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    mealType: "Lunch",
    cuisine: "Middle Eastern",
    image: {
      src: "../../images/falafel-pitta-plates.jpg",
      alt: "Close-up of crispy falafel balls in a sandwich with creamy tahini sauce",
      creditText: "Photo on Pexels",
      sourceUrl: "https://www.pexels.com/photo/vegan-falafel-burger-6546025/"
    },
    tags: ["high protein", "fresh", "filling"],
    ingredients: [
      { name: "falafel", quantity: "12 pieces" },
      { name: "pitta breads", quantity: "4" },
      { name: "lettuce", quantity: "1 handful" },
      { name: "tomatoes", quantity: "2" },
      { name: "cucumber", quantity: "1/2" },
      { name: "tahini", quantity: "3 tbsp" },
      { name: "lemon juice", quantity: "1 tbsp" }
    ],
    steps: [
      "Cook the falafel according to packet instructions or until crisp.",
      "Warm the pitta breads.",
      "Chop the salad vegetables.",
      "Mix tahini with lemon juice and a splash of water.",
      "Serve everything together with the tahini sauce."
    ]
  },
  {
    id: 19,
    title: "Korean Gochujang Tofu Bowl",
    description: "Crispy tofu coated in a sweet and spicy gochujang sauce with rice and vegetables.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    mealType: "Dinner",
    cuisine: "Korean",
    image: {
      src: "../../images/korean-gochujang-tofu-bowl.jpg",
      alt: "Colourful vegan bowl with tofu, rice, avocado and vegetables",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/avocado-and-beans-with-rice-13887558/"
    },
    tags: ["spicy", "high protein", "rice bowl"],
    ingredients: [
      { name: "firm tofu", quantity: "280g" },
      { name: "rice", quantity: "180g" },
      { name: "gochujang", quantity: "2 tbsp" },
      { name: "soy sauce", quantity: "1 tbsp" },
      { name: "maple syrup", quantity: "1 tbsp" },
      { name: "carrot", quantity: "1" },
      { name: "cucumber", quantity: "1/2" }
    ],
    steps: [
      "Cook the rice according to packet instructions.",
      "Press and cube the tofu.",
      "Fry the tofu until crisp.",
      "Mix gochujang, soy sauce and maple syrup, then coat the tofu.",
      "Serve with rice, carrot and cucumber."
    ]
  },
  {
    id: 20,
    title: "Moroccan Chickpea Tagine",
    description: "A warming chickpea stew with apricots, tomatoes, cinnamon and cumin.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Moroccan",
    image: {
      src: "../../images/moroccan-chickpea-tagine.jpg",
      alt: "Colourful Moroccan tagine with vegetables being uncovered",
      creditText: "Photo by Zak Chapman on Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-photo-of-cooked-vegetables-on-pot-2291602/"
    },
    tags: ["one pot", "warming", "batch cook"],
    ingredients: [
      { name: "chickpeas", quantity: "2 tins" },
      { name: "chopped tomatoes", quantity: "1 tin" },
      { name: "dried apricots", quantity: "80g" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "3 cloves" },
      { name: "cumin", quantity: "2 tsp" },
      { name: "cinnamon", quantity: "1 tsp" }
    ],
    steps: [
      "Fry the onion until softened.",
      "Add garlic, cumin and cinnamon.",
      "Stir in chickpeas, chopped tomatoes and apricots.",
      "Simmer for 30 minutes.",
      "Serve with couscous or flatbread."
    ]
  },
  {
    id: 21,
    title: "Roasted Tomato White Bean Pasta",
    description: "A simple pasta with roasted tomatoes, garlic, basil and creamy white beans.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    mealType: "Dinner",
    cuisine: "Italian",
    image: {
      src: "../../images/roasted-tomato-white-bean-pasta.jpg",
      alt: "Vegetable pasta with peppers and greens served in a bowl",
      creditText: "Photo by Shyne Bellz on Pexels",
      sourceUrl: "https://www.pexels.com/photo/bowl-of-pasta-18712233/"
    },
    tags: ["quick", "high protein", "comfort food"],
    ingredients: [
      { name: "pasta", quantity: "250g" },
      { name: "cannellini beans", quantity: "1 tin" },
      { name: "cherry tomatoes", quantity: "300g" },
      { name: "garlic", quantity: "4 cloves" },
      { name: "olive oil", quantity: "2 tbsp" },
      { name: "basil", quantity: "1 handful" },
      { name: "lemon juice", quantity: "1 tbsp" }
    ],
    steps: [
      "Roast the tomatoes and garlic with olive oil.",
      "Cook the pasta according to packet instructions.",
      "Mash half the beans with lemon juice.",
      "Toss the pasta with tomatoes, garlic and beans.",
      "Top with fresh basil."
    ]
  },
  {
    id: 22,
    title: "Green Lentil Shepherd's Pie",
    description: "A hearty lentil and vegetable filling topped with creamy mashed potato.",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    mealType: "Dinner",
    cuisine: "British",
    image: {
      src: "../../images/green-lentil-shepherds-pie.jpg",
      alt: "Golden brown pie baking in the oven",
      creditText: "Photo by Jul Droo on Pexels",
      sourceUrl: "https://www.pexels.com/photo/tasty-pie-baking-in-oven-14601535/"
    },
    tags: ["comfort food", "batch cook", "oven baked"],
    ingredients: [
      { name: "green lentils", quantity: "250g cooked" },
      { name: "potatoes", quantity: "800g" },
      { name: "carrot", quantity: "2" },
      { name: "onion", quantity: "1" },
      { name: "peas", quantity: "150g" },
      { name: "vegetable stock", quantity: "400ml" },
      { name: "tomato puree", quantity: "2 tbsp" }
    ],
    steps: [
      "Boil and mash the potatoes.",
      "Fry the onion and carrots until softened.",
      "Add lentils, peas, tomato puree and vegetable stock.",
      "Simmer until thickened.",
      "Top with mashed potato and bake until golden."
    ]
  },
  {
    id: 23,
    title: "Pesto Butter Bean Toast",
    description: "Toasted sourdough topped with herby butter beans, rocket and vegan pesto.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    mealType: "Breakfast",
    cuisine: "Mediterranean",
    image: {
      src: "../../images/pesto-butter-bean-toast.jpg",
      alt: "Pesto sauce in a glass jar",
      creditText: "Photo on Pexels",
      sourceUrl: "https://www.pexels.com/photo/basil-leaves-on-pesto-sauce-in-clear-glass-jar-5604812/"
    },
    tags: ["quick", "brunch", "high protein"],
    ingredients: [
      { name: "sourdough bread", quantity: "4 slices" },
      { name: "butter beans", quantity: "1 tin" },
      { name: "vegan pesto", quantity: "3 tbsp" },
      { name: "rocket", quantity: "1 handful" },
      { name: "lemon juice", quantity: "1 tbsp" },
      { name: "olive oil", quantity: "1 tbsp" },
      { name: "black pepper", quantity: "to taste" }
    ],
    steps: [
      "Toast the sourdough slices.",
      "Warm the butter beans in a pan.",
      "Stir through pesto, lemon juice and olive oil.",
      "Spoon the beans onto toast.",
      "Top with rocket and black pepper."
    ]
  },
  {
    id: 24,
    title: "Sweetcorn Fritters with Avocado Salsa",
    description: "Crispy sweetcorn fritters served with a fresh avocado and tomato salsa.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    mealType: "Breakfast",
    cuisine: "Mexican",
    image: {
      src: "../../images/sweetcorn-fritters-with-avocado-salsa.jpg",
      alt: "Vegetable fritters topped with fresh salsa on a white plate",
      creditText: "Photo by Morena Vw on Pexels",
      sourceUrl: "https://www.pexels.com/photo/zucchini-fritters-with-tomatoes-and-green-vegetables-on-white-ceramic-plate-6911885/"
    },
    tags: ["brunch", "crispy", "fresh"],
    ingredients: [
      { name: "sweetcorn", quantity: "250g" },
      { name: "plain flour", quantity: "100g" },
      { name: "plant milk", quantity: "120ml" },
      { name: "spring onions", quantity: "2" },
      { name: "avocado", quantity: "1" },
      { name: "tomatoes", quantity: "2" },
      { name: "lime juice", quantity: "1 tbsp" }
    ],
    steps: [
      "Mix flour and plant milk into a batter.",
      "Stir in sweetcorn and spring onions.",
      "Fry spoonfuls of batter until golden on both sides.",
      "Dice avocado and tomatoes, then mix with lime juice.",
      "Serve the fritters with the salsa."
    ]
  },
  {
    id: 25,
    title: "Coconut Lentil Dahl",
    description: "A creamy red lentil dahl with coconut milk, garlic, ginger and turmeric.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Indian",
    image: {
      src: "../../images/coconut-lentil-dahl.jpg",
      alt: "Vegan dahl served with rice, pistachios and fresh coriander",
      creditText: "Photo by Alesia Kozik on Pexels",
      sourceUrl: "https://www.pexels.com/photo/food-healthy-texture-lunch-6544379/"
    },
    tags: ["one pot", "creamy", "batch cook"],
    ingredients: [
      { name: "red lentils", quantity: "250g" },
      { name: "coconut milk", quantity: "1 tin" },
      { name: "chopped tomatoes", quantity: "1 tin" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "3 cloves" },
      { name: "ginger", quantity: "1 tbsp" },
      { name: "turmeric", quantity: "1 tsp" }
    ],
    steps: [
      "Fry the onion until soft.",
      "Add garlic, ginger and turmeric.",
      "Stir in lentils, chopped tomatoes and coconut milk.",
      "Simmer until the lentils are tender.",
      "Serve with rice or naan."
    ]
  },
  {
    id: 26,
    title: "Greek Inspired Orzo Salad",
    description: "A bright orzo salad with cucumber, olives, tomatoes, chickpeas and lemon dressing.",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    mealType: "Lunch",
    cuisine: "Greek",
    image: {
      src: "../../images/greek-orzo-salad.jpg",
      alt: "Pea and rice plate garnished with lemon on a checkered cloth",
      creditText: "Photo by Alesia Kozik on Pexels",
      sourceUrl: "https://www.pexels.com/photo/rice-mixed-with-greenpeace-on-ceramic-plate-6129131/"
    },
    tags: ["fresh", "quick", "meal prep"],
    ingredients: [
      { name: "orzo", quantity: "200g" },
      { name: "chickpeas", quantity: "1 tin" },
      { name: "cucumber", quantity: "1/2" },
      { name: "cherry tomatoes", quantity: "200g" },
      { name: "olives", quantity: "80g" },
      { name: "lemon juice", quantity: "2 tbsp" },
      { name: "oregano", quantity: "1 tsp" }
    ],
    steps: [
      "Cook the orzo according to packet instructions.",
      "Drain and rinse the chickpeas.",
      "Chop the cucumber, tomatoes and olives.",
      "Mix lemon juice with oregano and olive oil.",
      "Combine everything and serve chilled or warm."
    ]
  },
  {
    id: 27,
    title: "Sticky Sesame Tempeh",
    description: "Pan-fried tempeh skewers coated in a sticky sesame, soy and maple glaze with a hoisin mayo dipping sauce. Serve alongside sticky rice and broccoli.",
    difficulty: "easy",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    mealType: "Dinner",
    cuisine: "Chinese",
    image: {
      src: "../../images/sticky-sesame-tempeh.jpg",
      alt: "Plant-based meal with tempeh skewers on a platter",
      creditText: "Photo by Ella Ollson on Pexels",
      sourceUrl: "https://www.pexels.com/photo/top-view-photo-of-skewers-3026805//"
    },
    tags: ["high protein", "sticky", "quick"],
    ingredients: [
      { name: "rapeseed oil or other neutral oil", quantity: "1 tbsp" },
      { name: "tempeh", quantity: "200g" },
      { name: "dark soy sauce", quantity: "3 tbsp" },
      { name: "maple syrup", quantity: "1 tbsp" },
      { name: "rice vinegar", quantity: "1 tbsp" },
      { name: "toasted sesame oil", quantity: "1 tsp" },
      { name: "toasted sesame seeds", quantity: "1 tbsp" },
      { name: "dried chilli flakes", quantity: "1/2 tsp" },
      { name: "vegan mayonnaise", quantity: "1/3 cup" },
      { name: "hoisin sauce", quantity: "2 tbsp" },
      { name: "gochujang paste", quantity: "1 tbsp" }
    ],
    steps: [
      "Slice the tempeh into roughly 2cm thick slices and fry in oil on medium heat until golden.",
      "While frying the tempeh, mix maple syrup, rice vinegar, sesame oil, chilli flakes and 2 tbsp of the soy sauce in a small bowl and set aside.",
      "Once golden, turn the heat to low, pour the sauce over the tempeh and simmer until sticky, roughly 2 minutes.",
      "Prepare the dipping sauce by combining the mayonnaise, hoisin sauce, gochujang and remaining soy sauce.",
      "Serve the tempeh on skewers topped with sesame seeds alongside hoisin mayo dipping sauce."
    ]
  },
  {
    id: 28,
    title: "Mediterranean Stuffed Peppers",
    description: "Bell peppers stuffed with rice, lentils, tomatoes, herbs and olives.",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Mediterranean",
    image: {
      src: "../../images/mediterranean-stuffed-peppers.jpg",
      alt: "Stuffed peppers and potatoes filled with rice",
      creditText: "Photo by Nur Tok on Pexels",
      sourceUrl: "https://www.pexels.com/photo/delicious-stuffed-vegetables-with-rice-and-peppers-31953510/"
    },
    tags: ["oven baked", "healthy", "meal prep"],
    ingredients: [
      { name: "bell peppers", quantity: "4" },
      { name: "rice", quantity: "180g cooked" },
      { name: "green lentils", quantity: "200g cooked" },
      { name: "chopped tomatoes", quantity: "1 tin" },
      { name: "olives", quantity: "60g" },
      { name: "red onion", quantity: "1" },
      { name: "mixed herbs", quantity: "2 tsp" }
    ],
    steps: [
      "Preheat the oven to 190°C.",
      "Halve the peppers and remove the seeds.",
      "Mix rice, lentils, tomatoes, olives, onion and herbs.",
      "Fill the peppers with the mixture.",
      "Bake until the peppers are tender."
    ]
  },
  {
    id: 29,
    title: "Courgette and Pea Risotto",
    description: "A creamy risotto with courgette, peas, lemon and nutritional yeast.",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 30,
    servings: 3,
    mealType: "Dinner",
    cuisine: "Italian",
    image: {
      src: "../../images/courgette-pea-risotto.jpg",
      alt: "Creamy mushroom risotto served on a grey plate",
      creditText: "Photo by Alesia Kozik on Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-photo-of-a-delicious-rice-meal-with-green-peas-in-a-bowl-6129294/"
    },
    tags: ["creamy", "comfort food", "spring"],
    ingredients: [
      { name: "risotto rice", quantity: "250g" },
      { name: "courgette", quantity: "1" },
      { name: "peas", quantity: "150g" },
      { name: "onion", quantity: "1" },
      { name: "vegetable stock", quantity: "900ml" },
      { name: "nutritional yeast", quantity: "3 tbsp" },
      { name: "lemon juice", quantity: "1 tbsp" }
    ],
    steps: [
      "Fry the onion until softened.",
      "Add risotto rice and stir for one minute.",
      "Add stock gradually, stirring often.",
      "Add courgette and peas near the end.",
      "Stir in nutritional yeast and lemon juice."
    ]
  },
  {
    id: 30,
    title: "BBQ Jackfruit Baked Potatoes",
    description: "Fluffy baked potatoes topped with smoky BBQ jackfruit and crunchy slaw.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 60,
    servings: 2,
    mealType: "Dinner",
    cuisine: "American",
    image: {
      src: "../../images/bbq-jackfruit-baked-potatoes.jpg",
      alt: "Three jacket potatoes topped with BBQ jackfruit, vegan cheese and sour cream",
      creditText: "Photo by Tom Davis on Pexels",
      sourceUrl: "https://www.pexels.com/photo/loaded-bbq-baked-potatoes-with-cheese-and-sour-cream-30146068/"
    },
    tags: ["comfort food", "smoky", "filling"],
    ingredients: [
      { name: "baking potatoes", quantity: "2 large" },
      { name: "jackfruit", quantity: "1 tin" },
      { name: "BBQ sauce", quantity: "4 tbsp" },
      { name: "red cabbage", quantity: "100g" },
      { name: "carrot", quantity: "1" },
      { name: "vegan mayo", quantity: "2 tbsp" },
      { name: "spring onions", quantity: "2" }
    ],
    steps: [
      "Bake the potatoes until soft.",
      "Drain and shred the jackfruit.",
      "Cook the jackfruit with BBQ sauce until sticky.",
      "Mix cabbage, carrot and vegan mayo into a slaw.",
      "Top the potatoes with jackfruit, slaw and spring onions."
    ]
  },
  {
    id: 31,
    title: "Smashed Cucumber Peanut Salad",
    description: "A crunchy chilled salad with cucumber, peanuts, chilli, lime and soy dressing.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    mealType: "Lunch",
    cuisine: "Chinese",
    image: {
      src: "../../images/smashed-cucumber-peanut-salad.jpg",
      alt: "Sliced cucumber salad with peppers in a bowl with chopsticks",
      creditText: "Photo by Polina Tankilevitch on Pexels",
      sourceUrl: "https://www.pexels.com/photo/sliced-cucumber-salad-in-white-ceramic-bowl-5848497/"
    },
    tags: ["no cook", "fresh", "quick"],
    ingredients: [
      { name: "cucumber", quantity: "1 large" },
      { name: "peanuts", quantity: "50g" },
      { name: "soy sauce", quantity: "1 tbsp" },
      { name: "lime juice", quantity: "1 tbsp" },
      { name: "sesame oil", quantity: "1 tsp" },
      { name: "chilli flakes", quantity: "1 tsp" },
      { name: "coriander", quantity: "1 handful" }
    ],
    steps: [
      "Smash and roughly chop the cucumber.",
      "Mix soy sauce, lime juice, sesame oil and chilli flakes.",
      "Toss the cucumber in the dressing.",
      "Top with peanuts and coriander.",
      "Serve chilled."
    ]
  },
  {
    id: 32,
    title: "Mushroom and Ale Pie",
    description: "A rich mushroom and ale filling topped with golden puff pastry.",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    mealType: "Dinner",
    cuisine: "British",
    image: {
      src: "../../images/mushroom-ale-pie.jpg",
      alt: "Golden-brown savoury pie on a wooden board",
      creditText: "Photo by Valeria Boltneva on Pexels",
      sourceUrl: "https://www.pexels.com/photo/savory-pie-and-fresh-salad-on-wooden-table-29535642/"
    },
    tags: ["comfort food", "oven baked", "hearty"],
    ingredients: [
      { name: "mushrooms", quantity: "500g" },
      { name: "vegan puff pastry", quantity: "1 sheet" },
      { name: "ale", quantity: "250ml" },
      { name: "onion", quantity: "1" },
      { name: "garlic", quantity: "3 cloves" },
      { name: "vegetable stock", quantity: "250ml" },
      { name: "plain flour", quantity: "2 tbsp" }
    ],
    steps: [
      "Fry the onion and mushrooms until browned.",
      "Add garlic and flour, then stir well.",
      "Pour in ale and vegetable stock.",
      "Simmer until thickened.",
      "Top with puff pastry and bake until golden."
    ]
  },
  {
    id: 33,
    title: "Banana Oat Pancakes",
    description: "Soft vegan pancakes made with oats, banana and plant milk.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    mealType: "Breakfast",
    cuisine: "American",
    image: {
      src: "../../images/banana-oat-pancakes.jpg",
      alt: "Stack of pancakes topped with fresh berries and maple syrup",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/pile-of-delicious-pancakes-with-fresh-berries-4800795/"
    },
    tags: ["brunch", "sweet", "quick"],
    ingredients: [
      { name: "rolled oats", quantity: "150g" },
      { name: "banana", quantity: "1 ripe" },
      { name: "plant milk", quantity: "200ml" },
      { name: "baking powder", quantity: "1 tsp" },
      { name: "cinnamon", quantity: "1 tsp" },
      { name: "maple syrup", quantity: "1 tbsp" },
      { name: "berries", quantity: "1 handful" }
    ],
    steps: [
      "Blend oats, banana, plant milk, baking powder and cinnamon.",
      "Heat a non-stick pan.",
      "Cook small pancakes for a few minutes on each side.",
      "Stack the pancakes.",
      "Serve with maple syrup and berries."
    ]
  },
  {
    id: 34,
    title: "Roasted Beetroot Hummus Wrap",
    description: "A colourful wrap filled with beetroot hummus, salad, seeds and crunchy vegetables.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    mealType: "Lunch",
    cuisine: "Middle Eastern",
    image: {
      src: "../../images/roasted-beetroot-hummus-wrap.jpg",
      alt: "Vegetarian wrap with fresh vegetables and sauces on a plate",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/tortilla-with-vegetables-and-burger-patties-served-with-dips-13778602/"
    },
    tags: ["no cook", "quick", "fresh"],
    ingredients: [
      { name: "wraps", quantity: "2 large" },
      { name: "beetroot hummus", quantity: "4 tbsp" },
      { name: "carrot", quantity: "1" },
      { name: "cucumber", quantity: "1/2" },
      { name: "spinach", quantity: "1 handful" },
      { name: "pumpkin seeds", quantity: "2 tbsp" },
      { name: "lemon juice", quantity: "1 tbsp" }
    ],
    steps: [
      "Spread beetroot hummus over the wraps.",
      "Slice the carrot and cucumber into thin strips.",
      "Add spinach, vegetables and pumpkin seeds.",
      "Drizzle with lemon juice.",
      "Roll tightly and slice in half."
    ]
  },
  {
    id: 35,
    title: "Butternut Squash Black Bean Enchiladas",
    description: "Soft tortillas filled with roasted squash and black beans, baked in tomato sauce.",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    mealType: "Dinner",
    cuisine: "Mexican",
    image: {
      src: "../../images/butternut-squash-black-bean-enchiladas.jpg",
      alt: "Three enchiladas topped with tomato sauce, fresh tomato and coriander on a brown plate",
      creditText: "Photo by Amanda Lim on Pexels",
      sourceUrl: "https://www.pexels.com/photo/delicious-enchilladas-on-brown-plate-9772454/"
    },
    tags: ["oven baked", "spicy", "comfort food"],
    ingredients: [
      { name: "tortillas", quantity: "6" },
      { name: "butternut squash", quantity: "1 small" },
      { name: "black beans", quantity: "1 tin" },
      { name: "passata", quantity: "400ml" },
      { name: "onion", quantity: "1" },
      { name: "cumin", quantity: "2 tsp" },
      { name: "smoked paprika", quantity: "2 tsp" }
    ],
    steps: [
      "Roast the butternut squash until tender.",
      "Fry the onion with cumin and smoked paprika.",
      "Mix the squash with black beans.",
      "Fill the tortillas and place in a baking dish.",
      "Cover with passata and bake until bubbling."
    ]
  },
  {
    id: 36,
    title: "Tandoori Tofu Skewers",
    description: "Spiced tofu skewers served with rice, salad and a cooling dairy-free yoghurt sauce.",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 20,
    servings: 3,
    mealType: "Dinner",
    cuisine: "Indian",
    image: {
      src: "../../images/tandoori-tofu-skewers.jpg",
      alt: "Grilled tofu skewers garnished with microgreens on a blue plate",
      creditText: "Photo by Anil Sharma on Pexels",
      sourceUrl: "https://www.pexels.com/photo/grilled-tofu-skewers-with-microgreens-garnish-33414286/"
    },
    tags: ["high protein", "spicy", "grilled"],
    ingredients: [
      { name: "firm tofu", quantity: "300g" },
      { name: "plain dairy-free yoghurt", quantity: "150g" },
      { name: "tandoori spice mix", quantity: "2 tbsp" },
      { name: "lemon juice", quantity: "1 tbsp" },
      { name: "red pepper", quantity: "1" },
      { name: "red onion", quantity: "1" },
      { name: "rice", quantity: "200g" }
    ],
    steps: [
      "Press and cube the tofu.",
      "Mix yoghurt, tandoori spice and lemon juice.",
      "Coat the tofu in the marinade.",
      "Thread tofu, pepper and onion onto skewers.",
      "Grill or bake until lightly charred and serve with rice."
    ]
  },
  {
    id: 37,
    title: "Creamy Broccoli Tahini Pasta",
    description: "A quick pasta with broccoli, lemon, tahini and garlic.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    mealType: "Dinner",
    cuisine: "Mediterranean",
    image: {
      src: "../../images/creamy-broccoli-tahini-pasta.jpg",
      alt: "Pasta topped with broccoli and chilli pepper",
      creditText: "Photo by Livilla Latini on Pexels",
      sourceUrl: "https://www.pexels.com/photo/pasta-broccoli-27850104/"
    },
    tags: ["quick", "creamy", "healthy"],
    ingredients: [
      { name: "pasta", quantity: "200g" },
      { name: "broccoli", quantity: "250g" },
      { name: "tahini", quantity: "3 tbsp" },
      { name: "lemon juice", quantity: "2 tbsp" },
      { name: "garlic", quantity: "2 cloves" },
      { name: "nutritional yeast", quantity: "2 tbsp" },
      { name: "black pepper", quantity: "to taste" }
    ],
    steps: [
      "Cook the pasta and add broccoli for the final few minutes.",
      "Mix tahini, lemon juice, garlic and nutritional yeast.",
      "Add pasta water to loosen the sauce.",
      "Toss pasta and broccoli through the sauce.",
      "Season with black pepper."
    ]
  },
  {
    id: 38,
    title: "Spicy Peanut Sweet Potato Stew",
    description: "A rich West African inspired stew with sweet potato, peanut butter and greens.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    mealType: "Dinner",
    cuisine: "West African",
    image: {
      src: "../../images/spicy-peanut-sweet-potato-stew.jpg",
      alt: "Vegetarian curry with greens and spices in a ceramic bowl",
      creditText: "Photo by Filipp Romanovski on Pexels",
      sourceUrl: "https://www.pexels.com/photo/delicious-soup-in-bowl-17902963/"
    },
    tags: ["one pot", "creamy", "spicy"],
    ingredients: [
      { name: "sweet potatoes", quantity: "2 large" },
      { name: "peanut butter", quantity: "4 tbsp" },
      { name: "chopped tomatoes", quantity: "1 tin" },
      { name: "vegetable stock", quantity: "600ml" },
      { name: "spinach", quantity: "150g" },
      { name: "onion", quantity: "1" },
      { name: "chilli flakes", quantity: "1 tsp" }
    ],
    steps: [
      "Fry the onion until softened.",
      "Add sweet potato, tomatoes, stock and chilli flakes.",
      "Simmer until the sweet potato is tender.",
      "Stir in peanut butter until creamy.",
      "Add spinach and cook until wilted."
    ]
  },
  {
    id: 39,
    title: "Soba Noodle Edamame Salad",
    description: "Cold soba noodles with edamame, crunchy vegetables and sesame dressing.",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 8,
    servings: 2,
    mealType: "Lunch",
    cuisine: "Japanese",
    image: {
      src: "../../images/soba-noodle-edamame-salad.jpg",
      alt: "Close-up of soba noodles with vegetables and sesame seeds",
      creditText: "Photo by Polina Tankilevitch on Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-photo-of-noodle-dish-with-sesame-seeds-4518705/"
    },
    tags: ["fresh", "high protein", "quick"],
    ingredients: [
      { name: "soba noodles", quantity: "180g" },
      { name: "edamame beans", quantity: "150g" },
      { name: "carrot", quantity: "1" },
      { name: "red cabbage", quantity: "100g" },
      { name: "soy sauce", quantity: "2 tbsp" },
      { name: "rice vinegar", quantity: "1 tbsp" },
      { name: "sesame seeds", quantity: "1 tbsp" }
    ],
    steps: [
      "Cook the soba noodles and rinse under cold water.",
      "Cook the edamame beans.",
      "Slice the carrot and cabbage thinly.",
      "Mix soy sauce and rice vinegar into a dressing.",
      "Toss everything together and top with sesame seeds."
    ]
  },
  {
    id: 40,
    title: "Apple Cinnamon Overnight Oats",
    description: "Creamy overnight oats with grated apple, cinnamon, chia seeds and maple syrup.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    mealType: "Breakfast",
    cuisine: "British",
    image: {
      src: "../../images/apple-cinnamon-overnight-oats.jpg",
      alt: "Bowl of homemade oatmeal topped with apples",
      creditText: "Photo by Alesia Kozik on Pexels",
      sourceUrl: "https://www.pexels.com/photo/brown-and-white-food-on-black-ceramic-bowl-6072379/"
    },
    tags: ["no cook", "meal prep", "sweet"],
    ingredients: [
      { name: "rolled oats", quantity: "120g" },
      { name: "plant milk", quantity: "250ml" },
      { name: "apple", quantity: "1" },
      { name: "chia seeds", quantity: "2 tbsp" },
      { name: "cinnamon", quantity: "1 tsp" },
      { name: "maple syrup", quantity: "1 tbsp" },
      { name: "walnuts", quantity: "30g" }
    ],
    steps: [
      "Grate the apple.",
      "Mix oats, plant milk, apple, chia seeds, cinnamon and maple syrup.",
      "Divide into jars or bowls.",
      "Chill overnight.",
      "Top with walnuts before serving."
    ]
  },
  {
    id: 41,
    title: "Chocolate Avocado Mousse",
    description: "A rich and silky chocolate mousse made with avocado, cocoa powder and maple syrup.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    mealType: "Dessert",
    cuisine: "American",
    image: {
      src: "../../images/chocolate-avocado-mousse.jpg",
      alt: "Chocolate mousse topped with pomegranate seeds",
      creditText: "Photo by Ella Olsson on Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-photo-of-chocolate-mousse-3026810/"
    },
    tags: ["no cook", "chocolate", "creamy"],
    ingredients: [
      { name: "ripe avocados", quantity: "2" },
      { name: "cocoa powder", quantity: "4 tbsp" },
      { name: "maple syrup", quantity: "3 tbsp" },
      { name: "plant milk", quantity: "4 tbsp" },
      { name: "vanilla extract", quantity: "1 tsp" },
      { name: "salt", quantity: "1 pinch" },
      { name: "dark chocolate", quantity: "30g" }
    ],
    steps: [
      "Scoop the avocado flesh into a blender.",
      "Add cocoa powder, maple syrup, plant milk, vanilla and salt.",
      "Blend until completely smooth.",
      "Taste and add more maple syrup if needed.",
      "Chill before serving and top with grated dark chocolate."
    ]
  },
  {
    id: 42,
    title: "Raspberry Cashew Cheesecake",
    description: "A no-bake cashew cheesecake with a nutty base and a bright raspberry topping.",
    difficulty: "medium",
    prepTime: 25,
    cookTime: 0,
    servings: 8,
    mealType: "Dessert",
    cuisine: "American",
    image: {
      src: "../../images/raspberry-cashew-cheesecake.jpg",
      alt: "Slice of raspberry cheesecake on a speckled ceramic plate",
      creditText: "Photo by Aleyna Yetkin on Pexels",
      sourceUrl: "https://www.pexels.com/photo/vegan-raspberry-cheesecake-slice-on-ceramic-plate-37574427/"
    },
    tags: ["no bake", "creamy", "make ahead"],
    ingredients: [
      { name: "cashews", quantity: "250g" },
      { name: "dates", quantity: "150g" },
      { name: "almonds", quantity: "120g" },
      { name: "coconut cream", quantity: "200ml" },
      { name: "lemon juice", quantity: "3 tbsp" },
      { name: "maple syrup", quantity: "4 tbsp" },
      { name: "raspberries", quantity: "200g" }
    ],
    steps: [
      "Soak the cashews in hot water for at least 30 minutes.",
      "Blend dates and almonds into a sticky crumb.",
      "Press the mixture into a lined cake tin.",
      "Blend cashews, coconut cream, lemon juice and maple syrup until smooth.",
      "Pour over the base, top with raspberries and chill until set."
    ]
  },
  {
    id: 43,
    title: "Fudgy Black Bean Brownies",
    description: "Dense chocolate brownies made with black beans, cocoa and dark chocolate chunks.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 25,
    servings: 9,
    mealType: "Dessert",
    cuisine: "American",
    image: {
      src: "../../images/fudgy-black-bean-brownies.jpg",
      alt: "Stack of rich chocolate brownies",
      creditText: "Photo by Kawê Rodrigues on Pexels",
      sourceUrl: "https://www.pexels.com/photo/stack-of-brownies-17488694/"
    },
    tags: ["chocolate", "high protein", "baked"],
    ingredients: [
      { name: "black beans", quantity: "1 tin" },
      { name: "cocoa powder", quantity: "40g" },
      { name: "plain flour", quantity: "80g" },
      { name: "maple syrup", quantity: "100ml" },
      { name: "plant milk", quantity: "80ml" },
      { name: "baking powder", quantity: "1 tsp" },
      { name: "dark chocolate chunks", quantity: "80g" }
    ],
    steps: [
      "Preheat the oven to 180°C.",
      "Drain and rinse the black beans.",
      "Blend the beans with maple syrup and plant milk until smooth.",
      "Stir in cocoa powder, flour, baking powder and chocolate chunks.",
      "Bake in a lined tin for 20 to 25 minutes, then cool before slicing."
    ]
  },
  {
    id: 44,
    title: "Apple Berry Crumble",
    description: "A warm fruit crumble with apples, mixed berries and a golden oat topping.",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    mealType: "Dessert",
    cuisine: "British",
    image: {
      src: "../../images/apple-berry-crumble.jpg",
      alt: "Warm apple crumble served with ice cream and coffee",
      creditText: "Photo by Christine Faustino on Pexels",
      sourceUrl: "https://www.pexels.com/photo/cozy-dessert-scene-with-apple-crumble-and-coffee-35602757/"
    },
    tags: ["comfort food", "oven baked", "fruity"],
    ingredients: [
      { name: "apples", quantity: "4" },
      { name: "mixed berries", quantity: "200g" },
      { name: "rolled oats", quantity: "100g" },
      { name: "plain flour", quantity: "80g" },
      { name: "brown sugar", quantity: "70g" },
      { name: "vegan butter", quantity: "80g" },
      { name: "cinnamon", quantity: "1 tsp" }
    ],
    steps: [
      "Preheat the oven to 180°C.",
      "Chop the apples and add them to a baking dish with berries and cinnamon.",
      "Rub vegan butter into flour, oats and brown sugar.",
      "Scatter the crumble topping over the fruit.",
      "Bake for 30 to 35 minutes until golden and bubbling."
    ]
  },
  {
    id: 45,
    title: "Banana Walnut Bread",
    description: "A soft banana loaf with walnuts, cinnamon and a tender crumb.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 50,
    servings: 8,
    mealType: "Dessert",
    cuisine: "American",
    image: {
      src: "../../images/banana-walnut-bread.jpg",
      alt: "Freshly baked banana bread slices stacked on a wooden board",
      creditText: "Photo by Sylwester Ficek on Pexels",
      sourceUrl: "https://www.pexels.com/photo/stack-of-homemade-banana-bread-slices-30091628/"
    },
    tags: ["baked", "sweet", "snack"],
    ingredients: [
      { name: "ripe bananas", quantity: "3" },
      { name: "plain flour", quantity: "220g" },
      { name: "brown sugar", quantity: "90g" },
      { name: "plant milk", quantity: "80ml" },
      { name: "vegetable oil", quantity: "60ml" },
      { name: "baking powder", quantity: "2 tsp" },
      { name: "walnuts", quantity: "80g" }
    ],
    steps: [
      "Preheat the oven to 180°C.",
      "Mash the bananas in a large bowl.",
      "Stir in plant milk, oil and brown sugar.",
      "Fold in flour, baking powder and chopped walnuts.",
      "Bake in a loaf tin for 45 to 50 minutes."
    ]
  },
  {
    id: 46,
    title: "Lemon Coconut Tart",
    description: "A bright lemon tart with a creamy coconut filling and crisp pastry base.",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 8,
    mealType: "Dessert",
    cuisine: "French",
    image: {
      src: "../../images/lemon-coconut-tart.jpg",
      alt: "Freshly baked lemon tart on a marble surface",
      creditText: "Photo by Geraud pfeiffer on Pexels",
      sourceUrl: "https://www.pexels.com/photo/lemon-tart-on-marble-table-6605303/"
    },
    tags: ["citrus", "baked", "creamy"],
    ingredients: [
      { name: "vegan shortcrust pastry", quantity: "1 sheet" },
      { name: "coconut milk", quantity: "1 tin" },
      { name: "lemon juice", quantity: "100ml" },
      { name: "lemon zest", quantity: "1 tbsp" },
      { name: "caster sugar", quantity: "100g" },
      { name: "cornflour", quantity: "3 tbsp" },
      { name: "turmeric", quantity: "1 pinch" }
    ],
    steps: [
      "Bake the pastry case according to packet instructions.",
      "Whisk coconut milk, lemon juice, lemon zest, sugar, cornflour and turmeric in a pan.",
      "Heat gently until thickened.",
      "Pour the lemon filling into the pastry case.",
      "Chill until set before slicing."
    ]
  },
  {
    id: 47,
    title: "Chocolate Chip Oat Cookies",
    description: "Chewy oat cookies with dark chocolate chips and a lightly crisp edge.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 12,
    servings: 12,
    mealType: "Dessert",
    cuisine: "American",
    image: {
      src: "../../images/chocolate-chip-oat-cookies.jpg",
      alt: "Stack of homemade chocolate chip cookies with chocolate chips scattered around",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/close-up-of-a-pile-of-chocolate-chip-cookies-17741889/"
    },
    tags: ["cookies", "quick", "baked"],
    ingredients: [
      { name: "rolled oats", quantity: "120g" },
      { name: "plain flour", quantity: "100g" },
      { name: "brown sugar", quantity: "80g" },
      { name: "vegan butter", quantity: "80g" },
      { name: "plant milk", quantity: "2 tbsp" },
      { name: "baking powder", quantity: "1 tsp" },
      { name: "dark chocolate chips", quantity: "80g" }
    ],
    steps: [
      "Preheat the oven to 180°C.",
      "Cream together vegan butter and brown sugar.",
      "Stir in oats, flour, baking powder and plant milk.",
      "Fold in the dark chocolate chips.",
      "Shape into cookies and bake for 10 to 12 minutes."
    ]
  },
  {
    id: 48,
    title: "Coconut Mango Rice Pudding",
    description: "A creamy coconut rice pudding topped with sweet mango and toasted coconut.",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    mealType: "Dessert",
    cuisine: "Thai",
    image: {
      src: "../../images/coconut-mango-rice-pudding.jpg",
      alt: "Three pots of creamy rice pudding topped with hazelnuts",
      creditText: "Photo by Serra Nur Cevikdal on Pexels",
      sourceUrl: "https://www.pexels.com/photo/delicious-rice-pudding-with-berries-and-sauce-33088381/"
    },
    tags: ["creamy", "comfort food", "sweet"],
    ingredients: [
      { name: "pudding rice", quantity: "150g" },
      { name: "coconut milk", quantity: "1 tin" },
      { name: "plant milk", quantity: "300ml" },
      { name: "caster sugar", quantity: "50g" },
      { name: "mango", quantity: "1" },
      { name: "vanilla extract", quantity: "1 tsp" },
      { name: "desiccated coconut", quantity: "2 tbsp" }
    ],
    steps: [
      "Add pudding rice, coconut milk, plant milk and sugar to a pan.",
      "Simmer gently, stirring often, until the rice is soft and creamy.",
      "Stir in vanilla extract.",
      "Dice the mango.",
      "Serve the rice pudding topped with mango and desiccated coconut."
    ]
  },
  {
    id: 49,
    title: "Sticky Toffee Date Pudding",
    description: "A soft date sponge served with a warm vegan toffee sauce.",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 35,
    servings: 6,
    mealType: "Dessert",
    cuisine: "British",
    image: {
      src: "../../images/sticky-toffee-date-pudding.jpg",
      alt: "Sticky toffee pudding topped with pecans on a rustic wooden table",
      creditText: "Photo from Pexels",
      sourceUrl: "https://www.pexels.com/photo/delicious-cake-with-caramel-5419220/"
    },
    tags: ["comfort food", "baked", "sweet"],
    ingredients: [
      { name: "dates", quantity: "180g" },
      { name: "plain flour", quantity: "180g" },
      { name: "brown sugar", quantity: "100g" },
      { name: "plant milk", quantity: "180ml" },
      { name: "vegan butter", quantity: "80g" },
      { name: "baking powder", quantity: "2 tsp" },
      { name: "golden syrup", quantity: "3 tbsp" }
    ],
    steps: [
      "Preheat the oven to 180°C.",
      "Soak the dates in hot water, then mash them.",
      "Mix flour, sugar, plant milk, vegan butter, baking powder and dates into a batter.",
      "Bake until risen and firm.",
      "Warm golden syrup with extra vegan butter and plant cream to make a toffee sauce."
    ]
  },
  {
    id: 50,
    title: "Peanut Butter Energy Bites",
    description: "No-bake oat bites made with peanut butter, dates, cocoa and chia seeds.",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 0,
    servings: 12,
    mealType: "Dessert",
    cuisine: "American",
    image: {
      src: "../../images/peanut-butter-energy-bites.jpg",
      alt: "Top view of oatmeal energy bites on a plate",
      creditText: "Photo by Deepa Gopinath on Pexels",
      sourceUrl: "https://www.pexels.com/photo/overhead-shot-of-bliss-balls-6306540/"
    },
    tags: ["no cook", "snack", "meal prep"],
    ingredients: [
      { name: "rolled oats", quantity: "120g" },
      { name: "peanut butter", quantity: "4 tbsp" },
      { name: "dates", quantity: "120g" },
      { name: "cocoa powder", quantity: "1 tbsp" },
      { name: "chia seeds", quantity: "1 tbsp" },
      { name: "maple syrup", quantity: "1 tbsp" },
      { name: "salt", quantity: "1 pinch" }
    ],
    steps: [
      "Add oats, dates, peanut butter, cocoa powder, chia seeds, maple syrup and salt to a food processor.",
      "Blend until the mixture sticks together.",
      "Roll into small balls.",
      "Chill for at least 20 minutes.",
      "Store in the fridge until ready to eat."
    ]
  }
]

export default mockRecipes