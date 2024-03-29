import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalNavComponent } from './modal-nav/modal-nav.component';
import {SlideCarComponent} from './slide-car/slide-car.component';
import {CarGridComponent} from './car-grid/car-grid.component';
import {ConfiguratorCarComponent} from './configurator-car/configurator-car.component';
import {CarPerformanceComponent} from './car-performance/car-performance.component';
import {CarAerodynamicComponent} from './car-aerodynamic/car-aerodynamic.component';
import {CarRacingComponent} from './car-racing/car-racing.component';
import {CarFamilyComponent} from './car-family/car-family.component';
import {CarUpdateComponent} from './car-updates/car-update.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalNavComponent,
    SlideCarComponent,
    CarGridComponent,
    ConfiguratorCarComponent,
    CarPerformanceComponent,
    CarAerodynamicComponent,
    CarRacingComponent,
    CarFamilyComponent,
    CarUpdateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
