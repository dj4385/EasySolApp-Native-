import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  salesManName = ""
  public appPages = [
    {
      title: 'Home',
      url: '/home-page',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about-us',
      icon: 'alert'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'contact'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.salesManName = localStorage.getItem("SalesManName")
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
