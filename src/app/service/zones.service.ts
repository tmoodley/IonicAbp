import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  apiUrl = 'http://localhost:21021';
  constructor(public http: HttpClient) {}
  getZones(): Observable<any> {
    const options_: any = { observe: 'response', responseType: 'json', headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      ) };
    return this.http.get(this.apiUrl + '/api/Zones/GetAll', options_);
  }
}
