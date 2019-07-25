import { Component } from '@angular/core';
import { SalesSerService } from '../commonservice/sales-ser.service';
import { Router } from '@angular/router';
import { AlertSerService } from '../commonservice/alert-ser.service';
import { MenuController } from '@ionic/angular';
import { DbSerService } from '../commonservice/db-ser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  supplier = {
    userId : "",
    password : null
  }

  supplierResponse : any = []
  
  constructor(
    private _saleSer : SalesSerService,
    private _router : Router,
    private _alertService: AlertSerService,
    private _menuCtrl : MenuController,
    private _addToDB : DbSerService
    ) {}
  
  ionViewWillEnter() {
    this._menuCtrl.enable(false);
  }

  setSupplier(){

    this.supplier.password = parseInt(this.supplier.password)
    if(this.supplier.userId == ""  || this.supplier.password == NaN){
      this._alertService.emptyTextFieldMsg("Supplier ID and Password is blank.");
      this.reset()
    } else if(isNaN(this.supplier.password)) {
      this._alertService.emptyTextFieldMsg("Incorrect Password");
      this.reset();
    } else {
      this._saleSer.setSupplier(this.supplier.userId, this.supplier.password)
        .subscribe(
          res => {
            this.supplierResponse = res;
            if(this.supplierResponse.LoginResult.SuppName != ""){
              localStorage.setItem('lSupp',this.supplier.userId);
              localStorage.setItem('SuppName',this.supplierResponse.LoginResult.SuppName)
              // this._addToDB.addLoginUsers("SL",this.supplier.userId,this.supplier.password,this.supplierResponse.LoginResult.SuppName)
              this._router.navigate(['/sales-man-login'])
              this.reset()
            } else {
              this._alertService.setSupplierErrorMsg(this.supplierResponse.LoginResult.Status)
              this.reset();
            }
          },
          err => {
            console.log(err)
            this._alertService.setSupplierErrorMsg(err.message)
          }
        )
      
    }
    
  }

  reset(){
    this.supplier = {
      userId : "",
      password : ""
    }
  }

}