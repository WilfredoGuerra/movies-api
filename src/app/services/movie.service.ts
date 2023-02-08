import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiResponse } from 'src/interfaces/apiResponse';
import { Movie } from 'src/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL: string = 'https://www.omdbapi.com/?apikey=306adb4e'
  //kye= 306adb4e

  constructor(private http: HttpClient) { }
    getMovies(searchTerm: string): Observable<Movie[]>{
      return this.http.get<apiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
        map(response => {
          return response.Search
        })
      )
  }
}
