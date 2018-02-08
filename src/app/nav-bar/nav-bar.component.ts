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
      title: "Home",
      path: ""
    },
    {
      title: "Beauty",
      path: "beauty"
    },
    {
      title: "Charm",
      path: "charm"
    },
    {
      title: "Down",
      path: "down"
    },
    {
      title: "Strange",
      path: "strange"
    },
    {
      title: "Top",
      path: "top"
    },
    {
      title: "Up",
      path: "up"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
