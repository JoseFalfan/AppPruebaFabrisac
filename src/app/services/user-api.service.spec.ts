import { TestBed } from '@angular/core/testing';

import { ApiserviceService } from './user-api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserApiService', () => {
  let service: ApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
