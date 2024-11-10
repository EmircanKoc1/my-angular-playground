import { CommonModule } from '@angular/common';
import { Component, Input, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'ca-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() label: string = "label not defined";
  isShowAccordionItem: WritableSignal<boolean> = signal(false);

  closeOrOpen() {
    this.isShowAccordionItem.update(value => !value);
  }

}
