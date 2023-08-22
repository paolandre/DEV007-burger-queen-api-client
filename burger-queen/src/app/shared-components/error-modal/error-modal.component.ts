import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }
}
