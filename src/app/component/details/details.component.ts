import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { APIResponse, Movie } from 'src/app/services/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movieId!: string;
  movie!: Movie;
  routeSub!: Subscription;
  movieData!: Movie;
  movies: any;
  movieDetail: any;
  constructor( private activatedRoute : ActivatedRoute , private httpService:HttpService) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params:Params) =>{
      this.movieId = params['id'];
      this.getMovieDetails(this.movieId);
    });
  }

  getMovieDetails(value? : any ) {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.httpService.getMovieList().subscribe((movieList: APIResponse<Movie>) =>{
        this.movies = movieList.movies;
        let index;
        this.movieDetail = this.movies.filter((el: { id: any; }) => {
          return el.id === this.movieId;
        });
        console.log(this.movieDetail);
      });
    });
  }

}
