import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-list/order-edit/order-edit.component';
import { HeaderComponent } from './header/header.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-list/customer-edit/customer-edit.component';
import { OrderItemComponent } from './order-list/order-item/order-item.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderEditComponent,
    HeaderComponent,
    CustomerListComponent,
    CustomerEditComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
