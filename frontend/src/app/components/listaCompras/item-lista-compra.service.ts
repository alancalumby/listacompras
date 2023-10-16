import { ItemListaCompra } from './item-lista-compra.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListaCompraService {

  baseUrl = 'http://localhost:3001/itensListaCompra';

  constructor(private snackBar: MatSnackBar,
    private httpClient: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  add(item: ItemListaCompra): Observable<ItemListaCompra> {
       return this.httpClient.post<ItemListaCompra>(this.baseUrl, item);
  }
}