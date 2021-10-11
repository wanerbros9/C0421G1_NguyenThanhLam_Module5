import {Component, Inject, Injector, OnInit} from '@angular/core';
import {Customer} from "../models/customer";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
  }

  ngOnInit(): void {
  }
}
