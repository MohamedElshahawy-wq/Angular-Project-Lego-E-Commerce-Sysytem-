import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './Spiderman/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Spiderman/products/products.component';
import { HeaderComponent } from './Spiderman/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { NotFoundComponent } from '../../not-found/not-found.component';
// import { environment } from '../environments/environment';

const routes: Routes = [
  {path:'About', component: AboutComponent},
  {path:'Products', component: ProductsComponent},
  {path: '',   redirectTo: 'About', pathMatch: 'full'},
  {path:"**", component:NotFoundComponent}
]

@NgModule({
  declarations: [AboutComponent, ProductsComponent, HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: { provide: TranslateLoader, useFactory: translateLoaderFactory, deps: [HttpClient] }
    }),
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
  ]
})
export class ThemesModule { }

// Http loader for ngx-translate.
export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}