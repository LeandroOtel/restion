import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEliminarProductoComponent } from './gestion-eliminar-producto.component';

describe('GestionEliminarProductoComponent', () => {
  let component: GestionEliminarProductoComponent;
  let fixture: ComponentFixture<GestionEliminarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEliminarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEliminarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
