import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	btnRecipesClicked: boolean = true;
	btnShoppingListClicked: boolean = false;

	onNavBtnClicked(btnClicked: {btn: string}){
	// obsługa zdarzenia navBtnClicked emitowanego przez app-header
	// na podstawie klikniętego przycisku w pasku nawigacji ustawiana jest wartość btnRecipesClickedi i btnShoppingListClicked

		if(btnClicked.btn === "Recipes"){
			this.btnRecipesClicked = true;
			this.btnShoppingListClicked = false;
		}
		else if(btnClicked.btn === "Shopping List"){
			this.btnRecipesClicked = false;
			this.btnShoppingListClicked = true;
		}

	}
}
