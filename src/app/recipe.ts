export interface Recipe {
  name: string;
  prep: string;
  cookTime: string;
  yield: string;
  description: string;
  recipeIngredient: Array<string>;
  recipeInstructions: string;
  // TODO: figure out nutrition
}
