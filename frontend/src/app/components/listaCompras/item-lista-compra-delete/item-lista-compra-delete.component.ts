import { ActivatedRoute, Router } from '@angular/router';
import { ItemListaCompraService } from './../item-lista-compra-servico.service';
import { Component } from '@angular/core';
import { ItemListaCompra } from '../item-lista-compra-modelo.model';

@Component({
  selector: 'app-item-lista-compra-delete',
  templateUrl: './item-lista-compra-delete.component.html',
  styleUrls: ['./item-lista-compra-delete.component.css'],
})
export class ItemListaCompraDeleteComponent {
   item: ItemListaCompra = {
     id: 0,
     descricao: '',
     comprado: 0,
   };
  //id: string = '';

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
     // this.id = item.id.toString();
    });
  }

  deleteItemListaCompra(): void {
    this.itemListaCompraService.delete(this.item.id).subscribe(() => {
      this.itemListaCompraService.showMessage(
        'Item excluido da lista de compras'
      );
      this.router.navigate(['/listaCompras']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listaCompras']);
  }
}
