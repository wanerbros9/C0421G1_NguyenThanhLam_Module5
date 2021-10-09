import {Injectable} from '@angular/core';
import {Division} from "../model/division";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private api_url_division = "http://localhost:3000/divisons";

  constructor(private httpClient: HttpClient) {
  }

  findAllDivision(): Observable<Division[] | any> {
    return this.httpClient.get(this.api_url_division);
  }
}
