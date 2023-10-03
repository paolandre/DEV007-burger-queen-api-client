import { Component, Input } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() childMessage2: string = '';
  @Input() childMessage3: string = '';
  @Input() childMessage4: string = '';
  @Input() nameButton: string = '';
  @Input() idDelete: any;
  @Input() idDeleteProduct: any;
  showModal: boolean = false;

  @Input() button: boolean = false;
  @Input() confirmClick: Function = () => {};
  @Input() idOrder: number = -1;

  changeColor1: boolean = true;

  constructor(private consumirApi: ConsumirApiService) {}
  confirm() {
    if (this.idDeleteProduct) {
      this.consumirApi.deleteProduct(this.idDeleteProduct).subscribe((data) => {
        console.log(data);
      });
      // Confirmar Eliminar usuario
    } else if (this.idDelete) {
      this.consumirApi.deleteUser(this.idDelete).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.consumirApi.deleteOrder(this.idOrder).subscribe((data) => {
        console.log(data);
      });
    }
    this.closeModal();
    window.location.reload();
  }
  getUsers() {
    throw new Error('Method not implemented.');
  }
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
