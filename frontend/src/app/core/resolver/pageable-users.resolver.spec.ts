import { TestBed } from '@angular/core/testing';

import { PageableUsersResolver } from './pageable-users.resolver';

describe('PageableUsersResolver', () => {
  let resolver: PageableUsersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PageableUsersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
