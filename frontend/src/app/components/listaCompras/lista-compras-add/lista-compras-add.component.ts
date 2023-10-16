import { Component } from '@angular/core';
import { ItemListaCompraService } from '../item-lista-compra-servico.service';
import { Router } from '@angular/router';
import { ItemListaCompra } from '../item-lista-compra-modelo.model';

@Component({
  selector: 'app-lista-compras-add',
  templateUrl: './lista-compras-add.component.html',
  styleUrls: ['./lista-compras-add.component.css']
})
export class ListaComprasAddComponent {

  item: ItemListaCompra = {
    descricao: '',
    comprado: 0
  }

  constructor(private itemListaCompraService: ItemListaCompraService,
    private router: Router) { }

  addItemListaCompra(): void {
    this.itemListaCompraService.add(this.item).subscribe(() => {
      this.itemListaCompraService.showMessage("Item adicionado na lista de compras");
      this.router.navigate(["/listaCompras"]);
    })
  }

  cancelar(): void {
    this.router.navigate(["/listaCompras"])
  }

}
