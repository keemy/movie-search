import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { mySyncAction1, getMovies } from '../actions'
import Movies from '../components/Movies'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    this.props.getMovies({});
  }

  componentWillReceiveProps(nextProps) {
  }

  handleChange() {
    this.props.mySyncAction1({});
  }

  handleRefreshClick(e) {
    e.preventDefault()

    this.props.getMovies({});
  }

  render() {
    let movies = this.props.movies
    return (
      <div>
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
    getMovies: (actionData) => {
      dispatch(getMovies(actionData))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
