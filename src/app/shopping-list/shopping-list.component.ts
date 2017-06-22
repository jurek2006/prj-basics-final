// shopping-list.compinent.ts
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // pobranie tablicy składników z serwisu ShoppingListService
    this.ingredients = this.slService.getIngredients();
    // nasłuchiwanie, czy nastąpiła zmiana w tablicy ingredients w serwisie
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients;}
    );
  }

}
