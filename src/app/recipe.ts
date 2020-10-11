import {Ingredient} from "./ingredient";
import {Nutrition} from './nutrition';

export interface Recipe {
  id: number;
  name: string;
  prep: string;
  cookTime: string;
  yield: string;
  description: string;
  recipeIngredient: Array<Ingredient>;
  recipeInstructions: string| Array<string>;
  nutrition: Nutrition;
}
