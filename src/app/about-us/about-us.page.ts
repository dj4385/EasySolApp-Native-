import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  
  constructor(
    private _route: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('SalesManName');
    this._route.navigate(['/sales-man-login']);
  }
}
