import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModal,CalendarComponentMonthChange, CalendarComponentOptions, CalendarModalOptions } from 'ion2-calendar'
import { ElementRef, ViewChild } from '@angular/core';

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
    // @ViewChild('mylbl') mylblRef: ElementRef;
  
  constructor() { 
    // console.log(this.mylblRef.nativeElement.innerText);
  }


}
