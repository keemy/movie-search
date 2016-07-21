import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';

export default class Movies extends Component {
  render() {
    return (
      <div id='columns'>
        {this.props.movies.map((movie, i) => {
          // went with i as key so images were less jumpy
          return (
            <div className = 'pin' key={i}>
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
