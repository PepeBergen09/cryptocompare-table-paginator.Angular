import { TestBed } from '@angular/core/testing';

import { BitcoinTrackerService } from './bitcoin-tracker.service';

describe('BitcoinTrackerService', () => {
  let service: BitcoinTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
