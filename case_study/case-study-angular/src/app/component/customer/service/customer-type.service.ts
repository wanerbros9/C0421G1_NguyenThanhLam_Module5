import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {CustomerType} from "../models/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private api_url_customerType = "http://localhost:3000/customerTypes";

  constructor(private httpClient: HttpClient) {
  }

  findAllCustomerType(): Observable<CustomerType[] | any> {
    return this.httpClient.get(this.api_url_customerType);
  }
}
