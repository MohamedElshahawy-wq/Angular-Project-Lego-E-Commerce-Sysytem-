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
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AuthGuard } from './components/AuthGuard/auth.guard';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { EditInformationComponent } from './components/edit-information/edit-information.component';
import { EditSecurityComponent } from './components/edit-security/edit-security.component';
import { LoginGuard } from './components/AuthGuard/login.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [ 
  {path: 'VIP' , component: VipComponent},
  {path: 'FindStore' , component: FindStoreComponent},
  {path: 'LegoLife' , component: LegoLifeComponent},
  {path: 'About' , loadChildren: () => import('./components/AboutUs/about.module').then(m => m.AboutModule)},
  {path: 'WishList' , component: WishListComponent, canActivate: [AuthGuard]},
  {path: 'CheckOut' , component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'MyBBag' , component: MyBBagComponent, canActivate: [AuthGuard]},
  {path: 'Themes' , loadChildren: () => import('./components/Themes/themes/themes.module').then(m => m.ThemesModule)},
  {path :'Product/:PID',component:ProductComponent},
  {path :'Offers&Sales',component:OffersComponent},
  {path :'Home',component:HomeComponent},
  {path :'Register',component: RegisterComponent},
  {path :'Login',component: LoginComponent},
  {path :'ForgotPassword',component: RecoverPasswordComponent},
  {path :'EditAccount',component: EditAccountComponent},
  {path :'EditInformation',component: EditInformationComponent},
  {path :'Security',component: EditSecurityComponent},
  {path :'Register',component: RegisterComponent, canActivate: [LoginGuard]},
  {path :'Login',component: LoginComponent, canActivate: [LoginGuard]},
  {path :'ForgotPassword',component: RecoverPasswordComponent, canActivate: [LoginGuard]},
  {path:"",redirectTo:'Home',pathMatch:'full'},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
