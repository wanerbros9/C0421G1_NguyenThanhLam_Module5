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
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
// import { DeleteCustomerComponent } from './component/customer/delete-customer/delete-customer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "./component/customer/delete-customer/delete-customer.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";

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
    DeleteCustomerComponent,
    EditCustomerComponent
  ],
  entryComponents: [DeleteCustomerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
