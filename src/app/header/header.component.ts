import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

	// obiekt event emmitera używany do emisji zdarzenia
	@Output() navBtnClicked = new EventEmitter<{btn: string}>();

	onNavBtnClick(event: Event){
	// metoda wywoływana przy kliknięciu w przycisk Recipes lub Shopping List na pasku nawigacji
	// w parametrze event przekazywane jest zdarzenie - za jego pomocą z targetu można wyczytać treść przycisku

		// emisja zdarzenia (jako btn przekazywana jest treść przyciskanego linka czyli Shopping List albo Recipes)
		this.navBtnClicked.emit({btn: (<HTMLInputElement>event.target).innerText});
	}

}
