import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Categories', component: CategoriesComponent},
  {path: 'Customers', component: CustomersComponent},
  {path: 'Orders', component: OrdersComponent},
  {path: 'Products', component: ProductsComponent},
  {path: '',   redirectTo: 'Dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [DashboardComponent, MenuComponent, CategoriesComponent, CustomersComponent, OrdersComponent, ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
