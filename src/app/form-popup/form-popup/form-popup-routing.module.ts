import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPopupPage } from './form-popup.page';

const routes: Routes = [
  {
    path: '',
    component: FormPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPopupPageRoutingModule {}
