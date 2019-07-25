import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

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
