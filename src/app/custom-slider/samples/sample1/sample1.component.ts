import { Component } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
  selector: 'cs-sample1',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.scss'
})
export class Sample1Component {
  value: any;
  setValue(emittedValue: any) {
    this.value = emittedValue;
  }
}
