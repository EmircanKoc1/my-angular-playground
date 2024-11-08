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

  @ViewChild("subPanel", {
    read: NavbarItemSubPanelComponent,
    static: true
  }) subPanelRef!: NavbarItemSubPanelComponent;


  openShowPanel() {
    this.subPanelRef.showSubPanel();

  }

  closeShowPanel() {
    this.subPanelRef.closeShowPanel();
  }


}
