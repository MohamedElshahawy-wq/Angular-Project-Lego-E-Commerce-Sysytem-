import { TestBed } from '@angular/core/testing';

import { NgAuthService } from './ng-auth.service';

describe('NgAuthService', () => {
  let service: NgAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
