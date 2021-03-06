import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./component/employee/list-employee/list-employee.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./component/customer/edit-customer/edit-customer.component";
import {EditEmployeeComponent} from "./component/employee/edit-employee/edit-employee.component";
import {CreateEmployeeComponent} from "./component/employee/create-employee/create-employee.component";
// import {DeleteCustomerComponent} from "./component/customer/delete-customer/delete-customer.component";

const routes: Routes = [
  {path: 'employee/list', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
  {path: 'employee/edit/:id', component: EditEmployeeComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/edit/:id', component: EditCustomerComponent},
  {path: '', component: ListCustomerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
