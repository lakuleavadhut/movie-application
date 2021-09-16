import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Movie } from './models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMovieList( ordering?: string, search?:string):Observable<APIResponse<Movie>> {
    let params = new HttpParams();

    // if(search) {
    //   params = new HttpParams().set('ordering' , ordering).set('search' , search);
    // }

    return this.http.get<APIResponse<Movie>>('https://wookie.codesubmit.io/movies' , {
      params: params
    })
 
  }

  searchMovieList (sort?: string, search?:string) :Observable<APIResponse<Movie>> {
     let params = new HttpParams();

    return this.http.get<APIResponse<Movie>>('https://wookie.codesubmit.io/movies?q='+sort , {
      params: params
    })

  }
}
