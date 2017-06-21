// recipe.service.ts
import { Recipe } from './recipe.model';

export class RecipeService {

	// pole prywatne, niedostępne z zewnątrz
	private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes(): Recipe[]{
  // metoda zwracająca tablicę przepisów
  // w tym przypadku zwraca dokładną kopię, a nie referencję
  	return this.recipes.slice();
  }

}