import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movies';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost:8000/api';
  movies: Movie[];

  constructor(private movieService: MoviesService, private httpClient: HttpClient) {
    /*httpClient.get(this.API_ENDPOINT + '/movies').subscribe((data : Movie[]) =>{
      this.movies = data;
      console.log(data);
    });*/

   this.getMovies();

  }

  getMovies(){
    this.movieService.get().subscribe((data: Movie[])=>{
      this.movies = data;}, (error)=>{ console.log(error);
                alert('Ocurrió un error');}

    );
  }

  ngOnInit() {
  }

  delete(id){
    if(confirm('¿Seguro que deseas eliminar esta pelicula?')){
      this.movieService.delete(id).subscribe((data: Movie[])=>{
        this.movies = data;
        this.getMovies();}, (error)=>{ console.log(error);
                  alert('Ocurrió un error');})
    }
}
}
