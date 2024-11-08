import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemSubPanelComponent } from './navbar-item-sub-panel.component';

describe('NavbarItemSubPanelComponent', () => {
  let component: NavbarItemSubPanelComponent;
  let fixture: ComponentFixture<NavbarItemSubPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarItemSubPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarItemSubPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
