import { CommonModule } from '@angular/common';
import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { justify } from '../../types/input';

@Component({
  selector: 'c-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent
// implements OnChanges 
{
  @Input() justify: justify = 'center';

  // ngOnChanges(changes: SimpleChanges): void {

  //   const justifyValue = changes["justify"].currentValue;

  //   if (justifyValue === undefined)
  //     this.justify = "center";


  // }


}
