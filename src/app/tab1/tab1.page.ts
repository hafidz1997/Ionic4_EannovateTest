import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  kategori = 'populer';
  slide:any = [];
  product:any = [];
  last:any = [];
  slidesOptions = {
    slidesPerView: 1.7,
  };
  constructor(private http: HttpClient,private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.http.get('../../assets/data/api-slider.json').subscribe(data =>{
      let response = data;
      this.slide = response;
     });
    this.http.get('../../assets/data/api-featured-product.json').subscribe(data =>{
      let response = data;
      this.product = response;
     });
    this.http.get('../../assets/data/api-last-purchased.json').subscribe(data =>{
      let response = data;
      this.last = response;
     });
  }

  async popup(){
    const popup = await this.modalCtrl.create({
      component: PopupPage,
      cssClass: 'popup'
    });
    return await popup.present();
  }

}
