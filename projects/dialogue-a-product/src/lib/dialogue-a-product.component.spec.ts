import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueAProductComponent } from './dialogue-a-product.component';

describe('DialogueAProductComponent', () => {
  let component: DialogueAProductComponent;
  let fixture: ComponentFixture<DialogueAProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogueAProductComponent]
    });
    fixture = TestBed.createComponent(DialogueAProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
