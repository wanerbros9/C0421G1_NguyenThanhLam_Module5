import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../models/customer-type";
import {Customer} from "../models/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerService.findAll().subscribe(next => {
      this.customers = next;
      console.log(this.customers);
    }, error => {

    }, () => {

    });
    console.log(this.customers);


  }

  ngOnInit(): void {
  }
}
