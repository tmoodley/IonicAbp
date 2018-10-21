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
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateModel: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;
  rememberMe: boolean;
  apiUrl = 'http://localhost:21021';
  constructor(
    private _tokenAuthService: TokenAuthServiceProxy,
    private _router: Router,
    private _tokenService: TokenService,
    public http: HttpClient
  ) {}

  signIn(_email: string, _password: string) {
    const content_ = JSON.stringify(this.authenticateModel);

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return new Promise((resolve, reject) => {
      this.http
        .post(
          this.apiUrl + '/api/TokenAuth/Authenticate',
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

  

  authenticate(finallyCallback?: () => void): void {
    finallyCallback = finallyCallback || (() => {});

    this._tokenAuthService
      .authenticate(this.authenticateModel)
      .pipe(
        finalize(() => {
          finallyCallback();
        })
      )
      .subscribe((result: AuthenticateResultModel) => {
        this.processAuthenticateResult(result);
      });
  }

  private processAuthenticateResult(
    authenticateResult: AuthenticateResultModel
  ) {
    this.authenticateResult = authenticateResult;

    if (authenticateResult.accessToken) {
      // Successfully logged in
      this.login(
        authenticateResult.accessToken,
        authenticateResult.encryptedAccessToken,
        authenticateResult.expireInSeconds,
        this.rememberMe
      );
    } else {
      // Unexpected result!
      alert('problem');
      // this._router.navigate(['login']);
    }
  }

  private login(
    accessToken: string,
    encryptedAccessToken: string,
    expireInSeconds: number,
    rememberMe?: boolean
  ): void {
    const tokenExpireDate = rememberMe
      ? new Date(new Date().getTime() + 1000 * expireInSeconds)
      : undefined;

    this._tokenService.setToken(accessToken, tokenExpireDate);

    this._router.navigate(['home']);
  }

  private clear(): void {
    this.authenticateModel = new AuthenticateModel();
    this.authenticateModel.rememberClient = false;
    this.authenticateResult = null;
    this.rememberMe = false;
  }
}
