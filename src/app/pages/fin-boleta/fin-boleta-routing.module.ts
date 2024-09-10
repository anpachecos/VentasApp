import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinBoletaPage } from './fin-boleta.page';

const routes: Routes = [
  {
    path: '',
    component: FinBoletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinBoletaPageRoutingModule {}
