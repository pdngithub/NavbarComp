import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarListItemComponent } from './nav-bar-list-item.component';

describe('NavBarListItemComponent', () => {
  let component: NavBarListItemComponent;
  let fixture: ComponentFixture<NavBarListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
