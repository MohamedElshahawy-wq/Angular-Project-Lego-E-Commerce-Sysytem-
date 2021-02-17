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
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverUsernameComponent } from './components/recover-username/recover-username.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AuthGuard } from './components/AuthGuard/auth.guard';

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
  {path: 'Admin' , loadChildren: () => import('./components/Admin/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]},
  {path :'Product/:PID',component:ProductComponent},
  {path :'Offers&Sales',component:OffersComponent},
  {path :'Home',component:HomeComponent},
  {path :'Register',component: RegisterComponent},
  {path :'Login',component: LoginComponent},
  {path :'ForgotUsername',component: RecoverUsernameComponent},
  {path :'ForgotPassword',component: RecoverPasswordComponent},
  {path:"",redirectTo:'Home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
