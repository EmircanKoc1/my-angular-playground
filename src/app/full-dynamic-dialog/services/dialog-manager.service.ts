import { effect, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dialogOptions } from '../types/dialog-manager.service.types';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {
  constructor() {
    effect(() => {
      const v1 = this.showComponentRef();
      const v2 = this.isShowDialog();
      console.log("showComponentRef value : ", v1, "isShowDialog value :", v2);

    });
  }
  showComponentRef: WritableSignal<any> = signal<any>(null);
  isShowDialog: WritableSignal<boolean> = signal(false);
  closeOnBackdropClick: WritableSignal<boolean> = signal(false);
  dialogOptions: WritableSignal<dialogOptions> = signal<dialogOptions>({
    dialogBoxWidth: "400px",
    dialogBoxHeight: "300px",
    dialogBackdropColor: "rgba(0, 0, 0, 0.7)",
    dialogBoxBackgroundColor: "white"
  });
  openDialog(component: any, dialogOptions?: dialogOptions) {

    if (dialogOptions) {
      this.dialogOptions.set(dialogOptions);
    }
    this.showComponentRef.set(component);
    this.isShowDialog.set(true);
  }

  closeDialog() {
    this.isShowDialog.set(false);
    this.showComponentRef.set(null);
  }

}
