import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsumirApiService } from '../../../service/consumir-api.service';

@Component({
  selector: 'app-container-product-price',
  templateUrl: './container-product-price.component.html',
  styleUrls: ['./container-product-price.component.css'],
})
export class ContainerProductPriceComponent implements OnInit {
  list: Array<any> = [];
  @Input() momentDay: string = '';
  /* set momentDay(val: string) {
    debugger;
    this._momentDay = val.toUpperCase();
  } */
  @Output() productClicked = new EventEmitter<any>(); // Emitir evento de producto clicado

  constructor(private consumirApi: ConsumirApiService) {}

  ngOnInit(): void {
    this.consumirApi.getProducts().subscribe((data) => {
      console.log(data);
      this.list = data;
    });
  }

  onProductClicked(product: any) {
    // Emitir el evento de producto clicado
    console.log(product, 333);
    this.productClicked.emit(product);
  }
}
