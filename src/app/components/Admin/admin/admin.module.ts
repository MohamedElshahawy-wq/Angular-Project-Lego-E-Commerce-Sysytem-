import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { I18nModule } from 'src/app/i18n/i18n.module';

const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Categories', component: CategoriesComponent},
  {path: 'Customers', component: CustomersComponent},
  {path: 'Orders', component: OrdersComponent},
  {path: 'Products', component: ProductsComponent},
  {path: 'AddProduct', component: AddProductComponent},
  {path: 'AddCategory', component: AddCategoryComponent},
  {path: '',   redirectTo: 'Dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [DashboardComponent, MenuComponent, CategoriesComponent, CustomersComponent, OrdersComponent, ProductsComponent, AddProductComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AdminModule { }
