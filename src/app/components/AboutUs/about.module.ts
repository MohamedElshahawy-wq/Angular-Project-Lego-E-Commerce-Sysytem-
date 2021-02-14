import { DiscoverComponent } from './discover/discover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { WhoWeComponent } from './who-we/who-we.component';
import { LegoGroupComponent } from './lego-group/lego-group.component';
import { VenturesComponent } from './ventures/ventures.component';
import { FoundationComponent } from './foundation/foundation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [ 
  {path: 'AboutUs' , component: AboutUsComponent},
  {path: 'sustainability' , component: SustainabilityComponent},
  {path: 'discover' , component: DiscoverComponent},
  {path: 'legoGroup' , component: LegoGroupComponent},
  {path: 'foundation' , component: FoundationComponent},
  {path: 'ventures' , component: VenturesComponent},
  {path: 'whoWe' , component: WhoWeComponent},
  {path: '',   redirectTo: 'AboutUs', pathMatch: 'full' }
];

@NgModule({
  declarations: [SustainabilityComponent, AboutUsComponent, DiscoverComponent, WhoWeComponent, LegoGroupComponent, VenturesComponent, FoundationComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: { provide: TranslateLoader, useFactory: translateLoaderFactory, deps: [HttpClient] }
    }),
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }

// Http loader for ngx-translate.
export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}