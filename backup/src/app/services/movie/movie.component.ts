import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'tt-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less']
})
export class MovieComponent implements OnInit {

  public movies:Movie[] = [];

  constructor(public readonly movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(result=>{
      this.movies= result;
    });
  }

}
