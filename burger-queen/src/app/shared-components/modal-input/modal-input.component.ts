import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent {
  @Input() showModal: boolean = false;
  @Input() childTitle: string = '';
  @Input() childMessage: string = '';
  @Input() input1: string = ''; // Input 1
  @Input() input2: string = ''; // Input 2
  @Input() modalInput1Placeholder: string = '';
  @Input() modalInput2Placeholder: string = '';
  @Input() Confirmar: string = '';


  closeModal() {
    this.showModal = false;
  }
}

