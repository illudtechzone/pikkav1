
import { ComponentsModule } from './components/components.module';
import { ConfigsModule } from './config/configs.module';
import { KeycloakService } from 'src/app/services/KeycloakService';
import { AuthInterceptor } from './services/security/auth-interceptor';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { UtilService } from './services/util.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { KeycloakAdminConfig } from './config/keycloak-admin-config';
import { AuthGuardConfig } from './config/auth.guard.config';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ComponentsModule,
     IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(),

    AppRoutingModule,
    OAuthModule.forRoot(),
    ConfigsModule,
    HttpClientModule, AppRoutingModule

  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    KeycloakAdminConfig,
    UtilService,
    KeycloakService,
    AuthGuardConfig
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
