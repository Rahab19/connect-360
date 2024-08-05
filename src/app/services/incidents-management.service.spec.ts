import { TestBed } from '@angular/core/testing';

import { IncidentsManagementService } from './incidents-management.service';

describe('IncidentsManagementService', () => {
  let service: IncidentsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
