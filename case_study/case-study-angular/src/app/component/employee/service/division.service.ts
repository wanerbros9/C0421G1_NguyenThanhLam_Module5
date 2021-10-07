import { Injectable } from '@angular/core';
import {Division} from "../model/division";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  divisionList: Division[] = [
    {divisionId: 1, divisionName: "Sale-Marketing"},
    {divisionId: 2, divisionName: "Administrative"},
    {divisionId: 3, divisionName: "Serve"},
    {divisionId: 4, divisionName: "Manage"}
  ];

  constructor() { }
}
