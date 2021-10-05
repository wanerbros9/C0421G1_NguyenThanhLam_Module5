import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../customer-type";
import {Customer} from "../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerTypeList: CustomerType[] = [
    {typeCustomerId: 1, typeCustomerName: "Diamond"},
    {typeCustomerId: 2, typeCustomerName: "Gold"},
    {typeCustomerId: 3, typeCustomerName: "Silver"},
    {typeCustomerId: 4, typeCustomerName: "Member"}
  ]

  customerList: Customer[] = [
    {
      customerId: 1,
      customerCode: "KH1291",
      customerType: this.customerTypeList[1],
      customerName: "Lam",
      customerBirthday: "16-10-1998",
      customerGender: "Male",
      customerIdCard: "201757954",
      customerPhone: "0825161098",
      customerEmail: "lam@gmail.com",
      customerAddress: "New York"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
