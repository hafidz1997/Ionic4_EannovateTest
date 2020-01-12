import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private modalCtrl: ModalController) {

  }

  async popup(){
    const popup = await this.modalCtrl.create({
      component: PopupPage,
      cssClass: 'popup'
    });
    return await popup.present();
  }

}
