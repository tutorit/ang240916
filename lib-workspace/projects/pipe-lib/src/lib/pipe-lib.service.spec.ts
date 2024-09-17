import { TestBed } from '@angular/core/testing';

import { PipeLibService } from './pipe-lib.service';

describe('PipeLibService', () => {
  let service: PipeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
