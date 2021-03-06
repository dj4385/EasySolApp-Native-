import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesSerService } from '../commonservice/sales-ser.service';
import { AlertSerService } from '../commonservice/alert-ser.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  currentDate = new Date();
  checkBoxVal = [
    {val:"Items", isChecked:false},
    {val:"Customers", isChecked:false}
  ]
  isItemSycn = false
  isCustomerSync = false

  salesManName = ""
  suppID = ""
  date = "01-Jan-2000"

  items : any = []
  customers : any = []
  itemObj : any = {}
  customerObj : any = {}


  constructor(
    private _route: Router,
    private _saleService : SalesSerService,
    private _alertService : AlertSerService,
    private loadingController : LoadingController
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.salesManName = localStorage.getItem('SalesManName')
      this.suppID = localStorage.getItem('lSupp')
    },3000)
    
    // this.getItems()
    // this.getCustomers()
  }

  logout(){
    localStorage.removeItem('SalesManName');
    this._route.navigate(['/sales-man-login']);
  }

  async syncInProgress(){
    const loading = await this.loadingController.create({
      message: 'Syn Start',
      animated: true,
    });
    await loading.present();
  }

  startSync(){
    let uncheckedBoxArray = []
    let selectedOption : any = {}
    this.checkBoxVal.filter(ele=>{
      if(ele.isChecked == true){
        selectedOption = ele
        if(selectedOption.val == "Items"){
          this.getItems()
          this.syncInProgress()
          console.log("getItems")
          
          ele.isChecked = false
        } else if(selectedOption.val == "Customers"){
          this.getCustomers()
          this.syncInProgress()
          console.log("getCusomters")
          
          ele.isChecked = false
        }
      } else if(ele.isChecked == false){
        
        uncheckedBoxArray.push(ele)
        if(uncheckedBoxArray.length > 1){
          this._alertService.setSupplierSuccessMsg("Please Select an option")
          uncheckedBoxArray = []
        }
      }
    })
  }

  getItems(){
    this._saleService.getItems(this.suppID,this.date)
      .subscribe(
        res=>{
          this.itemObj = res;
          this.items = this.itemObj.getitemsResult
          // this.items.forEach(item => {
          //   console.log(item.Name)
          // })
          this.loadingController.dismiss().then(()=>{
            this._alertService.setSupplierSuccessMsg("Items sync successfully.")
          })
        },
        err=>{
          this._alertService.setSupplierErrorMsg(err.message)
        }
      )
  }

  getCustomers(){
    this._saleService.getCustomerInfo(this.suppID,this.date)
      .subscribe(
        res=>{
          this.customerObj = res;
          this.customers = this.customerObj.getcustomersResult
          // this.customers.forEach(customer => {
          //   console.log(customer.Name)
          // })
          this.loadingController.dismiss().then(()=>{
            this._alertService.setSupplierSuccessMsg("Customers sync successfully.")
          })
          
          
        },
        err=>{
          this._alertService.setSupplierErrorMsg(err.message)
        }
      )
  }

  viewItems(){
    this._route.navigate(['/item-page'])
  }

  viewCustomer(){
    this._route.navigate(['/customer'])
  }
}
// ritikagarg10