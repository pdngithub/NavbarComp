import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-nav-bar-list-item]',
  templateUrl: './nav-bar-list-item.component.html',
  styleUrls: ['./nav-bar-list-item.component.css']
})
export class NavBarListItemComponent implements OnInit {

  @Input() public link: string = "defaultLink";
  @Input() public title: string = "defaultTitle";

  constructor() { }

  ngOnInit() {
  }

}
