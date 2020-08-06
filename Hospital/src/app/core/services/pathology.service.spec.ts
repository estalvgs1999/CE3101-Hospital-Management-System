import { TestBed } from '@angular/core/testing';

import { PathologyService } from './pathology.service';

describe('PathologyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathologyService = TestBed.get(PathologyService);
    expect(service).toBeTruthy();
  });
});
