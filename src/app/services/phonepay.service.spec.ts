import { TestBed } from '@angular/core/testing';

import { PhonepayService } from './phonepay.service';

describe('PhonepayService', () => {
  let service: PhonepayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonepayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
