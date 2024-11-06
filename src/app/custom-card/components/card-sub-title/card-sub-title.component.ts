import { Component, Input } from '@angular/core';
import { textAlign } from '../../types/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'c-card-sub-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-sub-title.component.html',
  styleUrl: './card-sub-title.component.scss'
})
export class CardSubTitleComponent {

  @Input() align: textAlign = 'center';


}
