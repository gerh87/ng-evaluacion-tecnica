import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountryModel } from 'src/app/data/country-model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  page_size = 5;
  // tslint:disable-next-line:variable-name
  page_number = 1;
  // tslint:disable-next-line:variable-name
  page_count = 0;
  pageArray: Array<any> = [];
  countries: Array<CountryModel> = [];
  countriesService: CountriesService;
  constructor(serv: CountriesService, private spinner: NgxSpinnerService, private router: Router) {
    this.countriesService = serv;
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadCountries();
  }

  loadCountries(): void {
    this.spinner.show();
    this.countriesService.getAll().subscribe((response) => {
      this.countries = response;
      this.page_count = this.countries.length / this.page_size;
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
