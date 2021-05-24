import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMainComponent } from './pages/settings-main/settings-main.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';





@NgModule({
  declarations: [
    SettingsMainComponent,
    CountriesComponent,
    CitiesComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsModule { }
