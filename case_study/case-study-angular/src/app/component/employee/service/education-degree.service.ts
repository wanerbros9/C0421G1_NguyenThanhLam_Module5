import { Injectable } from '@angular/core';
import {EducationDegree} from "../model/education-degree";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  educationDegreeList: EducationDegree[] = [
    {educationDegreeId: 1, educationDegreeName: "Intermediate"},
    {educationDegreeId: 2, educationDegreeName: "College"},
    {educationDegreeId: 3, educationDegreeName: "University"},
    {educationDegreeId: 4, educationDegreeName: "Post Graduated"}
  ];

  constructor() { }
}
