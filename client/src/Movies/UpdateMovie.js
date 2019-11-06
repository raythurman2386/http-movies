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

  console.log(movie, 'update');
  return (
    <div>
      <h1>lorem </h1>
    </div>
  );
};

export default UpdateMovie;
