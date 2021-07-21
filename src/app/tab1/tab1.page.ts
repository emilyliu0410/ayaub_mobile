import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { FormPopupPageModule } from '../form-popup/form-popup/form-popup.module';
import { FormPopupPage } from '../form-popup/form-popup/form-popup.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modalDataResponse: any;
  constructor(public modalCtrl: ModalController) {}
  
  async initModal() {
    const modal = await this.modalCtrl.create({
      component: FormPopupPage,
      componentProps: {
        'user_id': '12345'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }
}
