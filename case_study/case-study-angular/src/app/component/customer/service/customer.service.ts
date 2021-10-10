import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {EmployeeService} from "../../employee/service/employee.service";
import {Employee} from "../../employee/model/employee";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api_url_customer = "http://localhost:3000/customers";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[] | any> {
    return this.httpClient.get(this.api_url_customer);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(this.api_url_customer, customer);
  }

  findByName(customerName: String | null): Observable<Customer | any> {
    return this.httpClient.get(this.api_url_customer + "/" + customerName)
  }

  findById(id: number): Observable<Customer | any> {
    return this.httpClient.get(this.api_url_customer + "/" + id)
  }

  update(id: number, customer: Customer): Observable<Customer | any> {
    return this.httpClient.put(this.api_url_customer + "/" + id, customer)
  }

  searchByName(customerName: String | null): Observable<Customer | any> {
    return this.httpClient.get(this.api_url_customer + "?q" + customerName)
  }

}
