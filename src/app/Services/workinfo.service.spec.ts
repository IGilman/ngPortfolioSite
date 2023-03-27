import { TestBed } from '@angular/core/testing';

import { WorkinfoService } from './workinfo.service';

describe('WorkinfoService', () => {
  let service: WorkinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
