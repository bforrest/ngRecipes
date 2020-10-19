import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[];

  selectedRecipe: Recipe;

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe( result => this.recipes = result.slice(0,3))
  }
  onSelect(recipe: Recipe): void{
    this.selectedRecipe = recipe;
  }
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.getRecipes();
  }
}
