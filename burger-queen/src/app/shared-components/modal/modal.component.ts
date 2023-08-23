import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() childMessage: string = '';
  showModal: boolean = false;

  constructor() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
