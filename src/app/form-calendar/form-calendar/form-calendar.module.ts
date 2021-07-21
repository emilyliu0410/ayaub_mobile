import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';
import { FormCalendarComponent } from './form-calendar.component';
import { CalendarService } from 'ion2-calendar/dist/services/calendar.service';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule
    
  ],
  declarations: [FormCalendarComponent],
  exports: [FormCalendarComponent],
  providers: [CalendarService]
  
})
export class FormCalendarComponentModule {}
