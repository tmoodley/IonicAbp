import { TestBed, inject } from '@angular/core/testing';

import { LogService } from './log-service.service';

describe('LogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LogService] });
  });

  it('should be created', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
