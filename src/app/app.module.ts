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
import { MyBaggComponent } from './components/my-bagg/my-bagg.component';

@NgModule({
  declarations: [
    AppComponent,
    VipComponent,
    FindStoreComponent,
    LegoLifeComponent,
    HeaderComponent,
    WishListComponent,
    CheckOutComponent,
    MyBaggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
