import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';
import { CountryModel } from 'src/app/data/country-model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private requestService: RequestService) { }

  getAll(): Observable<CountryModel[]>{
    return this.requestService.get('countries');
  }
}
