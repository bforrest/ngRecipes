export interface Recipe {
  id: number;
  name: string;
  prep: string;
  cookTime: string;
  yield: string;
  description: string;
  recipeIngredient: Array<string>;
  recipeInstructions: string| Array<string>;
  // TODO: figure out nutrition
}
