import { TestBed } from '@angular/core/testing';

import { ParamsServiceService } from './params-service.service';

describe('ParamsServiceService', () => {
  let service: ParamsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
