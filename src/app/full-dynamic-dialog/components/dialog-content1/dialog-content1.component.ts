import { Component, inject } from '@angular/core';
import { DialogManagerService } from '../../services/dialog-manager.service';

@Component({
  selector: 'fdd-dialog-content1',
  standalone: true,
  imports: [],
  templateUrl: './dialog-content1.component.html',
  styleUrl: './dialog-content1.component.scss'
})
export class DialogContent1Component {

  dialogService: DialogManagerService = inject(DialogManagerService);



}
