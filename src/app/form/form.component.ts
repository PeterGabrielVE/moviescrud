import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movies';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';



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

  id:any;
  editing:boolean = false;
  movies: Movie[];

  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
      this.editing = true;
      this.movieService.get().subscribe((data: Movie[])=>{
        this.movies = data;
        this.movie = this.movies.find( (m) =>{ return m.id == this.id });
        console.log(this.movie);
      },(error)=>{ console.log(error);});
    }else{
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveMovie(){
   // console.log(this.movie);

   if(this.editing){
    this.movieService.put(this.movie).subscribe((data)=>{ alert('Película Actualizada');
    console.log(data) },
    (error)=>{console.log(error);
    alert(error)});

   }else{
      this.movieService.save(this.movie).subscribe((data)=>{alert('Película Guardada');
    console.log(data)},
    (error)=>{console.log(error);
    alert(error)});
  }
   }
  }
