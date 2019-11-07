import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = props => {
  const [movie, setMovie] = useState({
    id: '',
    title: '',
    director: '',
    metascore: undefined,
    stars: undefined
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  }, [props.match.params.id]);

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const starsArr = movie.stars.split(',');
    console.log(starsArr);
    setMovie({ ...movie, stars: starsArr });
    console.log(movie, 'updated movie');
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
        type='number'
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
      <button type='submit'>Update</button>
    </form>
  );
};

export default UpdateMovie;
