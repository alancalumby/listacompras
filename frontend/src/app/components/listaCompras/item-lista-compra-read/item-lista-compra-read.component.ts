import { Component } from '@angular/core';
import { ItemListaCompraService } from '../item-lista-compra-servico.service';
import { ItemListaCompra } from '../item-lista-compra-modelo.model';

@Component({
  selector: 'app-item-lista-compra-read',
  templateUrl: './item-lista-compra-read.component.html',
  styleUrls: ['./item-lista-compra-read.component.css'],
})
export class ItemListaCompraReadComponent {
  itens: ItemListaCompra[] = [];

  item: ItemListaCompra = { id: 1, descricao: 'a', comprado: 1 };
  displayedColumns = ['id', 'descricao', 'comprado', 'action'];

  constructor(private itemService: ItemListaCompraService) {}

  ngOnInit(): void {
    this.itemService.read().subscribe((itens) => {
      this.itens = itens;
      console.log(itens);
    });

    this.itemService.readById(2).subscribe((item) => {
      this.item = item;
      console.log(item);
    });
  }
}
