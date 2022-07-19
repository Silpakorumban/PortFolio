import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PortfolComponent } from './portfol/portfol.component';
import { ReachComponent } from './reach/reach.component';

const routes: Routes = [{path:"home" ,component:HomeComponent},{path:"aboutme",component: AboutmeComponent},
{path:"portfol",component: PortfolComponent},{path:"reach",component:ReachComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
