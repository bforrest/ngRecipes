import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {RecipeEditorComponent} from "./recipe-editor/recipe-editor.component";
//import{RecipesComponent} from "./recipes/recipes.component";

//import { RecipesComponent } from './recipes/recipes.component';

// describe('AppComponent', () => {
//   beforeAll(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//         //,RecipesComponent
//       ],
//     }).compileComponents();
//     TestBed.createComponent(AppComponent);
//   }));
//
//     it('should render the component', async () => {
//       const { getByText } = await render(AppComponent);
//       expect(getByText('ngRecipes'));
//     });
// });
describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        //RecipesComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

it('should create the app', async () =>{
  const fixture  = await TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
})

  it('should render the component', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('ngRecipes'));
  });
});
