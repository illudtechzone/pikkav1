import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';


export const authConfig: AuthConfig = {
    issuer: 'http://dev.servers.divisosofttech.com:8888/auth/realms/PikkaDrivo',
    redirectUri: window.location.origin,
    clientId: 'account',
    scope: 'openid profile email',
    dummyClientSecret: '3a251da1-13e8-4f65-a656-6033b9250d2b',
    tokenEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/PikkaDrivo/protocol/openid-connect/token',
    userinfoEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/PikkaDrivo/protocol/openid-connect/userinfo',
    oidc: false,
    requireHttps: false
  };

@Injectable()
export class AuthGuardConfig {

    constructor(
        private oauthService: OAuthService
    ) {
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {

        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();


        // Optional
        this.oauthService.setupAutomaticSilentRefresh();

        // this.oauthService.events.subscribe(e => {
        //   // tslint:disable-next-line:no-console
        //   console.debug('oauth/oidc event', e);
        // });

        // this.oauthService.events
        //   .pipe(filter(e => e.type === 'session_terminated'))
        //   .subscribe(e => {
        //     console.debug('Your session has been terminated!');
        //   });

        // this.oauthService.events
        //   .pipe(filter(e => e.type === 'token_received'))
        //   .subscribe(e => {
        //     // this.oauthService.loadUserProfile();
        //   });
    }
}
