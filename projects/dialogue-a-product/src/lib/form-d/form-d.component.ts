import { Component } from '@angular/core';
import { get_Form_D_Layout } from 'form-extensibility-model-ts-product';
import { DynamicFormLayout } from 'form-extensibility-model-ts';
import { DialogueState } from 'form-extensibility-model-ts';

@Component({
  selector: 'app-form-d',
  templateUrl: './form-d.component.html',
  styleUrls: ['./form-d.component.css'],
})
export class FormDComponent {
  form!: DynamicFormLayout;
  get title() {
    return `${this.stateService.dialogueName} - Form D`;
  }

  constructor(private stateService: DialogueState) { }

  ngOnInit(): void {
    this.form = get_Form_D_Layout();
  }
}
