import { TestBed } from '@angular/core/testing';

import { ProductByCategoryIdService } from './product-by-category-id.service';

describe('ProductByCategoryIdService', () => {
  let service: ProductByCategoryIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductByCategoryIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
