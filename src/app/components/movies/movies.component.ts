import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/interfaces/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: Movie[] = [];
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef
  movies$!: Observable<Movie[]>

  constructor( private movieService: MovieService ){}

  ngOnInit(): void {
    this.movies$ = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm
      }),
      filter((searchTerm: string) => searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string) => this.movieService.getMovies(searchTerm)),
    )
    
  }


  // getMovies(searchTerm: string) {
       
  //   this.movieService.getMovies(searchTerm).subscribe(movies =>{
  //     console.log(movies);
  //     this.movies = movies !== undefined ? movies : [];
            
  //   })
  // }

}
