import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoseguroComponent } from './ingresoseguro.component';

describe('IngresoseguroComponent', () => {
  let component: IngresoseguroComponent;
  let fixture: ComponentFixture<IngresoseguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoseguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
