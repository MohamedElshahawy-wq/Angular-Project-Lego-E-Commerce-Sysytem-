import { LegoLifeComponent } from './components/lego-life/lego-life.component';
import { FindStoreComponent } from './components/find-store/find-store.component';
import { VipComponent } from './components/vip/vip.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProductComponent } from './components/product/product.component';
import { OffersComponent } from './components/offers/offers.component';
import { HomeComponent } from './components/home/home.component';
import { MyBBagComponent } from './components/my-bbag/my-bbag.component';

const routes: Routes = [ 
  {path: 'VIP' , component: VipComponent},
  {path: 'FindStore' , component: FindStoreComponent},
  {path: 'LegoLife' , component: LegoLifeComponent},
  {path: 'About' , loadChildren: () => import('./components/AboutUs/about.module').then(m => m.AboutModule)},
  {path: 'WishList' , component: WishListComponent},
  {path: 'WishList/:wID' , component: WishListComponent},
  {path: 'CheckOut' , component: CheckOutComponent},
  {path: 'MyBBag' , component: MyBBagComponent},
  
  {path: 'Themes' , loadChildren: () => import('./components/Themes/themes/themes.module').then(m => m.ThemesModule)},
  {path: 'Admin' , loadChildren: () => import('./components/Admin/admin/admin.module').then(m => m.AdminModule)},
  {path :'Product/:PID',component:ProductComponent},
  {path :'Offers&Sales',component:OffersComponent},
  {path :'Home',component:HomeComponent},
  {path:"",redirectTo:'Home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
