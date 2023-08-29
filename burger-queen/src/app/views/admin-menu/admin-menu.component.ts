import { Component, ViewChild } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';
import { ModalComponent } from 'src/app/shared-components/modal/modal.component';

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.component.html',
    styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent {
    @ViewChild('modal') modal!: ModalComponent;
    detailsOrderMessage: string = '';
    detailsOrderMessage2: string = '';
    detailsOrderMessage3: string = '';
    detailsOrderMessage4: string = '';
    orders: Array<any> = [];
    products: Array<any> = [];
    id: number = 0;
    hora: number = 0;
    minuto: number = 0;
    segundo: number = 0;
    timer: string = `${this.hora}:${this.minuto}:${this.segundo}`;

    constructor(private consumirApi: ConsumirApiService) {}
    ngOnInit(): void {
    this.getAllOrders();
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
        console.log(data2);
        this.getAllOrders();
    });
    }

    message(id: string) {
    this.products = [];
    this.consumirApi.getEspecificOrder(id).subscribe((data) => {
        data.products.forEach((element: any) => {
        this.products.push(`${element.product.name}`);
        });
        console.log(this.products);
        this.detailsOrderMessage = `Cliente: ${data.client}`;
        this.detailsOrderMessage2 = `Estado: ${data.status}`;
        this.detailsOrderMessage3 = `Pedido: ${this.products.join('-')}`;
    });

    this.modal.openModal();
    }

    timerFunction() {
    setInterval(() => {
        this.segundo += 1;
    }, 1000);
    }
    finishOrder() {}
}
