import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarItemsUlComponent } from './nav-bar-items-ul.component';

describe('NavBarItemsUlComponent', () => {
  let component: NavBarItemsUlComponent;
  let fixture: ComponentFixture<NavBarItemsUlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarItemsUlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarItemsUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
