import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from './util/request-options';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = new RequestOptions({ method: 'GET', url, params, headers });
    return this.request<T>(options);
  }
  post<T>(url: string, body: T, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = new RequestOptions({ method: 'POST', url, body, params, headers });
    return this.request<T>(options);
  }

  put<T>(url: string, body: T, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = new RequestOptions({ method: 'PUT', url, body, params, headers });
    return this.request<T>(options);
  }

  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const options = new RequestOptions({ method: 'DELETE', url, headers });
    return this.request<T>(options);
  }

  private request<T>(options: RequestOptions): Observable<T> {
    options.headers = options.headers || new HttpHeaders();
    options.params = options.params || new HttpParams();
    this.baseUrl = environment.apiUrl + options.url;

    return this.http.request<T>(options.method, this.baseUrl, options)
      .pipe(
        tap(
          next => { },
          error => this.handleErrors(error)
        )
      );
  }
  // tslint:disable-next-line:typedef
  private handleErrors(error: any) {
    switch (error.status) {
      case 500:
      case 400:
        break;
      default:
        // console.error('ERROR', error);
        break;
    }
  }
}
