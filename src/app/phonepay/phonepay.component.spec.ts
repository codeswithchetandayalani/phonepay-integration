import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonepayComponent } from './phonepay.component';

describe('PhonepayComponent', () => {
  let component: PhonepayComponent;
  let fixture: ComponentFixture<PhonepayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonepayComponent]
    });
    fixture = TestBed.createComponent(PhonepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
