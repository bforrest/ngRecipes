import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recipe} from "./recipe";
import {MessageService} from "./message.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = 'http://localhost:3000/api/recipes';  // URL to web api

  getRecipes(): Observable<Recipe[]> {
    this.messageService.add('RecipeService: fetch Recipes');

    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap(_ => this.log('fetched recipes')),
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

  getRecipe(id: any): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    this.messageService.add(`RecipeService: fethcing recipe id=${id}`);
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id= ${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  async addRecipe(recipe: Recipe) {
    let data = JSON.stringify(recipe);
    const jsonOption: { headers: HttpHeaders } = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.messageService.add(`RecipeService post: ${data}`);
    console.log(data);
    let reply = await this.http.post(this.recipesUrl, JSON.stringify(recipe), jsonOption)
      .pipe(
        tap(_ => this.log(`posted recipe name= $recipe.name`)),
        catchError(this.handleError('add Recipe', recipe))
      ).subscribe(response => console.log(response), err => console.error(err));

  }

  delete(recipe: Recipe) {
    this.messageService.add(`Deleting recipe ${recipe.name}`);
    const url = `${this.recipesUrl}/${recipe.id}`;
    this.http.delete(url).subscribe( response=> console.log(response), err => console.error(err));
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
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
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
    private messageService: MessageService) {
  }
}
