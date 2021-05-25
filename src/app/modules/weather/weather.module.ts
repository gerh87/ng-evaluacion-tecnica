import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
