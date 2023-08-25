import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-buttons-reusable',
  templateUrl: './two-buttons-reusable.component.html',
  styleUrls: ['./two-buttons-reusable.component.css'],
})
export class TwoButtonsReusableComponent {
  @Input() button1: string = '';
  @Input() button2: string = '';
  @Input() onclick1: Function = () => {};
  @Input() onclick2: Function  = () => {};

  @Output() buttonChange = new EventEmitter<string>();
  
}
