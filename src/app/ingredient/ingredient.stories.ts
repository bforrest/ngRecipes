import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import { IngredientComponent} from "./ingredient.component";
import {Unit} from "../ingredient";

export default{
  title: 'Ingredient',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
}

export const ingredientData = {
  name: 'Bok-Choy',
  quantity: 1,
  unit: Unit.Each
}

export const Default = () => ({
  component: IngredientComponent,
  // template: `
  // <form><app-ingredient formControlName="ingredient"></app-ingredient></form>`,
  props: {
    model: object('model', { ...ingredientData })
  }
})
