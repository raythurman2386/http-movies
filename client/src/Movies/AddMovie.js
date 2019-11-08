import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = props => {
  const [movie, setMovie] = useState({
    id: Date.now(),
    title: '',
    director: '',
    metascore: '',
    stars: ''
  });

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // // Break the string of stars down to an array
    const starsArr = movie.stars.toString().split(',');
    const updatedMovie = { ...movie, stars: starsArr };
    console.log(updatedMovie);
    axios
      .post(`http://localhost:5000/api/movies`, updatedMovie)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={movie.title}
        onChange={e => handleChange(e)}
        placeholder='Title'
      />
      <input
        type='text'
        name='director'
        value={movie.director}
        placeholder='Director'
        onChange={e => handleChange(e)}
      />
      <input
        type='text'
        name='metascore'
        value={movie.metascore}
        placeholder='Metascore'
        onChange={e => handleChange(e)}
      />
      <input
        type='text'
        name='stars'
        value={movie.stars}
        placeholder='Stars'
        onChange={e => handleChange(e)}
      />
      <button type='submit'>Add Movie</button>
    </form>
  );
};

export default AddMovie;
