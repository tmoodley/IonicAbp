import { AuthInterceptor } from './interceptors/auth-interceptor';
/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './service/http-interceptor.service';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    //{ provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];