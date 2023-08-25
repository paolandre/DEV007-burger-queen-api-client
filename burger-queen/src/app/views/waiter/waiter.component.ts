import { Component } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css'],
})
export class WaiterComponent {
  specificStyleProduct: boolean = true;
  parentMessage: string = 'Desayuno';

  menuAdmin(){
    alert('funciona')
  }
  personalAdmin(){
    alert('funciona?')
  }
  anitaFunction(){
    alert('hola anita')
  }
  andyFunction(){
    alert('hola andre')
  }
}
