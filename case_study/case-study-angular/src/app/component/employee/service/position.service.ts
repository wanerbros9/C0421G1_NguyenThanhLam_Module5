import {Injectable} from '@angular/core';
import {Position} from "../model/position";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private api_url_position = "http://localhost:3000/positions";

  constructor(private httpClient: HttpClient) {
  }

  findAllPosition(): Observable<Position[] | any> {
    return this.httpClient.get(this.api_url_position);
  }
}
