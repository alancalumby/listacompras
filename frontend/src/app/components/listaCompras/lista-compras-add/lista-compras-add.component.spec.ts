import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComprasAddComponent } from './lista-compras-add.component';

describe('ListaComprasAddComponent', () => {
  let component: ListaComprasAddComponent;
  let fixture: ComponentFixture<ListaComprasAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaComprasAddComponent]
    });
    fixture = TestBed.createComponent(ListaComprasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
