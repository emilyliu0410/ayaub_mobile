import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPplAmountComponent } from './form-ppl-amount.component';



@NgModule({
  declarations: [FormPplAmountComponent],
  imports: [
    CommonModule
  ],
  exports:[FormPplAmountComponent]
})
export class FormPplAmountModule { }
