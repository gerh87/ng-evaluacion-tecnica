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


  // tslint:disable-next-line:variable-name
  page_size = 5;
  // tslint:disable-next-line:variable-name
  page_number = 1;
  // tslint:disable-next-line:variable-name
  page_count = 0;
  pageArray: Array<any> = [];

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
      this.page_count = this.cities.length / this.page_size;
      this.counter(this.page_count);
      this.spinner.hide();
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
