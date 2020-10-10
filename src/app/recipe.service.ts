import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { Recipe} from "./recipe";
import {RECIPES} from "./mock-recipes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getRecipes(): Observable<Recipe[]>{
    return of (RECIPES);
  }

  getRecipe(id: number): Observable<Recipe>{
    this.messageService.add(`RecipeService: fethcing recipe id=${id}`);
    return of (RECIPES.find( recipe => recipe.id ===id));
  }
  constructor(private messageService: MessageService) { }
}
