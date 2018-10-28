import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../AppSettings';
import { UtilService } from './util.service';
import { IsTenantAvailableInput } from '../../shared/service-proxies/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http: HttpClient;
  constructor(
    public utilService: UtilService,
    handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);
  }
  isTenantAvailable(tenancyName: string): Observable<any> {
    const input = new IsTenantAvailableInput();
    input.tenancyName = tenancyName;
    const content_ = JSON.stringify(input);
    const options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };
    return this.http.post(AppSettings.API_ENDPOINT + '/api/services/app/Account/IsTenantAvailable/', content_, options_);
  }
}
