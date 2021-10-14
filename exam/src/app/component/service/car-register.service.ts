import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../models/car-type';
import {CarRegister} from '../models/car-register';

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  private api_url_carRegister = 'http://localhost:3000/carRegister';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<CarRegister[] | any> {
    return this.http.get(this.api_url_carRegister);
  }

  findById(id: number): Observable<CarRegister | any> {
    return this.http.get(this.api_url_carRegister + '/' + id);
  }

  update(id: number, carRegister: CarRegister): Observable<CarRegister | any> {
    return this.http.put(this.api_url_carRegister + '/' + id, carRegister);
  }

  delete(id: number): Observable<CarRegister | any> {
    return this.http.delete(this.api_url_carRegister + '/' + id);
  }
}