import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalNavComponent } from './modal-nav/modal-nav.component';
import {SlideCarComponent} from './slide-car/slide-car.component';
import {CarGridComponent} from './car-grid/car-grid.component';
import {ConfiguratorCarComponent} from './configurator-car/configurator-car.component';
import {CarPerformanceComponent} from "./car-performance/car-performance.component";


@NgModule({
  declarations: [
    AppComponent,
    ModalNavComponent,
    SlideCarComponent,
    CarGridComponent,
    ConfiguratorCarComponent,
    CarPerformanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
