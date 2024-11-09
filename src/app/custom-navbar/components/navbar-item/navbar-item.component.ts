import { Component, Input, ViewChild } from '@angular/core';
import { NavbarItemSubPanelComponent } from "../navbar-item-sub-panel/navbar-item-sub-panel.component";

@Component({
  selector: 'cn-navbar-item',
  standalone: true,
  imports: [NavbarItemSubPanelComponent],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent {

  @Input("label") label: string = "label not defined";

  isOpenedSubPanel: boolean = false;
  isMouseOverSubPanel: boolean = false;

  @ViewChild("subPanel", {
    read: NavbarItemSubPanelComponent,
    static: true
  }) subPanelRef!: NavbarItemSubPanelComponent;


  openShowPanel() {
    if (!this.isOpenedSubPanel) {
      this.subPanelRef.showSubPanel();
      this.isOpenedSubPanel = true;
      console.log(`openshowpanel method was executed, showPanel : ${this.isOpenedSubPanel}, is mouse over subpanel :  ${this.isMouseOverSubPanel}`);
    }

  }

  closeShowPanel() {
    if (this.isOpenedSubPanel) {
      setTimeout(() => {
        if (!this.isMouseOverSubPanel) {
          this.closeSubPanelDirect();
        }
      }, 100);

    }
  }

  closeSubPanelDirect() {
    this.subPanelRef.closeShowPanel();
    this.isOpenedSubPanel = false;
    this.mouseOutsideSubPanel();
  }
  mouseOverSubPanel() {
    this.isMouseOverSubPanel = true;
  }

  mouseOutsideSubPanel() {
    this.isMouseOverSubPanel = false;
    this.closeSubPanelDirect();
  }


}
