import { TestBed } from '@angular/core/testing';

import { DbSerService } from './db-ser.service';

describe('DbSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbSerService = TestBed.get(DbSerService);
    expect(service).toBeTruthy();
  });
});
