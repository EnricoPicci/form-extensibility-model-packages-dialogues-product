import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueAComponent } from './dialogue-a.component';

describe('DialogueAComponent', () => {
  let component: DialogueAComponent;
  let fixture: ComponentFixture<DialogueAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogueAComponent]
    });
    fixture = TestBed.createComponent(DialogueAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
