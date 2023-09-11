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

  changeColor1: boolean = true;
  changeColor2: boolean = false;

  
  innerClick1(){
    this.changeColor1 = true;
    this.changeColor2 = false;
    this.onclick1()
    
  }  

  innerClick2(){
    this.changeColor2 = true;
    this.changeColor1 = false;
    this.onclick2()
  }
}
