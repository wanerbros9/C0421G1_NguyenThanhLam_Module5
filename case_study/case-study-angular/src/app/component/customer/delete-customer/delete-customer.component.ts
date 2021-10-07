import {Component, OnInit} from '@angular/core';
import {Customer} from "../models/customer";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const name = paramMap.get("id");
      console.log(name);
      customerService.findByName(name).subscribe(next => {
        console.log(next)
        this.customer = next[0];
      })
    })
  }

  ngOnInit(): void {
  }

}
