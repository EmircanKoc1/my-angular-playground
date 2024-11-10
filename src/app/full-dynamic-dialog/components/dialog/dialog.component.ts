import { Component, effect, inject, signal, ViewChild, viewChild, ViewContainerRef, WritableSignal } from '@angular/core';
import { DialogManagerService } from '../../services/dialog-manager.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fdd-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  @ViewChild("dialogBox", {
    read: ViewContainerRef,
    static: true
  }) containerRef!: ViewContainerRef;

  dialogService: DialogManagerService = inject(DialogManagerService);



  constructor() {

    effect(() => {
      const component = this.dialogService.showComponentRef();

      if (component !== null) {
        this.openDialog(component);
        console.log("open dialog  effect was executed");
      }
      else {
        console.log("open dialog  effect was executed but component null");
      }
    });

    effect(() => {
      const dialogState = this.dialogService.isShowDialog();
      if (dialogState === false) {
        this.closeDialog();
        console.log("close dialog effect was executed , dialog state : ", dialogState, "closed dialog");
      }
      else
        console.log("close dialog effect was executed , dialog state : ", dialogState, "not closed dialog");

    });

  }


  openDialog(component: any) {
    this.containerRef.clear();
    this.containerRef.createComponent(component);
    console.log("component opendialog method was executed");

  }

  closeDialog() {
    this.containerRef.clear();
    console.log("component closedialog method was executed");
  }

  closeDialogClickBackdrop() {
    if (this.dialogService.closeOnBackdropClick() === true) {
      this.dialogService.closeDialog();
    }
  }

}
