import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { justify } from '../../types/input';

@Component({
  selector: 'c-card-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
})
export class CardHeaderComponent {
  @Input() justify: justify = 'center';
}
