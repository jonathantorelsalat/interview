import { TestBed } from '@angular/core/testing';

import { WishStatusService } from './wish-status.service';

describe('WishStatusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishStatusService = TestBed.get(WishStatusService);
    expect(service).toBeTruthy();
  });
});
