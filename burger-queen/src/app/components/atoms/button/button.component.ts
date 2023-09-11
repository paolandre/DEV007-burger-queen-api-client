import { Component, Input, ElementRef, Renderer2, OnInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'botoncin',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnChanges{
  @Input() text: string = '';
  @Input() handleClick: Function = () => {};
  @Input() changeColor: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
  
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // // Accede al elemento del botón y cambia su estilo
    // const btn = this.el.nativeElement.querySelector('.btn');
    console.log(changes, 111);

    // if (this.changeColor) {
    //   // Utiliza el objeto Renderer2 para aplicar estilos de manera segura
    //   this.renderer.setStyle(btn, 'background-color', '#c1d96c;');
    //   this.renderer.setStyle(btn, 'color', 'black');
      
    // } else {
    //   // Utiliza el objeto Renderer2 para aplicar estilos de manera segura
    //   this.renderer.setStyle(btn, 'background-color', '#59343e');
    //   this.renderer.setStyle(btn, 'color', 'white');
    // }
  }
}
