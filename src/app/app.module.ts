import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import {HttpClientModule} from '@angular/common/http';
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
    MyBBagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
