import { Component, Input } from '@angular/core';
import { textAlign } from '../../types/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'c-card-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {

  @Input() align: textAlign = 'center';
}
