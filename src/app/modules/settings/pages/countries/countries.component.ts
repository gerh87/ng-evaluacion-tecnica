import { Component, OnInit } from '@angular/core';
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
  page_size = 1;
  // tslint:disable-next-line:variable-name
  page_number = 1;
  countries: Array<CountryModel> = [];
  countriesService: CountriesService;
  constructor(serv: CountriesService, private spinner: NgxSpinnerService) {
    this.countriesService = serv;
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.spinner.show();
    this.countriesService.getAll().subscribe((response) => {
      this.countries = response;
      this.spinner.hide();
    });
  }

  previus(): void {
    if (this.page_number !== 1) {
      this.page_number = this.page_number - 1;
    }
  }
  next(): void {
    if (this.page_number < this.countries.length) {
      this.page_number = this.page_number + 1;
    }
  }
  changePage(index: any): void {
    this.page_number = index + 1;
  }

}
