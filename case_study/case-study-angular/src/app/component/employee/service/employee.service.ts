import {Injectable} from '@angular/core';
import {Employee} from "../model/employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api_url_employee = "http://localhost:3000/employees";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Employee[] | any> {
    return this.httpClient.get(this.api_url_employee);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(this.api_url_employee, employee);
  }

  findByName(employeeName: String | null): Observable<Employee | any> {
    return this.httpClient.get(this.api_url_employee + "/" + employeeName)
  }

  findById(id: number): Observable<Employee | any> {
    return this.httpClient.get(this.api_url_employee + "/" + id)
  }

  update(id: number, employee: Employee): Observable<Employee | any> {
    return this.httpClient.put(this.api_url_employee + "/" + id, employee)
  }

}
