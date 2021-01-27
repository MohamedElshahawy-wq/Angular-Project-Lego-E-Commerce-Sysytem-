import { LegoLifeComponent } from './components/lego-life/lego-life.component';
import { FindStoreComponent } from './components/find-store/find-store.component';
import { VipComponent } from './components/vip/vip.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyBaggComponent } from './components/my-bagg/my-bagg.component';

const routes: Routes = [ 
  {path: 'VIP' , component: VipComponent},
  {path: 'FindStor' , component: FindStoreComponent},
  {path: 'LegoLife' , component: LegoLifeComponent},
  {path: 'About' , loadChildren: () => import('./components/AboutUs/about.module').then(m => m.AboutModule)},
  {path: 'WishList' , component: WishListComponent},
  {path: 'CheckOut' , component: CheckOutComponent},
  {path: 'MyBagg' , component: MyBaggComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
