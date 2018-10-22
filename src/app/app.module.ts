import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { TokenAuthServiceProxy, API_BASE_URL } from '../shared/service-proxies/service-proxies';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './service/token.service';
import { IonicStorageModule } from '@ionic/Storage';
import { AppConsts } from '../shared/AppConsts';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogService } from './service/log-service.service';
import { UtilService } from './service/util.service';
import { ZonesService } from './service/zones.service';

export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    AuthService,
    TokenAuthServiceProxy,
    TokenService,
    LogService,
    UtilService,
    ZonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
