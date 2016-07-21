import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import { getMovies, getConfig } from '../actions'
import Movies from '../components/Movies'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getMovies();
    this.props.getConfig();
  }

  componentWillReceiveProps(nextProps) {
  }

  handleChange(event) {
    let query = event.target.value;
    this.props.getMovies(query);
  }

  render() {
    let movies = this.props.movies
    return (
      <div>
        <input
          type='text'
          onChange={this.handleChange}
        />
        <Movies
          movies={movies}
          baseImageUrl={this.props.baseImageUrl+"w500"}
        />
      </div>
    )
  }
}

App.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies,
    baseImageUrl: get(state.config, 'images.base_url') || 'http://image.tmdb.org/t/p/',
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    getMovies: (query) => {
      dispatch(getMovies(query))
    },
    getConfig: () => {
      dispatch(getConfig())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
