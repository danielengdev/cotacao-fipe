import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cotacao } from './cotacao';

describe('Cotacao', () => {
  let component: Cotacao;
  let fixture: ComponentFixture<Cotacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cotacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cotacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
