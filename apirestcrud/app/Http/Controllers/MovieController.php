<?php

namespace App\Http\Controllers;

use App\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::get();
        echo json_encode($movies);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //print_r($request->all());
        $movie = new \App\Movie;
        $movie->name = $request->get('name');
        $movie->description = $request->get('description');
        $movie->year= $request->get('year');
        $movie->genere = $request->get('genere');
        $movie->duration = $request->get('duration');
        $movie->save();
        echo json_encode($movie);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Movie  $movie_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $movie_id)
    {
        $movie = \App\Movie::find($movie_id);
        $movie->name = $request->get('name');
        $movie->description = $request->get('description');
        $movie->year= $request->get('year');
        $movie->genere = $request->get('genere');
        $movie->duration = $request->get('duration');
        $movie->save();
        echo json_encode($movie);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movie  $movie_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($movie_id)
    {
        $movie = \App\Movie::find($movie_id);
        $movie->delete();
    }
}
