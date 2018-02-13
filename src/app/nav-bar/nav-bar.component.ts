import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NavBarItem } from '../data/nav-bar-item';
import { Event } from '@angular/router/src/events';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewChecked {

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

  onResize( event: Event ) {
    $(".godown-navbar").height($(".navbar-fixed-top").height());
  };
  

  ngAfterViewChecked() {
    this.onResize( null );
  }

}
