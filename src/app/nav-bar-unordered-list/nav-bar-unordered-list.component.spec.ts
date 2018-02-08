import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUnorderedListComponent } from './nav-bar-unordered-list.component';

describe('NavBarUnorderedListComponent', () => {
  let component: NavBarUnorderedListComponent;
  let fixture: ComponentFixture<NavBarUnorderedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarUnorderedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarUnorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
