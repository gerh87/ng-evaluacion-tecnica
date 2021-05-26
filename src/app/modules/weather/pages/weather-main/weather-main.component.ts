import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CityModel } from 'src/app/data/city-model';
import { HistoricalModel } from 'src/app/data/historical-model';
import { CitiesService } from 'src/app/modules/settings/services/cities.service';
import { HistoricalService } from '../../services/historical.service';
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
  historicalService: HistoricalService;
  historical: HistoricalModel = new HistoricalModel();

  temp = '';
  feelsLike = '';
  constructor(serv: WeatherService, private spinner: NgxSpinnerService, citServ: CitiesService, hisServ: HistoricalService) {
    this.weatherService = serv;
    this.citiesService = citServ;
    this.historicalService = hisServ;
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

      this.historical.cityId = this.city.cityID;
      this.historical.temperature = parseFloat(this.temp);
      this.historical.thermalSensation = parseFloat(this.feelsLike);

      this.historicalService.save(this.historical).subscribe((responseSaveHistorical) => {
        console.log(responseSaveHistorical);
      });

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
