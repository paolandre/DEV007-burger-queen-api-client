import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-total-bill-sum',
    templateUrl: './total-bill-sum.component.html',
    styleUrls: ['./total-bill-sum.component.css']
})

export class TotalBillSum {
    @Input() totalPrice: number = 0;
}