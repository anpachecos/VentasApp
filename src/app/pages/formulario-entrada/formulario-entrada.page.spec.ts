import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioEntradaPage } from './formulario-entrada.page';

describe('FormularioEntradaPage', () => {
  let component: FormularioEntradaPage;
  let fixture: ComponentFixture<FormularioEntradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
