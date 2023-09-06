import { Component, Input } from '@angular/core';
import { ConsumirApiService } from 'src/app/service/consumir-api.service';


@Component({
    selector: 'app-orders-ready',
    templateUrl: './orders-ready.component.html',
    styleUrls: ['./orders-ready.component.css']
})

export class OrdersReadyComponent {
    @Input() table: string = '';
    @Input() order: string = '';

    @Input() product: string = '';
    orders: Array<any> = [];

    constructor(private consumirApi: ConsumirApiService) { }
    ngOnInit(): void {
        this.getAllOrders();

    }
    getAllOrders() {
        this.consumirApi.getOrders().subscribe((data) => {
            console.log(data, 5858);
            this.orders = data;
        });
}
}

