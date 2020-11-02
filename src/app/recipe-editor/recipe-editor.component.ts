import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {Ingredient, Unit} from '../ingredient';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})

export class RecipeEditorComponent implements OnInit  {
  unitType= Unit;
  keys= Object.keys;
  recipe: Recipe;
  addedIngredient: Ingredient;

  addIngredient(): void {
    // Grab the ingredientForm values and push a new ingredient into the list.
    // this.addedIngredient = new Ingredient();
  }

  newIngredient(): void{
    this.recipe.recipeIngredient.push(new Ingredient());
  }
  getRecipe(): void {
    this.recipeService.getRecipe(1).subscribe( result => this.recipe = result)
  }
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipe = new Recipe();
    //this.getRecipe();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.recipe); }
}
