import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // decorator to make the property available for binding.
  @Input() recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(result => this.recipe = result);
  }
}
