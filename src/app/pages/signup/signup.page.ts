import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { KeycloakService } from 'src/app/services/KeycloakService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  crimeForm = new FormGroup ({
  name: new FormControl('', [
    Validators.required, Validators.minLength(4),
    Validators.pattern('^[a-zA-Z ]*$')
  ]),
  email: new FormControl('', [
    Validators.required, Validators.email
  ]),
  phone: new  FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'), Validators.minLength(6), Validators.maxLength(15)
  ]),
  password: new FormControl ('', [
    Validators.required
  ]),
  confirmPassword: new FormControl ('', [
    Validators.required
  ])
});
  ngOnInit() {
  }

  constructor(private navcontrol: NavController,
              private util: UtilService,
              private keycloakService: KeycloakService,
              private fb: FormBuilder
              ) {
               }

  signup() {
    console.log(this.crimeForm.invalid);

    const formValue = this.crimeForm.value;
    if (!this.crimeForm.invalid) {

      if (true) {
          console.log('asd');
          this.util.createLoader().then(loader => {
            loader.present();
            const user = {
              username: formValue.name,
              email: formValue.email
            };
            this.keycloakService.createAccount(user, formValue.password,
              (res) => {
                this.util.createToast('Registration Successfully Done !');
                this.navcontrol.navigateForward('/login');
                loader.dismiss();
              },
              (err) => {
                loader.dismiss();
                if (err.response.status === 409) {
                  this.util.createToast('User Already Exists!');
                } else {

                  this.util.createToast('Cannot Register User.Please Try later', err);
                }
              });
          });

        }

      }
  }

  passwordMatch() {
    const formValue = this.crimeForm.value;
    if (!(formValue.password === formValue.confirmPassword)) {
      this.util.createToast(' Password dont match ');
      formValue.confirmPassword = '';
      return false;
    }
    return true;
  }
}
