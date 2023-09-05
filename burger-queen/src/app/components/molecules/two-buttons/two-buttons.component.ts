import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-buttons',
  templateUrl: './two-buttons.component.html',
  styleUrls: ['./two-buttons.component.css'],
})
export class TwoButtonsComponent {
  @Input() button1: string = '';
  @Input() button2: string = '';
  @Input() onclick1: Function = () => {};
  @Input() onclick2: Function = () => {};
  changeColor1: boolean = false;
  changeColor2: boolean = true;

  cambiarColor1() {
    this.changeColor1 = false;
    this.changeColor2 = true;
  }
  cambiarColor2() {
    this.changeColor1 = true;
    this.changeColor2 = false;
  }
}
