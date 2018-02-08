import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BeautyComponent } from './beauty/beauty.component';
import { CharmComponent } from './charm/charm.component';
import { StrangeComponent } from './strange/strange.component';
import { TopComponent } from './top/top.component';
import { UpComponent } from './up/up.component';
import { DownComponent } from './down/down.component';
import { NavBarItemsUlComponent } from './nav-bar-items-ul/nav-bar-items-ul.component';
import { NavBarUnorderedListComponent } from './nav-bar-unordered-list/nav-bar-unordered-list.component';
import { NavBarListItemComponent } from './nav-bar-list-item/nav-bar-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BeautyComponent,
    CharmComponent,
    StrangeComponent,
    TopComponent,
    UpComponent,
    DownComponent,
    NavBarItemsUlComponent,
    NavBarUnorderedListComponent,
    NavBarListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
