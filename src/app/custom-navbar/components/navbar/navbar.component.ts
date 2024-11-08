import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NavbarItemHeadComponent } from '../navbar-item-head/navbar-item-head.component';

@Component({
  selector: 'cn-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent
  implements AfterViewInit {

  hasProjectedContent: boolean = false;

  @Input() isNavbarHeadUsed: 'true' | 'false' = 'false';


  @ViewChild("navbarHeadContainer", {
    read: ViewContainerRef,
    static: true
  }) containerRef!: ViewContainerRef;


  @ViewChild("navbarHead", {
    read: TemplateRef,
    static: true
  }) templateRef!: TemplateRef<any>;

  ngAfterViewInit(): void {

    if (this.isNavbarHeadUsed === 'true') {
      this.containerRef.clear();
      this.containerRef.createEmbeddedView(this.templateRef);
    }

  }

}
