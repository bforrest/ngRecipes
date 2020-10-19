import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('RecipeService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', () => {
    service = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });
});
