import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './Spiderman/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Spiderman/products/products.component';
import { HeaderComponent } from './Spiderman/header/header.component';

const routes: Routes = [
  {path:'About', component: AboutComponent},
  {path:'Products', component: ProductsComponent},
  {path: '',   redirectTo: 'About', pathMatch: 'full'}
]

@NgModule({
  declarations: [AboutComponent, ProductsComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemesModule { }
