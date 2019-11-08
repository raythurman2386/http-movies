import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import UpdateMovie from './Movies/UpdateMovie';
import Movie from './Movies/Movie';
import AddMovie from './Movies/AddMovie';

const App = props => {
  const [movies, setMovies] = useState([]);
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const deleteMovie = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    // save the movie in case of error with api
    const removedMovie = movies.find(movie => movie.id === id);

    // make sure the user confirms delete
    if (window.confirm('Are you sure you want to delete this movie')) {
      // Set movies to the new updated list without deleted movie
      setMovies(movies.filter(movie => movie.id !== id));

      // api call to delete movie
      axios
        .delete(`http://localhost:5000/api/movies/${id}`)
        .then(res => props.history.push('/'))
        .catch(err => {
          console.log(err);
          // Re add the movie if there is an error
          setMovies([movies, removedMovie]);
        });
    }
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route
        exact
        path='/'
        render={props => (
          <MovieList
            {...props}
            movies={movies}
            setMovies={setMovies}
            deleteMovie={deleteMovie}
          />
        )}
      />
      <Route path='/add-movie' component={AddMovie} />
      <Route
        path='/movies/:id'
        render={props => {
          return (
            <Movie
              {...props}
              deleteMovie={deleteMovie}
              addToSavedList={addToSavedList}
            />
          );
        }}
      />
      <Route path='/update-movie/:id' component={UpdateMovie} />
    </>
  );
};

export default App;
