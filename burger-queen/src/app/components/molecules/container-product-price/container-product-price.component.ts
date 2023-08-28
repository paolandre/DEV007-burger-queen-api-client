import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private consumirApi: ConsumirApiService) {}

  ngOnInit(): void {
    this.consumirApi.getProducts().subscribe((data) => {
      console.log(data);
      this.list = data;
    });
  }
}
