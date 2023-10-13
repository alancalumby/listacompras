import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {

  constructor (private router: Router) {}
  
  navigateToListaComprasAdd(): void{
    this.router.navigate(['/listaCompras/add'])
  }
}
