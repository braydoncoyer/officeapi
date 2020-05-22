import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // get(endpoint: string): Observable<any> {
  //   console.log(endpoint);
  //   return this.http.get(`${environment.url}${endpoint}`);
  // }
  get(endpoint: string): Observable<any> {
    console.log(endpoint);
    return this.http.get(`${environment.url}`);
  }
}
