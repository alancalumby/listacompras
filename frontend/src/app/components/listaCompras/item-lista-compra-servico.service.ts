import { ItemListaCompra } from './item-lista-compra-modelo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemListaCompraService {
  baseUrl = 'http://localhost:3001/itensListaCompra';

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  add(item: ItemListaCompra): Observable<ItemListaCompra> {
    return this.httpClient.post<ItemListaCompra>(this.baseUrl, item).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);    
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }

  read(): Observable<ItemListaCompra[]> {
    return this.httpClient.get<ItemListaCompra[]>(this.baseUrl);
  }

  readById(id: number): Observable<ItemListaCompra> {
    //esta eh uma outra forma de escrever o comando abaixo
    //const url = this.baseUrl + '/' + id;
    const url = `${this.baseUrl}/${id}`;

    return this.httpClient.get<ItemListaCompra>(url);
  }

  update(item: ItemListaCompra): Observable<ItemListaCompra> {
    const url = `${this.baseUrl}/${item.id}`;
    return this.httpClient.put<ItemListaCompra>(url, item);
  }

  delete(id: number): Observable<ItemListaCompra> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<ItemListaCompra>(url);
  }
}
