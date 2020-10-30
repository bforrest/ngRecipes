import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Unit } from '../ingredient';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})

export class RecipeEditorComponent {
  unitType= Unit;
  keys= Object.keys;
  @Input() recipe: Recipe;

  constructor() { }

}
