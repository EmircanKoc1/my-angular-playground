import { Component, Input } from '@angular/core';

@Component({
  selector: 'ct-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() headers: string[] = ["no", "name", "price"];
}
