// shopping-list.service.ts
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

	ingredientsChanged = new EventEmitter<void>();

	private ingredients: Ingredient[] = [
	    new Ingredient('Apples', 5),
	    new Ingredient('Tomatoes', 10),
	];

	getIngredients(): Ingredient[]{
		return this.ingredients.slice();
	}

	addShoppingListItem(ingredient: Ingredient){
	  // metoda dodająca Ingredient do listy ingredients
	    this.ingredients.push(ingredient);
	    this.ingredientsChanged.emit();
	  }
}