import {Component, OnInit, Inject} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Ingredient, Unit} from "../ingredient";
import {MAT_DIALOG_DATA, MatDialog,MatDialogRef} from '@angular/material/dialog';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})

export class IngredientComponent implements OnInit{
  model: Ingredient;
  recipe: Recipe;
  keys = [];
  unitType = Unit;

  submitted = false;

  onSubmit() {
    this.dialogRef.close();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }


  constructor(
    public dialogRef: MatDialogRef<IngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ingredient,
  ){
    this.model = data;
    this.keys = Object.keys(Unit);
    console.log("keys= : ", this.keys);
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  ngOnInit() {
    this.model = new Ingredient();
  }
}
