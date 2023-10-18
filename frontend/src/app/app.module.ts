import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListaComprasComponent } from './views/lista-compras/lista-compras.component';
import { ListaComprasAddComponent } from './components/listaCompras/lista-compras-add/lista-compras-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ItemListaCompraReadComponent } from './components/listacompras/item-lista-compra-read/item-lista-compra-read.component';
import { ItemListaCompraRead2Component } from './components/listaCompras/item-lista-compra-read2/item-lista-compra-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ItemListaCompraUpdateComponent } from './components/listaCompras/item-lista-compra-update/item-lista-compra-update.component' ;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ListaComprasComponent,
    ListaComprasAddComponent,
    RedDirective,
    ForDirective,
    ItemListaCompraReadComponent,
    ItemListaCompraRead2Component,
    ItemListaCompraUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
