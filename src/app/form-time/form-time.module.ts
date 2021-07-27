import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTimeComponent } from './form-time.component';



@NgModule({
  declarations: [FormTimeComponent],
  imports: [
    CommonModule,
  ],
  exports:[FormTimeComponent]
})
export class FormTimeModule { }
