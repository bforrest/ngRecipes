import {Component, OnInit, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Ingredient, Unit} from "../ingredient";

type ChangeCallbackFn<T> = (value: T) => void;
type TouchCallbackFn = () => void;

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => IngredientComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IngredientComponent),
      multi: true
    }
  ]
})

export class IngredientComponent implements ControlValueAccessor, Validator, OnInit {

  ingredientFormGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    quantity: [''],
    unit: ['']
  });

  @Input() model: Ingredient;
  submitted = false;
  unitOptions = [];

  unitType = Unit;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private fb: FormBuilder) { }

  onTouched: () => void = () => { };

  ngOnInit(): void {
    this.unitOptions = Object.keys(this.unitType);
  }

  registerOnChange(fn: any): void {
    this.ingredientFormGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if(this.ingredientFormGroup.valid) {
      return null;
    }
    return { invalidForm: { valid: false, message: 'Ingredient fields are invalid.'}}
  }

  writeValue(val: any): void {
    if(val) {
      this.ingredientFormGroup.setValue(val, {emitEvent: false});
    }
  }

  setDisabledState(isDisabled: boolean) {
    if(isDisabled){
      this.ingredientFormGroup.disable();
    } else {
      this.ingredientFormGroup.enable();
    }
  }

}
