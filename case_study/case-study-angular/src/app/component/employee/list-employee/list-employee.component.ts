import {Component, OnInit} from '@angular/core';
import {Division} from "../division";
import {EducationDegree} from "../education-degree";
import {Position} from "../position";
import {Employee} from "../employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  divisionList: Division[] = [
    {divisionId: 1, divisionName: "Sale-Marketing"},
    {divisionId: 2, divisionName: "Administrative"},
    {divisionId: 3, divisionName: "Serve"},
    {divisionId: 4, divisionName: "Manage"}
  ]

  educationDegreeList: EducationDegree[] = [
    {educationDegreeId: 1, educationDegreeName: "Intermediate"},
    {educationDegreeId: 2, educationDegreeName: "College"},
    {educationDegreeId: 3, educationDegreeName: "University"},
    {educationDegreeId: 4, educationDegreeName: "Post Graduated"}
  ]
  positionList: Position[] = [
    {positionId: 1, positionName: "Receptionist"},
    {positionId: 2, positionName: "Serve"},
    {positionId: 3, positionName: "Expert"},
    {positionId: 4, positionName: "Monitor"},
    {positionId: 5, positionName: "Manage"},
    {positionId: 6, positionName: "Manager"}
  ]

  employeeList: Employee[] = [
    {
      employeeId: 1,
      employeeName: "Khoa",
      employeePosition: this.positionList[1],
      employeeEducationDegree: this.educationDegreeList[1],
      employeeDivision: this.divisionList[3],
      employeeBirthday: "2000-05-11",
      employeeIdCard: 201751546,
      employeeSalary: 5000,
      employeePhone: "0917657904",
      employeeEmail: "khoa@gmail.com",
      employeeAddress: "Washington"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
