import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CityModel } from 'src/app/data/city-model';
import { CitiesService } from 'src/app/modules/settings/services/cities.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {

  cities: Array<CityModel> = [];
  city: CityModel = new CityModel();
  weatherService: WeatherService;
  citiesService: CitiesService;
  temp = '';
  feelsLike = '';
  constructor(serv: WeatherService, private spinner: NgxSpinnerService, citServ: CitiesService) {
    this.weatherService = serv;
    this.citiesService = citServ;
  }

  ngOnInit(): void {
    this.loadCities();
  }

  getWeather(): void {
    this.spinner.show();
    this.weatherService.getWeather(this.city.cityName).subscribe((responseWeather) => {
      console.log(responseWeather);
      this.temp = responseWeather.main.temp;
      this.feelsLike = responseWeather.main.feels_like;
      this.spinner.hide();
    });
  }

  loadCities(): void {
    this.spinner.show();
    this.citiesService.getAll().subscribe((response) => {
      this.cities = response;
      this.spinner.hide();
    });
  }

}
