import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NavbarItemComponent } from "../../components/navbar-item/navbar-item.component";
import { NavbarItemHeadComponent } from "../../components/navbar-item-head/navbar-item-head.component";

@Component({
  selector: 'app-sample1',
  standalone: true,
  imports: [
    NavbarComponent,
    NavbarItemComponent,
    NavbarItemHeadComponent,
    NavbarItemHeadComponent],
  templateUrl: './sample1.component.html',
  styleUrl: './sample1.component.scss'
})
export class Sample1Component {

  navbar4SubPanelItems: string[];

  constructor() {
    this.navbar4SubPanelItems = new Array(10).fill("navbar4 item").map((x) => {
      return x;
    });
  }


}
