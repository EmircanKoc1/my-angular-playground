import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { TableRowComponent } from "../../components/table-row/table-row.component";
import { TableDataComponent } from "../../components/table-data/table-data.component";

@Component({
  selector: 'ct-sample1',
  standalone: true,
  imports: [TableComponent, TableRowComponent, TableDataComponent],
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.scss'
})
export class Sample1Component {

}
