import { TestBed } from '@angular/core/testing';

import { StrangerThingsService } from './stranger-things.service';

describe('StrangerThingsService', () => {
  let service: StrangerThingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrangerThingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
