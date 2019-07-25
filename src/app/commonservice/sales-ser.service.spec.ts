import { TestBed } from '@angular/core/testing';

import { SalesSerService } from './sales-ser.service';

describe('SalesSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesSerService = TestBed.get(SalesSerService);
    expect(service).toBeTruthy();
  });
});
