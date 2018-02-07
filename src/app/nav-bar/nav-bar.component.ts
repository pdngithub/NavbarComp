import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../data/nav-bar-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public navBarItems: NavBarItem[] = 
  [
    {
      title: "Sample 1",
      path: "sample01"
    },
    {
      title: "Sample 2 (columns)",
      path: "sample02"
    },
    {
      title: "paging",
      path: "paging"
    },
    {
      title: "forms",
      path: "forms"
    },
    {
      title: "media",
      path: "media"
    },
    {
      title: "carousel",
      path: "carousel"
    },
    {
      title: "modal",
      path: "modal"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
