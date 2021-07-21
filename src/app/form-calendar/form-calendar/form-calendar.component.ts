import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'
@Component({
  selector: 'app-form-calendar',
  templateUrl: './form-calendar.component.html',
  styleUrls: ['./form-calendar.component.scss'],
})
export class FormCalendarComponent implements OnInit {
  dateMulti: string[];
  type: 'string';
  
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  constructor() { }

  ngOnInit() {}

}
