import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cs-slider',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent
  implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    this.sliderColorOptions.thumbColor = changes["thumbColor"].currentValue;
    this.sliderColorOptions.trackColor = changes["trackColor"].currentValue;
  }
  sliderColorOptions!: { trackColor: string, thumbColor: string };
  styleObject: any;
  @Input() sliderValue: any = 20;
  @Input() sliderMinValue: number = 0;
  @Input() sliderMaxValue: number = 100;
  @Input() sliderStep: number = 5;
  @Input() trackColor: string = "green";
  @Input() thumbColor: string = "red";

  @Output() inputValueEmitter: EventEmitter<any> = new EventEmitter();

  emitInputData() {
    this.inputValueEmitter.emit(this.sliderValue);
  }

}
