import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';
import { MoviesMock } from './movies-mock';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies():Observable<Movie[]>{
    return of(MoviesMock.list);
  }
}
