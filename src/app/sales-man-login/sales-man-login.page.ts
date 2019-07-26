import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertSerService } from '../commonservice/alert-ser.service';
import { SalesSerService } from '../commonservice/sales-ser.service';
import { MenuController } from '@ionic/angular';
import { DbSerService } from '../commonservice/db-ser.service';

@Component({
  selector: 'app-sales-man-login',
  templateUrl: './sales-man-login.page.html',
  styleUrls: ['./sales-man-login.page.scss'],
})
export class SalesManLoginPage implements OnInit {

  supplierName = ""
  supID = ""
  salesMan = {
    lSuppName : "",
    UserId : "",
    Password : ""
  }

  salesManLoginResponse : any = []

  constructor(
    private _router : Router,
    private _alertService : AlertSerService,
    private _saleSer: SalesSerService,
    private _menuCtrl : MenuController,
    private _addToDB : DbSerService
  ) { }

  ngOnInit() {
    this.supplierName = localStorage.getItem("SuppName")
    this.supID = localStorage.getItem("lSupp")
  }
  ionViewWillEnter() {
    this._menuCtrl.enable(false);
  }

  salesManLogin(){
    this.salesMan.lSuppName = this.supID
    if(this.salesMan.UserId == null  || this.salesMan.Password == ""){
      this._alertService.emptyTextFieldMsg("Sales man id and passord is empty");
    } else {
      this._saleSer.loginSalesMan(this.salesMan.lSuppName, this.salesMan.UserId, this.salesMan.Password)
        .subscribe(
          res => {
            this.salesManLoginResponse = res;
            if(this.salesManLoginResponse.SuppLoginResult != ""){
              localStorage.setItem('SalesManName',this.salesManLoginResponse.SuppLoginResult)
              this._addToDB.createDataBase("SM",this.salesMan.UserId,this.salesMan.Password,this.salesManLoginResponse.SuppLoginResult)
              this.reset()
              this._router.navigate(['/home-page'])
            } else {
              this._alertService.setSupplierErrorMsg("Sales ID and Password is incorrect")
              this.reset();
            }
          },
          err => {
            this._alertService.setSupplierErrorMsg(err.message)
          }
        )
      
    }
  }

  reset(){
    this.salesMan = {
      lSuppName : this.supplierName,
      UserId : "",
      Password : ""
    }
  }

  resetSupplier(){
    localStorage.clear();
    this._router.navigate(['/home'])
  }

}
