import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { get } from 'lodash'

import { getMovie, getConfig } from '../actions'
import MovieInfo from '../components/MovieInfo'


class Movie extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let movieId = this.props.location.pathname.split('/').pop();
    this.props.getMovie(movieId);
    this.props.getConfig();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    let currentMovie = this.props.currentMovie
    return (
      <div>
        <MovieInfo
          movie={currentMovie}
          backdropBaseUrl={this.props.baseImageUrl+"w1280"}
        />
      </div>
    )
  }
}

Movie.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    currentMovie: state.currentMovie,
    baseImageUrl: get(state.config, 'images.base_url') || 'http://image.tmdb.org/t/p/',
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    getMovie: (movieId) => {
      dispatch(getMovie(movieId))
    },
    getConfig: () => {
      dispatch(getConfig())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie))
