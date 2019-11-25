import { ImageSelectorComponent } from './../../components/image-selector/image-selector.component';
import { ComponentsModule } from './../../components/components.module';
import { EditProfileComponent } from './../../components/edit-profile/edit-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ImageCropperModule } from 'ngx-img-cropper';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ImageCropperModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage],
  entryComponents: [EditProfileComponent, ImageSelectorComponent]
})
export class ProfilePageModule {}
