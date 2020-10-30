export interface Ingredient{
  name: string;
  quantity?: number;
  unit?: Unit;
}

export enum Unit {
  Cup ="cup",
  Each= "each",
  Clove = "clove",
  Oz ="Ounce",
  Pound = "Pound",
  Teaspoon = "Teaspoon",
  Tablespoon = "Tablespoon",
  ToTaste = "To Taste",
  PerServing = "Per Serving"
}

