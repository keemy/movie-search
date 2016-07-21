import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import { RECEIVE_CONFIG, RECEIVE_MOVIE, RECEIVE_MOVIES } from '../actions'

function movies(state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies
    default:
      return state
  }
}

function currentMovie(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MOVIE:
      return action.movie
    default:
      return state
  }
}

function config(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CONFIG:
      return action.config
    default:
      return state
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  movies,
  currentMovie,
  config
})

export default rootReducer
