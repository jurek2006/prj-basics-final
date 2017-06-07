// shopping-edit.component.ts
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@Output() shpListItemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onShpLstAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement){
  	// metoda obsługująca kliknięcie przycisku dodawania elementu do listy zakupów
  	// uzycie + przed amountInput.value żeby zamienić stringa na liczbę
  	this.shpListItemAdded.emit(new Ingredient(nameInput.value, +amountInput.value));
  }

}
