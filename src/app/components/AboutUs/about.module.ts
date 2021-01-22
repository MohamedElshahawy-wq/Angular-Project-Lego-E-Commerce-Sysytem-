import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {path: 'AboutUs' , component: AboutUsComponent},
  {path: 'sustainability' , component: SustainabilityComponent},
  {path: '',   redirectTo: '/AboutUs', pathMatch: 'full' }

];

@NgModule({
  declarations: [SustainabilityComponent, AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
