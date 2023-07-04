import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueProductRoutingModule } from './dialogue-a-product-routing.module';
import { FormAComponent } from './form-a/form-a.component';
import { FormBComponent } from './form-b/form-b.component';
import { FormCComponent } from './form-c/form-c.component';
import { NgxDynamicFormsModule } from 'ngx-dynamic-forms-r';
import { ProductDialogueComponent } from './dialogue-a-product.component';
import { FormDComponent } from './form-d/form-d.component';

@NgModule({
  declarations: [
    ProductDialogueComponent,
    FormAComponent,
    FormBComponent,
    FormCComponent,
    FormDComponent,
  ],
  imports: [CommonModule, DialogueProductRoutingModule, NgxDynamicFormsModule],
})
export class DialogueProductModule { }
