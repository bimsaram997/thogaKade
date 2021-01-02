import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAndSignUpComponent} from './root/login-and-sign-up/login-and-sign-up.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {CustomerComponent} from './dashboard/dashboard/sub-components/customer/customer.component';
import {ItemComponent} from './dashboard/dashboard/sub-components/item/item.component';
import {OrderComponent} from './dashboard/dashboard/sub-components/order/order.component';
import {AuthGuard} from './auth.guard';



const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent },
  {path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard], children: [
      {path: 'customer', component: CustomerComponent},
      {path: 'item', component: ItemComponent},
      {path: 'order', component: OrderComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
