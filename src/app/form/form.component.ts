import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movies';
import { MoviesService } from '../services/movies.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  movie:Movie = {
    name: null,
    description: null,
    genere: null,
    duration: null,
    year: null
  };

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

  saveMovie(){
   // console.log(this.movie);
   this.movieService.save(this.movie).subscribe((data)=>{alert('Película Guardada');
  console.log(data)},
  (error)=>{console.log(error);
  alert(error)});
  }

}
