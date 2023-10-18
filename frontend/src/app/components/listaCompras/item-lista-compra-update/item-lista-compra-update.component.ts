import { ItemListaCompra } from './../item-lista-compra-modelo.model';
import { Component } from '@angular/core';
import { ItemListaCompraService } from '../item-lista-compra-servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-lista-compra-update',
  templateUrl: './item-lista-compra-update.component.html',
  styleUrls: ['./item-lista-compra-update.component.css'],
})
export class ItemListaCompraUpdateComponent {
  item: ItemListaCompra = {
    id: 0,
    descricao: '',
    comprado: 0,
  };

  constructor(
    private itemListaCompraService: ItemListaCompraService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //o ! no final do comando serve para nao trazer como retorno o valor NULL (para o caso do parametro nao existir)
    const id: string = this.activatedRoute.snapshot.paramMap.get('id')!;
     //o simbolo de + na frente da variavel id faz a conversao do tipo string para o tipo number
    this.itemListaCompraService.readById(+id).subscribe((item) => {
      this.item = item;
    });
  }

  updateItemListaCompra(): void {
    this.itemListaCompraService.update(this.item).subscribe(() => {
      this.itemListaCompraService.showMessage(
        'Item atualizado na lista de compras'
      );
      this.router.navigate(['/listaCompras']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listaCompras']);
  }
}
