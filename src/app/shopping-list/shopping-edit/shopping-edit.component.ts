// shopping-edit.component.ts
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@Output() shpListItemAdded = new EventEmitter<Ingredient>();
	// Dostęp do pól formularza za pomocą referencji lokalnej
	@ViewChild('nameInput') nameInputAdded: ElementRef;
	@ViewChild('amountInput') amountInputAdded: ElementRef;

  constructor() { }amountInput

  ngOnInit() {
  }

  onShpLstAddItem(){
  	// metoda obsługująca kliknięcie przycisku dodawania elementu do listy zakupów
  	// uzycie + przed amountInput.value żeby zamienić stringa na liczbę
  	this.shpListItemAdded.emit(new Ingredient(this.nameInputAdded.nativeElement.value, this.amountInputAdded.nativeElement.value));
  }

}
