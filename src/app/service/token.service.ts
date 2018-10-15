import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
@Injectable()
export class TokenService {
  constructor(private storage: Storage) { }

  getToken(): any {
    this.storage.ready().then(() => {
      this.storage
        .get('token')
        .then(token => {
          return JSON.parse(token);
        })
        .catch(console.log);
    });
  }

  clearToken(): void {
    this.storage.remove('token');
  }

  setToken(authToken: string, expireDate?: Date): void {
    this.storage.set('token', authToken);
    this.storage.set('expireDate', expireDate);
  }
}
