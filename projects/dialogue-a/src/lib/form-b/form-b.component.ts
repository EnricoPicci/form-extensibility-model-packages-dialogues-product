import { Component } from '@angular/core';
import { get_Form_B_Layout } from 'form-extensibility-model-ts-product';
import { DynamicFormLayout } from 'form-extensibility-model-ts';
import { DialogueState } from 'form-extensibility-model-ts';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css'],
})
export class FormBComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form B`;
  }

  constructor(private stateService: DialogueState) { }

  ngOnInit(): void {
    this.form = get_Form_B_Layout();
  }
}
