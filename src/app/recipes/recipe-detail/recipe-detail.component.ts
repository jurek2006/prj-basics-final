import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	@Input() recipeDetail: Recipe;

  constructor(private slSevice: ShoppingListService) {}

  ngOnInit() {
  }

  onAddToShoppingList(){
  	this.slSevice.addIngredients(this.recipeDetail.ingredients);
  }

}
