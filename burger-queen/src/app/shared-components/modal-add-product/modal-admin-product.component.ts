import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-admin-product',
  templateUrl: './modal-admin-product.component.html',
  styleUrls: ['./modal-admin-product.component.css'],
})
export class ModalAdminProductComponent {
  showModal: boolean = false;
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() input1: string = ''; // Input 1
  @Input() input2: string = ''; // Input 2
  @Input() input3: string = ''; // Input 3

  @Input() Confirmar: string = '';
  client: string = '';
  table: string = '';
  @Output() confirmOrder = new EventEmitter<any>();

  confirmModal(x: string, y: string) {
    this.client = x;
    this.table = y;
    console.log(this.client, this.table);
    this.confirmOrder.emit({ client: this.client, table: this.table });
    this.closeModal();
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
