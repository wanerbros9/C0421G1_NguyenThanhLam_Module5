import {EducationDegree} from "./education-degree";
import {Division} from "./division";
import {Position} from "./position";

export interface Employee {
  employeeId: number;
  employeeName: string;
  employeePosition: Position
  employeeEducationDegree: EducationDegree;
  employeeDivision: Division;
  employeeBirthday: string;
  employeeIdCard: number;
  employeeSalary: number;
  employeePhone: string;
  employeeEmail: string;
  employeeAddress: string;
}
