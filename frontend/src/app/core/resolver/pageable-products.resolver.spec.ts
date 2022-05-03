import { TestBed } from '@angular/core/testing';

import { PageableProductsResolver } from './pageable-products.resolver';

describe('PageableProductsResolver', () => {
  let resolver: PageableProductsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PageableProductsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
