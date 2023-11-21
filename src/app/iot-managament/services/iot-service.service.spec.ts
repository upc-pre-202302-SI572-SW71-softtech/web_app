import { TestBed } from '@angular/core/testing';

import { IotServiceService } from './iot-service.service';

describe('IotServiceService', () => {
  let service: IotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
