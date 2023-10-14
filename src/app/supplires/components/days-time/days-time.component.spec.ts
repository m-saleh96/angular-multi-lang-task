import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysTimeComponent } from './days-time.component';

describe('DaysTimeComponent', () => {
  let component: DaysTimeComponent;
  let fixture: ComponentFixture<DaysTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysTimeComponent]
    });
    fixture = TestBed.createComponent(DaysTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
