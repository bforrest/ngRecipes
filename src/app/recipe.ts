import {Ingredient} from "./ingredient";
import {Nutrition} from './nutrition';

export class Recipe {
  public id: number;
  public name: string;
  public prep: string;
  public cookTime: string;
  public yield: string;
  public description: string;
  public recipeIngredient: Array<Ingredient>;
  public recipeInstructions: string| Array<string>;
  public nutrition: Nutrition;
}
