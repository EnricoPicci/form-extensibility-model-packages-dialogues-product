import { TestBed } from '@angular/core/testing';

import { DialogueAService } from './dialogue-a.service';

describe('DialogueAService', () => {
  let service: DialogueAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogueAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
