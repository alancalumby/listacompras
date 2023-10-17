import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaCompraReadComponent } from './item-lista-compra-read.component';

describe('ItemListaCompraReadComponent', () => {
  let component: ItemListaCompraReadComponent;
  let fixture: ComponentFixture<ItemListaCompraReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListaCompraReadComponent]
    });
    fixture = TestBed.createComponent(ItemListaCompraReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
