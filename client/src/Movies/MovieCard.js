import React from 'react';

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;

  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      <div className='movie-director'>
        Director: <em>{director}</em>
      </div>
      <div className='movie-metascore'>
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className='movie-star'>
          {star}
        </div>
      ))}
      <div className='delete-button' onClick={e => props.deleteMovie(e, id)}>
        Delete
      </div>
    </div>
  );
};

export default MovieCard;
