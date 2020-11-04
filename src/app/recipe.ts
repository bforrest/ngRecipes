import {Ingredient} from "./ingredient";
import {Nutrition} from './nutrition';
import {v4 as uuidv4} from 'uuid';

export class Recipe {
  //public id: number;
  public id: string;
  public name: string;
  public prep: string;
  public cookTime: string;
  public yield: string;
  public description: string;
  public recipeIngredient: Array<Ingredient>;
  public recipeInstructions: Array<string>;
  public nutrition: Nutrition;
}
