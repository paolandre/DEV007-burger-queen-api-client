import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css'],
})
export class WaiterComponent {
  specificStyleProduct: boolean = true;
  parentMessage: string = 'Desayuno';
  selectedProducts: Product[] = [];

  showModal: boolean = false;
  modalTitle: string = 'Nombre del cliente';
  modalMessage: string = 'Número de la mesa';
  modalInput1: string = '';
  modalInput2: string = '';
  modalInput1Placeholder: string = 'Nombre';
  modalInput2Placeholder: string = 'Mesa';
  modaltext: string = 'Confirmar';



  onclickBreackfast() {
    this.parentMessage = 'Desayuno';
    console.log(this.parentMessage);
  }

  onclickLunch() {
    this.parentMessage = 'Almuerzo';
    console.log(this.parentMessage);
  }

  onProductClicked(product: Product) {
    this.selectedProducts.push(product);
  }

  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
  }

  onKitchenButtonClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
