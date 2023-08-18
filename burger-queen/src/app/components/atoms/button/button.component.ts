import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'botoncin',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text : string = 'botoncito';


}
