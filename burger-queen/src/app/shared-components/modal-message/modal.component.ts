import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() childMessage2: string = '';
  @Input() childMessage3: string = '';
  @Input() childMessage4: string = '';
  showModal: boolean = false;

  constructor() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
