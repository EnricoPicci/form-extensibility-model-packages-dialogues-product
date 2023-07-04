import { Component } from '@angular/core';
import { DialogueState } from 'form-extensibility-model-ts';
import { get_Form_C_Layout } from 'form-extensibility-model-ts-product';
import { DynamicFormLayout } from 'form-extensibility-model-ts';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css'],
})
export class FormCComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form C`;
  }

  constructor(private stateService: DialogueState) { }

  ngOnInit(): void {
    this.form = get_Form_C_Layout();
  }
}
