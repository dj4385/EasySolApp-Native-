import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sales-man-login', loadChildren: './sales-man-login/sales-man-login.module#SalesManLoginPageModule' },
  { path: 'home-page', loadChildren: './home-page/home-page.module#HomePagePageModule' },
  { path: 'about-us', loadChildren: './home-page/about-us/about-us.module#AboutUsPageModule' },
  { path: 'contact-us', loadChildren: './home-page/contact-us/contact-us.module#ContactUsPageModule' },  { path: 'item-page', loadChildren: './home-page/item-page/item-page.module#ItemPagePageModule' },
  { path: 'customer', loadChildren: './home-page/customer/customer.module#CustomerPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
