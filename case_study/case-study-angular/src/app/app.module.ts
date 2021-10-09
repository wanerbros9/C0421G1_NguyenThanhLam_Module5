import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateEmployeeComponent} from './component/employee/create-employee/create-employee.component';
import {ListEmployeeComponent} from './component/employee/list-employee/list-employee.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';
import {ListServiceComponent} from './component/service/list-service/list-service.component';
import {CreateServiceComponent} from './component/service/create-service/create-service.component';
import {EditServiceComponent} from './component/service/edit-service/edit-service.component';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
// import { DeleteCustomerComponent } from './component/customer/delete-customer/delete-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    ListServiceComponent,
    CreateServiceComponent,
    EditServiceComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    // DeleteCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
