import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
import { Observable } from 'rxjs';
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

  public async getCookie(key: string) {
    return await this.storage.get(key);
  }

  setCookieValue(
    key: string,
    value: string,
    expireDate?: Date,
    path?: string
  ): void {
    this.storage.set(key, value);
    this.storage.set('expireDate', expireDate);
  }

  public async deleteCookie(key: string, path?: string) {
    return await this.storage.remove(key);
  }
}
