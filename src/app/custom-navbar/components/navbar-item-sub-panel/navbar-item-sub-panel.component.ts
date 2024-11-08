import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'cn-navbar-item-sub-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-item-sub-panel.component.html',
  styleUrl: './navbar-item-sub-panel.component.scss'
})
export class NavbarItemSubPanelComponent {

  isShowSubPanel: boolean = false;

  showSubPanel() {
    this.isShowSubPanel = true;
  }

  closeShowPanel() {
    this.isShowSubPanel = false;
  }


}
