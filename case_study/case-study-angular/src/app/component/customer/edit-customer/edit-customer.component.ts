import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../models/customer-type";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerTypeService} from "../service/customer-type.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  id: number;
  customerTypeList: CustomerType[];
  customerGender: string

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
    customerBirthday: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: 'invalid'},
    ],
    customerEmail: [
      {type: 'required', message: 'Not null'},
      {type: 'pattern', message: 'invalid'},
    ],
    customerAddress: [
      {type: 'required', message: 'Not null'},
    ],
  }

  customerForm = new FormGroup({
    customerCode: new FormControl('', [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
    customerName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    customerGender: new FormControl('', [Validators.required]),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{9}|[0-9]{12})$/)]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern(/^(090|091|(\(84\)\+90)|(\(84\)\+91))[0-9]{7}$/)]),
    customerType: new FormControl('', [Validators.required]),
    customerBirthday: new FormControl('', [Validators.required, Validators.pattern(/^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$/)]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerType: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomerTypeList();
    });
  }

  getCustomer(index: number) {
    return this.customerService.findById(index).subscribe(item => {
      this.customer = item;
      this.customerForm.setValue(item);
    });
  }

  getCustomerTypeList() {
    this.customerType.findAllCustomerType().subscribe(list => {
      this.customerTypeList = list;
      console.log(list)
      this.getCustomer(this.id);
    })
  }

  update(index: number) {
    const value = this.customerForm.value;
    this.customerService.update(index, value).subscribe(() => {
      this.router.navigateByUrl("/customer/list");
    });
  }

  ngOnInit(): void {
  }

}
