import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'datos-usuario',
    pathMatch: 'full'
  },
  {
    path: 'datos-usuario',
    loadChildren: () => import('./pages/datos-usuario/datos-usuario.module').then( m => m.DatosUsuarioPageModule)
  },
  {
    path: 'formulario-entrada',
    loadChildren: () => import('./pages/formulario-entrada/formulario-entrada.module').then( m => m.FormularioEntradaPageModule)
  },
  {
    path: 'fin-boleta',
    loadChildren: () => import('./pages/fin-boleta/fin-boleta.module').then( m => m.FinBoletaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
