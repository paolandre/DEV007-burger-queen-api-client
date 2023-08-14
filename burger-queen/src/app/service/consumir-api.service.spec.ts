import { TestBed } from '@angular/core/testing';

import { ConsumirApiService } from './consumir-api.service';

describe('ConsumirApiService', () => {
  let service: ConsumirApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumirApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
