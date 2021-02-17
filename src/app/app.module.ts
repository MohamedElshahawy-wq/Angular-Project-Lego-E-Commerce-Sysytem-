




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VipComponent } from './components/vip/vip.component';
import { FindStoreComponent } from './components/find-store/find-store.component';
import { LegoLifeComponent } from './components/lego-life/lego-life.component';
import { HeaderComponent } from './components/header/header.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { ProductComponent } from './components/product/product.component';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component';
import { MyBBagComponent } from './components/my-bbag/my-bbag.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverUsernameComponent } from './components/recover-username/recover-username.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { I18nModule } from './i18n/i18n.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgAuthService } from "./Services/Authentication/ng-auth.service";



@NgModule({
  declarations: [
    AppComponent,
    VipComponent,
    FindStoreComponent,
    LegoLifeComponent,
    HeaderComponent,
    WishListComponent,
    CheckOutComponent,
    FooterComponent,
    HomeComponent,
    OffersComponent,
    ProductComponent,
    RecommendedProductsComponent,
    MyBBagComponent,
    RegisterComponent,
    LoginComponent,
    RecoverUsernameComponent,
    RecoverPasswordComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    I18nModule,
    ],
  providers: [NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
