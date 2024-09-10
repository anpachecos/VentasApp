import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEntradaPageRoutingModule } from './formulario-entrada-routing.module';

import { FormularioEntradaPage } from './formulario-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEntradaPageRoutingModule
  ],
  declarations: [FormularioEntradaPage]
})
export class FormularioEntradaPageModule {}
