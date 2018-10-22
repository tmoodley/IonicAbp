 
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UtilService } from '../service/util.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private util: UtilService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.util.getCookieValue('token');
        // Get the auth token from the service.
        const authToken = this.util.token;

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}