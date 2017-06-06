// recipe-item.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: Recipe;
  // event nie będzie niczego przekazywał, weźmiemy dane, który element został kliknięty z ngFor
	@Output() recipeItemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  itemSelected(){
  	this.recipeItemSelected.emit();
  }

}
