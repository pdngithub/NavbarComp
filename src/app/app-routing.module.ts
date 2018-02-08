import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautyComponent } from './beauty/beauty.component';
import { CharmComponent } from './charm/charm.component';
import { DownComponent } from './down/down.component';
import { StrangeComponent } from './strange/strange.component';
import { TopComponent } from './top/top.component';
import { UpComponent } from './up/up.component';


const routes: Routes = [
  { path: 'beauty', component: BeautyComponent },
  { path: 'charm', component: CharmComponent },
  { path: 'down', component: DownComponent },
  { path: 'strange', component: StrangeComponent },
  { path: 'top', component: TopComponent },
  { path: 'up', component: UpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
