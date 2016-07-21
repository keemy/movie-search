import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { mySyncAction1, getMovies } from '../actions'
import Movies from '../components/Movies'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getMovies();
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
        />
      </div>
    )
  }
}

App.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    mySyncAction1: (actionData) => {
      dispatch(mySyncAction1(actionData))
    },
    getMovies: (query) => {
      dispatch(getMovies(query))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
