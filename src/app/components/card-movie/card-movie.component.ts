import { Component, Input } from '@angular/core';
import { Movie } from 'src/interfaces/movies';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {

  @Input('movie') movie!: Movie;

  ngOnInit(): void {
  }

getImagen(){
  return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/600';
  // if(this.movie.Poster === 'N/A'){
  //   return 'https://via.placeholder.com/600';
  // }
  // else {
  //   return this.movie.Poster;
  // }
}

}
