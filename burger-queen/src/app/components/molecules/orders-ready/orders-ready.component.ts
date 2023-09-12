import { Component, Input, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalComponent } from 'src/app/shared-components/modal-message/modal.component';

@Component({
  selector: 'app-orders-ready',
  templateUrl: './orders-ready.component.html',
  styleUrls: ['./orders-ready.component.css'],
})
export class OrdersReadyComponent {
  @ViewChild('modal') modal!: ModalComponent;
  @Input() table: string = '';
  @Input() order: string = '';

  @Input() product: string = '';
  orders: Array<any> = [];

  detailsOrderMessage: string = '';
  detailsOrderMessage2: string = '';
  detailsOrderMessage3: string = '';
  detailsOrderMessage4: string = '';
  idOrder: number = -1;

  constructor(private consumirApi: ConsumirApiService) {}
  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.consumirApi.getOrders().subscribe((data) => {
      console.log(data, 5858);
      this.orders = data;
    });
  }

  openTable(id: string) {
    this.consumirApi.getEspecificOrder(id).subscribe((data) => {
      this.detailsOrderMessage = 'Id pedido: ' + data.id;
      this.detailsOrderMessage2 = 'Mesa: ' + data.table;
      this.detailsOrderMessage3 = 'Cliente: ' + data.client;
      this.idOrder = data.id;
    });

    this.modal.openModal();
  }
}
