import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CityModel } from 'src/app/data/city-model';
import { HistoricalInfoModel } from 'src/app/data/historical-info-model';
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

  // tslint:disable-next-line:variable-name
  page_size = 5;
  // tslint:disable-next-line:variable-name
  page_number = 1;
  // tslint:disable-next-line:variable-name
  page_count = 0;
  pageArray: Array<any> = [];
  cities: Array<CityModel> = [];
  inHistorical = false;
  historicals: Array<HistoricalInfoModel> = [];
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
      if (this.inHistorical) {
        this.loadHistorical();
      }
      this.historicalService.save(this.historical).subscribe((responseSaveHistorical) => {
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

  loadHistorical(): void {
    this.pageArray = [];
    this.historicalService.getHistoricalsByCity(this.city.cityID)
      .subscribe((historicalResponse) => {
        this.historicals = historicalResponse;
        this.page_count = this.historicals.length / this.page_size;
        this.counter(this.page_count);
      });
  }
  previus(): void {
    if (this.page_number !== 1) {
      this.page_number = this.page_number - 1;
    }
  }
  next(): void {
    if (this.page_number < this.pageArray.length) {
      this.page_number = this.page_number + 1;
    }
  }
  changePage(index: any): void {
    this.page_number = index + 1;
  }

  counter(count: number): void {
    for (let i = 0; i < count; i++) {
      this.pageArray.push(i);
    }
  }
}
