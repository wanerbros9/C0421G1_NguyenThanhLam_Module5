import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../models/car-type';
import {CarRegister} from '../models/car-register';

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  // private api_url_carRegister = 'http://localhost:3000/carRegister';
  private api_url_carRegister = 'http://localhost:8080/car/api';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<CarRegister[] | any> {
    return this.http.get(this.api_url_carRegister);
  }

  findById(id: number): Observable<CarRegister | any> {
    return this.http.get(this.api_url_carRegister + '/find/' + id);
  }

  update(id: number, carRegister: CarRegister): Observable<CarRegister | any> {
    return this.http.put(this.api_url_carRegister + '/edit', carRegister);
  }

  delete(id: number): Observable<CarRegister | any> {
    return this.http.delete(this.api_url_carRegister + '/delete/' + id);
  }

  create(newCar: CarRegister): Observable<CarRegister | any> {
    return this.http.post(this.api_url_carRegister + '/add', newCar);
  }
}
