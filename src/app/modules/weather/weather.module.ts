import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    WeatherMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule,
    NgxSpinnerModule,
    SharedModule
  ]
})
export class WeatherModule { }
