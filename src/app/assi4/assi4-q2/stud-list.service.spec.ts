import { TestBed } from '@angular/core/testing';

import { StudListService } from './stud-list.service';

describe('StudListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudListService = TestBed.get(StudListService);
    expect(service).toBeTruthy();
  });
});
