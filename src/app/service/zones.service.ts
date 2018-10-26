import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../AppSettings';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  constructor(public http: HttpClient, public utilService: UtilService) {}
  getZones(): Observable<any> {
    const options_: any = { observe: 'response', responseType: 'json', headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.utilService.token}`
        }
      ) };
    return this.http.get(
      AppSettings.API_ENDPOINT + '/api/Zones/GetAll',
      options_
    );
  }

  getParadesByZoneId(id: string): Observable<any> {
    const options_: any = {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.utilService.token}`
      })
    };
    return this.http.get(
      AppSettings.API_ENDPOINT + '/api/Zones/GetAllById/?id=' + id,
      options_
    );
  }
}
