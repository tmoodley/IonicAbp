import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public token = '';
  constructor(private storage: Storage) {}

  getCookieValue(key: string): any {
    this.storage.ready().then(() => {
      this.storage
        .get(key)
        .then(_token => {
          this.token = _token;
        })
        .catch(console.log);
    });
  }

  setCookieValue(
    key: string,
    value: string,
    expireDate?: Date,
    path?: string
  ): void {
    this.storage.set('token', value);
    this.storage.set('expireDate', expireDate);
  }

  deleteCookie(key: string, path?: string): void {
    this.storage.remove(key);
  }
}
