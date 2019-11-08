import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DriverDetailsPage } from './driver-details.page';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { InvoiceComponent } from 'src/app/components/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: DriverDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DriverDetailsPage],
  entryComponents:[RatingComponent,InvoiceComponent]
})
export class DriverDetailsPageModule {}
