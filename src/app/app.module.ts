import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalNavComponent } from './modal-nav/modal-nav.component';
import {SlideCarComponent} from "./slide-car/slide-car.component";


@NgModule({
  declarations: [
    AppComponent,
    ModalNavComponent,
    SlideCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
