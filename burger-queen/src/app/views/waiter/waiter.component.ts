import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { ModalInputComponent } from 'src/app/shared-components/modal-input/modal-input.component';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css'],
})
export class WaiterComponent {
  @ViewChild('modalClient') modalClient!: ModalInputComponent;
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

  sendOrder(clientInfo: any) {
    console.log(clientInfo, this.selectedProducts);
    const dataOrder = {
      client: clientInfo.client,
      products: this.selectedProducts,
      table: clientInfo.table,
    };
  }

  onclickBreackfast() {
    this.parentMessage = 'Desayuno';
    console.log(this.parentMessage);
  }

  onclickLunch() {
    this.parentMessage = 'Almuerzo';
    console.log(this.parentMessage);
  }

  onProductClicked(product: Product) {
    const index = this.selectedProducts.findIndex(
      (item) => item.name === product.name
    );
    if (index !== -1) {
      this.selectedProducts[index].quantity =
        (this.selectedProducts[index].quantity || 0) + 1;
    } else {
      this.selectedProducts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
  }
  incrementProduct(index: number) {
    this.selectedProducts[index].quantity =
      (this.selectedProducts[index].quantity || 0) + 1;
  }

  decrementProduct(index: number) {
    if (this.selectedProducts[index].quantity >= 2) {
      this.selectedProducts[index].quantity =
        (this.selectedProducts[index].quantity || 0) - 1;
    }
  }

  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
  }

  onKitchenButtonClick() {
    this.modalClient.openModal();
  }
}
