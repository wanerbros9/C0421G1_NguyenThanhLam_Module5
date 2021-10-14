import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../models/car-type';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  private api_url_carType = 'http://localhost:3000/carTypes';

  constructor(private http: HttpClient) {
  }

  findAllCarType(): Observable<CarType[] | any> {
    return this.http.get(this.api_url_carType);
  }
}
