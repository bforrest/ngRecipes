import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Recipe} from "./recipe";
import {RECIPES} from "./mock-recipes";
import {MessageService} from "./message.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = '//localhost:3000/api/recipes';  // URL to web api

  getRecipes(): Observable<Recipe[]>{
    this.messageService.add('RecipeService: fetch Recipes');

    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap(_ => this.log('fetched recipes')),
      catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

  getRecipe(id: number): Observable<Recipe>{
    const url = `${this.recipesUrl}/${id}`;

    this.messageService.add(`RecipeService: fethcing recipe id=${id}`);
    return this.http.get<Recipe>(url).pipe(
      tap( _ => this.log(`fetched recipe id= ${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  /** Log a RecipeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }

  /**
   * Handle Http operations that failed.
   * Let the app continue;
   * @param http
   * @param messageService
   */
  private handleError<T>(operation = 'operation', result ?: T){
    return(error: any): Observable<T> => {
      // TODO: send error to remote logging.
      console.error(error);

      // TODO: transform error for user.
      this.log(`${operation} failed: ${error.messaGge}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
