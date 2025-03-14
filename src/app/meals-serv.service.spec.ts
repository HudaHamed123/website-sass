import { TestBed } from '@angular/core/testing';

import { MealsServService } from './meals-serv.service';

describe('MealsServService', () => {
  let service: MealsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
