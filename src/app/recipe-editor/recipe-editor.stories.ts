import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import {RecipeEditorComponent} from "./recipe-editor.component";


export default{
  title: 'Recipe Editor',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
}

export const Default = () => ({
  component: RecipeEditorComponent,
  props: {
    recipe: defaultRecipeData
  }
})





export const defaultRecipeData = {
  "id": 100,
  "name": "Breakfast Stuffed Mushrooms",
  "prep": "",
  "cookTime": "",
  "yield": "2 servings",
  "description":
    "These mushrooms can be assembled the night before and stored in the refrigerator overnight in the cooking pans. These are delicious with Parmesan or blue cheese melted over the top",
  "recipeIngredient": [
    {
      "name": "Large white mushrooms, washed, stems removed and reserved",
      "quantity": 12,
      "unit": "Unit.Each"
    },
    {
      "name": "avoacado oil",
      "quantity": 1,
      "unit": "Unit.Tablespoon"
    },
    {
      "name": "kosher salt",
      "quantity": 0.25,
      "unit": "Unit.Teaspoon"
    },
    {
      "name":"ground black pepper",
      "quantity": 0.25,
      "unit": "Unit.Teaspoon"
    },
    {
      "name": "pork lard or fat of choice",
      "quantity": 1,
      "unit": "Unit.Tablespoon"
    },
    {
      "name": "Sugar-free bulk pork breakfast sausage",
      "quantity": 6,
      "unit": "Unit.Oz"
    },
    {
      "name": "clove garlic, minced",
      "quantity": 1,
      "unit": "Unit.Each"
    },
    {
      "name": "Full-fat coconut milk, heavy whipping cream, or bone broth",
      "quantity": 0.25,
      "unit": "Unit.Cup"
    },
    {
      "name": "finely chopped greens of your choosing (spinach, kale, Swiss chard, beet, turnigp",
      "quantity": 1,
      "unit": "Unit.Cup"
    },
    {
      "name": "water",
      "quantity": 1,
      "unit": "Unit.Cup"
    }
  ],
  "recipeInstructions": [
    "1. Finely chop the mushroom stems and set aside. Place the mushroom caps stemmed side down in a medium bowl and pour the avocado oil over them. Season with the salt and pepper. Toss gently to coat the mushrooms with oil without breaking them.",
    "2. Set the Instant Pot to Saute and melt the lard. When it is melted, crumble in the sausage and add the chopped mushroom stems. Saute, stirring occasionally, until only a little pink remains in the pork, 3 to 4 minutes. Add the garlic and saute until the pork is cooked through.",
    "3. Deglaze the pot with the coconut milk, scraping the bottom with a wooden spoon to loosen any browned bits. Stif in the chopped greens and cook just until they are wilted.",
    "4. Press Cancel. Transfer the pork to a bowl. Taste and adjust the salt and pepper. Wipe or wash out the pot insert.",
    "5. Stuff the pork mixture into the mushrooms. Place the mushrooms stem side up in two stackable stainles steel insert pans, 6 mushrooms per pan. If you have extra pork filling, spoon it over the mushrooms. Stack and secure the lid on the pans.",
    "6. Pour the water into the Instant Pot and lower the stacked pans into the pot. Secure the lid and turn the steam release valve to Sealing. Press the Steam button until High pressure is selected, then set the cook time to 12 minutes.",
    "7. When the Instant Pot beeps, carefully swithc the steam release valve to Venting to quick-release the pressure. When fully released, open the lid and use the handle on the insert pans to lift them out (use potholders, it bill be hot). Open the insert pans and transfer the mushrooms to serving plates. Serve warm.",
    "Notes: If you can't find sugar-free ground breakfast sausage, use ground pork and add 1 teaspoon kosher salt, 1/2 teaspoon dried sage, and 1/4 teaspoon each of dried thyme, smoke paprika, and ground black pepper; or you can substitute bulk Italian sausage or a variety of your choice.",
    "You can layer mushrooms in any heatproof glass that fits the pot.",
    "Steps 2 through 4 can be done in a skillet on the stovetop."
  ],
  "nutrition":{
    "calories": 476 ,
    "fatContent": 41,
    "protein": 10,
    "carbs": 14,
    "fiber": 0
  }
}
