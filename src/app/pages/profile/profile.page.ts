import { KeycloakService } from './../../services/KeycloakService';
import { EditProfileComponent } from './../../components/edit-profile/edit-profile.component';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { CurrentUserService } from './../../services/current-user.service';

import { Component, OnInit } from '@angular/core';
import { ImageSelectorComponent } from 'src/app/components/image-selector/image-selector.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
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

  user: any = {};
  imageContent: any = {};
  image: any = {};
  readonly = true;

  edit() {

    this.readonly = !this.readonly;
    console.log('this wAS', this.readonly);
  }

  constructor(private currentUserService: CurrentUserService,
              private modalController: ModalController,
              private navController: NavController,
              private alertController: AlertController,
              private keyCloackService: KeycloakService
              ) { }

  ngOnInit() {
    console.log('entering');
    this.currentUserService.getCurrentUser(true).then(result => {
      console.log('user is getting', result);
      this.user = (result);
    },
    error => {
      console.log('error while getting user', error);
    });

  }
 async confirmation() {
   const alert = await this.alertController.create({
     header: 'Confirm',
     subHeader: '',
     message: 'Profile Updated',
     buttons: [ {
      text: 'Cancel',
      role: 'cancel'
    }, {
      text: 'Confirm',
      handler: () => {
        this.update();
      }
    }]
   });
   await alert.present();
 }

 update() {
   console.log(this.user);
   this.user.family_name = '';
   this.keyCloackService.updateCurrentUserDetails(this.user,
    () => {
      console.log('Uers Upadtes');
      this.edit();
   },
   () => {
    alert('Faile to update to user');
   });
 }


 async uploadImage() {

   const modal = await this.modalController.create({
     component: ImageSelectorComponent,
     cssClass: 'half-height'
   });
   modal.onDidDismiss().then(data => {
    console.log(data.data.image, 'mmmmkkk');
    this.image = data.data.image.substring(
       data.data.image.indexOf(',') + 1,
     );
    this.imageContent = data.data.image.slice(
       data.data.image.indexOf(':') + 1,
       data.data.image.indexOf(';')
     );
    console.log(this.image, 'image');
   });
   return await modal.present();
 }

}
