import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonepayComponent } from './phonepay/phonepay.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PhonepayComponent,
    PaymentsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
