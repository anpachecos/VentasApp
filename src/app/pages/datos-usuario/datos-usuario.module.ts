import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosUsuarioPageRoutingModule } from './datos-usuario-routing.module';

import { DatosUsuarioPage } from './datos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, //Acuerdate de importar esto porque si no los formularios no funcionan
    DatosUsuarioPageRoutingModule
  ],
  declarations: [DatosUsuarioPage]
})
export class DatosUsuarioPageModule {}
