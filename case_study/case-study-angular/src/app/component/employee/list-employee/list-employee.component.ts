import {Component, OnInit} from '@angular/core';
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {Position} from "../model/position";
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }
}
