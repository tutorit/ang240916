import { TestBed } from '@angular/core/testing';

import { DirtyService } from './dirty.service';

describe('DirtyService', () => {
  let service: DirtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
