import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-admin-product',
  templateUrl: './modal-admin-product.component.html',
  styleUrls: ['./modal-admin-product.component.css']
})
export class ModalAdminProductComponent {
  @Input() showModal: boolean = false;
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() childMessage1: string = '';
  @Input() input1: string = ''; // Input 1
  @Input() input2: string = ''; // Input 2
  @Input() input3: string = ''; // Input 3
  @Input() modalInput1Placeholder: string = '';
  @Input() modalInput2Placeholder: string = '';
  @Input() modalInput3Placeholder: string = '';
  @Input() Confirmar: string = '';


  closeModal() {
    this.showModal = false;
  }
}

