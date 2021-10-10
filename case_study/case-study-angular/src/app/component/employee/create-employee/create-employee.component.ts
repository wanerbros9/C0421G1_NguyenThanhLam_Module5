import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EducationDegree} from "../model/education-degree";
import {Division} from "../model/division";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {PositionService} from "../service/position.service";
import {EducationDegreeService} from "../service/education-degree.service";
import {Route, Router} from "@angular/router";
import {DivisionService} from "../service/division.service";
import {Position} from "../model/position";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee;
  position: Position[];
  educationDegree: EducationDegree[];
  division: Division[];
  employeeForm: FormGroup

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private educationDegreeService: EducationDegreeService,
              private router: Router) {
    this.employeeForm = new FormGroup({
      employeeId: new FormControl('', [Validators.required]),
      employeeName: new FormControl('', [Validators.required]),
      employeeBirthday: new FormControl('', [Validators.required]),
      employeeIdCard: new FormControl('', [Validators.required]),
      employeeSalary: new FormControl('', [Validators.required]),
      employeePhone: new FormControl('', [Validators.required]),
      employeeEmail: new FormControl('', [Validators.required]),
      employeeAddress: new FormControl('', [Validators.required]),
      employeePosition: new FormControl('', [Validators.required]),
      employeeEducationDegree: new FormControl('', [Validators.required]),
      employeeDivision: new FormControl('', [Validators.required]),
    });

    this.positionService.findAllPosition().subscribe(next => {
      this.position = next;
      console.log(this.position);
    }, error => {

    }, () => {

    });
    console.log(this.position);

    this.divisionService.findAllDivision().subscribe(next => {
      this.division = next;
      console.log(this.division);
    }, error => {

    }, () => {

    });
    console.log(this.division);

    this.educationDegreeService.findAllEducationDegree().subscribe(next => {
      this.educationDegree = next;
      console.log(this.educationDegree);
    }, error => {

    }, () => {

    });
    console.log(this.educationDegree);
  }

  createEmployeeReactiveForm() {
    console.log(this.employeeForm)
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(next => {
        this.router.navigateByUrl("/employee/list")
      });
    }
  }

  submit() {
    const value = this.employeeForm.value;
    console.log(value);
  }


  ngOnInit(): void {
  }

}
