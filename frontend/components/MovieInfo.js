import React, { PropTypes, Component } from 'react'

export default class MovieInfo extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <div className='container'>
        <div className='foreground jumbotron' >
          <h2>{movie.title}</h2>
          <h3>({movie.release_date.split('-')[0]}) - {movie.vote_average}/10</h3>
          <p>{movie.overview}</p>
          {movie.homepage ?
            <p><a className='btn btn-primary btn-lg' href={movie.homepage} role='button'>Learn more</a></p> :
            ''
          }
        </div>
        <div id='bg' >
          <img
            src={movie.backdrop_path ? `${this.props.backdropBaseUrl+movie.backdrop_path}` : ''}
            alt=''
          />
        </div>
      </div>
    )
  }
}
