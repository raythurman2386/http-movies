import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  render() {
    return (
      <div className='saved-list'>
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName='saved-active'
            >
              <span className='saved-movie'>{movie.title}</span>
            </NavLink>
          );
        })}
        <div className='home-button'>
          <Link
            to='/'
            style={{
              marginRight: '15px',
              padding: '5px',
              borderRight: '1px solid #888'
            }}
          >
            Home
          </Link>
          <Link to='/add-movie'>Add</Link>
        </div>
      </div>
    );
  }
}
