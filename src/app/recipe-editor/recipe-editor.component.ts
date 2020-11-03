import {Component, OnInit, Input, Output, EventEmitter,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Ingredient, Unit} from '../ingredient';
import {Recipe} from "../recipe";
import {IngredientComponent} from "../ingredient/ingredient.component";

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
  fromForm: Ingredient;

  // addIngredient(): void {
  //   // Grab the ingredientForm values and push a new ingredient into the list.
  //   // this.addedIngredient = new Ingredient();
  // }


  newIngredient(): void{
    this.recipe.recipeIngredient.push(new Ingredient());
  }
  // getRecipe(): void {
  //   this.recipeService.getRecipe(1).subscribe( result => this.recipe = result)
  // }

  constructor(public dialog: MatDialog,) {}

  addIngredient(): void {
    this.addedIngredient = new Ingredient();
    const dialogRef = this.dialog.open(IngredientComponent, {
      data: this.addedIngredient,
      width: 'auto',
      height: '600px,'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed.');
      console.log("result?", result);
      this.fromForm = result;
      this.recipe.recipeIngredient.push(result);
    })

  }

  ngOnInit(): void {
    this.recipe = new Recipe();
    this.recipe.recipeIngredient = [];
    this.recipe.recipeInstructions = [];
    //this.getRecipe();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.recipe); }
}
