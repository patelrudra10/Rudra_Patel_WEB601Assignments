import { TestBed } from '@angular/core/testing';

import { MemorydataService } from './memorydata.service';

describe('MemorydataService', () => {
  let service: MemorydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
