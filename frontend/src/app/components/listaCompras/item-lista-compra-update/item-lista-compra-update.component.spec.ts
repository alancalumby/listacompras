import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListaCompraUpdateComponent } from './item-lista-compra-update.component';

describe('ItemListaCompraUpdateComponent', () => {
  let component: ItemListaCompraUpdateComponent;
  let fixture: ComponentFixture<ItemListaCompraUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListaCompraUpdateComponent]
    });
    fixture = TestBed.createComponent(ItemListaCompraUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
