import { TestBed } from '@angular/core/testing';

import { MyBagsService } from './my-bags.service';

describe('MyBagsService', () => {
  let service: MyBagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
