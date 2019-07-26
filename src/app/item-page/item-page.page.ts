import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.page.html',
  styleUrls: ['./item-page.page.scss'],
})
export class ItemPagePage implements OnInit {

  _items : any = []

  constructor(
    private _route : Router,
    private _menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this._menuCtrl.enable(false);
  }


  logout(){
    localStorage.removeItem('SalesManName');
    this._route.navigate(['/sales-man-login']);
  }
}
