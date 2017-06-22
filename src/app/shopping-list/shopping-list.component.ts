// shopping-list.compinent.ts
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // pobranie tablicy składników z serwisu shoppingListService
    this.ingredients = this.shoppingListService.getIngredients();
    // nasłuchiwanie, czy nastąpiła zmiana w tablicy ingredients w serwisie
    this.shoppingListService.ingredientsChanged.subscribe(
      () => {this.ingredients = this.shoppingListService.getIngredients();}
    );
  }

  onShpListItemAdded(ingredient: Ingredient){
  // metoda obsługi zdarzenia shpListItemAdded - dodająca Ingredient z formularza do listy ingredients
    this.shoppingListService.addShoppingListItem(ingredient);
  }

}
