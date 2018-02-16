import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NavBarItem } from '../data/nav-bar-item';
import { Event } from '@angular/router/src/events';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
// exploratory code only: remove all implements except AfterViewChecked in your code
export class NavBarComponent implements OnInit, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit {

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

  // exploratory code only: remove this function in your code
  private logStep(step: string) {
    console.log(step + " navBarHeight = " + this.getNavbarHeight().toString());
  }

  // exploratory code only: remove this function in your code
  ngOnInit() {
    this.logStep("ngOnInit");
  }

  // exploratory code only: remove this function in your code
  public ngAfterContentChecked() {
    this.logStep("ngAfterContentChecked");
  }

  private getNavbarHeight(): number {
    return $(".navbar-fixed-top").height();
  }

  // this is called to force a call to ngAfterViewChecked. 
  // ngAfterViewChecked (and ngAfterContentChecked) 
  // is called during the initialization sequence and after
  // an onResize call after a window:resize event, 
  // so that is the place to resize the navbar spacer. If 
  // the navbar spacer is re-sized here, it will be re-sized
  // again in ngAfterViewChecked, so this is a null implementation.
  // The null implementation is necessary because if the event is
  // not handled, ngAfterViewChecked is not called.
  onResize(event: Event) {
    // exploratory code only: remove this line in your code
    console.log("onResize event/call");
  };

  private resizeGodownNavbar(): void {
    $(".godown-navbar").height(this.getNavbarHeight);
  }

  // exploratory code only: remove this function in your code
  ngAfterContentInit() {
    this.logStep("ngAfterContentInit");
  }

  // exploratory code only: remove this function in your code
  ngAfterViewInit() {
    this.logStep("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    // exploratory code only: remove this line in your code
    this.logStep("ngAfterViewChecked");
    this.resizeGodownNavbar();
  }

}
