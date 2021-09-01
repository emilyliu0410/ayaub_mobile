import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';import { CalendarComponentOptions } from 'ion2-calendar'
@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.page.html',
  styleUrls: ['./form-popup.page.scss'],
})
export class FormPopupPage  {
  // @Input() user_id: string;
  // dateMulti: string[];
  // type: 'string';
  // cssClass: 'string';
  // optionsMulti: CalendarComponentOptions = {
  //   pickMode: 'multi'
  // };
  constructor(private modalCtr: ModalController) { }
  
  close(){
    this.modalCtr.dismiss({
      'dismissed': true
    });
  }
  
  // onChange($event) {
  //   console.log($event);
  // }
  // // ngOnInit() {
  // // }
  
  // async close() {
  //   const closeModal: string = "Modal Closed";
  //   await this.modalCtr.dismiss(closeModal);
  // }
}
