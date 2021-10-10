import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {Position} from "../model/position";
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PositionService} from "../service/position.service";
import {DivisionService} from "../service/division.service";
import {EducationDegreeService} from "../service/education-degree.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  id: number;
  positionList: Position[];
  divisionList: Division[];
  educationDegreeList: EducationDegree[];

  employeeForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
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
  })

  constructor(private employeeService: EmployeeService,
              private position: PositionService,
              private division: DivisionService,
              private educationDegree: EducationDegreeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      // this.getEducationDegreeList();
      // this.getPositionList();
      // this.getDivisionList();
      this.getList()
      console.log(this.employee)
    });
  }

  getEmployee(index: number) {
    return this.employeeService.findById(index).subscribe(item => {
      this.employee = item;
      this.employeeForm.setValue(item);
      console.log(this.employeeForm)
    })
  }

  getList() {
    this.position.findAllPosition().subscribe(list => {
      this.positionList = list;
      console.log(list)
    });
    this.division.findAllDivision().subscribe(list => {
      this.divisionList = list;
      console.log(list);
    });
    this.educationDegree.findAllEducationDegree().subscribe(list => {
      this.educationDegreeList = list;
      console.log(list);
    });
    this.getEmployee(this.id);
  }

  // getPositionList() {
  //   this.position.findAllPosition().subscribe(list => {
  //     this.positionList = list;
  //     console.log(list)
  //     this.getEmployee(this.id);
  //   });
  // }
  //
  // getDivisionList() {
  //   this.division.findAllDivision().subscribe(list => {
  //     this.divisionList = list;
  //     console.log(list);
  //     this.getEmployee(this.id)
  //   });
  // }
  //
  // getEducationDegreeList() {
  //   this.educationDegree.findAllEducationDegree().subscribe(list => {
  //     this.educationDegreeList = list;
  //     console.log(list);
  //     this.getEmployee(this.id);
  //   });
  // }

  update(index: number) {
    const value = this.employeeForm.value;
    this.employeeService.update(index, value).subscribe(() => {
      this.router.navigateByUrl("/employee/list");
    });
  }

  ngOnInit(): void {
  }

}
