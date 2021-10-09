import {Injectable} from '@angular/core';
import {EducationDegree} from "../model/education-degree";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Division} from "../model/division";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  private api_url_educationDegree = "http://localhost:3000/educationDegrees";

  constructor(private httpClient: HttpClient) {
  }

  findAllEducationDegree(): Observable<EducationDegree[] | any> {
    return this.httpClient.get(this.api_url_educationDegree);
  }
}
