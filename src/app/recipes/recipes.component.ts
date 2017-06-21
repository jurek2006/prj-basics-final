// recipes.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';


import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

	selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

}
