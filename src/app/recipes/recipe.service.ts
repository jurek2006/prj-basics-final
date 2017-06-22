// recipe.service.ts
import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	// pole prywatne, niedostępne z zewnątrz
	private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A Super-tasty Schnitzel - just awesome', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1200px-Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big fat burger', 
      'What else you need to say?', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Steak_burger_with_cheese_and_onion_rings.jpg/220px-Steak_burger_with_cheese_and_onion_rings.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  getRecipes(): Recipe[]{
  // metoda zwracająca tablicę przepisów
  // w tym przypadku zwraca dokładną kopię, a nie referencję
  	return this.recipes.slice();
  }

}