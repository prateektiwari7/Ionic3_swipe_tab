import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public category: string = 'colorone';
  public categories: Array<string> = ['colorone', 'colortwo', 'colorthree']

  constructor(public navCtrl: NavController) { }

  onTabChanged(tabName) {
    this.category = tabName;
  }
}
