import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private api_url_movie = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  findAllMovies(): Observable<Movie[] | any> {
    return this.http.get(this.api_url_movie);
  }
}


