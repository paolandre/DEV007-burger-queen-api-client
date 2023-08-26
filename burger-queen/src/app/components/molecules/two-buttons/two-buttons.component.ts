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
}
