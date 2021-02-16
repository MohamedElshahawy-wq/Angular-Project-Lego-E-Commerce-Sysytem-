/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewsService } from './Reviews.service';

describe('Service: Reviews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewsService]
    });
  });

  it('should ...', inject([ReviewsService], (service: ReviewsService) => {
    expect(service).toBeTruthy();
  }));
});
