import { Component, OnInit } from '@angular/core';
import { ConsumirApiService } from '../../../service/consumir-api.service';

@Component({
    selector: 'app-container-product-price',
    templateUrl: './container-product-price.component.html',
    styleUrls: ['./container-product-price.component.css']
})
export class ContainerProductPriceComponent implements OnInit {
    list: Array<any> = [];

    constructor(private consumirApi: ConsumirApiService) { }

    ngOnInit(): void {
        this.consumirApi.getOrders().subscribe((data) => {
            console.log(data);
            this.list = data;
        });
    }
}

