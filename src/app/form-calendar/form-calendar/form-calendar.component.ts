import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModal,CalendarComponentMonthChange, CalendarComponentOptions, CalendarModalOptions } from 'ion2-calendar'
@Component({
  selector: 'app-form-calendar',
  templateUrl: './form-calendar.component.html',
  styleUrls: ['./form-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormCalendarComponent  {
  date: Date = new Date();
  // dateMulti: string[];
  // type: 'string';
  // cssClass: 'string';
  options: CalendarComponentOptions = {
    monthFormat: 'YYYY年MM月',
    monthPickerFormat: ['1','2','3','4' ,'5','6','7','8','9','10','11','12'],
    weekdays: ['日','一','二','三','四','五','六'],
  showToggleButtons:true,
  showMonthPicker:false
  
    }

  // optionsMulti: CalendarComponentOptions = {
  //   pickMode: 'multi'
  // };
  constructor() { }
  // options: CalendarModalOptions = {
  //   cssClass: 'my-class',
  //   title: 'CUSTOM-STYLE',
  //   // color:'danger',
  //   defaultDate: this.date,
  //   monthFormat: 'YYYY年MM月',
  // //   monthPickerFormat: ['1','2','3','4' ,'5','6','7','8','9','10','11','12'],
  //   weekdays: ['日','一','二','三','四','五','六'],
  // showToggleButtons:true
    
  // };
  

}
