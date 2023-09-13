import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  SimpleChange,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'botoncin',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnChanges {
  @Input() text: string = '';
  @Input() handleClick: Function = () => {};
  @Input() changeColor: boolean = false;

  constructor() {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 111);
  }
}
