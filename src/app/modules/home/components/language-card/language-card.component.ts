import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss']
})
export class LanguageCardComponent  {

  @Input() languageOption: string = "";
  @Output() goToTest: EventEmitter<string> = new EventEmitter(); 
  constructor() { }
  languageClick(){
    this.goToTest.emit(this.languageOption);
  }
}
