import { TestBed } from '@angular/core/testing';

import { DocsManagementService } from './docs-management.service';

describe('DocsManagementService', () => {
  let service: DocsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
