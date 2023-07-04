import { Component } from '@angular/core';
import { DialogueState } from 'form-extensibility-model-ts';
import { get_Form_A_Layout } from 'form-extensibility-model-ts-product';
import { DynamicFormLayout } from 'form-extensibility-model-ts';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css'],
})
export class FormAComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form A`;
  }

  constructor(private stateService: DialogueState) { }

  ngOnInit(): void {
    this.form = get_Form_A_Layout();
  }
}
