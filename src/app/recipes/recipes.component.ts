import {Component, Input, OnInit} from '@angular/core';
import {Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  selectedRecipe: Recipe;

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe( result => this.recipes = result)
  }
  onSelect(recipe: Recipe): void{
    this.selectedRecipe = recipe;
  }
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.getRecipes();
  }
}
