import { Injectable } from '@angular/core';
import {
  TokenAuthServiceProxy,
  AuthenticateModel,
  AuthenticateResultModel,
  ExternalLoginProviderInfoModel,
  ExternalAuthenticateModel,
  ExternalAuthenticateResultModel
} from '../../shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { AlertController } from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http'; 
import { AppSettings } from '../../AppSettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateModel: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;
  rememberMe: boolean;
  private http: HttpClient;
  constructor(
    private _tokenAuthService: TokenAuthServiceProxy,
    private _router: Router,
    private _tokenService: TokenService,
    handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);
  }

  signIn(_email: string, _password: string) {
    const content_ = JSON.stringify(this.authenticateModel);

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: 'application/json'
      })
    };
    return new Promise((resolve, reject) => {
      this.http
        .post(
          AppSettings.API_ENDPOINT + '/api/TokenAuth/Authenticate',
          content_,
          options_
        )
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  login(): Observable<any> {
    const content_ = JSON.stringify(this.authenticateModel);

    const options_: any = {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/api/TokenAuth/Authenticate',
      content_,
      options_
    );
  }

  private clear(): void {
    this.authenticateModel = new AuthenticateModel();
    this.authenticateModel.rememberClient = false;
    this.authenticateResult = null;
    this.rememberMe = false;
  }
}
