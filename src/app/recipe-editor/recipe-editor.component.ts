import {Component, OnInit, Input, Output, EventEmitter,Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Ingredient, Unit} from '../ingredient';
import {Recipe} from "../recipe";
import {IngredientComponent} from "../ingredient/ingredient.component";
import {InstructionComponent} from "../instruction/instruction.component";
import {Nutrition} from "../nutrition";
import {RecipeService} from "../recipe.service";
import {v4 as uuidv4} from 'uuid';

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
  newInstruction: string;

  constructor(
    public dialog: MatDialog,
    private recipeService: RecipeService) {}


  addIngredient(): void {
    this.addedIngredient = new Ingredient();
    const dialogRef = this.dialog.open(IngredientComponent, {
      data: this.addedIngredient,
      width: 'auto',
      height: '600px,'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed.');
      console.log(result);
      this.recipe.recipeIngredient.push(result);
    })
  }

  saveRecipe(): void{
    // todo: save recipe
    console.log('saving recipe name= ${recipe.name}');
    let reply = this.recipeService.addRecipe(this.recipe);
    console.log(`reply: ${reply}`);
  }
  addInstruction(): void {
    this.newInstruction = '';
    const dialogRef = this.dialog.open(InstructionComponent, {
      data: this.newInstruction,
      width: 'auto',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('ta-done');
      this.recipe.recipeInstructions.push(result);
    })
  }

  ngOnInit(): void {
    this.recipe = new Recipe();
    this.recipe.id = uuidv4();
    this.recipe.recipeIngredient = [];
    this.recipe.recipeInstructions = [];
    this.recipe.nutrition = new Nutrition();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.recipe); }
}
