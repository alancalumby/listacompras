import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ItemListaCompraRead2DataSource, ItemListaCompraRead2Item } from './item-lista-compra-read2-datasource';

@Component({
  selector: 'app-item-lista-compra-read2',
  templateUrl: './item-lista-compra-read2.component.html',
  styleUrls: ['./item-lista-compra-read2.component.css']
})
export class ItemListaCompraRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ItemListaCompraRead2Item>;
  dataSource = new ItemListaCompraRead2DataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
