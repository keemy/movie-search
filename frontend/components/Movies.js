import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';

export default class Movies extends Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((movie, i) => {
          return (
            <li key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}
