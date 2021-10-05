import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './component/employee/edit-employee/edit-employee.component';
import { ListServiceComponent } from './component/service/list-service/list-service.component';
import { CreateServiceComponent } from './component/service/create-service/create-service.component';
import { EditServiceComponent } from './component/service/edit-service/edit-service.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    ListServiceComponent,
    CreateServiceComponent,
    EditServiceComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
