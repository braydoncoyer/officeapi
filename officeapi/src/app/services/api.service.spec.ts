import {getTestBed, TestBed} from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of data when get method is called', () => {
    const dummyData = [
      {
        value: 'some value'
      },
      {
        value: 'some other value'
      },
      {
        value: 'the third value'
      },
      {
        value: 'the forth value'
      },
      {
        value: 'the fifth value'
      },
      {
        value: 'the sixth value'
      },
      {
        value: 'the seventh value'
      },
      {
        value: 'the 8th value'
      },
      {
        value: 'the 9th value'
      },
      {
        value: 'the 10th value'
      },
      {
        value: 'the 11th value'
      },
    ];

    service.get('quotes').subscribe(result => {
      expect(result).toEqual(dummyData);
    });

    const req = httpMock.expectOne(`${environment.url}quotes`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});
