import { TestBed } from '@angular/core/testing';

import { DialogueAProductService } from './dialogue-a-product.service';

describe('DialogueAProductService', () => {
  let service: DialogueAProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogueAProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
