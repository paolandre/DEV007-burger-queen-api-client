import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'botoncin',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() handleClick: Function = () => {};
  @Input() changeColor: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Accede al elemento del botón y cambia su estilo
    const btn = this.el.nativeElement.querySelector('.btn');

    if (this.changeColor) {
      // Utiliza el objeto Renderer2 para aplicar estilos de manera segura
      this.renderer.setStyle(btn, 'background-color', '#c1d96c;');
      this.renderer.setStyle(btn, 'color', 'black');
    } else {
      // Utiliza el objeto Renderer2 para aplicar estilos de manera segura
      this.renderer.setStyle(btn, 'background-color', '#59343e');
      this.renderer.setStyle(btn, 'color', 'white');
    }
  }
}
