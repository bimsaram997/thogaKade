import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAndSignUpComponent} from './root/login-and-sign-up/login-and-sign-up.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {CustomerComponent} from './dashboard/dashboard/sub-components/customer/customer.component';
import {ItemComponent} from './dashboard/dashboard/sub-components/item/item.component';


const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent },
  {path: 'dashboard',  component: DashboardComponent, children: [
      {path: 'customer', component: CustomerComponent},
      {path: 'item', component: ItemComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
