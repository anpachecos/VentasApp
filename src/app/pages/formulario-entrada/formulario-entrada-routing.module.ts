import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEntradaPage } from './formulario-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEntradaPageRoutingModule {}
