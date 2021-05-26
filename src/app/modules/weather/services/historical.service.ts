import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  constructor(private requestService: RequestService) { }

  save(historical: any): Observable<any> {
    return this.requestService.post('historicals', historical);
  }

  getHistoricalsByCity(cityId: number): Observable<any[]> {
    return this.requestService.get('historicals/' + cityId);
  }
}
