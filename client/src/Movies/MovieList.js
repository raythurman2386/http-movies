import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movies, deleteMovie, setMovies }) => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response));
  }, []);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;

function MovieDetails({ movie, deleteMovie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} deleteMovie={deleteMovie} />
    </Link>
  );
}
