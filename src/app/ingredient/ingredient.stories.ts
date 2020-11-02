import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { IngredientComponent} from "./ingredient.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {Unit} from "../ingredient";
import {moduleMetadata, storiesOf} from "@storybook/angular";

export default{
  title: 'Ingredient',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
}

storiesOf('IngredientForm | IngredientComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    imports: [FormsModule],
    declarations: [IngredientComponent]
  }))
  .add('Default', () => ({
    component: IngredientComponent,
    // template: `
    // <form><app-ingredient formControlName="ingredient"></app-ingredient></form>`,
    props: {
      ngModel: object('model', { ...ingredientData }),
      ngModelChange: action('ngModelChnage')
    }
  }))
export const ingredientData = {
  name: 'Bok-Choy',
  quantity: 1,
  unit: Unit.Each
}

// export const Default = () => ({
//   component: IngredientComponent,
//   // template: `
//   // <form><app-ingredient formControlName="ingredient"></app-ingredient></form>`,
//   props: {
//     model: object('model', { ...ingredientData })
//   }
// })export const Default = () => ({
//   component: IngredientComponent,
//   // template: `
//   // <form><app-ingredient formControlName="ingredient"></app-ingredient></form>`,
//   props: {
//     model: object('model', { ...ingredientData })
//   }
// })
