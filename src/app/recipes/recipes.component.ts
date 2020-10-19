import {Component, Input, OnInit} from '@angular/core';
import {Recipe } from '../recipe';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe( result => this.recipes = result)
  }

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.getRecipes();
  }
}
