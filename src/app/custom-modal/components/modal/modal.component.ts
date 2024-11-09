import { AfterContentInit, Component, EventEmitter, inject, Output, Signal, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent
  implements AfterContentInit {

  modalService: ModalService = inject(ModalService);
 



  ngAfterContentInit(): void {
    this.contentContainerRef.clear();
    this.contentContainerRef.createEmbeddedView(this.contentTemplateRef);
  }

  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();


  @ViewChild("contentContainer", {
    read: ViewContainerRef,
    static: true
  }) contentContainerRef!: ViewContainerRef;

  @ViewChild("contentTemplate", {
    read: TemplateRef<any>,
    static: true
  }) contentTemplateRef!: TemplateRef<any>;


  cancel() {
    this.confirmed.emit();
    this.modalService.closeModal();
  }

  confirm() {
    this.cancelled.emit();
    this.modalService.closeModal();
  }



}
