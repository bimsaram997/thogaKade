import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAndSignUpComponent } from './root/login-and-sign-up/login-and-sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CustomerComponent } from './dashboard/dashboard/sub-components/customer/customer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './dashboard/dashboard/sub-components/item/item.component';
import {ToastrModule} from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { OrderComponent } from './dashboard/dashboard/sub-components/order/order.component';
import {MatNativeDateModule} from '@angular/material/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import {CookieModule} from 'ngx-cookie';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginAndSignUpComponent,
    DashboardComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DpDatePickerModule,
    ToastrModule.forRoot({
      timeOut: 30000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    MatInputModule,
    MatButtonModule,

    CookieModule.forRoot(),
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
