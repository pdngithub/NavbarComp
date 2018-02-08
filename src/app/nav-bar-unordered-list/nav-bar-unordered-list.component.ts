import { Component, OnInit, Input } from '@angular/core';
import { NavBarItem } from '../data/nav-bar-item';


@Component({
  selector: '[app-nav-bar-unordered-list]',
  templateUrl: './nav-bar-unordered-list.component.html',
  styleUrls: ['./nav-bar-unordered-list.component.css']
})
export class NavBarUnorderedListComponent implements OnInit {

  @Input() navBarItemsUl: NavBarItem[] = [
  ];

  constructor() { }

  ngOnInit() {
  }

}
