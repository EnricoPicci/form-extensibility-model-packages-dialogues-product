import { Component } from '@angular/core';
import { DialogueState } from 'form-extensibility-model-ts';

@Component({
  selector: 'lib-dialogue-A-product',
  templateUrl: './dialogue-a-product.component.html',
  providers: [DialogueState],
})
export class DialogueAProductComponent {
  constructor(public stateService: DialogueState) { }

  ngOnInit(): void {
    this.stateService.dialogueName = 'dialogue-a-product';
    this.stateService.dialoguePath = 'dialogue-a-product/';
  }
}
