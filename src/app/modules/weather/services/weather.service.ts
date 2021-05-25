import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private requestService: RequestService) { }

  getWeather(city: string | undefined): Observable<any> {
    return this.requestService.ExternalGet('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=ad5ff6da1bea6613c3f8cff0f23902ea');
  }
}
