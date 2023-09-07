import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css'],
})
export class ModalInputComponent {
  showModal: boolean = false;
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() input1: string = ''; // Input 1
  @Input() input2: string = ''; // Input 2
  @Input() modalInput1Placeholder: string = '';
  @Input() modalInput2Placeholder: string = '';
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
