import { Component, inject } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'cm-sample1',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.scss'
})
export class Sample1Component {

  modalService: ModalService = inject(ModalService);

  cancel() {
    console.log("cancel method was executed");
    this.modalService.closeModal();
  }

  confirm() {
    console.log("confirm method was executed");
    this.modalService.closeModal();
  }




}
