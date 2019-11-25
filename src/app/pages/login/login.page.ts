import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { CurrentUserService } from './../../services/current-user.service';
import { KeycloakService } from 'src/app/services/KeycloakService';
import { UtilService } from 'src/app/services/util.service';
import { NavController, ToastController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  crimeForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl ('', [
      Validators.required
    ])
  });
  constructor(private oauthService: OAuthService,
              private navController: NavController,
              private toastController: ToastController,
              private util: UtilService,
              private keycloakService: KeycloakService,
              private currentUserService: CurrentUserService,
              ) { }

  ngOnInit() {
    if (this.oauthService.hasValidIdToken()) {
      this.navController.navigateRoot('/login');
    }
  }
  async presentToast(message: string) {
    const toast = await
    this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'toast'
    });
    toast.present();
  }

  login() {

    const formValue = this.crimeForm.value;
    if (!this.crimeForm.invalid) {

      this.util.createLoader().then(loader => {
        loader.present();
        console.log('password', formValue.password);
        console.log('username', formValue.username);
        this.keycloakService.authenticate({
          username: formValue.username,
          password: formValue.password

        }, res1 => {
          loader.dismiss();
          console.log('sucess ', res1);
          // this.currentUserService.getCurrentUser(true).then(res => {
          // });
          this.navController.navigateForward('/home');


        },
        err => {
          console.log('error ', err);

          loader.dismiss();
          this.util.createToast('Invalid username or Password');
        });
      });
    }
  }

}
