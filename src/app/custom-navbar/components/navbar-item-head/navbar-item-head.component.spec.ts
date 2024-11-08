import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemHeadComponent } from './navbar-item-head.component';

describe('NavbarItemHeadComponent', () => {
  let component: NavbarItemHeadComponent;
  let fixture: ComponentFixture<NavbarItemHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarItemHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarItemHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
