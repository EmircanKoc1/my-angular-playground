import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalVisible: WritableSignal<boolean> = signal<boolean>(false);

  closeModal() {
    this.isModalVisible.set(false);

  }

  openModal() {
    this.isModalVisible.set(true);
  }

}
