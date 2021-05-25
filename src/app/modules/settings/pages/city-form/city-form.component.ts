import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CityModel } from 'src/app/data/city-model';
import { CountryModel } from 'src/app/data/country-model';
import { CitiesService } from '../../services/cities.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  modalTitle = 'Save or Update';
  city = new CityModel();
  countries: Array<CountryModel> = [];
  country = new CountryModel();
  countriesServices: CountriesService;
  citiesServices: CitiesService;
  constructor(servCountry: CountriesService, servCities: CitiesService, private spinner: NgxSpinnerService) {
    this.countriesServices = servCountry;
    this.citiesServices = servCities;
  }

  ngOnInit(): void {
    this.loadCountries();
  }
  loadCountries(): void {
    this.countriesServices.getAll().subscribe((response) => {
      this.countries = response;
    });
  }

  save(): void {
    this.spinner.show();
    this.city.countryID = this.country.countryID;
    this.citiesServices.save(this.city).subscribe((response) => {
      window.location.reload();
      console.log(response);
      this.spinner.hide();
    });
  }

}
