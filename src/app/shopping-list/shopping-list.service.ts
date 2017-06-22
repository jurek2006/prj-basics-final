// shopping-list.service.ts
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
	    new Ingredient('Apples', 5),
	    new Ingredient('Tomatoes', 10),
	];

	getIngredients(): Ingredient[]{
		// zwraca kopię tablicy ingredients
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient){
	  // metoda dodająca Ingredient do listy ingredients
	    this.ingredients.push(ingredient);
	    this.ingredientsChanged.emit(this.ingredients.slice());
	  }
}