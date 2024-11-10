import { Component, inject } from '@angular/core';
import { DialogComponent } from "../../components/dialog/dialog.component";
import { DialogManagerService } from '../../services/dialog-manager.service';
import { DialogContent1Component } from '../../components/dialog-content1/dialog-content1.component';
import { DialogContent2Component } from '../../components/dialog-content2/dialog-content2.component';

@Component({
  selector: 'fdd-sample1',
  standalone: true,
  imports: [DialogComponent],
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.scss'
})
export class Sample1Component {

  dialogService: DialogManagerService = inject(DialogManagerService);

  openDialog() {
    console.log("sample1 opendialog method was executed");
    this.dialogService.openDialog(DialogContent1Component);
  }

  openDialog2() {
    console.log("sample1 opendialog method was executed");
    this.dialogService.openDialog(DialogContent2Component,{
      dialogBoxWidth:"200px",
      dialogBackdropColor:"pink",
      dialogBoxBackgroundColor:"red",
      dialogBoxHeight:"200px"
    });
  }

  closeDialog() {
    console.log("sample1 closedialog method was executed");
    
    this.dialogService.closeDialog();
  }



}
