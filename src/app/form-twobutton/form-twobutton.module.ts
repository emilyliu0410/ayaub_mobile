import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTwobuttonComponent } from './form-twobutton.component';



@NgModule({
  declarations: [FormTwobuttonComponent],
  imports: [
    CommonModule
  ],
  exports:[FormTwobuttonComponent]
})
export class FormTwobuttonModule { }
