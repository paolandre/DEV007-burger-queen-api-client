import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css'],
})
export class ModalAdminUserComponent {
  showModal: boolean = false;
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() input1: string = ''; // Input 1
  @Input() input2: string = ''; // Input 2
  @Input() input3: string = ''; // Input 3
  @Input() input4: string = ''; // Input 3

  @Input() Confirmar: string = '';
  newUserName: string = '';
  newUserEmail: string = '';
  newUserRole: string = '';
  newUserPassword: string = '';


  @Output() confirmOrder = new EventEmitter<any>();

  confirmModal(x: string, y: string, z: string, a: string) {
    this.newUserName = x;
    this.newUserEmail = y;
    this.newUserRole = z;
    this.newUserPassword = a;


    //console.log(this.newProductName, this.newProductprice);
    this.confirmOrder.emit({ name: this.newUserName, email: this.newUserEmail, role: this.newUserRole, password: this.newUserPassword});
    this.closeModal();
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
