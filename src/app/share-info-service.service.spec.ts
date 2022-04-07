import { TestBed } from '@angular/core/testing';

import { ShareInfoServiceService } from './share-info-service.service';

describe('ShareInfoServiceService', () => {
  let service: ShareInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
