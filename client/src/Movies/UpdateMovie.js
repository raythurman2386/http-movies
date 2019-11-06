import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = props => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  }, []);

  const handleChange = e => {
    console.log(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(data)
  };

  console.log(movie, 'update');
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => handleChange(e)} placeholder='Title' />
      <input onChange={e => handleChange(e)} placeholder='Director' />
      <input onChange={e => handleChange(e)} placeholder='Metascore' />
      <input onChange={e => handleChange(e)} placeholder='Actors' />
      <button type='submit'>Update</button>
    </form>
  );
};

export default UpdateMovie;
