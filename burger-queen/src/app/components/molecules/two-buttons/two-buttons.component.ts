import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-buttons',
  templateUrl: './two-buttons.component.html',
  styleUrls: ['./two-buttons.component.css'],
})
export class TwoButtonsComponent {
  @Input() buttonMenu: string = 'Desayuno';
  @Output() buttonChange = new EventEmitter<string>();
  showMenuBreakfast() {
    this.buttonMenu = 'Desayuno';
    console.log(this.buttonMenu);
    this.buttonChange.emit(this.buttonMenu);
  }
  showMenuDay() {
    this.buttonMenu = 'Almuerzo';
    console.log(this.buttonMenu);
    this.buttonChange.emit(this.buttonMenu);
  }
}
