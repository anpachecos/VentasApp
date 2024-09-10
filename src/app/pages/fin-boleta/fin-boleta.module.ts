import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinBoletaPageRoutingModule } from './fin-boleta-routing.module';

import { FinBoletaPage } from './fin-boleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinBoletaPageRoutingModule
  ],
  declarations: [FinBoletaPage]
})
export class FinBoletaPageModule {}
