import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private requestService: RequestService) { }

  getAll(): Observable<any[]>{
    return this.requestService.get('cities');
  }
}
