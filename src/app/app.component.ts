
import { OAuthService } from 'angular-oauth2-oidc';
import { Component } from '@angular/core';

import { Platform, ToastController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthGuardConfig } from './config/auth.guard.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthguard: AuthGuardConfig,
    private oathService: OAuthService,
    private toastController: ToastController,

    private navController: NavController

  ) {
    this.initializeApp();
  }
  logout() {
    this.oathService.logOut();
    this.presentToastLogout();
    this.navController.navigateRoot('/login');
  }
  async presentToastLogout() {
    const toast = await this.toastController.create({
      message: 'you\'ve been succesfully logout',
      duration: 2000,
      position: 'bottom',
      cssClass: 'toast'
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
