import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarComponent } from './components/verificar/verificar.component';
import { ConfigurarComponent } from './components/configurar/configurar.component';

const routes: Routes = [
  { path: '', redirectTo: 'configurar' , pathMatch : 'full'},
  { path: 'configurar', component: ConfigurarComponent },
  { path: 'verificar', component: VerificarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
