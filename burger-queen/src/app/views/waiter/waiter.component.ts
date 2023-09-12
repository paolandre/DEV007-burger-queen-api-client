import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { ModalInputComponent } from 'src/app/shared-components/modal-add-order/modal-input.component';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';

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
  finalCount: number = 0;

  constructor(private consumirApi: ConsumirApiService) {}

  sendOrder(clientInfo: any) {
    console.log(clientInfo, this.selectedProducts);
    const dataOrder = {
      client: clientInfo.client,
      table: clientInfo.table,
      products: this.selectedProducts,
      status: 'pending',
      dataEntry: new Date(),
    };
    this.consumirApi.postOrder(dataOrder).subscribe(() => {
      console.log(dataOrder);
    });
    window.location.reload();
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
    this.calculateTotal();
  }
  incrementProduct(index: number) {
    this.selectedProducts[index].quantity =
      (this.selectedProducts[index].quantity || 0) + 1;
    this.calculateTotal();
  }

  decrementProduct(index: number) {
    if (this.selectedProducts[index].quantity >= 2) {
      this.selectedProducts[index].quantity =
        (this.selectedProducts[index].quantity || 0) - 1;
    }
    this.calculateTotal();
  }

  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
    this.calculateTotal();
  }

  onKitchenButtonClick() {
    this.modalClient.openModal();
  }
  calculateTotal() {
    this.finalCount = this.selectedProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    console.log(this.finalCount);
  }
}
