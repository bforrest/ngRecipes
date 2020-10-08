import { Recipe } from './recipe';

export const RECIPES: Recipe[] =[
  {
    id: 1,
    name: 'bacon and eggs ramen',
    prep: '5 minutes',
    cookTime: '20 minutes (not counting Zoodle and soft-boiled eggs)',
    yield: '4 servings',
    description:
      'Soup, such as ramen, is eaten for breakfast in many cultures. It’s a great way to break your fast. This tasty version will keep you nice and warm all day long!',
    recipeIngredient: [
      '1 tablespoon toasted sesame oil',
      '1 tablespoon coconut oil',
      '1 (12-ounce) package fully cooked pork belly (see note), cut into ¼-inch dice',
      '1/2 cup minced onions',
      '2 cloves garlic',
      '1 tablespoon red pepper flakes or 1½ teaspoons cayenne pepper',
      '4 cups chicken bone broth, homemade (see here) or store-bought',
      '2 tablespoons coconut aminos or wheat-free tamari',
      '1 tablespoon coconut vinegar or unseasoned rice vinegar',
      '1 tablespoon grated fresh ginger',
      'Fine sea salt',
      'Fresh ground black pepper',
      '1 recipe Zoodles (see here), for serving',
      '4 large eggs, soft-boiled (see here), for serving (omit for egg-free)',
      'Sliced green onions, for garnish Red pepper flakes, for garnish',
    ],
    recipeInstructions:[
      'Heat the oils in a large soup pot over medium heat.",' +
      "Fry the pork belly in the hot oil until crisp on all sides, about 4 minutes per side.",
      "Remove the pork belly from the pot with a slotted spoon, leaving the fat in the pot.",
      "Add the onions, garlic, and red pepper flakes and cook over low heat for 4 minutes, or until the onions are translucent.",
      "Add the chicken broth, coconut aminos, vinegar, ginger, and tomato paste and bring to a simmer over medium-high heat.",
      "Simmer for 8 minutes, then add salt and pepper to taste. Just before serving, divide the zoodles among four bowls.",
      "Add the chicken broth, coconut aminos, vinegar, ginger, and tomato paste and bring to a simmer over medium-high heat.",
      "Top each bowl with 1 cup of the broth. Place a soft-boiled egg in each bowl and garnish with green onions and red pepper flakes. This dish is best served freshly made."
      ]
  },
  {
    id: 2,
    name: 'florentine breakfast burgers',
    prep: '5 minutes',
    cookTime: '20 minutes (not counting english muffins)',
    yield: '4 servings',
    description:
      'Soup, such as ramen, is eaten for breakfast in many cultures. It’s a great way to break your fast. This tasty version will keep you nice and warm all day long!',
    recipeIngredient: [
      '1 tablespoon Paleo fat, for frying',
      '1 pound 80% lean ground beef',
      '2 1/2 teaspoons fine sea salt',
      '1 1/2 teaspoons fresh ground black pepper',
      '2 cups spinach or other greens of choice',
      '4 large eggs',
      '4 Keto English Muffins',
      '1 tomato, cut into ¼-inch-thick slices',
      '1/2 cup Easy Basil Hollandaise (see here)',
      'Fresh basil leaves, for garnish'
      ],
    recipeInstructions: [
      '1. Heat the Paleo fat in a cast-iron skillet over medium-high heat.',
      '2. Using your hands, form the meat into 4 patties. Season the outsides with the salt and pepper. Fry the burgers in the pan on both sides until they reach your desired doneness (see the chart below).',
      '3. Remove the burgers from the pan, leaving the fat in the pan. Add the spinach, season with salt and pepper, and sauté over medium heat until the leaves are softened, about 2 minutes.',
      '4. Poach the eggs (see here).',
      '5. Serve each burger on an English muffin, fried in the leftover fat if desired. Top with a slice of tomato, one-quarter of the wilted spinach, a poached egg, and some basil hollandaise. Garnish with fresh basil. These burgers are best served fresh.'
    ]
}
];
