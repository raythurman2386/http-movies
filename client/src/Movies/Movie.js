import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Movie = props => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  }, [props.match.params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} deleteMovie={props.deleteMovie} />
      <div className='save-button' onClick={e => props.addToSavedList(movie)}>
        Save
      </div>
      <Link to={`/update-movie/${movie.id}`}>Update Movie</Link>
    </div>
  );
};

export default Movie;
