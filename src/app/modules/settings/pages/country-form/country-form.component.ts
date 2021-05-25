import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountryModel } from 'src/app/data/country-model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  modalTitle = 'Save Or Update';
  country = new CountryModel();
  countriesService: CountriesService;

  constructor(serv: CountriesService, private spinner: NgxSpinnerService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.countriesService = serv;
  }

  ngOnInit(): void {
  }

  save(): void {
    this.spinner.show();
    this.countriesService.save(this.country).subscribe((response)  => {
      this.spinner.hide();
      window.location.reload();
    });
  }


}
