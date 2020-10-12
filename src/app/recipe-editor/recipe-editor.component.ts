import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent {
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    prep: ['', Validators.required],
    cookTime: [''],
    yield: ['', Validators.required],
    description: [''],
    recipeIngredient: this.fb.group({

    }),
    nutrition:
  })


  updateRecipe(){
    this.recipeForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  constructor(private fb: FormBuilder) { }

}
