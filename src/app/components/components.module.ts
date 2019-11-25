import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';
import { ImageCropperModule } from 'ngx-img-cropper';



@NgModule({
  declarations: [RatingComponent, InvoiceComponent, EditProfileComponent, ImageSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ImageCropperModule,
    RouterModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  exports: [RatingComponent, InvoiceComponent, EditProfileComponent, ImageSelectorComponent]
})
export class ComponentsModule { }
