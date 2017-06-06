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
	@Output() recipeItemSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  itemSelected(recipe: Recipe){
  	// console.log(recipe);
  	this.recipeItemSelected.emit(recipe);
  }

}
