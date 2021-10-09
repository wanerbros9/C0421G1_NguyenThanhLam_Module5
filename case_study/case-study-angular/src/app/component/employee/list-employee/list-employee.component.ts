import {Component, OnInit} from '@angular/core';
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {Position} from "../model/position";
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
    this.employeeService.findAll().subscribe(next => {
      this.employees = next;
      console.log(this.employees);
    }, error => {

    }, () => {

    });
    console.log(this.employees)
  }

  ngOnInit(): void {
  }
}
