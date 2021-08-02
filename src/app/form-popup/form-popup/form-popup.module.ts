import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';

import { FormPopupPageRoutingModule } from './form-popup-routing.module';
import { ModalController } from '@ionic/angular';

import { FormPopupPage } from './form-popup.page';
import { FormCalendarComponentModule } from 'src/app/form-calendar/form-calendar/form-calendar.module';
import { FormTimeModule } from 'src/app/form-time/form-time.module';
import { FormPplAmountModule } from 'src/app/form-ppl-amount/form-ppl-amount.module';
import { CalendarService } from 'ion2-calendar/dist/services/calendar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPopupPageRoutingModule,
    CalendarModule,
    FormCalendarComponentModule,
    FormTimeModule,
    FormPplAmountModule
    
  ],
  declarations: [FormPopupPage],
  
  providers: [CalendarService]
})
export class FormPopupPageModule {}
