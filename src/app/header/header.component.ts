// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

	// obiekt event emmitera używany do emisji zdarzenia
	@Output() featureSelected = new EventEmitter<string>();

	onSelect(feature: string){
		this.featureSelected.emit(feature);
	}

}
