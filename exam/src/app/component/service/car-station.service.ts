import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarStation} from '../models/car-station';

@Injectable({
  providedIn: 'root'
})
export class CarStationService {

  // private api_url_carStation = 'http://localhost:3000/carStation';
  private api_url_carStation = 'http://localhost:8080/carStation/api';

  constructor(private http: HttpClient) {
  }

  findAllCarStation(): Observable<CarStation[] | any> {
    return this.http.get(this.api_url_carStation);
  }

}
