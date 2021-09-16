import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { APIResponse, Movie } from 'src/app/services/models';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[DetailsComponent]
})
export class HomeComponent implements OnInit {

  public sort!: string;
  movies!: Array<Movie>;

  constructor( private DetailsComponent: DetailsComponent,private httpService: HttpService , private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.httpService.getMovieList().subscribe((movieList: APIResponse<Movie>) =>{
        this.movies = movieList.movies;
        console.log(this.movies);
      })
      // if(params['movie-search']){
      //   this.searchMovies('newMovies' , params['movie-search']);
      // } else {
      //   this.searchMovies('newMovies');
      // }
    });
  }

  searchMovies( sort: string, search?:string) {
    this.httpService.getMovieList(sort, search).subscribe((movieList: APIResponse<Movie>) =>{
      this.movies = movieList.movies;
      console.log(movieList);
    })
  }

  searchMovieList(sort: string, search?: string){
    this.httpService.searchMovieList(sort, search).subscribe((movieList: APIResponse<Movie>) =>{
      this.movies = movieList.movies;
      console.log(movieList);
    })
  }

  openMovieDetails(id: string , value?: any ){
    this.router.navigate(['details', id]);
  }

}
