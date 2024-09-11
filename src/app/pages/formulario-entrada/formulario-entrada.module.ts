import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEntradaPageRoutingModule } from './formulario-entrada-routing.module';

import { FormularioEntradaPage } from './formulario-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEntradaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioEntradaPage]
})
export class FormularioEntradaPageModule {}
