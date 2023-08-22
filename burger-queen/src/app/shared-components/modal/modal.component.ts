import { Component } from '@angular/core';

@Component({
    selector: 'app-modal-dos',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponentDos {

    showModal: boolean = false;

    constructor() { }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }

}
