import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // decorator to make the property available for binding.
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
