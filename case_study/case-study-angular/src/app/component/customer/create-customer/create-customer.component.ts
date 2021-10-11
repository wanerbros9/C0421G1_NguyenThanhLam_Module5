import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../models/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";

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
      // customerId: new FormControl(""),
      customerCode: new FormControl("", [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
      customerType: new FormControl("", [Validators.required]),
      customerName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      customerBirthday: new FormControl(""),
      customerGender: new FormControl("", [Validators.required]),
      customerIdCard: new FormControl("", [Validators.required, Validators.pattern(/^([0-9]{9}|[0-9]{12})$/)]),
      customerPhone: new FormControl("", [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90)|(\(84\)\+91))[0-9]{7}$/)]),
      customerEmail: new FormControl("", [Validators.required, Validators.email]),
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
    console.log(this.customerForm.value)
    if (this.customerForm.valid) {
      this.customerService.createCustomer(this.customerForm.value).subscribe(next => {
        this.router.navigateByUrl("/customer/list");
      });
    }
  }

  validationMessage = {
    customerCode: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: '(KH-XXXX) x is number'},
    ],
    customerName: [
      {type: 'required', message: 'Not null'},
      {type: 'minlength', message: 'length must be greater than 5'},
    ],
    customerGender: [
      {type: 'required', message: 'Not null'},
    ],
    customerIdCard: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: 'Invalid, id card must contain 9 or 12 number'},
    ],
    customerPhone: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: 'Invalid, 090xxxxxxx or 091xxxxxxx'},
    ],
    customerType: [
      {type: 'required', message: 'Not null'},
    ],
    customerEmail: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: 'invalid'},
    ],
    customerAddress: [
      {type: 'required', message: 'Not null'},
    ],
  }

  ngOnInit(): void {
  }

}
