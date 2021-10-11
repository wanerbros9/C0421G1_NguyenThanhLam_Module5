import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';
import {ShowTime} from '../models/show-time';

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  private api_url_showtime = 'http://localhost:3000/showtime';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<ShowTime[] | any> {
    return this.http.get(this.api_url_showtime);
  }

  createShowTime(showTime: ShowTime): Observable<any> {
    return this.http.post(this.api_url_showtime, showTime);
  }

  deleteShowTime(id: number): Observable<ShowTime | any> {
    return this.http.delete(this.api_url_showtime + '/' + id);
  }
}
