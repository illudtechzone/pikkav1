import { InvoiceComponent } from './invoice/invoice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [RatingComponent, InvoiceComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [RatingComponent, InvoiceComponent]
})
export class ComponentsModule { }
