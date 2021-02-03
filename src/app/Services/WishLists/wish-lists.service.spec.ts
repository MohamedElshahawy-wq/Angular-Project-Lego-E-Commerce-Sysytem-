import { TestBed } from '@angular/core/testing';

import { WishListsService } from './wish-lists.service';

describe('WishListsService', () => {
  let service: WishListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
