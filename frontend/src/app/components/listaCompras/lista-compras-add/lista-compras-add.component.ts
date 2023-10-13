import { Component } from '@angular/core';
import { ItemListaCompraService } from '../item-lista-compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-compras-add',
  templateUrl: './lista-compras-add.component.html',
  styleUrls: ['./lista-compras-add.component.css']
})
export class ListaComprasAddComponent {

  constructor(private itemListaCompraService: ItemListaCompraService,
    private router:Router) {}

  addItemListaCompra (): void{
    this.itemListaCompraService.showMessage("Item adicionado na lista de compras");
  }

  cancelar(): void{
    this.router.navigate(["/listaCompras"])
  }
  
}
