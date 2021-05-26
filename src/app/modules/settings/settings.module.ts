import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMainComponent } from './pages/settings-main/settings-main.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';
import { CountryFormComponent } from './pages/country-form/country-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CityFormComponent } from './pages/city-form/city-form.component';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  declarations: [
    SettingsMainComponent,
    CountriesComponent,
    CitiesComponent,
    CountryFormComponent,
    CityFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule,
    NgxSpinnerModule,
    NgbModalModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsModule { }
