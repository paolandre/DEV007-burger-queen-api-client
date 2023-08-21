import { Component } from '@angular/core';
import { ConsumirApiService } from '../service/consumir-api.service';


@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent {
list: Array<any> = [];

constructor(private consumirApi: ConsumirApiService) { 
this.consumirApi.getOrders().subscribe((data) => {
  console.log(data)
this.list = data;
})
}
}
