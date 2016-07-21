import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';

export default class Movies extends Component {
  render() {
    return (
      <div id='columns'>
        {this.props.movies.map((movie, i) => {
          console.log(movie.poster_path );
          return (
            <div
              className = 'pin'
              key={i}
            >
              <Link to={`movie/${movie.id}`}>
                {movie.poster_path ?
                  <img
                    src={this.props.baseImageUrl+movie.poster_path}
                    alt={movie.title}
                  /> :
                  <div>{movie.title}</div>
                }
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}
