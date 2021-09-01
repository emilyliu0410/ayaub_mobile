import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-time',
  templateUrl: './form-time.component.html',
  styleUrls: ['./form-time.component.scss'],
})
export class FormTimeComponent  {

  // customPickerOptions: any;
  // mydate: Date = new Date();

  constructor() {
    // this.customPickerOptions = {
    //   buttons: [{
    //     text: 'Save',
    //     handler: () => console.log('Clicked Save!')
    //   }, {
    //     text: 'Log',
    //     handler: () => {
    //       console.log('Clicked Log. Do not Dismiss.');
    //       return false;
    //     }
    //   }]
    // }
    // var dateFormat = mydate.split('T')[0]; 
    //  console.log(dateFormat);
     // 2019-04-22
  }
  // public mydate:any = new Date().toISOString();

 
  setStartDatetime(f) {
    console.log(f);
  }
}
