import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../models/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";

// import {CustomerTypeService} from "../service/customer-type.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer;
  customerType: CustomerType[];
  customerForm: FormGroup

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
    this.customerForm = new FormGroup({
      customerId: new FormControl("", [Validators.required]),
      customerCode: new FormControl("", [Validators.required]),
      customerType: new FormControl("", [Validators.required]),
      customerName: new FormControl("", [Validators.required]),
      customerBirthday: new FormControl("", [Validators.required]),
      customerGender: new FormControl("", [Validators.required]),
      customerIdCard: new FormControl("", [Validators.required]),
      customerPhone: new FormControl("", [Validators.required]),
      customerEmail: new FormControl("", [Validators.required]),
      customerAddress: new FormControl("", [Validators.required])
    });

    this.customerTypeService.findAllCustomerType().subscribe(next => {
      this.customerType = next;
      console.log(this.customerType);
    }, error => {

    }, () => {

    });
    console.log(this.customerType);
  }

  createCustomerReactiveForm() {
    console.log(this.customerForm)
    if (this.customerForm.valid) {
      this.customerService.createCustomer(this.customerForm.value).subscribe(next => {
        this.router.navigateByUrl("/customer/list")
      });
    }
  }

  submit(){
    const value = this.customerForm.value;
    console.log(value)
  }

  ngOnInit(): void {
  }

}
