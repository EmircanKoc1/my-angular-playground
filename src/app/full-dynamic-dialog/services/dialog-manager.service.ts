import { effect, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  openDialog(component: any) {
    this.showComponentRef.set(component);
    this.isShowDialog.set(true);
  }

  closeDialog() {
    this.isShowDialog.set(false);
    this.showComponentRef.set(null);
  }

}
