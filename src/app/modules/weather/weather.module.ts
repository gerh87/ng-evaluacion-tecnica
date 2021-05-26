import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HistoricalComponent } from './pages/historical/historical.component';


@NgModule({
  declarations: [
    WeatherMainComponent,
    HistoricalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule,
    NgxSpinnerModule
  ]
})
export class WeatherModule { }
