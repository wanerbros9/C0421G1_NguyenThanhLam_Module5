import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../models/customer-type";
import {Customer} from "../models/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  searchName: string;
  page: number = 1;
  customerName: string;

  constructor(private customerService: CustomerService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(next => {
      this.customers = next;
      console.log(this.customers);
    }, error => {

    }, () => {

    });
    console.log(this.customers);
  }

  search() {
    if (this.searchName == "") {
      this.ngOnInit();
    } else {
      this.customers = this.customers.filter(items => {
        return items.customerName.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase())
      })
    }
  }

  deleteCustomer(id: any, customerName: string) {
    let dialogRef = this.dialog.open(DeleteCustomerComponent, {data: {name: customerName}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == 'true') {
        this.customerService.delete(id).subscribe(next => {
          this.ngOnInit();
        });
      }
    });
  }

  key: string = 'id';
  reverse: boolean = true;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
