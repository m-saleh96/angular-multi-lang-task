import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSupplierComponent } from './available-supplier.component';

describe('AvailableSupplierComponent', () => {
  let component: AvailableSupplierComponent;
  let fixture: ComponentFixture<AvailableSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableSupplierComponent]
    });
    fixture = TestBed.createComponent(AvailableSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
