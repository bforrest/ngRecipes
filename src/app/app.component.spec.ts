import {TestBed, waitForAsync} from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
//import { RecipesComponent } from './recipes/recipes.component';

describe('AppComponent', () => {
  beforeAll(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
        //,RecipesComponent
      ],
    }).compileComponents();
    TestBed.createComponent(AppComponent);
  }));

    it('should render the component', async () => {
      const { getByText } = await render(AppComponent);
      expect(getByText('ngRecipes'));
    });
});
