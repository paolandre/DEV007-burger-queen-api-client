import { Component, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalComponent } from 'src/app/shared-components/modal-message/modal.component';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
})
export class ChefComponent {
  @ViewChild('modal') modal!: ModalComponent;
  detailsOrderMessage: string = '';
  detailsOrderMessage2: string = '';
  detailsOrderMessage3: string = '';
  detailsOrderMessage4: string = '';
  orders: Array<any> = [];
  products: Array<any> = [];
  id: number = 0;
  date: any;

  constructor(private consumirApi: ConsumirApiService) {}
  ngOnInit(): void {
    this.getAllOrders();
    this.resetCronometer(this.date);
  }

  getAllOrders() {
    this.consumirApi.getOrders().subscribe((data) => {
      console.log(data);
      this.orders = data;
    });
  }
  getOrderForId(id: string) {
    this.consumirApi.getEspecificOrder(id).subscribe((data) => {
      console.log(data);
    });
  }

  onclick(id: string) {
    this.consumirApi.changeStatusOrders(id).subscribe((data2) => {
      console.log(data2, 444);
      this.getAllOrders();
    });
  }

  message(id: string) {
    this.products = [];
    this.consumirApi.getEspecificOrder(id).subscribe((data) => {
      data.products.forEach((element: any) => {
        this.products.push(`${element.name}, ${element.quantity}`);
      });
      this.detailsOrderMessage = `Mesero: ${localStorage.getItem(
        'user_email'
      )}`;

      const productNames = data.products.map((product: any) => product.name);
      const productQuantity = data.products.map(
        (product: any) => product.quantity
      );

      this.detailsOrderMessage2 = `Mesa: ${data.table}`;

      this.detailsOrderMessage3 = `Pedido: ${this.products.join(' - ')}`;
    });

    this.modal.openModal();
  }

  finishOrder() {}

  formatTime(timeString: string): string {
    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  // funcion para calcular tiempo de preparacion desde orden generada
  cronometer(dataEntry: any) {
    this.date = dataEntry;
    const currentTime = new Date().getTime();
    const initOrderTime = new Date(dataEntry).getTime();
    const elapsedTime = currentTime - initOrderTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    return `${this.formatoDosDigitos(hours)}:${this.formatoDosDigitos(
      minutes
    )}:${this.formatoDosDigitos(seconds)}`;
  }

  formatoDosDigitos(valor: number): string {
    return valor < 10 ? `0${valor}` : valor.toString();
  }

  resetCronometer(dataEntry: any) {
    setInterval(() => {
      this.cronometer(dataEntry);
    }, 1000);
  }
}
