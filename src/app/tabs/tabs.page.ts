import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  homeIcon = './assets/imgs/home.svg';
  clickedHomeIcon = './assets/imgs/homeActive.svg';
  menuIcon = './assets/imgs/drink.svg';
  clickedMenuIcon = './assets/imgs/drinkActive.svg';
  activityIcon = './assets/imgs/activity.svg';
  clickedActivityIcon = './assets/imgs/activityActive.svg';

  // constructor() {}

  isHomeSelected = true;
  isMenuSelected= false;
  isActivitySelected= false;
  
  resetAll(){
    this.isHomeSelected = false;
    this.isMenuSelected= false;
    this.isActivitySelected= false;
  }

  changeHomeIcon(): void {    
    this.resetAll();
    this.isHomeSelected = true;
  }

  changeMenuIcon(): void {
   this.resetAll();
   this.isMenuSelected= true;
  }

  changeActivityIcon(): void {
   this.resetAll();
   this.isActivitySelected= true;
  }


}
