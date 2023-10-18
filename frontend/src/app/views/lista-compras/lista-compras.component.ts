import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de items',
      icone: 'storefront',
      routeUrl: '/listaCompras',
    };
  }

  navigateToListaComprasAdd(): void {
    this.router.navigate(['/listaCompras/add']);
  }
}
