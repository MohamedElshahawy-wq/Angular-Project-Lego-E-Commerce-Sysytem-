import { TestBed } from '@angular/core/testing';

import { BagsService } from './bags.service';

describe('BagsService', () => {
  let service: BagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
