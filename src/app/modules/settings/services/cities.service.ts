import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';
import { CityModel } from 'src/app/data/city-model';
import { CountryModel } from 'src/app/data/country-model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private requestService: RequestService) { }

  getAll(): Observable<any[]>{
    return this.requestService.get('cities');
  }
  save(city: CityModel): Observable<any> {
    return this.requestService.post('cities', city);
  }
}
