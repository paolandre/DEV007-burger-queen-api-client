import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-kitchen-button',
    templateUrl: './kitchen-button.component.html',
    styleUrls: ['./kitchen-button.component.css']
})
export class KitchenButtonComponent {
            @Output() kitchenButtonClick: EventEmitter<void> = new EventEmitter<void>();
        
            onClick() {
            this.kitchenButtonClick.emit();
            }
}
