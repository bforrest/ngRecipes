import {Component} from '@angular/core';
import {Ingredient, Unit} from "../ingredient";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})

export class IngredientComponent {
  model = new Ingredient();
  unitType= Unit;
  keys= Object.keys;

  submitted = false;

  onSubmit() { this.submitted = true; }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newIngredient(){
    this.model = new Ingredient();
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }
}
