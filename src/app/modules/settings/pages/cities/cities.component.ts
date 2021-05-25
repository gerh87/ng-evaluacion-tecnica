import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CityModel } from 'src/app/data/city-model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: Array<CityModel> = [];
  serviceCitites: CitiesService;
  constructor(service: CitiesService, private spinner: NgxSpinnerService) {
    this.serviceCitites = service;
  }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.spinner.show();
    this.serviceCitites.getAll().subscribe((response) => {
      this.cities = response;
      this.spinner.hide();
    });
  }
}
