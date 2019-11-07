import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  deleteMovie = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    // save the movie in case of error with api
    const removedMovie = this.state.movies.find(movie => movie.id === id);

    // make sure the user confirms delete
    if (window.confirm('Are you sure you want to delete this movie')) {
      // Set movies to the new updated list without deleted movie
      this.setState(this.state.movies.filter(movie => movie.id !== id));

      // api call to delete movie
      axios
        .delete(`http://localhost:5000/api/movies/${id}`)
        .then(res => console.log('User was deleted'))
        .catch(err => {
          console.log(err);
          // Re add the movie if there is an error
          this.setState([...this.state.movies, removedMovie]);
        });
    }
  };

  render() {
    return (
      <div className='movie-list'>
        {this.state.movies.map(movie => (
          <MovieDetails
            key={movie.id}
            movie={movie}
            deleteMovie={this.deleteMovie}
          />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, deleteMovie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} deleteMovie={deleteMovie} />
    </Link>
  );
}
