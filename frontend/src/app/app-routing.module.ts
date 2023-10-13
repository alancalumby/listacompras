import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListaComprasComponent } from './views/lista-compras/lista-compras.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "listaCompras",
    component: ListaComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
