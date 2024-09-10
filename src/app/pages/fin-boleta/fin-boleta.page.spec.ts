import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinBoletaPage } from './fin-boleta.page';

describe('FinBoletaPage', () => {
  let component: FinBoletaPage;
  let fixture: ComponentFixture<FinBoletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinBoletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
