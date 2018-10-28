
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from '../service/util.service';

@Injectable()
export class AuthTenantInterceptor implements HttpInterceptor {

    cookieTenantIdValue: string;
    constructor(private util: UtilService) {
        this.util
          .getCookie('Abp.TenantId')
          .then(data => (this.cookieTenantIdValue = data));
     }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
          headers: req.headers.set(
            'Abp.TenantId',
              this.cookieTenantIdValue
          )
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}