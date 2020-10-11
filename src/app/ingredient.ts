export interface Ingredient{
  name: string;
  quantity?: number;
  unit?: Unit;
}

export enum Unit {
  Cup ="cup",
  Each= "each",
  Clove = "clove",
  Oz ="Oz",
  Pound = "Pound",
  Teaspoon = "Teaspoon",
  Tablespoon = "Tablespoon",
  ToTaste = "ToTaste",
  PerServing = "PerServing"
}

