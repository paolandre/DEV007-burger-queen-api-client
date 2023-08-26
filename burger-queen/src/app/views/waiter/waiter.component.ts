import { Component } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css'],
})
export class WaiterComponent {
  specificStyleProduct: boolean = true;
  parentMessage: string = 'Desayuno';

  onclickBreackfast() {
    this.parentMessage = 'Desayuno';
    console.log(this.parentMessage);
  }
  onclickLunch() {
    this.parentMessage = 'Almuerzo';
    console.log(this.parentMessage);
  }
}
