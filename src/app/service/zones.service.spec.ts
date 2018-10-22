import { TestBed, inject } from '@angular/core/testing';

import { ZonesService } from './zones.service';

describe('ZonesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZonesService]
    });
  });

  it('should be created', inject([ZonesService], (service: ZonesService) => {
    expect(service).toBeTruthy();
  }));
});
