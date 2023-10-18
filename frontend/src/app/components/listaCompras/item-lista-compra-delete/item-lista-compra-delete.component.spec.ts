import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaCompraDeleteComponent } from './item-lista-compra-delete.component';

describe('ItemListaCompraDeleteComponent', () => {
  let component: ItemListaCompraDeleteComponent;
  let fixture: ComponentFixture<ItemListaCompraDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListaCompraDeleteComponent]
    });
    fixture = TestBed.createComponent(ItemListaCompraDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
