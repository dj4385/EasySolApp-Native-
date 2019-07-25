import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesSerService {

  apiUrl = "https://103.205.66.67/AppService/V1OnlineSyncService.svc"
  constructor(
    private _http: HttpClient
    // private _http: HTTP
  ) { }


  setSupplier(userId ,password){
    let data = {"UserId":userId,"Password":password}
    return this._http.post(this.apiUrl + '/userlogin',data);
  }

  loginSalesMan(lSupName,userID,pass){
    return this._http.post(this.apiUrl + '/smanlogin',{"lSuppName":lSupName, "UserId":userID,"Password":pass})
  }
  getItems(suppName, date){
    return this._http.post(this.apiUrl + '/getitems',{"lSuppName" : suppName,"lDate" : date,"lCode" : "0","lSyncType" : ""})
  }

  getCustomerInfo(suppName, date){
    return this._http.post(this.apiUrl + '/getcustomers',{"lSuppName" : suppName,"lDate" : date})
  }
}
