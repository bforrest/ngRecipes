import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { TaskComponent } from './task/task.component';
import { IngredientComponent } from './ingredient/ingredient.component';


@NgModule({
  declarations: [AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    DashboardComponent,
    MessagesComponent,
    RecipeEditorComponent,
    TaskComponent,
    IngredientComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
