import { ItemListaCompraDeleteComponent } from './components/listaCompras/item-lista-compra-delete/item-lista-compra-delete.component';
import { ListaComprasAddComponent } from './components/listaCompras/lista-compras-add/lista-compras-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListaComprasComponent } from './views/lista-compras/lista-compras.component';
import { ItemListaCompraUpdateComponent } from './components/listaCompras/item-lista-compra-update/item-lista-compra-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "listaCompras",
    component: ListaComprasComponent
  },
  {
    path: "listaCompras/add",
    component: ListaComprasAddComponent
  },
  {
    path: "listaCompras/update/:id",
    component: ItemListaCompraUpdateComponent
  },
  {
    path: "listaCompras/delete/:id",
    component: ItemListaCompraDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
