import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// [IMPORTANT] We need to add in providerss the functionality of Barcode Scanner
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

// [FIX] From your package.json it looks like you have installed older ionic-native - 2.4.1.Remove it and do:

// npm install --save @ionic-native/core

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [BarcodeScanner, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
